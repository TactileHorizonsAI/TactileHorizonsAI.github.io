import { Brain, Target } from 'lucide-react';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">About Tactile Horizons AI</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're on a mission to make visual content accessible to the blind and low-vision
              community through AI-powered tactile graphics generation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To break down barriers in education and mass communication by providing
              AI-powered solutions that transform visual content into accessible tactile
              graphics, enabling blind and low-vision individuals to access information
              independently.
            </p>
          </div>

          {/* Problem Deep Dive */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Challenge We Face</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">The Scale of the Problem</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>285 million people worldwide are blind or low-vision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>95% of visual content is never converted to tactile format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Traditional tactile graphics require specialized skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>High cost and limited availability restrict access</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Impact on Education</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Lower STEM enrollment for blind and low-vision students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Significant barriers in accessing visual educational materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Lost potential in high-skill STEM careers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Limited independence in learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Approach</h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              We combine proprietary AI technology with deep understanding of how blind users
              process tactile information. Our system learns individual perception patterns to
              deliver personalized tactile graphics that maximize comprehension.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <h4 className="text-emerald-600 font-semibold mb-2">Rule-Based Systems</h4>
                <p className="text-slate-600 text-sm">
                  Proven accessibility guidelines ensure consistent quality
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <h4 className="text-cyan-600 font-semibold mb-2">Deep Learning</h4>
                <p className="text-slate-600 text-sm">
                  Perception models trained on blind user processing
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <h4 className="text-purple-600 font-semibold mb-2">Continuous Learning</h4>
                <p className="text-slate-600 text-sm">
                  Adapts to individual preferences over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}