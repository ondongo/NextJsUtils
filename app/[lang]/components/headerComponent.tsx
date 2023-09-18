'use client'
import React, { useEffect, useState } from "react";
import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionnary";
import Link from "next/link";

export default function HeaderComponent({ lang }: { lang: Locale }) {
  const [navigation, setNavigation] = useState<any>(null);

  useEffect(() => {
    async function fetchNavigation() {
      try {
        const result = await getDictionary(lang);
        setNavigation(result.navigation);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de navigation :",
          error
        );
      }
    }

    fetchNavigation();
  }, [lang]);

  if (!navigation) {
    // Vous pouvez afficher un indicateur de chargement ici si nécessaire
    return null;
  }

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
