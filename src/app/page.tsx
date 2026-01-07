import {
  ArrowRight,
  Download,
  Star,
  CheckCircle,
  Camera,
  Monitor,
  Mic,
  Shield,
  Users,
  Zap,
  Volume2,
  User,
  Settings,
  Mail,
  MousePointer,
  Maximize2,
  Keyboard,
  Globe,
  Headphones,
  Video,
  Grid3x3,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/icon1.png"
                alt="LensFlowPro Icon"
                className="h-6 w-6"
              />
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                LensFlowPro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#advantages"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Advantages
              </a>
              <a
                href="#requirements"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Requirements
              </a>
              <a
                href="#support"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Record Your Mac
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  Like a Pro
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Native macOS screen recording with professional features. Built
                for creators, developers, and educators.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-slate-600 dark:text-slate-300 mb-10">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Native Performance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Multi-Track Audio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Camera Overlays</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/us/app/lensflowpro/id6757075353?mt=12
                  LensFlowPro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
                >
                  Get LensFlowPro
                </a>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  $29.99 one-time purchase
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <Image
                src="/Screenshot-2025-12-30-at-22-04-32-1.png"
                alt="LensFlowPro user interface showing screen recording controls and camera overlay"
                width={1200}
                height={700}
                className="w-full rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              🎬 Perfect
              <span className="text-blue-600 dark:text-blue-400"> For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Content Creators
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Tutorials, demos, walkthroughs
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Developers
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Bug reports, code reviews, presentations
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Monitor className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Educators
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Online courses, training videos
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Video className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Remote Workers
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Async messages, screen shares
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section
        id="advantages"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Key
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                Advantages
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                1. Flexible recording for different scenarios
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Monitor className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Entire Desktop</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Record the full desktop or specific display
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Camera className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">App-Specific</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Record only a particular app window
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Settings className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Precise Control</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Control exactly what gets recorded
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                2. Clear visuals and high-quality audio
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Volume2 className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">System Audio</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Supports system audio recording (app sounds, video audio,
                    etc.)
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Mic className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Microphone Recording</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Ideal for speaking while operating, can record both
                    simultaneously
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                3. Presenter Overlay / Picture-in-picture narration
              </h3>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl max-w-2xl mx-auto">
                <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  On macOS 14+, LensFlowPro supports Apple's Presenter Overlay
                  feature for professional narration. Your camera feed appears
                  naturally on screen without blocking key content.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                  <strong>System Requirements:</strong> macOS 14.0 or later for
                  Presenter Overlay. Classic picture-in-picture mode available
                  on earlier versions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and User Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Quality &amp;
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                User Experience
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Quality and Export
              </h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Supports high-quality video encoding, balancing image
                    quality and file size
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Optimized for modern displays and editing workflows
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Exported files can be imported directly into common video
                    editing software
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Less distraction, more focus on creation
              </h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Clean control interface with key settings at a glance
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Flexible control over whether the menu bar and desktop icons
                    appear in the recording
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    Supports mouse highlight and zoom effects to better guide
                    viewers' attention
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Optimized for long recording sessions
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Optimized specifically for long-duration recording to reduce
              stutters and interruptions. Ideal for recording full courses,
              multi-chapter trainings, or long product walkthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Data Protection &amp; Security
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Built with privacy and security as core principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                Local Processing
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>• All video encoding happens on-device</li>
                <li>• No cloud processing or external dependencies</li>
                <li>• Files remain on your device until you choose to share</li>
                <li>• No telemetry or usage tracking</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-2" />
                System Integration
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>• Uses Apple's native screen recording APIs</li>
                <li>• Complies with macOS security permissions</li>
                <li>• Respects user privacy settings and controls</li>
                <li>• Follows App Store sandboxing requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements & Compatibility */}
      <section
        id="requirements"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              System
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                Requirements
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Minimum Requirements
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex justify-between">
                  <span>Platform:</span>
                  <span className="font-medium">macOS</span>
                </li>
                <li className="flex justify-between">
                  <span>Version:</span>
                  <span className="font-medium">macOS 12.3+ (Monterey)</span>
                </li>
                <li className="flex justify-between">
                  <span>Architecture:</span>
                  <span className="font-medium">Intel or Apple Silicon</span>
                </li>
                <li className="flex justify-between">
                  <span>Memory:</span>
                  <span className="font-medium">8GB RAM recommended</span>
                </li>
                <li className="flex justify-between">
                  <span>Storage:</span>
                  <span className="font-medium">500MB free space</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Feature Compatibility
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>
                    <strong>macOS 12.3+:</strong> Basic screen recording &amp;
                    audio
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>
                    <strong>macOS 13.0+:</strong> Enhanced performance modes
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>
                    <strong>macOS 14.0+:</strong> Presenter Overlay feature
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>
                    <strong>macOS 15.0+:</strong> Latest optimizations
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Latest macOS version recommended for optimal performance and
                features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Privacy &amp;
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              Compliance
            </span>
          </h2>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Shield className="h-6 w-6 text-green-500 mr-2" />
              Privacy First Approach
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  All recordings are stored locally on your device by default
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>No automatic data transmission to external servers</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>
                  Minimal system diagnostic logs for crash reporting only
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Explicit user consent required for any data sharing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Settings className="h-6 w-6 text-blue-500 mr-2" />
              App Store Compliance
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  Intended Use
                </h4>
                <p className="text-sm">
                  LensFlowPro is designed exclusively for creating original
                  content including educational tutorials, software
                  demonstrations, training videos, and personal recordings.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  Content Guidelines
                </h4>
                <ul className="text-sm space-y-2">
                  <li>
                    • Does not include functionality to bypass DRM or copyright
                    protection
                  </li>
                  <li>
                    • Does not record protected streaming media without
                    permission
                  </li>
                  <li>
                    • Users are responsible for complying with applicable laws
                    and platform terms
                  </li>
                  <li>
                    • Intended only for recording content users have legal
                    rights to capture
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  Technical Standards
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• Follows Apple's Human Interface Guidelines</li>
                  <li>• Uses App Store review compliant APIs</li>
                  <li>
                    • Includes required privacy manifests for all third-party
                    SDKs
                  </li>
                  <li>
                    • No background processes that impact device performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section
        id="support"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Support and
            <span className="text-blue-600 dark:text-blue-400"> Feedback</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            If you run into issues while using LensFlowPro, or have feature
            requests or ideas for improvements, feel free to contact the
            developer.
          </p>

          <div className="bg-blue-600 p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <a
              href="mailto:chenjianyu944@gmail.com"
              className="text-blue-100 hover:text-white underline text-lg"
            >
              chenjianyu944@gmail.com
            </a>

            <div className="mt-6 text-left bg-blue-700/50 p-4 rounded-lg">
              <p className="text-sm mb-2 font-medium">
                When reaching out, it's helpful if you can also include:
              </p>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Your macOS version</li>
                <li>• Your Mac model</li>
                <li>
                  • A brief description of the issue or what you want to achieve
                </li>
                <li>• Screenshots or a short video, if available</li>
              </ul>
              <p className="text-sm mt-3 text-blue-100">
                This information helps diagnose problems more quickly and
                continuously improve the LensFlowPro experience.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://www.notion.so/User-Manual-2d681750f1e68004a9c7c9613f2a497d?pvs=21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span>📖</span>
              <span>Privacy Policy &amp; User Manual</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">LensFlowPro</span>
            </div>
            <p className="text-slate-400 mb-6">
              Professional Mac screen recording for creators, educators, and
              developers.
            </p>
            <p className="text-slate-500 text-sm">
              &copy; 2024 LensFlowPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
