
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';

const FilterDropdown: React.FC<{
  label: string;
  options: string[];
  activeValue: string | null;
  onChange: (value: string | null) => void;
  icon?: string;
}> = ({ label, options, activeValue, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-9 px-4 rounded-lg bg-white dark:bg-slate-800 border flex items-center gap-2 text-sm font-medium transition-all ${
          activeValue 
            ? 'border-primary text-primary bg-primary/5' 
            : 'dark:border-slate-700 border-slate-200 hover:border-primary'
        }`}
      >
        {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
        {activeValue || label}
        <span className="material-symbols-outlined text-lg transition-transform" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
          arrow_drop_down
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-150">
          <div className="p-1">
            <button
              onClick={() => { onChange(null); setIsOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${!activeValue ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              All {label}s
            </button>
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setIsOpen(false); }}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${activeValue === opt ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CourseCatalog: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const levels = [
    { name: 'Elementary Explorers', range: 'Grades K-5', icon: 'child_care', level: 'Elementary' },
    { name: 'Middle School Innovators', range: 'Grades 6-8', icon: 'emoji_objects', level: 'Middle' },
    { name: 'High School Engineers', range: 'Grades 9-12', icon: 'rocket_launch', level: 'High' }
  ];

  const categories = useMemo(() => Array.from(new Set(COURSES.map(c => c.category))), []);
  const gradeLevels = ['Elementary', 'Middle', 'High'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = useMemo(() => {
    let result = COURSES;

    // First filter by visibility
    result = result.filter(course => isLoggedIn || !course.isPrivate);

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(term) || 
        course.description.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term)
      );
    }

    if (selectedCategory) {
      result = result.filter(c => c.category === selectedCategory);
    }

    if (selectedLevel) {
      result = result.filter(c => c.level === selectedLevel);
    }

    if (selectedDifficulty) {
      result = result.filter(c => c.difficulty === selectedDifficulty);
    }

    return result;
  }, [searchTerm, selectedCategory, selectedLevel, selectedDifficulty, isLoggedIn]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedLevel(null);
    setSelectedDifficulty(null);
  };

  const hasAnyFilters = !!(searchTerm || selectedCategory || selectedLevel || selectedDifficulty);
  const hasAnyResults = filteredCourses.length > 0;

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12 flex flex-1 flex-col gap-12 text-text-main dark:text-white">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">STEM Course Catalog</h1>
        <p className="text-text-muted text-lg max-w-2xl">
          Explore our comprehensive curriculum designed to inspire creativity and critical thinking in students from K-12 to High School.
        </p>
      </div>

      {/* Search & Filter Section */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border dark:border-slate-800 flex flex-col gap-6">
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl h-12 border dark:border-slate-700 overflow-hidden px-4 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <span className="material-symbols-outlined text-text-muted mr-3">search</span>
          <input 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-text-muted" 
            placeholder="Search for a course, subject or keyword..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-text-muted hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm font-medium text-text-muted mr-2">Filter by:</span>
          
          <FilterDropdown 
            label="Subject" 
            options={categories} 
            activeValue={selectedCategory} 
            onChange={setSelectedCategory} 
          />

          <FilterDropdown 
            label="Grade Level" 
            options={gradeLevels} 
            activeValue={selectedLevel} 
            onChange={setSelectedLevel} 
          />

          <FilterDropdown 
            label="Difficulty" 
            options={difficulties} 
            activeValue={selectedDifficulty} 
            onChange={setSelectedDifficulty} 
          />

          {hasAnyFilters && (
            <button 
              onClick={resetFilters}
              className="ml-auto text-sm font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-base">refresh</span>
              Reset All
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      {hasAnyFilters && hasAnyResults && (
        <div className="flex items-center justify-between border-b dark:border-slate-800 pb-4">
          <p className="text-sm text-text-muted">
            Showing <span className="font-bold text-text-main dark:text-white">{filteredCourses.length}</span> results
          </p>
        </div>
      )}

      {/* No Results Overall */}
      {!hasAnyResults && (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
          <div className="size-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-text-muted">
            <span className="material-symbols-outlined text-4xl">search_off</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">No courses found</h3>
            <p className="text-text-muted">We couldn't find any courses matching your criteria.</p>
          </div>
          <button 
            onClick={resetFilters}
            className="mt-2 text-primary font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Course List / Accordions */}
      {hasAnyResults && (
        <div className="flex flex-col gap-6">
          {levels.map((lvl, idx) => {
            const levelResults = filteredCourses.filter(c => c.level === lvl.level);
            
            // If filtering, only show levels that have matches
            if (hasAnyFilters && levelResults.length === 0) return null;

            return (
              <details 
                key={lvl.level} 
                className="group bg-white dark:bg-slate-900 rounded-2xl border dark:border-slate-800 overflow-hidden shadow-sm transition-all" 
                open={idx === 0 || hasAnyFilters}
              >
                <summary className="p-6 cursor-pointer flex items-center justify-between list-none hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">{lvl.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">
                        {lvl.name} 
                        {hasAnyFilters && <span className="ml-2 text-xs font-normal text-text-muted">({levelResults.length} matches)</span>}
                      </h3>
                      <p className="text-sm text-text-muted">{lvl.range} • Foundation of Curiosity</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="p-6 pt-0 border-t dark:border-slate-800 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {levelResults.map(course => (
                      <div key={course.id} className="flex flex-col rounded-2xl border dark:border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-all group/card">
                        <div className="h-48 relative overflow-hidden">
                          <img src={course.imageUrl} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" alt={course.title} />
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className="bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-md text-[10px] font-black text-primary-dark uppercase shadow-sm tracking-wider">
                              {course.category}
                            </span>
                            <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase shadow-sm tracking-wider ${
                              course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                              course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {course.difficulty}
                            </span>
                            {course.isPrivate && (
                               <span className="bg-slate-900/80 text-primary px-2 py-1 rounded-md text-[10px] font-black uppercase flex items-center gap-1 shadow-sm">
                                <span className="material-symbols-outlined text-xs">lock</span> Closed
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 gap-4">
                          <h4 className="text-lg font-bold group-hover/card:text-primary transition-colors">{course.title}</h4>
                          <p className="text-sm text-text-muted line-clamp-2">{course.description}</p>
                          <div className="mt-auto pt-4 border-t dark:border-slate-800 flex justify-between items-center">
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-black text-text-muted tracking-widest">Audience</span>
                              <span className="text-xs font-bold">{course.audience}</span>
                            </div>
                            <Link to={`/lesson/${course.firstLessonId}`} className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark transition-colors">
                              Go to Lesson <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    {levelResults.length === 0 && !hasAnyFilters && (
                      <div className="col-span-full py-12 text-center text-text-muted italic">
                        More courses coming soon for this level!
                      </div>
                    )}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      )}
      
      {!isLoggedIn && (
        <div className="mt-6 p-10 rounded-3xl bg-primary/10 border-2 border-dashed border-primary/30 text-center flex flex-col items-center gap-4">
          <div className="size-16 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-xl">
             <span className="material-symbols-outlined text-3xl">key</span>
          </div>
          <h2 className="text-2xl font-bold">Missing something?</h2>
          <p className="text-text-muted max-w-lg">We have advanced closed courses available only to registered students. Sign in to unlock Rocket Science, Competitive Math, and more.</p>
          <Link to="/login" className="bg-primary text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-primary-dark transition-all">
            Sign In to Unlock All Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseCatalog;
