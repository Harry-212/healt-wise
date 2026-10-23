/**
 * Foundayo FAQ copy. Questions and answers are taken verbatim from the
 * approved schema file (Foundayo_FAQ_Schema.txt) so the visible page and the
 * FAQPage schema stay identical. Change them here only.
 */
export type FoundayoFaq = { question: string; answer: string };
export type FoundayoFaqSection = { id: string; heading: string; faqs: FoundayoFaq[] };

export const FOUNDAYO_FAQ_SECTIONS: FoundayoFaqSection[] = [
  {
    "id": "foundayo-availability",
    "heading": "Foundayo questions and answers: availability in the UK",
    "faqs": [
      {
        "question": "Is Foundayo approved in the UK?",
        "answer": "Yes. The MHRA approved Foundayo in the UK on 10 August 2026. It is licensed for weight management in adults, alongside a reduced calorie diet and more physical activity. It is also licensed for some adults with type 2 diabetes. The UK was the first country in Europe to approve it."
      },
      {
        "question": "When was Foundayo approved for prescribing in the UK?",
        "answer": "The MHRA approved it on 10 August 2026. Foundayo reached UK pharmacies on 24 August 2026, on private prescription."
      },
      {
        "question": "Can I get Foundayo privately?",
        "answer": "Yes. Foundayo is a prescription only medicine. You can get it on a private prescription from a UK prescriber, who must check your health first. Use a pharmacy or online doctor that is registered with the GPhC. You cannot buy it without a prescription."
      },
      {
        "question": "Can I get Foundayo on the NHS?",
        "answer": "Not yet. NICE is checking Foundayo for use on the NHS in England. Its decision is due on 18 November 2026. Until then, you can only get it privately. We will update this answer after the decision."
      }
    ]
  },
  {
    "id": "cost-and-eligibility",
    "heading": "Foundayo frequently asked questions about cost and who can take it",
    "faqs": [
      {
        "question": "How much does Foundayo cost?",
        "answer": "There is no one UK price. It depends on the provider, the dose and what is included, such as the consultation and delivery. We do not quote a price here, because prices change. Always check what is included before you pay. We are building a Foundayo price page with checked prices."
      },
      {
        "question": "Who is eligible to take Foundayo?",
        "answer": "For weight management, Foundayo is licensed for adults aged 18 and over with a BMI of 30 or more. It is also licensed for a BMI of 27 to under 30 if you have at least one weight related health condition. It is also licensed for some adults with type 2 diabetes. A prescriber must check it is right for you. It is not licensed for under 18s. Do not take it if you are allergic to orforglipron or any other ingredient. It is not recommended if you have severe liver problems. Do not use it in pregnancy or while breastfeeding. Not sure of your BMI? Use our BMI calculator."
      }
    ]
  },
  {
    "id": "how-to-take",
    "heading": "How to take Foundayo: doses, food and missed doses",
    "faqs": [
      {
        "question": "How do I take Foundayo?",
        "answer": "Take one tablet once a day. You can take it at any time of day, with or without food. Swallow it whole. Do not chew, split or crush it. Do not change your dose unless your prescriber tells you to. Keep the tablets in the original pack, away from light."
      },
      {
        "question": "Can I take Foundayo with food?",
        "answer": "Yes. You can take it with or without food, and you do not need to measure water. This is the key point in any Foundayo and food question, because some other weight loss pills have fasting rules."
      },
      {
        "question": "What foods should I avoid on Foundayo?",
        "answer": "There are no food rules for taking the tablet. The UK leaflet does not tell you to avoid any foods. If some foods make you feel sick, ask your prescriber or pharmacist for advice."
      },
      {
        "question": "Does my dose change what I should eat on Foundayo?",
        "answer": "No. The food advice is the same at every dose. You can always take it with or without food. Feeling sick or having tummy problems can get worse when the dose goes up. If that happens, tell your prescriber."
      },
      {
        "question": "What is the Foundayo dose schedule?",
        "answer": "You start on 0.8 mg once a day. After at least 30 days, the dose can go up to 2.5 mg. After at least 30 more days, it can go up to 5.5 mg. Then your prescriber can raise it to 9 mg, 14.5 mg or 17.2 mg, with at least 30 days at each step. The highest dose is 17.2 mg a day. Think of this as a short Foundayo dosing guide. Only your prescriber should change your dose."
      },
      {
        "question": "Do I need to step up my Foundayo dose?",
        "answer": "Your prescriber decides. The dose goes up in steps, no sooner than every 30 days. It depends on how well it works and how well you cope with side effects. Do not take more than one tablet in a day to get a higher dose. Ask your prescriber before you change anything."
      },
      {
        "question": "What happens if I miss a dose of Foundayo?",
        "answer": "Take the missed dose as soon as you remember. Never take more than one tablet in a day. Do not double up to make up for a missed dose. If you are not sure what to do, ask your pharmacist."
      }
    ]
  },
  {
    "id": "safety",
    "heading": "Foundayo questions about safety",
    "faqs": [
      {
        "question": "What are the side effects of Foundayo?",
        "answer": "Most side effects affect the stomach. Very common ones, which affect more than 1 in 10 people, are feeling sick, being sick, constipation, diarrhoea, indigestion and stomach pain. They are more likely when the dose goes up. Being sick or having diarrhoea can cause dehydration, so drink enough fluids. Get urgent medical help if you have severe stomach pain that does not go away, signs of an allergic reaction, sudden changes in your vision, or upper tummy pain with yellow skin or eyes. You can report a suspected side effect to the MHRA Yellow Card scheme."
      },
      {
        "question": "Does Foundayo affect the contraceptive pill?",
        "answer": "It can. Foundayo may make the oral contraceptive pill less effective. Switch to a non oral method, or add a barrier method such as condoms, for 30 days after you start and after each dose increase. Do not use Foundayo in pregnancy. Stop it at least 3 weeks before a planned pregnancy. Talk to your prescriber first."
      },
      {
        "question": "Can I drink alcohol on Foundayo?",
        "answer": "The UK product information and leaflet do not mention alcohol. No direct interaction is listed. But alcohol may add to feeling sick. If you take insulin or a sulphonylurea, alcohol can also make low blood sugar more likely. Ask your prescriber what is safe for you."
      }
    ]
  },
  {
    "id": "compared",
    "heading": "Foundayo compared with other weight loss treatments",
    "faqs": [
      {
        "question": "How is Foundayo different from the Wegovy pill?",
        "answer": "Foundayo contains orforglipron. The Wegovy pill contains semaglutide. Both are once daily tablets. Foundayo has no food or water rules. The Wegovy pill has fasting instructions. The two were tested in different trials, so we do not rank one above the other. Read our Wegovy pill guide."
      },
      {
        "question": "Is Foundayo the same as Mounjaro?",
        "answer": "No. Foundayo contains orforglipron and is a daily tablet. Mounjaro contains tirzepatide and is a weekly injection. Both are made by Eli Lilly, but they are different medicines. A prescriber can help you choose. To see how the two injections compare, read our Wegovy vs Mounjaro comparison."
      }
    ]
  },
  {
    "id": "before-you-start",
    "heading": "Before you start Foundayo",
    "faqs": [
      {
        "question": "What questions should I ask before starting Foundayo?",
        "answer": "Here are some Foundayo questions to ask your prescriber or pharmacist: Is Foundayo right for me, based on my BMI and my health? Do I take any medicines that may not mix with it, such as insulin or a sulphonylurea? Could I become pregnant, and which contraception should I use? Which dose will I start on, and when might it go up? Which side effects should I watch for, and when should I get urgent help? How will you review my progress? What does the price include, such as the consultation, delivery and reviews?"
      }
    ]
  }
];

export const FOUNDAYO_FAQ_ALL: FoundayoFaq[] = FOUNDAYO_FAQ_SECTIONS.flatMap((s) => s.faqs);
