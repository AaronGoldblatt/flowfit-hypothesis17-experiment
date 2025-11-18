# H17 Analysis: Keep My Data Local Trust Lift A/B Test
# FlowFit Cycle-Synced Fitness App

# Load required libraries
library(tidyverse)
library(ggplot2)
library(patchwork)

# Load data
data <- read.csv("data/h17_responses.csv")

# Filter to target population (menstruate_yn == "Yes")
target_data <- data %>% filter(menstruate_yn == "Yes")

# Summary by variant
summary_stats <- target_data %>%
  group_by(variant) %>%
  summarise(
    n = n(),
    trust_mean = mean(trust_primary, na.rm = TRUE),
    trust_sd = sd(trust_primary, na.rm = TRUE),
    trust_se = trust_sd / sqrt(n),
    share_mean = mean(share_willingness, na.rm = TRUE),
    signup_mean = mean(signup_likelihood, na.rm = TRUE),
    control_mean = mean(data_control, na.rm = TRUE),
    risk_mean = mean(data_risk, na.rm = TRUE)
  )

print("=== PRIMARY OUTCOME: TRUST ===")
print(summary_stats)

# Calculate relative increase (primary success criterion)
trust_a <- filter(summary_stats, variant == "A")$trust_mean
trust_b <- filter(summary_stats, variant == "B")$trust_mean
relative_increase <- ((trust_b - trust_a) / trust_a) * 100

print(paste("\n=== PRIMARY SUCCESS CRITERION ==="))
print(paste("Variant A (Control) mean trust:", round(trust_a, 2)))
print(paste("Variant B (Treatment) mean trust:", round(trust_b, 2)))
print(paste("Relative increase:", round(relative_increase, 1), "%"))
print(paste("Threshold for success: >= 25%"))
print(ifelse(relative_increase >= 25, "✓ PRIMARY CRITERION MET", "✗ PRIMARY CRITERION NOT MET"))

# T-test (one-tailed, hypothesis: B > A)
t_test_result <- t.test(
  filter(target_data, variant == "B")$trust_primary,
  filter(target_data, variant == "A")$trust_primary,
  alternative = "greater"
)

print("\n=== T-TEST RESULTS ===")
print(paste("t-statistic:", round(t_test_result$statistic, 2)))
print(paste("p-value (one-tailed):", round(t_test_result$p.value, 3)))
print(paste("Significant at α=0.10:", ifelse(t_test_result$p.value < 0.10, "Yes", "No")))

# Secondary criterion checks
print("\n=== SECONDARY CRITERIA ===")
signup_a <- filter(summary_stats, variant == "A")$signup_mean
signup_b <- filter(summary_stats, variant == "B")$signup_mean
signup_threshold <- signup_a * 0.90
print(paste("Signup A:", round(signup_a, 2), "| Signup B:", round(signup_b, 2)))
print(paste("90% of A threshold:", round(signup_threshold, 2)))
print(ifelse(signup_b >= signup_threshold, "✓ No sign-up harm", "✗ Sign-up decreased"))

control_a <- filter(summary_stats, variant == "A")$control_mean
control_b <- filter(summary_stats, variant == "B")$control_mean
control_threshold <- control_a * 1.30
print(paste("\nControl A:", round(control_a, 2), "| Control B:", round(control_b, 2)))
print(paste("130% of A threshold:", round(control_threshold, 2)))
print(ifelse(control_b >= control_threshold, "✓ Perceived control up", "✗ Perceived control unchanged"))

# Visualizations
plot1 <- ggplot(summary_stats, aes(x = variant, y = trust_mean, fill = variant)) +
  geom_col(alpha = 0.8) +
  geom_errorbar(aes(ymin = trust_mean - trust_se, ymax = trust_mean + trust_se), width = 0.2) +
  labs(title = "Trust by Variant", x = "Variant", y = "Mean Trust (0-10)", fill = "Variant") +
  ylim(0, 10) +
  theme_minimal() +
  theme(legend.position = "none")

plot2 <- ggplot(target_data, aes(x = variant, y = signup_likelihood, fill = variant)) +
  geom_boxplot(alpha = 0.8) +
  labs(title = "Sign-Up Intent by Variant", x = "Variant", y = "Likelihood (0-10)", fill = "Variant") +
  theme_minimal() +
  theme(legend.position = "none")

combined <- plot1 + plot2

print(combined)

# Save results
write.csv(summary_stats, "results/h17_summary_stats.csv", row.names = FALSE)
print("\nResults saved to results/h17_summary_stats.csv")
