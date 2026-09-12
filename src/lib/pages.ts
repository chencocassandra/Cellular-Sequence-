import { SCIENCE_EMAIL } from "./site";

export type ContentPage = {
  title: string;
  kicker?: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const pages: Record<string, ContentPage> = {
  "/longevity": {
    kicker: "Longevity",
    title: "Healthy ageing, explained with restraint",
    intro:
      "Longevity Protocol treats ageing biology as a literacy project — NAD+, mitochondria, oxidative stress — without selling unapproved peptide drugs as anti-ageing cures.",
    sections: [
      {
        heading: "How to use this section",
        body: "Start with NAD+ education, then NMN and NR as distinct molecules with different regulatory stories. Shop links, where present, go only to permitted consumer products.",
      },
    ],
  },
  "/longevity/nad": {
    kicker: "NAD+ education",
    title: "What NAD+ is — and is not",
    intro:
      "Nicotinamide adenine dinucleotide is a cofactor in redox metabolism and a substrate for sirtuins and PARPs. Blood or tissue NAD+ is not a consumer peptide, and IV NAD+ is not an encyclopaedia-approved shortcut.",
    sections: [
      {
        heading: "The honest version",
        body: "NAD+ biology is real. Consumer ‘NAD+ boosting’ claims often outrun human outcome data. We separate mechanisms, precursors (NMN, NR, niacin), and what remains investigational.",
      },
    ],
  },
  "/longevity/nmn": {
    kicker: "NMN",
    title: "Nicotinamide mononucleotide",
    intro:
      "NMN is a NAD+ precursor studied in metabolic ageing research. Its food-supplement status has been contested in several markets. We cover the science here; we do not treat NMN as an unapproved medicine.",
    sections: [
      {
        heading: "Regulatory note (Australia)",
        body: "Always check current TGA and Food Standards positions before purchasing NMN products. Longevity Protocol will only offer NMN if it is lawful as a complementary medicine or food in Australia at the time of sale.",
      },
    ],
  },
  "/longevity/nr": {
    kicker: "NR",
    title: "Nicotinamide riboside",
    intro:
      "NR is another NAD+ precursor with a more established listed-supplement pathway in some jurisdictions. Evidence for dramatic longevity outcomes in healthy humans remains limited.",
    sections: [
      {
        heading: "Read next",
        body: "Compare NR with NMN in the Longevity Library, then return to permitted antioxidant products in the shop if you want a consumer product pathway.",
      },
    ],
  },
  "/longevity/healthy-ageing": {
    kicker: "Healthy ageing",
    title: "The unfashionable fundamentals",
    intro:
      "Cardiorespiratory fitness, protein and resistance training, sleep, cardiometabolic control and not smoking still dominate healthy-ageing evidence. Peptides do not replace them.",
    sections: [
      {
        heading: "Where peptides fit",
        body: "Cosmetic peptides may support the look of skin. Approved peptide medicines treat diseases. Research-only peptides stay in the encyclopaedia.",
      },
    ],
  },
  "/longevity/mitochondrial-health": {
    kicker: "Mitochondrial health",
    title: "Energy organelles, not a product category",
    intro:
      "Mitochondria sit at the centre of ageing hypotheses — ROS, mtDNA, NAD+/NADH ratios. Education first; products second, and only when permitted.",
    sections: [{ heading: "Library", body: "See the Longevity Library for structured explainers." }],
  },
  "/longevity/antioxidants": {
    kicker: "Antioxidants",
    title: "Redox literacy",
    intro:
      "Antioxidant nutrients can be part of a permitted supplement range. High-dose antioxidant medicine stories are often weaker than marketing implies.",
    sections: [
      {
        heading: "Shop",
        body: "Permitted antioxidant complexes live in Shop → Longevity. They are not research peptides.",
      },
    ],
  },
  "/longevity/library": {
    kicker: "Longevity library",
    title: "A reading path, not a sales funnel",
    intro:
      "Essays and explainers on NAD+, mitochondria, senescent cells, and how to read a peptide paper without being sold an unapproved vial.",
    sections: [
      {
        heading: "Also see",
        body: "The Peptide Encyclopaedia remains the canonical compound database. This library is narrative. The encyclopaedia is reference.",
      },
    ],
  },
  "/skin": {
    kicker: "Skin",
    title: "Advanced skin, within cosmetic law",
    intro:
      "Facial needling, micro-infusion and copper-peptide skincare — designed as a protocol, with hygiene and aftercare treated as seriously as the device.",
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
    sections: [
      {
        heading: "Safety",
        body: "Never share cartridges. Do not needle active infection, eczema flares, or isotretinoin courses without a clinician. Read Disposal & Sharps Safety.",
      },
    ],
  },
  "/skin/micro-infusion": {
    kicker: "Micro-infusion",
    title: "Serum delivery with restraint",
    intro:
      "Micro-infusion stamps and pens are still cosmetic devices in our range — not medical procedures and not a route for research peptides.",
    sections: [
      {
        heading: "What we allow on skin",
        body: "Only cosmetic serums designed for the protocol. No grey-market vials. No ‘research use only’ liquids on the face.",
      },
    ],
  },
  "/skin/peptide-serums": {
    kicker: "Peptide serums",
    title: "Topical peptides with honest claims",
    intro:
      "Leave-on serums built around GHK-Cu, palmitoyl pentapeptide-4 and related cosmetic peptides.",
    sections: [{ heading: "Encyclopaedia", body: "Each INCI name has a full scientific entry with status badges." }],
  },
  "/skin/ghk-cu": {
    kicker: "GHK-Cu",
    title: "Copper peptide skincare",
    intro:
      "GHK-Cu is a signature topical in the protocol. It is a cosmetic peptide, not an injectable medicine.",
    sections: [
      {
        heading: "Read the entry",
        body: "The Peptide Encyclopaedia page for GHK-Cu covers structure, evidence grade, and Australian cosmetic versus therapeutic lines.",
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
    sections: [{ heading: "Longevity overlap", body: "See Mitochondrial Health in the Longevity section." }],
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
    sections: [{ heading: "Shop", body: "Pen Accessories." }],
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
  "/learn/faqs": {
    kicker: "FAQs",
    title: "FAQs",
    intro: "Shop, skin protocol, and encyclopaedia questions.",
    sections: [
      {
        heading: "Do you sell BPC-157 or similar peptides?",
        body: "No. Research-only peptides are documented for education with Not approved for human use badges. They cannot be purchased from this site.",
      },
      {
        heading: "Is the encyclopaedia medical advice?",
        body: "No. It is scientific literacy. Approved medicines require a registered prescriber.",
      },
    ],
  },
  "/about": {
    kicker: "Our story",
    title: "Longevity Protocol",
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
    kicker: "The Longevity Protocol",
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
    intro: "Press, science corrections, and wholesale for cosmetic products — not sourcing requests for research peptides.",
    sections: [
      {
        heading: "Corrections",
        body: `If an encyclopaedia status badge is wrong, email ${SCIENCE_EMAIL} with the citation. We will amend faster than we will add a SKU.`,
      },
    ],
  },
};
