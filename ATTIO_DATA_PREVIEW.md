# Attio Data Preview

## Object Types
| API Slug | Singular Noun |
|---|---|
| `companies` | Company |
| `brokers` | Broker |
| `deals` | Deal |
| `people` | Person |
| `users` | User |
| `projects` | Project |
| `workspaces` | Workspace |
| `transactions` | Transaction |
| `lenders` | Lender |
| `clients` | Client |

## Sample Lenders
### Lender 1
- **ID**: `0274bf6d-8e6f-5f37-89de-42ba676186fd`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0274bf6d-8e6f-5f37-89de-42ba676186fd",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.352000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 16",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "1f3e1ab0-49b9-52ad-ae6c-ae813dad0c5e",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Commercial Products & Services, Consumer Goods & Services, Healthcare, Pharma & Biotech, Software, Transportation",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Equipment financing for hyper growth, preserving cash and financial flexibility, extending runway for R&D and technology development",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Lease Financing, Equipment Leasing, Sale Leaseback",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$250K - $25M in asset value",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Camber Road",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 2
- **ID**: `0439db0d-212b-4c6c-8e75-a4df15f51184`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0439db0d-212b-4c6c-8e75-a4df15f51184",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:43:09.325000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 8",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "7224db10-c2aa-40c7-b505-5d70afd4a784",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Healthcare, Enterprise Applications, Vertical SaaS, Consumer, FinTech, High Tech",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Canada, United Kingdom",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">=$5M ARR",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M+",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Accelerating growth, extending funding runway, reducing cost of capital, minimizing dilution, organic growth and strategic acquisitions",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt, Lines of Credit, Term Loans, Recurring Revenue Loans, Tax Credit Financing (SRED), SaaS Lending, Mezzanine Debt, Unitranche Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0.5X - 2X ARR \n$5M - $40M facility size dependent on revenue quality and sposorship quality and growth",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Espresso",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 3
- **ID**: `06c31343-6b88-41ef-aca5-5d09cb39762c`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "06c31343-6b88-41ef-aca5-5d09cb39762c",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:44:48.088000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 12",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "7793c19c-e9e5-484e-9f96-85289dbb9f4b",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Biotechnology, Life Sciences, Healthcare, Renewable Energy",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">=$20M ARR; will do pre-revenue on meaningful equity injection",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Accelerating hiring, commercialization into new markets, reducing shareholder dilution, equipment purchase, balance sheet strengthening before IPO or M&A, clinical development, in-licensing/acquiring products, manufacturing infrastructure investment, pre-IPO financing, strategic and IP acquisition financings, extending cash runway",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Senior Secured Venture Growth Loans, Structured Debt with Warrants, Senior Debt, Equity Investments, Equipment Leasing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M-$250M (Borrowing base against ARR (1X in year one, 0.8X in year 2 to incentivize growth)\n\n1x GP sizing on Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:46:19.791000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Hercules",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 4
- **ID**: `082dfbea-81b8-4e70-a6a3-79057a3564fe`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "082dfbea-81b8-4e70-a6a3-79057a3564fe",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:47:53.817000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 9",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "9e6472c6-21d2-48df-b9f0-2a162da9281f",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Aerospace, Apparel/Textiles, Business Services, Consumer Products, Education, Franchising, Healthcare Services, Information Services, Information Technology, Internet Software and Services, Leisure, Marketing, Retail, Software, Staffing",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M+ (for SaaS); OR $2M+ EBITDA",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M+",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "M&A, refinancing, working capital, acquisition/expansion financing, buyouts (LBO, MBO, MBI), recapitalization",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2nd Lien, Subordinated Debt, Structured Capital, Equity Co-Investment, First Out/Last Out, Mezzanine Capital",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M - $50M (1x-1.5X ARR or \n30%-50% of EV)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:49:29.876000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Boathouse Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 5
- **ID**: `0cf1fb03-ea4c-429f-b4eb-1bec9863d44f`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0cf1fb03-ea4c-429f-b4eb-1bec9863d44f",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:51:44.891000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:10:51.804000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 10 - ABL",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "c2c4456e-5943-4c44-b202-ed3fc0dcb105",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Construction and Building Materials, Business Services, Plastics & Rubber, Advertising, Capital Equipment, Education, Aerospace & Defense, Telecommunications, Financial Services, Hotel, Gaming, Leisure, Restaurants, Environmental Industries, Healthcare and Pharmaceuticals, High Tech Industries, Beverages, Food and Tobacco, Manufacturing, Media, Printing and Publishing, Retail, Wholesale, Consumer Products, Energy",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Canada, Europe",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Leveraged buyouts, acquisitions, recapitalizations, growth capital, refinancing, working capital management",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "First Lien Secured Loans, Stretch Senior Loans, Unitranche Loans, Second Lien Secured Loans, Senior Secured Loans, Asset-Based Loans, ARR Loans, Mezzanine, Unsecured Debt, Subordinated Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "95% advance against A/R and 85% NOLV on Inventory (typically wouldn't have a CF TL on top at this point) \n\n1X-1.5X of EBITDA for a TL on top of ABL\n\nMinimum sizing is $10M",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:14:49.717000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "MidCap (ABL)",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 6
- **ID**: `0d8675d9-4a71-4d3e-bd43-b4e7d7c34574`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T14:36:40.025000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0d8675d9-4a71-4d3e-bd43-b4e7d7c34574",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T14:36:40.025000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T14:35:52.189000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T14:36:40.025000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T14:48:01.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 7",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T14:36:40.025000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "2f6b0c6d-6343-41e5-af58-341d72921ddc",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:14:06.450000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:06:17.475000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "B2B Software/SaaS, CPG (Consumer Packaged Goods) software",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:06:54.049000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:07:03.389000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$4M - $30M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:07:12.923000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital without dilution or onerous governance, no personal guarantees, expansion plans",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:07:21.497000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Flexible Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:20:09.466000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Recurring Capital Partners",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 7
- **ID**: `0e9113bc-e97b-496e-8f14-efb54862a2d7`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0e9113bc-e97b-496e-8f14-efb54862a2d7",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:55:12.736000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 13",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "e9eaa605-9354-4498-9f81-a9edbd009aa6",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Business Services, Healthcare, Industrial Services, Payment Processing, Media, Software & Technology, Security, Specialty Finance, Consumer, Education & Edtech, Energy Infrastructure & Renewables, Manufacturing, Real Estate, Gaming, Transport Infrastructure & Services, Aerospace and Defense",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "North America, Europe, Asia",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$7M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital, bridge financing, acquisition financing, tailored financing for sponsor and non-sponsor backed companies",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Senior Secured Loans, Unitranche, Second-Lien, Private Credit, Structured Equity, Hybrid Structures, NAV Finance, Real Estate Lending",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$15M up to $100M, up to 3X ARR",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Crestline",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 8
- **ID**: `13554a64-df53-5956-af80-56390cfa81a6`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "13554a64-df53-5956-af80-56390cfa81a6",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.308000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 24",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "a2debd5a-ef2e-57b5-ba68-b985d57b1ebf",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Biotechnology, Medical Devices, Internet, Enterprise Software, Semiconductors, Enterprise Hardware, Wireless, eCommerce, Aerospace, Climate, Consumer, Education, Environment, Fintech, Food, Hardware, Health, Hospitality, Infrastructure, Insurance, Materials, Media and Gaming, Real Estate, Social, Transportation, Workforce",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (primary), Canada, Global - Europe, Latin America, Middle East, Oceania, Asia, Africa",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$1M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Minimizing dilution, growth capital from seed stage through public listing, extending runway",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt, Debt and Lease Financing, Acquisition Financing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.635000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Min $1M, max of 5X-8X MRR. Typically 50% of cash but up to 1X cahs on new equity if really strong\n\nTop out at $50M",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "WTI",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 9
- **ID**: `17b1e438-8c3f-4ac7-b918-4b90cd1dafd5`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "17b1e438-8c3f-4ac7-b918-4b90cd1dafd5",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:41:42.369000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 14",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "665963ed-e711-4a7e-bc40-5a149e081cd0",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SaaS, Fintech, Enterprise Tech, Edtech, AI, Machine Learning, Biotech & Biopharma, Medical Devices, Internet Retail, Financial Services",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$25M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "~$50M avg",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway, fueling growth, refinancing existing debt, funding acquisitions, supplement or alternative to venture equity financing",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Senior Secured Term Loans, Venture Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$25M-$75M with flex (LTV of 20%-30%)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Runway",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 10
- **ID**: `2851df19-86d6-4452-ab4f-2009a22ffc87`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2851df19-86d6-4452-ab4f-2009a22ffc87",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:39:48.388000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 4",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "5b99f959-cac8-47e7-b0dc-e9e4956f0d63",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SaaS, Subscription AI Applications",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">= $3M ARR unless growing quickly",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth financing for bootstrapped SaaS companies with $3M-$20M ARR, acquisition positioning, equity value creation",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "MRR-Based Lines of Credit, Debt-Based Growth Financing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SaaS Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 11
- **ID**: `2e4dc332-9fcb-59d1-9b8d-fdfe9fb17c14`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.205000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2e4dc332-9fcb-59d1-9b8d-fdfe9fb17c14",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.205000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.314000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.205000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.205000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 31",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.205000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "54b490bc-e327-5c56-825b-ee4969e1b945",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.205000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.659000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology (SaaS, Tech-enabled Services, Digital Media), Life Sciences, Healthcare IT, Quick Service Restaurant (QSR), Multi-Family Housing, Senior Housing, Affordable Housing, Non-Profit, Schools, Solar Power",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.659000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (Prefers New England/New York)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.659000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$3.5M-$5M in ARR ( <$5M requires high growth rate)",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.659000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Seasonal cash flow needs, equipment/inventory purchase, corporate real estate purchase/expansion, growth-stage company financing, affordable housing development, franchise acquisitions",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.659000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "C&I Loans, Lines of Credit, Equipment Financing, Owner-Occupied Mortgages, Working Capital Lines, Term Loans, Real Estate Loans, Acquisition Financing, Asset-Based Lending, Franchise Lending, ESOP Financing, SBA 7(a), Express Business Loans, Construction Loans, Tax-Exempt Financing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.659000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2M-$30M\n6X MRR on LoC, 0.5X-1X ARR on TL dependent on growth. They typically look for 2:1 deposit to loan",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.659000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Eastern Bank (formerly Cambridge Trust)",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 12
- **ID**: `2e6c4d16-9a7d-58db-81e7-8db493966860`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2e6c4d16-9a7d-58db-81e7-8db493966860",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:29.196000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 36",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "1973b0f6-6ee9-5957-9ce4-3d6e89e5e819",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:37.233000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Health & Wellness, Retail/E-Commerce, Education, Fintech, Software, Sports & Entertainment, Telemedicine, Health Services, Enterprise Software, Business Services, Industrials, Specialty Finance, TMT, Healthcare Services",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:37.233000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$10M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:37.233000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth, working capital, recapitalizations, M&A, refinancing",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:37.233000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "First Lien Term Loans, Second Lien Term Loans, Asset-Backed Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:37.233000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M-$30M typically (2.5X-4X EBITDA) but will look at multiples of ARR\n\n$3M-$4M at close on the warehouse facility but growing into $5M-$30M",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:37.233000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Alignment Credit",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 13
- **ID**: `340a42ec-bfad-4f4e-aa97-ce632ec5b912`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "340a42ec-bfad-4f4e-aa97-ce632ec5b912",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:53:27.478000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 1",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "d7bae9cb-2f15-413c-b9c3-87fa6bee83d7",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Life Sciences, Wholesale, Distribution, Software, Hardware, Manufacturing",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Pre-revenue and above (Early Stage is less than $5MM ARR)",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital, mergers and acquisitions, corporate buyouts, IPOs, runway extension, scaling operations, accelerating growth",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth Capital, Equipment Financing, Working Capital Credit Facilities, Sustainable Energy Project Finance, Venture Debt, Asset-Based Lending, SBA Loans, Commercial Real Estate Loans, ESOP Finance, Corporate Finance & Syndication",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Bridge Bank",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 14
- **ID**: `377b9720-0199-4731-991f-445193fdd7c4`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "377b9720-0199-4731-991f-445193fdd7c4",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:13:09.870000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 10 - Lender Finance",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "c2c4456e-5943-4c44-b202-ed3fc0dcb105",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Construction and Building Materials, Business Services, Plastics & Rubber, Advertising, Capital Equipment, Education, Aerospace & Defense, Telecommunications, Financial Services, Hotel, Gaming, Leisure, Restaurants, Environmental Industries, Healthcare and Pharmaceuticals, High Tech Industries, Beverages, Food and Tobacco, Manufacturing, Media, Printing and Publishing, Retail, Wholesale, Consumer Products, Energy",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Leveraged buyouts, acquisitions, recapitalizations, growth capital, refinancing, working capital management",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "First Lien Secured Loans, Stretch Senior Loans, Unitranche Loans, Second Lien Secured Loans, Senior Secured Loans, Asset-Based Loans, ARR Loans, Mezzanine, Unsecured Debt, Subordinated Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M on day one is ideal, but ramping to $25M by year one works. Can go up to $150M. Advances rates vary depending on asset class but typically 70%-90%",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:15:08.913000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "MidCap (Lender Finance)",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 15
- **ID**: `3942b723-4515-5bf6-9aa6-280c588ae5e8`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "3942b723-4515-5bf6-9aa6-280c588ae5e8",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.347000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 32",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "4593ade9-5158-5ac6-a916-3ad1bed619ea",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology & Software, Healthcare, Manufacturing, Consumer Products, Digital Marketing",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "North America",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$5M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$4M - $100M",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital without dilution, loss of control, or personal guarantees for companies with $4M-$100M annual revenue",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Revenue-Based Financing (RBF)",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1M - $15M (20% of TTM for general industries, software is 30%)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Decathlon Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 16
- **ID**: `41867cef-99f0-5800-9c6d-1c00e086c701`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "41867cef-99f0-5800-9c6d-1c00e086c701",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.333000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 35",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "8b716f88-d1f3-5abc-a27c-4caba4f6308f",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Healthcare, Life Sciences, Energy, Sustainable Solutions, Information Technology, Agriculture, Material Sciences, Consumer Products and Services, Agtech, Space, Manufacturing, Defense",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Canada, Europe (Germany, UK)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway, accelerating growth, critical investments in equipment/personnel/premises, cash runway extension alongside equity financing",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt, Equipment Leasing, Venture Leasing, Asset-Based Lending, Lease Administration, Asset Management",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Min $1M and targeting $5M and up to $20M (100% LTV on equipment). Deposit required in due diligence.",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ATEL",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 17
- **ID**: `4d18b60a-5bd5-5357-8760-8a1c2a57e330`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "4d18b60a-5bd5-5357-8760-8a1c2a57e330",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.311000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 26",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "05720d9f-ef48-5988-ba2f-d60615436bc4",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.644000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Information Technology, Life Sciences, Enterprise (B2B), Software, Tech Hardware, Cybersecurity, FinTech, Digital Health, LegalTech, Supply Chain & Logistics, Government/Defense",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.644000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (focus on underserved founders and geographies)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$1M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.644000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2M - $10M",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.644000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital, inventory bolstering, working capital, market penetration, expansion",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.644000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.644000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$500K-$2M (typically 30%-50% of annual revenue)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Prospeq",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 18
- **ID**: `56af85fb-c63c-5b4c-a345-d9df3ce44532`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "56af85fb-c63c-5b4c-a345-d9df3ce44532",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.358000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 33",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "104b61cc-7eca-5604-96ad-c278f181f1f4",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.649000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Enterprise Software, Digital Media, Cybersecurity, Healthcare Technology and Services, Tech-Enabled Services, Consumer Internet",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.649000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "North America (United States, Canada), UK, Europe, Asia",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$5M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M+",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.649000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital for later-stage, professionally backed companies",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.649000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Structured and Secured Growth Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.649000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Max of 100% debt to equity, 1X ARR typically but will go higher ($3M-$50M)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.649000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Multiplier Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 19
- **ID**: `5a491090-bf4a-5955-a9ab-da8655d3e6f5`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "5a491090-bf4a-5955-a9ab-da8655d3e6f5",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.329000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 19",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "a3443742-a4b0-562b-b538-c9a2fad7223e",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Apparel and Textiles, Auto Dealers, Energy, Entertainment, Environmental Services, Food and Beverage, Government, Healthcare, Nonprofit, Renewable Energy, Technology, Wine, Automotive, Consumer Products, Commercial Real Estate, Distributors, Casino Gaming, Manufacturing, Private Equity, Professional Sports, Wholesale",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (Primary Parent in US. Majority of Revenue Domestic, Foreign subs okay but depends on how they are being used and funds flow, Mgmt team needs to be domestic, Lead investors need to be domestic), Mexico",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Pre-revenue and above",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Business acquisitions, expansions, working capital, equipment purchases, commercial real estate, construction, buyouts, buildups, technology company growth capital, energy project financing, renewable energy development, affordable housing development",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Corporate Lending, Equipment Leasing, Commercial Real Estate, Construction Loans, SBA 7(a), SBA 504, Lines of Credit, Term Loans, Working Capital Revolvers, Acquisition Financing, Mezzanine Financing, Reserve-Based Lending, Project Financing, MRR/ARR Financing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "25% of of equity below $5M, above that would be a multiple of ARR (typically 1X-2X). Debt/cash is typically 25%-30%",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Comerica",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 20
- **ID**: `6c3f6b56-7204-5d60-bed0-934641a74d6d`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "6c3f6b56-7204-5d60-bed0-934641a74d6d",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:29.189000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 37",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "df8303a5-03ef-58bb-9af9-3bd860f37f7d",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:37.746000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SaaS, Healthcare, Restaurants, Business Services, Enterprise Software, Insurance Brokerage, Car Washes, Value-Added Distribution, Veterinary Care",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:37.746000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (primary), Europe",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$10M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:37.746000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Refinancings, recapitalizations, traditional buyouts, growth financings, B2B SaaS growth capital (Golub Growth)",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:37.746000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "One-Stop Loans, Senior Secured Loans, Second Lien Loans, Subordinated Loans, Unitranche, CLOs, Floating Rate Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:37.746000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M - $75M avg; up to $250M (up to 2X ARR)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Golub",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 21
- **ID**: `701407c1-153e-5096-ac94-70885161d608`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.231000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "701407c1-153e-5096-ac94-70885161d608",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.231000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.355000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.231000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.231000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 21",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.231000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "b27c6e77-efd9-5516-b4a2-95039594aff0",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.231000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Enterprise Applications, High Tech, Med/Tech (Surgical, Implantables, Non-invasive, Robotics, Wearables), Biotech/Pharma (Therapeutics, Vaccines, Delivery, Discovery), HealthTech, Diagnostics & Tools, CDMO, Specialty Pharma",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Global - No specific geographic restrictions",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Pre-revenue and up but needs IP. Equipment leasing pre-revenue is more viable",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Up to $100M",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Funding revenue growth, extending runway, accelerating growth, equipment acquisition, less dilution for entrepreneurs and investors",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Term Loans, Revolving Credit Lines, Senior Debt, Subordinated Debt, Equipment Financing, Working Capital Loans, Warrants",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5MM- 75MM\n1.0x-1.5x ARR\n15-25% of last raise\n\nFor equipment: finance 100% of purchase price typically",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.648000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Trinity Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 22
- **ID**: `78a2190a-1be4-5c93-a660-71754dfdd470`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:29.174000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "78a2190a-1be4-5c93-a660-71754dfdd470",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:29.174000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:29.193000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:29.174000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:29.174000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 40",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:29.174000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "5a422766-3ac0-5ed9-83de-1ba20511c498",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:29.174000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:37.975000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Healthcare, Business Services, Technology, Software, Media, Consumer Services, Consumer Products, Manufacturing, Industrial, Distribution, Construction, Industrial Automation, Information Technology, Life Sciences",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:37.975000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:37.975000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Private equity buyouts, acquisitions, recapitalizations, growth capital, refinancing for lower middle-market companies",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:37.975000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Senior Debt, Unitranche, Junior Secured Debt, Unsecured Subordinated Debt, Equity, Cash Flow Loans, Enterprise Value Loans, Asset-Based Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:37.975000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$20M-$200M\n\n30%-50% LTV for Mid-Market\n25% LTV for VD\n2.5X ARR for SaaS\n5X EBITDA",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:37.975000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Monroe Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 23
- **ID**: `805dd875-da56-532e-b881-f7738a4ba9bb`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.223000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "805dd875-da56-532e-b881-f7738a4ba9bb",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.223000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.343000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.223000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.223000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 18",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.223000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "56f2085a-a621-53bf-848d-66046ce2383d",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.223000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.638000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Life Sciences, Healthcare, Biotech, Therapeutics, Medical Devices, Diagnostics, Digital Health, SaaS, Plastics, Packaging, Machine Tools, Crane/Construction, Motor Coach, Food Processing",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.638000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.638000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Pre-revenue and up",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.638000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Expansion, acquisition, new location, ownership transition, working capital, seasonal fluctuations, long payment cycles, startup funding at any stage",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.638000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth Capital Term Loans, MRR Credit Facilities, ARR Credit Facilities, Unitranche, FOLO Credit Facilities, Revolving Lines of Credit, Asset-Based Lending, Equipment Loans, Leases (TRAC, Tax, Capital, Sale-leaseback), SBA 7(a), SBA 504, Mortgage Warehouse Lending",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.638000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2M - $100M",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.638000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Customers Bank",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 24
- **ID**: `899baa6a-8166-57db-8a0c-799cb343b496`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.215000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "899baa6a-8166-57db-8a0c-799cb343b496",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.215000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.340000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.215000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.215000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 29",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.215000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "25f11968-8b2d-5429-8651-e47ed8e43e40",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.215000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.634000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (HQ, bank accounts, C-suite, customers)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.634000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">= $4M ARR (unless growing quickly / a month or two away)",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.634000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital for companies with predictable or recurring revenue streams",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.634000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Revenue-Based Financing, Growth Debt Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.634000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2M minimum with a line of sight to $3-5M. Try to size at 4X GP, but max at 50% total debt/ARR and $8M per credit but requires solid profit margins.",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.634000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Equal Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 25
- **ID**: `95a1a575-ce08-5659-abe7-6b265b4de423`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "95a1a575-ce08-5659-abe7-6b265b4de423",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.297000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 23",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "1dc2d7c3-b36e-5131-b816-079c4cf2e159",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.650000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Enterprise Applications, Enterprise Infrastructure, AI, Cyber Security, Business Intelligence & Analytics, Aerospace, Industrial IoT, Defense, Mobility, Hardware Infrastructure, Health & Wellness Tools, Telemedicine, Health System Software, Clinical AI Tools, Medical Devices, Professional Services, Consumer Packaged Goods, Technology, Life Sciences, Business Services",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.650000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (Bay Area primary, Nationwide for Venture Lending and Specialty Finance), Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.650000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$1MM unless top tier VCs\n\nSeries A",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.650000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Rapid growth, liquidity needs, sponsor-driven acquisitions, recapitalizations, refinancings, growth capital, daily operating expenses, construction and development",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.650000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working Capital Lines of Credit, Equipment Loans, Acquisition Financing, Shareholder Buyouts,��ESOP Loans, Owner-Occupied Real Estate Loans, Sponsor Finance (Acquisition Term Loans, Recapitalization Term Loans), Structured Finance (No-Covenant AR Credit, Fusion AR), Recurring Revenue Financing, GP Commitment Loans, Construction Loans, Real Estate Bridge Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.650000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$500K - $25M (deal by deal basis)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Avidbank",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 26
- **ID**: `9a6f7929-9c43-4b81-8eb0-f9df0fdec51a`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "9a6f7929-9c43-4b81-8eb0-f9df0fdec51a",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:46:42.254000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 6",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "7bcb70bd-63c1-4c8c-8e03-92d51cbb9d3a",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "XaaS, Mobility, AI, Climate Tech, Health + Wellness, Food + Beverage, E-Commerce, Gaming, E-Sports, Software, Tech Enabled Services, Online Marketplaces, Consumer Products",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, UK, Australia, Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$3M for B2B, $10M for B2C",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital to fuel emerging leaders, market penetration, business value growth",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Term Loan Credit Facilities, Equity Co-Investments",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Lago Innovation",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 27
- **ID**: `9d61c97e-1acf-515d-820c-3b2a461964a6`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "9d61c97e-1acf-515d-820c-3b2a461964a6",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.326000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 27",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "c9b6af14-4c04-5822-9532-7edd97c1850d",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.645000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "B2B Software, Tech-Enabled Services, Semiconductor, Computer Hardware, Niche/Verticalized Software",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.645000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "North America",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.5M+",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.645000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.5M - $15M",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.645000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Ramping hiring, customer acquisition spend, runway extension to near-term equity financing or M&A event",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.645000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth Debt Facilities, Junior Growth Facility, Senior Growth Facility, Bridge Debt Facilities",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.645000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1M-$5M (max. at 6X MRR)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "BigFoot",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 28
- **ID**: `a4592172-be8c-567a-82b2-f6185149b9f7`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "a4592172-be8c-567a-82b2-f6185149b9f7",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.303000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 20",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "05f83a84-a278-5b55-a3d2-2938009dce02",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Franchise",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.647000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, overseas works as long as US entity isn't a shell (assets, equity, IP, contracts)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.647000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Pre-revenue and up",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.647000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "International growth, domestic growth, acquiring new brands, new build financing, refinancing existing debt, cross-border acquisitions",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.647000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Long-Term Loans, Short-Term Loans, Leveraged and Acquisition Finance, Trade Finance, Letters of Credit, Working Capital Solutions",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.647000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "25%-30% debt to equity\n\n$1M-$50M (syndicate above $50M typically up to $250M or $300M)\n\nABL needs to be >$75M. Banks will lend 80% on eligible A/R",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "HSBC",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 29
- **ID**: `ad0fa525-30fd-4385-93b5-df84628bbc9c`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ad0fa525-30fd-4385-93b5-df84628bbc9c",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:49:38.580000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 2",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "c24304e8-99c8-4b80-bfc6-46303ab2ca79",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "B2B SaaS, Cybersecurity, Logistics, Healthcare",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (Not California, unless DE organized)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.5M+",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Sales and marketing acceleration, platform development, market research, growth for early-stage SaaS companies under $2M ARR",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt, Standard Installment Loans, Interest-Only Loans, Step-Up Structures, Equity Financing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "RiverSaaS",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 30
- **ID**: `b1dda9bc-dcf4-51dc-8354-52cf96f8ea19`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "b1dda9bc-dcf4-51dc-8354-52cf96f8ea19",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.291000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 17",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "28062acc-a840-565f-ad1a-5f64de2453e7",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.646000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Agriculture, Food & Beverage, Healthcare, Manufacturing, Technology, Life Sciences, Biotechnology, IT, Professional Services, AI, Robotics, Agtech",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.646000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Global (European Union, UK, North America, Southeast Asia)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.646000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Pre-revenue and up",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.646000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "CapEx budget matching, cash infusion, recurring revenue through HaaS, non-dilutive financing alongside other funding sources",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.646000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Lease Lines, Sale Leaseback, Hardware-as-a-Service (HaaS)",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.646000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$100K - $50M; sweet spot is $1-8M. Will finance 100% of BOM out the gate.",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.646000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "CSC Leasing",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 31
- **ID**: `b6c72d90-6eac-4aba-810a-aa54cb11771a`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "b6c72d90-6eac-4aba-810a-aa54cb11771a",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:09:53.262000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 5",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "31497b8d-0a8d-4862-b508-48f006bcdfcd",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SaaS, Tech-Enabled Services, Recurring Revenue Companies, Food & Beverage, Apparel, Beauty, Consumer Brands, Manufacturing, Distribution, Industrial Services",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M+ (Structured Credit); $20M+ (Cash Flow)",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital, growth capital, acquisition capital, special situations for lower middle market businesses",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "First-Lien, Split-Lien, Second-Lien, Unitranche, Asset-Based Revolvers, Asset-Backed Term Loans, Cash Flow Term Loans, Structured Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:20:38.612000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SG Credit Partners",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 32
- **ID**: `bbd74efc-47fc-511d-8cb1-c3ac53a5a2a8`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "bbd74efc-47fc-511d-8cb1-c3ac53a5a2a8",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.318000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 30",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "402d8ded-4e73-553b-b9d2-0f4e8ab4f1e0",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Life Sciences",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$3MM ARR - 75MM",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital for capital efficient companies without institutional investor support, maintaining control and ownership",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth Debt, Venture Loans (with warrants)",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.652000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$500K-$3M is sweet spot, can go up to $7.5M. 33% of ARR - pipeline considered for future tranches. If it is VC or sponsor backed they could get comfortable to extend additional.",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Montage",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 33
- **ID**: `bce6c73b-dab6-51f0-9696-6cdd43245e06`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "bce6c73b-dab6-51f0-9696-6cdd43245e06",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:29.199000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 39",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "8e29d2c4-8172-5017-a1a7-43f57274cae0",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:37.873000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Machine Learning, Cloud Computing and Storage, Communications/Wireless, Cybersecurity, Data Analytics, Internet and Media, Networking, Software, Biotechnology, Medical Device, Drug Delivery, Genetics, Specialty Pharmaceuticals, R&D Instrumentation, Diagnostics, Medical Records, Digital Health, Patient Management Software, Alternative Fuels, Energy Efficiency, Green Building Materials, Agbio, Foodtech, Water Technology",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:37.873000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:37.873000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$10M ARR (if lower margin >$15M)",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:37.873000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Cash runway extension, growth capital, acquisitions, augmenting equity funding with less dilutive capital",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:37.873000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Term Loans, Bridge Loans, Special Purpose Loans (with warrants/success fees)",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:37.873000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M-$50M (1X ARR typically), not indexing to EV or IP. Monroe bought them in June and they can syndicate above",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Horizon",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 34
- **ID**: `c2d2e565-19ed-516d-9f10-7797a23f3808`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "c2d2e565-19ed-516d-9f10-7797a23f3808",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.305000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 25",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "788cf0c0-6193-5512-81d3-65007f518b90",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Enterprise, Consumer, Healthcare, Real Estate Tech, FemTech, Financial Software, Diagnostic Equipment, Industrial Supplies and Parts",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Global",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$500K\nSeries B and below",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Seed and Series A stage financing, tailored financing to minimize dilution at earliest stages",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt, Equity",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.637000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Top Corner Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 35
- **ID**: `c7d0507e-aa4f-5a00-aa8f-70a17cd31566`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "c7d0507e-aa4f-5a00-aa8f-70a17cd31566",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.294000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 28",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "b7927597-424a-5737-858c-13dfe3484a4f",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.651000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Energy Storage, Smart Grid Technologies, Renewable Energy, Enterprise Applications, Energy Tech, Environment Tech",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.651000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.651000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth financing for early-stage companies advancing energy innovation and sustainability with little-to-no technology risk",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.651000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Senior Secured Loans, Junior Secured Loans, Stretch Loans, Bridge Loans, Debtor-in-Possession Loans, Secured Debt with Penny Warrants",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.651000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2-6MM (tranched 33-50% funded at close, followed by 3/6/9 month capital unlocks upon meeting performance (or possibly equity) milestones. Not based on any formula",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.651000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "WindSail Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 36
- **ID**: `ced170a7-3fef-50bd-9b9e-d0263df3a676`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.197000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ced170a7-3fef-50bd-9b9e-d0263df3a676",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.197000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.300000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.197000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.197000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 22",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.197000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "fc183e2e-67de-5ab8-8dc9-1a4775a78cd3",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.197000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.640000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [],
  "test_focus_debt_products": [],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.640000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M-$50M, max of 1X ARR typically, but could go 2X ARR for the right credit",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.640000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Expansion Growth Capital",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 37
- **ID**: `d2dbae57-72e2-545f-9f62-565348918aff`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:27.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "d2dbae57-72e2-545f-9f62-565348918aff",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:27.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:27.336000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:27.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:27.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 34",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:27.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "90155e75-bb9c-5049-b278-8d1623e0eda1",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:27.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:35.693000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Consumer Brands, Ecommerce, Fintech, B2B SaaS",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:35.693000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Emerging Markets, Mexico, Latin America",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:35.693000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital, immediate scale, cash flow improvement, financing for assets overlooked by conventional lenders",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:35.693000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Revolving Lines of Credit, Term Loans, Working Capital Solutions, Receivables Factoring, Asset-Backed Lending",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:35.693000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1M - $50M; $5M-$25M is sweet spot but has SMA's that can go higher\n\nCan go up to 80%-90% on inventory cost and similar against A/R. Will also look at other and fixed assets. Dependent on SKUs, inventory metrics, and CAC. If thousands of SKUs or aged, then the advance rate is considerably lower and they will advance individually against cohorts (i.e.70% on SKUs <100 and aged <30 days)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T23:08:35.693000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Deep Ocean",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 38
- **ID**: `d2dd96be-0722-445a-b49a-77cfc0eb6019`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "d2dd96be-0722-445a-b49a-77cfc0eb6019",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:21:04.381000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 11",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "4d642c23-f28a-4797-9dc9-543c13e8b911",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Life Sciences, Entertainment, Agriculture, Clean Tech, Specialty Finance, Retail, Healthcare, Manufacturing, Hospitality, Solar, Wind, Biomass, Geothermal, Hydro, Oil and Gas, Multi-Family Residential, Restaurants, Hotels, Auto Repair, Self-Storage, Gas Stations, Car Washes, Assisted Living",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Greater China (Hong Kong, Shanghai, Shantou, Shenzhen, Beijing, Taipei)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$10M for most deals, but pre-revenue for life sciences",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Asset acquisitions, company acquisitions, debt refinancing, growth capital, working capital, cross-border banking, commercial real estate purchase/refinance, equipment purchase, tenant improvements, business acquisitions, partner buyouts",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Lines of Credit, Term Loans, SBA 7(a), SBA 504, Asset-Based Lending, International Trade Finance, Commercial Real Estate Financing, Specialized Asset-Based Lending, Royalty Monetization, Hospitality Finance, Equipment Finance, Transportation Finance, Trade Receivables, Inventory Financing, Capital Call Lines, NAV Facilities, Construction Loans, Bridge Financing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M - $40M hold (can synidcate but don't really often) 0.5x-1X ARR, north would need to have solid retention",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "East West Bank",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 39
- **ID**: `d4aadc11-3e70-43e3-90c1-654dd930ea42`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "d4aadc11-3e70-43e3-90c1-654dd930ea42",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:15:39.355000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 3",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "329f37e8-b44d-41c5-b606-cc97967331c0",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Veterinary, Healthcare, Pharmacy, Funeral Home & Cemetery, Investment Advisory, Entertainment Centers, Agriculture, Wine & Craft Beverages, Self-Storage, Insurance, Hotels, Renewable Energy, Government Contracting, Solar, Educational Services, Senior Care, Accounting & Tax, Automotive Care, Bioenergy, Fitness Centers, Service Contractors, Home Restoration, Broadband, Water & Environmental, Community Facilities, RV Parks, Franchises, Franchise Restaurants, Hardware Stores, HVAC & Plumbing, Law Firms, Liquor Stores, Pet Care Facilities, Dental, Multifamily Housing, Student Housing, Industrial & Warehouse, Commercial Real Estate",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States, Overseas (if primary Parent in US. Majority of Revenue Domestic, Foreign subs okay but depends on how they are being used and funds flow, Mgmt team needs to be domestic, Lead investors need to be domestic)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">=$2M ARR",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$250K+",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Business acquisitions, partner buyouts, expansion, new construction, debt restructure, commercial real estate, cash flow improvement, refinancing, property renovation, bridge financing for production/collection cycles",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SBA 7(a), SBA 504, USDA Loans, Conventional Business Loans, Asset-Based Lending, Middle Market Lending, Commercial Real Estate Financing, Sponsor Finance, Energy Project Financing, Bioenergy Financing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:20:59.707000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Live Oak Bank",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 40
- **ID**: `ef4b7b5a-ffe1-536b-9cb4-2855204211cb`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ef4b7b5a-ffe1-536b-9cb4-2855204211cb",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:42:29.204000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 38",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "d2450ffe-873f-5d18-9574-f34fe16f055f",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T23:08:37.763000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology, Healthcare, Software, Tech-Enabled Services, SaaS, Infrastructure, Education, Affordable Housing, Industrial Services, Business Services, Multifamily, Seniors Housing, Healthcare Real Estate",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T23:08:37.763000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "North America (United States, Canada)",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$20M-$100M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M+",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T23:08:37.763000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital, acquisition and buyout capital, infrastructure and municipal projects, middle market capital solutions",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T23:08:37.763000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "First Lien Unitranche, Second Lien Facilities, Equity Co-Investments, Tax-Exempt Bonds, Taxable Bonds, Delayed Draw Term Loans, Subordinate Debt, Construction Lending, Lease Financing, CLOs, SMAs, NAV Lending",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T23:08:37.763000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$20M-$100M (1X ARR)",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Orix",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 41
- **ID**: `efbd0dd3-baac-4008-b325-6b4b653ca3ae`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "efbd0dd3-baac-4008-b325-6b4b653ca3ae",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T15:57:01.711000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 15",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "f7953d3e-a1a9-4696-9547-f44646059f39",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Technology (SaaS, Tech-Enabled Services), Healthcare, Biotech, Diagnostics and Tools, Medical Devices, Healthtech, Food & Beverage, Household, Beauty and Personal Care, Clean Technology, Engineering, Industrial Services, Logistics, Packaging, Aerospace, Defense, Government Services, Education Technology",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "North America, Europe, UK, Asia, Latin America, Israel",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Acquisitions, leveraged buyouts, refinancings, recapitalizations, project financing, runway extension, growth initiatives, day-to-day operations",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Senior Secured Loans, Venture Debt, Working Capital Lines, First Lien Credit Facilities, Second Lien Credit Facilities, Asset-Based Revolving Credit Facilities, High-Yield Bonds, Bridge Facilities, Convertible Bonds, Leveraged Finance",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1M - $50M+",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Stifel",
      "attribute_type": "text"
    }
  ]
}
```
### Lender 42
- **ID**: `fd209e6c-d0a9-487e-8ce3-73548231cd75`
- **Attributes**:
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "fd209e6c-d0a9-487e-8ce3-73548231cd75",
      "attribute_type": "text"
    }
  ],
  "created_at": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T22:11:05.057000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "lender_name": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 10 - Venture Debt",
      "attribute_type": "text"
    }
  ],
  "lenders": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "companies",
      "target_record_id": "c2c4456e-5943-4c44-b202-ed3fc0dcb105",
      "attribute_type": "record-reference"
    }
  ],
  "lenders_5": [],
  "lenders_4": [],
  "lender": [],
  "is_test_object": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "ce2182de-9396-4958-97fe-84cc10dca655",
          "attribute_id": "89171d5c-73ec-45a8-961e-b36bce8cc171",
          "option_id": "d3e6af26-e578-45aa-a2df-0365bad6155a"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_focus_industries": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Construction and Building Materials, Business Services, Plastics & Rubber, Advertising, Capital Equipment, Education, Aerospace & Defense, Telecommunications, Financial Services, Hotel, Gaming, Leisure, Restaurants, Environmental Industries, Healthcare and Pharmaceuticals, High Tech Industries, Beverages, Food and Tobacco, Manufacturing, Media, Printing and Publishing, Retail, Wholesale, Consumer Products, Energy",
      "attribute_type": "text"
    }
  ],
  "test_focus_geographies": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_requirements": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": ">$10M (depending on growth)",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue_requirements": [],
  "test_focus_debt_use_cases": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Leveraged buyouts, acquisitions, recapitalizations, growth capital, refinancing, working capital management",
      "attribute_type": "text"
    }
  ],
  "test_focus_debt_products": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "First Lien Secured Loans, Stretch Senior Loans, Unitranche Loans, Second Lien Secured Loans, Senior Secured Loans, Asset-Based Loans, ARR Loans, Mezzanine, Unsecured Debt, Subordinated Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size_requirements": [
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M-$250M (0.5X-2X ARR). Will get more aggressive on growth, margins, retention, LTV",
      "attribute_type": "text"
    }
  ],
  "test_company_data_source": [
    {
      "active_from": "2025-12-21T22:15:27.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "MidCap (Venture Debt)",
      "attribute_type": "text"
    }
  ]
}
```

## Sample Companies
### Company 1
- **ID**: `0108bc11-c3c5-5b5e-8804-2427a6346dee`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0108bc11-c3c5-5b5e-8804-2427a6346dee",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower17.com",
      "root_domain": "testborrower17.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 17 - Healthcare Vertical SaaS",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.076000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Vertical SaaS (healthcare practice management)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$7M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6.2M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 2
- **ID**: `047f6efb-26bd-5fdb-a7b8-c248e7da287e`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "047f6efb-26bd-5fdb-a7b8-c248e7da287e",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower11.com",
      "root_domain": "testborrower11.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 11 - Consumer Brand (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.043000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Consumer products brand (DTC + wholesale)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$25M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Acquisitions; Working capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.909000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 3
- **ID**: `05720d9f-ef48-5988-ba2f-d60615436bc4`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "05720d9f-ef48-5988-ba2f-d60615436bc4",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender26.com",
      "root_domain": "testlender26.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 26",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Prospeq",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.798000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.206000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "4d18b60a-5bd5-5357-8760-8a1c2a57e330",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 4
- **ID**: `05f83a84-a278-5b55-a3d2-2938009dce02`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "05f83a84-a278-5b55-a3d2-2938009dce02",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender20.com",
      "root_domain": "testlender20.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 20",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "HSBC",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.628000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.198000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "a4592172-be8c-567a-82b2-f6185149b9f7",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.538000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 5
- **ID**: `09a8ffc5-c07a-5b22-831e-45c4de159174`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "09a8ffc5-c07a-5b22-831e-45c4de159174",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower23.com",
      "root_domain": "testborrower23.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 23 - Large Enterprise SaaS (Small Ask)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.172000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Enterprise applications (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$120M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$110M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Acquisitions; Working capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Lines of Credit; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.121000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 6
- **ID**: `0ba4df02-067f-5bfe-84ae-c0d6ea0238d3`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "0ba4df02-067f-5bfe-84ae-c0d6ea0238d3",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower13.com",
      "root_domain": "testborrower13.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 13 - Self-Storage Development (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.120000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Commercial real estate (self-storage)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.2M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$7M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Commercial real estate",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "construction-to-perm loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.907000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 7
- **ID**: `103469e0-956a-4bd0-8420-4debbd479077`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-20T23:33:51.068000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "103469e0-956a-4bd0-8420-4debbd479077",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-20T23:33:51.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "midjourney.com",
      "root_domain": "midjourney.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-20T23:33:51.940000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Midjourney",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-20T23:33:51.941000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Midjourney is an independent research lab dedicated to exploring innovative mediums of thought and enhancing the imaginative capabilities of humanity through design and artificial intelligence.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-20T23:33:51.943000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "ade60888-3e27-4655-8ad2-2ccf778605e8"
        },
        "title": "Museums",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-20T23:33:51.943000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "7afd5b1a-5fab-41a4-8384-919422c7b2c0"
        },
        "title": "Broadcasting",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-20T23:33:51.943000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-20T23:33:51.943000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "28439b1b-a488-482b-93af-97960d60eccc"
        },
        "title": "Scientific & Academic Research",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-20T23:33:51.941000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": null,
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "San Francisco",
      "region": "California",
      "postcode": null,
      "country_code": "US",
      "latitude": "37.7749295",
      "longitude": "-122.4194155",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-20T23:33:51.941000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/b6f463d8-cd02-4ef5-bdd2-7ae2179c958f",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:53:02.351000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/midjourney",
      "attribute_type": "text"
    }
  ],
  "twitter": [
    {
      "active_from": "2025-11-20T23:33:51.941000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/midjourney",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-20T23:33:51.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 220994,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [
    {
      "active_from": "2025-11-20T23:33:51.943000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "b36f7e54-e3bf-4d4b-8781-db9186f6c0c3"
        },
        "title": "11-50",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-11-20T23:33:51.839000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T23:31:51.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-11-21T17:55:45.990000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-21T17:54:35.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-11-20T23:33:51.839000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T23:31:51.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-11-21T17:55:45.990000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-21T17:54:35.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-11-21T17:55:45.990000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 2.997901931705833,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-11-20T23:33:51.839000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "d1ea6452-01b8-4176-870d-556f0ab69ea4"
        },
        "title": "Very weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-11-20T23:33:51.839000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-20T23:33:51.196000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-20T23:33:51.050000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-20T23:33:51.240000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 8
- **ID**: `104b61cc-7eca-5604-96ad-c278f181f1f4`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "104b61cc-7eca-5604-96ad-c278f181f1f4",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender33.com",
      "root_domain": "testlender33.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 33",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Multiplier�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.769000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.225000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "56af85fb-c63c-5b4c-a345-d9df3ce44532",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.606000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 9
- **ID**: `136b5e34-24a3-5309-8e9d-477784e99dc7`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "136b5e34-24a3-5309-8e9d-477784e99dc7",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower20.com",
      "root_domain": "testborrower20.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 20 - Israel Cybersecurity SaaS",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.091000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Cybersecurity (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Israel",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5.2M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.919000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$7M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 10
- **ID**: `1896f193-6ff2-574c-9c5e-b951f315310c`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "1896f193-6ff2-574c-9c5e-b951f315310c",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower3.com",
      "root_domain": "testborrower3.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 3 - Aerospace & Defense Services (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.059000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Aerospace & Defense services (contracts + recurring maintenance)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$55M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Recapitalizations; Acquisitions",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "junior debt (mezz); subordinated note",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.911000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 11
- **ID**: `1973b0f6-6ee9-5957-9ce4-3d6e89e5e819`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "1973b0f6-6ee9-5957-9ce4-3d6e89e5e819",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender36.com",
      "root_domain": "testlender36.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 36",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Alignment�Credit",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:27.167000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:29.173000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "2e6c4d16-9a7d-58db-81e7-8db493966860",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:27.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 12
- **ID**: `1ad90af3-3041-4610-8131-5d6fb5fdbd2f`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:10.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1ad90af3-3041-4610-8131-5d6fb5fdbd2f",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:10.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "paypal.com",
      "root_domain": "paypal.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:11.443000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "PayPal",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:11.443000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "PayPal provides a comprehensive digital payments platform that enables users to pay, send, and save money while offering features like cash back rewards and flexible transaction options across various devices and locations.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "9bcdea9b-fe2d-450a-af4a-2677d24f0869"
        },
        "title": "Financial Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "912eb9a9-01bb-40e8-9259-e3a5cb81f955"
        },
        "title": "Finance",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "15fc4f17-b675-47d2-941d-08b93fc649ab"
        },
        "title": "Mobile",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:11.446000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8c7d9e2c-d174-414b-b9f7-46785f8acefd"
        },
        "title": "Insurance",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:11.444000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "2211 North 1st Street",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "San Jose",
      "region": "California",
      "postcode": "95131",
      "country_code": "US",
      "latitude": "37.3768507",
      "longitude": "-121.9227332",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:11.444000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/02f677cf-8f3f-4be4-8cb8-4f62f314241b",
      "attribute_type": "text"
    }
  ],
  "angellist": [
    {
      "active_from": "2025-11-11T01:18:11.444000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://angel.co/paypal",
      "attribute_type": "text"
    }
  ],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:11.444000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/paypalusa",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:11.444000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/PayPal",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:11.445000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 969425,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:11.445000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:11.445000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1998-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:11.445000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "269654bc-be11-469f-8306-9e173a7b341c"
        },
        "title": "10K-50K",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:10.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:10.917000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:10.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 13
- **ID**: `1bf711dd-ae3b-5601-998a-2b315cd1e4a3`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "1bf711dd-ae3b-5601-998a-2b315cd1e4a3",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower29.com",
      "root_domain": "testborrower29.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 29 - Mexico B2B SaaS (LatAm HQ)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.281000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "B2B Software / SaaS",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Mexico",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6.0M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5.4M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital; Extending runway",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.143000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 14
- **ID**: `1cd337af-42d6-4896-b2a7-3d1204374ba6`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-15T03:08:41.531000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1cd337af-42d6-4896-b2a7-3d1204374ba6",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-15T03:08:41.556000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "berminghamstudio.net",
      "root_domain": "berminghamstudio.net",
      "attribute_type": "domain"
    }
  ],
  "name": [],
  "description": [],
  "team": [
    {
      "active_from": "2025-12-15T03:08:41.878000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "3fe5b822-498d-4b74-a86a-592b0129b121",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-12-15T03:08:42.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-15T00:52:09.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-15T03:08:42.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-15T03:08:39.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-12-15T03:08:42.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-15T00:52:09.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-15T03:08:42.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-15T03:08:39.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-15T03:08:42.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 1.999870142216138,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-15T03:08:42.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "d1ea6452-01b8-4176-870d-556f0ab69ea4"
        },
        "title": "Very weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-15T03:08:42.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-15T03:08:41.589000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-12-15T03:08:41.521000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-15T03:08:41.658000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 15
- **ID**: `1dc2d7c3-b36e-5131-b816-079c4cf2e159`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "1dc2d7c3-b36e-5131-b816-079c4cf2e159",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender23.com",
      "root_domain": "testlender23.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 23",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Avidbank",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.618000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "95a1a575-ce08-5659-abe7-6b265b4de423",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.523000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 16
- **ID**: `1f3e1ab0-49b9-52ad-ae6c-ae813dad0c5e`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "1f3e1ab0-49b9-52ad-ae6c-ae813dad0c5e",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender16.com",
      "root_domain": "testlender16.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 16",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Camber�Road",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.653000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "0274bf6d-8e6f-5f37-89de-42ba676186fd",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 17
- **ID**: `2152b0dd-b029-40e5-ae16-bf1b609ad9de`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:07.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2152b0dd-b029-40e5-ae16-bf1b609ad9de",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:07.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "united.com",
      "root_domain": "united.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:08.458000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "United Airlines",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:08.458000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "United Airlines, a subsidiary of United Continental Holdings, is an American airline that transports people and cargo. With a global network of over 5,820 daily flights to airports on six continents, United Airlines is a member of Star Alliance and emp...",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:08.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "d5a9029d-40da-4dbf-81b7-0fb6f1572851"
        },
        "title": "E-commerce",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:08.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:08.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "78f73cba-a687-4dd4-9884-1934dfa6e56f"
        },
        "title": "Airlines",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:08.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "1468dd88-c4aa-4d3e-85c7-bbfa76758c89"
        },
        "title": "Transportation",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:08.459000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": null,
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Chicago",
      "region": "Illinois",
      "postcode": "60606",
      "country_code": "US",
      "latitude": "41.8817767",
      "longitude": "-87.6371461",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:08.459000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/9d0e531a-366e-4168-9d6f-84dcf758b562",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:08.460000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/united",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:08.459000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/united",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:08.460000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 1174209,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:08.460000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:08.460000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1926-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:08.460000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "d69ba157-de22-443b-ade2-7821512a8c8b"
        },
        "title": "50K-100K",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:07.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:07.880000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:07.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 18
- **ID**: `23a87958-8ada-56de-9e59-b99fee21b803`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "23a87958-8ada-56de-9e59-b99fee21b803",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower1.com",
      "root_domain": "testborrower1.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 1 - Vertical SaaS (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:08.983000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Vertical SaaS (B2B)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$9M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$8.5M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "venture loan / growth debt; term debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.853000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 19
- **ID**: `25f11968-8b2d-5429-8651-e47ed8e43e40`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "25f11968-8b2d-5429-8651-e47ed8e43e40",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender29.com",
      "root_domain": "testlender29.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 29",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Equal�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.741000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.215000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "899baa6a-8166-57db-8a0c-799cb343b496",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.599000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 20
- **ID**: `28062acc-a840-565f-ad1a-5f64de2453e7`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "28062acc-a840-565f-ad1a-5f64de2453e7",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender17.com",
      "root_domain": "testlender17.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 17",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "CSC�Leasing",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.624000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "b1dda9bc-dcf4-51dc-8354-52cf96f8ea19",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.539000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 21
- **ID**: `2d1eff03-39d9-42b5-b52d-5d76a58d0c82`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:01.859000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2d1eff03-39d9-42b5-b52d-5d76a58d0c82",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:01.859000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "lvmh.com",
      "root_domain": "lvmh.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:03.340000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "LVMH",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:03.341000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "LVMH, the world leader in luxury, is a prestigious group with over 75 iconic Maisons in five sectors. From Wines & Spirits to Fashion & Leather Goods, Perfumes & Cosmetics, Watches & Jewelry, and Selective Distribution, LVMH embodies a blend of heritag...",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:03.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "db576123-5c63-465d-96bb-2d1bec4a2371"
        },
        "title": "Consumer Discretionary",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:03.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:03.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "d5a9029d-40da-4dbf-81b7-0fb6f1572851"
        },
        "title": "E-commerce",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:03.341000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "22 Avenue Montaigne",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Paris",
      "region": "Île-de-France",
      "postcode": "75008",
      "country_code": "FR",
      "latitude": "48.866329",
      "longitude": "2.30555",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:03.341000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/62340ff5-85cf-4a1f-82e2-58017e5e99b9",
      "attribute_type": "text"
    }
  ],
  "angellist": [
    {
      "active_from": "2025-11-11T01:18:03.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://angel.co/lvmh",
      "attribute_type": "text"
    }
  ],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:03.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/lvmh",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:52:53.679000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/lvmh",
      "attribute_type": "text"
    }
  ],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:03.341000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/LVMH",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:03.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 198135,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:03.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:03.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1987-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:03.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "8ab9529a-b223-4e7a-8d9b-0f7f9142a8bf"
        },
        "title": "100K+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:01.859000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:01.871000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:01.859000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 22
- **ID**: `2e9e7dff-6f07-5cde-a34b-9fd8bfe5c22d`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2e9e7dff-6f07-5cde-a34b-9fd8bfe5c22d",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower19.com",
      "root_domain": "testborrower19.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 19 - B2B SaaS (UK) Expansion",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:08.989000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "B2B Software / SaaS",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United Kingdom",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$11M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Refinancing",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 23
- **ID**: `2f6b0c6d-6343-41e5-af58-341d72921ddc`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:08:20.481000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2f6b0c6d-6343-41e5-af58-341d72921ddc",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:08:20.481000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender7.com",
      "root_domain": "testlender7.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T15:06:35.420000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 7",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:08:20.481000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Recurring Capital Partners data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:08:20.481000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:06:57.647000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:08:20.481000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T14:36:40.025000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "0d8675d9-4a71-4d3e-bd43-b4e7d7c34574",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:14:42.038000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:08:20.481000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 24
- **ID**: `2fc11ee5-1acd-4bec-b50d-f8e8887db4ec`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:05.860000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2fc11ee5-1acd-4bec-b50d-f8e8887db4ec",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:05.860000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "google.com",
      "root_domain": "google.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:06.515000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Google",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:06.516000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Google specializes in organizing and providing access to the world's information through its highly regarded search services, catering to both individual users and corporate clients with innovative advertising and revenue-generating solutions.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "7afd5b1a-5fab-41a4-8384-919422c7b2c0"
        },
        "title": "Broadcasting",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "2ad3f639-b299-4a13-aa34-108a9a39d105"
        },
        "title": "Internet",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "4ba0e2df-7ead-40be-a7ed-53fe9105d9f8"
        },
        "title": "Web Services & Apps",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "5ed0ce7d-6e70-4bf1-8856-65385d665f5c"
        },
        "title": "Publishing",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:06.516000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "1600 Amphitheatre Parkway",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Mountain View",
      "region": "California",
      "postcode": "94043",
      "country_code": "US",
      "latitude": "37.4213397",
      "longitude": "-122.0836193",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:06.516000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/1d396c21-e421-4dd9-988e-55a8200c6e10",
      "attribute_type": "text"
    }
  ],
  "angellist": [
    {
      "active_from": "2025-11-11T01:18:06.517000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://angel.co/google",
      "attribute_type": "text"
    }
  ],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:06.517000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/google",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:06.516000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/Google",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:06.517000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 28946065,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:06.517000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1998-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:06.518000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "8ab9529a-b223-4e7a-8d9b-0f7f9142a8bf"
        },
        "title": "100K+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-11-20T23:47:02.156000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T18:54:48.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-22T20:40:37.047000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:35:35.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-11-20T23:47:02.156000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T18:54:48.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-22T20:40:37.047000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:35:35.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-22T20:40:37.047000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 6.856473099982255,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-16T21:12:57.226000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "aef4b515-9a18-4e04-9537-5f47f3474a5a"
        },
        "title": "Weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-11-30T20:50:10.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:05.860000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:05.880000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:05.860000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 25
- **ID**: `31497b8d-0a8d-4862-b508-48f006bcdfcd`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T19:57:56.954000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "31497b8d-0a8d-4862-b508-48f006bcdfcd",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T19:57:56.954000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender5.com",
      "root_domain": "testlender5.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T19:57:56.954000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 5",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T19:57:56.954000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SG Credit Partners data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T19:57:56.954000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T19:57:30.517000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T19:57:56.954000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:11:37.435000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "b6c72d90-6eac-4aba-810a-aa54cb11771a",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:13:50.923000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T19:57:56.954000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 26
- **ID**: `329f37e8-b44d-41c5-b606-cc97967331c0`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T19:55:02.098000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "329f37e8-b44d-41c5-b606-cc97967331c0",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T19:55:02.098000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender3.com",
      "root_domain": "testlender3.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T19:55:02.098000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 3",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T19:55:02.098000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Live Oak Bank data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T19:55:02.098000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T19:53:20.545000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T19:55:02.098000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:18:18.056000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "d4aadc11-3e70-43e3-90c1-654dd930ea42",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:15:30.775000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T19:55:02.098000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 27
- **ID**: `3528b88e-2965-444b-bb5d-f27489d1ead1`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T22:18:20.242000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "3528b88e-2965-444b-bb5d-f27489d1ead1",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T22:18:20.294000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "ugrowthfund.com",
      "root_domain": "ugrowthfund.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T22:18:20.723000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "University Growth Fund",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T22:18:20.723000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "University Growth Fund is an investment firm that provides growth capital to entrepreneurs, while also offering students a unique educational experience through its status as the largest student-run fund in the country, preparing them for successful ca...",
      "attribute_type": "text"
    }
  ],
  "team": [
    {
      "active_from": "2025-11-11T22:18:27.181000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "dadbe9ff-581c-40be-9f3a-fa9fe53bc79f",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8c7d9e2c-d174-414b-b9f7-46785f8acefd"
        },
        "title": "Insurance",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "fc4dca9d-3967-4995-bccd-7afd2d23060c"
        },
        "title": "Consulting & Professional Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "912eb9a9-01bb-40e8-9259-e3a5cb81f955"
        },
        "title": "Finance",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "7f2de0ab-7b78-4ca9-88a5-09dee4dda088"
        },
        "title": "Venture Capital",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "538a06f9-4fb8-419f-bb70-f2999b5039b6"
        },
        "title": "Marketplace",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T22:18:20.724000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "299 South Main Street #Suite 357",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Salt Lake City",
      "region": "Utah",
      "postcode": "84111",
      "country_code": "US",
      "latitude": "40.7634795",
      "longitude": "-111.8906561",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T22:18:20.724000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/0d9fc62d-8104-4a49-9fc7-05c849914476",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:53:00.487000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/university-growth-fund",
      "attribute_type": "text"
    }
  ],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2015-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T22:18:20.725000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "b36f7e54-e3bf-4d4b-8781-db9186f6c0c3"
        },
        "title": "11-50",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [
    {
      "active_from": "2025-11-13T16:37:51.520000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-11-13T16:30:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "de7b3012-f091-4b5f-8933-b66ea1ff3f2e"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_calendar_interaction": [
    {
      "active_from": "2025-11-13T16:37:51.520000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-11-13T16:30:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "de7b3012-f091-4b5f-8933-b66ea1ff3f2e"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-11-11T22:25:35.428000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-11T22:18:16.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "de7b3012-f091-4b5f-8933-b66ea1ff3f2e"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-11-12T17:07:03.476000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-12T17:00:10.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "de7b3012-f091-4b5f-8933-b66ea1ff3f2e"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-11-11T22:25:35.428000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-11T22:18:16.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "de7b3012-f091-4b5f-8933-b66ea1ff3f2e"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-11-13T16:37:51.520000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-11-13T16:30:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "de7b3012-f091-4b5f-8933-b66ea1ff3f2e"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-11-13T16:37:51.520000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 3.9938164182320586,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-11-11T22:25:35.428000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "d1ea6452-01b8-4176-870d-556f0ab69ea4"
        },
        "title": "Very weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-11-11T22:25:35.428000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "de7b3012-f091-4b5f-8933-b66ea1ff3f2e",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T22:18:20.321000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T22:18:20.227000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T22:18:20.354000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 28
- **ID**: `3dc65dd7-8ec3-4105-8213-9717331d740a`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:03.186000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "3dc65dd7-8ec3-4105-8213-9717331d740a",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:03.186000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "intercom.com",
      "root_domain": "intercom.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:03.683000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Intercom",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:03.683000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Intercom provides an AI-driven customer service platform that integrates messaging solutions for sales, marketing, and support, enabling businesses to engage in meaningful conversations with consumers across various channels.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:03.687000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:03.687000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "5ed0ce7d-6e70-4bf1-8856-65385d665f5c"
        },
        "title": "Publishing",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:03.687000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:03.687000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:03.687000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:03.684000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "55 2nd Street",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "San Francisco",
      "region": "California",
      "postcode": "94105",
      "country_code": "US",
      "latitude": "37.7888063",
      "longitude": "-122.4003129",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:03.684000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/56554bbf-098d-4897-b9d7-906eeb95f0e7",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:03.685000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/intercominc",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:03.684000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/intercom",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:03.686000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 42427,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:03.686000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "8f2945f3-5ed8-464e-8026-6c338ac49602"
        },
        "title": "$100M-$250M",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [
    {
      "active_from": "2025-11-11T01:18:03.687000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "currency_code": "USD",
      "currency_value": 240800000,
      "attribute_type": "currency"
    }
  ],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:03.686000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2011-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:03.687000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "b3dacacc-5b8c-4963-a0c2-61dae4aa5129"
        },
        "title": "1K-5K",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:03.186000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:03.200000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:03.186000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 29
- **ID**: `402d8ded-4e73-553b-b9d2-0f4e8ab4f1e0`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "402d8ded-4e73-553b-b9d2-0f4e8ab4f1e0",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender30.com",
      "root_domain": "testlender30.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 30",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Montage",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.759000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.204000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "bbd74efc-47fc-511d-8cb1-c3ac53a5a2a8",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.605000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 30
- **ID**: `44b9f2d9-f7bc-5857-8b1d-0d6502ea7ca7`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "44b9f2d9-f7bc-5857-8b1d-0d6502ea7ca7",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower27.com",
      "root_domain": "testborrower27.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 27 - Edge Case: Gaming Studio (US, Non-Recurring Revenue)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.295000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Gaming (consumer; live-ops studio)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.5M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Lines of Credit; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 31
- **ID**: `4593ade9-5158-5ac6-a916-3ad1bed619ea`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "4593ade9-5158-5ac6-a916-3ad1bed619ea",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender32.com",
      "root_domain": "testlender32.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 32",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Decathlon�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.731000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.220000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "3942b723-4515-5bf6-9aa6-280c588ae5e8",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.597000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 32
- **ID**: `4d642c23-f28a-4797-9dc9-543c13e8b911`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:19:16.258000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "4d642c23-f28a-4797-9dc9-543c13e8b911",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:19:16.258000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender11.com",
      "root_domain": "testlender11.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:19:16.258000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 11",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:19:16.258000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "East West Bank data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:19:16.258000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:17:53.804000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:19:16.258000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:22:50.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "d2dd96be-0722-445a-b49a-77cfc0eb6019",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:21:30.061000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:19:16.258000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 33
- **ID**: `51eb9c68-fd2b-5ad4-80d7-18b8985d34f3`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "51eb9c68-fd2b-5ad4-80d7-18b8985d34f3",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower21.com",
      "root_domain": "testborrower21.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 21 - Consumer Subscription App (CA)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.196000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Consumer subscription app (SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States (California)",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$4M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$3.5M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.105000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$8M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 34
- **ID**: `523631cc-3455-4370-9fb7-8cf5bedf48aa`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:06.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "523631cc-3455-4370-9fb7-8cf5bedf48aa",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:06.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "airbnb.com",
      "root_domain": "airbnb.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:07.286000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Airbnb",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:07.286000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Airbnb is the world's largest community-driven hospitality company, offering homes and experiences in 191 countries. It is an online marketplace connecting people to unique accommodations and experiences globally.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "2ad3f639-b299-4a13-aa34-108a9a39d105"
        },
        "title": "Internet",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "4ba0e2df-7ead-40be-a7ed-53fe9105d9f8"
        },
        "title": "Web Services & Apps",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "ff43cba9-81bd-4f65-aae8-f7775098037e"
        },
        "title": "Travel & Leisure",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "538a06f9-4fb8-419f-bb70-f2999b5039b6"
        },
        "title": "Marketplace",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:07.287000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "888 Brannan Street",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "San Francisco",
      "region": "California",
      "postcode": "94103",
      "country_code": "US",
      "latitude": "37.7719769",
      "longitude": "-122.4050479",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:07.287000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/2f14b698-286f-4add-9a42-00b1bfb2adb6",
      "attribute_type": "text"
    }
  ],
  "angellist": [
    {
      "active_from": "2025-11-11T01:18:07.287000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://angel.co/airbnb",
      "attribute_type": "text"
    }
  ],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:07.287000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/airbnb",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:07.287000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/Airbnb",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 883549,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "948f408c-0468-454d-a32b-99ba914d44bd"
        },
        "title": "$1B-$10B",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2008-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:07.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "1c396291-7c1f-4005-9ce0-44e6608d9f49"
        },
        "title": "5K-10K",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:06.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:06.878000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:06.866000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 35
- **ID**: `54b490bc-e327-5c56-825b-ee4969e1b945`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "54b490bc-e327-5c56-825b-ee4969e1b945",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender31.com",
      "root_domain": "testlender31.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 31",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Eastern�Bank�(formerly�Cambridge�Trust)",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.809000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.205000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "2e4dc332-9fcb-59d1-9b8d-fdfe9fb17c14",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.607000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 36
- **ID**: `56f2085a-a621-53bf-848d-66046ce2383d`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "56f2085a-a621-53bf-848d-66046ce2383d",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender18.com",
      "root_domain": "testlender18.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 18",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Customers�Bank",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.641000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.223000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "805dd875-da56-532e-b881-f7738a4ba9bb",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.560000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 37
- **ID**: `57796a95-5e43-4e91-9a1c-b40c6f3ad9d7`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T16:36:41.156000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "57796a95-5e43-4e91-9a1c-b40c6f3ad9d7",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T16:36:41.193000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "lovable.dev",
      "root_domain": "lovable.dev",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T16:36:44.397000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Lovable",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-12-22T16:36:44.398000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://twitter.com/lovable_dev",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-12-22T16:36:42.279000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-21T22:19:28.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-22T16:40:53.509000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T16:37:46.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-12-22T16:36:42.279000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-21T22:19:28.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-22T16:40:53.509000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T16:37:46.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-22T16:40:53.509000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 14.685828342459502,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-22T16:36:42.279000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "aef4b515-9a18-4e04-9537-5f47f3474a5a"
        },
        "title": "Weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-22T16:36:42.279000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T16:36:41.235000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-12-22T16:36:41.146000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T16:36:41.272000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 38
- **ID**: `59dbfdd1-7681-4a4e-a49b-ca25f4179fd4`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T20:49:44.639000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "59dbfdd1-7681-4a4e-a49b-ca25f4179fd4",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T20:49:44.736000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "logisense.com",
      "root_domain": "logisense.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T20:49:55.199000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "LogiSense",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-22T20:49:55.199000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "LogiSense is a global leader in usage rating and billing solutions, empowering CSPs with EngageIP for quick service launches and accurate billing. They revolutionize billing with transparency and trust, changing the industry for the better.",
      "attribute_type": "text"
    }
  ],
  "team": [
    {
      "active_from": "2025-12-22T20:49:55.300000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "3a9437fb-e95c-4135-bda3-aceaea692ad1",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "767fcba7-06a2-40f0-bbab-c9c66fd3c594"
        },
        "title": "Telecommunications",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "911728d3-81f9-490a-9c6f-b637003eaf62"
        },
        "title": "Enterprise",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "621e686d-4150-456d-8649-4ae2d21fbeaa"
        },
        "title": "ISP",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-22T20:49:55.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "2ad3f639-b299-4a13-aa34-108a9a39d105"
        },
        "title": "Internet",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-12-22T20:49:55.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "278 Pinebush Road #102",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Cambridge",
      "region": "Ontario",
      "postcode": "N1T 1Z6",
      "country_code": "CA",
      "latitude": "43.4141268",
      "longitude": "-80.3026498",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-12-22T20:49:55.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/e6007ecc-4f13-4d95-a2b7-eb8b2411bae2",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [
    {
      "active_from": "2025-12-22T20:49:55.201000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/265994123475263",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-22T20:49:55.201000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/logisense-corporation",
      "attribute_type": "text"
    }
  ],
  "twitter": [
    {
      "active_from": "2025-12-22T20:49:55.200000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/LogiSense",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-12-22T20:49:55.201000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 1448,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-12-22T20:49:55.202000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "1229fcd9-3785-4e72-9105-30d4a18b8940"
        },
        "title": "$10M-$50M",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-12-22T20:49:55.202000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1998-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-12-22T20:49:55.202000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "96536de7-3fab-4190-b4a8-949aabc9acae"
        },
        "title": "51-250",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-12-22T20:49:45.480000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:49:42.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-22T20:49:45.480000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:49:42.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-12-22T20:49:45.480000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:49:42.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-22T20:49:45.480000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:49:42.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-22T20:49:45.480000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 0.9999999524678683,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-22T20:49:45.480000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "d1ea6452-01b8-4176-870d-556f0ab69ea4"
        },
        "title": "Very weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-22T20:49:45.480000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T20:49:44.820000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-12-22T20:49:44.594000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T20:49:44.884000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 39
- **ID**: `5a422766-3ac0-5ed9-83de-1ba20511c498`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "5a422766-3ac0-5ed9-83de-1ba20511c498",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender40.com",
      "root_domain": "testlender40.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 40",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Monroe�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:27.160000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:29.174000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "78a2190a-1be4-5c93-a660-71754dfdd470",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:27.144000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 40
- **ID**: `5acd70d9-c894-49fd-b706-bf18d7c3414d`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-20T20:12:35.946000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "5acd70d9-c894-49fd-b706-bf18d7c3414d",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-20T20:12:35.987000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "argentline.com",
      "root_domain": "argentline.com",
      "attribute_type": "domain"
    }
  ],
  "name": [],
  "description": [],
  "team": [
    {
      "active_from": "2025-11-20T20:12:37.661000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "465ce304-3091-40de-8e2d-e14bcd7b9475",
      "attribute_type": "record-reference"
    },
    {
      "active_from": "2025-11-20T20:12:37.826000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "2c083dc0-cdd1-4d7e-9e19-76bf3ccb8a5e",
      "attribute_type": "record-reference"
    },
    {
      "active_from": "2025-12-20T04:05:37.019000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "1487ccde-a5a9-46ab-ae89-f48f83267225",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-20T20:12:36.025000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-20T20:12:35.934000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-20T20:12:36.072000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 41
- **ID**: `5b99f959-cac8-47e7-b0dc-e9e4956f0d63`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T19:57:09.601000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "5b99f959-cac8-47e7-b0dc-e9e4956f0d63",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T19:57:09.601000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender4.com",
      "root_domain": "testlender4.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T19:57:09.601000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 4",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T19:57:09.601000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SaaS Capital data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T19:57:09.601000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T19:55:18.564000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T19:57:09.601000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:41:18.269000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "2851df19-86d6-4452-ab4f-2009a22ffc87",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:40:08.950000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T19:57:09.601000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 42
- **ID**: `665963ed-e711-4a7e-bc40-5a149e081cd0`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:24:02.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "665963ed-e711-4a7e-bc40-5a149e081cd0",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:24:02.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender14.com",
      "root_domain": "testlender14.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:24:02.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 14",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:24:02.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Runway data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:24:02.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:22:15.093000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:24:02.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:42:55.810000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "17b1e438-8c3f-4ac7-b918-4b90cd1dafd5",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:41:58.500000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:24:02.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 43
- **ID**: `68d56d53-14ae-5f2c-81a8-21496130a139`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "68d56d53-14ae-5f2c-81a8-21496130a139",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower10.com",
      "root_domain": "testborrower10.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 10 - Fintech (US, $25M+ ARR)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.097000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "FinTech (payments + B2B software)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$28M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$55M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "venture debt; senior secured term facility (1L); term loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.918000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$30M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 44
- **ID**: `6acd03ff-916e-54cb-ad5b-400c4425aeb9`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "6acd03ff-916e-54cb-ad5b-400c4425aeb9",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower22.com",
      "root_domain": "testborrower22.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 22 - Pre-Scale AI Startup (Edge Case)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.182000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "AI / ML (early-stage B2B software)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$0.3M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$0.2M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.107000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 45
- **ID**: `6b4f2c9a-0902-4875-939d-0d236bbb8b70`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:08.889000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "6b4f2c9a-0902-4875-939d-0d236bbb8b70",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:08.889000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "disney.com",
      "root_domain": "disney.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:09.271000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Disney",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:09.271000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Disney serves as a comprehensive hub for Disney enthusiasts, offering a wide array of entertainment options including theme parks, resorts, movies, television programs, characters, and interactive video games.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:09.274000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:09.274000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "4d1fbc2f-b9c3-49e9-bf2e-0b6bf6a7509d"
        },
        "title": "Entertainment & Recreation",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:09.272000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "500 South Buena Vista Street",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Burbank",
      "region": "California",
      "postcode": "91521",
      "country_code": "US",
      "latitude": "34.1567236",
      "longitude": "-118.3248745",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:09.272000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/981db6b3-2541-4cda-878e-92d8228b9293",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:09.272000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/disney",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:09.272000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/Disney",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:09.273000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 10140332,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:09.273000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:09.273000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1923-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:09.274000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "8ab9529a-b223-4e7a-8d9b-0f7f9142a8bf"
        },
        "title": "100K+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:08.889000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:08.901000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:08.889000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 46
- **ID**: `703903e3-93f8-505b-b92c-a2ae40d9efaf`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "703903e3-93f8-505b-b92c-a2ae40d9efaf",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower35.com",
      "root_domain": "testborrower35.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 35 - SBA 504: Data Infrastructure / IoT Manufacturing (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.349000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "IoT hardware + embedded software (manufacturing)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.0M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6.0M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Commercial real estate; Equipment purchase",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SBA 504 loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.155000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$4M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 47
- **ID**: `7224db10-c2aa-40c7-b505-5d70afd4a784`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:11:22.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "7224db10-c2aa-40c7-b505-5d70afd4a784",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:11:22.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender8.com",
      "root_domain": "testlender8.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:11:22.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 8",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:11:22.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Espresso data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:11:22.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:09:23.920000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:11:22.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:44:35.180000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "0439db0d-212b-4c6c-8e75-a4df15f51184",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:43:26.063000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:11:22.343000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 48
- **ID**: `733d4745-0c46-5074-b43e-8975253129a6`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "733d4745-0c46-5074-b43e-8975253129a6",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower15.com",
      "root_domain": "testborrower15.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 15 - Boundary Case (Low ARR / High Ask)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:08.977000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Consumer mobile app (non-recurring revenue)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.0M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.2M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "venture debt / ARR line (uncertain fit); term loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.881000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$30M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 49
- **ID**: `7793c19c-e9e5-484e-9f96-85289dbb9f4b`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:20:44.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "7793c19c-e9e5-484e-9f96-85289dbb9f4b",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:20:44.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender12.com",
      "root_domain": "testlender12.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:20:44.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 12",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:20:44.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Hercules data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:20:44.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:19:35.408000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:20:44.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:46:07.972000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "06c31343-6b88-41ef-aca5-5d09cb39762c",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:45:10.871000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:20:44.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 50
- **ID**: `788cf0c0-6193-5512-81d3-65007f518b90`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "788cf0c0-6193-5512-81d3-65007f518b90",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender25.com",
      "root_domain": "testlender25.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 25",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Top�Corner�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.709000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.203000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "c2d2e565-19ed-516d-9f10-7797a23f3808",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.594000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 51
- **ID**: `79ac42d0-c293-5592-8309-ce64a7909365`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "79ac42d0-c293-5592-8309-ce64a7909365",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower24.com",
      "root_domain": "testborrower24.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 24 - Robotics Software-Enabled Business",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.211000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Robotics software + services (software-enabled hardware)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$15M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$22M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital; Equipment purchase",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ABL revolver; WC line; equipment lease",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.106000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$14M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 52
- **ID**: `7bcb70bd-63c1-4c8c-8e03-92d51cbb9d3a`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T19:59:55.492000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "7bcb70bd-63c1-4c8c-8e03-92d51cbb9d3a",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T19:59:55.492000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender6.com",
      "root_domain": "testlender6.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T19:59:55.492000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 6",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T19:59:55.492000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Lago Innovation data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T19:59:55.492000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T19:58:54.015000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T19:59:55.492000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:47:39.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "9a6f7929-9c43-4b81-8eb0-f9df0fdec51a",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:46:39.242000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T19:59:55.492000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 53
- **ID**: `7cad7f15-7422-5985-8592-8438ce399f31`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "7cad7f15-7422-5985-8592-8438ce399f31",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower25.com",
      "root_domain": "testborrower25.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 25 - Crypto / Web3 Infrastructure (Edge)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.300000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Crypto / Web3 infrastructure (software)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$9M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital; Extending runway",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$40M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 54
- **ID**: `7d4de77e-3e68-4bc1-ba0a-5d9c04d83e4e`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-20T14:53:34.857000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "7d4de77e-3e68-4bc1-ba0a-5d9c04d83e4e",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-20T14:53:34.927000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "pei.group",
      "root_domain": "pei.group",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-20T14:53:35.339000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "PEI",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-20T14:53:35.340000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "PEI GROUP is a business intelligence provider that focuses on delivering insights and connections for investment professionals in specialized global markets, identifying high growth sectors and themes essential for successful capital investment.",
      "attribute_type": "text"
    }
  ],
  "team": [
    {
      "active_from": "2025-12-20T14:53:35.222000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "4eef49ae-72e4-4e29-8f1d-92e7afd9b3f1",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [
    {
      "active_from": "2025-12-20T14:53:35.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:53:35.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "eacbd746-f8ce-4d09-8be5-142f2b9d5389"
        },
        "title": "Investment Banking",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:53:35.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:53:35.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "912eb9a9-01bb-40e8-9259-e3a5cb81f955"
        },
        "title": "Finance",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-12-20T14:53:35.340000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "601 Lexington Avenue #55th floor",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "New York",
      "region": "New York",
      "postcode": "10022",
      "country_code": "US",
      "latitude": "40.7584868",
      "longitude": "-73.9701916",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-12-20T14:53:35.340000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/11b21091-63e2-41d2-9d20-ecc089464fa5",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:52:58.931000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/pei",
      "attribute_type": "text"
    }
  ],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [
    {
      "active_from": "2025-12-20T14:53:35.341000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "8f2945f3-5ed8-464e-8026-6c338ac49602"
        },
        "title": "$100M-$250M",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-12-20T14:53:35.341000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2001-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-12-20T14:53:35.342000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "3075ea4f-ff1a-4968-8f21-17f7e5176823"
        },
        "title": "251-1K",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [
    {
      "active_from": "2025-12-21T21:15:27.325000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-12-22T21:00:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_email_interaction": [
    {
      "active_from": "2025-12-20T14:53:35.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-10T20:44:50.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-22T20:35:20.320000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:33:02.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-12-20T14:53:35.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-10T20:44:50.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-22T20:35:20.320000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T20:33:02.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [
    {
      "active_from": "2025-12-21T21:15:27.325000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-12-22T21:00:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-22T20:35:20.320000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 12.922332116510761,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-20T14:53:35.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "aef4b515-9a18-4e04-9537-5f47f3474a5a"
        },
        "title": "Weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-20T14:53:35.461000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-20T14:53:34.980000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-12-20T14:53:34.842000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-20T14:53:35.011000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 55
- **ID**: `7f1f890a-681a-5abb-98a6-cd99939a2e32`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "7f1f890a-681a-5abb-98a6-cd99939a2e32",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower34.com",
      "root_domain": "testborrower34.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 34 - Micro Ticket: IT Services + MSP (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.343000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "IT services (managed services + light software)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2.2M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2.0M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Equipment purchase",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "equipment finance / capex lease",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$0.5M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 56
- **ID**: `8aebf89f-0396-5b05-95d2-02a5055aa46a`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "8aebf89f-0396-5b05-95d2-02a5055aa46a",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower16.com",
      "root_domain": "testborrower16.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 16 - DevOps / Observability SaaS",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.036000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "DevOps / Observability (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$18M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$16M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Acquisitions; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "one-stop senior (unitranche) term loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.910000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$14M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 57
- **ID**: `8b716f88-d1f3-5abc-a27c-4caba4f6308f`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "8b716f88-d1f3-5abc-a27c-4caba4f6308f",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender35.com",
      "root_domain": "testlender35.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 35",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ATEL",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.793000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.214000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "41867cef-99f0-5800-9c6d-1c00e086c701",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.604000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 58
- **ID**: `8c4c3206-0880-5962-99d3-bbf205c8b500`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "8c4c3206-0880-5962-99d3-bbf205c8b500",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower18.com",
      "root_domain": "testborrower18.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 18 - Usage-Based API / AI Platform",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:08.931000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Usage-based software platform (non-ARR)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$15.4M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$14M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital; Extending runway",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "working-cap revolver; ARR-based line",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.809000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 59
- **ID**: `8c6aebb4-b580-5502-b38e-440eac23b946`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "8c6aebb4-b580-5502-b38e-440eac23b946",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower36.com",
      "root_domain": "testborrower36.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 36 - RBF: Bootstrapped B2B SaaS (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.337000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "B2B Software / SaaS",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$3.0M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2.6M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "revenue-share financing (RBF)",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.154000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 60
- **ID**: `8db8f293-e634-478a-97f2-690cd699caac`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:42.417000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "8db8f293-e634-478a-97f2-690cd699caac",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:42.501000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "saintgermainenterprises.com",
      "root_domain": "saintgermainenterprises.com",
      "attribute_type": "domain"
    }
  ],
  "name": [],
  "description": [],
  "team": [
    {
      "active_from": "2025-11-11T01:18:42.800000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "bd5312ad-1beb-4e25-ae08-781bc8645b99",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-11-21T01:26:07.921000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T19:06:18.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-11-30T20:50:48.831000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-30T20:47:53.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-11-21T01:26:07.921000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T19:06:18.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-11-30T20:50:48.831000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-30T20:47:53.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-11-30T20:50:48.831000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 7.9173208989276755,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-11-20T20:15:32.941000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "aef4b515-9a18-4e04-9537-5f47f3474a5a"
        },
        "title": "Weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-11-20T20:15:32.941000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:42.562000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:42.397000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:42.600000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 61
- **ID**: `8e29d2c4-8172-5017-a1a7-43f57274cae0`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "8e29d2c4-8172-5017-a1a7-43f57274cae0",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender39.com",
      "root_domain": "testlender39.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 39",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Horizon",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:27.171000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:29.176000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "bce6c73b-dab6-51f0-9696-6cdd43245e06",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:27.147000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 62
- **ID**: `8ec5ef4c-3368-5537-9a01-1cab770c8bd1`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "8ec5ef4c-3368-5537-9a01-1cab770c8bd1",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower30.com",
      "root_domain": "testborrower30.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 30 - Asia DevOps SaaS (Singapore)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.266000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Developer tools (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Singapore",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12.4M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$10.8M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ARR Loans; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$12M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 63
- **ID**: `90155e75-bb9c-5049-b278-8d1623e0eda1`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "90155e75-bb9c-5049-b278-8d1623e0eda1",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender34.com",
      "root_domain": "testlender34.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 34",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Deep�Ocean",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.764000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.213000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "d2dbae57-72e2-545f-9f62-565348918aff",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 64
- **ID**: `94f250cb-7e1e-4d78-8445-af3ac45ade1e`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:04.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "94f250cb-7e1e-4d78-8445-af3ac45ade1e",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:04.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "apple.com",
      "root_domain": "apple.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:05.613000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Apple",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:05.614000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Apple is a multinational technology corporation that designs, manufactures, and markets a wide range of consumer electronics, personal computers, and software, including popular products like the iPhone, iPad, Mac, and Apple Watch, while also providing...",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "d5a9029d-40da-4dbf-81b7-0fb6f1572851"
        },
        "title": "E-commerce",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "db576123-5c63-465d-96bb-2d1bec4a2371"
        },
        "title": "Consumer Discretionary",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "1d4a1c4c-4dfe-4fd3-a019-c35f6bcb0697"
        },
        "title": "Computer Hardware",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "710d28af-6106-4673-9295-e82a3acbe0e9"
        },
        "title": "Consumer Electronics",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "e0558ac9-894c-4d7d-b98b-784de8d87404"
        },
        "title": "Retail",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "15fc4f17-b675-47d2-941d-08b93fc649ab"
        },
        "title": "Mobile",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:05.614000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "1 Apple Park Way",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Cupertino",
      "region": "California",
      "postcode": "95014",
      "country_code": "US",
      "latitude": "37.3330288",
      "longitude": "-122.0090292",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:05.614000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/999e33a7-1ecb-4408-b819-5538ad718f63",
      "attribute_type": "text"
    }
  ],
  "angellist": [
    {
      "active_from": "2025-11-11T01:18:05.616000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://angel.co/apple",
      "attribute_type": "text"
    }
  ],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:05.615000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/137947732957611",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:05.615000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/Apple",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:05.616000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 9119742,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:05.616000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:05.616000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1976-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:05.617000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "8ab9529a-b223-4e7a-8d9b-0f7f9142a8bf"
        },
        "title": "100K+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:04.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:04.918000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:04.899000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 65
- **ID**: `9638abb9-6fdf-465c-9509-b630985647de`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-20T14:54:17.564000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "9638abb9-6fdf-465c-9509-b630985647de",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-20T14:54:17.619000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "unsubscribe2.customer.io",
      "root_domain": "customer.io",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-20T14:54:18.263000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Customer.io",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-20T14:54:18.263000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Customer.io is a versatile marketing automation tool that personalizes customer communications through email, push notifications, and text messages, enabling targeted messaging and enhanced customer engagement.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "15fc4f17-b675-47d2-941d-08b93fc649ab"
        },
        "title": "Mobile",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "911728d3-81f9-490a-9c6f-b637003eaf62"
        },
        "title": "Enterprise",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "dc5ac969-b8ff-487e-a8bb-779064a346a7"
        },
        "title": "Automation",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "a81da362-d8d8-4b21-bdf9-f18a9efece0d"
        },
        "title": "Marketing & Advertising",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-12-20T14:54:18.264000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "244 5th Avenue #2238",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "New York",
      "region": "New York",
      "postcode": "10001",
      "country_code": "US",
      "latitude": "40.7446258",
      "longitude": "-73.987714",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-12-20T14:54:18.263000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/74a6ab9e-e2f4-46b6-b193-dac3c0a9e478",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [
    {
      "active_from": "2025-12-20T14:54:18.264000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/customerio",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:53:03.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/customer-io",
      "attribute_type": "text"
    }
  ],
  "twitter": [
    {
      "active_from": "2025-12-20T14:54:18.264000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/CustomerIO",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-12-20T14:54:18.265000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 4578,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-12-20T14:54:18.265000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "65cbb063-543d-4c8b-b264-94e1a6bf4268"
        },
        "title": "$1M-$10M",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "currency_code": "USD",
      "currency_value": 3300000,
      "attribute_type": "currency"
    }
  ],
  "foundation_date": [
    {
      "active_from": "2025-12-20T14:54:18.265000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2012-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-12-20T14:54:18.266000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "b36f7e54-e3bf-4d4b-8781-db9186f6c0c3"
        },
        "title": "11-50",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-12-20T14:54:19.224000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-20T14:54:15.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-20T14:54:19.224000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-20T14:54:15.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-12-20T14:54:19.224000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-20T14:54:15.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-20T14:54:19.224000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-20T14:54:15.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-20T14:54:19.224000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 0.9999999524678683,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-20T14:54:19.224000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "d1ea6452-01b8-4176-870d-556f0ab69ea4"
        },
        "title": "Very weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-20T14:54:19.224000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-20T14:54:17.656000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-12-20T14:54:17.553000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-20T14:54:17.674000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 66
- **ID**: `983b3474-914d-59c7-bcf5-b38f3a6914f4`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "983b3474-914d-59c7-bcf5-b38f3a6914f4",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower2.com",
      "root_domain": "testborrower2.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 2 - Biotech Tools (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.159000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Biotechnology / Life Sciences (tools & diagnostics)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$30M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$32M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "venture debt facility; senior secured term loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.916000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$60M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 67
- **ID**: `9e6472c6-21d2-48df-b9f0-2a162da9281f`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:14:10.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "9e6472c6-21d2-48df-b9f0-2a162da9281f",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:14:10.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender9.com",
      "root_domain": "testlender9.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:14:10.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 9",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:14:10.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Boathouse Capital data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:14:10.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:12:48.485000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:14:10.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:49:19.251000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "082dfbea-81b8-4e70-a6a3-79057a3564fe",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:48:11.929000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:14:10.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 68
- **ID**: `a0390cd3-5d7c-501f-8027-66bb8c604d73`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "a0390cd3-5d7c-501f-8027-66bb8c604d73",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower6.com",
      "root_domain": "testborrower6.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 6 - Early-stage Cybersecurity SaaS (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:08.947000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Cybersecurity (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2.1M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.9M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Commercial real estate; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "venture debt (early-stage) / growth debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.851000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 69
- **ID**: `a2038f65-f2a6-5e64-8e3c-72065c045e97`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "a2038f65-f2a6-5e64-8e3c-72065c045e97",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower7.com",
      "root_domain": "testborrower7.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 7 - Climate Tech XaaS (Canada)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.111000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Climate Tech (B2B XaaS / software-enabled services)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5.2M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$4.7M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 70
- **ID**: `a25562ab-5846-51f1-af2d-98e038a4290c`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "a25562ab-5846-51f1-af2d-98e038a4290c",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower5.com",
      "root_domain": "testborrower5.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 5 - Bootstrapped B2B SaaS (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.012000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "B2B Software / SaaS",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6.5M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6.0M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "cash-flow term loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.883000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$3M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 71
- **ID**: `a2debd5a-ef2e-57b5-ba68-b985d57b1ebf`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "a2debd5a-ef2e-57b5-ba68-b985d57b1ebf",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender24.com",
      "root_domain": "testlender24.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 24",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "WTI",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.658000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.207000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "13554a64-df53-5956-af80-56390cfa81a6",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.561000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 72
- **ID**: `a3443742-a4b0-562b-b538-c9a2fad7223e`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "a3443742-a4b0-562b-b538-c9a2fad7223e",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender19.com",
      "root_domain": "testlender19.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 19",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Comerica",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.614000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.210000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "5a491090-bf4a-5955-a9ab-da8655d3e6f5",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.498000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 73
- **ID**: `a8a475c7-f292-5b40-997d-9e0e178196f8`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "a8a475c7-f292-5b40-997d-9e0e178196f8",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower9.com",
      "root_domain": "testborrower9.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 9 - Hardware Manufacturing (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.173000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Hardware / Manufacturing (industrial equipment)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$0.8M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital; Equipment purchase",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Equipment Leasing",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.922000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 74
- **ID**: `b27c6e77-efd9-5516-b4a2-95039594aff0`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "b27c6e77-efd9-5516-b4a2-95039594aff0",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender21.com",
      "root_domain": "testlender21.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 21",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Trinity�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.692000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.231000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "701407c1-153e-5096-ac94-70885161d608",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.568000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 75
- **ID**: `b3bccf96-318d-43df-844e-71ec615db689`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:09.861000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "b3bccf96-318d-43df-844e-71ec615db689",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:09.861000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "microsoft.com",
      "root_domain": "microsoft.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:10.331000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Microsoft",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:10.332000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Microsoft develops, licenses, and supports a wide range of software products and services, including operating systems, productivity applications, and cloud-based solutions, while also designing and manufacturing various devices such as personal comput...",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:10.335000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:10.335000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:10.335000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "5ed0ce7d-6e70-4bf1-8856-65385d665f5c"
        },
        "title": "Publishing",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:10.335000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "911728d3-81f9-490a-9c6f-b637003eaf62"
        },
        "title": "Enterprise",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:10.335000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:10.335000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:10.332000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "1 Microsoft Way",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Redmond",
      "region": "Washington",
      "postcode": "98052",
      "country_code": "US",
      "latitude": "47.6393782",
      "longitude": "-122.1282593",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:10.332000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/6227df49-e4a8-4223-8f5e-f7e12289f4b3",
      "attribute_type": "text"
    }
  ],
  "angellist": [
    {
      "active_from": "2025-11-11T01:18:10.333000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://angel.co/microsoft",
      "attribute_type": "text"
    }
  ],
  "facebook": [
    {
      "active_from": "2025-11-11T01:18:10.333000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/microsoft",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:10.332000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/Microsoft",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:10.334000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 12814907,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:10.334000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:10.334000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1975-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:10.335000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "8ab9529a-b223-4e7a-8d9b-0f7f9142a8bf"
        },
        "title": "100K+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:09.861000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:09.877000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:09.861000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 76
- **ID**: `b531ea94-7a9b-510a-a644-f4a5d79cfa35`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "b531ea94-7a9b-510a-a644-f4a5d79cfa35",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower31.com",
      "root_domain": "testborrower31.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 31 - Non-US HQ w/ US Ops (Germany + US subsidiary)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.277000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Security software (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Germany (US subsidiary)",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$9.1M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$8.0M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Extending runway; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.142000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$6M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 77
- **ID**: `b7927597-424a-5737-858c-13dfe3484a4f`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "b7927597-424a-5737-858c-13dfe3484a4f",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender28.com",
      "root_domain": "testlender28.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 28",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "WindSail�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.686000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "c7d0507e-aa4f-5a00-aa8f-70a17cd31566",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.583000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 78
- **ID**: `bb73c6c6-05b6-5df0-a448-02bbf9ccdf6b`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "bb73c6c6-05b6-5df0-a448-02bbf9ccdf6b",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower8.com",
      "root_domain": "testborrower8.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 8 - Subscription AI App (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.084000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Subscription AI application (SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$3.6M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$3.2M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Acquisitions; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "recurring-revenue line (RRL); revolver",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.917000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$1.5M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 79
- **ID**: `c24304e8-99c8-4b80-bfc6-46303ab2ca79`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T19:52:38.506000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "c24304e8-99c8-4b80-bfc6-46303ab2ca79",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T19:52:38.506000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender2.com",
      "root_domain": "testlender2.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T19:52:38.506000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 2",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T19:52:38.506000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "RiverSaaS data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T19:52:38.506000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T19:50:52.900000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T19:52:38.506000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:51:36.399000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "ad0fa525-30fd-4385-93b5-df84628bbc9c",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:50:45.543000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T19:52:51.512000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 80
- **ID**: `c2c4456e-5943-4c44-b202-ed3fc0dcb105`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:17:06.385000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "c2c4456e-5943-4c44-b202-ed3fc0dcb105",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:17:06.385000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender10.com",
      "root_domain": "testlender10.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:17:06.385000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 10",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:17:06.385000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "MidCap data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:17:06.385000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:15:49.693000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:17:06.385000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:14:35.219000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "377b9720-0199-4731-991f-445193fdd7c4",
      "attribute_type": "record-reference"
    },
    {
      "active_from": "2025-12-21T15:53:16.854000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "0cf1fb03-ea4c-429f-b4eb-1bec9863d44f",
      "attribute_type": "record-reference"
    },
    {
      "active_from": "2025-12-21T22:12:59.139000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "fd209e6c-d0a9-487e-8ce3-73548231cd75",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:52:14.556000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:17:06.385000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 81
- **ID**: `c4324d11-80bd-5b9b-8b45-dcae76ac65c3`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "c4324d11-80bd-5b9b-8b45-dcae76ac65c3",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower14.com",
      "root_domain": "testborrower14.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 14 - Security Software (Europe)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.164000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Security software (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Europe",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$16M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$15M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Acquisitions; Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "one-stop senior (unitranche); senior-secured term loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.915000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$20M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 82
- **ID**: `c91cba40-b2e2-455d-a750-8776d2b561b3`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-14T23:08:14.145000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "c91cba40-b2e2-455d-a750-8776d2b561b3",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-14T23:08:14.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "lightningpartners.com",
      "root_domain": "lightningpartners.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-14T23:08:16.043000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Lightning Partners",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-14T23:08:16.043000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Lightning Partners provides independent advisory services in mergers and acquisitions, as well as capital raising, specifically tailored for growth technology companies to achieve optimal transaction outcomes and enhanced valuations.",
      "attribute_type": "text"
    }
  ],
  "team": [
    {
      "active_from": "2025-12-14T23:08:15.874000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "fc36f3d5-a82f-496c-a832-65039aedf95a",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8c7d9e2c-d174-414b-b9f7-46785f8acefd"
        },
        "title": "Insurance",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "fc4dca9d-3967-4995-bccd-7afd2d23060c"
        },
        "title": "Consulting & Professional Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "911728d3-81f9-490a-9c6f-b637003eaf62"
        },
        "title": "Enterprise",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "eacbd746-f8ce-4d09-8be5-142f2b9d5389"
        },
        "title": "Investment Banking",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "912eb9a9-01bb-40e8-9259-e3a5cb81f955"
        },
        "title": "Finance",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-12-14T23:08:16.043000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": null,
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Winter Park",
      "region": "Florida",
      "postcode": "32790",
      "country_code": "US",
      "latitude": "28.5995709",
      "longitude": "-81.3527397",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-12-14T23:08:16.043000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/c477c49c-90cf-4f3e-9a19-0d6319b2a5fa",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:53:00.179000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/lightningpartners",
      "attribute_type": "text"
    }
  ],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [
    {
      "active_from": "2025-12-14T23:08:16.044000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "65cbb063-543d-4c8b-b264-94e1a6bf4268"
        },
        "title": "$1M-$10M",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-12-14T23:08:16.044000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2018-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-12-14T23:08:16.045000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "b36f7e54-e3bf-4d4b-8781-db9186f6c0c3"
        },
        "title": "11-50",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-12-14T23:08:17.382000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-14T23:08:12.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-15T03:15:41.075000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-15T03:11:55.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-12-14T23:08:17.382000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-14T23:08:12.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-15T03:15:41.075000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-15T03:11:55.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-15T03:15:41.075000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 2.9996627595254393,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-14T23:08:17.382000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "d1ea6452-01b8-4176-870d-556f0ab69ea4"
        },
        "title": "Very weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-14T23:08:17.382000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-14T23:08:14.283000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-12-14T23:08:14.107000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-14T23:08:14.382000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 83
- **ID**: `c9b6af14-4c04-5822-9532-7edd97c1850d`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "c9b6af14-4c04-5822-9532-7edd97c1850d",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender27.com",
      "root_domain": "testlender27.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 27",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "BigFoot",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.720000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.211000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "9d61c97e-1acf-515d-820c-3b2a461964a6",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.593000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 84
- **ID**: `d2450ffe-873f-5d18-9574-f34fe16f055f`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "d2450ffe-873f-5d18-9574-f34fe16f055f",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender38.com",
      "root_domain": "testlender38.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 38",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Orix",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:27.163000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:29.178000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "ef4b7b5a-ffe1-536b-9cb4-2855204211cb",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:27.141000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 85
- **ID**: `d2a18d97-c27e-5f28-b236-cffdc8150f1b`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "d2a18d97-c27e-5f28-b236-cffdc8150f1b",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower33.com",
      "root_domain": "testborrower33.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 33 - Robotics Hardware + Software (US, Sale-Leaseback)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.285000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Robotics (hardware + software)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$4M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$25M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Equipment purchase; Working capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "sale-leaseback (SLB); equipment lease",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.151000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$8M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 86
- **ID**: `d386433d-5b42-4d96-af3c-53ea4c17cf5c`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:03.878000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "d386433d-5b42-4d96-af3c-53ea4c17cf5c",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:03.878000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "attio.com",
      "root_domain": "attio.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-11T01:18:04.407000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Attio",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-11-11T01:18:04.408000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Attio provides a customizable and data-driven customer relationship management (CRM) platform that allows businesses to create tailored workflows and analyze real-time data to enhance collaboration and scalability.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "dc5ac969-b8ff-487e-a8bb-779064a346a7"
        },
        "title": "Automation",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "911728d3-81f9-490a-9c6f-b637003eaf62"
        },
        "title": "Enterprise",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "5ed0ce7d-6e70-4bf1-8856-65385d665f5c"
        },
        "title": "Publishing",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-11-11T01:18:04.408000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "25 Easton Street #25.3",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "London",
      "region": "Greater London",
      "postcode": "WC1X 0DS",
      "country_code": "GB",
      "latitude": "51.5260934",
      "longitude": "-0.1110312",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-11-11T01:18:04.408000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/580adb44-80f2-49ca-95c2-0aea3539f30d",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:53:00.084000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/attio",
      "attribute_type": "text"
    }
  ],
  "twitter": [
    {
      "active_from": "2025-11-11T01:18:04.409000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/attio",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-11-11T01:18:04.409000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 1340,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "65cbb063-543d-4c8b-b264-94e1a6bf4268"
        },
        "title": "$1M-$10M",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "currency_code": "USD",
      "currency_value": 31200000,
      "attribute_type": "currency"
    }
  ],
  "foundation_date": [
    {
      "active_from": "2025-11-11T01:18:04.409000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2019-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-11-11T01:18:04.410000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "b36f7e54-e3bf-4d4b-8781-db9186f6c0c3"
        },
        "title": "11-50",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-11-20T22:15:41.068000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T20:11:13.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-22T16:20:46.669000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T16:15:02.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-11-20T22:15:41.068000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T20:11:13.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-22T16:20:46.669000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-22T16:15:02.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "8df8b79a-0ee5-4887-ab3e-be5a79bb6d4f"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-22T16:20:46.669000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 16.487097228559843,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-21T12:55:12.534000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "f6678712-5471-425c-9b44-0c36a34085b4"
        },
        "title": "Good",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-04T16:05:14.882000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:03.878000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:03.908000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:03.878000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 87
- **ID**: `d7bae9cb-2f15-413c-b9c3-87fa6bee83d7`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T19:47:45.218000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "d7bae9cb-2f15-413c-b9c3-87fa6bee83d7",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T19:47:45.218000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender1.com",
      "root_domain": "testlender1.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T19:47:45.218000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 1",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T19:47:45.218000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Bridge Bank data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T19:47:45.218000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T19:43:36.215000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T19:47:45.218000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:54:43.557000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "340a42ec-bfad-4f4e-aa97-ce632ec5b912",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:53:47.782000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T19:50:39.378000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 88
- **ID**: `da7cd35c-7463-4d26-8b8f-37d54e53a42f`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-11T01:18:42.417000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "da7cd35c-7463-4d26-8b8f-37d54e53a42f",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-11T01:18:42.504000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "lenderbacked.com",
      "root_domain": "lenderbacked.com",
      "attribute_type": "domain"
    }
  ],
  "name": [],
  "description": [],
  "team": [
    {
      "active_from": "2025-11-11T01:18:42.930000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "b73416f0-4d72-46c5-acb9-d5af742f6f11",
      "attribute_type": "record-reference"
    },
    {
      "active_from": "2025-11-11T20:02:34.697000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "7d04785b-fabf-4e4a-980a-6e0f5fafd2c2",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-11T01:18:42.567000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-11T01:18:42.398000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-11T01:18:42.603000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 89
- **ID**: `df8303a5-03ef-58bb-9af9-3bd860f37f7d`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "df8303a5-03ef-58bb-9af9-3bd860f37f7d",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender37.com",
      "root_domain": "testlender37.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 37",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Golub",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:27.154000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:29.169000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "6c3f6b56-7204-5d60-bed0-934641a74d6d",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:27.133000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 90
- **ID**: `e1d66103-39a4-567c-984a-cc9ccb405522`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "e1d66103-39a4-567c-984a-cc9ccb405522",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower28.com",
      "root_domain": "testborrower28.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 28 - Climate Analytics SaaS (UK w/ US Subsidiary)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.272000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Climate analytics (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United Kingdom (US subsidiary)",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$18.0M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$16.2M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ARR Loans; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.120000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$14M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 91
- **ID**: `e1fc1d91-4f48-555e-add4-cd9e2493dac6`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "e1fc1d91-4f48-555e-add4-cd9e2493dac6",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower4.com",
      "root_domain": "testborrower4.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 4 - Wholesale Distributor (US/CA)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:09.179000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Wholesale / Distribution (A/R + inventory heavy)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Canada",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$5M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$80M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "ABL revolver; working-capital line",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.920000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$14M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 92
- **ID**: `e61e0cda-73cc-4f11-9c11-14eee8c29f12`
```json
{
  "record_id": [
    {
      "active_from": "2025-11-30T20:46:15.475000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "e61e0cda-73cc-4f11-9c11-14eee8c29f12",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-11-30T20:46:15.546000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "argentcap.com",
      "root_domain": "argentcap.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-11-30T21:59:32.167000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Argent",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [
    {
      "active_from": "2025-11-30T20:46:15.994000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "target_object": "people",
      "target_record_id": "a9fdf430-e158-40b1-8a3f-e36441efa36e",
      "attribute_type": "record-reference"
    }
  ],
  "categories": [],
  "primary_location": [
    {
      "active_from": "2025-11-30T20:48:37.049000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "3705 Shenandoah Street",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Dallas",
      "region": "Texas",
      "postcode": "75205",
      "country_code": "US",
      "latitude": "32.8397252",
      "longitude": "-96.7940976",
      "attribute_type": "location"
    }
  ],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [
    {
      "active_from": "2025-11-30T20:48:37.050000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "49c4c33e-46e1-4dbe-af81-c0807b254234"
        },
        "title": "$0-$1M",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [
    {
      "active_from": "2025-11-30T20:48:37.051000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "8511fa7e-2f1e-4d1b-94a3-3359369228cd"
        },
        "title": "1-10",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-11-30T20:46:15.582000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-11-30T20:46:15.455000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-11-30T20:46:15.668000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 93
- **ID**: `e72cf7ec-7363-5fd9-9d3a-f86aef835cff`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "e72cf7ec-7363-5fd9-9d3a-f86aef835cff",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower12.com",
      "root_domain": "testborrower12.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 12 - Franchise Acquisition (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:08.969000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Franchise (quick-service restaurants)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$3M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$18M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Acquisitions",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "SBA 7a loan",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:08.852000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$2.5M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 94
- **ID**: `e961c533-db13-59d1-a595-a1b5bbbe93f8`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "e961c533-db13-59d1-a595-a1b5bbbe93f8",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower37.com",
      "root_domain": "testborrower37.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 37 - Large-Scale SaaS (US, $100M+ ARR)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.356000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Enterprise software (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$120M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$110M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Refinancing; Recapitalizations",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "unitranche / senior secured term facility",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.160000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$150M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 95
- **ID**: `e9eaa605-9354-4498-9f81-a9edbd009aa6`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:22:10.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "e9eaa605-9354-4498-9f81-a9edbd009aa6",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:22:10.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender13.com",
      "root_domain": "testlender13.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:22:10.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 13",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:22:10.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Crestline data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:22:10.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:21:07.203000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:22:10.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:56:32.288000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "0e9113bc-e97b-496e-8f14-efb54862a2d7",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:55:10.661000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:22:10.942000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 96
- **ID**: `ed6f075d-6dfc-42c3-a6ea-a019786acde0`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-14T22:50:00.956000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "ed6f075d-6dfc-42c3-a6ea-a019786acde0",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-14T22:50:00.989000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "domain": "gmail.com",
      "root_domain": "gmail.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-14T22:50:01.702000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Google",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-14T22:50:01.702000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "Google specializes in organizing and providing access to the world's information through its highly regarded search services, catering to both individual users and corporate clients with innovative advertising and revenue-generating solutions.",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "c0d2395c-76e0-4e3e-9516-40e363543dbf"
        },
        "title": "Technology",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "6626e0d4-e360-4079-8c9e-eff195357f6a"
        },
        "title": "B2C",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "4ba0e2df-7ead-40be-a7ed-53fe9105d9f8"
        },
        "title": "Web Services & Apps",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "8286d0da-a8d4-4d26-b0e1-7331626d2f0a"
        },
        "title": "B2B",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "2ad3f639-b299-4a13-aa34-108a9a39d105"
        },
        "title": "Internet",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "5ed0ce7d-6e70-4bf1-8856-65385d665f5c"
        },
        "title": "Publishing",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "052395b4-1a81-4b8b-b11f-219ed970d383"
        },
        "title": "Information Technology & Services",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "173cfbbc-72f9-46f8-b365-24154990e0e5"
        },
        "title": "SAAS",
        "is_archived": false
      },
      "attribute_type": "select"
    },
    {
      "active_from": "2025-12-14T22:50:01.706000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "59d127e9-2564-45ad-b4f9-35dfc85fa6d3",
          "option_id": "7afd5b1a-5fab-41a4-8384-919422c7b2c0"
        },
        "title": "Broadcasting",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "primary_location": [
    {
      "active_from": "2025-12-14T22:50:01.703000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "line_1": "1600 Amphitheatre Parkway",
      "line_2": null,
      "line_3": null,
      "line_4": null,
      "locality": "Mountain View",
      "region": "California",
      "postcode": "94043",
      "country_code": "US",
      "latitude": "37.4213397",
      "longitude": "-122.0836193",
      "attribute_type": "location"
    }
  ],
  "logo_url": [
    {
      "active_from": "2025-12-14T22:50:01.702000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://brandbadge.clearbit.com/1d396c21-e421-4dd9-988e-55a8200c6e10",
      "attribute_type": "text"
    }
  ],
  "angellist": [],
  "facebook": [
    {
      "active_from": "2025-12-14T22:50:01.704000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://facebook.com/google",
      "attribute_type": "text"
    }
  ],
  "instagram": [],
  "linkedin": [
    {
      "active_from": "2025-12-21T12:53:04.051000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://linkedin.com/company/google",
      "attribute_type": "text"
    }
  ],
  "twitter": [
    {
      "active_from": "2025-12-14T22:50:01.703000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "https://x.com/Google",
      "attribute_type": "text"
    }
  ],
  "twitter_follower_count": [
    {
      "active_from": "2025-12-14T22:50:01.704000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 28946065,
      "attribute_type": "number"
    }
  ],
  "estimated_arr_usd": [
    {
      "active_from": "2025-12-14T22:50:01.705000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "229ef0db-b350-448f-9c59-352b187d3d6c",
          "option_id": "692a9915-9ee7-4906-8580-57531923ae61"
        },
        "title": "$10B+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "funding_raised_usd": [],
  "foundation_date": [
    {
      "active_from": "2025-12-14T22:50:01.705000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "1998-01-01",
      "attribute_type": "date"
    }
  ],
  "employee_range": [
    {
      "active_from": "2025-12-14T22:50:01.705000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "877dc94a-c527-496e-a4b9-a7509fbf5fbb",
          "option_id": "8ab9529a-b223-4e7a-8d9b-0f7f9142a8bf"
        },
        "title": "100K+",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "first_calendar_interaction": [
    {
      "active_from": "2025-12-15T19:05:31.908000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-12-15T19:00:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_calendar_interaction": [
    {
      "active_from": "2025-12-15T19:05:31.908000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-12-15T19:00:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_calendar_interaction": [],
  "first_email_interaction": [
    {
      "active_from": "2025-12-14T22:51:35.514000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T19:06:18.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_email_interaction": [
    {
      "active_from": "2025-12-14T22:51:35.514000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-12-14T22:51:26.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "094d4901-5422-4916-8d9a-d933c23b1d32"
      },
      "attribute_type": "interaction"
    }
  ],
  "first_interaction": [
    {
      "active_from": "2025-12-14T22:51:35.514000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "email",
      "interacted_at": "2025-11-20T19:06:18.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "last_interaction": [
    {
      "active_from": "2025-12-15T19:05:31.908000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "interaction_type": "meeting",
      "interacted_at": "2025-12-15T19:00:00.000000000Z",
      "owner_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "attribute_type": "interaction"
    }
  ],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [
    {
      "active_from": "2025-12-15T19:05:31.908000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": 9.821634756762238,
      "attribute_type": "number"
    }
  ],
  "strongest_connection_strength": [
    {
      "active_from": "2025-12-14T22:51:35.514000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "cabd78fd-f05c-4130-88ed-6542fc7b7dcf",
          "option_id": "aef4b515-9a18-4e04-9537-5f47f3474a5a"
        },
        "title": "Weak",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "strongest_connection_user": [
    {
      "active_from": "2025-12-14T22:51:35.514000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-14T22:50:01.016000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "value": "2025-12-14T22:50:00.944000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-14T22:50:01.040000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "system",
        "id": null
      },
      "referenced_actor_type": "system",
      "referenced_actor_id": null,
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [],
  "company_type": [],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 97
- **ID**: `f2ec6c83-51fa-5e85-81d2-f13414cfee3d`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "f2ec6c83-51fa-5e85-81d2-f13414cfee3d",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower26.com",
      "root_domain": "testborrower26.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 26 - EdTech SaaS (US)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.305000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "EdTech (B2B SaaS)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$8.2M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$7.4M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Growth capital; Extending runway",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Venture Debt; Term Loans",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.132000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$7M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 98
- **ID**: `f38dfb86-1ac1-57c2-a755-51a775bb624e`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "f38dfb86-1ac1-57c2-a755-51a775bb624e",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testborrower32.com",
      "root_domain": "testborrower32.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Borrower 32 - Mortgage Fintech Originator (US, Warehouse Line)",
      "attribute_type": "text"
    }
  ],
  "description": [],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-22T02:10:11.290000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [],
  "is_test_record_7": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "8dc4198e-3e0a-4a34-9e5d-7cf71091d2f5"
        },
        "title": "Borrower",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Fintech (mortgage originator + software platform)",
      "attribute_type": "text"
    }
  ],
  "test_geography": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "United States",
      "attribute_type": "text"
    }
  ],
  "test_arr_4": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$8M",
      "attribute_type": "text"
    }
  ],
  "test_ltm_revenue": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$40M",
      "attribute_type": "text"
    }
  ],
  "test_debt_use_cases": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Working capital",
      "attribute_type": "text"
    }
  ],
  "test_debt_products": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "mortgage warehouse line",
      "attribute_type": "text"
    }
  ],
  "test_loan_size": [
    {
      "active_from": "2025-12-22T02:10:11.150000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "$50M",
      "attribute_type": "text"
    }
  ]
}
```
### Company 99
- **ID**: `f7953d3e-a1a9-4696-9547-f44646059f39`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-17T20:25:25.136000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "f7953d3e-a1a9-4696-9547-f44646059f39",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-17T20:25:25.136000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender15.com",
      "root_domain": "testlender15.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-17T20:25:25.136000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 15",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-17T20:25:25.136000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Stifel data",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-17T20:25:25.136000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-17T20:24:06.757000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-17T20:25:25.136000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T15:57:59.821000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "efbd0dd3-baac-4008-b325-6b4b653ca3ae",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T15:56:57.739000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-17T20:25:25.136000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
### Company 100
- **ID**: `fc183e2e-67de-5ab8-8dc9-1a4775a78cd3`
```json
{
  "record_id": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "fc183e2e-67de-5ab8-8dc9-1a4775a78cd3",
      "attribute_type": "text"
    }
  ],
  "domains": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "domain": "testlender22.com",
      "root_domain": "testlender22.com",
      "attribute_type": "domain"
    }
  ],
  "name": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "TEST Lender 22",
      "attribute_type": "text"
    }
  ],
  "description": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "Expansion�Growth�Capital",
      "attribute_type": "text"
    }
  ],
  "team": [],
  "categories": [],
  "primary_location": [],
  "logo_url": [],
  "angellist": [],
  "facebook": [],
  "instagram": [],
  "linkedin": [],
  "twitter": [],
  "twitter_follower_count": [],
  "estimated_arr_usd": [],
  "funding_raised_usd": [],
  "foundation_date": [],
  "employee_range": [],
  "first_calendar_interaction": [],
  "last_calendar_interaction": [],
  "next_calendar_interaction": [],
  "first_email_interaction": [],
  "last_email_interaction": [],
  "first_interaction": [],
  "last_interaction": [],
  "next_interaction": [],
  "strongest_connection_strength_legacy": [],
  "strongest_connection_strength": [],
  "strongest_connection_user": [],
  "associated_deals": [],
  "associated_workspaces": [],
  "created_at": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "value": "2025-12-21T21:41:25.663000000Z",
      "attribute_type": "timestamp"
    }
  ],
  "created_by": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "referenced_actor_type": "workspace-member",
      "referenced_actor_id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a",
      "attribute_type": "actor-reference"
    }
  ],
  "company": [],
  "company_7": [],
  "company_3": [
    {
      "active_from": "2025-12-21T22:42:27.197000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "target_object": "lenders",
      "target_record_id": "ced170a7-3fef-50bd-9b9e-d0263df3a676",
      "attribute_type": "record-reference"
    }
  ],
  "is_test_record_7": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "21d5eea8-8123-4717-b60b-2902731a3ff4",
          "option_id": "efcf0ea1-72d0-47e1-b1d4-f98a5b29905b"
        },
        "title": "Yes",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "company_type": [
    {
      "active_from": "2025-12-21T21:41:25.563000000Z",
      "active_until": null,
      "created_by_actor": {
        "type": "workspace-member",
        "id": "0eb1dbfc-c828-4643-af8f-7fa1394ecc4a"
      },
      "option": {
        "id": {
          "workspace_id": "c572a3be-139c-4956-8ac0-fcb1008a934b",
          "object_id": "2e7cd53b-5362-4498-afeb-bd7b1fd90a87",
          "attribute_id": "f115e717-e2c7-455f-9dbc-d4b8b1cd920a",
          "option_id": "839a3798-d806-4c3e-a1d7-3d32c2b6c502"
        },
        "title": "Lender",
        "is_archived": false
      },
      "attribute_type": "select"
    }
  ],
  "test_industry": [],
  "test_geography": [],
  "test_arr_4": [],
  "test_ltm_revenue": [],
  "test_debt_use_cases": [],
  "test_debt_products": [],
  "test_loan_size": []
}
```
