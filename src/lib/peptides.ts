import { cataloguePeptides } from "./cataloguePeptides";
import { vendorCataloguePeptides } from "./vendorCataloguePeptides";
import {
  AREA_LABELS,
  BADGE_LABELS,
  type Peptide,
  type PeptideArea,
  type RegulatoryBadge,
} from "./types";

const corePeptides: Peptide[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    alternativeNames: ["Ozempic", "Wegovy", "Rybelsus"],
    peptideClass: "GLP-1 receptor agonist (incretin mimetic)",
    structure:
      "Modified 31-amino-acid analogue of human glucagon-like peptide-1 (GLP-1), with amino-acid substitutions and a C18 fatty-diacid side chain that prolongs albumin binding and half-life.",
    whatItIs:
      "A prescription peptide medicine used, in approved indications and formulations, for type 2 diabetes and chronic weight management. It is not a cosmetic ingredient and is not a general wellness supplement.",
    howItWorks:
      "Semaglutide activates GLP-1 receptors, slowing gastric emptying, reducing appetite via central pathways, and enhancing glucose-dependent insulin secretion while lowering glucagon.",
    whatItDoesInBody:
      "In people with an approved clinical indication, it can improve glycaemic control and support clinically supervised weight reduction. Effects are pharmacological, not nutritional.",
    studiedFor: [
      "Type 2 diabetes",
      "Chronic weight management",
      "Cardiovascular outcomes in selected high-risk populations",
    ],
    potentialBenefits: [
      "Improved glycaemic control in type 2 diabetes (approved use)",
      "Clinically supervised weight reduction in eligible patients",
      "Cardiovascular risk reduction in specific labelled populations",
    ],
    mayNotBeUsefulFor: [
      "Cosmetic weight loss without a medical indication",
      "Athletic performance or body-composition ‘cutting’ outside medical care",
      "Skin, hair, or cognitive enhancement",
    ],
    humanEvidence:
      "Extensive Phase 3 programmes (including SUSTAIN and STEP trials) and subsequent cardiovascular outcome data support labelled indications. This is among the most thoroughly studied peptide medicines in current clinical use.",
    preclinicalEvidence:
      "GLP-1 receptor biology is well characterised in animal models of glucose regulation and energy intake; translational relevance is established via human trials rather than preclinical claims alone.",
    sideEffects:
      "Common effects include nausea, vomiting, diarrhoea, constipation and reduced appetite. Serious risks discussed in product information include pancreatitis, gallbladder disease, and a boxed warning in some jurisdictions regarding thyroid C-cell tumours observed in rodents (human relevance uncertain). Hypoglycaemia risk rises when combined with insulin or sulfonylureas.",
    contraindications:
      "Product information typically contraindicates use in people with a personal or family history of medullary thyroid carcinoma or MEN2, and in hypersensitivity to the drug. Pregnancy, breastfeeding and specific GI diseases require specialist judgement. Always follow the Australian Product Information.",
    regulatoryStatus:
      "Approved prescription medicine in multiple jurisdictions (including FDA and EMA) for defined diabetes and/or weight-management indications, depending on brand and dose.",
    australianRegulatoryStatus:
      "Registered on the Australian Register of Therapeutic Goods (ARTG) as a prescription-only medicine in specific brands and indications. Not a listed complementary medicine. Not supplied by Longevity Protocol.",
    badges: ["APPROVED_MEDICINE"],
    areas: ["metabolic", "healthy-ageing"],
    availableToPurchase: false,
    searchTerms: ["glp-1", "ozempic", "wegovy", "diabetes", "weight"],
    references: [
      {
        title: "STEP 1 trial — once-weekly semaglutide for weight management",
        citation: "Wilding JPH et al. N Engl J Med. 2021;384:989–1002.",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
      },
      {
        title: "SUSTAIN-6 cardiovascular outcomes",
        citation: "Marso SP et al. N Engl J Med. 2016;375:1834–1844.",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607141",
      },
    ],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    alternativeNames: ["Mounjaro", "Zepbound"],
    peptideClass: "Dual GIP and GLP-1 receptor agonist",
    structure:
      "Linear peptide engineered from the GIP sequence with modifications enabling dual activity at glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptors, plus a fatty-acid moiety for extended duration.",
    whatItIs:
      "A prescription peptide medicine for type 2 diabetes and, in some markets and brands, chronic weight management. It is not sold as a research chemical or cosmetic.",
    howItWorks:
      "Simultaneous GIP and GLP-1 receptor agonism affects insulin secretion, glucagon, appetite and gastric emptying. The dual mechanism is distinct from single GLP-1 agonists.",
    whatItDoesInBody:
      "In labelled populations it can substantially improve glycaemic control and body weight under medical supervision.",
    studiedFor: [
      "Type 2 diabetes (SURPASS programme)",
      "Obesity and overweight with comorbidities (SURMOUNT programme)",
    ],
    potentialBenefits: [
      "Glycaemic improvement in type 2 diabetes",
      "Clinically supervised weight reduction in eligible patients",
    ],
    mayNotBeUsefulFor: [
      "Unsupervised aesthetic weight loss",
      "Sports performance",
      "Dermatological or cognitive indications",
    ],
    humanEvidence:
      "Large randomised programmes (SURPASS, SURMOUNT) demonstrate efficacy for labelled metabolic indications. Long-term safety continues to be characterised in post-marketing surveillance.",
    preclinicalEvidence:
      "Dual incretin receptor activity has been modelled in rodents and non-human primates; human labelling rests on clinical trials.",
    sideEffects:
      "Gastrointestinal effects similar to GLP-1 agonists are common. Product information discusses pancreatitis, gallbladder disease, hypersensitivity and the rodent thyroid C-cell finding shared by this class.",
    contraindications:
      "Similar class cautions to other incretin mimetics, including MEN2/MTC history where listed. Prescription-only; not for compounding as a ‘research peptide’.",
    regulatoryStatus:
      "Approved prescription medicine in major markets for specified indications.",
    australianRegulatoryStatus:
      "Registered on the ARTG as a prescription medicine for approved indications. Not available from this store.",
    badges: ["APPROVED_MEDICINE"],
    areas: ["metabolic", "healthy-ageing"],
    availableToPurchase: false,
    searchTerms: ["mounjaro", "gip", "glp-1", "twincretin"],
    references: [
      {
        title: "SURPASS-2 — tirzepatide vs semaglutide in type 2 diabetes",
        citation: "Frías JP et al. N Engl J Med. 2021;385:503–515.",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
      },
    ],
  },
  {
    slug: "liraglutide",
    name: "Liraglutide",
    alternativeNames: ["Victoza", "Saxenda"],
    peptideClass: "GLP-1 receptor agonist",
    structure:
      "Acylated GLP-1 analogue (Arg34Lys26-[N-ε-(γ-Glu[N-α-hexadecanoyl])] GLP-1(7–37)) with once-daily pharmacokinetics via albumin binding.",
    whatItIs:
      "A well-established prescription peptide medicine. Different brands and doses correspond to diabetes versus weight-management indications.",
    howItWorks:
      "GLP-1 receptor agonism with daily subcutaneous administration (or as specified in the Product Information).",
    whatItDoesInBody:
      "Improves glucose-dependent insulin secretion and reduces appetite in labelled use.",
    studiedFor: [
      "Type 2 diabetes",
      "Weight management (higher-dose brand)",
      "Cardiovascular outcomes (LEADER)",
    ],
    potentialBenefits: [
      "Glycaemic control",
      "Weight management in eligible patients",
    ],
    mayNotBeUsefulFor: [
      "Cosmetic peptide skincare",
      "Cognitive enhancement",
    ],
    humanEvidence:
      "LEADER and SCALE programmes provide substantial human evidence for labelled uses.",
    preclinicalEvidence:
      "Classic GLP-1 analogue pharmacology; clinical evidence is the relevant standard.",
    sideEffects:
      "GI effects are common. Class warnings include pancreatitis and rodent thyroid C-cell tumours.",
    contraindications:
      "As per Product Information; prescription-only medicine.",
    regulatoryStatus: "Approved prescription medicine internationally.",
    australianRegulatoryStatus:
      "ARTG-registered prescription medicine in approved presentations. Not sold by Longevity Protocol.",
    badges: ["APPROVED_MEDICINE"],
    areas: ["metabolic"],
    availableToPurchase: false,
    searchTerms: ["victoza", "saxenda", "glp-1"],
    references: [
      {
        title: "LEADER trial",
        citation: "Marso SP et al. N Engl J Med. 2016;375:311–322.",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1603827",
      },
    ],
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    alternativeNames: [
      "Copper tripeptide-1",
      "Glycyl-L-histidyl-L-lysine copper",
      "Copper peptide",
    ],
    peptideClass: "Naturally occurring copper-binding tripeptide (cosmetic / topical research)",
    structure:
      "Tripeptide GHK (glycyl-L-histidyl-L-lysine) complexed with a copper(II) ion. Sequence: Gly-His-Lys.",
    whatItIs:
      "A small copper-binding peptide found in human plasma and used widely in cosmetic skincare. Topical GHK-Cu is a cosmetic ingredient in Longevity Protocol serums. It is not an approved systemic medicine.",
    howItWorks:
      "GHK has a high affinity for copper(II). In skin-care research, the complex is studied for signalling related to extracellular-matrix remodelling, antioxidant gene expression and wound-biology pathways — mostly in cell and tissue models, with more limited clinical cosmetic studies.",
    whatItDoesInBody:
      "Endogenous GHK declines with age in plasma. Topical leave-on products act at the skin surface and upper epidermis; they are not equivalent to injectable or systemic peptide medicines.",
    studiedFor: [
      "Cosmetic appearance of skin firmness and fine lines",
      "Wound-biology and dermal matrix gene expression (largely preclinical)",
      "Hair-appearance formulations (limited cosmetic data)",
    ],
    potentialBenefits: [
      "Cosmetic support for the look of skin smoothness and elasticity",
      "Use in leave-on serums compatible with facial needling aftercare protocols (when the skin barrier has recovered, as directed)",
    ],
    mayNotBeUsefulFor: [
      "Treating disease, scars requiring medical care, or hair loss as a medicine",
      "Systemic anti-ageing when swallowed or injected — those uses are not approved medicines here",
    ],
    humanEvidence:
      "Human data are mainly small cosmetic and dermatology studies, not pharmaceutical Phase 3 programmes. Evidence quality is not comparable to approved peptide medicines.",
    preclinicalEvidence:
      "Substantial cell-culture and tissue work describes gene-expression changes associated with matrix remodelling and antioxidant pathways. These findings should not be over-translated into medical claims.",
    sideEffects:
      "Topical products may cause irritation, copper staining of fabrics, or contact sensitivity. Do not apply to broken skin unless a clinician directs otherwise.",
    contraindications:
      "Known copper hypersensitivity; caution with disrupted barrier immediately after aggressive needling. Not for injection. Not for children.",
    regulatoryStatus:
      "Used as a cosmetic ingredient in many markets. Not an FDA- or TGA-approved drug for anti-ageing injection.",
    australianRegulatoryStatus:
      "Permitted in cosmetic (and some listed) topical products when formulated and advertised within cosmetic/listed-medicine rules. Injectable GHK-Cu is not an approved medicine for consumer supply. Longevity Protocol sells topical cosmetic serums only.",
    badges: ["COSMETIC"],
    areas: ["skin-hair", "healthy-ageing"],
    availableToPurchase: true,
    productHref: "/shop/peptide-serums",
    searchTerms: ["copper peptide", "ghk", "skin", "serum", "hair"],
    references: [
      {
        title: "Review of GHK and GHK-Cu in skin biology",
        citation: "Pickart L, Margolina A. Biomed Res Int. 2018;2018:6481630. (review; interpret conservatively)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
      },
    ],
  },
  {
    slug: "palmitoyl-pentapeptide-4",
    name: "Palmitoyl pentapeptide-4",
    alternativeNames: ["Matrixyl", "Pal-KTTKS"],
    peptideClass: "Signal peptide (cosmetic)",
    structure:
      "Palmitoylated pentapeptide Pal-Lys-Thr-Thr-Lys-Ser, a fragment-inspired sequence related to procollagen signalling, lipidated to improve skin affinity.",
    whatItIs:
      "A widely used cosmetic ‘matrikine’ peptide in anti-ageing skincare. It is an ingredient, not a medicine.",
    howItWorks:
      "Marketed as a messenger peptide that may support the appearance of extracellular-matrix proteins in the skin. Mechanisms are inferred from in-vitro fibroblast studies and cosmetic clinical photography.",
    whatItDoesInBody:
      "Intended for topical cosmetic action in the epidermis/upper dermis. It is not designed for systemic peptide signalling.",
    studiedFor: ["Appearance of wrinkles and skin smoothness (cosmetic trials)"],
    potentialBenefits: ["Cosmetic improvement in the look of fine lines with consistent use"],
    mayNotBeUsefulFor: [
      "Medical treatment of dermatoses",
      "Injectable ‘biostimulation’ as a drug",
    ],
    humanEvidence:
      "Industry-sponsored cosmetic studies report wrinkle-appearance changes. Independent pharmaceutical-grade evidence is limited.",
    preclinicalEvidence: "In-vitro collagen-related assays are frequently cited by manufacturers.",
    sideEffects: "Generally well tolerated topically; irritation is possible in active routines.",
    contraindications: "Allergy to formulation components.",
    regulatoryStatus: "Cosmetic ingredient.",
    australianRegulatoryStatus:
      "Used in cosmetics. Therapeutic claims would push a product toward therapeutic-goods regulation — Longevity Protocol keeps claims cosmetic.",
    badges: ["COSMETIC"],
    areas: ["skin-hair"],
    availableToPurchase: true,
    productHref: "/shop/peptide-serums",
    searchTerms: ["matrixyl", "kttks", "wrinkle", "serum"],
    references: [
      {
        title: "Pal-KTTKS cosmetic clinical literature (manufacturer and independent summaries)",
        citation:
          "Lintner K, Peschard O. Int J Cosmet Sci. 2000;22:207–218. Interpret as cosmetic, not medical, evidence.",
      },
    ],
  },
  {
    slug: "acetyl-hexapeptide-8",
    name: "Acetyl hexapeptide-8",
    alternativeNames: ["Argireline", "Ac-EEMQRR-NH2"],
    peptideClass: "Neurotransmitter-affecting peptide (cosmetic topical)",
    structure:
      "Acetylated hexapeptide mimicking the N-terminal SNAP-25 fragment (Ac-Glu-Glu-Met-Gln-Arg-Arg-NH2).",
    whatItIs:
      "A topical cosmetic peptide explored for the appearance of expression lines. It is not botulinum toxin and is not an approved wrinkle medicine.",
    howItWorks:
      "In vitro, related sequences can interfere with SNARE-complex assembly. Whether topical leave-on products reproduce that pharmacology in living facial muscle is uncertain; cosmetic outcomes, if any, are modest compared with prescription neuromodulators.",
    whatItDoesInBody:
      "Applied to intact skin as a cosmetic. It does not replace prescription anti-wrinkle injections.",
    studiedFor: ["Appearance of periorbital expression lines (cosmetic)"],
    potentialBenefits: ["Possible softening in the look of fine expression lines"],
    mayNotBeUsefulFor: [
      "Equivalent results to botulinum toxin medicines",
      "Deep folds or medical facial palsy",
    ],
    humanEvidence:
      "Small cosmetic studies exist; effect sizes are typically modest and formulations vary widely.",
    preclinicalEvidence: "SNARE-related in-vitro work underpins marketing narratives.",
    sideEffects: "Irritation possible; not for injection.",
    contraindications: "Broken skin; hypersensitivity to ingredients.",
    regulatoryStatus: "Cosmetic ingredient, not a toxin medicine.",
    australianRegulatoryStatus:
      "Cosmetic use only. Botulinum toxin type A products are separate prescription medicines and are not sold here.",
    badges: ["COSMETIC"],
    areas: ["skin-hair"],
    availableToPurchase: true,
    productHref: "/shop/peptide-serums",
    searchTerms: ["argireline", "expression lines", "snap-25"],
    references: [
      {
        title: "Acetyl hexapeptide-8 mechanism overview",
        citation:
          "Blanes-Mira C et al. Int J Cosmet Sci. 2002;24:303–310. Cosmetic/in-vitro context.",
      },
    ],
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    alternativeNames: ["Tyr-hGH fragment 177–191", "Advanced Obesity Drug 9604"],
    peptideClass: "Modified C-terminal fragment of human growth hormone",
    structure:
      "A 16-amino-acid peptide corresponding to GH residues 177–191 with a tyrosine substitution at the N-terminus, developed to isolate metabolic rather than growth-promoting GH activity.",
    whatItIs:
      "An investigational analogue studied historically for obesity. It is not an approved weight-loss medicine in Australia.",
    howItWorks:
      "Designed to mimic lipolytic signalling associated with the C-terminus of GH without stimulating IGF-1 in the same way as intact GH — a hypothesis that required clinical confirmation and did not result in an approved obesity drug.",
    whatItDoesInBody:
      "Clinical development did not establish a favourable enough efficacy/safety package for registration as an obesity medicine.",
    studiedFor: ["Obesity and fat metabolism (historical clinical development)"],
    potentialBenefits: [
      "No established approved benefit; research interest is historical and mechanistic",
    ],
    mayNotBeUsefulFor: [
      "Evidence-based obesity care (approved incretin medicines are the relevant drug class today)",
      "Sports performance (anti-doping risk)",
    ],
    humanEvidence:
      "Clinical trials were conducted; the compound did not become a registered obesity medicine. Human evidence is therefore incomplete for therapeutic use.",
    preclinicalEvidence:
      "Animal lipolysis studies motivated development but are not a basis for consumer use.",
    sideEffects:
      "Trial reports should be read in the original literature; unregulated products have unknown impurities and doses.",
    contraindications:
      "Not for human use outside approved clinical trials. Not for athletes subject to WADA.",
    regulatoryStatus:
      "Not approved as a medicine for obesity in the US/EU. Often illegally marketed as a research peptide.",
    australianRegulatoryStatus:
      "Not an ARTG-registered medicine for weight loss. The TGA has previously taken action in the peptide compounding / advertising space. Educational listing only — not sold.",
    badges: ["INVESTIGATIONAL", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["metabolic"],
    availableToPurchase: false,
    searchTerms: ["hgh fragment", "177-191", "obesity peptide"],
    references: [
      {
        title: "AOD9604 clinical development context",
        citation:
          "See published obesity-trial literature and TGA public statements on unapproved peptides. No consumer-use recommendation.",
      },
    ],
  },
  {
    slug: "semax",
    name: "Semax",
    alternativeNames: ["ACTH(4–7)-PGP", "Met-Glu-His-Phe-Pro-Gly-Pro"],
    peptideClass: "Synthetic ACTH fragment analogue (nootropic research)",
    structure:
      "Heptapeptide analogue of ACTH(4–7) with a C-terminal Pro-Gly-Pro extension. Sequence: Met-Glu-His-Phe-Pro-Gly-Pro.",
    whatItIs:
      "A peptide studied mainly in Russian clinical and experimental literature for neurological and cognitive research. It is not an approved cognitive medicine on the ARTG.",
    howItWorks:
      "Proposed mechanisms include effects on BDNF-related signalling, melanocortin pathways and neurotransmitter systems. These remain investigational outside jurisdictions where it is locally registered.",
    whatItDoesInBody:
      "Human pharmacology is less standardised in English-language Phase 3 programmes than for Western approved peptide drugs.",
    studiedFor: [
      "Cognitive and ischaemic neuroscience research",
      "Nootropic experimental use (not an Australian approved indication)",
    ],
    potentialBenefits: [
      "Being researched in cognitive and neuroprotection models — not established as an Australian therapeutic",
    ],
    mayNotBeUsefulFor: [
      "Replacing assessed medical care for stroke, ADHD or dementia",
      "Guaranteed ‘smart drug’ effects",
    ],
    humanEvidence:
      "A body of clinical reports exists largely outside ICH-standard global registration packages. Quality and bias vary. Not a substitute for TGA-evaluated nootropic medicines (of which few exist).",
    preclinicalEvidence: "Rodent studies report BDNF and behavioural effects; translation is uncertain.",
    sideEffects:
      "Intranasal irritation and unknown long-term safety in unregulated products. Quality of research-chemical supply is a major independent risk.",
    contraindications:
      "Not for self-administration. Not approved for human use in Australia.",
    regulatoryStatus:
      "Used as a registered product in some Eastern European settings; not a globally harmonised approved nootropic.",
    australianRegulatoryStatus:
      "Not registered on the ARTG as a cognitive medicine. Research/educational entry only. No product is offered for sale.",
    badges: ["INVESTIGATIONAL", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["cognitive"],
    availableToPurchase: false,
    searchTerms: ["nootropic", "acth", "bdnf", "intranasal peptide"],
    references: [
      {
        title: "Semax and BDNF-related experimental literature",
        citation:
          "Multiple experimental papers (e.g. Russian Journal of Physiology / neuroscience journals). Treat as investigational, not practice-changing evidence.",
      },
    ],
  },
  {
    slug: "selank",
    name: "Selank",
    alternativeNames: ["Thr-Lys-Pro-Arg-Pro-Gly-Pro"],
    peptideClass: "Synthetic tuftsin analogue (anxiolytic research)",
    structure:
      "Heptapeptide tuftsin analogue: Thr-Lys-Pro-Arg-Pro-Gly-Pro.",
    whatItIs:
      "An investigational peptide studied for anxiety-related and immunomodulatory research. Not an Australian approved psychotropic medicine.",
    howItWorks:
      "Proposed GABAergic and enkephalin-related modulation; evidence is preliminary by global drug-development standards.",
    whatItDoesInBody:
      "Not characterised as a first-line anxiolytic in Australian clinical guidelines.",
    studiedFor: ["Anxiety models", "Immune peptide research"],
    potentialBenefits: ["Research interest in stress and anxiety biology — unproven as consumer therapy"],
    mayNotBeUsefulFor: ["Replacing indicated anxiety treatments", "Performance enhancement"],
    humanEvidence: "Limited, regionally concentrated clinical literature; not TGA-evaluated.",
    preclinicalEvidence: "Animal anxiolytic models exist.",
    sideEffects: "Poorly defined in unregulated use; product quality unknown.",
    contraindications: "Not for human use in Australia outside trials.",
    regulatoryStatus: "Investigational / locally registered in some regions only.",
    australianRegulatoryStatus: "Not ARTG-registered. Educational listing. Not sold.",
    badges: ["INVESTIGATIONAL", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["cognitive"],
    availableToPurchase: false,
    searchTerms: ["anxiety", "tuftsin", "nootropic"],
    references: [
      {
        title: "Selank experimental anxiolytic literature",
        citation: "Preclinical and regional clinical reports; not a basis for consumer supply.",
      },
    ],
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    alternativeNames: [
      "Body Protection Compound-157",
      "BPC157",
      "Pentadecapeptide BPC 157",
    ],
    peptideClass: "Synthetic gastric pentadecapeptide (research only)",
    structure:
      "15-amino-acid partial sequence derived from human gastric juice protein BPC. Sequence commonly given as: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val.",
    whatItIs:
      "A laboratory peptide with extensive preclinical injury-model literature and very limited high-quality human trials. It is not an approved medicine. Longevity Protocol does not sell BPC-157.",
    howItWorks:
      "Preclinical papers propose angiogenic, nitric-oxide and growth-factor pathway effects. Mechanism in humans is not established to a registration standard.",
    whatItDoesInBody:
      "Unknown at pharmaceutical quality, dose and route in well-controlled human studies. Anecdotal internet use is not evidence.",
    studiedFor: [
      "Tendon, muscle and gut injury models (mostly animals)",
      "Experimental wound biology",
    ],
    potentialBenefits: [
      "Being researched in tissue-repair models — not confirmed clinical benefits",
    ],
    mayNotBeUsefulFor: [
      "Proven sports-injury treatment",
      "Gut disease care in place of gastroenterology",
      "Any consumer ‘healing peptide’ protocol",
    ],
    humanEvidence:
      "Robust randomised, peer-reviewed human efficacy data are lacking. This is the central reason it remains research-only.",
    preclinicalEvidence:
      "A large rodent literature reports protective findings across many organ systems. Breadth of preclinical claims is not a substitute for human evidence and raises replication/bias questions.",
    sideEffects:
      "Human safety database is inadequate. Unregulated injectables carry infection, dosing and contamination risks. Theoretical concerns around angiogenesis are discussed in commentary but not mapped in trials.",
    contraindications:
      "Not for human use. Not for compounding as a wellness injection. WADA prohibited as an unapproved substance in sport.",
    regulatoryStatus:
      "Not FDA-approved. FDA has flagged compounding concerns for BPC-157. Not approved in the EU as a medicine.",
    australianRegulatoryStatus:
      "Not included on the ARTG as an approved medicine. Advertising and supply of unapproved peptide medicines can breach the Therapeutic Goods Act. This encyclopaedia entry is educational only.",
    badges: ["RESEARCH_ONLY", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["recovery", "performance"],
    availableToPurchase: false,
    searchTerms: ["bpc", "healing peptide", "tendon", "gut peptide"],
    references: [
      {
        title: "FDA compounding / bulk-substance concerns (US context)",
        citation:
          "US FDA communications on BPC-157 as a bulk substance — illustrates regulator scepticism, not Australian labelling.",
        url: "https://www.fda.gov/drugs/human-drug-compounding/safety-risks-associated-certain-bulk-drug-substances-nominated-use-compounding",
      },
    ],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    alternativeNames: ["Thymosin beta-4 fragment", "Tβ4", "Thymosin β4"],
    peptideClass: "Actin-sequestering peptide fragment (research only)",
    structure:
      "Marketed ‘TB-500’ products often refer to an acetylated fragment of thymosin beta-4 (a 43-amino-acid peptide), not necessarily full-length Tβ4. Sequence and purity of grey-market vials are unreliable.",
    whatItIs:
      "A research-only peptide associated with thymosin beta-4 biology. Full-length Tβ4 has been explored pharmaceutically; consumer ‘TB-500’ is not an approved medicine.",
    howItWorks:
      "Thymosin beta-4 sequesters G-actin and is studied in tissue-repair and angiogenesis models. Fragment products may not reproduce parent-peptide pharmacology.",
    whatItDoesInBody: "Not established for marketed research chemicals.",
    studiedFor: ["Wound and cardiac-repair research (Tβ4)", "Sports-injury folklore (not evidence)"],
    potentialBenefits: ["Preclinical repair biology — no approved consumer benefit"],
    mayNotBeUsefulFor: ["Guaranteed injury recovery", "Legitimate sports medicine"],
    humanEvidence:
      "Pharmaceutical Tβ4 programmes have been limited; TB-500 vials sold online are not those programmes.",
    preclinicalEvidence: "Tβ4 has a genuine actin-biology literature.",
    sideEffects: "Unknown for unregulated products; infection and contamination risk if injected.",
    contraindications: "Not for human use. Prohibited in sport.",
    regulatoryStatus: "Not an approved medicine as TB-500.",
    australianRegulatoryStatus:
      "Not ARTG-registered. Educational only. Not sold. Distinct from any approved thymosin medicines that may exist in other chemical entities.",
    badges: ["RESEARCH_ONLY", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["recovery", "performance"],
    availableToPurchase: false,
    searchTerms: ["thymosin", "tb500", "injury peptide"],
    references: [
      {
        title: "Thymosin beta-4 biology review",
        citation: "Goldstein AL, Hannappel E, Kleinman HK. Expert Opin Biol Ther. 2012;12:37–51.",
      },
    ],
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    alternativeNames: ["DAC:GRF", "Modified GRF 1-29 with DAC"],
    peptideClass: "Growth-hormone–releasing hormone analogue (research only)",
    structure:
      "Tetrasubstituted GRF(1–29) analogue; ‘CJC-1295’ often includes a Drug Affinity Complex (DAC) maleimidopropionyl lysine for albumin conjugation. ‘Mod GRF 1-29’ without DAC is a different pharmacokinetic entity frequently confused in grey-market naming.",
    whatItIs:
      "An unapproved GHRH analogue. Not a consumer GH secretagogue product. Not sold here.",
    howItWorks:
      "Intended to stimulate pituitary GH release via GHRH receptors, with DAC extending half-life via albumin binding.",
    whatItDoesInBody:
      "Would be expected to raise GH/IGF-1 if bioactive and bioavailable — which is precisely why unregulated use is inappropriate without specialist endocrinology and is not approved.",
    studiedFor: ["Experimental GH deficiency / body-composition research historically"],
    potentialBenefits: ["None approved"],
    mayNotBeUsefulFor: ["Anti-ageing clinics without an approved product", "Athletic enhancement (banned)"],
    humanEvidence: "Limited early clinical work; not a registered medicine.",
    preclinicalEvidence: "GHRH analogue pharmacology is known as a class.",
    sideEffects:
      "Class effects of GH axis stimulation can include oedema, arthralgia, insulin resistance and theoretical tumour-growth concerns. Unregulated vials add purity risk.",
    contraindications: "Not for human use. Malignancy history would be a major clinical concern for GH-axis drugs.",
    regulatoryStatus: "Not approved.",
    australianRegulatoryStatus:
      "Not ARTG-registered. GH-related peptides are a high regulatory-risk category. Educational only.",
    badges: ["RESEARCH_ONLY", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["healthy-ageing", "performance"],
    availableToPurchase: false,
    searchTerms: ["ghrh", "mod grf", "growth hormone peptide"],
    references: [
      {
        title: "CJC-1295 DAC clinical pharmacology (early studies)",
        citation: "Teichman SL et al. J Clin Endocrinol Metab. 2006;91:799–805. Not an approval package.",
      },
    ],
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    alternativeNames: ["NNC 26-0161"],
    peptideClass: "Selective ghrelin / GHS-R1a agonist (research only)",
    structure:
      "Pentapeptide growth-hormone secretagogue: Aib-His-D-2-Nal-D-Phe-Lys-NH2.",
    whatItIs:
      "A research-only ghrelin-mimetic peptide formerly explored in medicine development. Not approved for anti-ageing or bodybuilding.",
    howItWorks: "Agonism at the ghrelin receptor stimulates GH release with relatively less ACTH/cortisol effect in experimental descriptions than older GHRPs.",
    whatItDoesInBody: "GH pulse amplification in experimental settings — not an approved therapy.",
    studiedFor: ["Postoperative ileus (development discontinued)", "GH secretion research"],
    potentialBenefits: ["None approved for consumers"],
    mayNotBeUsefulFor: ["Legitimate hormone replacement", "Sports use (banned)"],
    humanEvidence: "Some clinical development; no current major-market approval for wellness.",
    preclinicalEvidence: "Well described as a GHS agonist in animals.",
    sideEffects: "GH-axis effects possible; unregulated product risk.",
    contraindications: "Not for human use.",
    regulatoryStatus: "Not approved as a consumer or prescribed anti-ageing drug.",
    australianRegulatoryStatus: "Not ARTG-registered for supply as a medicine. Not sold.",
    badges: ["RESEARCH_ONLY", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["healthy-ageing", "performance"],
    availableToPurchase: false,
    searchTerms: ["ghrp", "ghrelin", "secretagogue"],
    references: [
      {
        title: "Ipamorelin pharmacology",
        citation: "Raun K et al. Eur J Endocrinol. 1998;139:552–561.",
      },
    ],
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    alternativeNames: ["Epitalon", "Ala-Glu-Asp-Gly", "Epithalamin analogue"],
    peptideClass: "Synthetic tetrapeptide (pineal / telomere research — research only)",
    structure: "Tetrapeptide Ala-Glu-Asp-Gly, analogue of pineal peptide preparations studied in Russian gerontology literature.",
    whatItIs:
      "A research-only peptide associated with telomerase and ageing hypotheses. It is not an approved longevity medicine.",
    howItWorks:
      "Proposed telomerase and circadian/pineal signalling effects are not established to international drug-registration standards.",
    whatItDoesInBody: "Unproven as a human longevity intervention.",
    studiedFor: ["Experimental gerontology", "Telomere biology hypotheses"],
    potentialBenefits: ["None approved; remaining a research question"],
    mayNotBeUsefulFor: ["Evidence-based healthy ageing programmes (sleep, exercise, cardiometabolic care come first)"],
    humanEvidence: "Limited, largely non-ICH literature; not practice-changing.",
    preclinicalEvidence: "Cell and animal ageing models; interpret cautiously.",
    sideEffects: "Unknown long-term; unregulated injectables are unsafe by default.",
    contraindications: "Not for human use.",
    regulatoryStatus: "Not approved as a longevity drug.",
    australianRegulatoryStatus: "Not ARTG-registered. Educational only. Not sold.",
    badges: ["RESEARCH_ONLY", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["healthy-ageing"],
    availableToPurchase: false,
    searchTerms: ["epitalon", "telomere", "pineal peptide"],
    references: [
      {
        title: "Epitalon gerontology literature (interpret with caution)",
        citation: "Khavinson VK and colleagues — multiple experimental papers. Not TGA-evaluated.",
      },
    ],
  },
  {
    slug: "melanotan-ii",
    name: "Melanotan II",
    alternativeNames: ["MT-II", "Melanotan 2"],
    peptideClass: "Cyclic melanocortin receptor agonist (research only)",
    structure:
      "Cyclic lactam analogue of α-MSH: Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2.",
    whatItIs:
      "An unapproved melanocortin peptide used illicitly for tanning. It is not a cosmetic sunscreen and not a registered tanning medicine.",
    howItWorks:
      "Agonism at melanocortin receptors (including MC1R and MC4R) can increase pigmentation and affect appetite and sexual function — which is also why side effects are medically significant.",
    whatItDoesInBody:
      "Can darken skin via eumelanin pathways and cause systemic melanocortin effects. This is pharmacology, not a spa tan.",
    studiedFor: ["Melanocortin biology", "Related analogue bremelanotide took a different development path as a sexual-dysfunction medicine in some markets"],
    potentialBenefits: ["None that justify unapproved tanning use; UV protection still requires sunscreen and shade"],
    mayNotBeUsefulFor: [
      "Safe tanning",
      "Melanoma prevention (it is not a substitute for sun safety and may complicate skin surveillance)",
    ],
    humanEvidence:
      "Early clinical work existed; MT-II was not approved. Public-health agencies have warned against its use.",
    preclinicalEvidence: "Melanocortin pigmentation biology is real — and so are systemic receptor effects.",
    sideEffects:
      "Nausea, flushing, appetite change, spontaneous erections, moles darkening, blood-pressure effects. Case reports of serious harm exist with illicit products. Mole changes can delay melanoma detection.",
    contraindications:
      "Not for human use. Particularly hazardous for people with melanoma risk. Not for children.",
    regulatoryStatus: "Not approved. Illicitly sold online.",
    australianRegulatoryStatus:
      "The TGA has warned Australians about Melanotan products. Not on the ARTG as a tanning medicine. Not sold. Educational warning entry.",
    badges: ["RESEARCH_ONLY", "NOT_APPROVED_FOR_HUMAN_USE"],
    areas: ["skin-hair", "performance"],
    availableToPurchase: false,
    searchTerms: ["tanning peptide", "mt2", "msh", "melanotan"],
    references: [
      {
        title: "TGA warning context on unapproved tanning products",
        citation:
          "See TGA consumer warnings on Melanotan. This entry exists to discourage unapproved use, not to facilitate it.",
        url: "https://www.tga.gov.au/",
      },
    ],
  },
  {
    slug: "palmitoyl-tripeptide-1",
    name: "Palmitoyl tripeptide-1",
    alternativeNames: ["Pal-GHK", "Palmitoyl oligopeptide"],
    peptideClass: "Signal peptide (cosmetic)",
    structure: "Palmitoylated GHK (Gly-His-Lys) without the copper complex required for GHK-Cu.",
    whatItIs:
      "A cosmetic matrikine used in combination serums (often with palmitoyl tetrapeptide-7 in ‘Matrixyl 3000’ type systems).",
    howItWorks: "Lipidated messenger peptide intended to support the look of dermal matrix proteins.",
    whatItDoesInBody: "Topical cosmetic activity only.",
    studiedFor: ["Cosmetic wrinkle appearance"],
    potentialBenefits: ["Appearance of firmer-looking skin in leave-on cosmetics"],
    mayNotBeUsefulFor: ["Medical collagen disorders", "Injectable use"],
    humanEvidence: "Cosmetic studies, often combination formulas.",
    preclinicalEvidence: "Fibroblast assays.",
    sideEffects: "Irritation possible.",
    contraindications: "Ingredient allergy.",
    regulatoryStatus: "Cosmetic ingredient.",
    australianRegulatoryStatus: "Cosmetic use. Longevity Protocol offers topical serums, not injectables.",
    badges: ["COSMETIC"],
    areas: ["skin-hair"],
    availableToPurchase: true,
    productHref: "/shop/peptide-serums",
    searchTerms: ["pal-ghk", "matrixyl 3000", "cosmetic peptide"],
    references: [
      {
        title: "Cosmetic matrikine formulations",
        citation: "Manufacturer clinical photography studies; cosmetic evidence grade.",
      },
    ],
  },
];

export const peptides: Peptide[] = [
  ...corePeptides,
  ...cataloguePeptides,
  ...vendorCataloguePeptides,
];

export function peptideAvailability(p: Peptide): {
  card: string;
  banner: string;
  tone: "shop" | "cosmetic" | "medicine" | "research";
} {
  if (p.availableToPurchase) {
    return {
      tone: "shop",
      card: "May appear in topical serums",
      banner:
        "Cosmetic / topical context. Some finished serums in the shop use related cosmetic peptides — they are leave-on cosmetics, not injectable medicines.",
    };
  }
  if (p.badges.includes("COSMETIC")) {
    return {
      tone: "cosmetic",
      card: "Cosmetic ingredient — encyclopaedia only",
      banner:
        "Cosmetic peptide / protein ingredient for education. Longevity Protocol does not sell this as an injectable. Finished topical products, if any, are labelled as cosmetics.",
    };
  }
  if (p.badges.includes("APPROVED_MEDICINE")) {
    return {
      tone: "medicine",
      card: "Prescription medicine — not sold here",
      banner:
        "Approved-medicine listing only. This is not available from the Longevity Protocol shop. Licensed products require a prescriber and an ARTG-registered presentation.",
    };
  }
  return {
    tone: "research",
    card: "Not available to purchase",
    banner:
      "Research / investigational listing only. This compound is not available for consumer purchase from Longevity Protocol and must not be confused with shop products.",
  };
}

export const statusCollections: {
  slug: string;
  badge: RegulatoryBadge;
  title: string;
  intro: string;
}[] = [
  {
    slug: "approved-medicine",
    badge: "APPROVED_MEDICINE",
    title: "Approved peptide medicines",
    intro:
      "Peptide drugs evaluated and registered for defined medical indications. They are prescription-only where listed and are never sold in the Longevity Protocol shop.",
  },
  {
    slug: "cosmetic",
    badge: "COSMETIC",
    title: "Cosmetic peptides",
    intro:
      "Topical peptide and protein ingredients used in skincare education. A few related actives appear in leave-on serums we sell; most listings here are encyclopaedia-only. None are injectable medicines.",
  },
  {
    slug: "investigational",
    badge: "INVESTIGATIONAL",
    title: "Investigational peptides",
    intro:
      "Compounds with incomplete or non-registrational human programmes. Listed for scientific literacy only.",
  },
  {
    slug: "research-only",
    badge: "RESEARCH_ONLY",
    title: "Research-only peptides",
    intro:
      "Educational entries for compounds that are not approved for human use and are not available to purchase from Longevity Protocol. They are kept strictly separate from the store.",
  },
];

export function getStatusCollection(slug: string) {
  return statusCollections.find((c) => c.slug === slug);
}

export function getPeptide(slug: string) {
  return peptides.find((p) => p.slug === slug);
}

export function peptidesByStatus(badge: RegulatoryBadge) {
  return peptides
    .filter((p) => p.badges.includes(badge))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function peptidesByArea(area: PeptideArea) {
  return peptides
    .filter((p) => p.areas.includes(area))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function searchPeptides(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return peptides.filter((p) => {
    const hay = [
      p.name,
      p.slug,
      ...p.alternativeNames,
      p.peptideClass,
      ...p.studiedFor,
      ...p.areas.map((a) => AREA_LABELS[a]),
      ...p.badges.map((b) => BADGE_LABELS[b]),
      ...p.searchTerms,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function azGroups() {
  const sorted = [...peptides].sort((a, b) => a.name.localeCompare(b.name));
  const map = new Map<string, Peptide[]>();
  for (const p of sorted) {
    const letter = /[A-Z]/i.test(p.name[0]) ? p.name[0].toUpperCase() : "#";
    map.set(letter, [...(map.get(letter) ?? []), p]);
  }
  return [...map.entries()];
}
