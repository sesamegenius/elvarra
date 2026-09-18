'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/PageUI';
import { IconPhone, IconMenu, IconClose } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Particuliers', href: '/particuliers/' },
  { label: 'Professionnels', href: '/professionnels/' },
  { label: 'Gestion Locative', href: '/gestion-immobiliere/' },
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
        <div className="flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6">

          {/* LOGO — agrandi */}
          <Link
            href="/"
            onClick={closeMenu}
            className="
              relative block shrink-0
              h-14 w-[200px]
               sm:w-[240px]
              lg:w-[200px]
              xl: h-48 xl:w-[240px]
              2xl:h-48 2xl:w-[280px]
            "
          >
            <Image
              src="/ElvarraLogo.png"
              alt="Logo Elvarra"
              fill
              priority
              sizes="280px"
              className="object-center"
            />
          </Link>

          {/* NAVIGATION DESKTOP (dès lg) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] xl:text-[15px] text-[#3A4657] transition-colors hover:text-[#14213D]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ACTIONS DESKTOP (dès lg) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+33185099748"
              aria-label="Appeler Elvarra au 01 85 09 97 48"
              className="flex items-center gap-2 text-[15px] text-[#3A4657] hover:text-[#14213D]"
            >
              <IconPhone className="h-5 w-5" />
              <span className="hidden 2xl:inline">01 85 09 97 48</span>
            </Link>

            {/* Bouton visible dès xl seulement, faute de place à 1024px */}
            <div className="hidden xl:block">
              <Button href="/contact/" variant="primary">
                Parler à un expert
              </Button>
            </div>
          </div>

          {/* MOBILE / TABLETTE (masqué dès lg) */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            {/* TELEPHONE */}
            <Link
              href="tel:+33185099748"
              aria-label="Appeler Elvarra"
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
              lg:hidden
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
          className="fixed inset-0 z-[9998] lg:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}