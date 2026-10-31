import type { Metadata } from "next";
import Link from "next/link";
import { legal, site } from "@/lib/data";

const WA_TERMS = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your terms of service.")}`;

export const metadata: Metadata = {
  title: "Terms of Service | SetlesStudio",
  description:
    "Terms of Service for SetlesStudio. Understand the conditions governing your use of our AI fashion content services, payment terms, deliverables, and intellectual property.",
  alternates: {
    canonical: "https://www.setlesstudio.com/terms",
  },
};

const EFFECTIVE_DATE = legal.effectiveDate;

export default function TermsPage() {
  return (
    <main className="container-site py-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div className="prose prose-slate mt-12 max-w-none">
          <p className="lead text-lg leading-relaxed text-ink-soft">
            Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully
            before using our website at{" "}
            <Link href="/" className="text-brand hover:underline">
              setlesstudio.com
            </Link>{" "}
            or commissioning any service from SetlesStudio
            (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By
            contacting us, placing an order, or making a payment, you agree to
            be bound by these Terms.
          </p>

          <hr className="my-10 border-ink/10" />

          <Section title="1. Services">
            <p>
              SetlesStudio is an AI fashion content studio that produces
              on model product photography, lifestyle imagery, luxury campaign
              visuals, footwear photography, bags &amp; accessories photography,
              and short form video ads. We also offer educational digital
              products including prompt packs and workflow guides.
            </p>
            <p>
              All visual services involve AI assisted generation using client 
              supplied product reference images and brand guidelines. Final
              deliverables are high resolution digital image or video files
              delivered electronically.
            </p>
          </Section>

          <Section title="2. Placing an Order">
            <p>
              An order is confirmed when both parties have agreed on the service
              scope, pricing, and timeline in writing (via email or our contact
              form), and payment has been received or a payment link has been
              issued.
            </p>
            <p>
              We reserve the right to decline any project at our discretion,
              including projects that conflict with our content standards or
              applicable law.
            </p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p>
              To enable us to deliver your project, you agree to:
            </p>
            <ul>
              <li>
                Provide clear, high quality reference images of your products
                (flat lays, packshots, or existing photography) within the
                agreed timeline.
              </li>
              <li>
                Supply brand guidelines, preferred colour palettes, mood boards,
                or style references as needed.
              </li>
              <li>
                Respond to feedback requests and revision rounds within a
                reasonable time. Delays caused by late client feedback may
                affect your delivery date.
              </li>
              <li>
                Ensure that you have the right to use any materials you supply
                to us. You warrant that these materials do not infringe any
                third party copyright, trademark, or other intellectual property
                rights.
              </li>
            </ul>
          </Section>

          <Section title="4. Payment Terms">
            <p>
              All prices are quoted and billed in{" "}
              <strong>US Dollars (USD)</strong>. Payments are processed through{" "}
              <strong>{legal.paymentProvider}</strong>, our trusted third party
              payment processor.
            </p>
            <p>
              Payment requirements by tier:
            </p>
            <ul>
              <li>
                <strong>Starter &amp; Growth plans:</strong> Full payment is
                required before project work begins.
              </li>
              <li>
                <strong>Premium &amp; Custom projects:</strong> A{" "}
                <strong>50% deposit</strong> is required to initiate the
                project; the remaining balance is due upon delivery of final
                files, before download links are released.
              </li>
            </ul>
            <p>
              All prices exclude any local taxes, bank fees, or currency
              conversion charges that your payment provider may apply. These
              are your responsibility.
            </p>
          </Section>

          <Section title="5. Turnaround Time">
            <p>
              Estimated turnaround times depend on the selected service tier and
              current project volume. Standard delivery timelines are:
            </p>
            <ul>
              <li>
                <strong>Starter:</strong> 3–5 business days after receipt of
                all reference materials.
              </li>
              <li>
                <strong>Growth:</strong> 5–7 business days after receipt of all
                reference materials.
              </li>
              <li>
                <strong>Premium / Custom:</strong> Timeline agreed in writing
                before project start.
              </li>
            </ul>
            <p>
              Timelines are estimates, not guarantees. We will notify you
              promptly if a delay occurs. Rush delivery may be available for an
              additional fee; contact us to enquire.
            </p>
          </Section>

          <Section title="6. Revisions">
            <p>
              Each service tier includes a specified number of revision rounds.
              Revisions must be requested within <strong>7 days</strong> of
              delivery and must relate to the original agreed brief. Revision
              requests that represent a significant change in direction, style,
              or scope may be treated as a new project and quoted separately.
            </p>
            <p>
              Additional revision rounds beyond those included in your plan are
              available at an agreed hourly or per image rate.
            </p>
          </Section>

          <Section title="7. Intellectual Property">
            <Subsection title="Your ownership">
              <p>
                Upon receipt of full payment, you receive a{" "}
                <strong>worldwide, royalty free, perpetual licence</strong> to
                use all final deliverables for any commercial or non commercial
                purpose, including advertising, ecommerce listings, social
                media, and print.
              </p>
            </Subsection>
            <Subsection title="Portfolio use">
              <p>
                We retain the right to display delivered work in our portfolio,
                website, and social media to showcase our capabilities, unless
                you request confidentiality in writing before the project
                begins. Confidentiality requests are accepted at no additional
                charge.
              </p>
            </Subsection>
            <Subsection title="AI generated content">
              <p>
                Our deliverables are created using AI assisted tools. While we
                work diligently to produce original outputs, we cannot guarantee
                that AI generated content is entirely unique. You are
                responsible for conducting any trademark or copyright clearance
                required in your jurisdiction before commercial use.
              </p>
            </Subsection>
            <Subsection title="Tools and workflows">
              <p>
                Our internal prompts, workflows, tools, and processes remain the
                exclusive intellectual property of SetlesStudio. Clients
                purchasing Learn products receive a personal, non transferable
                licence to use those materials for their own content creation;
                reselling or redistributing Learn products is not permitted.
              </p>
            </Subsection>
          </Section>

          <Section id="refund" title="8. Refunds and Cancellations">
            <p>
              Due to the custom digital nature of our work, we operate the
              following refund policy:
            </p>
            <ul>
              <li>
                <strong>Before work begins:</strong> Full refund if you cancel
                before we have started production on your project.
              </li>
              <li>
                <strong>Work in progress:</strong> If you cancel after
                production has started but before delivery, you will be charged
                for the portion of work completed. The balance will be refunded.
              </li>
              <li>
                <strong>After delivery:</strong> No refund once final files have
                been delivered, as digital goods cannot be returned. If you are
                dissatisfied, we will work with you to resolve issues within the
                agreed revision scope.
              </li>
              <li>
                <strong>Learn / digital products:</strong> No refunds on
                downloadable educational products after purchase. We provide
                detailed product descriptions and previews so you can make an
                informed decision before buying.
              </li>
            </ul>
            <p>
              To request a cancellation or raise a dispute, contact us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-brand hover:underline"
              >
                {site.email}
              </a>{" "}
              within 48 hours of the triggering event.
            </p>
          </Section>

          <Section title="9. Confidentiality">
            <p>
              Both parties agree to keep confidential any non public business
              information, pricing details, creative briefs, and client
              materials shared during the course of a project. This obligation
              survives termination of the engagement for a period of{" "}
              <strong>2 years</strong>.
            </p>
          </Section>

          <Section title="10. Acceptable Use">
            <p>
              You may not use SetlesStudio services to produce content that:
            </p>
            <ul>
              <li>Violates any applicable law or regulation.</li>
              <li>Infringes third party intellectual property rights.</li>
              <li>
                Is defamatory, harassing, discriminatory, or otherwise harmful.
              </li>
              <li>
                Depicts illegal activities or promotes dangerous products or
                services.
              </li>
            </ul>
            <p>
              We reserve the right to refuse or terminate any project if we
              believe the intended use violates these standards, without refund
              obligation where work has not commenced.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, SetlesStudio
              and its team members shall not be liable for any indirect,
              incidental, consequential, or punitive damages arising from your
              use of our services, including but not limited to lost profits,
              lost revenue, or business interruption.
            </p>
            <p>
              Our total liability for any claim arising from a project shall not
              exceed the amount you paid for that specific project.
            </p>
            <p>
              We make no warranty that our AI generated content will meet all
              marketplace platform requirements (e.g., Amazon, Shopify, etc.).
              You are responsible for verifying compliance with any platform
              policies before publishing.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the <strong>{legal.governingLaw}</strong>. Any disputes
              arising under these Terms that cannot be resolved amicably shall
              be subject to the exclusive jurisdiction of the courts of{" "}
              {legal.governingLaw}.
            </p>
            <p>
              If you are a consumer located in the EU or UK, you may also have
              the right to access alternative dispute resolution mechanisms
              available in your jurisdiction.
            </p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>
              We may update these Terms from time to time. When we do, we will
              update the effective date at the top of this page. Continued use
              of our website or services after any changes constitutes
              acceptance of the updated Terms. We recommend reviewing this page
              periodically.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>
              If you have any questions about these Terms or a specific project
              engagement, please reach out:
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
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your terms of service.")}`}
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
          <Link href="/privacy" className="hover:text-brand">
            Privacy Policy
          </Link>
          <a href={WA_TERMS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`mt-10${id ? " scroll-mt-28" : ""}`}>
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
