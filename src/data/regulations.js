export const REGULATIONS = [
  {
    id: 1, icon: "🇪🇺", name: "EU AI Act", full: "Regulation (EU) 2024/1689",
    status: "upcoming", cat: "ai", deadline: "Aug 2026", urgency: "urgent",
    desc: "The world's first comprehensive AI law. Classifies AI systems by risk level. Insurance AI used for underwriting or claims decisions classified as 'High Risk' — requires registration, audit logs, and human oversight.",
    impact: "High impact on FWD: any AI scoring model for policy pricing or claims must be registered with EU AI Office and maintain bias audit logs.",
    actions: ["Register high-risk AI systems with EU AI Office", "Implement explainability logs for underwriting AI", "Conduct AI bias assessments quarterly", "Train staff on prohibited AI practices"],
    refs: ["https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689"]
  },
  {
    id: 2, icon: "🔒", name: "GDPR", full: "General Data Protection Regulation (EU) 2016/679",
    status: "active", cat: "privacy", deadline: "Ongoing", urgency: "normal",
    desc: "EU's flagship data privacy regulation. Applies to any org processing EU resident data. Requires lawful basis for processing, data minimization, breach notification within 72 hours, and DPO appointment.",
    impact: "Affects FWD's marketing campaigns, customer data storage, and cross-border data transfers to Vietnam HQ. DPA fines up to €20M or 4% global revenue.",
    actions: ["Maintain records of processing activities (ROPA)", "Ensure 72-hour breach notification process is in place", "Review data transfer agreements (SCCs)", "Conduct annual DPIA for high-risk processing"],
    refs: ["https://gdpr.eu"]
  },
  {
    id: 3, icon: "🇻🇳", name: "Vietnam PDPD", full: "Decree 13/2023/ND-CP on Personal Data Protection",
    status: "active", cat: "privacy", deadline: "Ongoing", urgency: "normal",
    desc: "Vietnam's first personal data protection law. Establishes 'basic' and 'sensitive' personal data categories. Insurance health data classified as sensitive. Requires explicit consent and cross-border transfer approvals.",
    impact: "Direct impact: FWD must obtain explicit consent for health data in policy applications, appoint a data protection department, and register cross-border data transfers.",
    actions: ["Audit all sensitive data (health, biometric) processing", "Update consent forms to meet PDPD requirements", "Register with Ministry of Public Security for cross-border transfers", "Document data impact assessments for health data"],
    refs: ["https://thuvienphapluat.vn/van-ban/Cong-nghe-thong-tin/Nghi-dinh-13-2023-ND-CP-bao-ve-du-lieu-ca-nhan-562357.aspx"]
  },
  {
    id: 4, icon: "🛡️", name: "Vietnam Cybersecurity Law", full: "Law No. 24/2018/QH14",
    status: "active", cat: "cyber", deadline: "Ongoing", urgency: "normal",
    desc: "Governs cybersecurity for critical information infrastructure in Vietnam. Financial institutions are critical infrastructure operators — must store Vietnamese user data locally and comply with Ministry inspections.",
    impact: "FWD must maintain local data storage for Vietnamese customers, conduct annual cybersecurity audits, and report serious incidents within 24 hours.",
    actions: ["Ensure Vietnamese customer data stored on local servers", "Conduct annual cybersecurity assessment", "Establish 24-hour incident response and reporting protocol", "Register critical systems with national cybersecurity authority"],
    refs: ["https://thuvienphapluat.vn/van-ban/Cong-nghe-thong-tin/Luat-An-ninh-mang-2018-333807.aspx"]
  },
  {
    id: 5, icon: "📜", name: "ISO/IEC 27001:2022", full: "Information Security Management System",
    status: "active", cat: "iso", deadline: "Oct 2025 (transition)", urgency: "normal",
    desc: "International standard for information security management. Defines 93 controls across 4 domains. 2022 update added cloud security, threat intelligence, and supply chain security controls.",
    impact: "FWD IT must update existing ISMS to 27001:2022. Key new controls: cloud asset management (#5.23), data masking (#8.11), and web filtering (#8.23).",
    actions: ["Gap analysis: 27001:2013 vs 27001:2022 controls", "Implement new cloud security controls", "Update Statement of Applicability (SoA)", "Schedule transition audit with certification body"],
    refs: ["https://www.iso.org/standard/27001"]
  },
  {
    id: 6, icon: "🤖", name: "NIST AI RMF", full: "NIST AI Risk Management Framework 1.0",
    status: "monitor", cat: "ai", deadline: "Voluntary", urgency: "normal",
    desc: "US framework for managing AI risks across 4 functions: GOVERN, MAP, MEASURE, MANAGE. Widely adopted by global enterprises as best practice. Aligns with EU AI Act requirements.",
    impact: "FWD can adopt NIST AI RMF voluntarily to demonstrate responsible AI governance to regulators and customers. Aligns with EU AI Act audit requirements.",
    actions: ["Map existing AI systems using NIST MAP function", "Implement AI risk measurement (bias, accuracy, drift)", "Establish AI incident response playbook", "Document model cards for customer-facing AI systems"],
    refs: ["https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf"]
  },
  {
    id: 7, icon: "💳", name: "PCI-DSS v4.0", full: "Payment Card Industry Data Security Standard",
    status: "upcoming", cat: "financial", deadline: "Mar 2025 (required)", urgency: "soon",
    desc: "Security standard for organizations handling payment card data. v4.0 adds 64 new requirements including MFA for all CDE access, customized approach for controls, and targeted risk analysis.",
    impact: "FWD payment processing systems must comply with PCI-DSS v4.0. Key changes: mandatory MFA for admin access, enhanced phishing-resistant auth, and annual penetration testing.",
    actions: ["Complete gap analysis vs PCI-DSS v4.0 requirements", "Implement MFA for all cardholder data environment access", "Update network segmentation documentation", "Schedule QSA audit for v4.0 compliance validation"],
    refs: ["https://www.pcisecuritystandards.org/document_library/"]
  },
  {
    id: 8, icon: "🏗️", name: "ISO/IEC 42001:2023", full: "Artificial Intelligence Management System",
    status: "upcoming", cat: "iso", deadline: "2026 Adoption Target", urgency: "soon",
    desc: "The world's first AI management system standard. Provides requirements for establishing and improving an AI management system. Covers AI policy, impact assessment, risk management, and transparency obligations.",
    impact: "Financial services companies adopting ISO 42001 demonstrate structured AI governance to regulators. Supports EU AI Act compliance.",
    actions: ["Conduct ISO 42001 gap assessment", "Develop AI policy and objectives document", "Implement AI impact assessment process", "Plan certification timeline with audit body"],
    refs: ["https://www.iso.org/standard/81230.html"]
  }
];

export const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "ai", label: "🤖 AI" },
  { key: "privacy", label: "🔒 Data Privacy" },
  { key: "cyber", label: "🛡️ Cybersecurity" },
  { key: "financial", label: "💰 Financial" },
  { key: "iso", label: "📜 ISO/Standards" },
];

export const CAT_LABELS = {
  ai: "🤖 AI",
  privacy: "🔒 Privacy",
  cyber: "🛡️ Cybersecurity",
  financial: "💰 Financial",
  iso: "📜 ISO/Standard",
};
