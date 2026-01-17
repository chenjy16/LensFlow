"use client";

import { Shield, Cookie } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">LensFlowPro</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/legal/privacy-and-cookie-policy" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/legal/refund-policy" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Refund Policy</Link>
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Privacy and Cookie Policy</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">Last updated: January 17, 2026</p>
          </div>

          <section id="privacy" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Privacy Policy</h2>
            </div>

            <div className="space-y-8 text-slate-700 dark:text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Overview</h3>
                <p className="mb-4">This Privacy Policy describes how LensFlowPro ("we", "us", or "our") collects, uses, and protects your information. We are committed to protecting your privacy and ensuring the security of your personal data.</p>
                <p>LensFlowPro is a macOS screen recording application designed with privacy-first principles. All video processing and storage occur locally on your device unless you explicitly choose to share your recordings.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Data Controller</h3>
                <p className="mb-2">The Controller of your personal data is LensFlowPro.</p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="font-medium">Email: chenjianyu944@gmail.com</p>
                </div>
                <p className="mt-3">For all matters regarding our services or the processing of your personal data, please contact us at the email address above.</p>
              </div>

               <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Payment Processor</h3>
                <p className="text-sm mb-2">LensFlowPro payments may be processed by Creem. We do not store full payment card information on our servers. Processing policies are provided by the payment processor.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Your Data Rights</h3>
                <p className="mb-2">You have the following rights regarding your personal data:</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but strive to use commercially acceptable means to protect your data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Children's Privacy</h3>
                <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we discover that such information has been collected, we will delete it immediately.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">International Data Transfers</h3>
                <p>Your data may be transferred to and processed in countries other than your own. When we transfer your data, we ensure appropriate safeguards are in place to protect your privacy in accordance with applicable data protection laws.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of LensFlowPro after such changes constitutes acceptance of the new policy.</p>
              </div>
            </div>
          </section>

          <section id="cookies" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Cookie Policy</h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300">Cookie details go here (brief placeholder).</p>
          </section>
        </div>
      </div>

      <footer className="bg-slate-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">LensFlowPro</span>
          </div>
          <p className="text-slate-400 text-sm mb-4">Professional Mac screen recording for creators, educators, and developers.</p>
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
            <Link href="/">Home</Link>
            <Link href="/legal/privacy-and-cookie-policy">Privacy Policy</Link>
          </div>
          <p className="text-slate-500 text-xs mt-4">&copy; 2026 LensFlowPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
