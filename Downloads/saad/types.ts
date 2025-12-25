export type Role = 'admin' | 'teacher' | 'student';

export interface StudentSimple {
  id: string;
  name: string;
}

export interface Teacher {
  code: string;
  name: string;
  password?: string;
  email?: string;
  students: StudentSimple[];
}

export interface Student {
  id: string;
  name: string;
  code: string;
  password?: string;
  class?: string;
  registrationDate?: string;
}

export interface AttendanceRecord {
  id: string;
  date: string; // ISO Date string YYYY-MM-DD
  teacherCode: string;
  studentName: string;
  status: 'present' | 'absent';
  notes?: string;
}

export interface StudentLog {
  id?: string;
  studentCode: string;
  date: string;
  dateDisplay: string;
  newMemorizing: string;
  review: string;
  listening: string;
  newTarget: string;
  notes?: string;
}

export interface Session {
  type: Role;
  data?: Teacher | Student | any; // 'any' for admin simple auth
}

export interface Message {
  id: string;
  from: string; // user id/code
  fromName: string;
  fromRole: Role;
  to: string; // user id/code
  toName: string;
  toRole: Role;
  content: string;
  timestamp: string; // ISO Date string
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: Array<{ id: string; name: string; role: Role }>;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount: number;
}

export interface ExportData {
  teachers: Record<string, Teacher>;
  students: Student[];
  attendance: AttendanceRecord[];
  studentLogs: Record<string, StudentLog[]>;
  messages?: Message[];
}