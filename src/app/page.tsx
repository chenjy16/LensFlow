import {
  ArrowRight,
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
  Maximize2,
  Headphones,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const fullFeatureRows = [
    {
      category: "Recording Modes",
      feature: "Full Screen Recording",
      description: "Capture the entire display (including the menu bar)",
    },
    {
      category: "Recording Modes",
      feature: "Area Recording",
      description: "Pixel-perfect selection of any region",
    },
    {
      category: "Recording Modes",
      feature: "App Recording",
      description: "Record only the selected application",
    },
    {
      category: "Recording Modes",
      feature: "Window Recording",
      description: "Record a single window (even if it’s covered)",
    },
    {
      category: "Recording Modes",
      feature: "System Audio",
      description: "Record internal audio with no extra drivers",
    },
    {
      category: "Audio",
      feature: "True Multi-Track Audio",
      description: "Separate system audio and microphone tracks for editing",
    },
    {
      category: "Audio",
      feature: "Acoustic Echo Cancellation (AEC)",
      description: "Crystal-clear voiceovers with reduced echo",
    },
    {
      category: "Audio",
      feature: "Multiple Formats",
      description: "MP3, AAC, ALAC, FLAC, Opus",
    },
    {
      category: "Camera",
      feature: "Picture-in-Picture Overlay",
      description: "Customizable shape, border, and position",
    },
    {
      category: "Camera",
      feature: "Live Mirroring",
      description: "Instantly flip the camera feed",
    },
    {
      category: "Effects",
      feature: "Screen Magnifier",
      description: "Zoom 1.0×–3.0× in real time (Option + Scroll)",
    },
    {
      category: "Effects",
      feature: "Mouse Highlight",
      description:
        "Visualize clicks (different colors for left/right/middle)",
    },
    {
      category: "Effects",
      feature: "Smart Cursor Smoothing",
      description:
        "Path redraw engine eliminates jitter so recorded cursors glide like a dolly shot",
    },
    {
      category: "Smart Camera",
      feature: "Metadata Recording",
      description: "Capture mouse events during screen recording for cinematic playback",
    },
    {
      category: "Smart Camera",
      feature: "Manual Keyframe Editing",
      description: "Add/edit/delete camera keyframes on the timeline for precise control",
    },
    {
      category: "Smart Camera",
      feature: "Auto-Analysis",
      description: "Automatically generate camera movements from mouse behavior",
    },
    {
      category: "Smart Camera",
      feature: "Deterministic Export",
      description: "Frame-by-frame reproducible output based on recorded metadata",
    },
    {
      category: "Output",
      feature: "Video Formats",
      description: "MP4 (H.264/H.265), MOV, Alpha channel",
    },
    {
      category: "Output",
      feature: "HDR Recording",
      description: "HDR on macOS 15+",
    },
    {
      category: "Output",
      feature: "Presets",
      description: "Save and reuse recording configurations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg z-50 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/icon1.png"
                alt="LensFlowPro Icon"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                LensFlowPro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#advantages"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Why Us
              </a>
              <a
                href="#requirements"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Requirements
              </a>
              <a
                href="mailto:chenjianyu944@gmail.com"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/70 to-indigo-300/50 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-200/60 to-purple-200/50 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-100 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
                macOS-first recording suite
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                Record Your Mac
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                  {" "}
                  Like a Pro
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Professional screen recording for Mac with cinematic Smart Camera, multi-track audio, and privacy-first controls.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="https://apps.apple.com/us/app/lensflowpro/id6757075353?mt=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-9 py-3.5 rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Get LensFlowPro
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  href="/legal/release-notes"
                  className="text-slate-700 dark:text-slate-200 px-6 py-3 rounded-full border border-slate-200 dark:border-white/15 hover:bg-white/70 dark:hover:bg-white/10 transition-colors font-medium"
                >
                  View Release Notes
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Native Performance</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Multi-Track Audio</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Smart Camera</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  href="https://www.producthunt.com/products/lensflowpro/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_campaign=badge-lensflowpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 p-1.5 shadow-sm transition-opacity hover:opacity-90"
                  aria-label="LensFlowPro on Product Hunt"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1146122&theme=light"
                    alt="LensFlowPro on Product Hunt"
                    width={250}
                    height={54}
                    className="h-[54px] w-[250px] rounded-lg dark:opacity-95"
                  />
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-[28px] bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 p-2 shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
                <div className="absolute inset-x-8 -top-6 h-12 bg-gradient-to-r from-blue-500/50 to-purple-500/40 blur-2xl opacity-70" aria-hidden />
                <Image
                  src="/Screenshot-2025-12-30-at-22-04-32-1.png"
                  alt="LensFlowPro user interface showing screen recording controls and camera overlay"
                  width={1200}
                  height={700}
                  className="w-full rounded-3xl border border-white/60 dark:border-white/10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
      >
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-100/30 to-transparent dark:from-blue-900/20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Key Features &amp; Advantages
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Professional tools for creators—cinematic export, smooth cursor, and flexible recording.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/60 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-7 w-7 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  App Blocklist
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                Block AI assistants from recordings; keep prompts private while sharing your workflow.
              </p>
            </div>

            <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/60 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <Video className="h-7 w-7 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Smart Camera
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                Cinematic export: keyframe editing, auto-analysis from mouse behavior, smart merge. Deterministic, frame-reproducible output.
              </p>
            </div>

            <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/60 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <Maximize2 className="h-7 w-7 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Screen Magnifier
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                Zoom 1.0×–3.0× while recording (Option + Scroll). Built-in magnification for code reviews and demos.
              </p>
            </div>

            <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/60 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="h-7 w-7 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Multi-Track Audio
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                System audio and mic as separate tracks; AEC for clear voiceovers. Mix or export separately in post.
              </p>
            </div>
          </div>

          <div id="advantages" className="mb-12 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 text-center">
              Why LensFlowPro
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <Monitor className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Flexible recording:</strong> Full desktop, app, or window.</span>
              </div>
              <div className="flex items-start gap-2">
                <Volume2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Clear audio &amp; visuals:</strong> System audio + mic, high-quality encoding.</span>
              </div>
              <div className="flex items-start gap-2">
                <Video className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Smart Cursor Smoothing:</strong> Path redraw engine—cursor glides like a dolly shot.</span>
              </div>
              <div className="flex items-start gap-2">
                <User className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Presenter Overlay:</strong> macOS 14+; PiP on earlier versions.</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Full Feature List
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Detailed breakdown by category.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Category
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {fullFeatureRows.map((row, index) => (
                    <tr
                      key={`${row.category}-${row.feature}-${index}`}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 align-top text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 align-top text-sm text-slate-900 dark:text-white whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 align-top text-sm text-slate-600 dark:text-slate-300">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Perfect
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
                    viewers&apos; attention
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
                <li>• Uses Apple&apos;s native screen recording APIs</li>
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

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Video className="h-6 w-6 text-blue-500 mr-2" />
              Smart Camera Privacy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Metadata recorded for cinematic export is handled with the same privacy standards as your video data.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                  Metadata We Collect
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Mouse position and click timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Active window focus changes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                  Privacy Safeguards
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span>Stored only in your local project file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span>Never transmitted to cloud servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span>Deleted when the recording project is removed</span>
                  </li>
                </ul>
              </div>
            </div>
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
                  For creating original content: tutorials, demos, training videos, and personal recordings.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  Content Guidelines
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• No DRM bypass functionality</li>
                  <li>• No protected streaming capture</li>
                  <li>• Users comply with applicable laws</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  Technical Standards
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Apple Human Interface Guidelines</li>
                  <li>• App Store compliant APIs</li>
                  <li>• Privacy manifests included</li>
                  <li>• No background performance impact</li>
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
                  When reaching out, it&apos;s helpful if you can also include:
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
              <Mail className="h-4 w-4" />
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
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <Link
                href="/legal/privacy-and-cookie-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/refund-policy"
                className="hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="/legal/release-notes"
                className="hover:text-white transition-colors"
              >
                Release Notes
              </Link>
              <Link
                href="/legal/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="https://www.producthunt.com/products/lensflowpro/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_campaign=badge-lensflowpro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Product Hunt
              </a>
            </div>
            <p className="text-slate-500 text-xs mt-6 max-w-2xl mx-auto">
              Purchases are processed by Apple through In-App Purchase.
            </p>
            <p className="text-slate-500 text-sm mt-4">
              &copy; 2025 LensFlowPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
