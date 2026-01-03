import { ArrowRight, Download, Star, CheckCircle, Camera, Zap, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">LensFlowPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Reviews</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-8">
            <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-900 dark:text-blue-100 font-medium">4.9/5 Rating - 10K+ Downloads</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Professional Photo
            <span className="text-blue-600 dark:text-blue-400"> Editing</span>
            <br />
            Made Simple
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your photos with AI-powered editing tools. LensFlowPro brings professional-grade photo editing to your mobile device with intuitive controls and stunning results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              <Download className="h-5 w-5" />
              <span>Download Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 transition-colors flex items-center space-x-3 text-lg font-medium">
              <span>Watch Demo</span>
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No subscription required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Works offline</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Ad-free experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Features for
              <span className="text-blue-600 dark:text-blue-400"> Every Photographer</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Everything you need to create stunning photos, from basic adjustments to advanced AI-powered enhancements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">AI-Powered Editing</h3>
              <p className="text-slate-600 dark:text-slate-300">Smart algorithms that automatically enhance your photos with professional-grade results.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Camera className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Advanced Camera Controls</h3>
              <p className="text-slate-600 dark:text-slate-300">Manual controls for exposure, focus, white balance, and more for complete creative control.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Privacy First</h3>
              <p className="text-slate-600 dark:text-slate-300">All editing happens on your device. Your photos never leave your phone unless you want them to.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Community Presets</h3>
              <p className="text-slate-600 dark:text-slate-300">Access thousands of custom presets created by professional photographers worldwide.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Batch Processing</h3>
              <p className="text-slate-600 dark:text-slate-300">Edit hundreds of photos at once with consistent settings and one-tap enhancements.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Download className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Export Flexibility</h3>
              <p className="text-slate-600 dark:text-slate-300">Save in multiple formats, resolutions, and quality settings optimized for any platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Simple, Transparent
              <span className="text-blue-600 dark:text-blue-400"> Pricing</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Choose the plan that works best for you. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Free</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">Perfect for casual photographers</p>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Basic editing tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">10+ presets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Export up to 1080p</span>
                </li>
              </ul>
              <button className="w-full bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white py-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-blue-600 text-white p-8 rounded-2xl transform scale-105 shadow-xl">
              <div className="bg-yellow-400 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-blue-100 mb-6">For serious photographers</p>
              <div className="text-3xl font-bold mb-6">$9.99<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>Advanced AI tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>1000+ premium presets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>4K export quality</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>Batch processing</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-full hover:bg-blue-50 transition-colors font-semibold">
                Start Free Trial
              </button>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Lifetime</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">One-time payment, forever access</p>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">$99</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Everything in Pro</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Future updates included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                Buy Once
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Loved by
              <span className="text-blue-600 dark:text-blue-400"> Photographers Worldwide</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              See what our users are saying about LensFlowPro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                &quot;This app completely changed my mobile photography workflow. The AI tools are incredible and save me hours of editing time.&quot;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">John Doe</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Professional Photographer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                &quot;Best photo editing app I&apos;ve ever used. The interface is intuitive and the results are stunning. Worth every penny!&quot;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Sarah Miller</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Content Creator</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                &quot;The batch processing feature alone is worth the subscription. I can edit hundreds of photos in minutes instead of hours.&quot;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Mike Chen</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Wedding Photographer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Photos?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of photographers who have already elevated their editing game with LensFlowPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors flex items-center space-x-3 text-lg font-medium shadow-lg">
              <Download className="h-5 w-5" />
              <span>Download Free</span>
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors flex items-center space-x-3 text-lg font-medium">
              <span>View Pro Features</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">LensFlowPro</span>
              </div>
              <p className="text-slate-400">
                Professional photo editing made simple and accessible to everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LensFlowPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}