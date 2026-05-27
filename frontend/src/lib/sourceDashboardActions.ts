export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "workforce-scheduling-shift-planner",
    "label": "Workforce Scheduling Shift Planner",
    "description": "Open Workforce Scheduling Shift Planner workflows elevated from AIWorkforceSchedulingShiftPlanner.",
    "href": "/shift-planning",
    "sourceProjects": [
      "AIWorkforceSchedulingShiftPlanner"
    ],
    "examples": [
      "Shift Planning",
      "Coverage Gaps",
      "Labor Capacity Forecast"
    ],
    "count": 1
  }
];
