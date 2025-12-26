# ArgentCap Data Schema Reference

This document outlines the data schema for the ArgentCap platform, derived from the "Argent Mind Map" and Attio data exports.

## Core Entities

### 1. Lenders
Represents financial institutions or lending partners.
*   **Attributes**:
    *   `Lender Name`: Text
    *   `Focus Industries`: Multi-select / Text (e.g., Technology, Healthcare, SaaS)
    *   `Focus Geographies`: Text (e.g., United States, Canada)
    *   `Focus Debt Products`: Text (e.g., Venture Debt, Term Loans, ABL)
    *   `Focus Debt Use Cases`: Text (e.g., M&A, Runway Extension, Working Capital)
    *   `Loan Size Requirements`: Text (e.g., $5M - $50M)
    *   `ARR Requirements`: Text (e.g., >$5M ARR)
    *   `LTM Revenue Requirements`: Text
    *   `Company Data Source`: Text (e.g., PitchBook, internal)
    *   `Lenders`: Record Reference (Self-reference or Parent/Child?)
    *   `Test Object`: Boolean/Select (for dev purposes)

### 2. Companies (Borrowers)
Represents the companies seeking capital.
*   **Attributes** (Inferred):
    *   `Name`: Text
    *   `Industry`: Select
    *   `Location`: Text
    *   `Financials`: (ARR, EBITDA, Revenue) - likely linked or stored as attributes.
    *   `Description`: Text

### 3. Deals / Transactions
Represents a specific financing opportunity or matching event.
*   **Relationships**:
    *   Linked to `Company` (Borrower)
    *   Linked to `Lender` (Potential Matches)
*   **Attributes**:
    *   `Stage`: Select (e.g., Sourcing, Matched, Term Sheet, Closed)
    *   `Deal Size`: Currency
    *   `Product Type`: Select

### 4. Users / People / Brokers
*   `People`: Contacts associated with Lenders or Companies.
*   `Brokers`: Intermediaries (if applicable).
*   `Users`: Platform users (Internal ArgentCap team).

## Relationships
*   **Lender <-> Company**: Matched via `Deals` or direct "Qualified" lists.
*   **Person <-> Company**: Employee/Founder relationship.
*   **Person <-> Lender**: Investment Officer/Partner relationship.

## Data Flow (Attio <-> App)
The Application acts as an intelligence layer on top of this schema:
1.  **Ingest**: Pull `Lender` criteria and `Company` details from Attio.
2.  **Match**: Run Agentic matching logic.
3.  **enrich**: Update Attio with potential matches or create new `Deal` records.
