'use client';

import { useState, useEffect } from 'react';
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

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  return (
    <>
      <header
        className="
          sticky top-0
          isolate
          z-[9999]
          mx-auto
          w-[95%]
          lg:w-[90%]
          rounded-lg
          bg-white
          shadow-lg
        "
      >
        {/* BARRE PRINCIPALE */}
        <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">

          {/* LOGO — agrandi */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative block h-12 w-[170px] shrink-0 sm:h-16 sm:w-[220px]"
          >
            <Image
              src="/ElvarraLogo.png"
              alt="Logo Elvarra"
              fill
              priority
              sizes="220px"
              className="object-contain object-left"
            />
          </Link>

          {/* NAVIGATION DESKTOP */}
          <nav className="hidden 2xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-[#3A4657] transition-colors hover:text-[#14213D]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ACTIONS DESKTOP */}
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

          {/* MOBILE / TABLETTE */}
          <div className="flex shrink-0 items-center gap-2 2xl:hidden">
            {/* TELEPHONE */}
            <Link
              href="tel:+33185099748"
              aria-label="Appeler ELVARRA"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14213D] text-white"
            >
              <IconPhone className="h-5 w-5" />
            </Link>

            {/* HAMBURGER */}
            <button
              type="button"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF0F8] text-[#14213D]"
            >
              {open ? (
                <IconClose className="h-6 w-6" />
              ) : (
                <IconMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <nav
            className="
              absolute
              left-0
              right-0
              top-full
              z-[9999]
              flex
              flex-col
              rounded-b-lg
              bg-white
              p-4
              shadow-xl
              2xl:hidden
            "
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-[16px] text-[#3A4657] active:bg-[#F1F4F7]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-[#E5E9ED] pt-4">
              <Button href="/contact/" variant="primary" className="w-full">
                Parler à un expert
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* Overlay cliquable pour fermer le menu en tapant en dehors */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[9998] 2xl:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}