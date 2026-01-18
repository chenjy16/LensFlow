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
              1. Scope
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              This Refund Policy applies to LensFlowPro digital licenses and
              related services purchased via our website or App Store. It
              describes eligibility and the process for requesting refunds.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              2. Eligibility
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Refund requests are evaluated on a case-by-case basis. Eligible
              scenarios include non-delivered or defective products, or cases
              where the product substantially fails to meet its described
              features.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              3. Processing Time
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Refunds are typically processed within 7–14 business days after
              approval, depending on the payment processor and payment method.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              4. How to Request
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              To request a refund, please contact us with your order details at{" "}
              <span className="font-medium">chenjianyu944@gmail.com</span>.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-slate-700 dark:text-slate-300">
              <li>Order number</li>
              <li>Purchase email</li>
              <li>Purchase date</li>
              <li>Reason for refund</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              5. Exclusions
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Digital licenses, activated licenses, or services that have
              already been delivered or used extensively may be excluded
              depending on policy and local law.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              6. Refunds with Payment Processors
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Refunds are issued through the payment processor used at purchase.
              refunds will be processed according to their policies. We will
              provide links to the processors' refund policies where available.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              7. Updates to Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-0">
              We may update this Refund Policy from time to time. We will post
              the updated policy on this page and update the Last Updated date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
