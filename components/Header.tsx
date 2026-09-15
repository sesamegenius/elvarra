'use client';

import { useState } from 'react';
import { Button } from '@/components/PageUI';
import { IconPhone, IconMenu, IconClose } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Particuliers', href: '/particuliers/' },
  { label: 'Professionnels', href: '/professionnels/' },
  { label: 'ELVARRA Gestion', href: '/gestion-immobiliere/' },
  { label: 'Vos sinistres', href: '/sinistres/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 rounded-lg shadow-lg backdrop-blur mx-auto w-[95%] lg:w-[90%]">
      <div className="mx-auto flex  items-center justify-center md:justify-between px-4 sm:px-6 py-2 sm:py-3">
      <Link
  href="/"
  className="shrink-0 flex items-center max-h-24"
>
  <Image
    src="/ElvarraLogo.png"
    alt="Logo Elvarra"
    width={240}
    height={64}
    priority
    className="h-full w-auto sm:h-10 lg:h-full"
  />
</Link>

        <nav className="hidden 2xl:flex items-center gap-8 w-fit">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-[#3A4657] hover:text-[#14213D] transition-colors w-fit"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden 2xl:flex items-center gap-3">
          <Link
            href="tel:+33185099748"
            className="flex items-center gap-2 text-[15px] text-[#3A4657] hover:text-[#14213D]"
          >
            <IconPhone className="h-4 w-4" />
            01 85 09 97 48
          </Link>

          <Button href="/contact/" variant="primary">
            Parler à un expert
          </Button>
        </div>

        <div className="flex gap-2 2xl:hidden">
  <Link
    href="tel:+33185099748"
    aria-label="Appeler"
    className="flex items-center justify-center rounded-full bg-[#14213D] p-2 text-white"
  >
    <IconPhone className="h-5 w-5 text-white" />
  </Link>

  <button
    aria-label="Ouvrir le menu"
    onClick={() => setOpen(!open)}
    className="text-[#14213D]"
  >
    {open ? (
      <IconClose className="h-6 w-6" />
    ) : (
      <IconMenu className="h-6 w-6" />
    )}
  </button>
</div>
      </div>

      {open && (
        <div className="2xl:hidden bg-white px-12 py-5 rounded-b-lg">
          <nav className="flex flex-col lg:flex-row lg:justify-between gap-4 px-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[16px] text-[#3A4657]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3 justify-center">
        {/*     <Link
              href="tel:+33185099748"
              className="flex items-center gap-2 text-[15px] text-[#3A4657]"
            >
              <IconPhone className="h-4 w-4" />
              01 85 09 97 48
            </Link> */}

            <Button href="/contact/" variant="primary" className="w-full">
              Parler à un expert
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}