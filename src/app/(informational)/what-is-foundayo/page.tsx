import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrustSignals from "@/components/trust/TrustSignals";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";
import {
  FOUNDAYO_FAQS,
  whatIsFoundayoJsonLd,
} from "@/lib/seo/foundayo-json-ld";

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/what-is-foundayo",
    title: "Foundayo UK: What Is the Orforglipron Weight Loss Pill?",
    metaDescription:
      "Foundayo UK explained. See what orforglipron is, how the once daily weight loss pill works and what to know before you ask a prescriber.",
    openGraphTitle: "Foundayo UK: What Is the Orforglipron Pill?",
    openGraphDescription:
      "A plain English UK guide to Foundayo (orforglipron): what it is, how it works, who can take it and the side effects.",
    imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
    imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
  }),
  title: {
    absolute: "Foundayo UK: What Is the Orforglipron Weight Loss Pill?",
  },
};

const linkClass =
  "inline-flex items-center gap-1 font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950";
const h2Class =
  "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
const h3Class =
  "text-lg font-bold text-slate-900 sm:text-xl";

function TwoColTable({
  head,
  rows,
}: {
  head: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[460px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="w-2/5 px-4 py-3 font-semibold text-slate-900">
              {head[0]}
            </th>
            <th className="w-3/5 px-4 py-3 font-semibold text-slate-900">
              {head[1]}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td className="px-4 py-3 font-medium text-slate-900">{a}</td>
              <td className="px-4 py-3">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WhatIsFoundayoPage() {
  const jsonLd = whatIsFoundayoJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        pageName="What Is Foundayo"
        pagePath="/what-is-foundayo"
      />

      <article className="w-full">
        {/* Section 1: Hero */}
        <section
          id="what-is-foundayo"
          className="scroll-mt-28 w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7f5] to-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:px-8 md:py-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-200/70">
                UK Treatment Guide
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                What Is Foundayo (Orforglipron) in the UK?
              </h1>
              <p
                id="hero-answer"
                className="mt-4 text-base font-medium leading-relaxed text-slate-800 sm:text-lg"
              >
                Foundayo is the brand name of orforglipron, a once daily weight
                loss pill made by Eli Lilly. The MHRA approved it in the UK on
                10 August 2026. It is a prescription only medicine for adults.
                You cannot buy Foundayo without a prescription.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Foundayo UK is a new option for adults who want help with their
                weight. If you searched for orforglipron UK, this page is for
                you. Foundayo is the brand name. Orforglipron is the medicine
                inside it. This page explains what it is, how it works, who can
                take it and what the side effects are. It is for adults aged 18
                and over. We do not sell Foundayo and nothing on this page is
                ranked for payment.
              </p>

              {/* Medical note box */}
              <div className="mt-6 rounded-2xl border border-amber-200/90 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 sm:text-base">
                <p>
                  <strong>Medical note:</strong> This page is a guide, not
                  medical advice. Talk to a prescriber or pharmacist about
                  whether Foundayo is right for you.
                </p>
              </div>

              {/* Foundayo at a glance */}
              <div className="mt-8 space-y-3">
                <p className="text-base font-bold text-slate-900">
                  Foundayo at a glance
                </p>
                <TwoColTable
                  head={["Question", "Answer"]}
                  rows={[
                    ["Medicine", "Orforglipron"],
                    ["Made by", "Eli Lilly"],
                    ["Type", "Once daily tablet. A GLP-1 receptor agonist"],
                    ["Approved in the UK", "10 August 2026 (MHRA)"],
                    ["In UK pharmacies", "From 24 August 2026, on private prescription"],
                    ["On the NHS", "Not yet. NICE decision due 18 November 2026"],
                    [
                      "Licensed for",
                      "Weight management in adults. Type 2 diabetes in some adults",
                    ],
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 space-y-12 text-slate-800 leading-relaxed">
          {/* Section 2: What is orforglipron? */}
          <section id="what-is-orforglipron" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>What is orforglipron?</h2>
            <p>
              It is the brand name of a tablet. Orforglipron is the medicine
              inside it. Many people ask about the Foundayo meaning because the
              name is new. It is the name Eli Lilly chose for the tablet.
              Searches for Foundayo and orforglipron lead to the same tablet.
            </p>
            <p>
              Who makes Foundayo? Eli Lilly does. What is in Foundayo? The active
              ingredient is orforglipron.
            </p>

            <h3 className={h3Class}>What is Foundayo used for?</h3>
            <p>It is licensed for two things:</p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>
                Weight management in adults, alongside a reduced calorie diet
                and more physical activity.
              </li>
              <li>
                Type 2 diabetes in some adults, to help control blood sugar.
              </li>
            </ul>

            <h3 className={h3Class}>What type of drug is Foundayo?</h3>
            <p>
              It is a once daily oral GLP-1 receptor agonist. That is a long
              name, so here is what it means:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>
                GLP-1 is a hormone your gut makes after you eat. It tells your
                brain you are full.
              </li>
              <li>
                A receptor agonist switches on the same receptor as that
                hormone.
              </li>
              <li>Oral means you swallow it as a tablet.</li>
            </ul>

            <h3 className={h3Class}>Is Foundayo a GLP-1?</h3>
            <p>
              Yes. It is also a non peptide small molecule. Some other GLP-1
              pills are peptides and must be taken with strict food and water
              rules. Orforglipron is a small molecule, which is why Foundayo has
              no such rules. This is its main difference.
            </p>
          </section>

          {/* Section 3: Foundayo pill: how it is taken */}
          <section id="how-taken" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>Foundayo pill: how it is taken</h2>
            <p>
              The Foundayo pill is a film coated tablet. You take one tablet a
              day. Is Foundayo a pill? Yes. Is Foundayo an injection? No. A
              Foundayo tablet has no needles.
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-2">
              <li>Take it at any time of day.</li>
              <li>
                Take it with or without food. You do not need to measure water.
              </li>
              <li>Swallow it whole. Do not chew, split or crush it.</li>
              <li>
                Do not take more than one tablet in a day to get a higher dose.
              </li>
              <li>
                If you miss a dose, take it as soon as you remember. Never take
                more than one tablet in a day.
              </li>
            </ul>
            <p>
              You start on 0.8 mg once a day. Your prescriber may raise the dose
              in steps, no sooner than every 30 days. The highest dose is 17.2 mg
              a day. For every dose step, read our{" "}
              <Link href="/foundayo-faqs" className={linkClass}>
                Foundayo Q&A
              </Link>
              .
            </p>
          </section>

          {/* Section 4: How does Foundayo work? */}
          <section id="how-it-works" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>How does Foundayo work?</h2>
            <p>
              What does Foundayo do? It is an oral GLP-1 weight loss pill.
              Orforglipron acts on the GLP-1 receptor in your body. This does
              three main things:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>
                It tells your brain you are full, so you may feel less hungry.
              </li>
              <li>
                It slows how fast your stomach empties, so you stay full for
                longer.
              </li>
              <li>It helps your body control blood sugar after meals.</li>
            </ul>
            <p>
              Together, this can make it easier to eat less. That is how Foundayo
              works for weight loss. The tablet does not replace healthy eating
              and activity. It is used alongside them. Foundayo works on GLP-1
              only. It is not the same as Mounjaro, which contains tirzepatide
              and also acts on a second hormone called GIP.
            </p>

            <h3 className={h3Class}>What the ATTAIN-1 trial found</h3>
            <p>
              ATTAIN-1 was a large trial of 3,127 adults with obesity who did not
              have diabetes. It lasted 72 weeks. Everyone also had help with diet
              and activity. People on the highest dose lost 11.2% of their body
              weight on average. People given a placebo lost 2.1%. A placebo is a
              lookalike treatment with no active medicine.
            </p>
            <TwoColTable
              head={["Group in ATTAIN-1", "Average weight loss at week 72"]}
              rows={[
                ["Orforglipron 6 mg trial capsule", "7.5%"],
                ["Orforglipron 12 mg trial capsule", "8.4%"],
                ["Orforglipron 36 mg trial capsule", "11.2%"],
                ["Placebo", "2.1%"],
              ]}
            />
            <p className="text-sm text-slate-600">
              These are group averages, not a promise for one person. Some people
              lose more and some lose less. The trial used capsules, and UK
              tablets have different milligram numbers. The 36 mg trial capsule
              matches the 17.2 mg tablet. Some websites quote 12.4%. That figure
              only counts people who stayed on treatment, so it looks higher.
            </p>
          </section>

          {/* Section 5: What are the benefits of Foundayo? */}
          <section id="benefits" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>What are the benefits of Foundayo?</h2>
            <p>
              Foundayo has four main benefits for adults who are suitable for
              it.
            </p>
            <ul className="list-inside list-disc space-y-2 pl-2">
              <li>
                <strong>It helped people lose weight in a large trial.</strong>{" "}
                In ATTAIN-1, people on the highest dose lost 11.2% of their body
                weight on average over 72 weeks. People on placebo lost 2.1%.
                Results vary from person to person.
              </li>
              <li>
                <strong>It is a tablet, not an injection.</strong> If you find
                needles hard, a tablet may be easier for you. You still need to
                remember to take it every day.
              </li>
              <li>
                <strong>It has no food or water rules.</strong> You can take it
                at any time of day, with or without food. This makes it easier
                to fit into your day than a pill with fasting rules.
              </li>
              <li>
                <strong>It can also help with type 2 diabetes.</strong> Foundayo
                is licensed for some adults whose type 2 diabetes is not well
                controlled. It helps the body control blood sugar.
              </li>
            </ul>
            <p>
              The benefits depend on why Foundayo is prescribed. It works best
              alongside a reduced calorie diet and more physical activity. It
              also has side effects, so read the side effects section below. A
              prescriber can tell you if the benefits are right for you.
            </p>
          </section>

          {/* Section 6: Who can take Foundayo? */}
          <section id="who-can-take" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>Who can take Foundayo?</h2>
            <p>
              For weight management, Foundayo is licensed for adults aged 18 and
              over with:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>a BMI of 30 or more, or</li>
              <li>
                a BMI of 27 to under 30 and at least one weight related health
                condition, such as high blood pressure.
              </li>
            </ul>
            <p>
              A prescriber must check if Foundayo is right for you. BMI is only
              one check. Not sure of your BMI? Use our{" "}
              <Link href="/tools/bmi-calculator" className={linkClass}>
                BMI calculator
              </Link>
              .
            </p>
            <p>
              Foundayo is also licensed for adults whose type 2 diabetes is not
              well controlled, alongside diet and exercise. It is not for anyone
              under 18.
            </p>
            <p>Tell your prescriber before you start if:</p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>
                you are allergic to orforglipron or any other ingredient in the
                tablet
              </li>
              <li>you are pregnant, planning a pregnancy or breastfeeding</li>
              <li>
                you have severe liver problems, as Foundayo is not recommended
              </li>
              <li>
                you take insulin or a sulphonylurea, which can raise the risk of
                low blood sugar
              </li>
              <li>you take any other medicines, including St John&apos;s wort</li>
            </ul>
          </section>

          {/* Section 7: Is Foundayo available in the UK? */}
          <section id="uk-availability" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>Is Foundayo available in the UK?</h2>
            <p>Yes, on private prescription. What does the timeline look like?</p>
            <ul className="list-inside list-disc space-y-1.5 pl-2">
              <li>
                <strong>10 August 2026:</strong> The MHRA approved Foundayo in
                the UK. The UK was the first country in Europe to approve it.
              </li>
              <li>
                <strong>24 August 2026:</strong> Foundayo became available in UK
                pharmacies on private prescription.
              </li>
              <li>
                <strong>Now:</strong> It is not available on the NHS.
              </li>
              <li>
                <strong>18 November 2026:</strong> NICE is due to publish its
                decision on NHS use in England.
              </li>
            </ul>

            <h3 className={h3Class}>Is Foundayo licensed in the UK?</h3>
            <p>
              Yes, for the two uses above. People also ask when will Foundayo be
              available in UK pharmacies. It already is, so the orforglipron
              weight loss pill UK launch has happened. Approval does not mean
              NHS funding, and it does not mean every pharmacy has stock.
            </p>
            <p>
              Stock, prices and what is included, such as the consultation and
              delivery, differ between providers. We do not quote a price on
              this page. We will add checked prices to our Foundayo price page
              when we have them.
            </p>
          </section>

          {/* Section 8: Foundayo side effects */}
          <section id="side-effects" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>Foundayo side effects</h2>
            <p>
              Foundayo oral GLP-1 side effects are mostly stomach problems. They
              are more likely when the dose goes up. These come from the UK
              product information.
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-2">
              <li>
                <strong>Very common (more than 1 in 10 people):</strong> feeling
                sick, being sick, constipation, diarrhoea, indigestion and
                stomach pain.
              </li>
              <li>
                <strong>Common (up to 1 in 10 people):</strong> dizziness,
                headache, a fast heartbeat, low blood pressure, bloating, wind,
                reflux, gallstones, hair loss and tiredness.
              </li>
              <li>
                <strong>Uncommon (up to 1 in 100 people):</strong> acute
                pancreatitis, which is swelling of the pancreas.
              </li>
            </ul>
            <p>
              Get urgent medical help if you have severe stomach pain that does
              not go away. If you take insulin or a sulphonylurea, low blood
              sugar is also very common, so your prescriber may change those
              doses.
            </p>

            <p className="font-bold text-slate-900 pt-2">Safety notes</p>
            <ul className="list-inside list-disc space-y-1.5 pl-2">
              <li>
                <strong>Contraception:</strong> Foundayo may make the oral
                contraceptive pill less effective. Use a non oral method, or add
                a barrier method, for 30 days after you start and after each dose
                increase.
              </li>
              <li>
                <strong>Pregnancy:</strong> Do not use Foundayo in pregnancy or
                while breastfeeding. Stop it at least 3 weeks before a planned
                pregnancy.
              </li>
              <li>
                <strong>Other medicines:</strong> Some medicines change how much
                orforglipron is in your body. Always tell your prescriber about
                every medicine you take.
              </li>
            </ul>
            <p>
              You can report a suspected side effect to the MHRA Yellow Card
              scheme.
            </p>
            <p>
              For more detail, read our{" "}
              <Link href="/foundayo-faqs" className={linkClass}>
                Foundayo Q&A
              </Link>
              .
            </p>
          </section>

          {/* Section 9: Foundayo and the Wegovy pill */}
          <section id="foundayo-and-wegovy-pill" className="scroll-mt-28 space-y-4">
            <h2 className={h2Class}>Foundayo and the Wegovy pill</h2>
            <p>
              Foundayo and the Wegovy pill are different medicines. Foundayo
              contains orforglipron. The Wegovy pill contains semaglutide. Both
              are once daily pills for weight loss.
            </p>
            <p>
              The main practical difference is food and water. Foundayo has no
              food or water rules. The Wegovy pill has fasting instructions. The
              two pills were tested in different trials with different people.
              So we do not rank one above the other from their headline
              results. A prescriber can help you choose.
            </p>
            <p>
              Read our{" "}
              <Link href="/what-is-wegovy-pill" className={linkClass}>
                Wegovy pill guide
              </Link>
              .
            </p>
          </section>

          {/* Section 10: FAQs */}
          <section id="faqs" className="scroll-mt-28 space-y-6">
            <h2 className={h2Class}>FAQs</h2>
            <div className="space-y-6 divide-y divide-slate-200">
              {FOUNDAYO_FAQS.map((faq, index) => (
                <div
                  key={faq.question}
                  className={index === 0 ? "space-y-2" : "pt-6 space-y-2"}
                >
                  <h3 className={h3Class}>{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="w-full border-t border-slate-200/80 bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-5 md:px-8">
            <TrustSignals />
          </div>
        </div>
      </article>
    </>
  );
}

