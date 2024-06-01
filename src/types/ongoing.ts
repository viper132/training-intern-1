export interface OngoingProject {
  name: string;
  company: string;
}

export type OngoingDeadlineDetails = 'Overdue' | string;

export interface OngoingDeadline {
  date: string;
  details: OngoingDeadlineDetails;
}

export type OngoingBudgetDetails = 'Paid' | 'Invoice Sent' | 'Delayed';

export interface OngoingBudget {
  total: string;
  details: OngoingBudgetDetails;
}

export type OngoingStatus = 'In Progress' | 'Completed' | 'Pending' | 'Not Started';

export interface Ongoing {
  project: OngoingProject;
  deadline: OngoingDeadline;
  teamLead: string;
  budget: OngoingBudget;
  status: OngoingStatus;
}

export interface OnGoingState {
  onGoing: Ongoing[];
  paginedOnGoing: Ongoing[];
  currentPage: number;
  rowPerPage: number;
  handleRemove: (key: number) => void;
  handlePage: (type: 'prev' | 'next') => void;
}
