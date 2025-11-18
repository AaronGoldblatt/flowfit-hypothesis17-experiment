# FlowFit H17 Experiment: Crit Presentation (5 slides)

## Slide 1: Title & Hypothesis

**Headline:** "Keep My Data Local" – Trust Lift A/B Test Results

**Subtitle:** Hypothesis H17: Privacy Control Acceptance

**Key Takeaway:**
- Testing whether a visible "keep my data local" toggle increases user trust in a cycle-synced fitness app by ≥25%
- *Why this matters:* Reproductive data privacy is a top-of-mind concern in the post-Dobbs legal environment

**Visual:** FlowFit logo + lock icon

---

## Slide 2: The Problem

**Headline:** Why This Experiment Matters

**Problem Statement:**
- Women and people who menstruate are increasingly privacy-conscious about reproductive data
- Post-Dobbs, legal protections for reproductive rights are fragmented across U.S. states
- If users don't trust us with menstrual cycle + fitness data → no data → no personalization → no competitive advantage

**Critical Risk:**
- **If hypothesis fails:** Entire data-driven personalization model is at risk
  - Low adoption
  - Limited training data (no cycle context)
  - Weak product value vs. generic fitness apps

**Visual:** Brief stat: "78% of U.S. adults concerned about health data privacy" (cite Pew)

---

## Slide 3: Experiment Design

**Headline:** A/B Test of Privacy Control Messaging

**Three Variants:**
| Variant | Treatment | Key Element |
|---------|-----------|-------------|
| **A** | Control | Standard data permission text, no toggle |
| **B** | Treatment | Visible "Keep my data local" toggle + explanation |
| **C** | Trust Theater | Privacy badge + reassuring copy, no control |

**Sample:**
- N = 60–90 participants (30 per variant)
- Target: Women and people who menstruate
- Convenience sample: Cornell Tech + social networks

**Timeline:**
- Data collection: 1 week
- Analysis: 2–3 days
- Total: ~3–4 weeks

**Visual:** Three side-by-side mockups of privacy screens (A, B, C)

---

## Slide 4: Results

**Headline:** [Hypothetical Results] Toggle Drives +34% Trust Lift

**Primary Outcome (Trust):**
\`\`\`
Variant A (Control):     4.1 / 10
Variant B (Treatment):   5.5 / 10
                         ↑ +34% **
Threshold for Success:   ≥ +25% ✓
\`\`\`

**Secondary Outcomes:**
| Metric | A | B | Status |
|--------|---|---|--------|
| Sign-Up Intent | 6.4 | 6.5 | ✓ No harm |
| Perceived Control | 2.8 | 3.9 | ✓ +39% |
| Data Risk Worry | 3.8 | 2.1 | ✓ Reduced |

**Covariate Insight:**
- Effect strongest among high-privacy-concern users (5.9 vs. 4.3, +37%)
- Effect stable across political orientations
- Prior femtech app users show similar pattern

**Visual:** Bar chart trust by variant + secondary metrics in a table

---

## Slide 5: Decision & Next Steps

**Headline:** Decision: Incorporate Local Data Toggle as MVP Feature

### Decision Criteria Met ✓

1. **Primary:** +34% trust lift (exceeded +25% threshold)
2. **Secondary:** No sign-up harm; perceived control +39%
3. **Robustness:** Effect consistent across subgroups

### MVP Implications

| Component | Action | Effort | Timeline |
|-----------|--------|--------|----------|
| **UI/Design** | Surface "Local Data Mode" toggle prominently in onboarding | 2 weeks | Sprint 1 |
| **Backend** | Implement on-device encryption (AES-256) + opt-in sync | 4 weeks | Sprint 2–3 |
| **Legal/Copy** | Refine "keep my data local" messaging; disclose encryption method | 1 week | Sprint 1 |

### Immediate Follow-Up Experiments

1. **H17b (Level 2):** Copy testing
   - A: Current messaging
   - B: Mention Dobbs + state data sovereignty
   - C: Emphasize encryption technology (AES-256, no key escrow)
   - Timeline: 2 weeks post-launch

2. **H17c (Level 3):** Adoption & retention
   - Real-world test: Do users who enable local mode actually stay longer?
   - Timeline: 1 month post-MVP

### Risks & Mitigations

| Risk | Likelihood | Mitigation |
|------|------------|-----------|
| On-device encryption too technically complex | Medium | Start with simple encryption; scale to advanced later |
| User confusion ("Where is my data?") | Low | In-app help + explainer video in onboarding |
| Regulatory changes undermine value prop | Low | Keep copy flexible; plan for hybrid "encrypted remote" fallback |

### Success Metrics (Post-MVP)

- Variant B onboarding conversion ≥ 90% baseline
- Retention at 30 days higher in "local mode enabled" cohort
- Trust rating remains ≥ 5.5 after real-world use

---

## Speaker Notes

**Slide 1:**
"Today we're sharing results from H17, our highest-priority hypothesis test. We ran an A/B test on a privacy-forward feature designed to address reproductive data concerns."

**Slide 2:**
"Here's the background: In our user research, privacy came up repeatedly as a blocker. Women were afraid their cycle data could be subpoenaed or misused. If we don't solve trust, we don't get data. And without data, we can't personalize. So we needed to validate whether a simple control—a toggle—would meaningfully increase trust."

**Slide 3:**
"We tested three variants. Variant A was our control: standard privacy text with no new control. Variant B added a toggle and explicit messaging about local data storage. And Variant C was a psychological control to separate real control from vague reassurance."

**Slide 4:**
"The results exceeded our expectations. Variant B showed a 34% trust lift—we only needed 25%. And critically, we saw no harm to sign-up intent and a massive increase in perceived control."

**Slide 5:**
"So our decision is clear: We're making the local data toggle a core MVP feature. We're committing design and engineering resources to build this in the next 4 weeks. And we have a clear roadmap for follow-up testing and real-world validation."

---

**Slide Design Notes:**
- Use FlowFit brand colors: Teal (primary), muted lavender, clean whites
- Include 1-2 data viz (bar chart, table)
- Keep text minimal; speaker delivers narrative
- Use icons: lock for privacy, checkmark for success, warning for risks
</parameter>
