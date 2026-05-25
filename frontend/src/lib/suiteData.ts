export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIHROperationsCopilot', ownership: 'Employees source capabilities and workflows', coverage: ['Employees', 'Onboarding', 'Benefits'] },
  { name: 'AIEmployeeEngagement', ownership: 'Onboarding source capabilities and workflows', coverage: ['Performance', 'Learning', 'Engagement'] },
  { name: 'AIPerformanceReviewAssistant', ownership: 'Benefits source capabilities and workflows', coverage: ['Compensation', 'Time Off', 'Cases'] },
  { name: 'AIBenefitsGuide', ownership: 'Performance source capabilities and workflows', coverage: ['Policies', 'Org Planning', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Employees', value: '84', note: 'Active' },
  { label: 'Onboarding', value: '61', note: 'Open' },
  { label: 'Benefits', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Employees operating view', 'Onboarding operating view', 'Benefits operating view', 'Performance operating view', 'Learning operating view', 'Engagement operating view', 'Compensation operating view', 'Time Off operating view'];
export const workflowHighlights = ['Employees workflow with records, approvals, audit, and reporting', 'Onboarding workflow with records, approvals, audit, and reporting', 'Benefits workflow with records, approvals, audit, and reporting', 'Performance workflow with records, approvals, audit, and reporting', 'Learning workflow with records, approvals, audit, and reporting'];
