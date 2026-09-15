import { SCIENCE_EMAIL, SITE_HOST, SITE_URL } from "./site";

export type ContentPage = {
  title: string;
  kicker?: string;
  intro: string;
  image?: string;
  sections: { heading: string; body: string }[];
};

export const pages: Record<string, ContentPage> = {
  "/skin": {
    kicker: "Skin",
    title: "Advanced skin, within cosmetic law",
    intro:
      "Facial needling, micro-infusion and copper-peptide skincare — designed as a protocol, with hygiene and aftercare treated as seriously as the device.",
    image: "/images/pathway-skin.png",
    sections: [
      {
        heading: "Peptides on skin",
        body: "GHK-Cu and matrikine serums are cosmetics. If you want the science, open the Peptide Encyclopaedia. If you want the product, open Shop.",
      },
    ],
  },
  "/skin/facial-needling": {
    kicker: "Facial needling",
    title: "Cosmetic needling, done carefully",
    intro:
      "Needling is a barrier-disrupting cosmetic technique. Depth, hygiene, and what you put on skin afterwards matter more than marketing frequency claims.",
    image: "/images/pathway-skin.png",
    sections: [
      {
        heading: "Safety",
        body: "Never share cartridges. Do not needle active infection, eczema flares, or isotretinoin courses without a clinician. Read Disposal & Sharps Safety.",
      },
    ],
  },
  "/skin/micro-infusion": {
    kicker: "Micro-infusion",
    title: "Serum delivery",
    intro:
      "Micro-infusion stamps and pens are still cosmetic devices in our range — not medical procedures and not a route for research peptides.",
    image: "/images/hero-microinfusion.png",
    sections: [
      {
        heading: "What we allow on skin",
        body: "Only cosmetic serums designed for the protocol. No grey-market vials. No ‘research use only’ liquids on the face.",
      },
    ],
  },
  "/skin/peptide-serums": {
    kicker: "GHK-Cu / peptide serums",
    title: "Copper peptide skincare and topical serums",
    intro:
      "Leave-on cosmetics built around GHK-Cu, palmitoyl pentapeptide-4 and related peptides. GHK-Cu is a signature topical in the protocol — a cosmetic copper peptide, not an injectable medicine.",
    sections: [
      {
        heading: "What is in the range",
        body: "The shop serums are GHK-Cu copper peptide and a matrikine blend. They are leave-on cosmetics, not research vials.",
      },
      {
        heading: "Encyclopaedia",
        body: "The Peptide Encyclopaedia page for GHK-Cu covers structure, evidence grade, and Australian cosmetic versus therapeutic lines. Other INCI names have matching entries with status badges.",
      },
    ],
  },
  "/skin/preparation": {
    kicker: "Skin preparation",
    title: "Before you needle",
    intro: "Cleanse, degrease where directed, and check the barrier. Preparation is part of the protocol, not an upsell.",
    sections: [{ heading: "Kit", body: "See Preparation & Hygiene in the shop and the matching Learn guide." }],
  },
  "/skin/aftercare": {
    kicker: "Aftercare",
    title: "After the barrier is open",
    intro:
      "Aftercare determines whether needling looks like a protocol or a complication. Occlusion, actives pause, and sun are the three non-negotiables.",
    sections: [{ heading: "Products", body: "Recovery Barrier Balm is formulated as a cosmetic aftercare step." }],
  },
  "/skin/numbing": {
    kicker: "Numbing products",
    title: "Comfort, within the law",
    intro:
      "Pharmacy-scheduled local anaesthetics are not casually sold as cosmetics in Australia. We discuss comfort strategies and will only list numbing products that are lawful to supply.",
    sections: [
      {
        heading: "Do not import lidocaine creams casually",
        body: "High-strength topical anaesthetics can be dangerous. Follow a pharmacist or clinician. Our shop will not list illegal anaesthetic strengths.",
      },
    ],
  },
  "/cognitive": {
    kicker: "Cognitive",
    title: "Cognitive performance without grey-market neuropeptides",
    intro:
      "Focus, memory, energy and stress — using permitted ingredients. Semax, Selank and similar peptides live only in the encyclopaedia.",
    sections: [
      {
        heading: "Separation principle",
        body: "If a compound is investigational or research-only, you will never find an Add to cart button on its encyclopaedia page.",
      },
    ],
  },
  "/cognitive/performance": {
    kicker: "Cognitive performance",
    title: "Alertness is not a peptide prescription",
    intro:
      "Sleep, caffeine literacy, and permitted nootropics outperform unapproved intranasal peptides for almost everyone reading this.",
    sections: [{ heading: "Shop", body: "Permitted Focus Capsules live in Shop → Cognitive." }],
  },
  "/cognitive/focus": {
    kicker: "Focus",
    title: "Focus",
    intro: "Caffeine, L-theanine and environment design — not research chemicals.",
    sections: [{ heading: "Library", body: "See the Cognitive Ingredient Library for compound-by-compound notes." }],
  },
  "/cognitive/memory": {
    kicker: "Memory",
    title: "Memory",
    intro:
      "Lifestyle and cardiometabolic health dominate midlife memory evidence. We will not sell unapproved ‘memory peptides’.",
    sections: [{ heading: "Encyclopaedia", body: "Investigational neuropeptides are labelled as such — and not sold." }],
  },
  "/cognitive/energy": {
    kicker: "Energy",
    title: "Energy",
    intro: "Mitochondrial marketing is loud; iron, sleep and thyroid assessment are quieter and more often relevant.",
    sections: [{ heading: "Fundamentals", body: "Iron, sleep and thyroid assessment are quieter and more often relevant than mitochondrial marketing." }],
  },
  "/cognitive/stress-relaxation": {
    kicker: "Stress & relaxation",
    title: "Stress & relaxation",
    intro: "Breath, magnesium where appropriate, and clinical care for anxiety disorders — not Selank vials from the internet.",
    sections: [{ heading: "Read", body: "Selank’s encyclopaedia entry explains why it stays off the shelf." }],
  },
  "/cognitive/ingredient-library": {
    kicker: "Cognitive ingredient library",
    title: "Permitted ingredients, clearly scoped",
    intro:
      "Caffeine, L-theanine, lion’s mane, magnesium — described as dietary ingredients, not as peptide medicines.",
    sections: [
      {
        heading: "Not in this library",
        body: "Racemet, unapproved racetams if scheduled, and all research neuropeptides. Those, if discussed, are encyclopaedia entries with Not approved for human use badges.",
      },
    ],
  },
  "/learn": {
    kicker: "Learn",
    title: "How-to guides for the protocol",
    intro:
      "Practical education: needling, serums, storage, cooling cases, hygiene and sharps. The Peptide Encyclopaedia is a separate top-level destination — not a Learn submenu.",
    sections: [
      {
        heading: "Why encyclopaedia is not here",
        body: "Scientific compound pages are a signature acquisition channel. Hiding them under Learn would bury a core brand asset.",
      },
    ],
  },
  "/learn/facial-needling-guide": {
    kicker: "Guide",
    title: "Facial needling guide",
    intro: "Technique, depth ranges for cosmetic use, hygiene, and when to stop.",
    sections: [{ heading: "Pair with", body: "Skin → Facial Needling and Disposal & Sharps Safety." }],
  },
  "/learn/serum-guide": {
    kicker: "Guide",
    title: "Serum guide",
    intro: "Which cosmetic peptides go on intact skin versus post-needling windows.",
    sections: [{ heading: "Science", body: "Jump to GHK-Cu and palmitoyl pentapeptide-4 encyclopaedia entries." }],
  },
  "/learn/storage-guide": {
    kicker: "Guide",
    title: "Storage guide",
    intro: "Heat, light and oxidation ruin peptide serums faster than most routines admit.",
    sections: [{ heading: "Hardware", body: "See the Cooling Case Guide." }],
  },
  "/learn/cooling-case-guide": {
    kicker: "Guide",
    title: "Cooling case guide",
    intro: "Travel storage for cosmetic serums — not a medical cold chain for unapproved injectables.",
    sections: [{ heading: "Shop", body: "Protocol Cooling Case." }],
  },
  "/learn/pen-accessory-guide": {
    kicker: "Guide",
    title: "Pen accessory guide",
    intro: "Cartridges are single-use. Counterfeit needles are a blood-borne virus risk.",
    sections: [{ heading: "Shop", body: "Needling — stamp heads and the 3 mL cartridge injector." }],
  },
  "/learn/preparation-hygiene": {
    kicker: "Guide",
    title: "Preparation & hygiene",
    intro: "Hands, face, device, field. Hygiene is the protocol.",
    sections: [{ heading: "Kit", body: "Preparation & Hygiene products." }],
  },
  "/learn/disposal-sharps-safety": {
    kicker: "Safety",
    title: "Disposal & sharps safety",
    intro:
      "Used cartridges are sharps. Place them in an approved container. Do not throw loose needles in household waste.",
    sections: [
      {
        heading: "Community rules",
        body: "Follow your local council or pharmacy take-back. This is non-negotiable brand standards, not optional copy.",
      },
    ],
  },
  "/learn/research-library": {
    kicker: "Research library",
    title: "How we read papers",
    intro:
      "A methods-aware library for customers who want primary literature without being funnelled into research-chemical checkout.",
    sections: [
      {
        heading: "Compound pages",
        body: "Citations live on each Peptide Encyclopaedia entry. This library teaches study design, evidence grades and Australian regulatory context.",
      },
    ],
  },
  "/learn/ingredient-dictionary": {
    kicker: "Dictionary",
    title: "Ingredient dictionary",
    intro: "INCI and supplement ingredients used in products we actually sell.",
    sections: [
      {
        heading: "Versus the encyclopaedia",
        body: "The dictionary is product-adjacent. The Peptide Encyclopaedia includes compounds we will never sell.",
      },
    ],
  },
  "/learn/tga-status": {
    kicker: "TGA",
    title: "What TGA status means here",
    intro:
      "Each name carries one mark that fits the product: TGA approved, approved medicine, or for research purposes only.",
    sections: [
      {
        heading: "Who the TGA is",
        body: "The Therapeutic Goods Administration (TGA) is Australia’s medicines and medical-devices regulator.",
      },
      {
        heading: "TGA approved",
        body: "Used on shop cosmetics, devices and permitted goods, and on encyclopaedia entries for cosmetic ingredients we sell as leave-on products.",
      },
      {
        heading: "Approved medicine",
        body: "Used on encyclopaedia entries for registered medicines (for example labelled GLP-1 products). That mark describes the medicine class. It does not put the medicine in the cart.",
      },
      {
        heading: "For research purposes only",
        body: "Used on research-only and investigational peptides such as BPC-157. Educational. Not for sale. Not for injection from this shop.",
      },
    ],
  },
  "/learn/faqs": {
    kicker: "FAQs",
    title: "FAQs",
    intro: "Shop, topical use, TGA marks, and how this site is different from injectable-peptide stores.",
    sections: [
      {
        heading: "Do you sell injectable research peptides?",
        body: "No. The shop sells leave-on cosmetics, cosmetic devices, hygiene/storage, and permitted supplements. Nothing is sold for injection. Names such as BPC-157 or TB-500 appear only in the encyclopaedia, marked For research purposes only, and cannot be added to the cart.",
      },
      {
        heading: "What do the TGA badges mean?",
        body: "Each name has one mark that fits the product: TGA approved (shop cosmetics and cosmetic ingredients), approved medicine (registered medicines in the encyclopaedia), or for research purposes only (research-only peptides). Open Learn → TGA status.",
      },
      {
        heading: "Are shop serums TGA-approved medicines?",
        body: "Shop serums carry TGA approved as leave-on cosmetics. That is not the same as the approved medicine mark used on prescription encyclopaedia entries. Neither mark means we sell injectables.",
      },
      {
        heading: "Do you sell steroid oils or tablets?",
        body: "No anabolic steroid oils or tablets. Those stay in the educational oils & tablets library. Shop → Tablets is for oral NAD+ — the legal, needle-free version of NAD+ versus injectable drips, not grey-market steroids.",
      },
      {
        heading: "Do you sell NAD+ injections or Ozempic patches?",
        body: "No. We sell high-purity NAD+ tablets and transdermal NAD+ patches, plus GLP-1 support patches that are not Ozempic, Wegovy, or Mounjaro. Boutique NAD+ needles and prescription GLP-1 pens are not in the cart.",
      },
      {
        heading: "Is any of this medical advice?",
        body: "No. Hubs for menopause appearance, hair appearance, and aftercare are cosmetic information. See a registered practitioner for medical concerns.",
      },
      {
        heading: "Can I check out?",
        body: "You can use the demo cart and fake checkout. Nothing is charged until real payments are connected.",
      },
    ],
  },
  "/about": {
    kicker: "Our story",
    title: "Cellular Sequence",
    intro:
      "An Australian house for advanced skin protocols and scientific peptide literacy — with a bright line between cosmetics you can buy and compounds you should only read about.",
    sections: [
      {
        heading: "The bet",
        body: "Search and answer engines should find us for peptide science, not for grey-market vials. That is why the encyclopaedia is a top-level product of the brand.",
      },
    ],
  },
  "/about/the-longevity-protocol": {
    kicker: "Cellular Sequence",
    title: "A method, not a miracle",
    intro:
      "Skin barrier, cosmetic peptides, metabolic literacy, and refusal to medicalise the checkout.",
    sections: [{ heading: "Standards", body: "See Our Standards and Regulatory Approach." }],
  },
  "/about/standards": {
    kicker: "Our standards",
    title: "What we will not do",
    intro:
      "We will not sell research-only peptides, advertise approved medicines to the public as shop SKUs, or hide risk behind ‘for research’ checkout pages.",
    sections: [
      {
        heading: "Evidence language",
        body: "Cosmetic, investigational and approved are different words. We print them as badges on purpose.",
      },
    ],
  },
  "/about/science-evidence": {
    kicker: "Science & evidence",
    title: "How evidence is graded here",
    intro:
      "Human randomised evidence, labelled medicines, cosmetic studies, and rodent papers are not interchangeable. Encyclopaedia entries keep those layers separate.",
    sections: [{ heading: "AEO", body: "Structured compound pages exist so answers can cite us without flattening status." }],
  },
  "/about/regulatory-approach": {
    kicker: "Regulatory approach",
    title: "Australia first",
    intro:
      "ARTG status, cosmetic versus therapeutic advertising, and TGA warning histories shape what we sell and how we write.",
    sections: [
      {
        heading: "Two rails",
        body: "Rail one: consumer products that are lawful cosmetics or permitted supplements. Rail two: encyclopaedia entries that may describe unapproved substances with explicit non-sale status.",
      },
    ],
  },
  "/about/contact": {
    kicker: "Contact",
    title: "Contact",
    intro: "Press, science corrections, and shop questions — not sourcing requests for research peptides.",
    sections: [
      {
        heading: "Corrections",
        body: `If an encyclopaedia status badge is wrong, email ${SCIENCE_EMAIL} with the citation. We will amend faster than we will add a SKU.`,
      },
      {
        heading: "Privacy",
        body: "A full Privacy Policy is linked from the footer and the About menu.",
      },
    ],
  },
  "/privacy": {
    kicker: "Legal",
    title: "Privacy Policy",
    intro:
      `This policy explains how Cellular Sequence (${SITE_HOST}) handles personal information. It is written for a small Australian retail and education site. It is not legal advice.`,
    sections: [
      {
        heading: "Who we are",
        body: `Cellular Sequence operates ${SITE_URL}. Shop pages offer cosmetic devices, topical peptide serums and permitted consumer products. The encyclopaedia is educational. Research-only compounds are not sold. Privacy questions: ${SCIENCE_EMAIL}.`,
      },
      {
        heading: "What we collect",
        body: "We may collect your name, email address, delivery details and message content if you contact us or place an order. The site also generates ordinary technical logs (for example IP address, browser type, pages viewed and time of visit) through our hosting provider so the site can run and stay secure. Encyclopaedia search is typed in your browser; we do not use it to build a health file about you.",
      },
      {
        heading: "Cookies and similar tools",
        body: "We use cookies or similar storage that are needed for the site to function (for example keeping a page working as you move around). We do not claim to run advertising pixels or health-profiling tools on this site. If that changes, this policy will be updated first.",
      },
      {
        heading: "How we use information",
        body: "We use personal information to reply to you, to fulfil lawful shop orders if you buy a consumer product, to keep the site secure, and to meet Australian legal obligations. We do not use encyclopaedia browsing to sell research-only peptides, and we do not offer those compounds for purchase.",
      },
      {
        heading: "Who we share it with",
        body: "Hosting, email and (when checkout is used) payment or shipping providers may process information for us, only to provide that service. We do not sell your personal information. We may disclose information if Australian law requires it.",
      },
      {
        heading: "Storage and security",
        body: "Information may be stored by our infrastructure providers, including outside Australia, which is common for websites hosted on global platforms. We take reasonable steps to protect information, but no website can guarantee complete security.",
      },
      {
        heading: "How long we keep it",
        body: "We keep contact and order records only as long as needed for the enquiry, the order, or the law (for example tax records). Technical logs are kept for a short operational period unless we must retain them longer for security or legal reasons.",
      },
      {
        heading: "Your rights",
        body: `Under the Australian Privacy Principles you can ask for access to personal information we hold about you, and ask us to correct it. Email ${SCIENCE_EMAIL}. If you are not satisfied, you may contact the Office of the Australian Information Commissioner (oaic.gov.au).`,
      },
      {
        heading: "Children",
        body: "This site is intended for adults. We do not knowingly collect personal information from children for shop or encyclopaedia use.",
      },
      {
        heading: "Changes",
        body: "We may update this policy. The date below is the current version. Continued use of the site after a change means the new version applies to later visits.",
      },
      {
        heading: "Effective date",
        body: "13 September 2026.",
      },
    ],
  },
};
