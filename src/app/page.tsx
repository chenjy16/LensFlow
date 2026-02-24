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
              <a
                href="https://www.creem.io/payment/prod_bi184SegyiXtwO6P2Kep1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition-colors"
              >
                Buy Pro
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ① Hero Section — Value Core */}
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
                Professional Output Upgrade
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                Unlock the Full Power of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                  {" "}
                  LensFlowPro
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Export in 4K and original resolution, enable ultra-smooth 60 &amp; 120 FPS output, and remove all watermarks — forever.
              </p>

              <p className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-10 max-w-2xl mx-auto lg:mx-0">
                One-time payment. Lifetime access. No subscriptions.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="https://www.creem.io/payment/prod_bi184SegyiXtwO6P2Kep1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-9 py-3.5 rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Buy Pro License
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="https://dl.lensflowpro.qzz.io/LensFlowPro-3.4.1.dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-200 px-6 py-3 rounded-full border border-slate-200 dark:border-white/15 hover:bg-white/70 dark:hover:bg-white/10 transition-colors font-medium inline-flex items-center gap-2"
                >
                  Download Free Version
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/legal/release-notes"
                  className="text-slate-500 dark:text-slate-400 px-4 py-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Release Notes
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">One-time payment</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">Instant license delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-300">No recurring fees</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://www.producthunt.com/products/lensflowpro/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_campaign=badge-lensflowpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 p-1.5 shadow-sm transition-opacity hover:opacity-90"
                  aria-label="LensFlowPro on Product Hunt - Reviews"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1146122&theme=light"
                    alt="LensFlowPro on Product Hunt"
                    width={250}
                    height={54}
                    className="h-[54px] w-[250px] rounded-lg dark:opacity-95"
                  />
                </a>
                <a
                  href="https://www.producthunt.com/products/lensflowpro?utm_source=badge-follow&utm_medium=badge&utm_campaign=badge-lensflowpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 p-1.5 shadow-sm transition-opacity hover:opacity-90"
                  aria-label="Follow LensFlowPro on Product Hunt"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1146122&theme=light&size=small"
                    alt="Follow LensFlowPro on Product Hunt"
                    width={86}
                    height={32}
                    className="h-8 w-[86px] rounded-lg dark:opacity-95"
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

      {/* ② Free vs Pro Comparison — Conversion Core */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Free vs
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500"> Pro</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              See exactly what you get when you upgrade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Free Version</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">—</span>
                  <span>Standard resolution export</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">—</span>
                  <span>Watermarked output</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">—</span>
                  <span>Limited frame rate options</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 p-8 rounded-3xl border-2 border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pro Version Unlocks</h3>
              <ul className="space-y-4 text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>4K &amp; original resolution export</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>60 FPS &amp; 120 FPS export</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Completely watermark-free exports</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="https://www.creem.io/payment/prod_bi184SegyiXtwO6P2Kep1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Upgrade to Pro
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ Pro Feature Details + ④ License Details */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                With the Pro license, you get:
              </h2>
              <ul className="space-y-5 text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Export in 4K and original resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Enable 60 FPS and 120 FPS output</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Remove all watermarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Activate on up to 3 devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Free minor updates included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>No subscription required</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                License Details
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <ul className="space-y-5 text-slate-700 dark:text-slate-200">
                  <li className="flex items-start gap-3">
                    <Monitor className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Activate on up to <strong>3 devices</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Deactivate and transfer your license anytime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Works offline after activation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Instant license key delivery via email</span>
                  </li>
                </ul>
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
                <span><strong>Presenter Overlay:</strong> Native support on macOS 14.2+.</span>
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

      {/* ⑤ Perfect For — Target User Positioning */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Perfect
              <span className="text-blue-600 dark:text-blue-400"> For</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Built for professionals who demand uncompromising output quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Video className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Video Editors
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                4K source footage, multi-track audio, watermark-free output
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Motion Designers
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                120 FPS capture, cinematic Smart Camera, alpha channel export
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Content Creators
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Tutorials, demos, courses — clean exports ready for publishing
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <Camera className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Professional Photographers
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Original resolution capture for retouching workflows and client reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ Payment Trust Signals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-10 rounded-3xl border border-blue-200/60 dark:border-blue-800/40">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Buy with Confidence
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <span className="font-semibold text-slate-900 dark:text-white">One-time payment</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="h-8 w-8 text-blue-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Instant license delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-indigo-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Secure checkout</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <span className="font-semibold text-slate-900 dark:text-white">No recurring fees</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.creem.io/payment/prod_bi184SegyiXtwO6P2Kep1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 text-lg"
              >
                Buy Pro License
                <ArrowRight className="h-5 w-5" />
              </a>
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
                <li>• Hardened Runtime with Developer ID signing</li>
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
                  <span className="font-medium">macOS 14.2+ (Sonoma)</span>
                </li>
                <li className="flex justify-between">
                  <span>Architecture:</span>
                  <span className="font-medium">Apple Silicon (arm64)</span>
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
                    <strong>macOS 14.2+:</strong> Full feature set including Presenter Overlay
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>
                    <strong>macOS 15.0+:</strong> HDR recording &amp; latest optimizations
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Requires macOS 14.2 (Sonoma) or later. Latest macOS recommended for optimal performance.
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
              Security &amp; Distribution
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
                  Distribution &amp; Code Signing
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Signed with Apple Developer ID certificate</li>
                  <li>• Notarized by Apple for Gatekeeper verification</li>
                  <li>• Hardened Runtime enabled</li>
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
              Professional output upgrade for video editors, motion designers, and creators.
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
              License purchases are securely processed by Creem. Download the DMG and activate with your license key.
            </p>
            <p className="text-slate-500 text-sm mt-4">
              &copy; 2026 LensFlowPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
