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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              Refund Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: January 17, 2026
            </p>
          </div>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              1. Refund Window
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              We offer a <strong>30-day money-back guarantee</strong> from the date of purchase. 
              If you are not satisfied with LensFlowPro for any reason, you may request a full refund 
              within 30 days of your purchase date.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              2. How to Request a Refund
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              To request a refund, please contact us at{" "}
              <a href="mailto:chenjianyu944@gmail.com" className="text-blue-600 hover:underline font-medium">
                chenjianyu944@gmail.com
              </a>{" "}
              with the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-slate-700 dark:text-slate-300">
              <li>Your order number or transaction ID</li>
              <li>The email address used for purchase</li>
              <li>Purchase date</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              3. Processing Time
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Refunds are typically processed within 5-7 business days after approval. 
              The refund will be issued to your original payment method. Please allow 
              additional time for your bank or payment provider to process the refund.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              4. Contact Information
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              For any questions about our refund policy, please contact:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Email:</strong>{" "}
                <a href="mailto:chenjianyu944@gmail.com" className="text-blue-600 hover:underline">
                  chenjianyu944@gmail.com
                </a>
              </p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                <strong>Business Name:</strong> jianyu
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
