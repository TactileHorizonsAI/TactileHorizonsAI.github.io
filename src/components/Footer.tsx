import { Brain, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold text-slate-900">Tactile Horizons AI</span>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Breaking barriers in accessibility through AI-powered tactile graphics generation.
              Empowering blind and low-vision learners to access visual content independently.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-600 hover:text-emerald-600">About</Link></li>
              <li><Link to="/solution" className="text-slate-600 hover:text-emerald-600">Solution</Link></li>
              <li><Link to="/team" className="text-slate-600 hover:text-emerald-600">Team</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-emerald-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:jallad.ibrahim@pm.me" className="text-slate-600 hover:text-emerald-600 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  jallad.ibrahim@pm.me
                </a>
              </li>
              <li><a href="#" className="text-slate-600 hover:text-emerald-600 flex items-center gap-2"><Linkedin className="w-4 h-4" />LinkedIn</a></li>
              <li><a href="#" className="text-slate-600 hover:text-emerald-600 flex items-center gap-2"><Twitter className="w-4 h-4" />Twitter</a></li>
              <li><a href="#" className="text-slate-600 hover:text-emerald-600 flex items-center gap-2"><Github className="w-4 h-4" />GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>&copy; 2025 Tactile Horizons AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}