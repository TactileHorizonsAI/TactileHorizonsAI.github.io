import { Brain, Mail, Linkedin } from 'lucide-react';
import { Footer } from '../components/Footer';

export function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Team</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate about accessibility and committed to making visual content
              accessible to everyone.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Founder */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">Founder</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Founder & CEO</h3>
              <p className="text-emerald-600 font-medium mb-4">Leadership</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-600" />
                </a>
                <a href="mailto:jallad.ibrahim@pm.me" className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-slate-600" />
                </a>
              </div>
            </div>

            {/* Technical Co-Founder */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center relative shadow-sm">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                  In Process
                </span>
              </div>
              <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-slate-300">
                <Brain className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Co-Founder</h3>
              <p className="text-cyan-600 font-medium mb-4">AI & Technology</p>
              <p className="text-slate-500 text-sm italic">
                Team expansion in progress - to be updated soon
              </p>
            </div>

            {/* Coming Soon Card */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 text-center flex items-center justify-center">
              <div>
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border border-slate-200 shadow-sm">
                  <span className="text-2xl text-slate-400">?</span>
                </div>
                <p className="text-slate-500">More team members coming soon</p>
              </div>
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-200 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Join Our Team</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference
              in accessibility. If you're interested in joining our team, reach out!
            </p>
            <a
              href="mailto:jallad.ibrahim@pm.me"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-500/30"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}