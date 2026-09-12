import type { ReactNode } from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import {
  EDUCATIONAL_DISCLAIMER,
  INSUFFICIENT_EVIDENCE,
  RESEARCH_COMPOUND_BANNER,
  citationHref,
  formatCitation,
  glanceRows,
  isApprovedMedicine,
  isInvestigationalListing,
} from "@/lib/encyclopaedia";
import { peptideAvailability } from "@/lib/peptides";
import {
  AREA_LABELS,
  EVIDENCE_GRADE_LABELS,
  type EncCitation,
  type EvidenceGrade,
  type Peptide,
} from "@/lib/types";

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="text-[11px] uppercase tracking-[0.2em] text-bronze">{heading}</h2>
      <div className="mt-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

function Grade({ g }: { g: EvidenceGrade }) {
  return (
    <span className="inline-flex items-center border border-ink px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-ink">
      {g} · {EVIDENCE_GRADE_LABELS[g]}
    </span>
  );
}

function Cite({ keys, citations }: { keys: string[]; citations: EncCitation[] }) {
  return (
    <sup className="ml-0.5 text-[10px] tracking-normal">
      {keys.map((key, i) => {
        const n = citations.findIndex((c) => c.key === key) + 1;
        if (n < 1) return null;
        return (
          <a key={key} href={`#ref-${key}`} className="text-bronze-deep">
            [{n}]{i < keys.length - 1 ? " " : ""}
          </a>
        );
      })}
    </sup>
  );
}

function mechanismLabel(p: Peptide) {
  if (p.mechanismCertainty === "proposed") return "Proposed mechanism";
  if (p.mechanismCertainty === "not-fully-established") return "Mechanism not yet fully established.";
  if (p.mechanismCertainty === "established") return "Established (labelled / textbook receptor pharmacology)";
  return null;
}

export function PeptideEncyclopaediaArticle({ peptide: p }: { peptide: Peptide }) {
  const availability = peptideAvailability(p);
  const citations = p.citations ?? [];
  const box =
    availability.tone === "shop"
      ? "border-sage/30 bg-[#eef3ef] text-sage"
      : availability.tone === "cosmetic"
        ? "border-line bg-[#f4f1ea] text-ink-soft"
        : "border-danger/30 bg-[#f6ece8] text-danger";
  const investigational = isInvestigationalListing(p) && !isApprovedMedicine(p);

  return (
    <article>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Peptide Encyclopaedia</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.badges.map((b) => (
              <StatusBadge key={b} badge={b} />
            ))}
          </div>
          <h1 className="mt-5 font-serif text-5xl">{p.name}</h1>
          {p.alternativeNames.length > 0 ? (
            <p className="mt-3 text-ink-soft">Also known as {p.alternativeNames.join(", ")}.</p>
          ) : null}
          <p className={`mt-6 border px-4 py-3 text-sm ${box}`}>
            {availability.banner}
            {p.productHref ? (
              <>
                {" "}
                <Link href={p.productHref} className="underline">
                  View related products
                </Link>
              </>
            ) : null}
          </p>
          {investigational ? (
            <p className="mt-4 border border-danger bg-ink px-4 py-3 text-sm text-paper">
              <span className="block text-[11px] uppercase tracking-[0.16em]">Research / investigational compound</span>
              <span className="mt-2 block">{RESEARCH_COMPOUND_BANNER}</span>
            </p>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-6">
        <Block heading="At-a-glance profile">
          <dl className="grid gap-3 sm:grid-cols-2">
            {glanceRows(p).map((row) => (
              <div key={row.label} className="border border-line bg-ivory px-3 py-3">
                <dt className="text-[10px] uppercase tracking-[0.16em] text-bronze">{row.label}</dt>
                <dd className="mt-1 text-sm text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block heading="What is it?">
          <p>{p.whatItIs}</p>
          {p.origin ? <p className="mt-3">{p.origin}</p> : null}
        </Block>

        <Block heading="Mechanism of action">
          {mechanismLabel(p) ? (
            <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-bronze">{mechanismLabel(p)}</p>
          ) : null}
          <p>{p.mechanismDetail ?? p.howItWorks}</p>
          <p className="mt-3">{p.whatItDoesInBody}</p>
        </Block>

        <Block heading="What is it being studied for?">
          {p.researchAreasDetail && p.researchAreasDetail.length > 0 ? (
            <ul className="space-y-4">
              {p.researchAreasDetail.map((area) => (
                <li key={area.label} className="border border-line px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-ink">{area.label}</p>
                    <Grade g={area.evidence} />
                  </div>
                  <p className="mt-2 text-sm">
                    {area.summary}
                    <Cite keys={area.citationKeys} citations={citations} />
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list-disc space-y-1 pl-5">
              {p.studiedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <p className="mt-4 text-sm">
            Investigational findings are not proven clinical benefits unless an authority has labelled that indication.
          </p>
        </Block>

        <Block heading="Evidence level">
          <p>
            Overall human evidence grade: <Grade g={p.humanEvidenceLevel ?? "D"} />
          </p>
        </Block>

        <Block heading="Human research">
          {p.humanStudies && p.humanStudies.length > 0 ? (
            <div className="space-y-6">
              {p.humanStudies.map((s) => (
                <div key={s.id} className="border border-line px-4 py-4 text-sm">
                  <p className="font-medium text-ink">{s.studyType}</p>
                  <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Population</dt>
                      <dd>{s.population}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Participants</dt>
                      <dd>{s.n}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Compound</dt>
                      <dd>{s.compound}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Dose / route</dt>
                      <dd>
                        {s.dose} · {s.route}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Duration</dt>
                      <dd>{s.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Primary outcome</dt>
                      <dd>{s.primaryOutcome}</dd>
                    </div>
                  </dl>
                  <p className="mt-3">{s.findings}</p>
                  <p className="mt-2 text-ink-soft">Limitations: {s.limitations}</p>
                  <Cite keys={[s.citationKey]} citations={citations} />
                </div>
              ))}
            </div>
          ) : (
            <p>{p.humanEvidence || INSUFFICIENT_EVIDENCE}</p>
          )}
        </Block>

        <Block heading="Preclinical research">
          <p className="mb-4 text-sm">Animal, cell and in-vitro findings are listed separately from human effects.</p>
          {p.preclinicalStudies && p.preclinicalStudies.length > 0 ? (
            <ul className="space-y-4">
              {p.preclinicalStudies.map((s) => (
                <li key={s.id} className="border border-line px-4 py-3 text-sm">
                  <p className="font-medium text-ink">
                    {s.studyType}: {s.model}
                  </p>
                  <p className="mt-2">{s.findings}</p>
                  <p className="mt-2 text-ink-soft">Limitations: {s.limitations}</p>
                  <Cite keys={[s.citationKey]} citations={citations} />
                </li>
              ))}
            </ul>
          ) : (
            <p>{p.preclinicalEvidence || INSUFFICIENT_EVIDENCE}</p>
          )}
        </Block>

        <Block heading="Doses reported in published research">
          <p className="text-sm">
            This section does not provide personalised medical dosing. Values are those reported in papers or protocols.
            Animal mg/kg doses are not converted to human doses.
          </p>
          <h3 className="mt-6 text-[11px] uppercase tracking-[0.16em] text-ink">Doses reported in human studies</h3>
          {p.researchDosesHuman && p.researchDosesHuman.length > 0 ? (
            <ol className="mt-3 space-y-4">
              {p.researchDosesHuman.map((d) => (
                <li key={d.study} className="border border-line px-4 py-3 text-sm">
                  <p className="font-medium text-ink">{d.study}</p>
                  <p>Dose: {d.dose} {d.unit}</p>
                  <p>Route: {d.route}</p>
                  <p>Frequency: {d.frequency}</p>
                  <p>Duration: {d.duration}</p>
                  <p>Population: {d.model}</p>
                  <p>Purpose: {d.purpose}</p>
                  <Cite keys={[d.citationKey]} citations={citations} />
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-2">{INSUFFICIENT_EVIDENCE}</p>
          )}
          <h3 className="mt-8 text-[11px] uppercase tracking-[0.16em] text-ink">Preclinical / animal study dosing</h3>
          {p.researchDosesAnimal && p.researchDosesAnimal.length > 0 ? (
            <ol className="mt-3 space-y-4">
              {p.researchDosesAnimal.map((d) => (
                <li key={d.study} className="border border-line px-4 py-3 text-sm">
                  <p className="font-medium text-ink">{d.study}</p>
                  <p>Dose: {d.dose} {d.unit}</p>
                  <p>Route: {d.route}</p>
                  <p>Frequency: {d.frequency}</p>
                  <p>Duration: {d.duration}</p>
                  <p>Model: {d.model}</p>
                  <p>Purpose: {d.purpose}</p>
                  <Cite keys={[d.citationKey]} citations={citations} />
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-2">{INSUFFICIENT_EVIDENCE}</p>
          )}
        </Block>

        {p.approvedDoses && p.approvedDoses.length > 0 ? (
          <Block heading="Approved product dosing">
            <p className="text-sm">
              Taken from regulator product information. This is not mixed with research-chemical schedules.
            </p>
            <ul className="mt-4 space-y-4">
              {p.approvedDoses.map((d) => (
                <li key={`${d.authority}-${d.product}`} className="border border-line px-4 py-3 text-sm">
                  <p className="font-medium text-ink">
                    {d.authority} · {d.country}
                  </p>
                  <p className="mt-1">{d.product}</p>
                  <p className="mt-2">Indication: {d.indication}</p>
                  <p className="mt-1">Regimen: {d.regimen}</p>
                  <a href={d.sourceUrl} className="mt-2 inline-block text-bronze-deep underline" rel="noreferrer">
                    {d.sourceTitle}
                  </a>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        <Block heading="Pharmacokinetics">
          {p.pharmacokinetics ? (
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              {p.pharmacokinetics.halfLife ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Half-life</dt>
                  <dd>{p.pharmacokinetics.halfLife}</dd>
                </div>
              ) : null}
              {p.pharmacokinetics.tmax ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Tmax</dt>
                  <dd>{p.pharmacokinetics.tmax}</dd>
                </div>
              ) : null}
              {p.pharmacokinetics.cmax ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Cmax</dt>
                  <dd>{p.pharmacokinetics.cmax}</dd>
                </div>
              ) : null}
              {p.pharmacokinetics.bioavailability ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Bioavailability</dt>
                  <dd>{p.pharmacokinetics.bioavailability}</dd>
                </div>
              ) : null}
              {p.pharmacokinetics.clearance ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Clearance</dt>
                  <dd>{p.pharmacokinetics.clearance}</dd>
                </div>
              ) : null}
              {p.pharmacokinetics.metabolism ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Metabolism</dt>
                  <dd>{p.pharmacokinetics.metabolism}</dd>
                </div>
              ) : null}
              {p.pharmacokinetics.elimination ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Elimination</dt>
                  <dd>{p.pharmacokinetics.elimination}</dd>
                </div>
              ) : null}
              {p.pharmacokinetics.doseResponse ? (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Dose–response</dt>
                  <dd>{p.pharmacokinetics.doseResponse}</dd>
                </div>
              ) : null}
            </dl>
          ) : null}
          <p className="mt-3 text-sm">{p.pharmacokinetics?.notes ?? INSUFFICIENT_EVIDENCE}</p>
        </Block>

        <Block heading="Safety">
          <p>{p.safetyDetail?.adverseEffects ?? p.sideEffects}</p>
          {p.safetyDetail?.seriousEvents ? (
            <p className="mt-3">
              <span className="font-medium text-ink">Serious events. </span>
              {p.safetyDetail.seriousEvents}
            </p>
          ) : null}
          {p.safetyDetail?.interactions || p.interactions ? (
            <p className="mt-3">
              <span className="font-medium text-ink">Interactions. </span>
              {p.safetyDetail?.interactions ?? p.interactions}
            </p>
          ) : null}
          {p.safetyDetail?.excludedPopulations ? (
            <p className="mt-3">
              <span className="font-medium text-ink">Populations often excluded from trials. </span>
              {p.safetyDetail.excludedPopulations}
            </p>
          ) : null}
          {p.safetyDetail?.pregnancy ? (
            <p className="mt-3">
              <span className="font-medium text-ink">Pregnancy / lactation. </span>
              {p.safetyDetail.pregnancy}
            </p>
          ) : null}
          {p.safetyDetail?.organImpairment ? (
            <p className="mt-3">
              <span className="font-medium text-ink">Organ impairment. </span>
              {p.safetyDetail.organImpairment}
            </p>
          ) : null}
          {p.safetyDetail?.longTerm ? (
            <p className="mt-3">
              <span className="font-medium text-ink">Long-term safety. </span>
              {p.safetyDetail.longTerm}
            </p>
          ) : null}
          <p className="mt-3">
            <span className="font-medium text-ink">Unknowns. </span>
            {p.safetyDetail?.unknowns ?? "Absence of a published harm signal is not evidence of safety."}
          </p>
          <p className="mt-3 font-medium text-ink">Contraindications. {p.contraindications}</p>
        </Block>

        <Block heading="Regulatory status">
          {p.regulatoryDetail ? (
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">Australia — TGA</dt>
                <dd>{p.regulatoryDetail.tga}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">United States — FDA</dt>
                <dd>{p.regulatoryDetail.fda}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-bronze">European Union — EMA</dt>
                <dd>{p.regulatoryDetail.ema}</dd>
              </div>
            </dl>
          ) : (
            <>
              <p>{p.regulatoryStatus}</p>
              <p className="mt-3">{p.australianRegulatoryStatus}</p>
            </>
          )}
        </Block>

        <Block heading="Citations">
          {citations.length === 0 ? (
            <p>{INSUFFICIENT_EVIDENCE}</p>
          ) : (
            <ol className="space-y-4">
              {citations.map((c, i) => {
                const href = citationHref(c);
                return (
                  <li key={c.key} id={`ref-${c.key}`} className="scroll-mt-28">
                    <p className="font-medium text-ink">
                      [{i + 1}] {c.title}
                    </p>
                    <p className="text-sm">{formatCitation(c)}</p>
                    <p className="mt-1 flex flex-wrap gap-3 text-sm">
                      {c.pmid ? (
                        <a href={`https://pubmed.ncbi.nlm.nih.gov/${c.pmid}/`} className="text-bronze-deep underline" rel="noreferrer">
                          PMID {c.pmid}
                        </a>
                      ) : null}
                      {c.doi ? (
                        <a href={`https://doi.org/${c.doi}`} className="text-bronze-deep underline" rel="noreferrer">
                          DOI
                        </a>
                      ) : null}
                      {c.nct ? (
                        <a href={`https://clinicaltrials.gov/study/${c.nct}`} className="text-bronze-deep underline" rel="noreferrer">
                          {c.nct}
                        </a>
                      ) : null}
                      {href && !c.pmid && !c.doi ? (
                        <a href={href} className="text-bronze-deep underline" rel="noreferrer">
                          Open source
                        </a>
                      ) : null}
                    </p>
                  </li>
                );
              })}
            </ol>
          )}
        </Block>

        <p className="border-t border-line py-8 text-sm text-ink-soft">{EDUCATIONAL_DISCLAIMER}</p>
        <p className="pb-8 text-sm text-ink-soft">
          Last reviewed {p.lastReviewed ?? "2026-09-13"}. Research areas:{" "}
          {p.areas.map((a, i) => (
            <span key={a}>
              {i > 0 ? ", " : ""}
              <Link href={`/peptides/area/${a}`} className="text-bronze-deep">
                {AREA_LABELS[a]}
              </Link>
            </span>
          ))}
          {" · "}
          <Link href="/peptides/compare" className="text-bronze-deep">
            Compare peptides
          </Link>
        </p>
      </div>
    </article>
  );
}
