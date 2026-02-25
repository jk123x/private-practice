import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema } from "@/components/seo";
import { CTABanner } from "@/components/cta-banner";
import { getGuide } from "@/content/guides";

const guide = getGuide("provider-number")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: "/guides/provider-number" },
};

export default function ProviderNumberGuidePage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guides/provider-number"
      />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-warm texture-noise">
        <div className="container-narrow relative py-16 sm:py-24">
          <div className="hero-headline">
            <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-4">
              Free Guide
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[var(--color-ink)] leading-[1.15]">
              {guide.title}
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="mt-5 text-lg text-[var(--color-ink-light)] leading-relaxed max-w-xl">
              {guide.description}
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-[var(--color-ink-muted)]">
              <span>{guide.readingTime}</span>
              <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--color-border-strong)]" />
              <span>Last updated {guide.lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="container-narrow py-16 sm:py-24">
        <article className="prose prose-guide prose-lg max-w-none">

          <p>
            Your Medicare provider number is the thing that lets your patients claim their rebate.
            Without it, you can treat people privately and charge whatever you like, but anyone
            referred to you under a Chronic Disease Management plan (GPCCMP) has no way to get
            their Medicare rebate for seeing you. For most allied health professionals going into
            private practice, getting this number sorted is one of the first admin tasks on the list.
          </p>

          <p>
            The process is not difficult, but it has a few moving parts that trip people up. This
            guide walks through the whole thing from start to finish: setting up your PRODA account,
            filling in the application, avoiding the common mistakes, and what to do once you have
            your number.
          </p>

          <h2>What a provider number actually is</h2>

          <p>
            A Medicare provider number is a unique identifier that links you (the practitioner) to a
            specific practice location. Services Australia uses it to process Medicare claims for
            your patients. When a patient sees you under a GPCCMP referral and you submit a claim,
            Medicare looks at your provider number to confirm who you are, where the service happened,
            and whether it is eligible for a rebate.
          </p>

          <p>
            The important thing to understand early is that provider numbers are location-specific.
            You do not get one provider number that follows you everywhere. You get one provider
            number per practice address. This catches a lot of people off guard, and it is worth
            understanding properly before you apply. More on this further down.
          </p>

          <p>
            If you only see private-paying clients and have no intention of billing through Medicare,
            you technically do not need a provider number. But in practice, most allied health
            professionals in private practice will want one. A large portion of your referrals will
            come through the CDM pathway, and patients expect to be able to claim their rebate.
            Turning that away limits your client base significantly.
          </p>

          <h2>Step 1: Set up your PRODA account</h2>

          <p>
            Before you can apply for a provider number online, you need a PRODA account. PRODA
            stands for Provider Digital Access, and it is your login to Services Australia&apos;s
            online health professional services. Think of it as the gateway. You cannot access HPOS
            (Health Professional Online Services) without it, and HPOS is where you apply for your
            provider number, manage your details, and eventually submit claims.
          </p>

          <p>
            Here is how to set it up:
          </p>

          <ol>
            <li>
              Go to{" "}
              <a
                href="https://proda.humanservices.gov.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                proda.humanservices.gov.au
              </a>{" "}
              and click &ldquo;Register&rdquo;.
            </li>
            <li>
              You will need to verify your identity. This requires 100 points of ID, similar to
              opening a bank account. Your driver&apos;s licence, passport, or Medicare card all
              count. The system checks your identity documents against government records in real
              time.
            </li>
            <li>
              Create your account with a strong password. PRODA uses multi-factor authentication,
              so you will also set up a second verification method (usually your mobile phone).
            </li>
            <li>
              Once your identity is verified and your account is created, you can link it to HPOS.
              This is done from within PRODA by selecting &ldquo;Link my provider number to HPOS&rdquo;
              (or, if you do not have a provider number yet, you can still access the HPOS
              application form through PRODA).
            </li>
          </ol>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Watch out</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              PRODA identity verification can take a few days if your documents do not match
              government records exactly. Married names, middle names, and outdated addresses are
              common sticking points. Make sure your ID documents are current and consistent before
              you start. Do not leave this to the last minute.
            </p>
          </div>

          <p>
            The PRODA registration process itself is free. There is no cost for the account or for
            accessing HPOS. Once your account is active, you can use it for provider number
            applications, claim submissions, and managing your Medicare details going forward.
          </p>

          <h2>Step 2: Gather what you need before applying</h2>

          <p>
            Before you start the actual provider number application, get these things together.
            Having everything ready avoids the back-and-forth of incomplete applications getting
            rejected and having to resubmit.
          </p>

          <p>
            <strong>Your registration or accreditation number.</strong> For AHPRA-regulated
            professions (physiotherapy, podiatry, chiropractic, osteopathy), this is your AHPRA
            registration number. For exercise physiologists, it is your ESSA (Exercise &amp; Sports
            Science Australia) accreditation number. For dietitians, it is your Dietitians Australia
            (DA) APD accreditation number. The details on your application must match your
            registration records exactly. Mismatches are one of the top reasons applications get
            rejected.
          </p>

          <p>
            <strong>Your confirmed practice address.</strong> This is the physical location where
            you will be seeing patients. You need a real address. A PO Box will not work. If you
            are renting a room in a clinic, you need the full street address of that clinic. If you
            are working from a home office, your home address becomes your practice address (and
            there are implications for that, covered below).
          </p>

          <p>
            <strong>Your bank account details.</strong> Medicare payments go directly into a
            nominated bank account. You will need your BSB and account number. This should be your
            business account, not a personal account. If you have not set up your business banking
            yet, do that first.
          </p>

          <p>
            <strong>Your ABN.</strong> You will need an active Australian Business Number. If you
            have not registered one yet, you can do it at{" "}
            <a href="https://abr.gov.au" target="_blank" rel="noopener noreferrer">
              abr.gov.au
            </a>{" "}
            for free. It is processed instantly in most cases.
          </p>

          <h2>Step 3: Submit your application</h2>

          <p>
            You have two options for submitting your provider number application: online through
            HPOS, or by submitting a paper form (HW093). Online is faster and is what Services
            Australia recommends. The paper form still exists, but it adds processing time and
            introduces more room for errors.
          </p>

          <h3>Applying online (recommended)</h3>

          <ol>
            <li>
              Log in to{" "}
              <a
                href="https://proda.humanservices.gov.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                PRODA
              </a>{" "}
              and navigate to HPOS.
            </li>
            <li>
              Select &ldquo;My details&rdquo; and then &ldquo;Apply for a new provider
              number/stem&rdquo;.
            </li>
            <li>
              Fill in your personal details, registration information, practice address, and bank
              details. Double-check that your name matches your AHPRA (or equivalent) registration
              exactly. If your AHPRA record says &ldquo;Catherine&rdquo; and you put &ldquo;Kate&rdquo;,
              it will be rejected.
            </li>
            <li>
              Review and submit. You will get a confirmation number. Keep this.
            </li>
          </ol>

          <h3>Applying by paper (HW093 form)</h3>

          <p>
            The HW093 form is available on the{" "}
            <a
              href="https://www.servicesaustralia.gov.au/hw093"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services Australia website
            </a>
            . Download it, print it, fill it out by hand or digitally, and post it to the address
            on the form. Paper applications typically take longer to process and are more prone to
            errors (illegible handwriting, missed fields). Unless you have a specific reason to go
            paper, apply online.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Watch out</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              The most common reason applications are rejected is a mismatch between the name or
              details on your application and your AHPRA (or equivalent) registration record. Check
              your registration details on the AHPRA public register before applying. Your name,
              registration number, and profession must match exactly.
            </p>
          </div>

          <h2>Why applications get rejected</h2>

          <p>
            Rejections are frustrating because they add weeks to the process. Each time you
            resubmit, the clock resets. Here are the most common reasons applications are knocked
            back, so you can avoid them the first time around.
          </p>

          <p>
            <strong>Name mismatch with your registration body.</strong> As mentioned above, your
            name needs to match your AHPRA record (or ESSA/DA record) exactly. Middle names
            included, hyphenation included. If your registration says &ldquo;Sarah Jane Smith&rdquo;
            and you put &ldquo;Sarah Smith&rdquo;, that can be enough to cause a rejection.
          </p>

          <p>
            <strong>Wrong or incomplete practice address.</strong> The address needs to be a
            physical practice location, formatted correctly. Unit numbers, suite numbers, and
            building names all matter. If you are renting a room inside a larger clinic, check
            exactly how that address appears in official records.
          </p>

          <p>
            <strong>Applying before you have a confirmed address.</strong> You cannot apply for a
            provider number until you have a confirmed practice location. If you are still
            negotiating a room rental or waiting on a lease, you need to wait. Services Australia
            will not issue a provider number for a location that is not yet confirmed.
          </p>

          <p>
            <strong>Missing information.</strong> Blank fields, skipped sections, or forgetting to
            include supporting documents (if requested). The online form is harder to accidentally
            leave incomplete, which is another reason to apply through HPOS rather than paper.
          </p>

          <p>
            <strong>Registration not yet active.</strong> If your AHPRA registration (or equivalent)
            is not yet showing as active on their public register, your provider number application
            will be rejected. Make sure your registration is fully processed before applying.
          </p>

          <h2>The location-specific trap</h2>

          <p>
            This is the thing that catches the most people out, so it gets its own section.
          </p>

          <p>
            Your provider number is tied to a specific practice address. One address, one provider
            number. If you work at two different clinics, you need two provider numbers. If you work
            at three, you need three. Each one requires a separate application.
          </p>

          <p>
            The provider number itself has two parts: a &ldquo;stem&rdquo; (which identifies you as
            a practitioner and stays the same) and a &ldquo;location suffix&rdquo; (which changes
            for each practice address). So your numbers might look something like 1234567A at one
            clinic and 1234567B at another. Same stem, different suffix.
          </p>

          <p>
            This matters because if you bill Medicare using the wrong provider number for the
            location where the service actually happened, the claim can be rejected or flagged.
            You need to make sure your practice management software is set up to use the correct
            provider number for each location.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Watch out</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              If you do home visits, you need a separate arrangement. Home visits are billed under a
              different provider number category. If you plan to offer mobile or home-based services
              alongside your clinic work, talk to Services Australia about the right setup before you
              start billing. Getting this wrong can create compliance problems down the track.
            </p>
          </div>

          <p>
            When you move practices or change locations, you need to apply for a new provider number
            at the new address. Your old provider number becomes inactive once you stop practising
            at that location. Do not keep billing under an old provider number at an address where
            you no longer work.
          </p>

          <h2>The home address visibility issue</h2>

          <p>
            If you are starting out and your practice address is your home (which is common for
            telehealth-only practitioners or those just getting started), there is something you
            need to know.
          </p>

          <p>
            Your practice address is listed on the Services Australia provider directory. This
            directory is publicly searchable. That means if your practice address is your home
            address, your home address becomes publicly visible. Anyone can look it up.
          </p>

          <p>
            You can request to have your practice address withheld from the public directory, but
            you need to actively ask for this. It is not the default. When you submit your provider
            number application, there is an option to request that your practice address not be
            displayed publicly. If you missed it on the application, you can contact Services
            Australia afterwards to request it.
          </p>

          <p>
            This matters for personal safety and privacy, especially if you are a sole practitioner
            working from home. It also matters if you are doing telehealth from your home and do not
            want clients knowing your residential address. Do not skip this step.
          </p>

          <div className="not-prose my-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">Watch out</p>
            <p className="text-sm text-[var(--color-ink-light)]">
              If you are working from home and did not request to have your address withheld, your
              home address is likely already visible on the provider directory. Log in to HPOS and
              check your details, or call Services Australia on 132 150 to confirm your directory
              listing and request a change if needed.
            </p>
          </div>

          <h2>How long it takes</h2>

          <p>
            Processing times vary, but here is what to expect as of early 2026:
          </p>

          <ul>
            <li>
              <strong>Online applications (via HPOS):</strong> Typically 2 to 4 weeks. Some are
              processed faster, but do not count on it. Plan for the full 4 weeks.
            </li>
            <li>
              <strong>Paper applications (HW093):</strong> Longer. The form has to be received,
              manually entered, and processed. Allow 4 to 6 weeks minimum, sometimes more.
            </li>
          </ul>

          <p>
            Once your provider number is approved and issued, there is an additional 2-business-day
            wait before it becomes active in the Medicare system. That means you cannot submit claims
            on the day you receive your number. You need to wait for it to propagate through the
            system.
          </p>

          <p>
            Factor all of this into your timeline. If you are planning to start seeing CDM patients
            on a specific date, work backwards from there. You want your PRODA account set up, your
            application submitted, and your number approved and active before your first patient
            walks in the door. Starting the process at least 6 weeks before your planned launch date
            gives you a comfortable buffer.
          </p>

          <p>
            If your application is taking longer than expected, you can check the status in HPOS
            under &ldquo;My details&rdquo;. If it has been more than 4 weeks for an online
            application, contact Services Australia on 132 150 (select the provider enquiries
            option) to follow up.
          </p>

          <h2>After you get your number</h2>

          <p>
            Getting the provider number is the milestone, but there are a few things to sort out
            before you start billing.
          </p>

          <h3>Set up HPOS properly</h3>

          <p>
            Now that you have a provider number, make sure your HPOS access is fully configured.
            HPOS is where you can submit claims manually, check patient eligibility, view your
            claiming history, and manage your provider details. Spend 30 minutes exploring it so
            you are not fumbling around when you need it.
          </p>

          <h3>Connect your practice management software</h3>

          <p>
            If you are using practice management software (Halaxy, Cliniko, Nookal, or similar), you
            need to enter your provider number into the system so it can submit Medicare claims on
            your behalf. Each software handles this slightly differently, but it is usually
            under your practitioner profile or Medicare settings. Your software provider will have
            documentation for this.
          </p>

          <p>
            Make sure you enter the correct provider number for the correct location. If you have
            multiple provider numbers for multiple clinics, each location in your software needs the
            corresponding number.
          </p>

          <h3>Understand how claims work</h3>

          <p>
            There are two main ways to submit Medicare claims for CDM patients:
          </p>

          <ul>
            <li>
              <strong>Online claiming through your practice management software.</strong> This is the
              most common approach. Your software submits the claim to Medicare electronically, and
              the rebate goes directly to the patient (or to you, if you are bulk billing). This
              happens in close to real time.
            </li>
            <li>
              <strong>Manual claiming through HPOS.</strong> You can submit claims individually
              through the HPOS portal. This is slower and more manual, but it works as a backup if
              your software has issues or you are just getting started and have not set up electronic
              claiming yet.
            </li>
          </ul>

          <p>
            For a deeper walkthrough of how CDM billing works from the clinical side (referrals,
            the 5-session cap, item numbers by profession), see the{" "}
            <Link href="/guides/cdm-billing">
              Medicare CDM billing guide
            </Link>
            .
          </p>

          <h3>Keep your details current</h3>

          <p>
            Any time your details change (practice address, bank account, name change, registration
            status), you need to update them in HPOS. Outdated details can cause claim rejections
            or payment delays. If you move to a new practice address, remember that you need a new
            provider number for the new location.
          </p>

          <h2>Quick reference checklist</h2>

          <p>
            Here is the full process condensed into a checklist you can work through:
          </p>

          <ol>
            <li>
              Confirm your AHPRA registration (or ESSA/DA accreditation) is active and your
              details are correct on the public register.
            </li>
            <li>
              Confirm your practice address. You need a physical location, not a PO Box.
            </li>
            <li>
              Register your ABN at{" "}
              <a href="https://abr.gov.au" target="_blank" rel="noopener noreferrer">
                abr.gov.au
              </a>{" "}
              if you have not already.
            </li>
            <li>
              Set up your business bank account if you have not already. You will need the BSB and
              account number.
            </li>
            <li>
              Create your PRODA account at{" "}
              <a
                href="https://proda.humanservices.gov.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                proda.humanservices.gov.au
              </a>
              . Allow a few days for identity verification.
            </li>
            <li>
              Apply for your provider number through HPOS (via PRODA). Use the online application,
              not the paper form.
            </li>
            <li>
              If your practice address is your home, request that your address be withheld from the
              public provider directory.
            </li>
            <li>
              Wait for approval (2 to 4 weeks for online, longer for paper).
            </li>
            <li>
              Once approved, wait 2 business days for the number to become active in the Medicare
              system.
            </li>
            <li>
              Enter your provider number into your practice management software.
            </li>
            <li>
              Test a claim submission (either through your software or manually via HPOS) to confirm
              everything is connected and working.
            </li>
            <li>
              If you work at multiple locations, repeat the application for each practice address.
            </li>
          </ol>

          <h2>Common questions</h2>

          <h3>Can I apply before I have a practice address?</h3>

          <p>
            No. You need a confirmed physical practice address to apply. If you are still looking for
            a room or finalising a lease, wait until that is locked in. Applying with a tentative
            address will result in a rejection.
          </p>

          <h3>What if I only do telehealth?</h3>

          <p>
            You still need a provider number, and it still needs to be tied to a physical address.
            For telehealth-only practitioners, this is typically your home address or a registered
            business address. The telehealth service is billed under the provider number linked to
            the address from where you are delivering the service. If that is your home, consider
            requesting your address be withheld from the public directory.
          </p>

          <h3>Do I need a separate provider number for telehealth and in-person?</h3>

          <p>
            If you deliver both telehealth and in-person services from the same address, one provider
            number covers both. You only need a separate provider number if the physical addresses
            are different.
          </p>

          <h3>How do I check my application status?</h3>

          <p>
            Log in to PRODA, go to HPOS, and check under &ldquo;My details&rdquo;. Your application
            status will be shown there. If it has been more than 4 weeks with no update, call
            Services Australia on 132 150.
          </p>

          <h3>What happens if I change clinics?</h3>

          <p>
            You need a new provider number for the new location. Apply through HPOS the same way you
            did the first time, with the new practice address. Your old provider number becomes
            inactive once you stop practising at that address. Notify Services Australia when you
            leave a location so the old number is deactivated properly.
          </p>

          <p className="mt-12 text-base text-[var(--color-ink-muted)] border-t border-[var(--color-border)] pt-8">
            This guide covers the provider number process for allied health professionals billing
            through the Medicare CDM pathway. For profession-specific Medicare item numbers and
            rebate amounts, see the{" "}
            <Link href="/guides/cdm-billing">
              CDM billing guide
            </Link>
            . For a full breakdown of what it costs to set up a practice, see the{" "}
            <Link href="/guides/practice-costs">
              practice costs guide
            </Link>
            .
          </p>
        </article>
      </div>

      <CTABanner source="provider-number-guide" />
    </>
  );
}
