// Featured GitHub projects shown on the home page.
// Plain-language summaries only, no metrics (those belong on the Projects page).
// Session 4 moves this into a content collection alongside the full project list.

export const featuredProjects = [
  {
    title: 'Credit risk: Lending Club default prediction',
    summary:
      'Predicting loan default using only information available when the lending decision is made.',
    area: 'Finance & credit risk',
    repo: 'https://github.com/tolatechy/Credit-Risk-Lending-Club',
  },
  {
    title: 'Explainable network intrusion detection',
    summary:
      'Intrusion detection with SHAP explanations, served as a Streamlit app so analysts can see why traffic was flagged.',
    area: 'Security',
    repo: 'https://github.com/tolatechy/Intrusion-Detection-Explainable',
  },
  {
    title: 'Employee attrition prediction',
    summary: 'Identifying employees at risk of leaving, with class imbalance handled through SMOTE.',
    area: 'People analytics',
    repo: 'https://github.com/tolatechy/Employee-Attrition-Prediction',
  },
  {
    title: 'Insider threat detection in corporate email',
    summary: 'Classifying email traffic to flag possible insider threats, using ensemble models and a neural network.',
    area: 'Security & NLP',
    repo: 'https://github.com/tolatechy/Insider-Threat-Email-Detection',
  },
];
