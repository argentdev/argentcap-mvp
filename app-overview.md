# MVP-1 | Initial Matching App Prototype

## Project Overview
**Status**: Planned  
**Target Date**: 2025-12-29  
**Lead**: Developer  

### Goals
*   **Primary Goal (This Iteration)**: Discover the limitations of matching via LLMs with messy datasets and define what an ideal dataset/structure should look like.
    *   Identify which borrower inputs need standardization (selectable lists).
    *   Identify which lender attributes need standardization.
*   **Ideal Goal**: Build a simple, intuitive matching app where you can input a borrower/deal and get a ranked list of lenders.

### Development Process & Rules
*   **Cycles**: 1-week cycles.
    *   Monday: Kickoff
    *   Wednesday: Delivery
    *   Thursday: Testing
    *   Friday: Staging
    *   Monday: Delivery & Next Kickoff
*   **Workflow**:
    *   Dev works on one development issue at a time until done.
    *   Product Owner respects dev's estimated time of completion.
    *   After kickoff, the development issue does not change to avoid scope creep. Additions go to the next issue.
    *   Dev executes until all UATs (User Acceptance Tests) pass.

## Specifications

### Data Models
The system revolves around three core objects:

1.  **Lender**
    *   **Attributes**:
        *   `Credit Box` (Text): Contains unstructured data like Geography, Asset Type, Check Size, Borrower Type, etc.
        *   `IS TEST RECORD` = "Yes"
    *   **Relationships**:
        *   `Company`: The lender's Company object.

2.  **Borrower**
    *   **Attributes**:
        *   `Project Type` = "Marketplace Debt Raise"
        *   `IS TEST RECORD` = "Yes"
    *   **Relationships**:
        *   `Associated Client`: The relevant Client object.
        *   `Associated Lenders`: All lender objects matched to the borrower.

3.  **Matched List**
    *   A list including all lenders matched with the borrower.
    *   **Attributes**:
        *   Lender's credit box fields.
        *   **Match Category**: Best fit, Next best fit, Possible fit, No match.

## Roadmap & Issues

### Milestones
*   **PM Configuration and Loading**: Setting up project specs and data ingestion.
*   **Acceptance Testing**: Validating the system (Start/End sessions, Product Owner testing).
*   **Retrospective**: Reviewing spec quality, process, and speed.

### Key Tasks
*   **Data Ingestion & Formatting** (from Attio):
    *   [ALL-192] Ingest "Lenders" list from Attio.
    *   [ALL-193] Ingest "Companies" list from Attio.
    *   [ALL-195] Ingest "Deals" list from Attio.
*   **Requirements & Logic**:
    *   [ALL-196] Define requirements for "Lender" object.
    *   [ALL-198] Define requirements for "Borrower" object.
    *   [ALL-199] Create matched list logic (ranking and categorization).
*   **User Flow**:
    *   [ALL-171] User can start a new session after ending one.
    *   [ALL-170] User can end a session.
*   **Documentation**:
    *   [ALL-194] Update project spec to account for Attio data changes (Done).
    *   [ALL-184] ARR requirements text.

### Blockers / Critical Path
*   **Before Matching**:
    *   [ALL-186] & [ALL-187] (Details pending in Linear)
*   **Before Verification**:
    *   [ALL-188] "If we ran this, these would be the matched lenders for this borrower."

## Reference Documents
*   **Brief on Project Management Verbiage**: Defines the hierarchy of Product (Objective, User Stories) -> Systems (Requirements, Schema, Verification) -> Execution (Cycles, Projects, Milestones).

## Links
*   [Linear Project Page](https://linear.app/argentcap/project/mvp-1-or-initial-matching-app-prototype-fac7cf2fa4de)