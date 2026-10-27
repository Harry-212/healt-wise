/**
 * Wegovy Tablet FAQ copy. Questions and answers are taken verbatim from the
 * approved schema file so the visible page and the FAQPage schema stay
 * identical. Change them here only.
 */
export type WegovyTabletFaq = { question: string; answer: string };
export type WegovyTabletFaqSection = {
  id: string;
  heading: string;
  faqs: WegovyTabletFaq[];
};

export const WEGOVY_TABLET_FAQ_SECTIONS: WegovyTabletFaqSection[] = [
  {
    id: "what-it-is-and-who-can-have-it",
    heading: "Wegovy pill FAQ: what it is and who can have it",
    faqs: [
      {
        question: "How does the Wegovy pill work in simple words?",
        answer:
          "The tablet contains semaglutide. It copies a gut hormone called GLP-1, which your body makes after you eat. The hormone tells your brain that you are full, and it slows how fast food leaves your stomach. So you may feel less hungry and stay full for longer. The tablet is meant to be used with a reduced calorie diet and more physical activity.",
      },
      {
        question: "Who can be prescribed the Wegovy tablet?",
        answer:
          "Adults can be prescribed it if they have a BMI of 30 or more. It is also licensed for a BMI of 27 to under 30, if you have at least one weight related health problem, such as high blood pressure. A prescriber checks your health and your other medicines first. It is not for use in pregnancy or while breastfeeding. Not sure of your BMI? Use our BMI calculator.",
      },
      {
        question: "Can I get the Wegovy tablet in the UK yet?",
        answer:
          "It is approved, but supply may be limited. The MHRA approved the Wegovy tablet on 11 June 2026. It is a prescription only medicine, so a UK prescriber must check your health first. When it was approved, it was not available on the NHS. Any NHS use will depend on a review by NICE. Some online pharmacies were showing it as pre order or out of stock when we last checked, so ask the pharmacy before you pay. Use one that is registered with the GPhC. You cannot buy it without a prescription.",
      },
    ],
  },
  {
    id: "how-to-take-it",
    heading: "Wegovy tablet FAQ: how to take it",
    faqs: [
      {
        question: "What are the step by step Wegovy pill instructions?",
        answer:
          "Here is how to take the Wegovy tablet, one step at a time: Take it once a day, when your stomach has been empty for at least 8 hours. Swallow one tablet whole with a sip of plain water. Use no more than 120 ml. Do not split, crush or chew the tablet. Wait at least 30 minutes before you eat, drink or take other medicines. Take your next tablet the next day, at the same time if you can. If you eat or drink too soon, your body takes in less of the medicine.",
      },
      {
        question: "What is the best time of day to take the Wegovy pill?",
        answer:
          "The leaflet does not name a time of day. The rule is an empty stomach for at least 8 hours, then a 30 minute wait before food. For most people, that means first thing in the morning, before breakfast. Pick a time you can keep every day. If your routine is different, ask your prescriber.",
      },
      {
        question: "Can I take the Wegovy pill at night?",
        answer:
          "The leaflet does not ban it, but the rules make it hard. You need at least 8 hours without food before the tablet. Then you must wait 30 minutes before you eat or drink. At night, that would mean finishing your last meal many hours earlier. Most people find the morning easier. If you work nights, ask your prescriber how to plan your day.",
      },
      {
        question: "Can you skip a day of the Wegovy pill?",
        answer:
          "Do not skip a day on purpose. If you forget, skip the missed tablet and take your usual one the next day. Never take two tablets in one day to catch up. If you keep forgetting, ask your pharmacist for tips, such as a phone reminder.",
      },
      {
        question: "Do I need to take other medicines at a different time?",
        answer:
          "Yes. Wait at least 30 minutes after the tablet before you take any other tablets. Tell your prescriber about every medicine you take. Some need extra care: Levothyroxine: your thyroid blood tests may need checking. Warfarin or similar blood thinners: you may need more blood tests. Insulin or a sulphonylurea for diabetes: low blood sugar is more likely, and your doses may need to change. Also tell your doctor if you are due to have surgery with an anaesthetic.",
      },
    ],
  },
  {
    id: "doses-on-the-wegovy-pill",
    heading: "Doses on the Wegovy pill",
    faqs: [
      {
        question: "What does the Wegovy pill dosing chart look like?",
        answer:
          "Think of it as four steps. Each step lasts at least one month: Step 1: 1.5 mg once a day, the starting dose. Step 2: 4 mg once a day. Step 3: 9 mg once a day. Step 4: 25 mg once a day, the maintenance dose and the highest. Only your prescriber moves you up. A lower step can be kept if it suits you better. For the full dose guide, read our Wegovy tablet guide.",
      },
      {
        question: "When can the Wegovy pill dose go up?",
        answer:
          "Not before you have had at least one month on your current dose. Your prescriber decides when to increase the Wegovy pill dose, based on how well you cope with the tablet. If side effects are strong, you may stay on a lower dose for longer. Do not go up early, and never take extra tablets to reach a higher dose.",
      },
      {
        question: "Can you lose weight on the 1.5 mg Wegovy pill dose?",
        answer:
          "The 1.5 mg dose is the starting dose, taken for the first month. It lets your body get used to the medicine. The tablet trials looked at the 25 mg dose, so we cannot say how much weight people lose on 1.5 mg. Some people feel less hungry early on, and some do not. Do not stay on 1.5 mg, or move up, on your own. Your prescriber decides when to step up.",
      },
      {
        question: "Can I switch from the Wegovy injection to the tablet?",
        answer:
          "If you use the 2.4 mg weekly injection, the product information says you can move straight to the 25 mg tablet each day. You start one week after your last injection. The body takes in the tablet less evenly than the injection, so your results may change. A prescriber must plan the switch. Never swap or combine them on your own.",
      },
    ],
  },
  {
    id: "weight-loss-on-the-wegovy-pill",
    heading: "Weight loss on the Wegovy pill",
    faqs: [
      {
        question: "How can I lose weight on the Wegovy pill?",
        answer:
          "The tablet helps with hunger, but food and activity still matter. It is licensed for use with a reduced calorie diet and more physical activity. Build your meals around lean protein, vegetables and fibre, so you feel full. Move on most days, even with a short walk. Drink water, and try to sleep well. Do not skip meals or eat very little, because that can leave you feeling weak or unwell. Ask your prescriber or a dietitian for a plan that suits you.",
      },
      {
        question: "How can I speed up weight loss on the Wegovy pill?",
        answer:
          "There is no safe shortcut. Taking extra tablets, skipping the 30 minute wait or moving to a higher dose early will not speed things up, and it can cause harm. Weight loss is usually gradual, and it can slow down at times. Here are 5 ways to increase weight loss on the Wegovy pill, safely: Take it exactly as the leaflet says, so your body takes in the medicine. Build a walking or movement habit you can keep. Choose meals with protein and fibre, and keep treats small. Drink enough water through the day. Go to your reviews, and tell your prescriber if progress stalls. There is no safe way to lose weight fast on Wegovy. Steady progress is the aim.",
      },
    ],
  },
  {
    id: "safety-on-the-wegovy-tablet",
    heading: "Safety on the Wegovy tablet",
    faqs: [
      {
        question: "Which Wegovy tablet side effects need urgent help?",
        answer:
          "Most side effects affect the stomach and are mild. Some signs need urgent help. Get medical help straight away if you have: Severe tummy pain that does not go away, with or without being sick. Stop taking the tablet. Swelling of the face, lips, tongue or throat, or trouble breathing or swallowing. Call 999. Sudden vision loss, or sight that gets worse fast. Severe constipation with tummy ache, bloating or being sick. Being sick or having diarrhoea can also dry you out, so drink enough fluids. You can report a suspected side effect to the MHRA Yellow Card scheme.",
      },
      {
        question: "Do I need contraception on the Wegovy tablet?",
        answer:
          "Yes, if you could become pregnant. Do not take the tablet in pregnancy or while breastfeeding. Stop it at least 2 months before you plan to try for a baby, and talk to your prescriber first. If you get pregnant while taking it, call your doctor straight away. The product information found no important change in how the contraceptive pill works. But being sick or having bad diarrhoea can stop any pill from working, so check your pill's own leaflet.",
      },
    ],
  },
  {
    id: "before-you-start-the-wegovy-tablet",
    heading: "Before you start the Wegovy tablet",
    faqs: [
      {
        question: "What do people wish they knew before taking Wegovy?",
        answer:
          "These are the Wegovy pill things to know before your first dose: The tablet has strict rules: an empty stomach for 8 hours, a sip of water and a 30 minute wait. Stomach side effects are the most common, and they can feel stronger when the dose goes up. You start low and move up in steps, at least a month apart. It is for use with a reduced calorie diet and more physical activity. You need to plan contraception and tell your prescriber about your other medicines.",
      },
      {
        question:
          "What should I ask my prescriber before I start the Wegovy pill?",
        answer:
          "Here are some questions to ask: Is the tablet right for me, given my BMI and my health? Which dose will I start on, and when might it go up? How can I fit the 8 hour fast and the 30 minute wait into my day? Could any of my medicines be affected? Do I need contraception? Which side effects mean I should call you straight away? How will you check my progress, and how often? What does the price include, such as the consultation, delivery and reviews?",
      },
    ],
  },
];

export const WEGOVY_TABLET_FAQ_ALL: WegovyTabletFaq[] =
  WEGOVY_TABLET_FAQ_SECTIONS.flatMap((s) => s.faqs);
