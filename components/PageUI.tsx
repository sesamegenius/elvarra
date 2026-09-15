'use client';

import { useState } from 'react';
import { IconChevron } from '@/components/icons';

/* Palette partagée
   INK   #14213D  (texte / titres / fond sombre)
   TEAL  #1F6F63  (accent principal)
   SKY   #5B90D6  (3e couleur : bleu clair mais visible, entre bleu ciel et bleu roi)
   AMBER #C98A3E  (accent rare, réservé au fond sombre)
   SLATE #5B6B82  (texte secondaire)
*/

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-150';
  const styles = {
    primary: 'bg-[#14213D] text-white hover:bg-[#1F6F63]',
    secondary: 'bg-white text-[#14213D] border border-[#DCE1DD] hover:border-[#5B90D6] hover:text-[#3D6BAD]',
    ghost: 'text-[#14213D] hover:text-[#1F6F63] px-0',
  };
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function SectionLabel({
  children,
  tone = 'teal',
}: {
  children: React.ReactNode;
  tone?: 'teal' | 'sky' | 'amber';
}) {
  const colors = {
    teal: 'text-[#1F6F63]',
    sky: 'text-[#3D6BAD]',
    amber: 'text-[#D9A44E]',
  };
  return <p className={`text-[15px] font-medium mb-3 ${colors[tone]}`}>{children}</p>;
}

export function DossierVisual() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
      <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#E7F0EE]" />
      <div className="absolute -top-2 left-16 h-10 w-10 rounded-full bg-[#DEEAFA]" />
      <div className="relative rounded-[28px] border border-[#E1E4E5] bg-white p-6 shadow-[0_20px_60px_-30px_rgba(20,33,61,0.35)]">
        <div className="flex items-center justify-between border-b border-[#EEF0EF] pb-4">
          <div>
            <p className="text-[13px] text-[#8A94A3]">Dossier</p>
            <p className="text-[16px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
              Dégât des eaux — Apt. 12
            </p>
          </div>
          <span className="rounded-full bg-[#E7F0EE] px-3 py-1 text-[12px] font-medium text-[#1F6F63]">
            En cours
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {[
            { label: 'Constat et photographies', done: true },
            { label: 'Justificatifs collectés', done: true },
            { label: 'Évaluation des postes', done: false },
            { label: "Préparation de l'expertise", done: false },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  row.done ? 'border-[#1F6F63] bg-[#1F6F63]' : 'border-[#D8DEDA] bg-white'
                }`}
              >
                {row.done && (
                  <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                )}
              </span>
              <span className={`text-[14px] ${row.done ? 'text-[#5B6B82] line-through decoration-[#D8DEDA]' : 'text-[#14213D]'}`}>
                {row.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-[#F6F8F7] p-4">
          <p className="text-[13px] text-[#8A94A3]">Prochaine étape</p>
          <p className="mt-1 text-[14px] text-[#14213D]">Réunion d'expertise — préparation des pièces</p>
        </div>
      </div>
      <div className="absolute -bottom-5 -right-4 h-16 w-16 rounded-2xl bg-[#5B90D6]/15 border border-[#5B90D6]/30" />
    </div>
  );
}

export function Accordion({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E1E4E5]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[17px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
          {q}
        </span>
        <IconChevron className={`h-5 w-5 shrink-0 text-[#5B6B82] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-[15px] leading-relaxed text-[#4A5568] max-w-[640px]">{a}</p>}
    </div>
  );
}