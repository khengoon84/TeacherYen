
import { BlogPost, Course, Lesson } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Coding Games for Kids',
    excerpt: "Learning to code doesn't have to be boring. Here are my top picks for interactive games that teach logic and syntax in a fun way.",
    category: 'Coding',
    date: 'Oct 24, 2023',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    content: [
      { type: 'heading', value: 'Why Games are the Best Way to Start' },
      { type: 'paragraph', value: 'Coding is often seen as a daunting task filled with cryptic symbols and complex logic. However, for kids, the best entry point is through play. Games provide immediate feedback and a clear sense of progression.' },
      { type: 'subheading', value: '1. Scratch (MIT)' },
      { type: 'paragraph', value: 'Scratch uses block-based programming to let kids create their own stories and games. It’s the gold standard for visual learning.' },
      { type: 'tip', value: 'Encourage your kids to "remix" existing projects on Scratch. It is one of the fastest ways to learn how others solve problems.' },
      { type: 'subheading', value: '2. CodeCombat' },
      { type: 'paragraph', value: 'This is a real-time strategy game where you control your hero using actual Python or JavaScript code. It’s addictive and educational.' },
      { type: 'code', value: 'hero.moveRight()\nhero.attack("Enemy")\nhero.moveUp()', metadata: 'python' },
    ]
  },
  {
    id: '2',
    title: "Newton's Laws with Everyday Objects",
    excerpt: "How to demonstrate inertia and force using just an apple and a tennis ball right in your living room.",
    category: 'Physics',
    date: 'Oct 18, 2023',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    content: [
      { type: 'heading', value: 'Physics is All Around Us' },
      { type: 'paragraph', value: 'You don’t need a high-tech lab to understand the fundamental laws of the universe. Sir Isaac Newton figured these out hundreds of years ago by simply observing world around him.' },
      { type: 'subheading', value: 'The First Law: Inertia' },
      { type: 'paragraph', value: 'An object at rest stays at rest unless acted upon by an outside force. Try the "Index Card Trick": place a card over a glass, put a coin on the card, and flick the card away fast. The coin falls straight into the glass!' },
      { type: 'tip', value: 'The mass of the coin is key here. Heavier coins work better because they have more inertia.' }
    ]
  },
  {
    id: 'p1',
    title: 'Advanced Circuitry Cheat Sheet',
    excerpt: "A private resource for enrolled robotics students covering parallel circuits, breadboarding, and troubleshooting.",
    category: 'Robotics',
    date: 'Nov 02, 2023',
    readTime: '12 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
    isPrivate: true,
    content: [
      { type: 'heading', value: 'Breadboarding Like a Pro' },
      { type: 'paragraph', value: 'This is restricted content for students. Here we detail the common pitfalls in circuit design.' }
    ]
  },
  {
    id: 'p2',
    title: 'Genetics Lab Prep Notes',
    excerpt: "Specific instructions and pre-lab analysis for the upcoming CRISPR simulation module.",
    category: 'Biology',
    date: 'Nov 05, 2023',
    readTime: '15 min read',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9bdad1b4c?auto=format&fit=crop&q=80&w=800',
    isPrivate: true,
    content: [
      { type: 'heading', value: 'Pre-Lab Preparation' },
      { type: 'paragraph', value: 'Ensure you have reviewed the base pairs before the simulation starts.' }
    ]
  },
  {
    id: 'p3',
    title: 'The Secret of Quantum Computing for Kids',
    excerpt: "A simplified deep-dive into qubits and superposition that we only share with our advanced cohort.",
    category: 'Advanced Tech',
    date: 'Dec 01, 2023',
    readTime: '18 min read',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    isPrivate: true,
    content: [
      { type: 'heading', value: 'Understanding Superposition' },
      { type: 'paragraph', value: 'Imagine a coin spinning on a table. Before it lands, it is both heads and tails at the same time.' }
    ]
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Junior Robotics: Simple Machines',
    description: 'Learn the basics of gears, levers, and pulleys by building your own mini-bots using household items.',
    audience: 'Grades 1-3',
    category: 'Engineering',
    duration: '6 Weeks',
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/jr-robot/800/600',
    level: 'Elementary',
    firstLessonId: 'l5',
    difficulty: 'Beginner'
  },
  {
    id: 'c2',
    title: 'Biology 101: Genetics',
    description: 'Dive into the blueprint of life. We will cover DNA structure, chromosomes, and genes.',
    audience: 'Grades 9-12',
    category: 'Science',
    duration: '4 Weeks',
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/genetics-main/800/600',
    level: 'High',
    firstLessonId: 'l1',
    difficulty: 'Intermediate'
  },
  {
    id: 'cp1',
    title: 'High School Rocket Science',
    description: 'Advanced orbital mechanics and propulsion systems for students aiming for aerospace careers.',
    audience: 'Grades 10-12',
    category: 'Physics',
    duration: '12 Weeks',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
    level: 'High',
    firstLessonId: 'l1', // Placeholder
    difficulty: 'Advanced',
    isPrivate: true
  },
  {
    id: 'cp2',
    title: 'Competitive Math: Beyond Algebra',
    description: 'Prepare for AMC 10/12 and AIME with intensive problem-solving sessions and private lecture notes.',
    audience: 'Grades 8-12',
    category: 'Mathematics',
    duration: '8 Weeks',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    level: 'High',
    firstLessonId: 'l1', // Placeholder
    difficulty: 'Advanced',
    isPrivate: true
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'l1',
    courseId: 'c2',
    unit: 'Unit 1',
    lessonNumber: 'Lesson 1',
    title: 'Introduction to Cell Theory',
    description: 'Understand the history of cell discovery and the three main components of cell theory.',
    duration: '15 mins',
    status: 'completed',
    type: 'text',
    imageUrl: 'https://picsum.photos/seed/cell1/400/300',
    contentMarkdown: "Cell theory is a fundamental scientific theory of biology that cells are the basic structural, functional, and biological units of all known living organisms. It was developed in the mid-19th century."
  },
  {
    id: 'l2',
    courseId: 'c2',
    unit: 'Unit 1',
    lessonNumber: 'Lesson 2',
    title: 'Plant vs. Animal Cells',
    description: 'Compare and contrast the organelles found in plant and animal cells.',
    duration: '22 mins',
    status: 'completed',
    type: 'video',
    imageUrl: 'https://picsum.photos/seed/cell2/400/300'
  },
  {
    id: 'l3',
    courseId: 'c2',
    unit: 'Unit 2',
    lessonNumber: 'Lesson 3',
    title: 'Introduction to Genetics',
    description: 'Dive into the blueprint of life. We will cover DNA structure, chromosomes, and genes.',
    duration: '30 mins',
    status: 'current',
    type: 'video',
    imageUrl: 'https://picsum.photos/seed/genetics/400/300'
  },
  {
    id: 'l4',
    courseId: 'c2',
    unit: 'Unit 2',
    lessonNumber: 'Lesson 4',
    title: 'Mendelian Genetics',
    description: 'Learn how traits are passed down through generations using Punnett Squares.',
    duration: '25 mins',
    status: 'locked',
    type: 'activity',
    imageUrl: 'https://picsum.photos/seed/mendel/400/300'
  },
  {
    id: 'l5',
    courseId: 'c1',
    unit: 'Basics',
    lessonNumber: 'Lesson 1',
    title: 'What is a Robot?',
    description: 'Exploring the definition of robotics and the three laws.',
    duration: '10 mins',
    status: 'current',
    type: 'text',
    imageUrl: 'https://picsum.photos/seed/robot1/400/300'
  },
  {
    id: 'l6',
    courseId: 'c1',
    unit: 'Basics',
    lessonNumber: 'Lesson 2',
    title: 'Simple Levers',
    description: 'Building your first lever to move heavy objects with ease.',
    duration: '20 mins',
    status: 'locked',
    type: 'activity',
    imageUrl: 'https://picsum.photos/seed/lever/400/300'
  }
];
