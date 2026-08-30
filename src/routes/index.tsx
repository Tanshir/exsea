import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import party01 from "@/assets/party-01.jpg";
import party02 from "@/assets/party-02.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Exsea Japan Complaint — Unresolved Car Export Dispute Record",
      },
      {
        name: "description",
        content:
          "A documented public record of an unresolved 2018 Nissan Leaf export dispute with Exsea Japan: dates, invoices, and an AUD $20,025 refund demand.",
      },
      {
        property: "og:title",
        content: "Exsea Japan Complaint — Unresolved Car Export Dispute",
      },
      {
        property: "og:description",
        content:
          "Paid in full September 2025. Vehicle never delivered. A dated public record of the dispute and the AUD $20,025 refund demanded.",
      },
    ],
  }),
  component: Index,
});

const timeline = [
  {
    date: "Sept 2025",
    title: "Paid in full for a 2018 Nissan Leaf",
    body: "AUD $14,600 paid to Exsea Japan. We were told in writing that the quoted price was fixed, final, and inclusive of all costs to deliver the vehicle to Perth, Western Australia.",
  },
  {
    date: "Dec 2025",
    title: "Vehicle finally lands in Sydney",
    body: "Several months beyond the agreed timeframe. We were instructed to use Exsea's own appointed agent, Savy Logistics (NSW), a business we had never dealt with before.",
  },
  {
    date: "Dec 2025",
    title: "A $2,100 invoice instead of $1,000–$1,500",
    body: "Well above the range quoted for transport, port clearance, VIN and registration. Disappointed but co-operative, we paid it in full within two days.",
  },
  {
    date: "Jan 2026",
    title: "An unsolicited invoice for over $5,000",
    body: "Charges for services never authorised or approved by us. We paid the correctly billed items and formally placed the remainder in dispute. Savy Logistics then stopped responding and withheld the location and condition of the vehicle.",
  },
  {
    date: "Jan 2026",
    title: "The car is registered in someone else's name",
    body: "We obtained confirmation that our vehicle had been registered to another person without our consent. The matter has been reported to both NSW Police and WA Police.",
  },
  {
    date: "18 Mar 2026",
    title: "Urgent email sent. No reply.",
    body: "Multiple WhatsApp messages were read and left unanswered.",
  },
  {
    date: "23 Mar 2026",
    title: "\u201cPay the disputed invoice to proceed\u201d",
    body: "After more than two dozen messages, the reply was a demand that we pay the disputed charges \u2014 for a vehicle we have never received and no longer lawfully own.",
  },
];

const ledger = [
  { label: "Purchase price \u2014 2018 Nissan Leaf", value: "14,600" },
  { label: "Savy Logistics invoice, already paid", value: "2,150" },
  { label: "Freight, Sydney to Western Australia", value: "1,950" },
  { label: "Legal costs and advice to date", value: "3,275" },
];

const demands = [
  "A full refund of all monies paid to Exsea Japan for the purchase and export of the vehicle \u2014 AUD $20,025.",
  "A written account of whether Exsea authorised the registration of our vehicle into a third party's name.",
  "Confirmation of the vehicle's current location, condition and battery state, including an updated Leaf Spy report.",
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center bg-foreground font-mono text-[11px] tracking-[0.12em] text-background">
              EX
            </span>
            <div className="leading-tight">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Public buyer record
              </p>
              <p className="font-mono text-[11px] tracking-[0.1em]">
                REF · EXSEA-JP · 2026-0041
              </p>
            </div>
          </div>
          <span className="hidden items-center gap-2 border border-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] sm:inline-flex">
            <span className="size-1.5 bg-foreground" />
            Unresolved
          </span>
        </div>
      </header>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14">
          <p className="rise font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Exhibit A · The accusation
          </p>
          <h1 className="rise mt-6 max-w-[17ch] font-serif text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.94] font-semibold tracking-[-0.02em] [animation-delay:80ms]">
            Dishonourable car exporters.
          </h1>
          <p className="rise mt-7 max-w-[58ch] font-serif text-lg leading-relaxed text-ink-soft [animation-delay:160ms]">
            Exsea Japan took full payment for a 2018 Nissan Leaf in September
            2025. Eleven months later the car has never reached us, it has been
            registered in a stranger's name, and the company's answer is to
            demand more money.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-px bg-rule [animation-delay:220ms]">
            {[
              ["Paid in full", "Sept 2025"],
              ["Vehicle received", "Never"],
              ["Refund claimed", "AUD $20,025"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background px-6 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {k}
                </p>
                <p className="mt-1 font-serif text-2xl font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Exhibit B · The parties
          </p>
          <div className="mt-8 grid gap-px bg-rule md:grid-cols-2">
            <article className="bg-background p-6">
              <div className="flex gap-5">
                <img
                  src={party01}
                  alt="Anonymised portrait representing the Exsea Japan sales manager"
                  loading="lazy"
                  width={640}
                  height={640}
                  className="size-24 shrink-0 border border-rule object-cover grayscale"
                />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Sales manager
                  </p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold">
                    Tom Tanaka
                  </h2>
                  <p className="mt-3 font-serif leading-relaxed text-ink-soft">
                    Arranged everything, answered every question, promised
                    fantastic service. All of it stopped the moment the money
                    cleared.
                  </p>
                </div>
              </div>
            </article>
            <article className="bg-background p-6">
              <div className="flex gap-5">
                <img
                  src={party02}
                  alt="Anonymised portrait representing the Exsea Japan manager who promised to follow up"
                  loading="lazy"
                  width={640}
                  height={640}
                  className="size-24 shrink-0 border border-rule object-cover grayscale"
                />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    The follow-up that never came
                  </p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold">
                    Marcus
                  </h2>
                  <p className="mt-3 font-serif leading-relaxed text-ink-soft">
                    Told us "that doesn't sound right" and that he would take it
                    up with Tom and have it resolved. Eleven months later, we are
                    still waiting.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Exhibit C · The timeline
          </p>
          <h2 className="mt-4 max-w-[22ch] font-serif text-3xl leading-tight font-semibold sm:text-4xl">
            Every step is in writing between the parties.
          </h2>
          <ol className="mt-10 border-l border-foreground/25 pl-7">
            {timeline.map((item, i) => (
              <li key={i} className="relative pb-10 last:pb-0">
                <span className="absolute top-1.5 -left-[33px] size-3 rounded-full border-2 border-background bg-foreground" />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.date}
                </p>
                <h3 className="mt-1.5 max-w-[34ch] font-serif text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[62ch] font-serif leading-[1.75] text-ink-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-rule bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <blockquote className="max-w-4xl">
            <p className="font-serif text-[clamp(1.6rem,3.6vw,2.6rem)] leading-snug font-medium">
              "Do you know your agents take customers' cars and register them in
              their own names?"
            </p>
            <cite className="mt-6 block font-mono text-[10px] uppercase tracking-[0.24em] not-italic opacity-60">
              From our formal notice to Exsea Japan, March 2026
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Exhibit D · The facts
            </p>
            <h2 className="mt-4 max-w-[20ch] font-serif text-3xl leading-tight font-semibold sm:text-4xl">
              Breach of contract and vehicle misappropriation.
            </h2>
            <div className="mt-6 space-y-5 font-serif text-[17px] leading-[1.8] text-ink-soft">
              <p>
                Our contract and all correspondence have been directly with
                Exsea Japan. We relied on written assurances that the quoted
                price was fixed, final, and inclusive of every cost of getting
                the vehicle to Perth.
              </p>
              <p>
                We did not choose the freight agent. Exsea instructed us to use
                Savy Logistics (NSW), managed by Mr Mohammad Neaj, and assured
                us they handled all of Exsea's logistics and there would be no
                problems. That business has since been evicted from its offices
                for non-payment of rent and has changed its registered name.
              </p>
              <p className="border-l-2 border-foreground pl-5 text-foreground italic">
                The vehicle has not been delivered, lawful ownership is
                compromised, and there is no assurance of its current location,
                condition, or whether it even remains intact.
              </p>
              <p>
                We were told to pay the disputed invoice before anything else
                could proceed. Given the conduct of Exsea's own agent and the
                absence of any remedial action, we have no confidence that
                paying again would ever produce the car.
              </p>
              <p>
                This site is a last resort. We have exhausted every effort and
                given Exsea Japan every opportunity to resolve this privately.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                The ledger
              </p>
              <div className="mt-4 border border-foreground">
                <div className="flex justify-between border-b border-rule px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>Line item</span>
                  <span>AUD</span>
                </div>
                <dl>
                  {ledger.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-6 border-b border-dashed border-rule px-5 py-3.5"
                    >
                      <dt className="font-serif text-[15px] text-ink-soft">
                        {row.label}
                      </dt>
                      <dd className="font-mono text-[15px]">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center justify-between bg-foreground px-5 py-4 text-background">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
                    Refund total
                  </span>
                  <span className="font-serif text-3xl font-semibold">
                    $20,025
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Requested without delay
              </p>
              <ul className="mt-4 space-y-4">
                {demands.map((d, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-xs pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif leading-relaxed text-ink-soft">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Add to the record
            </p>
            <h2 className="mt-4 max-w-[16ch] font-serif text-3xl leading-tight font-semibold sm:text-4xl">
              Has Exsea Japan done this to you?
            </h2>
            <p className="mt-4 max-w-[44ch] font-serif leading-relaxed text-ink-soft">
              If you hold correspondence, invoices, or a similar account of
              buying a vehicle through Exsea Japan, add it here. This page stays
              live until the matter is resolved.
            </p>
            <div className="mt-8 border border-rule p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1.5 w-full border border-rule bg-card px-3 py-2.5 text-sm outline-none focus:border-foreground"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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
                className="w-full bg-foreground py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-background transition-opacity hover:opacity-85"
              >
                {sent ? "Added to the record" : "Submit to the record"}
              </button>
              <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                Submissions are reviewed before anything is published. Nothing
                identifying is shared without consent.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="text-foreground">Record EXSEA-JP · 2026-0041</span>
          <span>
            A public buyer record · Updated March 2026 · Not affiliated with
            Exsea Japan
          </span>
        </div>
      </footer>
    </main>
  );
}
