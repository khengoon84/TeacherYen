
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { LESSONS, COURSES } from '../constants';

const LessonView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find current lesson or default to first
  const currentLesson = LESSONS.find(l => l.id === id) || LESSONS[0];
  const course = COURSES.find(c => c.id === currentLesson.courseId);
  
  // Filter lessons belonging to the same course for the sidebar
  const courseLessons = LESSONS.filter(l => l.courseId === currentLesson.courseId);
  
  // Navigation Logic
  const currentIndex = courseLessons.findIndex(l => l.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? courseLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < courseLessons.length - 1 ? courseLessons[currentIndex + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
      {/* Sidebar - Lesson Map */}
      <aside className="w-full lg:w-1/4 shrink-0 flex flex-col gap-6 lg:sticky lg:top-24 h-fit">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-bold">Lesson Map</h2>
            <p className="text-sm text-text-muted">{course?.title || 'Course Content'}</p>
          </div>
          <div className="flex flex-col gap-2">
            {courseLessons.map((lesson, i) => {
              const isActive = lesson.id === currentLesson.id;
              return (
                <Link 
                  key={lesson.id} 
                  to={`/lesson/${lesson.id}`}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all border-l-4 ${
                    isActive 
                      ? 'bg-primary/10 border-primary' 
                      : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className={`size-6 rounded-full flex items-center justify-center shrink-0 ${
                    lesson.status === 'completed' ? 'bg-green-500 text-white' : 
                    isActive ? 'bg-primary text-slate-900' : 
                    lesson.status === 'locked' ? 'bg-slate-200 dark:bg-slate-800 text-slate-400' :
                    'bg-slate-100 dark:bg-slate-700 text-text-muted'
                  }`}>
                    <span className="material-symbols-outlined text-sm icon-filled">
                      {lesson.status === 'completed' ? 'check' : isActive ? 'play_arrow' : lesson.status === 'locked' ? 'lock' : 'circle'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${
                      lesson.status === 'locked' && !isActive ? 'text-text-muted opacity-60' : ''
                    }`}>
                      {i + 1}. {lesson.title}
                    </p>
                    <p className="text-[10px] text-text-muted uppercase tracking-tighter">{lesson.duration}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Help Widget */}
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://picsum.photos/seed/yen-pro/100/100" className="size-10 rounded-full border border-white" />
            <div>
              <p className="text-sm font-bold">Teacher Yen</p>
              <p className="text-xs text-text-muted">STEM Expert</p>
            </div>
          </div>
          <button className="w-full bg-white dark:bg-slate-800 py-2.5 rounded-lg border dark:border-slate-700 text-xs font-bold shadow-sm hover:bg-slate-50 transition-colors">
            Ask a Question
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col gap-8">
        {/* Progress Header */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-black rounded uppercase">
                    {currentLesson.type}
                 </span>
                 <span className="text-xs text-text-muted font-bold">{currentLesson.unit} • {currentLesson.lessonNumber}</span>
              </div>
              <h1 className="text-3xl font-black mb-1">{currentLesson.title}</h1>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">school</span> {course?.audience}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">schedule</span> {currentLesson.duration}</span>
              </div>
            </div>
            <div className="flex gap-2 h-fit">
              <button className="h-10 px-5 rounded-lg border dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-sm font-bold transition-all">
                <span className="material-symbols-outlined text-xl">bookmark</span> Save
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-xs font-black uppercase tracking-widest text-text-muted">Course Completion</span>
              <span className="text-sm font-bold text-primary">
                {Math.round(((currentIndex + 1) / courseLessons.length) * 100)}%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500" 
                style={{ width: `${((currentIndex + 1) / courseLessons.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Media Content */}
        {currentLesson.type === 'video' ? (
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 group cursor-pointer shadow-2xl">
            <img 
              src={currentLesson.imageUrl || "https://picsum.photos/seed/genetics-vid/1200/675"} 
              className="w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40" 
              alt="Video preview" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl text-white icon-filled pl-2">play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 text-white">
              <h3 className="text-xl font-bold">{currentLesson.title}</h3>
            </div>
          </div>
        ) : (
          <div className="aspect-[2/1] rounded-2xl overflow-hidden">
            <img src={currentLesson.imageUrl} className="w-full h-full object-cover" alt={currentLesson.title} />
          </div>
        )}

        {/* Content Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {currentLesson.description && <p className="text-xl font-medium text-text-muted">{currentLesson.description}</p>}
          
          <div className="space-y-6 mt-8">
            <p>
              {currentLesson.contentMarkdown || "In this lesson, we dive deep into the specific topics outlined in the curriculum. We'll explore theoretical frameworks, practical applications, and hands-on examples to solidify your understanding of these STEM principles."}
            </p>
            
            <div className="my-10 p-8 bg-primary/10 border-l-4 border-primary rounded-r-2xl flex gap-6 items-start">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm shrink-0">
                <span className="material-symbols-outlined text-3xl text-primary">lightbulb</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Teacher's Insight</h4>
                <p className="text-sm text-text-muted m-0">
                  Focus on the "why" before the "how". Understanding the underlying mechanism makes the formula much easier to remember and apply in new situations.
                </p>
              </div>
            </div>

            <p>
              Remember to check the resources section below for your worksheets and additional reading material.
            </p>
          </div>
        </article>

        {/* Resource Section */}
        <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl border dark:border-slate-800 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">folder_open</span> Lesson Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border dark:border-slate-800 flex items-start gap-4 hover:border-primary transition-all group cursor-pointer">
              <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 shrink-0">
                <span className="material-symbols-outlined">picture_as_pdf</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate">Study_Guide_{currentLesson.id}.pdf</p>
                <p className="text-xs text-text-muted">3.2 MB • PDF</p>
                <button className="text-xs font-bold text-primary mt-2 group-hover:underline flex items-center gap-1">
                  Download <span className="material-symbols-outlined text-xs">download</span>
                </button>
              </div>
            </div>
            <div className="p-5 rounded-xl border dark:border-slate-800 flex items-start gap-4 hover:border-primary transition-all group cursor-pointer">
              <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 shrink-0">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate">Practice_Exercises.docx</p>
                <p className="text-xs text-text-muted">1.1 MB • Word</p>
                <button className="text-xs font-bold text-primary mt-2 group-hover:underline flex items-center gap-1">
                  Download <span className="material-symbols-outlined text-xs">download</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center py-8 border-t dark:border-slate-800">
           {prevLesson ? (
             <Link to={`/lesson/${prevLesson.id}`} className="flex items-center gap-2 text-text-muted hover:text-primary font-bold transition-colors">
                <span className="material-symbols-outlined">arrow_back</span> Previous Lesson
             </Link>
           ) : (
             <div className="w-1/3"></div>
           )}
           
           {nextLesson ? (
             <Link to={`/lesson/${nextLesson.id}`} className="bg-primary px-8 py-3 rounded-xl text-slate-900 font-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                Next Lesson
             </Link>
           ) : (
             <Link to="/courses" className="bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded-xl text-text-main dark:text-white font-black shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                Finish Course
             </Link>
           )}
        </div>
      </main>
    </div>
  );
};

export default LessonView;
