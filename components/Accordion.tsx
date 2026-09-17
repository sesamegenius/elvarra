'use client';
 
import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
 
type AccordionProps = {
  q: string;
  a: string;
  defaultOpen?: boolean;
};
 
export function Accordion({ q, a, defaultOpen = false }: AccordionProps) {
  // defaultOpen only seeds the INITIAL state — after that, `open` is what
  // controls the UI, and it's flipped by the click handler below.
  const [open, setOpen] = useState(defaultOpen);
  const panelRef = useRef<HTMLDivElement>(null);
 
  return (
    <div className="border-b border-[#E7EAE7] last:border-none">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[#5B90D6] transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
 
      {/* Height-animated panel: grid-template-rows tween avoids the
          "height: auto can't be animated" problem without needing JS
          to measure scrollHeight. */}
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div ref={panelRef} className="min-h-0 overflow-hidden">
          <p className="pb-5 pr-8 text-[14px] leading-relaxed text-[#4A5568]">{a}</p>
        </div>
      </div>
    </div>
  );
}