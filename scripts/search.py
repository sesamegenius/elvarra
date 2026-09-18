from pathlib import Path


def rechercher_et_remplacer_dans_tsx(mot_a_rechercher, nouveau_mot):
    dossier_racine = Path.cwd()

    dossiers_ignores = {
        ".git",
        "node_modules",
        "dist",
        "build",
        ".next",
        "__pycache__",
    }

    fichiers_modifies = []
    total_remplacements = 0

    for fichier in dossier_racine.rglob("*.tsx"):
        # On ne teste que le chemin relatif à la racine
        chemin_relatif = fichier.relative_to(dossier_racine)
        if any(part in dossiers_ignores for part in chemin_relatif.parts):
            continue

        try:
            # newline="" conserve les fins de ligne d'origine
            with fichier.open("r", encoding="utf-8", newline="") as f:
                contenu = f.read()

            nombre_remplacements = contenu.count(mot_a_rechercher)
            if nombre_remplacements == 0:
                continue

            nouveau_contenu = contenu.replace(mot_a_rechercher, nouveau_mot)

            with fichier.open("w", encoding="utf-8", newline="") as f:
                f.write(nouveau_contenu)

            fichiers_modifies.append((chemin_relatif, nombre_remplacements))
            total_remplacements += nombre_remplacements

        except UnicodeDecodeError:
            print(f"[!] Impossible de lire : {fichier}")
        except PermissionError:
            print(f"[!] Permission refusée : {fichier}")

    return fichiers_modifies, total_remplacements


def main():
    mot_a_rechercher = input("Mot à rechercher : ")
    nouveau_mot = input("Nouveau mot : ")

    if not mot_a_rechercher:
        print("Aucun mot à rechercher renseigné.")
        return

    print(f'\nRecherche de "{mot_a_rechercher}" dans les fichiers .tsx...\n')

    fichiers_modifies, total_remplacements = rechercher_et_remplacer_dans_tsx(
        mot_a_rechercher, nouveau_mot
    )

    if not fichiers_modifies:
        print(f'Aucune occurrence de "{mot_a_rechercher}" trouvée.')
        return

    print(
        f"{total_remplacements} occurrence(s) remplacée(s) "
        f"dans {len(fichiers_modifies)} fichier(s) :\n"
    )

    for chemin, nombre in fichiers_modifies:
        print(f"{chemin} -> {nombre} remplacement(s)")

    print("\nRemplacement terminé.")


if __name__ == "__main__":
    main()