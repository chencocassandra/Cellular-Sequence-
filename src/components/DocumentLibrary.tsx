"use client";

import { useEffect, useState } from "react";

type LocalDoc = { id: string; name: string; type: string; added: string };

const KEY = "lp-docs-v1";

export function DocumentLibrary() {
  const [docs, setDocs] = useState<LocalDoc[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) setDocs(JSON.parse(raw) as LocalDoc[]);
    } catch {
      setDocs([]);
    }
  }, []);

  function persist(next: LocalDoc[]) {
    setDocs(next);
    window.localStorage.setItem(KEY, JSON.stringify(next));
  }

  function onFiles(files: FileList | null) {
    if (!files) return;
    const added: LocalDoc[] = [...files].map((file) => ({
      id: `${file.name}-${file.lastModified}`,
      name: file.name,
      type: file.type || "file",
      added: new Date().toISOString(),
    }));
    persist([...added, ...docs].slice(0, 40));
  }

  return (
    <div className="mt-8">
      <p className="text-sm text-ink-soft">
        Files you add here stay in this browser only (demo). To publish a PDF on the live site,
        place it in <code className="text-ink">public/documents/</code> and tell us to list it.
      </p>
      <label className="mt-6 block border border-dashed border-line bg-ivory px-4 py-8 text-center text-sm">
        <span className="uppercase tracking-[0.14em]">Upload a document</span>
        <input
          type="file"
          className="mt-3 block w-full text-sm"
          accept=".pdf,.png,.jpg,.jpeg,.webp,.txt,.md"
          multiple
          onChange={(e) => onFiles(e.target.files)}
        />
      </label>
      {docs.length === 0 ? (
        <p className="mt-6 text-sm text-ink-soft">No local documents yet.</p>
      ) : (
        <ul className="mt-6 divide-y divide-line border border-line">
          {docs.map((doc) => (
            <li key={doc.id} className="flex items-center justify-between px-4 py-3 text-sm">
              <span>
                {doc.name}
                <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                  {doc.type}
                </span>
              </span>
              <button
                type="button"
                className="text-[11px] uppercase tracking-[0.14em] text-ink-soft"
                onClick={() => persist(docs.filter((d) => d.id !== doc.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
