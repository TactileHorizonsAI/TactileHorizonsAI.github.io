import { Brain, Eye, BarChart3, Globe2, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-700 text-sm font-medium">AI-Powered Accessibility</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Tactile Graphics for the
            <span className="text-emerald-600"> Blind & Low Vision</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Tactile Horizons AI transforms visual content into accessible tactile graphics
            using proprietary deep learning. Making STEM education and mass communication
            accessible to everyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/solution"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/30"
            >
              Explore Our Solution
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Accessibility Gap</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              285 million people worldwide are blind or low vision, yet visual content
              remains largely inaccessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inaccessible Content</h3>
              <p className="text-slate-600">
                Traditional tactile graphics are static, expensive, and require
                specialized skills to create. 95% of visual content is never converted.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lower STEM Outcomes</h3>
              <p className="text-slate-600">
                Blind and low-vision students face significant barriers in STEM education
                due to inaccessible visual materials, resulting in lower enrollment.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lost Potential</h3>
              <p className="text-slate-600">
                The gap in accessible visual content leads to untapped potential in
                high-skill STEM careers and mass communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">AI-Powered Solution</h2>
              <p className="text-slate-600 mb-8">
                Our proprietary technology combines rule-based systems with deep learning
                to automatically generate personalized tactile graphics from any visual content.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold">Automatic Generation</h4>
                    <p className="text-slate-600 text-sm">
                      AI converts images, charts, and diagrams to tactile format instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold">Personalized Adaptation</h4>
                    <p className="text-slate-600 text-sm">
                      Learns individual perception patterns for optimal comprehension
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold">Mass Communication</h4>
                    <p className="text-slate-600 text-sm">
                      Scales accessibility for education and public information
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-200">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-emerald-500" />
                  <span className="text-emerald-600 text-sm font-medium">AI Engine</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-slate-500 text-sm mb-2">Input</p>
                    <p className="text-slate-800 font-mono text-sm">
                      Visual content (charts, diagrams, images)
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-emerald-500 rotate-90" />
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <p className="text-emerald-600 text-sm mb-2">Output</p>
                    <p className="text-slate-800 font-mono text-sm">
                      Personalized tactile graphics ready for printing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">285M</div>
              <p className="text-slate-600">Blind & Low Vision Globally</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
              <p className="text-slate-600">Inaccessible Visual Content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$3.91B</div>
              <p className="text-slate-600">Market Opportunity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">90%</div>
              <p className="text-slate-600">Gross Margin</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Building the Future of Accessibility
          </h2>
          <p className="text-slate-600 mb-10">
            Join us in making visual content accessible to everyone, everywhere.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-500/30"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}