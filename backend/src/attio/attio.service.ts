import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Attio } from 'attio-js';

@Injectable()
export class AttioService {
    private client: Attio | null = null;
    private readonly logger = new Logger(AttioService.name);

    constructor(private configService: ConfigService) {
        const token = this.configService.get<string>('ATTIO_API_KEY');
        if (token) {
            this.client = new Attio({ apiKey: token });
            this.logger.log('Attio client initialized');
        } else {
            this.logger.warn('ATTIO_API_KEY not found. Using mock data.');
        }
    }

    async getLenders(criteria?: string): Promise<any[]> {
        if (!this.client) {
            return this.getMockLenders();
        }

        try {
            // Fetch records from 'lenders' object using Attio API
            // The attio-js package uses records.query() method
            const response = await this.client.records.query({
                object: 'lenders',
            });

            // Filter for test records and map to our format
            const lenders = response.data
                .filter(record => this.getAttributeValue(record.attributes, 'is_test_object') === 'Yes')
                .map(record => ({
                    id: record.id.record_id,
                    name: this.getAttributeValue(record.attributes, 'lender_name'),
                    focus_industries: this.getAttributeValue(record.attributes, 'test_focus_industries'),
                    loan_size_requirements: this.getAttributeValue(record.attributes, 'test_loan_size_requirements'),
                    debt_products: this.getAttributeValue(record.attributes, 'test_focus_debt_products'),
                    description: this.getAttributeValue(record.attributes, 'test_focus_debt_use_cases'),
                    arr_requirements: this.getAttributeValue(record.attributes, 'test_arr_requirements'),
                    ltm_revenue_requirements: this.getAttributeValue(record.attributes, 'test_ltm_revenue_requirements'),
                    geographies: this.getAttributeValue(record.attributes, 'test_focus_geographies'),
                    fit: 0 // Will be calculated by agent
                }));

            this.logger.log(`Fetched ${lenders.length} lenders from Attio`);
            return lenders.length > 0 ? lenders : this.getMockLenders();
        } catch (error) {
            this.logger.error(`Error fetching lenders: ${error.message}`, error.stack);
            return this.getMockLenders();
        }
    }

    async findBorrower(name: string): Promise<any> {
        if (!this.client) {
            return this.getMockBorrower(name);
        }

        try {
            const response = await this.client.records.query({
                object: 'companies',
            });

            // Filter for matching name and test status
            const record = response.data.find(r => {
                const rName = this.getAttributeValue(r.attributes, 'name');
                const isTest = this.getAttributeValue(r.attributes, 'is_test_object') === 'Yes';
                return isTest && (rName?.toLowerCase().includes(name.toLowerCase()) || name === '');
            });

            if (!record) {
                this.logger.warn(`Borrower not found: ${name}, using mock data`);
                return this.getMockBorrower(name);
            }

            const borrower = {
                id: record.id.record_id,
                name: this.getAttributeValue(record.attributes, 'name'),
                industry: this.getAttributeValue(record.attributes, 'industry'),
                description: this.getAttributeValue(record.attributes, 'description'),
                location: this.getAttributeValue(record.attributes, 'location'),
                loanAmount: this.getAttributeValue(record.attributes, 'test_loan_amount'),
                projectType: this.getAttributeValue(record.attributes, 'project_type'),
                // Additional fields for growth financing
                arr: this.getAttributeValue(record.attributes, 'arr'),
                mrr: this.getAttributeValue(record.attributes, 'mrr'),
                growthRate: this.getAttributeValue(record.attributes, 'growth_rate'),
                employees: this.getAttributeValue(record.attributes, 'employees'),
                customers: this.getAttributeValue(record.attributes, 'customers'),
            };

            this.logger.log(`Found borrower: ${borrower.name} from Attio`);
            return borrower;
        } catch (error) {
            this.logger.error(`Error finding borrower: ${error.message}`, error.stack);
            return this.getMockBorrower(name);
        }
    }

    private getAttributeValue(attributes: any, slug: string): any {
        const attr = attributes[slug];
        if (!attr || !attr.length) return null;

        const valueObj = attr[0];
        if (valueObj.attribute_type === 'text' || valueObj.attribute_type === 'timestamp') {
            return valueObj.value;
        }
        if (valueObj.attribute_type === 'select') {
            return valueObj.option?.title;
        }
        if (valueObj.attribute_type === 'status') {
            return valueObj.status?.title;
        }
        return valueObj.value;
    }

    private getMockLenders() {
        return [
            {
                id: 'lender_1',
                name: 'Hercules Capital',
                focus_industries: 'Technology, Biotechnology, Healthcare',
                loan_size_min: 10000000,
                loan_size_max: 250000000,
                debt_products: 'Venture Debt, Term Loans',
                description: 'Leading venture debt provider for high-growth companies.'
            },
            {
                id: 'lender_2',
                name: 'Sillicon Valley Bank',
                focus_industries: 'Technology, Software, Fintech',
                loan_size_min: 1000000,
                loan_size_max: 50000000,
                debt_products: 'Revolving Line of Credit, Term Loans',
                description: 'Banking partner for the innovation economy.'
            },
            {
                id: 'lender_3',
                name: 'Venture Growth Partners',
                focus_industries: 'SaaS, Enterprise Software',
                loan_size_min: 2000000,
                loan_size_max: 20000000,
                debt_products: 'Recurring Revenue Financing',
                description: 'Non-dilutive capital for SaaS.'
            }
        ];
    }

    private getMockBorrower(name: string) {
        return {
            name: name || 'Acme Corp Real Estate',
            industry: 'Real Estate / PropTech',
            description: 'Developing mixed-use properties in urban centers.',
            location: 'Austin, TX',
            loanAmount: 5000000,
            projectType: 'Marketplace Debt Raise'
        };
    }
}
