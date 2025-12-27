
export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'code' | 'image' | 'tip';
  value: string;
  metadata?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content: BlogSection[];
  isPrivate?: boolean; // New: indicates "closed notes"
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  status: 'completed' | 'current' | 'locked';
  type: 'video' | 'text' | 'activity' | 'quiz';
  description?: string;
  unit?: string;
  lessonNumber?: string;
  imageUrl?: string;
  contentMarkdown?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  audience: string;
  category: string;
  duration: string;
  rating: number;
  imageUrl: string;
  level: 'Elementary' | 'Middle' | 'High';
  firstLessonId: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  isPrivate?: boolean; // New: indicates "closed course"
}

export interface StudentCourse extends Course {
  progress: number;
  lastAccessed: string;
}
