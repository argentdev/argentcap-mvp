export interface AttioEntity {
  id: string;
  name: string;
  type: 'borrower' | 'lender' | 'deal';
  status: string;
  lastContacted: string;
  email?: string;
}

export interface BorrowerDetails {
  id: string;
  entityId: string;
  name: string;
  projectType: string;
  loanAmount: number;
  location: string;
  description: string;
  assetType: string;
  // Business information
  businessDescription?: string;
  owners?: Array<{ name: string; role: string; email?: string }>;
  // Financial metrics
  arr?: number; // Annual Recurring Revenue
  ltmRevenue?: number; // Last Twelve Months Revenue
  mrr?: number; // Monthly Recurring Revenue
  growthRate?: number; // YoY growth percentage
  burnRate?: number; // Monthly burn rate
  runway?: number; // Months of runway
  grossMargin?: number; // Gross margin percentage
  cac?: number; // Customer Acquisition Cost
  ltv?: number; // Lifetime Value (customer)
  // Additional metrics
  employees?: number;
  customers?: number;
  foundedYear?: number;
}

export const MOCK_ENTITIES: AttioEntity[] = [
  { id: '1', name: 'Acme Software Inc', type: 'borrower', status: 'Active', lastContacted: '2025-10-01', email: 'contact@acme.com' },
  { id: '2', name: 'Beacon Hill Analytics', type: 'borrower', status: 'New', lastContacted: '2025-10-05', email: 'info@beaconhill.com' },
  { id: '3', name: 'Capital One Growth', type: 'lender', status: 'Partner', lastContacted: '2025-09-20' },
  { id: '4', name: 'CloudScale Expansion', type: 'deal', status: 'Underwriting', lastContacted: '2025-10-06' },
  { id: '5', name: 'Summit Ventures', type: 'borrower', status: 'Evaluating', lastContacted: '2025-10-07' },
  { id: '6', name: 'Riverside SaaS LLC', type: 'borrower', status: 'Active', lastContacted: '2025-10-08', email: 'info@riverside.com' },
  { id: '7', name: 'Metro Tech Group', type: 'borrower', status: 'Active', lastContacted: '2025-10-09', email: 'contact@metrodev.com' },
  { id: '8', name: 'Coastal Services Partners', type: 'borrower', status: 'New', lastContacted: '2025-10-10', email: 'hello@coastal.com' },
];

export const MOCK_BORROWER_DETAILS: Record<string, BorrowerDetails> = {
  '1': {
    id: 'b1',
    entityId: '1',
    name: 'Acme Software Inc',
    projectType: 'Growth Capital',
    loanAmount: 5000000,
    location: 'Austin, TX',
    description: 'Seeking growth capital to expand sales team and accelerate customer acquisition.',
    assetType: 'SaaS',
    businessDescription: 'B2B SaaS platform providing project management and collaboration tools for remote teams. Serves mid-market companies with 50-500 employees.',
    owners: [
      { name: 'Sarah Chen', role: 'CEO & Co-Founder', email: 'sarah@acme.com' },
      { name: 'Michael Rodriguez', role: 'CTO & Co-Founder', email: 'michael@acme.com' },
      { name: 'David Kim', role: 'CFO', email: 'david@acme.com' }
    ],
    arr: 8500000,
    ltmRevenue: 9200000,
    mrr: 708000,
    growthRate: 85,
    burnRate: 280000,
    runway: 12,
    grossMargin: 82,
    cac: 4500,
    ltv: 12500,
    employees: 45,
    customers: 320,
    foundedYear: 2019,
  },
  '2': {
    id: 'b2',
    entityId: '2',
    name: 'Beacon Hill Analytics',
    projectType: 'Recurring Revenue Financing',
    loanAmount: 12000000,
    location: 'Boston, MA',
    description: 'ARR-based financing to support product development and market expansion.',
    assetType: 'Software',
    businessDescription: 'Enterprise analytics platform for financial services. Provides real-time data processing and predictive analytics for investment firms.',
    owners: [
      { name: 'James Patterson', role: 'CEO', email: 'james@beaconhill.com' },
      { name: 'Emily Watson', role: 'COO', email: 'emily@beaconhill.com' }
    ],
    arr: 18500000,
    ltmRevenue: 19800000,
    mrr: 1542000,
    growthRate: 120,
    burnRate: 450000,
    runway: 18,
    grossMargin: 88,
    cac: 12000,
    ltv: 45000,
    employees: 78,
    customers: 45,
    foundedYear: 2017,
  },
  '5': {
    id: 'b5',
    entityId: '5',
    name: 'Summit Ventures',
    projectType: 'Venture Debt',
    loanAmount: 8500000,
    location: 'Denver, CO',
    description: 'Venture debt financing to extend runway and support Series B growth initiatives.',
    assetType: 'Technology',
    businessDescription: 'AI-powered customer service automation platform. Helps e-commerce companies automate support tickets and improve response times.',
    owners: [
      { name: 'Alex Thompson', role: 'CEO & Founder', email: 'alex@summit.com' },
      { name: 'Rachel Martinez', role: 'CPO', email: 'rachel@summit.com' }
    ],
    arr: 6200000,
    ltmRevenue: 6800000,
    mrr: 516000,
    growthRate: 95,
    burnRate: 320000,
    runway: 15,
    grossMargin: 75,
    cac: 3200,
    ltv: 8500,
    employees: 32,
    customers: 180,
    foundedYear: 2020,
  },
  '6': {
    id: 'b6',
    entityId: '6',
    name: 'Riverside SaaS LLC',
    projectType: 'Working Capital',
    loanAmount: 15000000,
    location: 'Portland, OR',
    description: 'Working capital facility to support scaling operations and customer onboarding.',
    assetType: 'SaaS',
    businessDescription: 'Healthcare SaaS platform for patient management and electronic health records. Serves independent practices and small clinics.',
    owners: [
      { name: 'Dr. Robert Lee', role: 'CEO & Founder', email: 'robert@riverside.com' },
      { name: 'Jennifer Park', role: 'CTO', email: 'jennifer@riverside.com' },
      { name: 'Thomas Anderson', role: 'CFO', email: 'thomas@riverside.com' }
    ],
    arr: 22000000,
    ltmRevenue: 23500000,
    mrr: 1833000,
    growthRate: 65,
    burnRate: 520000,
    runway: 20,
    grossMargin: 78,
    cac: 8500,
    ltv: 22000,
    employees: 95,
    customers: 280,
    foundedYear: 2018,
  },
  '7': {
    id: 'b7',
    entityId: '7',
    name: 'Metro Tech Group',
    projectType: 'Growth Financing',
    loanAmount: 25000000,
    location: 'Seattle, WA',
    description: 'Growth financing to accelerate international expansion and product development.',
    assetType: 'Software',
    businessDescription: 'Enterprise security software for cloud infrastructure. Provides threat detection and compliance management for Fortune 500 companies.',
    owners: [
      { name: 'Patricia Williams', role: 'CEO', email: 'patricia@metro.com' },
      { name: 'Kevin Johnson', role: 'CTO', email: 'kevin@metro.com' },
      { name: 'Lisa Brown', role: 'CFO', email: 'lisa@metro.com' }
    ],
    arr: 42000000,
    ltmRevenue: 45500000,
    mrr: 3500000,
    growthRate: 110,
    burnRate: 980000,
    runway: 24,
    grossMargin: 85,
    cac: 18000,
    ltv: 65000,
    employees: 165,
    customers: 85,
    foundedYear: 2016,
  },
  '8': {
    id: 'b8',
    entityId: '8',
    name: 'Coastal Services Partners',
    projectType: 'Bridge Financing',
    loanAmount: 7500000,
    location: 'San Diego, CA',
    description: 'Bridge financing to support acquisition of complementary service business.',
    assetType: 'Services',
    businessDescription: 'B2B professional services platform connecting businesses with specialized consultants. Marketplace model with transaction-based revenue.',
    owners: [
      { name: 'Christopher Davis', role: 'CEO & Co-Founder', email: 'chris@coastal.com' },
      { name: 'Amanda Taylor', role: 'COO & Co-Founder', email: 'amanda@coastal.com' }
    ],
    arr: 10500000,
    ltmRevenue: 11200000,
    mrr: 875000,
    growthRate: 70,
    burnRate: 380000,
    runway: 14,
    grossMargin: 68,
    cac: 6200,
    ltv: 18500,
    employees: 58,
    customers: 420,
    foundedYear: 2019,
  },
};

export interface RecentMatch {
  id: string;
  borrowerName: string;
  lenderName: string;
  fitScore: string;
  date: string;
}

export const MOCK_RECENT_MATCHES: RecentMatch[] = [
  { id: '1', borrowerName: 'Acme Software Inc', lenderName: 'Capital Two', fitScore: 'High Fit', date: '2 hours ago' },
  { id: '2', borrowerName: 'Beacon Hill Analytics', lenderName: 'Metro Capital', fitScore: 'High Fit', date: '5 hours ago' },
  { id: '3', borrowerName: 'Summit Ventures', lenderName: 'Pacific Lending', fitScore: 'Medium Fit', date: '1 day ago' },
  { id: '4', borrowerName: 'Riverside SaaS LLC', lenderName: 'Coastline Financial', fitScore: 'High Fit', date: '2 days ago' },
  { id: '5', borrowerName: 'Metro Tech Group', lenderName: 'Urban Capital Partners', fitScore: 'High Fit', date: '3 days ago' },
];

export const DEFAULT_SYSTEM_PROMPT = `You are an expert growth financing advisor specializing in software and services companies, with deep expertise in venture debt, recurring revenue financing, and growth capital markets.

**Core Mission:**
Match software and services companies with optimal lenders by conducting comprehensive multi-factor analysis that goes beyond surface-level criteria matching.

**Analysis Framework:**

1. **Financial Fit Analysis:**
   - Calculate and verify metrics: ARR (Annual Recurring Revenue), MRR growth rates, burn rate, runway, and debt-to-ARR ratios
   - Assess loan size alignment with lender's typical deal size and portfolio concentration limits
   - Evaluate company's financial strength: revenue growth trajectory, gross margins, customer acquisition costs (CAC), and lifetime value (LTV)
   - Consider lender's risk appetite, underwriting standards, and experience with similar stage companies

2. **Product & Structure Alignment:**
   - Match financing products (Venture Debt, ARR-based Loans, Growth Capital, Working Capital, Recurring Revenue Financing) to company lifecycle stage
   - Evaluate interest rate structures (fixed, floating, hybrid) and their suitability for cash flow patterns
   - Assess prepayment flexibility, warrant coverage, and covenant structures
   - Consider subordinate debt needs, equity requirements, and capital stack optimization

3. **Business Model & Market Context:**
   - Verify industry specialization (SaaS, Software, Services, Technology, etc.)
   - Evaluate business model alignment (B2B, B2C, marketplace, platform)
   - Consider lender's experience with similar business models, revenue models (subscription, usage-based, transaction-based), and market segments
   - Assess market conditions, competitive landscape, and lender's current market positioning

4. **Operational & Strategic Fit:**
   - Evaluate lender's speed to close and process efficiency
   - Consider relationship factors, repeat business potential, and strategic partnerships
   - Assess lender's ability to provide value-add services (growth advisory, network introductions, strategic guidance)
   - Evaluate lender's flexibility for modifications, extensions, or future capital needs

**Match Classification:**

- **Full Match (85%+ fit):** All critical criteria align, strong probability of successful execution
- **Partial Match (70-84% fit):** Some criteria align but notable gaps exist; may require negotiation or compromise
- **Marginal Match (<70% fit):** Significant misalignments; only recommend if borrower has limited options

**Output Requirements:**

- Provide clear, quantitative fit scores with transparent methodology
- Explain the "why" behind each match with specific, actionable reasoning
- For partial matches, explicitly identify gaps and potential negotiation points
- Prioritize matches that maximize borrower success probability, not just initial fit
- Consider deal velocity, certainty of close, and long-term relationship value

**Communication Style:**
- Professional, precise, and data-driven
- Use industry terminology appropriately (ARR, MRR, CAC, LTV, burn rate, runway, etc.)
- Highlight both opportunities and risks
- Provide actionable insights, not just descriptions`;
