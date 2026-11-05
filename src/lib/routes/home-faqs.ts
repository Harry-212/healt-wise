/** FAQ copy for the homepage — informational only; not medical advice. */

import type { CompareFaqItem } from "@/lib/routes/compare-faqs";

export function buildHomePageFaqs(
  _wegovyStarterLow = "£64.99",
  _mounjaroStarterLow = "£119.99",
  _mounjaroTopHigh = "£340.00",
): CompareFaqItem[] {
  return [
    {
      q: "Can I get weight loss injections on the NHS?",
      a: "Some people can be prescribed these medicines on the NHS, but access is limited and depends on where you live and your health. Ask your GP what applies to you. Prescriptions are free in Scotland, Wales and Northern Ireland, and a prescription charge may apply in England.",
    },
    {
      q: "Which of your partner pharmacies has the lowest listed price?",
      a: "The lowest listed price varies by medicine and dose. The cheapest pen is not always the cheapest order. The tables show the lowest checked price among our selected partners for each strength on the date shown, and the cards show the best price for each medicine with the delivery charge beside it. Compare the total, not only the pen. Our comparison covers selected partners, rather than the whole UK market.",
    },
    {
      q: "How do I compare the full cost, including delivery?",
      a: "Add the pen price, the consultation fee and the delivery charge, then check the repeat order price. Section 7 lists each cost to look for, and every partner card shows the delivery charge.",
    },
    {
      q: "What types of weight loss injections are there?",
      a: "The two most searched are Mounjaro, which contains tirzepatide, and Wegovy, which contains semaglutide. Both are weekly injections given with a reduced calorie diet and more physical activity. A prescriber decides which suits you.",
    },
    {
      q: "Where can I buy weight loss injections in the UK?",
      a: "Only from a registered pharmacy, on a prescription issued after a clinical assessment. Our selected partners are GPhC registered, and you can check each number on the register.",
    },
    {
      q: "Are weight loss injections safe to buy online?",
      a: "They are safe to buy from a registered pharmacy after a prescriber has assessed you. Sellers with no prescription step, or no register number, are a warning sign. Follow the five checks in section 9.",
    },
    {
      q: "Which weight loss injection is best for me?",
      a: "That is a clinical decision, and this page cannot make it. A prescriber looks at your health, your BMI and your other medicines. Our guides explain how each medicine works and what to ask.",
    },
    {
      q: "Which providers include ongoing support?",
      a: "Some partners include follow up support or a care team in their service. Each partner card shows what is included where the partner supplies that information, so read it before you order.",
    },
    {
      q: "How much do weight loss injections cost per month?",
      a: "One pen is a four week supply, so the monthly cost is the price of the pen for your strength, plus any consultation fee and delivery charge. It changes when your dose steps up.",
    },
    {
      q: "Do I need a prescription for weight loss jabs?",
      a: "Yes. A weight loss jab is a prescription only medicine. A registered pharmacy supplies it only after a prescriber has assessed you.",
    },
  ];
}

export const HOME_PAGE_FAQS: CompareFaqItem[] = buildHomePageFaqs();
