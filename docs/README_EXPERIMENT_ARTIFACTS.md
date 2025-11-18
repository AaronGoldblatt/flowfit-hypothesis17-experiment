# FlowFit H17 Experiment: Complete Pilot Artifacts Guide

This directory contains all required pilot experiment artifacts for the **"Keep My Data Local" Trust Lift A/B Test** (Hypothesis H17) for FlowFit Cycle-Synced Fitness App.

---

## 📋 Artifact Inventory

### 1. **Design Mockups & Interactive Prototypes**

**Files:**
- `components/variant-a.tsx` – Control variant (no toggle)
- `components/variant-b.tsx` – Treatment variant (visible toggle + explanation)
- `components/variant-c.tsx` – Trust theater variant (badge + messaging)

**What They Are:**
- Interactive, clickable prototypes of a 3-screen onboarding flow
- Participants navigate: Landing → Features → Privacy/Data permission screen
- Variants differ only on the data permission screen (where privacy control is presented)

**How to Use:**
1. Visit the deployed prototype app (or run locally)
2. Click "Launch Prototype" for each variant
3. Read through as a participant would
4. Submit to URL-tracking tool or survey platform for randomized assignment

**Customization:**
- Update copy in each variant to match your app's branding/messaging
- Modify cycle phase descriptions (Follicular, Ovulation, Luteal, Menstrual) as needed
- Adjust colors via `app/globals.css` color tokens

---

### 2. **Experiment Protocol Document**

**File:** `docs/EXPERIMENT_PROTOCOL.md`

**What It Is:**
- Comprehensive 13-section protocol detailing hypothesis, method, variables, success criteria, and decision rules
- ~20 pages of procedural documentation

**Key Sections:**
1. Hypothesis statement (H17) + operationalization
2. Experimental conditions (A, B, C detailed descriptions)
3. Participant allocation & randomization strategy
4. Participant screening criteria
5. Step-by-step procedure (informed consent → prototype → survey)
6. Independent, dependent, and covariate variables
7. Success criteria & decision tree
8. Timeline (3–4 weeks total)
9. Limitations & biases
10. Analysis plan
11. Ethical considerations
12. Protocol checklist

**How to Use:**
1. **Before launch:** Review with PM, designer, legal (compliance check)
2. **Share with IRB (if required):** Submit for expedited review or exemption determination
3. **Assign roles:** Who handles recruitment? Data analysis? Debrief?
4. **Print & sign:** Protocol is binding document for team
5. **Reference during execution:** Refer to for any procedural questions

**Important Notes:**
- Customize recruitment channels (Cornell Tech → your channels)
- Adjust sample size if budget/timeline constraints
- Modify covariates if your research questions differ

---

### 3. **Survey Instrument**

**Files:**
- `docs/SURVEY_INSTRUMENT.json` – Structured JSON template (portable to Qualtrics, Google Forms, LimeSurvey)
- Can be copy-pasted into survey platform

**What It Is:**
- 7-section survey (~5–7 minutes) with:
  - Consent & screening
  - Prototype introduction
  - **Primary outcome:** Trust rating (0–10)
  - **Secondary outcomes:** Willingness to share, sign-up intent, perceived control, perceived risk
  - Covariates: Prior app use, privacy concern, political orientation
  - Demographics & open-ended feedback

**Key Questions:**

| Variable | Question | Scale | Type |
|----------|----------|-------|------|
| **Trust (Primary)** | "How much would you trust this app with menstrual & fitness data?" | 0–10 | Numeric |
| **Share Willingness** | "I would be willing to share menstrual cycle data" | 1–5 Likert | Likert |
| **Sign-Up Intent** | "Likelihood to create account if real" | 0–10 | Numeric |
| **Perceived Control** | "I feel in control of my data" | 1–5 Likert | Likert |
| **Data Risk Worry** | "Worried about misuse/leak" | 1–5 Likert | Likert |

**How to Use:**

### **Option A: Google Forms**
1. Create new Google Form
2. Paste questions manually or use form import feature
3. Set up variant randomization via URL parameters or separate links
4. Share with participants
5. Auto-export responses to CSV

### **Option B: Qualtrics**
1. Create new survey
2. Import JSON or paste questions
3. Set up survey flow with randomizer block
4. Configure anonymous responses
5. Generate unique links per variant
6. Export data post-collection

### **Option C: LimeSurvey**
1. Import JSON structure
2. Build out survey logic
3. Configure randomization
4. Deploy via direct URL or embedded link

**Customization:**
- Adjust Likert scale labels (e.g., change "Strongly Disagree" to "Disagree")
- Add/remove demographic questions based on your needs
- Add follow-up branching logic (e.g., if "Yes" to femtech, ask which apps)

---

### 4. **Data Analysis Templates**

**Files:**
- `docs/ANALYSIS_TEMPLATE.csv` – Data structure reference (shows expected columns)
- `scripts/analyze_h17.R` – R analysis script
- `scripts/analyze_h17.py` – Python analysis script

**What They Are:**
- Pre-built analysis workflows for calculating means, standard deviations, t-tests, and visualizations
- Designed to run post-collection once CSV is exported

**Key Outputs:**
1. **Summary statistics** by variant (mean trust, SD, N)
2. **Relative increase calculation** ((B – A) / A × 100%)
3. **Primary success criterion** check (Is relative increase ≥ 25%?)
4. **T-test results** (two-tailed, with p-value)
5. **Secondary criteria checks** (sign-up harm? perceived control increase?)
6. **Covariate analysis** (effect by privacy concern, femtech use, political orientation)
7. **Visualizations:**
   - Bar chart: Trust by variant
   - Box plot: Sign-up intent by variant
   - Bar chart: Perceived control by variant

**How to Use:**

### **Option A: R**
\`\`\`r
# 1. Save exported survey CSV as data/h17_responses.csv
# 2. Run from R console or RStudio:
source("scripts/analyze_h17.R")
# 3. Review console output and saved PNG visualization
