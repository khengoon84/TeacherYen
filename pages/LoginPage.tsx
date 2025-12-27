
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic
    console.log('Logging in with:', email, password);
    onLogin();
    // Success redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row bg-white dark:bg-background-dark text-text-main dark:text-white">
      {/* Visual Side (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
          alt="STEM Innovation" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col justify-center p-20 text-white">
          <div className="size-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-2xl shadow-primary/40">
            <span className="material-symbols-outlined text-4xl text-slate-900">science</span>
          </div>
          <h2 className="text-5xl font-black mb-6 leading-tight">Join the next generation of <span className="text-primary">innovators.</span></h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-lg">
            Access exclusive STEM resources, track your learning progress, and connect with Teacher Yen's community of young scientists.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-3xl font-black mb-2">Welcome Back</h1>
            <p className="text-text-muted">Enter your credentials to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold block" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">mail</span>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-bold block" htmlFor="password">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">lock</span>
                <input 
                  type="password" 
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all text-text-main dark:text-white"
                  placeholder="••••••••"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" />
              <label htmlFor="remember" className="text-sm text-text-muted">Remember me for 30 days</label>
            </div>

            <button 
              type="submit" 
              className="w-full h-12 bg-primary text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-background-dark px-4 text-text-muted font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <button className="flex justify-center items-center h-12 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="size-5" alt="Google" />
            </button>
            <button className="flex justify-center items-center h-12 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="size-5 dark:invert" alt="GitHub" />
            </button>
            <button className="flex justify-center items-center h-12 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <img src="https://www.svgrepo.com/show/442907/apple.svg" className="size-5 dark:invert" alt="Apple" />
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-text-muted">
            Don't have an account? <Link to="#" className="text-primary font-bold hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
