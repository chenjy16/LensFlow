import { Shield } from "lucide-react";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                LensFlowPro
              </span>
            </Link>
            <div className="hidden md:flex ml-auto space-x-6">
              <Link
                href="/legal/privacy-and-cookie-policy"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms-of-service"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              Refund Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: January 18, 2026
            </p>
          </div>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Refund Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 text-lg">
              License purchases are processed by Creem. If you are unsatisfied with your purchase, you may request a refund within 14 days of the original purchase date.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              How to Request a Refund
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              To request a refund, please contact us at <a href="mailto:chenjianyu944@gmail.com" className="text-blue-600 hover:underline">chenjianyu944@gmail.com</a> with your order details.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Please include your Creem order number or the email address used during purchase so we can locate your transaction quickly.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-sm mt-3">
              We will respond to your refund request within 7 business days.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Refund Processing
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Approved refunds are processed by Creem and returned to the original payment method. Processing typically takes 3–15 business days depending on your payment provider.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Once a refund is approved, your license key will be revoked and the software will no longer be activated.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              For questions about refunds or our refund policy:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Business Name:</strong> jianyu
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:chenjianyu944@gmail.com" className="text-blue-600 hover:underline">
                  chenjianyu944@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
