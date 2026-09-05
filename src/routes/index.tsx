import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import portAsset from "@/assets/port.png.asset.json";
import tomAsset from "@/assets/tom.png.asset.json";
import marcusAsset from "@/assets/marcus.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Exsea Japan — Dishonourable Car Exporters | Buyer Record",
      },
      {
        name: "description",
        content:
          "A documented public record of an unresolved 2018 Nissan Leaf export dispute with Exsea Japan: full payment made September 2025, vehicle never delivered, AUD $20,025 refund requested.",
      },
      {
        property: "og:title",
        content: "Exsea Japan — Dishonourable Car Exporters",
      },
      {
        property: "og:description",
        content:
          "Paid in full September 2025. Vehicle never delivered, registered in a stranger's name. The full written account and the AUD $20,025 refund requested.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "The Facts", href: "#facts" },
  { label: "The People", href: "#people" },
  { label: "The Summary", href: "#summary" },
  { label: "The Refund", href: "#refund" },
  { label: "Contact", href: "#contact" },
];

const summary = [
  "The vehicle did not arrive in Sydney, Australia until December 2025, several months beyond the agreed timeframe, despite full payment being made in good faith to Exsea Japan.",
  "We received an invoice from your agents for $2,100 that was slightly higher than the $1,000 to $1,500 you suggested would be for the costs associated with the transport and clearance fees from the port, as well as the costs associated with the registration and VIN licence over the pits to register and licence the vehicle. Although we were disappointed by the excessive amount charged, we paid it regardless, in full and two days after we received it.",
  "In January 2026, we received an unsolicited invoice from Savy Logistics for over $5,000. These charges relate to services that were never authorised or approved by us. We have already paid for the correctly billed items and formally placed the remainder of the invoice in dispute.",
  "Since that time, Savy Logistics has failed to respond to repeated communication attempts and has withheld the location and condition of our vehicle.",
  "Disturbingly, we have obtained confirmation that the vehicle has been registered in another person's name without our consent.",
];

const breaches = [
  "The vehicle has not been delivered to us, and the lawful ownership remains compromised.",
  "There is no assurance of the vehicle's current location, condition, or whether it even remains intact. The battery condition will have deteriorated from the Leaf Spy report because we have no understanding of the current condition.",
  "We were explicitly informed in writing that our original payment to Exsea represented the full and final cost of the vehicle, including delivery and on-road readiness.",
  "Given the unethical and potentially criminal conduct by Savy Logistics and the lack of remedial action by Exsea, through your agent, we have lost confidence that making any further payment would result in us actually receiving the vehicle.",
];

const ledger = [
  { label: "Purchase Price", value: "$14,600" },
  { label: "Savy Invoice, already paid", value: "$2,150" },
  { label: "Freight Paid from Sydney to Western Australia", value: "$1,950" },
  { label: "Legal Costs and legal advice to date", value: "$3,275" },
];

function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <h2 className="text-xl font-bold tracking-[0.06em] uppercase sm:text-2xl">
          {children}
        </h2>
      </div>
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-foreground bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center bg-foreground font-mono text-[11px] tracking-[0.12em] text-background">
              EX
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-[0.14em] uppercase">
                Exsea Japan
              </span>
              <span className="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                Buyer Complaint Record
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-60"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-foreground px-5 py-2.5 text-[13px] font-semibold tracking-[0.1em] text-background uppercase transition-opacity hover:opacity-80"
            >
              Share Your Story
            </a>
          </nav>
        </div>
      </header>

      <div id="top" />

      {/* Page banner */}
      <Banner>Dishonorable Car Exporters</Banner>

      {/* Full-bleed hero image */}
      <div className="relative">
        <img
          src={portAsset.url}
          alt="Aerial view of a vehicle carrier ship berthed alongside thousands of cars staged at an export port"
          width={1920}
          height={1440}
          className="h-[36vw] max-h-[560px] min-h-[240px] w-full object-cover grayscale"
        />
      </div>

      {/* Intro */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
            A public record · Updated 2026
          </p>
          <h1 className="mt-5 max-w-[20ch] font-serif text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.02em]">
            Tom took our money and then refused to resolve the issues.
          </h1>
          <p className="mt-6 max-w-[62ch] font-serif text-lg leading-relaxed text-ink-soft">
            Exsea Japan took full payment for a 2018 Nissan Leaf in September
            2025. The vehicle has never reached us, it has been registered in
            another person's name without our consent, and the company's answer
            has been to ask for more money.
          </p>
          <div className="mt-9 inline-flex flex-wrap gap-px bg-rule">
            {[
              ["Paid in full", "Sept 2025"],
              ["Vehicle received", "Never"],
              ["Refund total", "AUD $20,025"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background px-6 py-4">
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {k}
                </p>
                <p className="mt-1 font-serif text-2xl font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <div id="people" />
      <Banner>Sales Manager Tom Tanaka</Banner>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-14 md:grid-cols-[minmax(0,420px)_1fr]">
          <img
            src={tomAsset.url}
            alt="Tom Tanaka, Exsea Japan sales manager"
            loading="lazy"
            width={768}
            height={768}
            className="w-full border border-rule bg-card object-cover"
          />
          <div>
            <h3 className="font-serif text-3xl font-semibold">Tom Tanaka</h3>
            <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Dishonourable Exsea Sales Manager
            </p>
            <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.8] text-ink-soft">
              <p>
                At Exsea Japan, Tom will arrange everything, provide fantastic
                service, and follow up on every question.
              </p>
              <p className="font-medium text-foreground">
                Up until the point they get your money, then it stops.
              </p>
              <p>See the full story below.</p>
              <p>
                Also understand that this website has been created as a last
                resort. We have exhausted every effort and given Tom every
                opportunity.
              </p>
              <p className="border-l-2 border-foreground pl-5 text-foreground italic">
                At Exsea Japan, once they have your money, that's it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Banner>Marcus</Banner>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-14 md:grid-cols-[1fr_minmax(0,420px)]">
          <div className="md:order-2">
            <img
              src={marcusAsset.url}
              alt="Marcus, who said he would follow up on the Exsea Japan complaint"
              loading="lazy"
              width={768}
              height={708}
              className="w-full border border-rule bg-card object-cover"
            />
          </div>
          <div className="md:order-1">
            <h3 className="font-serif text-3xl font-semibold">Marcus</h3>
            <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              Complicit Liar · His Word Means Nothing
            </p>
            <div className="mt-6 space-y-4 font-serif text-[17px] leading-[1.8] text-ink-soft">
              <p>
                Marcus told us that, based on what we discussed with him, "that
                doesn't sound right" and that he would follow up with Tom and
                have the issues resolved.
              </p>
              <p className="font-medium text-foreground">
                Eleven months later, we're still waiting.......................
              </p>
              <p>and waiting...............</p>
              <p>and waiting.........................................</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Facts */}
      <div id="facts" />
      <Banner>The Facts</Banner>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
            Urgent: Breach of Contract and Vehicle Misappropriation
          </p>
          <h3 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Nissan Leaf 2018 Purchase
          </h3>

          <div className="mt-8 space-y-5 font-serif text-[17px] leading-[1.85] text-ink-soft">
            <p className="text-foreground">Dear Mr Tom Tanaka,</p>
            <p>
              I am writing regarding the ongoing and unresolved matter
              concerning our purchase of the 2018 Nissan Leaf from Exsea, for
              which full payment was made September 2025.
            </p>
            <p>
              I have NOT received a reply to my urgent email sent on 18 March
              2026, nor have you replied to the multiple WhatsApp messages you
              have been sent — you have read them, but not bothered to reply.
            </p>
            <p>
              Our contract and all correspondence have been directly with Exsea,
              and we have always relied on your written assurances that the
              quoted price was fixed, final, and inclusive of all costs
              associated with delivering the vehicle to Perth, Western
              Australia.
            </p>
            <p>You advised us that we were to use YOUR agent in Sydney, Australia.</p>
            <p>
              We didn't know who this business was until you informed us. We had
              never used them before or had any knowledge about them; you
              assured us that they handle all your logistics and there would be
              no problems.
            </p>
            <p>
              Unfortunately, the situation has escalated considerably due to the
              conduct of your appointed service provider, Savy Logistics (NSW),
              managed by Mr Mohammad Neaj, and his brother.
            </p>
            <p>
              Savy Logistics has been evicted from the rented offices by the
              landlord for non-payment of rent, and has changed its registered
              name to some sort of language / visa / immigration scam.
            </p>
            <p className="border-l-2 border-foreground pl-5 text-foreground italic">
              Exsea's repeated failures to take accountability for your agent's
              actions is unacceptable.
            </p>
          </div>
        </div>
      </section>

      {/* Summary — numbered like the Exsea process blocks */}
      <div id="summary" />
      <Banner>To Summarise Our Position</Banner>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
            Everything we state below is in writing between the parties
          </p>
          <ol className="mt-9 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {summary.map((item, i) => (
              <li key={i} className="flex flex-col bg-background p-6">
                <span className="font-serif text-5xl leading-none font-semibold text-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-serif leading-[1.75] text-ink-soft">
                  {item}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border border-foreground p-8">
            <p className="max-w-[38ch] font-serif text-[clamp(1.5rem,3.2vw,2.2rem)] leading-snug font-semibold">
              Did Exsea Japan authorise this? Do you know your agents steal
              customers' cars and register them in their own names?
            </p>
            <p className="mt-6 max-w-[70ch] font-serif leading-[1.8] text-ink-soft">
              This constitutes theft and conversion under Australian law, and we
              have reported this matter to both NSW Police and WA Police.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 font-serif text-[17px] leading-[1.85] text-ink-soft">
              <p>
                On 23 March 2026, you eventually replied to our over two dozen
                messages and emails and asked that we pay the disputed invoice
                from Savy Logistics to proceed.
              </p>
              <p className="text-foreground">
                This request is extremely concerning and, frankly, unacceptable.
              </p>
              <p>
                It represents a further breach of contract and trust,
                particularly given that:
              </p>
            </div>
            <ol className="space-y-5">
              {breaches.map((b, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-xs leading-7">
                    {i + 1}.
                  </span>
                  <span className="font-serif leading-[1.8] text-ink-soft">
                    {b}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 space-y-5 font-serif text-[17px] leading-[1.85] text-ink-soft">
            <p>
              The expectation that we should now pay additional, unauthorised
              charges under these circumstances is unreasonable and exposes us
              to further financial loss.
            </p>
            <p>
              This situation constitutes a clear breach of contract by Exsea and
              a serious violation of trust and consumer protections. The
              financial, emotional, and logistical toll on us over the past six
              months has been immense.
            </p>
          </div>
        </div>
      </section>

      {/* Refund */}
      <div id="refund" />
      <Banner>Accordingly, We Formally Request the Following Without Delay</Banner>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2">
          <div className="space-y-5 font-serif text-[17px] leading-[1.85] text-ink-soft">
            <p className="text-foreground">
              A full refund of all monies paid to Exsea Japan for the purchase
              and export of the vehicle, including costs caused by your actions,
              lack of accountability and your agent's actions.
            </p>
            <p>
              This website will remain live and we will invest in SEO to ensure
              that more people are aware that this is how you treat customers.
            </p>
            <p>
              Based on our experience with Exsea, no one should trust you with
              buying a vehicle on their behalf.
            </p>
            <p>
              I do suspect that "car dealers" are given better treatment because
              you want their business to continue and therefore attend to any
              issues that arise. Clearly this is NOT the case with a private
              importer of a single car, which is disappointing because it was a
              car dealer that told us to deal with you in the first place.
            </p>
            <p>
              We have since discovered that they are no longer dealing with you
              and are now buying from another company in Kyoto, Japan.
            </p>
          </div>

          <div>
            <div className="border border-foreground">
              <div className="flex justify-between border-b border-rule px-5 py-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                <span>Line item</span>
                <span>AUD</span>
              </div>
              <dl>
                {ledger.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-dashed border-rule px-5 py-4"
                  >
                    <dt className="font-serif text-[15px] text-ink-soft">
                      {row.label}
                    </dt>
                    <dd className="font-mono text-[15px]">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex items-center justify-between bg-foreground px-5 py-5 text-background">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase">
                  Refund Total
                </span>
                <span className="font-serif text-3xl font-semibold">
                  $20,025.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div id="contact" />
      <Banner>Exsea Japan — Dishonourable Car Exporter</Banner>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2">
          <div>
            <h3 className="max-w-[18ch] font-serif text-3xl leading-tight font-semibold sm:text-4xl">
              Get ripped off by us — start today.
            </h3>
            <p className="mt-5 max-w-[46ch] font-serif leading-relaxed text-ink-soft">
              If you hold correspondence, invoices, or a similar account of
              buying a vehicle through Exsea Japan, add it to the record here.
              This page stays live until the matter is resolved.
            </p>
            <div className="mt-8 border border-rule p-5">
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Company address on record
              </p>
              <address className="mt-2 font-mono text-[13px] leading-relaxed not-italic">
                Exsea Japan
                <br />
                8F Fujihara Bld., 1-18-15 Kyomachibori
                <br />
                Nishi-Ku, Osaka 550-0003, Japan
              </address>
            </div>
          </div>

          <form
            className="border border-foreground p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="space-y-5">
              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Name
                </span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-1.5 w-full border border-rule bg-card px-3 py-2.5 text-sm outline-none focus:border-foreground"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Email *
                </span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1.5 w-full border border-rule bg-card px-3 py-2.5 text-sm outline-none focus:border-foreground"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Your account
                </span>
                <textarea
                  rows={5}
                  required
                  placeholder="Dates, amounts, and what happened."
                  className="mt-1.5 w-full resize-none border border-rule bg-card px-3 py-2.5 text-sm outline-none focus:border-foreground"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-foreground py-3 font-mono text-[11px] tracking-[0.24em] text-background uppercase transition-opacity hover:opacity-85"
              >
                {sent ? "Added to the record" : "Send"}
              </button>
              <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                Submissions are reviewed before anything is published. Nothing
                identifying is shared without consent.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 font-mono text-[10px] tracking-[0.2em] uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>Exsea Japan</span>
          <span className="opacity-70">
            Copyright © 2026 Exsea Japan — All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
