import { DocumentLibrary } from "@/components/DocumentLibrary";

export const metadata = {
  title: "Documents",
  description: "Upload compliance or education files for local preview. Not a public file dump of research peptides.",
};

export default function DocumentsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Library</p>
      <h1 className="mt-2 font-serif text-4xl">Documents</h1>
      <p className="mt-4 text-ink-soft">
        For certificates, packing notes, or claim-language drafts. Shop products stay topical.
        Research-only peptides are not sold, so do not upload “for sale” research-vial paperwork.
      </p>
      <DocumentLibrary />
    </div>
  );
}
