
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';

const Home: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const visibleCourses = COURSES.filter(course => isLoggedIn || !course.isPrivate);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-12 md:px-10 lg:px-40 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">science</span> STEM Education
              </div>
              <h1 className="text-text-main dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                Igniting Curiosity in <span className="text-primary">STEM</span> for K-12
              </h1>
              <p className="text-text-muted dark:text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Interactive lessons designed to make science and math click. Join me in turning complex theories into hands-on fun and real-world understanding.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-[#101f22] text-base font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Start Learning
              </Link>
              <a href="#contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-slate-100 dark:bg-slate-800 text-text-main dark:text-white text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
              <img 
                src="https://picsum.photos/seed/classroom/800/600" 
                alt="Classroom learning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-10 px-6 lg:px-40 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center lg:justify-between">
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="size-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <div>
              <p className="text-3xl font-bold text-text-main dark:text-white">500+</p>
              <p className="text-sm text-text-muted dark:text-slate-400 font-medium">Students Taught</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="size-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <div>
              <p className="text-3xl font-bold text-text-main dark:text-white">10+</p>
              <p className="text-sm text-text-muted dark:text-slate-400 font-medium">Years Experience</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="size-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">library_books</span>
            </div>
            <div>
              <p className="text-3xl font-bold text-text-main dark:text-white">100+</p>
              <p className="text-sm text-text-muted dark:text-slate-400 font-medium">Lessons Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="px-6 py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-black">Why Learn with Yen?</h2>
            <p className="text-text-muted dark:text-slate-400 text-lg">
              My teaching philosophy revolves around making STEM accessible, engaging, and relevant to the real world. I believe every student is a scientist in the making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">play_circle</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Mixed Media Lessons</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">Video, interactive text, and engaging quizzes combined to cater to different learning styles.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">chat</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Feedback</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">Direct, constructive guidance on every assignment to help students grow confidently.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">build</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Hands-on Projects</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">We build real things. From coding mini-games to physics experiments at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-slate-50 dark:bg-slate-900/30 px-6 py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Courses</h2>
              <p className="text-text-muted">Curriculum designed to challenge and inspire students of all ages.</p>
            </div>
            <Link to="/courses" className="text-primary font-bold text-sm hover:underline">View all courses &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleCourses.slice(0, 3).map(course => (
              <div key={course.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group">
                <div className="h-48 w-full overflow-hidden relative">
                  <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {course.isPrivate && (
                    <div className="absolute top-4 right-4 bg-primary text-slate-900 px-2 py-1 rounded text-[10px] font-black uppercase flex items-center gap-1 shadow-lg">
                      <span className="material-symbols-outlined text-xs">lock</span> Closed
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md uppercase tracking-wide">{course.audience}</span>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                      <span className="material-symbols-outlined text-base icon-filled">star</span> {course.rating}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-text-muted text-sm line-clamp-2">{course.description}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t dark:border-slate-800">
                    <span className="text-xs font-medium text-text-muted flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">schedule</span> {course.duration}
                    </span>
                    <Link to="/courses" className="text-primary font-bold text-sm">View Course</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white dark:bg-background-dark border-b dark:border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl font-bold">Common Questions</h2>
            <p className="text-text-muted">Everything you need to know about learning with Teacher Yen.</p>
          </div>
          <div className="space-y-4">
            <details className="group border dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 transition-all">
              <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center">
                What age groups do you teach?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-text-muted text-sm">
                I specialize in teaching STEM subjects for students from K-12. My curriculum is tailored to each age group, from basic science for younger kids to advanced physics for high schoolers.
              </div>
            </details>
            <details className="group border dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 transition-all">
              <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center">
                Are the classes live or pre-recorded?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-text-muted text-sm">
                We offer a mix of both! Some courses are self-paced with high-quality videos, while others have weekly live interactive sessions.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-black">Get in Touch</h2>
              <p className="text-text-muted text-lg max-w-lg leading-relaxed">
                Have a question about a course or want to discuss a custom STEM curriculum? I'd love to hear from you.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-bold">Email Me</p>
                  <p className="text-text-muted">hello@teacheryenstem.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-bold">Based In</p>
                  <p className="text-text-muted">San Francisco, CA (Available Globally Online)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="font-bold">Office Hours</p>
                  <p className="text-text-muted">Mon-Fri: 9am - 5pm PT</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'youtube'].map((social) => (
                <a key={social} href="#" className="size-10 rounded-full border dark:border-slate-800 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">{social === 'youtube' ? 'smart_display' : 'public'}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <form className="bg-white dark:bg-slate-900 p-8 rounded-2xl border dark:border-slate-800 shadow-sm flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="h-12 px-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" className="h-12 px-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold">Subject</label>
                <select id="subject" className="h-12 px-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all">
                  <option>General Inquiry</option>
                  <option>Course Support</option>
                  <option>1-on-1 Tutoring</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold">Your Message</label>
                <textarea id="message" rows={4} placeholder="How can I help you today?" className="p-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all"></textarea>
              </div>
              <button type="submit" className="h-12 w-full bg-primary text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-primary to-[#0ba8c7] p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-black mb-4 tracking-tight">Ready to start your STEM journey?</h3>
          <p className="mb-8 text-lg font-medium opacity-90">Join hundreds of students discovering the wonders of science and technology.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-primary-dark font-bold py-3.5 px-10 rounded-xl shadow-xl hover:bg-slate-50 transition-colors">
              Explore Courses
            </Link>
            <button className="bg-primary-dark/20 backdrop-blur-sm border border-white/30 text-white font-bold py-3.5 px-10 rounded-xl hover:bg-primary-dark/30 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
