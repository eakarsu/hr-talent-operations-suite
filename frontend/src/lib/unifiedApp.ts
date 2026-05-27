import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'employees',
    title: 'Employees',
    href: '/employees',
    category: 'People',
    icon: BriefcaseBusiness,
    summary: 'Employees workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Employees queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Employees', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'onboarding',
    title: 'Onboarding',
    href: '/onboarding',
    category: 'People',
    icon: Users,
    summary: 'Onboarding workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Onboarding queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Onboarding', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'benefits',
    title: 'Benefits',
    href: '/benefits',
    category: 'People',
    icon: ClipboardList,
    summary: 'Benefits workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Benefits queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Benefits', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'performance',
    title: 'Performance',
    href: '/performance',
    category: 'People',
    icon: CalendarCheck,
    summary: 'Performance workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Performance queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Performance', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'learning',
    title: 'Learning',
    href: '/learning',
    category: 'Operations',
    icon: Activity,
    summary: 'Learning workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Learning queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Learning', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'engagement',
    title: 'Engagement',
    href: '/engagement',
    category: 'Operations',
    icon: Workflow,
    summary: 'Engagement workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Engagement queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Engagement', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'compensation',
    title: 'Compensation',
    href: '/compensation',
    category: 'Operations',
    icon: FileText,
    summary: 'Compensation workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Compensation queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Compensation', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'time-off',
    title: 'Time Off',
    href: '/time-off',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Time Off workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Time Off queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Time Off', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'cases',
    title: 'Cases',
    href: '/cases',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Cases workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Cases queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Cases', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'policies',
    title: 'Policies',
    href: '/policies',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Policies workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Policies queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Policies', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'org-planning',
    title: 'Org Planning',
    href: '/org-planning',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Org Planning workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Org Planning queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Org Planning', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the HR Talent Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "shift-planning",
    title: "Shift Planning",
    href: "/shift-planning",
    category: "Workforce Scheduling Shift Planner",
    icon: Workflow,
    summary: "Shift Planning elevated from the Workforce Scheduling Shift Planner source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Shift Planning queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Shift Planning", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "coverage-gaps",
    title: "Coverage Gaps",
    href: "/coverage-gaps",
    category: "Workforce Scheduling Shift Planner",
    icon: Workflow,
    summary: "Coverage Gaps elevated from the Workforce Scheduling Shift Planner source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Coverage Gaps queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Coverage Gaps", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "labor-capacity-forecast",
    title: "Labor Capacity Forecast",
    href: "/labor-capacity-forecast",
    category: "Workforce Scheduling Shift Planner",
    icon: Workflow,
    summary: "Labor Capacity Forecast elevated from the Workforce Scheduling Shift Planner source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Labor Capacity Forecast queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Labor Capacity Forecast", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'HR Talent Operations documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'HR Talent Operations alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'HR Talent Operations source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'HR Talent Operations users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'HR Talent Operations assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'People', features: ['Employees', 'Onboarding', 'Benefits', 'Performance'] },
  { name: 'Operations', features: ['Learning', 'Engagement', 'Compensation', 'Time Off'] },
  { name: 'Governance', features: ['Cases', 'Policies'] },
  { name: 'Workforce Scheduling Shift Planner', features: ["Shift Planning","Coverage Gaps","Labor Capacity Forecast"] },
  { name: 'Intelligence Layer', features: ['Org Planning', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIHROperationsCopilot', 'AIEmployeeEngagement where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
