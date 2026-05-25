export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['employees', 'Employees Records', 'Employees priority queue', 'Open', 'Employees exception list', 'People Lead', '$0'],
  ['onboarding', 'Onboarding Records', 'Onboarding priority queue', 'Review', 'Onboarding exception list', 'People Lead', '$0'],
  ['benefits', 'Benefits Records', 'Benefits priority queue', 'Action needed', 'Benefits exception list', 'People Lead', '$0'],
  ['performance', 'Performance Records', 'Performance priority queue', 'Open', 'Performance exception list', 'People Lead', '$0'],
  ['learning', 'Learning Records', 'Learning priority queue', 'Review', 'Learning exception list', 'Operations Lead', '$0'],
  ['engagement', 'Engagement Records', 'Engagement priority queue', 'Action needed', 'Engagement exception list', 'Operations Lead', '$0'],
  ['compensation', 'Compensation Records', 'Compensation priority queue', 'Open', 'Compensation exception list', 'Operations Lead', '$0'],
  ['time-off', 'Time Off Records', 'Time Off priority queue', 'Review', 'Time Off exception list', 'Operations Lead', '$0'],
  ['cases', 'Cases Records', 'Cases priority queue', 'Action needed', 'Cases exception list', 'Governance Lead', '$0'],
  ['policies', 'Policies Records', 'Policies priority queue', 'Open', 'Policies exception list', 'Governance Lead', '$0'],
  ['org-planning', 'Org Planning Records', 'Org Planning priority queue', 'Review', 'Org Planning exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
