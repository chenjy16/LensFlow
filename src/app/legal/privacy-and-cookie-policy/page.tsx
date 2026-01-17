"use client";

import { Shield, Cookie, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyCookiePolicy() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                LensFlowPro
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("privacy")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection("cookies")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </button>
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
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Privacy and Cookie Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: January 17, 2026
            </p>
          </div>

          <section
            id="privacy"
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Privacy Policy
              </h2>
            </div>

            <div className="space-y-8 text-slate-700 dark:text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Overview
                </h3>
                <p className="mb-4">
                  This Privacy Policy describes how LensFlowPro (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                  collects, uses, and protects your information. We are committed to
                  protecting your privacy and ensuring the security of your personal data.
                </p>
                <p>
                  LensFlowPro is a macOS screen recording application designed with
                  privacy-first principles. All video processing and storage occur locally on
                  your device unless you explicitly choose to share your recordings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Data Controller
                </h3>
                <p className="mb-2">
                  The Controller of your personal data is:
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="font-medium">Email: chenjianyu944@gmail.com</p>
                </div>
                <p className="mt-3">
                  For all matters regarding our services or the processing of your personal
                  data, please contact us at the email address above.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Screen Recording Data Handling
                </h3>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 mt-6">
                  How We Handle Your Screen Recordings
                </h4>
                <div className="space-y-4 mt-3">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold mb-2">1. Local Processing</h5>
                    <p className="text-sm">
                      All screen recordings are processed locally on your device. The
                      recordings are never uploaded to our servers unless you explicitly
                      choose to share them through third-party services (e.g., email, cloud
                      storage).
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="font-semibold mb-2">2. Project Files</h5>
                    <p className="text-sm">
                      Project files contain your original recordings with all metadata. These
                      files are stored locally on your device. Only share these files with
                      trusted parties who need editing access.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h5 className="font-semibold mb-2">3. Smart Camera Metadata</h5>
                    <p className="text-sm">
                      Mouse events and window focus data are recorded for cinematic export.
                      This metadata is stored only in your local project file and is never
                      transmitted to cloud servers.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Information We Collect
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      Data Processed Locally (Never Sent to LensFlowPro):
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Screen recordings and project files</li>
                      <li>Camera overlay footage</li>
                      <li>Audio recordings (system audio and microphone)</li>
                      <li>Smart Camera metadata (mouse events, window focus)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      App Store Purchase Data (Managed by Apple):
                    </h4>
                    <p className="text-sm mb-2">
                      LensFlowPro is distributed through the Mac App Store. When you
                      purchase our app:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Payment processing is handled entirely by Apple</li>
                      <li>Licensing and receipts are managed by Apple</li>
                      <li>We do not receive or store your payment information</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      Website Analytics (Anonymous):
                    </h4>
                    <p className="text-sm">
                      Our website may use privacy-focused analytics to understand how visitors
                      use our site. This data is anonymized and does not identify individual
                      users. See our Cookie Policy for details.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  How We Use Your Information
                </h3>
                <p className="mb-2">
                  We use information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide and improve the LensFlowPro application</li>
                  <li>Process crash reports for debugging purposes (with your consent)</li>
                  <li>Analyze website traffic (anonymized)</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Legal Basis for Data Processing
                </h3>
                <p className="mb-2">
                  The legal basis for processing your personal data includes:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Contract Performance:</strong> Providing the LensFlowPro app and
                    related services (GDPR Art. 6(1)(b))
                  </li>
                  <li>
                    <strong>Legitimate Interest:</strong> Improving our products, handling
                    support requests, and ensuring security (GDPR Art. 6(1)(f))
                  </li>
                  <li>
                    <strong>Consent:</strong> When you agree to send crash reports or
                    usage analytics (GDPR Art. 6(1)(a))
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Data Sharing and Third Parties
                </h3>
                <p className="mb-2">
                  We do not sell your personal data to third parties. We may share data only
                  in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Apple (App Store):</strong> Handles payment processing and
                    licensing. We do not have access to your payment details.
                  </li>
                  <li>
                    <strong>Analytics Providers:</strong> Privacy-focused analytics
                    providers may receive anonymized website traffic data. See Cookie Policy
                    for details.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> Trusted third-party services may
                    be used for website hosting, email delivery, and support systems.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect
                    our rights.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Your Data Rights
                </h3>
                <p className="mb-2">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Right of Access:</strong> Request information about the data we
                    hold about you (GDPR Art. 15)
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request correction of inaccurate
                    data (GDPR Art. 16)
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your data (GDPR
                    Art. 17)
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Limit how we process your
                    data (GDPR Art. 18)
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Receive your data in a
                    machine-readable format (GDPR Art. 20)
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing based on
                    legitimate interest (GDPR Art. 21)
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time
                    for consent-based processing
                  </li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us at chenjianyu944@gmail.com. We
                  will respond within one month of your request.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Data Security
                </h3>
                <p>
                  We implement appropriate technical and organizational measures to protect
                  your personal data. However, no method of transmission over the internet
                  is 100% secure. We cannot guarantee absolute security but strive to use
                  commercially acceptable means to protect your data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Children&apos;s Privacy
                </h3>
                <p>
                  Our services are not directed to children under 13. We do not knowingly
                  collect personal information from children under 13. If we discover that
                  such information has been collected, we will delete it immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  International Data Transfers
                </h3>
                <p>
                  Your data may be transferred to and processed in countries other than
                  your own. When we transfer your data, we ensure appropriate safeguards are
                  in place to protect your privacy in accordance with applicable data
                  protection laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Changes to This Privacy Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you
                  of any material changes by posting the new policy on this page and
                  updating the &quot;Last Updated&quot; date. Your continued use of LensFlowPro after
                  such changes constitutes acceptance of the new policy.
                </p>
              </div>
            </div>
          </section>\n\n          <section className=\"bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8 shadow-sm\">\n            <div className=\"flex items-center gap-3 mb-6\">\n              <Shield className=\"h-8 w-8 text-blue-600\" />\n              <h2 className=\"text-3xl font-bold text-slate-900 dark:text-white\">Payment Processors</h2>\n            </div>\n            <p className=\"text-slate-700 dark:text-slate-300 mb-4\">\n              LensFlowPro payments may be processed by Creem (primary) or Paddle (alternative). We do not store full payment card information on our servers. Processing policies are provided by the payment processors.\n            </p>\n            <p className=\"text-slate-700 dark:text-slate-300 mb-4\">\n              Creem policy: creem.io/privacy. Final processor will be chosen and disclosed in future updates.\n            </p>\n          </section>\n\n          <section\n            id=\"cookies\"
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Cookie Policy
              </h2>
            </div>

            <div className="space-y-6 text-slate-700 dark:text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  1. Introduction
                </h3>
                <p>
                  This Cookie Policy explains how LensFlowPro uses cookies and similar
                  technologies when you visit our website. We are committed to protecting
                  your privacy and giving you control over your data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  2. What Are Cookies?
                </h3>
                <p className="mb-2">
                  Cookies are small text files that websites place on your device to store
                  information. They help websites remember your preferences, understand how
                  you use the site, and provide a better experience. Cookies can be:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Session cookies:</strong> Deleted when you close your browser
                  </li>
                  <li>
                    <strong>Persistent cookies:</strong> Remain on your device until they
                    expire or you delete them
                  </li>
                  <li>
                    <strong>First-party cookies:</strong> Set by the website you&apos;re visiting
                  </li>
                  <li>
                    <strong>Third-party cookies:</strong> Set by other services the website
                    uses
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  3. How We Use Cookies
                </h3>
                <p className="mb-2">
                  We use cookies and similar technologies for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Essential Operations:</strong> Ensuring the website functions
                    correctly
                  </li>
                  <li>
                    <strong>Analytics:</strong> Understanding how visitors use our website
                    in a privacy-friendly way
                  </li>
                  <li>
                    <strong>Functionality:</strong> Remembering your preferences and
                    settings
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  4. Cookies We Use
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      4.1 Essential Cookies
                    </h4>
                    <p className="text-sm mb-2">
                      These cookies are necessary for our website to function properly. They
                      cannot be disabled without significantly impacting your use of the site.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      4.2 Analytics Cookies
                    </h4>
                    <p className="text-sm mb-2">
                      We use privacy-focused analytics tools that:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Do not collect personal data or personally identifiable information (PII)</li>
                      <li>May use cookies only for excluding your own visits if you choose</li>
                      <li>Are fully compliant with GDPR, CCPA, and PECR</li>
                      <li>Collect only aggregated data including page views, session duration, and referrer information</li>
                      <li>All data is aggregated and anonymized</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                      4.3 Third-Party Service Cookies
                    </h4>
                    <p className="text-sm">
                      When you interact with certain features, these services may set their
                      own cookies:
                    </p>
                    <div className="mt-3 overflow-x-auto">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                          <tr>
                            <th className="px-4 py-2 font-semibold text-slate-900 dark:text-white">
                              Provider
                            </th>
                            <th className="px-4 py-2 font-semibold text-slate-900 dark:text-white">
                              Purpose
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                          <tr>
                            <td className="px-4 py-2 text-slate-700 dark:text-slate-300">
                              Next.js (Framework)
                            </td>
                            <td className="px-4 py-2 text-slate-700 dark:text-slate-300">
                              Website functionality and performance
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  5. Managing Cookies
                </h3>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 mt-4">
                  5.1 Browser Controls
                </h4>
                <p className="text-sm mb-2">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>
                    <strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies
                    and other site data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website
                    Data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt;
                    Cookies and Site Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings &gt; Cookies and site permissions
                  </li>
                </ul>
                <p className="mt-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <strong>Note:</strong> Blocking all cookies may prevent you from
                  accessing certain features of our website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  6. Data Protection
                </h3>
                <p className="mb-2">
                  We follow privacy-by-design principles:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>We minimize cookie usage</li>
                  <li>We don&apos;t use tracking or advertising cookies</li>
                  <li>We don&apos;t sell or share cookie data with third parties</li>
                  <li>We use privacy-focused alternatives where possible</li>
                  <li>All cookies are transmitted securely over HTTPS</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  7. Updates to This Policy
                </h3>
                <p>
                  We may update this Cookie Policy to reflect changes in our practices or for
                  legal reasons. When we make changes, we&apos;ll update the &quot;Last updated&quot; date.
                  For significant changes, we may notify you via email or through the
                  application. Your continued use after changes constitutes acceptance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  8. Contact Us
                </h3>
                <p className="mb-2">
                  If you have questions about our use of cookies or this policy, please contact us:
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <p className="font-medium mb-1">Email: chenjianyu944@gmail.com</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Data Protection Contact: chenjianyu944@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  9. Legal Basis
                </h3>
                <p className="mb-2">
                  We use cookies based on:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Legitimate interests</strong> (GDPR Art. 6(1)(f)): For essential
                    cookies that enable our service to function
                  </li>
                  <li>
                    <strong>Consent</strong> (where required): For any non-essential cookies,
                    though we minimize these
                  </li>
                  <li>
                    <strong>Contract performance</strong> (GDPR Art. 6(1)(b)): For cookies
                    necessary to provide services you&apos;ve requested
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <span>Return to Home</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold">LensFlowPro</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Professional Mac screen recording for creators, educators, and developers.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/legal/privacy-and-cookie-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              &copy; 2026 LensFlowPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
