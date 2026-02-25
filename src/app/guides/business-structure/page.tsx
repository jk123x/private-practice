import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "@/components/seo";
import { CTABanner } from "@/components/cta-banner";
import { getGuide } from "@/content/guides";

const guide = getGuide("business-structure")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: "/guides/business-structure" },
};

export default function BusinessStructurePage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.description}
        url="/guides/business-structure"
      />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-warm texture-noise">
        <div className="container-narrow py-16 sm:py-24">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-4">
            Reference Guide
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-ink)] leading-[1.1]">
            {guide.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-[var(--color-ink-muted)]">
            <span>{guide.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-ink-muted)]" />
            <span>Last updated {guide.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <div className="container-narrow py-16 sm:py-24">
        <article className="prose prose-guide prose-lg max-w-none">
          <h2>Why your business structure matters</h2>

          <p>
            This is one of the first decisions you need to make when going into
            private practice, and it affects almost everything else: how you pay
            tax, whether your personal assets are protected, how you register for
            Medicare, and how much paperwork you deal with on an ongoing basis.
          </p>

          <p>
            The two realistic options for a solo allied health practitioner in
            Australia are <strong>sole trader</strong> and{" "}
            <strong>Pty Ltd (proprietary limited company)</strong>. There are
            other structures (partnerships, trusts), but for someone starting out
            on their own, it almost always comes down to these two.
          </p>

          <p>
            Getting this wrong early is expensive to fix later. Changing from
            sole trader to Pty Ltd down the track means a new ABN, potentially a
            new Medicare provider number, new bank accounts, updated contracts
            with every clinic you work from, and a chunk of accountant fees.
            It is not the end of the world, but it is a hassle you can avoid by
            thinking about it upfront.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">
              Key point
            </p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Your business structure affects your tax obligations, personal
              liability, Medicare billing setup, and ongoing admin load. The
              right answer depends on your income level and risk tolerance, but
              most solo allied health practitioners start as a sole trader.
            </p>
          </div>

          <h2>Sole trader</h2>

          <p>
            A sole trader is the simplest business structure in Australia. You
            and the business are legally the same entity. There is no separation
            between your personal finances and the business. You register for an
            ABN, and that is basically it.
          </p>

          <p>
            This is the most common starting structure for solo allied health
            practitioners, and for good reason. It is the cheapest, fastest, and
            easiest to set up. There is no company to register, no ASIC fees, no
            separate company tax return. Your business income goes straight onto
            your personal tax return.
          </p>

          <p>
            Your Medicare provider number is registered in your personal name,
            which is straightforward. You bill Medicare as yourself. No corporate
            arrangements needed.
          </p>

          <h3>How tax works as a sole trader</h3>

          <p>
            All your business income is your personal income. You declare it on
            your individual tax return and pay tax at your marginal rate. In
            2025-26, that looks like this:
          </p>

          <ul>
            <li>$0 to $18,200: nil</li>
            <li>$18,201 to $45,000: 16c for each $1 over $18,200</li>
            <li>$45,001 to $135,000: $4,288 plus 30c for each $1 over $45,000</li>
            <li>$135,001 to $190,000: $31,288 plus 37c for each $1 over $135,000</li>
            <li>$190,001 and over: $51,638 plus 45c for each $1 over $190,000</li>
          </ul>

          <p>
            Plus the Medicare levy of 2% on top. At lower incomes, sole trader
            is actually tax-advantaged because of the tax-free threshold ($18,200)
            and the lower marginal rates. The company tax rate is a flat 25%, so
            sole trader is better until your taxable income gets well above $120K
            or so.
          </p>

          <h3>The downside: personal liability</h3>

          <p>
            Because you and the business are the same legal entity, you are
            personally liable for all business debts. If something goes wrong
            and the business owes money, creditors can come after your personal
            assets: your car, your savings, your house. For most solo allied
            health practitioners starting out, the risk is relatively low
            (you are not taking on inventory or massive debts), and professional
            indemnity insurance covers clinical liability. But it is worth
            understanding what you are accepting.
          </p>

          <h2>Pty Ltd (proprietary limited company)</h2>

          <p>
            A Pty Ltd is a separate legal entity from you. The company earns the
            income, the company pays its debts, and the company has its own tax
            obligations. You are a director and shareholder, but the company is
            its own thing.
          </p>

          <p>
            The big advantage is limited liability. Your personal assets are
            generally protected from business debts (with some important
            exceptions, like if you personally guarantee a loan or if directors
            are found to have traded while insolvent). The company is the shield
            between the business and your personal finances.
          </p>

          <h3>How tax works with a Pty Ltd</h3>

          <p>
            The company pays a flat 25% company tax rate on its profits (for
            base rate entities with turnover under $50 million, which covers
            every solo practitioner). You then pay yourself a salary from the
            company, and that salary is taxed at your personal marginal rate.
          </p>

          <p>
            The tax advantage kicks in when you are earning enough that your
            marginal rate exceeds 25%. You can leave profits in the company
            (taxed at 25%) rather than paying them all out to yourself (taxed at
            up to 45% plus Medicare levy). This starts to matter once your
            practice income is consistently above $120,000 to $150,000 per year.
            Below that, the additional accounting costs and complexity usually
            eat up any tax savings.
          </p>

          <h3>Medicare provider number under a Pty Ltd</h3>

          <p>
            This is where it gets a bit more complicated. Your Medicare provider
            number is still registered to you as an individual practitioner, but
            the billing arrangements can differ. If the company is the billing
            entity, you may need to set up a pay-to arrangement or a corporate
            provider number link. Your accountant and Medicare will guide you
            through this, but it is more involved than the sole trader setup
            where everything is just in your name.
          </p>

          <h3>The downsides</h3>

          <p>
            A Pty Ltd costs more to set up and maintain. You are looking at ASIC
            registration fees ($576 to register, then $310 per year in annual
            review fees), a separate company tax return, and more complex
            bookkeeping. Your accountant bills are higher because there is more
            work. For a solo practitioner earning under $120K, the tax savings
            rarely justify these costs.
          </p>

          <h2>Side-by-side comparison</h2>

          <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3">
                Sole Trader
              </h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                You and the business are the same entity.
              </p>
              <p className="text-xs font-semibold text-[var(--color-accent-dark)] uppercase tracking-wider mb-2">
                Pros
              </p>
              <ul className="text-sm text-[var(--color-ink-light)] space-y-1.5 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Cheapest to set up (free ABN registration)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Simplest admin and bookkeeping
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Tax-free threshold and lower marginal rates at lower income
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Straightforward Medicare provider number setup
                </li>
              </ul>
              <p className="text-xs font-semibold text-[var(--color-accent-dark)] uppercase tracking-wider mb-2">
                Cons
              </p>
              <ul className="text-sm text-[var(--color-ink-light)] space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  No asset protection (personal liability)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  Cannot income split with a spouse
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  Harder to sell the business later
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  Higher tax rate at higher incomes
                </li>
              </ul>
            </div>
            <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-semibold text-[var(--color-ink)] mb-3">
                Pty Ltd
              </h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                A separate legal entity that you own and direct.
              </p>
              <p className="text-xs font-semibold text-[var(--color-accent-dark)] uppercase tracking-wider mb-2">
                Pros
              </p>
              <ul className="text-sm text-[var(--color-ink-light)] space-y-1.5 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Limited liability (personal assets protected)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Flat 25% company tax rate
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Easier to bring in partners or sell later
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">+</span>
                  Can retain profits in the company at lower rate
                </li>
              </ul>
              <p className="text-xs font-semibold text-[var(--color-accent-dark)] uppercase tracking-wider mb-2">
                Cons
              </p>
              <ul className="text-sm text-[var(--color-ink-light)] space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  More expensive to set up and maintain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  More complex bookkeeping and tax returns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  ASIC fees ($576 setup, $310/year ongoing)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">&minus;</span>
                  More complex Medicare billing arrangements
                </li>
              </ul>
            </div>
          </div>

          <h2>GST implications for allied health</h2>

          <p>
            Most allied health services are GST-free under the{" "}
            <em>A New Tax System (Goods and Services Tax) Act 1999</em>. That
            means even if you are registered for GST, you do not charge GST on
            your clinical services. This applies to physiotherapy, podiatry,
            dietetics, speech pathology, occupational therapy, chiropractic, and
            osteopathy services that are generally accepted in the relevant
            profession as being necessary for the appropriate treatment of the
            recipient.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">
              Exercise physiologists: read this carefully
            </p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Exercise physiology services are only GST-free when they are
              &ldquo;treatment&rdquo; for a specific medical condition. General
              fitness programs, wellness coaching, or gym-based exercise
              prescription that is not treating a diagnosed condition may not
              qualify for the GST exemption. If you provide a mix of clinical
              and non-clinical services, you may need to charge GST on the
              non-clinical portion. Talk to your accountant about this
              specifically.
            </p>
          </div>

          <h3>When you must register for GST</h3>

          <p>
            If your annual turnover (gross revenue, not profit) exceeds $75,000,
            you must register for GST. This is the case regardless of whether
            your services are GST-free. You still need to lodge BAS (Business
            Activity Statements) and report your income. You can also choose to
            register voluntarily below the $75K threshold, which can be useful
            if you want to claim GST credits on your business purchases (like
            equipment, software, and rent that includes GST).
          </p>

          <p>
            Here is the part that trips people up: being registered for GST does
            not necessarily mean you charge GST on your services. If your
            services are GST-free (which most allied health clinical services
            are), you still do not charge GST on those. But you do get to claim
            GST credits on your business expenses. For many solo practitioners,
            voluntary GST registration can actually save money once your
            business expenses are significant enough.
          </p>

          <h2>ABN registration</h2>

          <p>
            Your Australian Business Number (ABN) is the foundation of
            everything. You need one before you can get a Medicare provider
            number, before you can invoice anyone, and before you can register
            for GST.
          </p>

          <p>
            Registering for an ABN is free and you do it online at{" "}
            <Link
              href="https://www.abr.gov.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              abr.gov.au
            </Link>
            . It takes about 10 minutes. You will need your tax file number
            (TFN) and some basic details about your business activity. Most
            applications are processed immediately, but some get referred for
            manual review, which can take a few weeks. If yours gets referred,
            do not panic. It is common for new registrations.
          </p>

          <p>
            If you are setting up as a sole trader, you get an ABN as an
            individual. If you are setting up a Pty Ltd, you register the
            company first (through ASIC) and then apply for an ABN for the
            company. The company ABN is separate from any personal ABN you might
            already have.
          </p>

          <h2>Business name registration</h2>

          <p>
            If you are trading under your own personal name (for example, &ldquo;Jane
            Smith, Physiotherapist&rdquo;), you do not need to register a business
            name. But if you want to trade under any other name (for example,
            &ldquo;Bayside Physiotherapy&rdquo; or &ldquo;Smith Allied Health&rdquo;), you need to
            register that name with ASIC.
          </p>

          <p>
            Business name registration costs $44 for one year or $104 for three
            years. You do it through the{" "}
            <Link
              href="https://www.abr.gov.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Business Register
            </Link>{" "}
            website (same place you got your ABN). You need an ABN before you
            can register a business name.
          </p>

          <p>
            Before you register, search the business name register to make sure
            the name is available. Also check that the name does not conflict
            with any existing trademarks, and that a matching domain name is
            available if you want a website (you should want a website). A few
            extra minutes of checking upfront saves you having to rebrand later.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">
              AHPRA advertising rules
            </p>
            <p className="text-sm text-[var(--color-ink-light)]">
              If your profession is AHPRA-regulated (physio, podiatry, chiro,
              osteo, OT), your business name and any advertising must comply
              with AHPRA&apos;s advertising guidelines. You cannot use titles or
              terms that are misleading about your qualifications or the
              services you provide. Check the{" "}
              <Link
                href="https://www.ahpra.gov.au/Publications/Advertising-hub.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] underline"
              >
                AHPRA advertising hub
              </Link>{" "}
              before committing to a name.
            </p>
          </div>

          <h2>When to get an accountant</h2>

          <p>
            The answer is before you start earning. Not after your first BAS is
            due. Not at tax time. Before you set up.
          </p>

          <p>
            A good accountant will help you choose the right structure (sole
            trader vs Pty Ltd), set up your bookkeeping system, advise on GST
            registration, make sure your superannuation obligations are sorted,
            and tell you what records you need to keep. They will also help you
            understand what you can and cannot claim as a business deduction,
            which for a healthcare practice has some specific quirks (like the
            deductibility of professional development, registration fees, and
            insurance).
          </p>

          <p>
            You specifically want an accountant who understands allied health or
            at least healthcare businesses. They need to know about Medicare
            billing structures, the GST-free status of health services, and the
            common setups for solo practitioners. A general small business
            accountant can handle the basics, but one with health industry
            experience will save you money and headaches.
          </p>

          <h3>What it costs</h3>

          <p>
            Expect to pay $1,000 to $3,000 per year for a basic sole trader
            setup (annual tax return, BAS lodgements, and general advice). A
            Pty Ltd setup will be at the higher end of that range or above it,
            because the company tax return and compliance obligations are more
            involved.
          </p>

          <p>
            That might feel like a lot when you are starting out and watching
            every dollar. But the right accountant will save you more than they
            cost. They will identify deductions you did not know about, keep
            you compliant so you avoid ATO penalties, and structure things so
            you are not paying more tax than you need to. Think of it as an
            investment, not an expense.
          </p>

          <p>
            Ask your professional association for referrals. Many have lists of
            accountants who specialise in their profession. Ask colleagues who
            they use. Word of mouth is the best way to find someone good.
          </p>

          <h2>The most common path for starting out</h2>

          <p>
            Here is the honest answer: most solo allied health practitioners
            start as a sole trader, and that is the right call for most people.
          </p>

          <p>
            It is the simplest, cheapest structure. Your admin load is minimal.
            Your accounting costs are lower. Your Medicare provider number setup
            is straightforward. You get to focus on building your client base
            and learning how to run a practice without also dealing with
            corporate compliance.
          </p>

          <p>
            The typical progression looks like this:
          </p>

          <ol>
            <li>
              <strong>Year 1:</strong> Start as a sole trader. Focus on getting
              clients, building GP referral relationships, and figuring out
              Medicare billing. Keep your costs low.
            </li>
            <li>
              <strong>Years 2-3:</strong> Your income grows. You start
              understanding your numbers. You have a relationship with an
              accountant. At some point, your accountant says &ldquo;it might be
              worth looking at a company structure now.&rdquo;
            </li>
            <li>
              <strong>Year 3+:</strong> If your income is consistently above
              $120,000 to $150,000 and you want asset protection, you transition
              to a Pty Ltd. Your accountant manages the process.
            </li>
          </ol>

          <p>
            Not everyone follows this path. Some people know from day one that
            they want a company structure because they plan to bring in other
            practitioners or they have significant personal assets they want to
            protect. That is fine too. The point is to make a deliberate choice
            based on your situation, not to default to the most complex option
            because it sounds more professional.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">
              The transition is not trivial
            </p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Switching from sole trader to Pty Ltd later is doable but it is
              not just ticking a box. You need a new ABN for the company,
              potentially new Medicare provider number arrangements, new bank
              accounts, updated contracts with clinics and referrers, and your
              accountant will charge for the setup work. This is why it is worth
              having a conversation with an accountant before you start, even if
              you end up going sole trader. At least you will know the plan.
            </p>
          </div>

          <h2>Quick reference: what you need to register</h2>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">
                    Registration
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">
                    Cost
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">
                    Where
                  </th>
                  <th className="text-left py-3 font-semibold text-[var(--color-ink)]">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-ink-light)]">
                <tr className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 pr-4">ABN</td>
                  <td className="py-3 pr-4">Free</td>
                  <td className="py-3 pr-4">abr.gov.au</td>
                  <td className="py-3">
                    Takes ~10 minutes. Need this before everything else.
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 pr-4">Business name</td>
                  <td className="py-3 pr-4">$44/yr or $104/3yr</td>
                  <td className="py-3 pr-4">abr.gov.au</td>
                  <td className="py-3">
                    Only needed if trading under a name other than your own.
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 pr-4">Pty Ltd company</td>
                  <td className="py-3 pr-4">$576 setup + $310/yr</td>
                  <td className="py-3 pr-4">ASIC</td>
                  <td className="py-3">
                    Only if choosing Pty Ltd structure. Usually done by your accountant.
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 pr-4">GST registration</td>
                  <td className="py-3 pr-4">Free</td>
                  <td className="py-3 pr-4">ATO / ABR</td>
                  <td className="py-3">
                    Mandatory above $75K turnover. Optional below.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Medicare provider number</td>
                  <td className="py-3 pr-4">Free</td>
                  <td className="py-3 pr-4">Services Australia</td>
                  <td className="py-3">
                    Need ABN first. See our{" "}
                    <Link
                      href="/guides/provider-number"
                      className="text-[var(--color-accent)] underline"
                    >
                      provider number guide
                    </Link>
                    .
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Common mistakes</h2>

          <h3>Setting up a Pty Ltd because it sounds more professional</h3>

          <p>
            Your clients do not care whether you are a sole trader or a Pty Ltd.
            They care whether you can help them with their shoulder pain. Do not
            spend $2,000+ on company setup and ongoing compliance when a sole
            trader ABN (free) does the same job at your income level.
          </p>

          <h3>Not getting an accountant early enough</h3>

          <p>
            The most expensive accounting advice is the kind you get after the
            fact. Setting up the wrong structure, missing BAS deadlines,
            failing to track deductible expenses for the first six months:
            these all cost more to fix than getting proper advice at the start.
          </p>

          <h3>Forgetting about superannuation</h3>

          <p>
            As an employee, super was handled for you. As a sole trader, it is
            your responsibility. You are not legally required to pay yourself
            super as a sole trader, but you should. The ATO allows you to claim
            a tax deduction on personal super contributions, which can be a
            significant tax saving. Your accountant will help you figure out the
            optimal amount.
          </p>

          <h3>Ignoring the GST exemption nuances</h3>

          <p>
            Not all services provided by allied health professionals are
            automatically GST-free. The service needs to be &ldquo;generally accepted
            in the relevant profession as being necessary for the appropriate
            treatment of the recipient.&rdquo; If you offer wellness programs, group
            fitness classes, or non-clinical services alongside your treatment
            sessions, you may need to charge GST on those. Do not assume
            everything you do is exempt.
          </p>

          <h2>Bottom line</h2>

          <p>
            If you are a solo allied health practitioner starting out in private
            practice, here is what to do:
          </p>

          <ol>
            <li>
              Find an accountant who understands healthcare businesses. Do this
              first.
            </li>
            <li>
              In most cases, start as a sole trader. It is simpler, cheaper,
              and appropriate for your income level when starting out.
            </li>
            <li>
              Register your ABN for free at abr.gov.au. Takes 10 minutes.
            </li>
            <li>
              Register a business name if you are not trading under your own
              name ($44/yr).
            </li>
            <li>
              Discuss GST registration with your accountant. You may benefit
              from voluntary registration even below the $75K threshold.
            </li>
            <li>
              Plan your transition to Pty Ltd with your accountant once your
              income consistently exceeds $120,000 to $150,000.
            </li>
          </ol>

          <p>
            None of this is complicated on its own. The trick is doing it in the
            right order and getting advice before you need it, not after.
          </p>
        </article>

        <div className="mt-16">
          <CTABanner source="business-structure-guide" />
        </div>
      </div>
    </>
  );
}
