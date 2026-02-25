import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "@/components/seo";
import { CTABanner } from "@/components/cta-banner";
import { getGuide } from "@/content/guides";

const guide = getGuide("practice-costs")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: "/guides/practice-costs" },
};

export default function PracticeCostsGuide() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guides/practice-costs"
      />

      <div className="container-narrow py-16 sm:py-24">
        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-sm text-[var(--color-ink-muted)] mb-4">
            <span>{guide.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
            <span>Last updated {guide.lastUpdated}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[var(--color-ink)] leading-[1.15]">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg text-[var(--color-ink-light)] leading-relaxed max-w-2xl">
            Real dollar figures for every cost you will hit in your first year of
            private practice. Insurance, software, room rental, registration fees,
            and the hidden expenses nobody talks about until you are already paying
            them.
          </p>
        </div>

        <article className="prose prose-guide prose-lg max-w-none">
          {/* ---- Intro ---- */}
          <p>
            Ask five allied health professionals what it costs to start a private
            practice and you will get five completely different answers. Some will
            tell you they started for under $2,000. Others will say it cost
            $15,000 before they saw a single client. Both are telling the truth.
            The difference comes down to profession, setup choices, and whether
            you are factoring in the costs that don&apos;t show up on any
            invoice.
          </p>
          <p>
            This guide lays out every cost you can expect, with real Australian
            dollar figures. We have split it into recurring costs (the things you
            pay monthly or annually), one-off startup costs, and the hidden costs
            that catch most new practitioners off guard. At the end, there is a
            summary table showing total first-year costs across three scenarios:
            lean, typical, and fully kitted out.
          </p>
          <p>
            All figures are current as of early 2026 and are in AUD. Where costs
            vary by profession, we say so.
          </p>

          {/* ---- Section 1: Recurring Costs ---- */}
          <h2>Recurring costs: what you will pay every month or year</h2>
          <p>
            These are the costs that keep ticking whether you see one client per
            week or thirty. Understanding them is important because they set your
            baseline. Before you earn a dollar, this is what private practice
            costs you just to exist.
          </p>

          <h3>Professional indemnity insurance: $300 to $800 per year</h3>
          <p>
            This is non-negotiable. You cannot practise without it, and most
            professional associations make it a membership condition. The cost
            depends on your profession, your scope of practice, and your
            turnover.
          </p>
          <p>
            Physiotherapists and exercise physiologists tend to sit around $400 to
            $600 per year. Podiatrists pay slightly more because of the
            procedural risk profile. Dietitians are typically at the lower end,
            around $300 to $450. These figures are for solo practitioners with
            turnover under $150,000. Once you are earning more, premiums go up.
          </p>
          <p>
            Most practitioners get their PI insurance through their professional
            association (APA, APodA, ESSA, DAA) as part of a membership bundle.
            If you are shopping independently, companies like Guild Insurance and
            BMS are common choices in the allied health space.
          </p>

          <h3>Practice management software: $0 to $55 per month</h3>
          <p>
            You need somewhere to manage bookings, client records, invoicing, and
            Medicare claims. The good news is that the range here is enormous, and
            there is a genuinely usable free option.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)]">
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Software</th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Cost</th>
                  <th className="text-left py-3 font-semibold text-[var(--color-ink)]">Notes</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-ink-light)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Halaxy</td>
                  <td className="py-3 pr-4">Free core tier</td>
                  <td className="py-3">Most popular for solo practitioners in Australia. Free tier includes billing, scheduling, telehealth. Paid add-ons if you want extras.</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Zanda (Power Diary)</td>
                  <td className="py-3 pr-4">$19/month</td>
                  <td className="py-3">Popular with psychologists and counsellors but works well for all allied health. Good NDIS invoicing.</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Cliniko</td>
                  <td className="py-3 pr-4">$45/month</td>
                  <td className="py-3">Strong in physio and multi-practitioner clinics. More features, higher price.</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Nookal</td>
                  <td className="py-3 pr-4">$55/month</td>
                  <td className="py-3">Built for larger practices. Probably overkill if you are just starting out solo.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            If you are starting solo and watching your costs, Halaxy on the free
            tier is hard to beat. You can always upgrade later when you know what
            features you actually need. Don&apos;t pay for software complexity
            you won&apos;t use in your first year.
          </p>

          <h3>Room rental: $50 to $150 per session, or $200 to $600 per week</h3>
          <p>
            Room costs vary wildly depending on your city, suburb, and setup. In
            metropolitan areas, you will typically pay $50 to $150 for a
            single-session room hire. This means you book (and pay for) only the
            hours you use. It is the lowest-risk option when you are building up a
            caseload.
          </p>
          <p>
            A dedicated room (your own space, available whenever you want it) runs
            $200 to $600 per week in most metro areas. Regional and suburban rates
            can be 30 to 50 percent lower. Some practitioners start from home or
            offer mobile services to avoid room costs entirely, though check your
            profession&apos;s regulations and insurance requirements before going
            this route.
          </p>
          <p>
            Telehealth changes the maths significantly. If a large portion of your
            caseload can be delivered via telehealth (common for dietitians,
            speech pathologists, and exercise physiologists), you may only need a
            room one or two days a week.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Important</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Room rental is usually your single biggest recurring cost. It is
              also the most controllable. Starting with sessional hire and
              moving to a dedicated room once your caseload justifies it is the
              approach most successful solo practitioners recommend.
            </p>
          </div>

          <h3>AHPRA registration: $290 to $380 per year</h3>
          <p>
            If your profession is regulated by AHPRA (physiotherapy, podiatry,
            osteopathy, chiropractic), you pay an annual registration fee. The
            exact amount varies by profession and by state or territory.
            Physiotherapists pay around $380. Podiatrists are around $290 to $340.
          </p>
          <p>
            Note: exercise physiologists and dietitians are not AHPRA-regulated.
            They register with their professional associations (ESSA and DAA
            respectively) instead. Those fees are covered under professional
            association membership below.
          </p>

          <h3>Professional association membership: $300 to $800 per year</h3>
          <p>
            Technically optional for AHPRA-regulated professions, but
            realistically essential. Your association often bundles PI insurance,
            provides CPD opportunities, and gives you credibility with referrers.
            For non-AHPRA professions like exercise physiology and dietetics, your
            association membership is your professional registration.
          </p>
          <p>
            APA (physio) membership runs around $650 to $800 depending on your
            level. APodA (podiatry) is around $500 to $700. ESSA (exercise
            physiology) charges around $350 to $500. DAA (dietetics) is around
            $300 to $500.
          </p>

          <h3>Accounting: $1,000 to $3,000 per year</h3>
          <p>
            You can do your own bookkeeping (and many practitioners do, at least
            initially). But you will almost certainly want an accountant for your
            tax return, and ideally one who understands sole traders or small
            health businesses. A basic tax return and BAS lodgement package runs
            $1,000 to $1,500. Add ongoing bookkeeping support and business
            structure advice and you are looking at $2,000 to $3,000.
          </p>
          <p>
            This is one of those costs that pays for itself. A good accountant
            will save you more than their fee in deductions you would have missed
            and structuring decisions you would have got wrong.
          </p>

          <h3>Public liability insurance: $200 to $400 per year</h3>
          <p>
            Separate from professional indemnity insurance. Public liability
            covers you if a client trips in your waiting room or your equipment
            injures someone. If you are renting a room in a shared clinic, the
            clinic may have their own coverage, but check the fine print. Many
            room rental agreements require you to hold your own policy.
          </p>

          <h3>Recurring costs summary</h3>
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)]">
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Cost</th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Low estimate</th>
                  <th className="text-left py-3 font-semibold text-[var(--color-ink)]">High estimate</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-ink-light)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Professional indemnity insurance</td>
                  <td className="py-3 pr-4">$300/yr</td>
                  <td className="py-3">$800/yr</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Practice management software</td>
                  <td className="py-3 pr-4">$0/yr</td>
                  <td className="py-3">$660/yr</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Room rental</td>
                  <td className="py-3 pr-4">$5,200/yr</td>
                  <td className="py-3">$31,200/yr</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">AHPRA registration</td>
                  <td className="py-3 pr-4">$0/yr</td>
                  <td className="py-3">$380/yr</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Professional association</td>
                  <td className="py-3 pr-4">$300/yr</td>
                  <td className="py-3">$800/yr</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Accounting</td>
                  <td className="py-3 pr-4">$1,000/yr</td>
                  <td className="py-3">$3,000/yr</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Public liability insurance</td>
                  <td className="py-3 pr-4">$200/yr</td>
                  <td className="py-3">$400/yr</td>
                </tr>
                <tr className="border-t-2 border-[var(--color-border-strong)]">
                  <td className="py-3 pr-4 font-semibold text-[var(--color-ink)]">Total recurring (annual)</td>
                  <td className="py-3 pr-4 font-semibold text-[var(--color-ink)]">$7,000</td>
                  <td className="py-3 font-semibold text-[var(--color-ink)]">$37,240</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            That range is huge, and the room rental line is doing most of the
            work. A dietitian running telehealth three days a week and renting a
            session room one day sits at the low end. A podiatrist who needs a
            dedicated treatment room five days a week is at the high end. Both
            are legitimate setups. The point is to understand which costs apply
            to your situation before you commit.
          </p>

          {/* ---- Section 2: One-off Startup Costs ---- */}
          <h2>One-off startup costs</h2>
          <p>
            These are the costs you pay once to get set up. Some are trivially
            cheap. Others depend heavily on your profession.
          </p>

          <h3>ABN registration: free</h3>
          <p>
            Registering for an Australian Business Number costs nothing and takes
            about 10 minutes through the{" "}
            <Link href="https://www.abr.gov.au" target="_blank" rel="noopener noreferrer">
              Australian Business Register
            </Link>{" "}
            website. You will need your ABN before you can do almost anything
            else, so do this first.
          </p>

          <h3>Business name registration: $44 to $104</h3>
          <p>
            If you want to trade under a name other than your own (for example,
            &quot;Bayside Physiotherapy&quot; instead of &quot;Jane Smith&quot;),
            you register a business name through ASIC. It costs $44 for one year
            or $104 for three years. If you are just practising under your own
            name, you can skip this entirely.
          </p>

          <h3>Website: $500 to $3,000</h3>
          <p>
            You need a web presence. A basic professional website with your
            services, location, contact details, and online booking integration
            runs $500 to $1,500 if you use a platform like Squarespace or
            WordPress and do some of the work yourself. A custom-designed site
            from a web developer is $2,000 to $3,000 at the lower end.
          </p>
          <p>
            Don&apos;t overthink this at the start. A clean, professional site
            that loads quickly and makes it easy to book an appointment is all you
            need. You can upgrade later. Your biggest source of referrals in the
            early days will be GPs and word of mouth, not your website.
          </p>

          <h3>Profession-specific equipment: $0 to $15,000+</h3>
          <p>
            This is where costs diverge dramatically depending on what you do.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)]">
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Profession</th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Equipment cost range</th>
                  <th className="text-left py-3 font-semibold text-[var(--color-ink)]">Key items</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-ink-light)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Podiatry</td>
                  <td className="py-3 pr-4">$5,000 to $15,000+</td>
                  <td className="py-3">Treatment chair ($2,000 to $5,000), autoclave ($1,500 to $3,000), instruments, nail drill, doppler</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Physiotherapy</td>
                  <td className="py-3 pr-4">$2,000 to $8,000</td>
                  <td className="py-3">Treatment table ($800 to $2,000), exercise equipment, electrotherapy devices (optional)</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Exercise physiology</td>
                  <td className="py-3 pr-4">$500 to $5,000</td>
                  <td className="py-3">Assessment tools, resistance bands, basic exercise equipment. Less if you use gym facilities or home visits.</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Speech pathology</td>
                  <td className="py-3 pr-4">$500 to $3,000</td>
                  <td className="py-3">Assessment kits, therapy resources, some standardised testing materials</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Dietetics</td>
                  <td className="py-3 pr-4">$100 to $500</td>
                  <td className="py-3">Basically a laptop, food models (optional), body composition tools (optional). Lowest equipment cost of any allied health profession.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            If you are a podiatrist, equipment is a major line item and you need
            to budget for it carefully. If you are a dietitian, you could
            realistically start with a laptop you already own and a Halaxy
            account. The gap between these two scenarios is why generic &quot;cost
            to start a practice&quot; advice is so often useless.
          </p>

          {/* ---- Section 3: NDIS Cost Surprise ---- */}
          <h2>The NDIS cost surprise</h2>
          <p>
            If you plan to see NDIS participants (and for many allied health
            professions, that is a significant chunk of the potential client
            base), you need to understand the registration costs. This is one of
            the most under-budgeted expenses in private practice.
          </p>
          <p>
            NDIS provider registration involves several costs that stack up
            quickly:
          </p>
          <ul>
            <li>
              <strong>Initial registration audit:</strong> $3,000 to $8,000
              depending on the scope of your registration groups and the auditor.
              This is the big one. You need to pay an approved quality auditor to
              assess your business against the NDIS Practice Standards.
            </li>
            <li>
              <strong>Worker screening checks:</strong> $100 to $150 per worker
              (NDIS Worker Screening Check, varies by state)
            </li>
            <li>
              <strong>Ongoing quality audits:</strong> Required periodically,
              $1,500 to $3,000 each time
            </li>
            <li>
              <strong>Administrative time:</strong> Preparing documentation for
              audits, maintaining compliance records, and navigating the NDIS
              portal. This is unpaid time that can easily eat 20 to 40 hours
              during your initial registration.
            </li>
          </ul>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Important</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Total first-year NDIS registration costs typically land between
              $4,500 and $11,800. Many new practitioners don&apos;t budget for
              this at all, then discover they can&apos;t see NDIS clients
              without it. If NDIS is part of your business plan, factor these
              costs in from day one. Also worth knowing: you can see NDIS
              clients without registration if they are plan-managed or
              self-managed, but agency-managed participants (the majority) can
              only see registered providers.
            </p>
          </div>

          <p>
            The alternative is to work as an unregistered provider, which limits
            you to plan-managed and self-managed NDIS participants. For some
            practitioners, especially those in metro areas where there are plenty
            of plan-managed clients, this can work fine. But if you are in a
            regional area or your client base is predominantly agency-managed,
            full registration is probably necessary.
          </p>

          {/* ---- Section 4: Hidden Costs ---- */}
          <h2>Hidden costs nobody warns you about</h2>
          <p>
            The costs above are the ones you can put in a spreadsheet. The ones
            below are the ones that quietly erode your income and catch first-year
            practitioners off guard. They don&apos;t show up on any invoice, but
            they are real.
          </p>

          <h3>No-shows: 5 to 15 percent of your bookings</h3>
          <p>
            Across allied health, no-show rates typically sit between 5 and 15
            percent. If you are charging $120 per session and seeing 20 clients a
            week, a 10 percent no-show rate means you are losing roughly $240 per
            week. That is over $12,000 a year in lost revenue.
          </p>
          <p>
            You can mitigate this with cancellation policies, SMS reminders
            (most practice management software handles this), and requiring card
            details for bookings. But you cannot eliminate it completely. Budget
            for it.
          </p>

          <h3>Unpaid admin time: 30 to 50 percent of your working hours</h3>
          <p>
            This is the one that shocks most new practitioners. For every hour
            you spend with a client, expect to spend 20 to 40 minutes on notes,
            billing, phone calls, emails, report writing, and general
            administration. Some of this is clinical documentation (which is
            non-negotiable). Some of it is chasing payments, answering enquiries,
            and managing your diary.
          </p>
          <p>
            When you were employed, someone else handled the admin or you were
            paid for it. In private practice, this is your unpaid time. If you
            are planning your income based on &quot;I will see 25 clients a week
            at $120 each, that is $3,000,&quot; you are wrong. You are going to
            work 40+ hours to see those 25 clients, and you need to factor that
            into your hourly rate expectations.
          </p>

          <h3>No leave entitlements</h3>
          <p>
            No paid annual leave. No paid sick leave. No employer superannuation
            contributions. If you take two weeks off at Christmas and another
            week for illness during the year, that is three weeks of zero income.
            On a $100,000 gross revenue year, that is roughly $5,700 you need to
            self-fund. Plus 11.5% superannuation (currently rising to 12% by
            July 2027) that you should be putting aside yourself. On $100,000,
            that is another $11,500 per year.
          </p>
          <p>
            When people compare their private practice income to their employed
            salary, they often forget to subtract these. Your gross revenue needs
            to be significantly higher than an equivalent salary to deliver the
            same take-home outcome.
          </p>

          <h3>Professional development: $500 to $2,000 per year</h3>
          <p>
            You are required to maintain CPD (Continuing Professional
            Development) to keep your registration. When you were employed, your
            employer may have covered course fees or given you paid study days. In
            private practice, you pay for courses, conferences, and workshops out
            of your own pocket, and every day spent on PD is a day you are not
            earning clinical income.
          </p>
          <p>
            Budget $500 to $2,000 for course fees and factor in the lost income
            from the days you spend on PD rather than seeing clients.
          </p>

          <h3>Marketing and client acquisition</h3>
          <p>
            In the early months, you need to actively build your caseload. This
            might mean visiting GPs to introduce yourself, getting listed on
            directories (HealthEngine, HotDoc), running a small Google Ads
            campaign, or printing business cards and flyers.
          </p>
          <p>
            Some of this costs money ($50 to $300 per month for directory
            listings or ads), but the bigger cost is your time. Expect to spend
            several hours a week on marketing activities in your first three to
            six months. That is time you are not billing clients.
          </p>
          <p>
            The honest reality: most allied health practitioners get the bulk of
            their clients through GP referrals and word of mouth. Building those
            relationships takes time and effort, not big marketing budgets. But
            the time cost is real.
          </p>

          {/* ---- Section 5: Profession Comparisons ---- */}
          <h2>Profession-specific cost variations</h2>
          <p>
            To make the cost gap concrete, here is a side-by-side comparison of
            two professions at opposite ends of the spectrum.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)]">
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Cost category</th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Podiatrist</th>
                  <th className="text-left py-3 font-semibold text-[var(--color-ink)]">Dietitian</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-ink-light)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Equipment</td>
                  <td className="py-3 pr-4">$8,000 to $15,000</td>
                  <td className="py-3">$100 to $500</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Room requirements</td>
                  <td className="py-3 pr-4">Dedicated room needed (plumbing, sterilisation space)</td>
                  <td className="py-3">Session room or telehealth from home</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Room cost (annual)</td>
                  <td className="py-3 pr-4">$15,600 to $31,200</td>
                  <td className="py-3">$2,600 to $7,800</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Insurance (PI + PL)</td>
                  <td className="py-3 pr-4">$700 to $1,100</td>
                  <td className="py-3">$400 to $700</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">AHPRA registration</td>
                  <td className="py-3 pr-4">$290 to $340</td>
                  <td className="py-3">N/A (DAA membership instead)</td>
                </tr>
                <tr className="border-t-2 border-[var(--color-border-strong)]">
                  <td className="py-3 pr-4 font-semibold text-[var(--color-ink)]">Estimated first-year total</td>
                  <td className="py-3 pr-4 font-semibold text-[var(--color-ink)]">$28,000 to $52,000</td>
                  <td className="py-3 font-semibold text-[var(--color-ink)]">$5,500 to $14,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The podiatrist is paying roughly three to four times what the
            dietitian pays. That does not mean podiatry is a bad business. Session
            fees for podiatrists are generally higher, and the demand is strong.
            But it means a podiatrist needs significantly more starting capital
            and needs to hit a higher caseload faster to cover their overheads.
          </p>
          <p>
            If you are in a profession with high equipment costs, look into
            equipment finance. Spreading $10,000 over 24 months at a reasonable
            interest rate is often smarter than depleting your cash reserves
            before you have built a consistent caseload.
          </p>

          {/* ---- Section 6: Total First-Year Summary ---- */}
          <h2>Total first-year cost estimates</h2>
          <p>
            Here is what it all adds up to. We have modelled three scenarios:
            lean (starting on a shoestring, minimal equipment, sessional room
            hire), typical (moderate setup, some dedicated room time, standard
            software), and fully kitted out (dedicated room, paid software, full
            equipment, NDIS registration).
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)]">
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">Cost</th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-accent)]">Lean</th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-primary)]">Typical</th>
                  <th className="text-left py-3 font-semibold text-[var(--color-ink)]">Fully kitted</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-ink-light)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">ABN + business name</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">$44</td>
                  <td className="py-3">$104</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Website</td>
                  <td className="py-3 pr-4">$500</td>
                  <td className="py-3 pr-4">$1,500</td>
                  <td className="py-3">$3,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Equipment</td>
                  <td className="py-3 pr-4">$200</td>
                  <td className="py-3 pr-4">$3,000</td>
                  <td className="py-3">$12,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Room rental (annual)</td>
                  <td className="py-3 pr-4">$5,200</td>
                  <td className="py-3 pr-4">$13,000</td>
                  <td className="py-3">$28,600</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Software (annual)</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">$228</td>
                  <td className="py-3">$540</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Insurance (PI + PL)</td>
                  <td className="py-3 pr-4">$500</td>
                  <td className="py-3 pr-4">$800</td>
                  <td className="py-3">$1,200</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Registration + association</td>
                  <td className="py-3 pr-4">$400</td>
                  <td className="py-3 pr-4">$800</td>
                  <td className="py-3">$1,100</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Accounting</td>
                  <td className="py-3 pr-4">$1,000</td>
                  <td className="py-3 pr-4">$1,500</td>
                  <td className="py-3">$3,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">NDIS registration</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3">$8,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">PD / CPD</td>
                  <td className="py-3 pr-4">$500</td>
                  <td className="py-3 pr-4">$1,000</td>
                  <td className="py-3">$2,000</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4">Marketing</td>
                  <td className="py-3 pr-4">$200</td>
                  <td className="py-3 pr-4">$1,000</td>
                  <td className="py-3">$3,000</td>
                </tr>
                <tr className="border-t-2 border-[var(--color-border-strong)] bg-[var(--color-surface-warm)]">
                  <td className="py-4 pr-4 font-semibold text-[var(--color-ink)]">First-year total</td>
                  <td className="py-4 pr-4 font-semibold text-[var(--color-accent)]">$8,500</td>
                  <td className="py-4 pr-4 font-semibold text-[var(--color-primary)]">$22,872</td>
                  <td className="py-4 font-semibold text-[var(--color-ink)]">$62,544</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The lean scenario is realistic for a dietitian or exercise
            physiologist doing mostly telehealth with one day of sessional room
            hire. The typical scenario fits most physiotherapists and speech
            pathologists starting a standard practice. The fully kitted scenario
            represents a podiatrist setting up a dedicated treatment space with
            full equipment and NDIS registration.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Important</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              These figures don&apos;t include your personal living expenses.
              Most practitioners recommend having three to six months of
              personal living costs saved before starting, because it takes
              time to build a caseload. If your household expenses are $4,000
              per month, add $12,000 to $24,000 to the figures above. That is
              the real number you need in the bank before you hand in your
              resignation.
            </p>
          </div>

          {/* ---- Closing ---- */}
          <h2>Making this work on a budget</h2>
          <p>
            The numbers can look intimidating, especially at the higher end. But
            most successful private practitioners did not start at the top
            scenario. They started lean and scaled up as their caseload grew.
            Here are the common patterns:
          </p>
          <ul>
            <li>
              <strong>Start with sessional room hire.</strong> Pay per session
              until you have enough consistent bookings to justify a dedicated
              space. This is the single biggest lever you have for controlling
              costs.
            </li>
            <li>
              <strong>Use Halaxy&apos;s free tier.</strong> It handles
              scheduling, billing, and Medicare claims. You don&apos;t need to
              pay for software on day one.
            </li>
            <li>
              <strong>Don&apos;t register as an NDIS provider
              immediately.</strong> Start with plan-managed and self-managed
              participants while you build your practice. Register once your
              caseload and cash flow support the audit costs.
            </li>
            <li>
              <strong>Buy second-hand equipment.</strong> Practice closures and
              upgrades mean there is a steady supply of used treatment tables,
              chairs, and equipment at 40 to 60 percent of new prices. Check
              Gumtree, Facebook Marketplace, and profession-specific buy/sell
              groups.
            </li>
            <li>
              <strong>Get an accountant from day one.</strong> This feels like a
              cost to cut, but getting your structure right from the start saves
              you money. Restructuring later is expensive.
            </li>
          </ul>
          <p>
            The key takeaway: know your numbers before you start. Work out which
            scenario fits your profession, your location, and your planned
            service mix. Then add a buffer, because something unexpected always
            comes up. The practitioners who get into financial trouble are almost
            never the ones who planned carefully. They are the ones who didn&apos;t
            plan at all.
          </p>

          <h2>Next steps</h2>
          <p>
            Understanding your costs is the foundation, but it is just one piece
            of setting up a practice. If you are working through the setup
            process, these guides cover the other essentials:
          </p>
          <ul>
            <li>
              <Link href="/guides/cdm-billing">
                How Medicare CDM billing works for allied health
              </Link>{" "}
              covers the GPCCMP system, item numbers, and common billing
              mistakes.
            </li>
            <li>
              <Link href="/guides/provider-number">
                Getting your Medicare provider number
              </Link>{" "}
              walks through the PRODA account, HW093 form, and the
              location-specific trap.
            </li>
            <li>
              <Link href="/guides/business-structure">
                Business structure for allied health
              </Link>{" "}
              compares sole trader and Pty Ltd with allied-health-specific
              considerations.
            </li>
          </ul>
        </article>
      </div>

      <CTABanner source="practice-costs-guide" />
    </>
  );
}
