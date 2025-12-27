
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES, BLOG_POSTS } from '../constants';
import { StudentCourse } from '../types';

const Dashboard: React.FC = () => {
  // Simulated student data
  const studentName = "Alex";
  const myCourses: StudentCourse[] = [
    { ...COURSES[0], progress: 75, lastAccessed: '2 hours ago' },
    { ...COURSES[1], progress: 20, lastAccessed: 'Yesterday' }
  ];
  
  const privateNotes = BLOG_POSTS.filter(p => p.isPrivate);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 flex flex-col gap-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-primary/10 p-8 rounded-3xl border border-primary/20">
        <div className="flex items-center gap-6">
          <div className="size-20 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
            <img src="https://picsum.photos/seed/student/200/200" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight">Welcome back, {studentName}! 👋</h1>
            <p className="text-text-muted font-medium mt-1">You've completed 75% of your weekly goals. Keep it up!</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border dark:border-slate-800 text-center min-w-[100px]">
            <p className="text-2xl font-black text-primary">12</p>
            <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest">Day Streak</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border dark:border-slate-800 text-center min-w-[100px]">
            <p className="text-2xl font-black text-primary">450</p>
            <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest">STEM Points</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content (2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Active Courses Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_stories</span>
                My Active Courses
              </h2>
              <Link to="/courses" className="text-sm font-bold text-primary hover:underline">Browse More</Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {myCourses.map(course => (
                <div key={course.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 group">
                  <div className="size-24 rounded-xl overflow-hidden shrink-0">
                    <img src={course.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={course.title} />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{course.title}</h3>
                      <span className="text-[10px] text-text-muted font-bold uppercase">Last seen: {course.lastAccessed}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-text-muted">Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Link to={`/lesson/${course.firstLessonId}`} className="h-10 px-6 rounded-lg bg-primary text-slate-900 font-bold text-sm flex items-center gap-2 hover:bg-primary-dark transition-colors">
                      Continue <span className="material-symbols-outlined text-base">play_arrow</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Exclusive Notes Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lock_open</span>
                Student-Only Notes
              </h2>
              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-black rounded uppercase">Premium Access</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {privateNotes.map(note => (
                <Link key={note.id} to={`/blog/${note.id}`} className="group bg-white dark:bg-slate-900 rounded-2xl border dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="h-40 w-full overflow-hidden relative">
                    <img src={note.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={note.title} />
                    <div className="absolute top-3 right-3 bg-primary/90 text-slate-900 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                       <span className="material-symbols-outlined text-xs">lock</span> Closed
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] text-primary font-black uppercase mb-2 tracking-widest">{note.category}</div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{note.title}</h3>
                    <p className="text-sm text-text-muted line-clamp-2">{note.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Widgets (1/3) */}
        <div className="flex flex-col gap-8">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all gap-2 group">
                <span className="material-symbols-outlined text-2xl text-text-muted group-hover:text-primary">calendar_month</span>
                <span className="text-xs font-bold">Schedule</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all gap-2 group">
                <span className="material-symbols-outlined text-2xl text-text-muted group-hover:text-primary">quiz</span>
                <span className="text-xs font-bold">Quizzes</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all gap-2 group">
                <span className="material-symbols-outlined text-2xl text-text-muted group-hover:text-primary">forum</span>
                <span className="text-xs font-bold">Forum</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-xl border dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all gap-2 group">
                <span className="material-symbols-outlined text-2xl text-text-muted group-hover:text-primary">support_agent</span>
                <span className="text-xs font-bold">Support</span>
              </button>
            </div>
          </div>

          {/* Upcoming Milestones */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
            <h3 className="font-bold mb-4">Milestones</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center opacity-50">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Robot Base Build</p>
                  <p className="text-[10px] text-text-muted">Completed Oct 25</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30">
                  <span className="material-symbols-outlined text-primary">radio_button_checked</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Advanced Circuitry</p>
                  <p className="text-[10px] text-text-muted italic text-primary">In Progress</p>
                </div>
              </div>
              <div className="flex gap-4 items-center opacity-60">
                <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-400">lock</span>
                </div>
                <div>
                  <p className="text-sm font-bold">AI Integration</p>
                  <p className="text-[10px] text-text-muted uppercase">Locked</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Daily Tip */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-8xl">lightbulb</span>
            </div>
            <p className="text-xs font-black uppercase text-primary mb-2 tracking-widest">STEM Tip of the Day</p>
            <p className="text-sm leading-relaxed relative z-10">
              "Did you know? The first computer programmer was Ada Lovelace, who wrote an algorithm for an early computing machine in 1843!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
