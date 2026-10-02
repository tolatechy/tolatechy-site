// Featured GitHub projects shown on the home page.
// Plain-language summaries only, no metrics (those belong on the Projects page).
// Images are real figures exported from each project's notebook.
// Session 4 moves this into a content collection alongside the full project list.
import creditRoc from '../assets/projects/credit-risk-roc.png';
import intrusionImportance from '../assets/projects/intrusion-feature-importance.png';
import attritionCorrelation from '../assets/projects/attrition-correlation.png';
import insiderComparison from '../assets/projects/insider-model-comparison.png';

export const featuredProjects = [
  {
    title: 'Credit risk: Lending Club default prediction',
    summary:
      'Predicting loan default using only information available when the lending decision is made, comparing logistic regression, decision trees, random forests and XGBoost.',
    area: 'Finance & credit risk',
    repo: 'https://github.com/tolatechy/Credit-Risk-Lending-Club',
    image: creditRoc,
    imageAlt: 'ROC curves comparing four models from the credit risk notebook',
  },
  {
    title: 'Explainable network intrusion detection',
    summary:
      'Intrusion detection with SHAP explanations, served as a Streamlit app so analysts can see why traffic was flagged.',
    area: 'Security',
    repo: 'https://github.com/tolatechy/Intrusion-Detection-Explainable',
    image: intrusionImportance,
    imageAlt: 'Bar chart of the ten most important features for the intrusion detection model',
  },
  {
    title: 'Employee attrition prediction',
    summary: 'Identifying employees at risk of leaving, with class imbalance handled through SMOTE.',
    area: 'People analytics',
    repo: 'https://github.com/tolatechy/Employee-Attrition-Prediction',
    image: attritionCorrelation,
    imageAlt: 'Correlation heatmap of attrition-related features',
  },
  {
    title: 'Insider threat detection in email',
    summary: 'Classifying messages to flag possible threats, using ensemble models and a neural network.',
    area: 'Security & NLP',
    repo: 'https://github.com/tolatechy/Insider-Threat-Email-Detection',
    image: insiderComparison,
    imageAlt: 'Grouped bar chart comparing ensemble model performance',
  },
];
