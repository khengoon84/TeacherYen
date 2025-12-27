
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import BlogArchive from './pages/BlogArchive';
import BlogDetail from './pages/BlogDetail';
import CourseCatalog from './pages/CourseCatalog';
import LessonView from './pages/LessonView';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const Navbar: React.FC<{ 
  isDarkMode: boolean; 
  toggleDarkMode: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}> = ({ isDarkMode, toggleDarkMode, isLoggedIn, onLogout }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#111718]/95 backdrop-blur-md px-6 py-4 lg:px-20">
      <div className="flex items-center gap-4 text-[#111718] dark:text-white">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-8 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">science</span>
          </div>
          <h2 className="text-[#111718] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Teacher Yen STEM</h2>
        </Link>
      </div>
      
      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link to="/" className={`${isActive('/') ? 'text-primary font-bold' : 'text-[#111718] dark:text-slate-200'} text-sm font-medium hover:text-primary transition-colors`}>Home</Link>
          <Link to="/courses" className={`${isActive('/courses') ? 'text-primary font-bold' : 'text-[#111718] dark:text-slate-200'} text-sm font-medium hover:text-primary transition-colors`}>Courses</Link>
          <Link to="/blog" className={`${isActive('/blog') ? 'text-primary font-bold' : 'text-[#111718] dark:text-slate-200'} text-sm font-medium hover:text-primary transition-colors`}>Blog</Link>
          <Link to="/" className="text-[#111718] dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4 pl-4 border-l dark:border-slate-700">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-[#111718] text-sm font-bold shadow-sm">
                <span>Dashboard</span>
              </Link>
              <button onClick={onLogout} className="text-text-muted hover:text-red-500 transition-colors" title="Logout">
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-[#111718] text-sm font-bold shadow-sm">
              <span>Log In</span>
            </Link>
          )}
        </div>
      </div>

      <div className="lg:hidden flex items-center gap-4">
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
        </button>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111718] py-12 px-6 lg:px-40 mt-auto">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
        <span className="text-[#111718] dark:text-white font-bold text-lg">Teacher Yen STEM</span>
        <p className="text-[#618389] dark:text-slate-500 text-sm">Empowering the next generation of innovators.</p>
      </div>
      <div className="flex gap-8">
        <a className="text-[#618389] dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">Terms</a>
        <a className="text-[#618389] dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">Privacy</a>
        <a className="text-[#618389] dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">Social</a>
      </div>
      <p className="text-sm text-text-muted">© 2023 Teacher Yen. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen transition-colors duration-300">
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/blog" element={<BlogArchive isLoggedIn={isLoggedIn} />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/courses" element={<CourseCatalog isLoggedIn={isLoggedIn} />} />
            <Route path="/lesson/:id" element={<LessonView />} />
            <Route 
              path="/login" 
              element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} 
            />
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
