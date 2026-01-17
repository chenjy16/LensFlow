/**
 * Terms of Service page for LensFlowPro app
 * Note: This is a static, content-driven page inspired by the reference terms
 */

import Link from "next/link";
import { Shield } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">LensFlowPro</span>
            </Link>
            <div className="hidden md:flex ml-auto space-x-6">
              <Link href="/legal/privacy-and-cookie-policy" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms-of-service" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors font-semibold text-blue-600">Terms of Service</Link>
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">Terms of Service</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">Last updated: January 17, 2026</p>
          </div>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These Terms govern your use of LensFlowPro software and services. By
              installing, accessing or using LensFlowPro, you agree to be bound by these
              Terms. If you do not agree, do not use the software.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Acceptance of Terms</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              By using LensFlowPro you acknowledge that you have read, understood and agree to
              be bound by these Terms and all applicable laws and regulations.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. License and Ownership</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              LensFlowPro is licensed, not sold. We retain all ownership and intellectual property rights.
              You receive a limited, non-exclusive, non-transferable license to use the software in
              accordance with these Terms.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Usage Guidelines</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              You must not reverse engineer, decompile, disassemble, or otherwise attempt to discover the
              source code of LensFlowPro, except to the extent permitted by applicable law.
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 ml-6 space-y-2">
              <li>Do not use the software in a way that violates any law or regulation</li>
              <li>Do not use for illegal activities or in a way that infringes others rights</li>
              <li>Do not remove or alter copyright notices</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Privacy</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Your use of LensFlowPro is subject to our Privacy Policy. For details on data
              collection, processing and storage, please review our Privacy Policy in the application.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Updates to Terms</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              We may update these Terms from time to time. We will post the updated Terms on this page and
              adjust the Last Updated date. Your continued use of LensFlowPro after changes constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Termination</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              We may terminate or suspend access to LensFlowPro at any time for any reason, including
              violation of these Terms. Upon termination, all licenses granted to you will immediately cease.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Disclaimers</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              LensFlowPro is provided “as is” and without warranties of any kind. To the maximum extent
              permitted by law, LensFlowPro disclaims all warranties, express or implied, including but not limited
              to implied warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              In no event shall LensFlowPro or its licensors be liable for any indirect, incidental, special,
              or consequential damages resulting from the use of LensFlowPro, even if advised of the possibility
              of such damages. The total liability shall not exceed the amount paid for the license, if any.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Governing Law</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the relevant
              jurisdiction. Any disputes will be resolved in the courts located in the chosen jurisdiction.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Contact</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              If you have questions about these Terms, please contact us at
              <span className="ml-1 font-medium"> LensFlowPro Team</span>.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-0">
              Email: <a className="text-blue-600" href="mailto:chenjianyu944@gmail.com">chenjianyu944@gmail.com</a>
            </p>
          </section>\n\n          <section className=\"bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm\">\n            <h2 className=\"text-2xl font-bold text-slate-900 dark:text-white mb-4\">12. Payment & Billing</h2>\n            <p className=\"text-slate-700 dark:text-slate-300 mb-4\">\n              LensFlowPro payments may be processed by Creem (final processor Creem). We do not store full payment card information on our servers. The terms of the payment processor apply. See Creem's Privacy Policy: creem.io/privacy.\n            </p>\n            <p className=\"text-slate-700 dark:text-slate-300 mb-4\">\n              For details, see the respective payment processor policy links when available.\n            </p>\n          </section>\n        </div>\n      </div>\n    </div>\n  );
}
