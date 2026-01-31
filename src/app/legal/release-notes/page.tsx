import { BookOpen, History } from "lucide-react";
import Link from "next/link";

const releaseNotes = [
  {
    version: "v2.9.3",
    title: "Smarter Exports & Pro Color",
    date: "January 31, 2026",
    summary: "Smarter exports, richer color, steadier edits.",
    items: [
      {
        label: "Smart Color Pipeline",
        description:
          "Optimized export algorithms now preserve a richer gamut with higher color fidelity.",
      },
      {
        label: "Export Lock Mode",
        description:
          "The editor locks during renders to prevent accidental clicks from interrupting the job.",
      },
      {
        label: "Preview Sync",
        description:
          "Preview state is captured before exporting so the final file matches what you see on screen.",
      },
      {
        label: "Pro Entitlements",
        description:
          "One-time IAP unlock now governs 4K and 120 FPS exports with no watermark.",
      },
    ],
  },
  {
    version: "v2.9.0",
    title: "Precision Meets Smoothness",
    summary: "Sharper alignment, silkier playback, more confident edits.",
    items: [
      {
        label: "Smart Cursor Smoothing",
        description:
          "A new path redraw engine eliminates jitter so recorded cursors glide like a dolly shot.",
      },
      {
        label: "Smart Camera Soft Sync",
        description:
          "Audio/video sync in Smart Camera mode now aligns with frame-level accuracy.",
      },
      {
        label: "UI Polish",
        description:
          "Timeline rulers, contrast, and feedback elements were refined for pro-grade clarity.",
      },
    ],
  },
  {
    version: "v2.6",
    title: "Recording, Reinvented",
    summary: "Decide after you capture, not before.",
    items: [
      {
        label: "Unified Capture Architecture",
        description:
          "A rebuilt recording stack now collects every metadata stream for maximum flexibility.",
      },
      {
        label: "Flexible Exports",
        description:
          "Switch between Standard and Smart Camera exports at any moment—no rerecording needed.",
      },
      {
        label: "Ultra-Fast Scrubbing",
        description:
          "Scrubbing logic was rewritten to support high-frequency, pinpoint seeking on the timeline.",
      },
    ],
  },
  {
    version: "v2.4",
    title: "HDR Arrives",
    summary: "High dynamic range from capture to delivery.",
    items: [
      {
        label: "HDR Pipeline",
        description: "LensFlowPro now ingests, processes, and exports HDR footage end-to-end.",
      },
      {
        label: "Dynamic Range Analyzer",
        description:
          "Highlights and shadows are analyzed in real time to look their best on XDR displays.",
      },
    ],
  },
  {
    version: "v2.2",
    title: "Metal Upgrade",
    summary: "A modern graphics core for modern workloads.",
    items: [
      {
        label: "Full Metal Migration",
        description:
          "The Smart Camera rendering engine now runs on Metal for tighter integration with macOS.",
      },
      {
        label: "Performance Leap",
        description:
          "4K exports place less load on the system and finish significantly faster.",
      },
    ],
  },
  {
    version: "v2.1",
    title: "Faster Exports",
    summary: "Speed, cleanliness, and compliance in one build.",
    items: [
      {
        label: "Streaming Export Engine",
        description:
          "The exporter now writes frames while rendering, lowering memory usage.",
      },
      {
        label: "One-Tap Cleanup",
        description:
          "Remove every Smart Camera keyframe with a single command when you need a clean slate.",
      },
      {
        label: "App Store Compliance",
        description:
          "Improved sandbox compatibility and build stability for smoother reviews.",
      },
    ],
  },
  {
    version: "v1.1",
    title: "Privacy & Precision",
    summary: "Cleaner permissions, sharper visuals.",
    items: [
      {
        label: "Permission Flow",
        description:
          "macOS permission prompts now guide you through screen recording access without friction.",
      },
      {
        label: "Visualization Accuracy",
        description:
          "Frame-rate displays and keystroke overlays were corrected for true-to-input feedback.",
      },
    ],
  },
  {
    version: "v1.0",
    title: "Hello, LensFlowPro",
    summary: "A native macOS recorder built for creators.",
    items: [
      {
        label: "All-New UI/UX",
        description:
          "A native macOS interface delivers consistent, efficient control over every capture.",
      },
      {
        label: "Secure Sandbox",
        description:
          "Built to Apple privacy standards so every recording stays under your control.",
      },
    ],
  },
];

export default function ReleaseNotes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">LensFlowPro</span>
            </Link>
            <div className="hidden md:flex ml-auto space-x-6">
              <Link href="/legal/privacy-and-cookie-policy" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/release-notes" className="text-slate-900 dark:text-white font-semibold">
                Release Notes
              </Link>
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <History className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              LensFlowPro Release Notes
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Every build, tuned for creators.
            </p>
          </div>

          <div className="space-y-8">
            {releaseNotes.map((entry) => (
              <section
                key={entry.version}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                    {entry.version}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {entry.title}
                  </h2>
                </div>
                {entry.date && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Released {entry.date}</p>
                )}
                <p className="text-slate-700 dark:text-slate-300 mb-6">{entry.summary}</p>
                <div className="space-y-4">
                  {entry.items.map((item) => (
                    <div key={item.label}>
                      <p className="text-base font-semibold text-slate-900 dark:text-white">{item.label}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
