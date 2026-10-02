// Content of the master resume (portfolio-handover/assets/Ibraheem_Obanla_Resume.pdf),
// rendered on /resume. When the resume files change, update this file to match.

export const summary =
  'Data Scientist and Machine Learning Engineer with five years of experience building and deploying models for credit risk, customer retention and security analytics. Statistics-trained, with published research applying attention-based deep learning to early Parkinson’s disease detection. Experienced across the full model lifecycle, from data pipelines and feature engineering through to deployment and monitoring, working in Python, R and SQL on AWS and Azure.';

export const skills = [
  { group: 'Languages', items: 'Python, R, SQL' },
  { group: 'Machine learning', items: 'Scikit-learn, TensorFlow, PyTorch, XGBoost, SHAP, Ensemble Methods, Feature Engineering' },
  { group: 'NLP', items: 'NLTK, spaCy' },
  { group: 'Cloud & MLOps', items: 'AWS (SageMaker, EC2, S3), Azure, Model Monitoring, Version Control' },
  { group: 'Data & visualisation', items: 'pandas, NumPy, Power BI, Tableau, Excel, ETL & Data Pipeline Development' },
  { group: 'Deployment', items: 'Flask, Streamlit, FastAPI' },
  { group: 'Statistics', items: 'Hypothesis Testing, A/B Testing, Regression Modelling, Statistical Inference' },
];

export const experience = [
  {
    org: 'TechSTEPS Limited',
    place: 'Lagos, Nigeria',
    role: 'Machine Learning Engineer',
    dates: 'June 2023 – July 2026',
    points: [
      'Spearheaded the design and deployment of predictive analytics models using Python, R and AWS, proactively identifying at-risk customers and driving a 13% reduction in customer attrition.',
      'Supported deployment of machine learning models to Azure environments, ensuring performance monitoring and version control through MLOps practices.',
      'Led the development of automated reporting solutions using Power BI and SQL, reducing manual reporting effort and saving approximately 540 operational hours annually.',
      'Improved data accuracy and reliability across business-critical dashboards by implementing robust data quality checks, driving a 29% reduction in reporting errors and strengthening executive decision-making.',
    ],
  },
  {
    org: 'Armstrong Global Concepts LLC',
    place: 'Austin, TX',
    role: 'Data Scientist',
    dates: 'February 2021 – January 2023',
    points: [
      'Developed machine learning models with Scikit-learn and TensorFlow across 10,000,000+ customer records, uncovering insights that supported risk mitigation and customer retention initiatives.',
      'Analysed employee feedback using natural language processing in Python, NLTK and spaCy, identifying factors affecting workplace satisfaction and contributing to a 34% reduction in employee turnover.',
      'Designed and developed interactive Excel and Power BI dashboards visualising key HR and operational metrics, giving leadership the basis for data-informed retention strategies.',
      'Extracted, cleaned and transformed large datasets using SQL and Python, improving reporting efficiency by 41% and enhancing data reliability.',
      'Created reusable data pipelines with SQL and Python, improving efficiency for ongoing analysis and reporting.',
    ],
  },
];

export const sampleProjects = [
  {
    title: 'Credit Risk: Lending Club Default Prediction',
    repo: 'https://github.com/tolatechy/Credit-Risk-Lending-Club',
    points: [
      'Built default prediction models over 2.2M loans issued 2007 to 2018, comparing Logistic Regression, Decision Tree, Random Forest and XGBoost.',
      'Focused feature selection on eliminating post-outcome leakage, excluding fields such as recovery amounts that do not exist at the lending decision and inflate accuracy while failing in production.',
    ],
  },
  {
    title: 'Employee Attrition Prediction',
    repo: 'https://github.com/tolatechy/Employee-Attrition-Prediction',
    points: [
      'Modelled employee attrition across 1,470 records and 35 features, comparing Logistic Regression, Decision Tree, Random Forest and Gradient Boosting to a best cross-validated score of 0.907.',
      'Addressed class imbalance with SMOTE, as roughly one in six employees left and accuracy alone would have flattered a model that predicted retention for everyone.',
    ],
  },
  {
    title: 'Insider Threat Detection in Corporate Email',
    repo: 'https://github.com/tolatechy/Insider-Threat-Email-Detection',
    points: [
      'Classified corporate email traffic to surface insider threat behaviour, reaching 97.6% accuracy with a voting ensemble over Logistic Regression, Decision Tree and Random Forest, benchmarked against a Keras neural network.',
      'Handled severe class imbalance with SMOTE, since genuine insider activity is rare by definition.',
    ],
  },
  {
    title: 'Explainable Network Intrusion Detection',
    repo: 'https://github.com/tolatechy/Intrusion-Detection-Explainable',
    points: [
      'Integrated SHAP attribution into intrusion classifications so analysts can interrogate why traffic was flagged, deployed as a Streamlit application.',
      'Repurposed the same attribution analysis as a leakage diagnostic, since near-perfect benchmark scores on IDS datasets typically indicate separable labels rather than model quality.',
    ],
  },
];

export const publication = {
  title: 'Attention-Based Deep Learning for Early Parkinson’s Disease Detection with Tabular Biomedical Data',
  url: 'https://arxiv.org/abs/2602.07933',
};

export const education = [
  { school: 'University of Ibadan, Oyo State, Nigeria', degree: 'Master of Science, Data and Information Science', year: '2026' },
  { school: 'University of Ibadan, Oyo State, Nigeria', degree: 'Bachelor of Science, Statistics', year: '2021' },
];
