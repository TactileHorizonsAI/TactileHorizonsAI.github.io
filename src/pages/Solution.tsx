import { Brain, Layers, Zap, Settings, Database, Printer } from 'lucide-react';
import { Footer } from '../components/Footer';

export function SolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Solution</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI-powered tactile graphics generation that transforms visual content
              into accessible formats for the blind and low-vision community.
            </p>
          </div>

          {/* Core Technology */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-emerald-500" />
              Core Technology
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Our proprietary system combines rule-based accessibility guidelines with
              deep-learning perception models to automatically generate personalized tactile
              graphics from any visual content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h4 className="text-emerald-600 font-semibold mb-3">Unique Innovation</h4>
                <p className="text-slate-600 text-sm">
                  We're the only solution combining rule-based systems with deep-learning
                  perception models trained on how blind users process tactile information.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h4 className="text-cyan-600 font-semibold mb-3">Mass Communication Focus</h4>
                <p className="text-slate-600 text-sm">
                  Unlike competitors focused on individual adaptation, we're built for
                  education and mass communication at scale.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">1</div>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Input</h3>
                <p className="text-slate-600 text-sm">
                  Upload any visual content: charts, diagrams, images, or educational materials
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">2</div>
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Processing</h3>
                <p className="text-slate-600 text-sm">
                  Our AI analyzes the content and learns from user perception patterns
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">3</div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Generation</h3>
                <p className="text-slate-600 text-sm">
                  Personalized tactile graphics are automatically generated
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">4</div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Output</h3>
                <p className="text-slate-600 text-sm">
                  Ready-to-print tactile graphics in multiple formats
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">Automatic Generation</h4>
                  <p className="text-slate-600 text-sm">
                    AI converts visual content to tactile format in seconds, eliminating
                    manual creation processes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">Personalized Adaptation</h4>
                  <p className="text-slate-600 text-sm">
                    Learns individual perception patterns to optimize tactile output
                    for each user's comprehension
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">Scalable Platform</h4>
                  <p className="text-slate-600 text-sm">
                    Designed for mass communication and education, supporting
                    thousands of users simultaneously
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acquisition Channels */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Target Markets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-emerald-600 mb-4">Primary Channels (1st Priority)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Industry - Enterprise & Corporate (Fortune 500, Financial Institutions)
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Organizations - Working with the Blind (NIB, CNIB, NSITE)
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    SaaS - Platform Integrations (LMS, Publishers, API Marketplace)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Secondary Channels (2nd Priority)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Government - Regulatory Compliance (ADA Title II, Accessible Canada Act)
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    School Boards - Educational Institutions (K-12, Higher Ed, Libraries)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}