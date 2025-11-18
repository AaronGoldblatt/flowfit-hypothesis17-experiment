# H17 Experiment Protocol: "Keep My Data Local" Trust Lift A/B Test
## FlowFit Cycle-Synced Fitness App

---

## 1. HYPOTHESIS (H17)

**Primary Hypothesis:**
Including a visible "keep my data local" toggle increases reported trust in the app by ≥ 25% compared to an identical flow without that toggle.

**Operationalization:**
- **Success threshold:** Mean trust score in Variant B ≥ 1.25 × Mean trust score in Variant A
- **Example:** If Variant A mean = 4.0, Variant B must reach ≥ 5.0 to succeed

**Risk Context:**
- Users will not trust a cycle-synced fitness app enough to share menstrual and hormonal data unless they perceive strong privacy control.
- **Criticality:** If this hypothesis fails, the entire data-driven personalization model is at risk (low adoption, limited data, weak product value).
- **Legal environment:** Post-Dobbs reproductive rights landscape makes data privacy a top-of-mind concern for target users.

---

## 2. EXPERIMENT TYPE & SETUP

**Classification:** Prototype + Online A/B Test (Equivalence Experiment)

**Method:** 
- Randomized participant assignment to variants
- Participants view interactive mockup prototype
- Self-reported trust and behavioral intention measurement
- Single-session participation (~5-7 minutes per participant)

**Data Collection:**
- Primary: User clicks, survey responses (Likert scales, numeric ratings)
- Secondary: Behavioral proxies (toggle interactions, "Learn more" clicks, sign-up button clicks)

---

## 3. EXPERIMENTAL CONDITIONS

### **Variant A: Control (No Toggle)**

**Key Elements:**
- Standard data permission screen
- Generic data collection statement: "We use your cycle and workout data to personalize training recommendations."
- Single link to "Privacy Policy"
- **No** explicit privacy control toggle
- **No** specific assurance about data location or encryption

**Visual Treatment:**
\`\`\`
┌─────────────────────────────────────────┐
│  LOCK ICON: Personalize Your Experience │
│                                         │
│  Email: [____________________]          │
│  Password: [____________________]       │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ PRIVACY & DATA                  │   │
│  │ We use your cycle and workout   │   │
│  │ data to personalize training    │   │
│  │ recommendations.                │   │
│  │                                 │   │
│  │ Read our Privacy Policy → link  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Cancel] [I Agree & Continue]         │
│                                         │
│  No sale of data • No sharing with     │
│  third parties                          │
└─────────────────────────────────────────┘
\`\`\`

---

### **Variant B: Treatment (Visible 'Keep My Data Local' Toggle)**

**Key Elements:**
- All copy from Variant A
- **+ Prominent toggle switch:**
  - Label: "Keep my data local to this device" (initialized to ON)
  - Subtext: "Your cycle and workout data are stored only on your phone. We do not upload it to our servers."
- **+ "Learn more" link** (expandable panel) explaining:
  - Local encryption methodology (AES-256)
  - No sale of data to third parties
  - No sharing with third parties
  - User retains control; can delete anytime
- Updated footer: "No sale of data • No sharing with third parties • Your data, your choice"

**Visual Treatment:**
\`\`\`
┌─────────────────────────────────────────┐
│  LOCK ICON: Personalize Your Experience │
│                                         │
│  Email: [____________________]          │
│  Password: [____________________]       │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ PRIVACY & DATA                  │   │
│  │ We use your cycle and workout   │   │
│  │ data to personalize training    │   │
│  │ recommendations.                │   │
│  │                                 │   │
│  │ ┌────────────────────────────┐  │   │
│  │ │ 🔒 Keep my data local to   │  │   │
│  │ │    this device          [ON]   │   │
│  │ │ Your cycle and workout     │  │   │
│  │ │ data stored only on phone. │  │   │
│  │ │                            │  │   │
│  │ │ Learn more → [expandable]  │  │   │
│  │ └────────────────────────────┘  │   │
│  │                                 │   │
│  │ Read our Privacy Policy → link  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Cancel] [I Agree & Continue]         │
│                                         │
│  No sale of data • No sharing with     │
│  third parties • Your data, your choice │
└─────────────────────────────────────────┘
\`\`\`

---

### **Variant C: Trust Theater (Optional)**

**Key Elements:**
- All copy from Variant A
- **+ Privacy Badge** with Shield icon: "We Care About Your Privacy"
- **+ Paragraph** reassuring about privacy practices without specific controls
- Messaging emphasizes "industry-leading security" and "highest standards"
- **No** functional toggle or specific data location guarantee

**Visual Treatment:**
\`\`\`
┌─────────────────────────────────────────┐
│  LOCK ICON: Personalize Your Experience │
│                                         │
│  Email: [____________________]          │
│  Password: [____________________]       │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ PRIVACY & DATA                  │   │
│  │ 🛡️ We Care About Your Privacy   │   │
│  │                                 │   │
│  │ At FlowFit, we take your       │   │
│  │ privacy seriously. Your        │   │
│  │ personal health data is        │   │
│  │ sensitive, and we're           │   │
│  │ committed to protecting it.    │   │
│  │                                 │   │
│  │ We've implemented              │   │
│  │ industry-leading security...   │   │
│  │                                 │   │
│  │ Read our Privacy Policy → link  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Cancel] [I Agree & Continue]         │
│                                         │
│  No sale of data • No sharing with     │
│  third parties                          │
└─────────────────────────────────────────┘
\`\`\`

---

## 4. PARTICIPANT ALLOCATION & RANDOMIZATION

**Target Sample Size:** N = 60–90 (ideally evenly split)

**Allocation Strategy (choose one):**

### **Option 1: Survey Platform Randomization (Recommended)**
- Use Qualtrics or Google Forms with randomized question blocks
- Each participant receives a random variant link
- System automatically tracks variant assignment

### **Option 2: Pre-shuffled Link Distribution**
- Generate three unique URLs per variant
- Distribute links in order:
  - Links 1–30 → Variant A
  - Links 31–60 → Variant B
  - (Links 61–90 → Variant C, if used)
- Document link assignments in tracking sheet

**Recording:** 
- Log all participant IDs (or anonymous tokens) with variant assignment
- Export assignment log before analysis begins

---

## 5. PARTICIPANT SOURCING & SCREENING

**Recruitment Channels:**
- Cornell Tech student mailing lists
- Class Slack channels (HCI, design, product management courses)
- Personal networks and referrals
- Online communities (Reddit, femtech forums, Facebook groups focused on fitness/health)

**Inclusion Criteria:**
- Age 18+
- Able to read and understand English instructions
- Access to computer/mobile device (to view prototype)

**Target Population:**
- **Priority:** Women and people who menstruate
  - **Screening question:** "Do you currently menstruate or have within the last 12 months?" (Yes/No/Prefer not to say)
- Secondary exploratory data: Non-target users (may analyze separately)

**Incentive:** 
- Optional: Low-cost incentive (e.g., $2–$5 Amazon gift card or entry into raffle) recommended to improve completion

---

## 6. PROCEDURE & PARTICIPANT EXPERIENCE

### **Step 1: Initial Contact & Consent**
Participant clicks variant link. Landing screen shows:
- Brief explanation: "We're testing an early concept for a cycle-synced workout helper. Please imagine you're considering using this app."
- Informed consent text:
  - "This study is anonymous and voluntary."
  - "No real account will be created; this is a prototype simulation."
  - "You may exit anytime with no penalty."
  - "Data will be stored confidentially for research purposes only."

### **Step 2: App Mock Experience (2–3 screens)**
**Screen 1:** Logo, value proposition, and benefit overview.
**Screen 2:** Feature highlights (optional cycle phase adaptation details).
**Screen 3:** Data permission & privacy screen (variant-specific differences appear here).

*Participant behavior tracked:*
- Time spent on each screen
- Button clicks (Continue, Back, "Learn more")
- Toggle interactions (for Variant B)

### **Step 3: Survey (Instrumentation)**
After prototype, participant sees survey questions (no time limit, typical completion: 2–3 minutes).

---

## 7. VARIABLES & INSTRUMENTATION

### **Independent Variable (IV):**
- **Privacy Control Presentation**
  - **Condition A:** No toggle
  - **Condition B:** Visible toggle + detailed explanation
  - **(Condition C):** Generic reassurance, no control

### **Primary Dependent Variable (DV): Reported Trust**

**Question:** "How much would you trust this app with your menstrual and fitness data?"

**Measurement:** 11-point numeric rating scale (0–10)
- 0 = "Not at all"
- 10 = "Completely"

**Justification:** Direct, simple, and highly sensitive to trust perception differences.

---

### **Secondary Dependent Variables:**

**1. Willingness to Share Data**
- *Question:* "I would be willing to share my menstrual cycle data with this app."
- *Scale:* 5-point Likert (Strongly Disagree → Strongly Agree)

**2. Willingness to Sign Up**
- *Question:* "If this were a real app, how likely are you to create an account?"
- *Scale:* 0–10 numeric or 1–7 Likert

**3. Perceived Control Over Data**
- *Question:* "I feel in control of what happens to my data in this app."
- *Scale:* 5-point Likert (Strongly Disagree → Strongly Agree)

**4. Perceived Risk**
- *Question:* "I am worried this app could misuse or leak my data."
- *Scale:* 5-point Likert (Strongly Disagree → Strongly Agree)

---

### **Control / Covariate Variables:**

**1. Prior Femtech/Fitness App Use**
- *Question:* "Do you currently use apps like Flo, Clue, Apple Health, Fitbit, or others?"
- *Response:* Yes / No / (List if yes)

**2. General Privacy Concern**
- *Question:* "In general, how concerned are you about data privacy online?"
- *Scale:* 1–7 (Not concerned → Extremely concerned)

**3. Political / Privacy Orientation (Optional, Sensitive)**
- *Question:* "If comfortable sharing, how would you describe your general political orientation?"
- *Options:* Left / Center / Right / Prefer not to say
- *Justification:* Post-Dobbs, political orientation may correlate with reproductive data privacy concern.

---

### **Behavioral Proxies (Optional Technical Implementation):**

If using Framer or instrumented web page:
- **Toggle interactions:** Number of times toggle switched (for B)
- **"Learn more" link clicks:** Whether and how many times expanded (for B)
- **Time on permission screen:** Duration (in seconds)
- **Button clicks:** Continue vs. Cancel

---

## 8. SUCCESS CRITERIA & DECISION RULES

### **Primary Success Criterion**

**Condition:** Mean trust score in Variant B ≥ 1.25 × Mean trust score in Variant A
**Among target population** (people who menstruate)

**Example:**
- Variant A mean trust = 4.1 / 10
- Variant B must achieve ≥ 5.1 / 10 (+24%) ✓ Criterion met
- Variant B = 4.9 / 10 → Criterion not met

**Statistical test (optional):**
- One-tailed *t*-test (α = 0.10, class-level rigor)
- Null hypothesis: *μ_B ≤ μ_A*
- Alternative hypothesis: *μ_B > μ_A*

---

### **Secondary Success Criteria**

**1. No Harm to Sign-Up Intention**
- Mean sign-up likelihood in Variant B ≥ 90% of mean in Variant A
- *Example:* If A = 6.5/10, B must be ≥ 5.85/10

**2. Increased Perceived Control**
- Mean "I feel in control" score in B ≥ 130% of A
- *Example:* If A = 3.0/5 Likert, B must be ≥ 3.9/5

**3. Reduced Perceived Risk (Exploratory)**
- Mean risk worry score in B ≤ 85% of A (or direction of decrease)

---

### **DECISION TREE**

\`\`\`
IF (Trust increase in B ≥ 25%) AND (No sign-up harm) AND (Perceived control up):
  → PRIMARY SUCCESS
  → Decision: Incorporate toggle as MVP feature
  → Action: Allocate design/engineering resources immediately
  → Next: Run follow-up copy-testing (Level 2 experiment)

ELSE IF (Trust increase is positive but < 25%) AND (No sign-up harm):
  → PARTIAL VALIDATION
  → Decision: Keep the toggle, but explore stronger messaging
  → Action: Run Variant B-2, B-3 (e.g., mention encryption, no US data centers, Dobbs context)
  → Next: Test messaging variants with same toggle mechanism

ELSE IF (No trust increase) OR (Negative effect on sign-up):
  → PRIMARY FAILURE
  → Decision: Do not proceed with toggle alone
  → Action: Conduct rapid qualitative follow-up (short interviews, 3–5 participants)
  → Question: "Why didn't the toggle increase trust? Was copy confusing? Did toggle seem insufficient?"
  → Next Pivots:
    - Pivot A: Replace toggle with "Trusted Third-Party Storage" messaging (explain partner encryption)
    - Pivot B: Combine toggle + legal/regulatory framing ("Compliant with HIPAA, encrypted per latest standards")
    - Pivot C: Run deeper exploratory interviews to understand mental models
\`\`\`

---

## 9. EXPERIMENT TIMELINE

| Phase | Duration | Owner | Deliverable |
|-------|----------|-------|-------------|
| **Recruitment** | 1 week | PM + Design | 60–90 participant sign-ups |
| **Data Collection** | 1 week | Online platform | Survey responses + behavioral logs |
| **Data Export & Cleaning** | 2–3 days | PM | Clean CSV with all DVs, IVs, covariates |
| **Analysis** | 2 days | PM + Data analyst | Means, SD, t-tests, visualizations |
| **Interpretation & Write-up** | 2–3 days | PM + Lead designer | Decision document + design implications |
| **Presentation to leadership** | 1 day | PM | Crit slides + decision recommendation |
| **Total** | **~3–4 weeks** | — | Final go/no-go on toggle feature |

---

## 10. LIMITATIONS & KNOWN BIASES

| Limitation | Impact | Mitigation |
|-----------|--------|-----------|
| **Prototype vs. real behavior** | Participants may over/under-estimate trust in prototype | Include exploratory question: "How realistic did this feel?" |
| **Convenience sample bias** | Mostly tech-savvy students; may not represent broader population | Note: Results apply to early adopters; conduct follow-up with non-tech demographic |
| **Demand characteristics** | Participants may guess the study goal and respond accordingly | Minimal deception acceptable; debriefing after survey |
| **Limited diversity** | Sample may skew toward certain political views, education, income | Collect demographics; analyze subgroups (e.g., high vs. low privacy concern) |
| **Session effect** | Single session may not measure long-term trust or adoption | Frame as "early validation"; plan longitudinal follow-up study |
| **No long-term behavior** | Study measures intention, not actual data sharing or app use | Explain: This is a proof-of-concept; real-world validation comes later |

---

## 11. ANALYSIS PLAN

### **Primary Analysis**

\`\`\`
1. Filter to target population (menstruating participants)
2. Calculate mean trust by condition: M_A, M_B, M_C (if used)
3. Compute relative increase: (M_B - M_A) / M_A × 100%
4. Check ≥ 25% threshold
5. Optional: t-test (one-tailed, α = 0.10)
6. Report with 95% CIs
\`\`\`

### **Secondary Analysis**

\`\`\`
1. Repeat for all secondary DVs (sign-up, perceived control, risk)
2. Analyze by covariates:
   - High vs. low privacy concern
   - Prior femtech app users vs. non-users
   - Political orientation (if available)
3. Time-on-page and click behavior (if logged)
4. Qualitative feedback (open-ended responses)
\`\`\`

---

## 12. ETHICAL CONSIDERATIONS

- **Informed Consent:** All participants receive clear consent language before exposure.
- **No Deception:** Participants know they're evaluating a prototype (transparent).
- **Anonymity:** No personal identifying information linked to responses (use tokens/pseudonyms).
- **Right to Withdraw:** Participants may exit at any time without penalty.
- **Sensitive Topic:** Reproductive data is sensitive; tone is respectful and inclusive.
- **Data Retention:** Survey responses stored securely; deleted after analysis (or per university IRB policy).

---

## 13. APPENDIX: PROTOCOL CHECKLIST

- [ ] Randomization method confirmed (survey platform or link list)
- [ ] Consent text finalized and approved
- [ ] All survey questions reviewed by PM and designer
- [ ] Prototype screens tested across devices (mobile, tablet, desktop)
- [ ] Recruitment channels identified and outreach drafted
- [ ] Data export template prepared (CSV columns, data types)
- [ ] Analysis script or spreadsheet template created
- [ ] Visualization sketches ready (bar charts, etc.)
- [ ] Debrief / open-ended feedback question added to survey
- [ ] Contingency plan if <30 participants recruit (e.g., extend timeline, offer higher incentive)

---

**Document Version:** 1.0  
**Date Created:** Nov 2024  
**Last Updated:** Nov 2024  
**Owner:** FlowFit Product Team  
**Status:** Ready for deployment
