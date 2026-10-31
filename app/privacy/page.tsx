import type { Metadata } from "next";
import Link from "next/link";
import { legal, site } from "@/lib/data";

const WA_PRIVACY = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your privacy policy.")}`;

export const metadata: Metadata = {
  title: "Privacy Policy | SetlesStudio",
  description:
    "Privacy Policy for SetlesStudio. Learn how we collect, use, and protect your personal data when you use our AI fashion content services.",
  alternates: {
    canonical: "https://www.setlesstudio.com/privacy",
  },
};

const EFFECTIVE_DATE = legal.effectiveDate;

export default function PrivacyPage() {
  return (
    <main className="container-site py-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div className="prose prose-slate mt-12 max-w-none">
          <p className="lead text-lg leading-relaxed text-ink-soft">
            SetlesStudio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains what personal information we collect, how we
            use it, and your rights regarding that information when you use our
            website at{" "}
            <Link href="/" className="text-brand hover:underline">
              setlesstudio.com
            </Link>{" "}
            or engage with our AI fashion content services.
          </p>

          <hr className="my-10 border-ink/10" />

          <Section title="1. Information We Collect">
            <Subsection title="Information you provide directly">
              <p>
                When you contact us, request a free sample, or place an order,
                we collect:
              </p>
              <ul>
                <li>Full name and business or brand name</li>
                <li>Email address and phone number</li>
                <li>
                  Project details, product images, brand guidelines, and any
                  other files you share with us
                </li>
                <li>
                  Messages and communications sent through our contact form or
                  via email
                </li>
              </ul>
            </Subsection>
            <Subsection title="Payment information">
              <p>
                We process payments through{" "}
                <strong>{legal.paymentProvider}</strong>, a trusted third party
                payment processor. We do not store, process, or have access to
                your full payment card details. All payment transactions are
                handled directly by {legal.paymentProvider} under their own
                privacy and security policies. We receive only a transaction
                confirmation and the amount paid.
              </p>
            </Subsection>
            <Subsection title="Information collected automatically">
              <p>
                We do not run client side analytics, tracking pixels, or any
                tracking software on our website. Our hosting provider, Vercel,
                may log basic server side access data such as IP addresses
                and request timestamps as part of normal infrastructure
                operation. This data is outside our direct control and is
                governed by{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  Vercel&apos;s privacy policy
                </a>
                .
              </p>
            </Subsection>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>
                Respond to your enquiries and deliver the services you have
                requested
              </li>
              <li>
                Process payments and manage billing through our payment
                processors
              </li>
              <li>
                Communicate project updates, revision requests, and final
                deliverables
              </li>
              <li>
                Send transactional emails related to your order or enquiry
              </li>
              <li>
                Improve our website, services, and client experience based on
                feedback and usage patterns
              </li>
              <li>
                Comply with legal obligations and resolve any disputes
              </li>
            </ul>
            <p>
              We do not use your information for unsolicited marketing without
              your consent. We will never sell your personal data to any third
              party.
            </p>
          </Section>

          <Section title="3. Sharing of Information">
            <p>
              We do not sell, rent, or trade your personal information. We may
              share your data only in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Payment processor:</strong> {legal.paymentProvider}{" "}
                receives the information necessary to process your payment.
              </li>
              <li>
                <strong>Service providers:</strong> Trusted tools we use to
                operate our business (e.g., email platforms, file storage,
                project management) may process your data on our behalf under
                strict confidentiality obligations.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information
                if required by law, court order, or to protect the rights and
                safety of SetlesStudio or others.
              </li>
            </ul>
          </Section>

          <Section title="4. Data Retention">
            <p>
              We retain your personal information for as long as necessary to
              fulfil the purpose for which it was collected, including:
            </p>
            <ul>
              <li>
                Project files and communications are kept for a minimum of{" "}
                <strong>2 years</strong> after project completion to support
                revision requests or disputes.
              </li>
              <li>
                Financial records are retained for <strong>5 years</strong> to
                comply with applicable accounting and tax obligations.
              </li>
              <li>
                Enquiry data from visitors who did not proceed to a project is
                deleted after <strong>12 months</strong>.
              </li>
            </ul>
            <p>
              You may request earlier deletion of your data by contacting us
              (see Section 8).
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Our website does not use tracking cookies, analytics cookies, or
              any client side tracking technology. We do not set cookies for
              marketing, profiling, or behavioural advertising.
            </p>
            <p>
              If you interact with a payment gateway (such as{" "}
              {legal.paymentProvider}) during checkout, that service may set
              its own cookies under its own privacy policy — over which we have
              no control.
            </p>
          </Section>

          <Section title="6. Security">
            <p>
              We take reasonable technical and organisational measures to
              protect your personal information from unauthorised access,
              disclosure, or loss. These include encrypted communication
              (HTTPS), restricted access to data, and use of reputable
              third party platforms with their own security standards.
            </p>
            <p>
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your data, we cannot guarantee
              absolute security.
            </p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>
              SetlesStudio operates from Pakistan and serves clients globally.
              By submitting your information, you acknowledge that your data may
              be transferred to and processed in Pakistan or other countries
              where our service providers are located.
            </p>
            <p>
              If you are located in the European Economic Area (EEA) or the
              United Kingdom, please note that these countries may not have data
              protection laws equivalent to those in your jurisdiction. We take
              steps to ensure your data is handled responsibly regardless of
              where it is processed.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Request that we correct inaccurate
                or incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data, subject to legal retention obligations.
              </li>
              <li>
                <strong>Objection:</strong> Object to certain uses of your data.
              </li>
              <li>
                <strong>Portability:</strong> Request your data in a structured,
                commonly used format.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-brand hover:underline"
              >
                {site.email}
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our services are intended for businesses and professionals. We do
              not knowingly collect personal information from anyone under the
              age of 18. If you believe we have collected such information,
              please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will update the effective date at the top of this page. We
              encourage you to review this page periodically. Continued use of
              our website or services after any changes constitutes acceptance
              of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact us:
            </p>
            <address className="not-italic">
              <p>
                <strong>SetlesStudio</strong>
              </p>
              <p>{site.address}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-brand hover:underline"
                >
                  {site.email}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your privacy policy.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  {site.phone}
                </a>
              </p>
            </address>
          </Section>
        </div>

        <div className="mt-16 flex gap-6 border-t border-ink/10 pt-8 text-sm text-ink-soft">
          <Link href="/terms" className="hover:text-brand">
            Terms of Service
          </Link>
          <a href={WA_PRIVACY} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-ink">{title}</h3>
      <div className="mt-2 space-y-3 text-ink-soft">{children}</div>
    </div>
  );
}
