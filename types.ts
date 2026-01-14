export enum MomentType {
  STUDY = 'study',
  TRAVEL = 'travel',
  WORK = 'work',
  PERSONAL = 'personal',
  GOAL = 'goal'
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export enum EmotionType {
  HAPPY = 'happy',
  NEUTRAL = 'neutral',
  WORRIED = 'worried',
  EXCITED = 'excited',
  STRESSED = 'stressed'
}

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface EmotionLog {
  id: string;
  date: string; // ISO String
  emotion: EmotionType;
  note?: string;
}

export interface Reflection {
  rating: number; // 1-5
  lessons: string;
  repeatable: boolean;
  completedDate: string;
}

export interface Moment {
  id: string;
  title: string;
  date: string; // Target date ISO String
  type: MomentType;
  priority: Priority;
  initialEmotion: EmotionType;
  notes: string;
  tasks: Task[];
  status: 'active' | 'completed' | 'archived';
  createdAt: string;
  emotionHistory: EmotionLog[];
  reflection?: Reflection;
}

export type ViewState = 'dashboard' | 'create' | 'edit' | 'details' | 'stats' | 'memory' | 'settings';

export interface LanguageDictionary {
  dashboard: string;
  createMoment: string;
  memories: string;
  stats: string;
  settings: string;
  daysLeft: string;
  today: string;
  upcoming: string;
  stressLevel: string;
  chill: string;
  balanced: string;
  hectic: string;
  addMoment: string;
  title: string;
  date: string;
  category: string;
  priority: string;
  tasks: string;
  notes: string;
  save: string;
  cancel: string;
  completed: string;
  reflection: string;
  whatLearned: string;
  rating: string;
  repeat: string;
  yes: string;
  no: string;
  totalMoments: string;
  completionRate: string;
  taskCompletion: string;
  emotionTrend: string;
  emotionalJourney: string;
  addTask: string;
  delete: string;
  edit: string;
  days: string;
  study: string;
  travel: string;
  work: string;
  personal: string;
  goal: string;
  low: string;
  medium: string;
  high: string;
  howFeeling: string;
  markAsDone: string;
  postpone: string;
}