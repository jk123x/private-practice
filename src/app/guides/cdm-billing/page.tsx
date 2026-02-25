import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "@/components/seo";
import { CTABanner } from "@/components/cta-banner";
import { getGuide } from "@/content/guides";

const guide = getGuide("cdm-billing")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: "/guides/cdm-billing" },
};

export default function CDMBillingGuidePage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guides/cdm-billing"
        datePublished="2026-02-01"
        dateModified="2026-02-26"
      />

      <div className="container-narrow py-16 sm:py-24">
        {/* Hero */}
        <header className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-sm text-[var(--color-ink-muted)] mb-6">
            <Link
              href="/"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span>Guides</span>
            <span>/</span>
            <span className="text-[var(--color-ink-light)]">
              {guide.shortTitle}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[var(--color-ink)] leading-[1.15]">
            {guide.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-ink-muted)]">
            <span>{guide.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
            <span>Last updated {guide.lastUpdated}</span>
          </div>
          <p className="mt-6 text-lg text-[var(--color-ink-light)] leading-relaxed max-w-2xl">
            {guide.description}
          </p>
        </header>

        {/* Article content */}
        <article className="prose prose-guide prose-lg max-w-none">
          {/* ============================== */}
          {/* TABLE OF CONTENTS */}
          {/* ============================== */}
          <div className="not-prose my-8 p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border)] rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-ink)] mb-3">
              In this guide
            </p>
            <ol className="space-y-1.5 text-sm text-[var(--color-ink-light)]">
              <li>
                <a href="#what-changed" className="hover:text-[var(--color-primary)] transition-colors">
                  1. What changed in July 2025
                </a>
              </li>
              <li>
                <a href="#how-cdm-billing-works" className="hover:text-[var(--color-primary)] transition-colors">
                  2. How CDM billing works from your side
                </a>
              </li>
              <li>
                <a href="#five-session-cap" className="hover:text-[var(--color-primary)] transition-colors">
                  3. The 5-session shared cap
                </a>
              </li>
              <li>
                <a href="#referral-requirements" className="hover:text-[var(--color-primary)] transition-colors">
                  4. Referral requirements under the new system
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="hover:text-[var(--color-primary)] transition-colors">
                  5. Common billing mistakes
                </a>
              </li>
              <li>
                <a href="#transition-arrangements" className="hover:text-[var(--color-primary)] transition-colors">
                  6. Transition arrangements (old plans)
                </a>
              </li>
              <li>
                <a href="#item-numbers" className="hover:text-[var(--color-primary)] transition-colors">
                  7. Key item numbers by profession
                </a>
              </li>
            </ol>
          </div>

          <p>
            If you&apos;re an allied health professional in private practice, Medicare CDM (Chronic Disease Management) billing
            is probably the single most important revenue pathway you need to understand. It&apos;s how your patients access
            Medicare-subsidised sessions with you, and getting it right is the difference between a smooth claims process
            and rejected claims, confused patients, and money left on the table.
          </p>

          <p>
            The system changed in July 2025. If you learned about CDM billing from a colleague, a uni lecture, or an
            article written before mid-2025, some of what you know is now wrong. This guide covers how the new system
            works, what you need from referring GPs, and the mistakes that trip people up most often.
          </p>

          {/* ============================== */}
          {/* SECTION 1: WHAT CHANGED */}
          {/* ============================== */}
          <h2 id="what-changed">1. What changed in July 2025</h2>

          <p>
            Before July 2025, the CDM pathway worked like this: a GP would prepare two separate documents for
            a patient with a chronic condition. First, a <strong>GPMP</strong> (GP Management Plan), which was
            the GP&apos;s plan for managing the patient&apos;s condition. Then a <strong>TCA</strong> (Team Care
            Arrangement), which was the document that brought allied health providers into the picture. Both
            had to exist before you could see the patient under Medicare.
          </p>

          <p>
            From 1 July 2025, those two documents were replaced by a single one: the <strong>GPCCMP</strong>,
            which stands for GP Chronic Condition Management Plan. Instead of the GP preparing a GPMP and then
            a separate TCA, they now prepare one plan that covers both the management strategy and the team
            care component.
          </p>

          <h3>Why this matters for you</h3>

          <p>
            The day-to-day impact on allied health providers is modest but important to understand. The referral
            pathway is simpler. There&apos;s one plan instead of two. But the rules around that plan are slightly
            different, and if you&apos;re still talking to GPs about &ldquo;TCAs&rdquo; or your intake forms
            reference the old system, it creates confusion and can slow down the referral process.
          </p>

          <p>
            The core mechanics are the same: GP identifies a chronic condition, creates a plan, refers the
            patient to allied health, you provide services and bill Medicare. But the paperwork behind it has
            been streamlined, and the item numbers the GP uses have changed. Your item numbers (the ones you
            bill as an allied health provider) remain the same.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Important</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Your allied health item numbers have not changed. The items that changed are the ones GPs use to bill
              for preparing the plan. If you see articles saying &ldquo;CDM item numbers have changed&rdquo;, they&apos;re
              talking about the GP side. Your billing codes for providing allied health services under CDM remain
              exactly the same as before.
            </p>
          </div>

          <h3>The key terminology shift</h3>

          <p>
            Get used to saying <strong>GPCCMP</strong> instead of &ldquo;GPMP and TCA&rdquo;. When you&apos;re
            talking to GPs, when you&apos;re explaining the process to patients, and on your intake forms and
            website copy. The old terms aren&apos;t wrong (GPs and practice managers will know what you mean),
            but using the current terminology signals that you&apos;re across the changes and makes the
            administrative process smoother for everyone.
          </p>

          {/* ============================== */}
          {/* SECTION 2: HOW CDM BILLING WORKS */}
          {/* ============================== */}
          <h2 id="how-cdm-billing-works">2. How CDM billing works from your side</h2>

          <p>
            Let&apos;s walk through the whole process from start to finish, from your perspective as the allied
            health provider.
          </p>

          <h3>Step 1: The GP prepares a GPCCMP</h3>

          <p>
            A patient visits their GP with a chronic or terminal medical condition. The GP determines that the
            patient would benefit from a multidisciplinary approach (meaning input from more than one type of
            health professional). The GP prepares a GPCCMP. This plan outlines the patient&apos;s condition,
            treatment goals, and which allied health services the GP is recommending.
          </p>

          <p>
            You have no involvement in this step. It happens between the GP and the patient. But it&apos;s the
            foundation that makes everything else possible. Without a valid GPCCMP in place, there is no
            Medicare-subsidised pathway to you.
          </p>

          <h3>Step 2: The GP writes a referral to you</h3>

          <p>
            Once the GPCCMP is in place, the GP provides a written referral to the specific allied health
            profession they&apos;re recommending. The referral needs to name the profession (e.g., physiotherapy,
            podiatry, exercise physiology) and should include relevant clinical information to help you provide
            appropriate treatment.
          </p>

          <p>
            The referral is separate from the GPCCMP itself. The plan is the GP&apos;s overarching document.
            The referral is what the GP gives the patient (or sends to you directly) to kick off treatment.
          </p>

          <h3>Step 3: The patient books in with you</h3>

          <p>
            The patient contacts your practice with their referral. At this point, you need to confirm a few
            things before you provide treatment:
          </p>

          <ul>
            <li>The patient has a valid GPCCMP in place (the referral should reference this)</li>
            <li>The referral names your specific profession</li>
            <li>You know how many of the patient&apos;s 5 allied health sessions have already been used this calendar year</li>
          </ul>

          <p>
            That last point is critical and we&apos;ll cover it in detail in the next section.
          </p>

          <h3>Step 4: You provide the service and bill Medicare</h3>

          <p>
            You see the patient for a minimum of 20 minutes (this is a billing requirement, not a suggestion).
            After providing the service, you bill Medicare using your profession-specific CDM item number. You
            can bill online through HPOS (Health Professional Online Services, accessed via your PRODA account)
            or through your practice management software if it supports Medicare claiming.
          </p>

          <p>
            The patient receives the Medicare rebate (either as a bulk-billed service where you accept the
            rebate as full payment, or as a privately-billed service where they pay your fee upfront and
            receive the rebate back from Medicare). Most allied health professionals in private practice charge
            a gap fee on top of the Medicare rebate.
          </p>

          <h3>Step 5: Reports and communication</h3>

          <p>
            After providing treatment, you&apos;re expected to communicate with the referring GP about the
            patient&apos;s progress. This isn&apos;t optional. It&apos;s a requirement of the CDM pathway, and
            it&apos;s also good practice for maintaining your referral relationships.
          </p>

          <p>
            Send a brief report to the GP after the initial assessment and then at appropriate intervals or at
            discharge. This keeps the GP informed, supports any future GPCCMP reviews, and makes it more likely
            the GP will continue referring patients to you. The report doesn&apos;t need to be lengthy. A
            one-page summary covering what you found, what you did, and what you recommend is enough.
          </p>

          <p>
            This matters because the communication loop is what keeps the CDM pathway working. GPs who never
            hear back from allied health providers stop referring. GPs who get clear, concise reports refer
            more. It&apos;s also an audit requirement. If Medicare reviews your claims, they&apos;ll expect to
            see evidence that you communicated with the referring GP.
          </p>

          {/* ============================== */}
          {/* SECTION 3: THE 5-SESSION CAP */}
          {/* ============================== */}
          <h2 id="five-session-cap">3. The 5-session shared cap</h2>

          <p>
            This is where most of the confusion lives, and it&apos;s the number one thing to get right.
          </p>

          <p>
            Under a GPCCMP, each patient is entitled to a maximum of <strong>5 Medicare-subsidised allied health
            services per calendar year</strong>. That number is firm. Not 5 per provider, not 5 per profession.
            Five total, shared across every allied health profession the patient sees under CDM.
          </p>

          <h3>What &ldquo;shared&rdquo; means in practice</h3>

          <p>
            If a patient has a GPCCMP and their GP refers them to both a physiotherapist and a podiatrist, those
            two providers are drawing from the same pool of 5 sessions. If the patient sees the physio 3 times,
            they have 2 sessions remaining for any allied health provider under CDM for the rest of that calendar
            year. Not 2 for podiatry and 5 for physio. Two total.
          </p>

          <p>
            This catches people off guard regularly. New practitioners often assume each profession gets its own
            allocation. They don&apos;t. It&apos;s a shared cap.
          </p>

          <h3>Worked example</h3>

          <div className="not-prose my-8 p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border)] rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-ink)] mb-3">
              Example: Sarah&apos;s CDM sessions in 2026
            </p>
            <div className="space-y-2 text-sm text-[var(--color-ink-light)]">
              <p>
                Sarah has type 2 diabetes and her GP prepares a GPCCMP in February 2026. The GP refers her
                to a podiatrist and a dietitian.
              </p>
              <ul className="list-none space-y-1.5 mt-3 mb-3 pl-0">
                <li><span className="font-medium text-[var(--color-ink)]">March:</span> Podiatrist appointment 1. Sessions used: 1 of 5.</li>
                <li><span className="font-medium text-[var(--color-ink)]">April:</span> Dietitian appointment 1. Sessions used: 2 of 5.</li>
                <li><span className="font-medium text-[var(--color-ink)]">May:</span> Podiatrist appointment 2. Sessions used: 3 of 5.</li>
                <li><span className="font-medium text-[var(--color-ink)]">June:</span> Dietitian appointment 2. Sessions used: 4 of 5.</li>
                <li><span className="font-medium text-[var(--color-ink)]">August:</span> Podiatrist appointment 3. Sessions used: 5 of 5.</li>
              </ul>
              <p>
                Sarah has now used all 5 sessions. If her GP also wanted to refer her to an exercise physiologist,
                there are no Medicare-subsidised sessions remaining. Sarah could still see an EP, but she&apos;d
                pay the full fee with no Medicare rebate. Or she could wait until January 2027 when the cap resets.
              </p>
            </div>
          </div>

          <h3>The calendar year reset</h3>

          <p>
            The 5-session cap resets on 1 January each year. Not on the anniversary of the plan, not when the
            GPCCMP is reviewed. 1 January. So a patient who uses all 5 sessions by March gets nothing more
            until the following January. A patient who doesn&apos;t start treatment until November still only
            has 5 sessions for the remainder of that year.
          </p>

          <p>
            This has practical implications for how you schedule and advise patients. If someone comes to you
            in October with 5 sessions available, you might discuss using 2-3 sessions before December and
            then continuing in January when the cap resets. That gives them more sessions over a shorter
            continuous period. Patients appreciate this kind of guidance because most of them have no idea how
            the cap works.
          </p>

          <h3>How to check remaining sessions</h3>

          <p>
            You can check how many CDM sessions a patient has used through HPOS (Health Professional Online
            Services). Log in with your PRODA credentials and look up the patient&apos;s claiming history. Your
            practice management software may also be able to query this, depending on which platform you use.
          </p>

          <p>
            Get into the habit of checking before the first appointment. It takes 30 seconds and prevents the
            awkward conversation where you tell a patient after treatment that Medicare won&apos;t cover the
            session because their 5 visits are already used up. That conversation damages trust, even when
            it&apos;s not your fault.
          </p>

          {/* ============================== */}
          {/* SECTION 4: REFERRAL REQUIREMENTS */}
          {/* ============================== */}
          <h2 id="referral-requirements">4. Referral requirements under the new system</h2>

          <p>
            The referral is the document that connects you to the patient&apos;s GPCCMP. Without it, you
            can&apos;t bill Medicare. Here&apos;s what needs to be in place.
          </p>

          <h3>The GPCCMP must come first</h3>

          <p>
            The GP must have prepared a GPCCMP before writing the referral. This seems obvious, but it trips
            people up in fast-moving clinics where a GP might hand a patient a referral letter and say
            &ldquo;I&apos;ll do the plan later.&rdquo; If the plan isn&apos;t done at the time you provide
            the service, the claim is not valid. The GPCCMP has to exist before you treat the patient under
            CDM billing.
          </p>

          <h3>What the referral must include</h3>

          <p>
            The referral needs to be in writing (a letter, a printed form, or an electronic referral from the
            GP&apos;s clinical software). It should include:
          </p>

          <ul>
            <li>The patient&apos;s name and date of birth</li>
            <li>The specific allied health profession being referred to (e.g., &ldquo;physiotherapy&rdquo;, not &ldquo;allied health&rdquo;)</li>
            <li>The relevant clinical information (diagnosis, reason for referral)</li>
            <li>That the referral is made under a GPCCMP</li>
          </ul>

          <p>
            The referral must name the profession, not a specific practitioner. A GP can refer to
            &ldquo;podiatry&rdquo; without naming a specific podiatrist. The patient then chooses which
            podiatrist to see. However, if a GP writes a referral to &ldquo;allied health&rdquo; without
            specifying the profession, that&apos;s not sufficient. You need profession-specific referrals.
          </p>

          <h3>How long referrals last</h3>

          <p>
            Under the GPCCMP system, a referral is valid for the duration of the calendar year in which
            it was written, or until the GPCCMP is reviewed or replaced, whichever comes first. In practical
            terms, for most patients, you&apos;re looking at a referral that covers the current calendar year.
          </p>

          <p>
            When the calendar year ticks over and the patient&apos;s session cap resets, they&apos;ll need a
            new referral if they want to continue seeing you under CDM. This usually coincides with the GP
            reviewing or renewing the GPCCMP, so it tends to happen naturally. But don&apos;t assume a
            referral from last year is still valid. Check.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Important</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Keep a copy of every referral. If Medicare audits your claims, you need to produce the referral
              that was in place at the time of each service. Store them in the patient&apos;s file, whether
              that&apos;s your practice management software or a physical file. Don&apos;t rely on the patient
              to keep their copy.
            </p>
          </div>

          <h3>Can a patient self-refer?</h3>

          <p>
            No. CDM billing requires a GP referral under a GPCCMP. Patients cannot self-refer for
            Medicare-subsidised allied health services through this pathway. They can, of course, see you as a
            private patient without a referral, but there will be no Medicare rebate under CDM. Some
            professions (like physiotherapy) allow self-referral for private services, but the CDM pathway
            always requires the GP to initiate it.
          </p>

          {/* ============================== */}
          {/* SECTION 5: COMMON MISTAKES */}
          {/* ============================== */}
          <h2 id="common-mistakes">5. Common billing mistakes</h2>

          <p>
            These are the errors that come up again and again, particularly for practitioners in their first
            year or two of private practice. Most of them are straightforward to avoid once you know about them.
          </p>

          <h3>Using the wrong item number</h3>

          <p>
            Each allied health profession has its own CDM item number (see the{" "}
            <a href="#item-numbers">table below</a>). A physiotherapist must use the physiotherapy item number,
            not the generic or another profession&apos;s code. This sounds basic, but it happens. Particularly
            when practitioners are setting up their billing software for the first time and select the wrong
            code from a dropdown list. A single wrong digit means a rejected claim.
          </p>

          <p>
            Double-check your item number when you first set up your practice management software, and again
            after any software updates. Some systems auto-populate item numbers, and if the default is wrong,
            every claim you submit will be wrong.
          </p>

          <h3>Billing without a valid GPCCMP in place</h3>

          <p>
            You see a patient, they tell you their GP has &ldquo;done the paperwork&rdquo;, and you bill
            Medicare. But if the GPCCMP wasn&apos;t actually completed before you provided the service, that
            claim is invalid. Medicare can (and does) audit these. The fix is simple: always sight the referral
            before the first appointment, and confirm it references a GPCCMP.
          </p>

          <p>
            If a patient arrives without a referral, you have two options. See them as a private patient (full
            fee, no Medicare claim), or reschedule once they have the referral sorted. Don&apos;t bill Medicare
            and hope it works out. It won&apos;t, and if it gets flagged in an audit, you&apos;ll need to repay
            the claim.
          </p>

          <h3>Not checking remaining sessions</h3>

          <p>
            You treat the patient, submit the claim, and it gets rejected because they&apos;ve already used
            their 5 sessions with other providers. Now you have an awkward conversation about payment.
            The patient is frustrated because they didn&apos;t know. You&apos;re frustrated because you could
            have prevented it.
          </p>

          <p>
            Build the session check into your intake process. Before the first appointment, check HPOS or ask
            the patient how many CDM sessions they&apos;ve used this year. Even a quick &ldquo;Have you seen any
            other allied health professionals under this plan?&rdquo; at booking gives you a rough idea.
          </p>

          <h3>Not understanding the calendar year reset</h3>

          <p>
            Some practitioners think the 5-session cap runs from the date of the GPCCMP, not the calendar year.
            Others think it resets when the plan is reviewed. Neither is correct. It resets on 1 January, full
            stop. If you&apos;re advising patients about their remaining sessions, make sure you&apos;re
            counting from the right date.
          </p>

          <h3>Sessions under 20 minutes</h3>

          <p>
            The minimum service time for a CDM allied health consultation is 20 minutes. That&apos;s face-to-face
            clinical time with the patient, not including admin, notes, or waiting. If you bill for a session
            that was under 20 minutes, the claim is technically invalid.
          </p>

          <p>
            This matters in a couple of scenarios. Quick follow-up appointments where the patient&apos;s issue
            is straightforward and you&apos;re done in 12 minutes. Appointments that run short because the
            patient arrives late. In both cases, you either need to extend the session to meet the 20-minute
            threshold or bill it as a private consultation instead of a CDM item.
          </p>

          <p>
            Keep time records. Note the start and end time of each CDM consultation in your clinical notes.
            If you&apos;re ever audited, this is what Medicare will look at.
          </p>

          <h3>Forgetting to communicate with the GP</h3>

          <p>
            This isn&apos;t a billing error per se, but it&apos;s an audit risk and a referral relationship
            killer. The CDM pathway expects you to report back to the referring GP. If you see a patient for
            5 sessions and the GP never hears from you, they&apos;ll remember. And not in a good way.
          </p>

          {/* ============================== */}
          {/* SECTION 6: TRANSITION ARRANGEMENTS */}
          {/* ============================== */}
          <h2 id="transition-arrangements">6. Transition arrangements (old plans)</h2>

          <p>
            If your patients had GPMPs and TCAs prepared before July 2025, you don&apos;t need to panic. The
            government built in transition arrangements so that existing plans don&apos;t suddenly become
            invalid overnight.
          </p>

          <h3>Plans created before 1 July 2025</h3>

          <p>
            GPMPs and TCAs that were in place before the changeover remain valid. A TCA created under the old
            system can still be used to access Medicare-subsidised allied health services. You can continue
            to bill against these old plans as normal.
          </p>

          <h3>How long old plans last</h3>

          <p>
            A TCA created before 1 July 2025 remains valid until whichever of these comes first:
          </p>

          <ul>
            <li>The existing GPMP is due for review (GPMPs were typically reviewed every 6 months to 2 years, depending on the patient&apos;s condition)</li>
            <li>30 June 2027 (the hard cutoff date for old-system plans)</li>
          </ul>

          <p>
            So the longest an old-system TCA can remain in play is until 30 June 2027. After that date, every
            patient who wants Medicare-subsidised allied health services through CDM will need to be on a
            GPCCMP.
          </p>

          <h3>What happens at review or expiry</h3>

          <p>
            When the old GPMP comes up for review, the GP will prepare a GPCCMP instead of renewing the GPMP
            and TCA. From that point, the patient is on the new system. The referral process and session cap
            work as described in this guide.
          </p>

          <p>
            In practical terms, most patients will transition to the GPCCMP system naturally over the course of
            2025 and 2026 as their existing plans come up for review. By mid-2027, everyone will be on the new
            system.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Important</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              If you have patients who are still on old-system TCAs, it&apos;s worth flagging to them
              (and their GP) that the plan will need to move to a GPCCMP at some point before June 2027.
              Don&apos;t wait until the last minute. Proactive communication helps avoid gaps in coverage.
            </p>
          </div>

          <h3>Mixed scenarios</h3>

          <p>
            During the transition period (now through June 2027), you may have some patients on old TCAs and
            others on new GPCCMPs. The billing process from your side is the same. Your item numbers are
            identical regardless of whether the underlying plan is a TCA or a GPCCMP. The 5-session shared cap
            and the calendar year reset apply in both cases. The difference is purely in the GP&apos;s
            paperwork, not yours.
          </p>

          {/* ============================== */}
          {/* SECTION 7: ITEM NUMBERS TABLE */}
          {/* ============================== */}
          <h2 id="item-numbers">7. Key item numbers by profession</h2>

          <p>
            These are the main CDM item numbers you use as an allied health provider when billing Medicare for
            services provided under a GPCCMP (or a transitional TCA). Each profession has its own specific item
            number. You cannot use another profession&apos;s code, even if you hold dual registration.
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--color-border-strong)]">
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">
                    Profession
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">
                    Item Number
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-[var(--color-ink)]">
                    Description
                  </th>
                  <th className="text-right py-3 font-semibold text-[var(--color-ink)]">
                    Rebate (approx.)
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-ink-light)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Physiotherapy</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10960</td>
                  <td className="py-3 pr-4">CDM allied health service, physiotherapy</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Podiatry</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10962</td>
                  <td className="py-3 pr-4">CDM allied health service, podiatry</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Exercise Physiology</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10953</td>
                  <td className="py-3 pr-4">CDM allied health service, exercise physiology</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Dietetics</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10954</td>
                  <td className="py-3 pr-4">CDM allied health service, dietetics</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Speech Pathology</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10970</td>
                  <td className="py-3 pr-4">CDM allied health service, speech pathology</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Occupational Therapy</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10958</td>
                  <td className="py-3 pr-4">CDM allied health service, occupational therapy</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Chiropractic</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10964</td>
                  <td className="py-3 pr-4">CDM allied health service, chiropractic</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[var(--color-ink)]">Osteopathy</td>
                  <td className="py-3 pr-4 font-mono text-[var(--color-accent-dark)]">10966</td>
                  <td className="py-3 pr-4">CDM allied health service, osteopathy</td>
                  <td className="py-3 text-right">$55.10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Important</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              Rebate amounts are updated periodically by the Department of Health. The figures above are
              approximate and current as of early 2026. Always check the{" "}
              <a
                href="http://www.mbsonline.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[var(--color-accent-dark)] hover:text-[var(--color-accent)]"
              >
                MBS Online schedule
              </a>{" "}
              for the latest rebate amounts. The item numbers themselves are stable and rarely change.
            </p>
          </div>

          <h3>When to use these item numbers</h3>

          <p>
            You bill one of these item numbers each time you provide a CDM allied health service to a patient
            who has a valid GPCCMP (or transitional TCA) and a current referral. The service must be at least
            20 minutes of face-to-face clinical time. Each claim counts as one of the patient&apos;s 5 annual
            sessions.
          </p>

          <p>
            If you provide services outside the CDM pathway (e.g., private patients without a GPCCMP, WorkCover,
            NDIS, DVA), you&apos;ll use different item numbers or billing codes specific to those schemes. The
            item numbers listed above are only for CDM Medicare billing.
          </p>

          <h3>Initial vs subsequent consultations</h3>

          <p>
            Unlike some other Medicare pathways, CDM allied health billing uses a single item number per
            profession for all consultations. There is no separate item number for initial assessments vs
            follow-up appointments. Whether it&apos;s the patient&apos;s first visit or their fifth, you use
            the same code. The rebate amount is the same for each session.
          </p>

          {/* ============================== */}
          {/* WRAP-UP */}
          {/* ============================== */}
          <h2>Putting it all together</h2>

          <p>
            CDM billing is not complicated once you understand the structure. A GP identifies a chronic
            condition, prepares a GPCCMP, and refers the patient to you. You provide the service (minimum 20
            minutes), bill Medicare with your profession-specific item number, and communicate with the GP
            about the patient&apos;s progress. The patient gets up to 5 sessions per calendar year, shared
            across all allied health providers.
          </p>

          <p>
            The GPCCMP change in July 2025 simplified the GP&apos;s side of the process without changing much
            on yours. Your item numbers are the same, the 5-session cap is the same, and the referral
            requirements are broadly similar. The main thing that changed is the terminology and the
            underlying plan structure.
          </p>

          <p>
            Where practitioners get into trouble is the operational detail: not checking remaining sessions,
            not sighting the referral before treatment, billing sessions under 20 minutes, or losing track of
            the calendar year reset. These are process issues, not knowledge gaps. Build the checks into your
            intake and scheduling workflow, and they become automatic.
          </p>

          <p>
            If you&apos;re setting up a new practice or reviewing your existing billing processes, here&apos;s
            a quick checklist:
          </p>

          <ol>
            <li>Confirm your item number is correct in your practice management software</li>
            <li>Add a referral check to your intake process (sight the referral, confirm GPCCMP, file a copy)</li>
            <li>Check remaining sessions via HPOS before the first CDM appointment</li>
            <li>Record start and end times for every CDM consultation in your notes</li>
            <li>Send a report to the referring GP after the initial assessment and at discharge</li>
            <li>Update your forms and website to reference GPCCMP instead of GPMP/TCA</li>
            <li>Know the transition deadline: old TCAs expire by 30 June 2027 at the latest</li>
          </ol>

          <p>
            Get these right and CDM billing becomes a reliable, predictable part of your revenue. Get them
            wrong and you&apos;re chasing rejected claims, dealing with compliance issues, and leaving money
            on the table with every missed session.
          </p>

          <p>
            This guide covers the fundamentals. For profession-specific detail including your exact rebate
            amount, registration body requirements, and software recommendations, check out the{" "}
            <Link href="/">profession-specific pages</Link> on this site.
          </p>
        </article>
      </div>

      {/* CTA */}
      <CTABanner source="cdm-billing-guide" />
    </>
  );
}
