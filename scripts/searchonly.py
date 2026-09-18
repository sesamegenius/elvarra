import os
import sys


def rechercher_mot(mot, dossier="."):
    for racine, _, fichiers in os.walk(dossier):
        for fichier in fichiers:
            if not fichier.endswith(".tsx"):
                continue

            chemin = os.path.join(racine, fichier)

            try:
                with open(chemin, "r", encoding="utf-8") as f:
                    for numero_ligne, ligne in enumerate(f, start=1):
                        if mot in ligne:
                            print(f"{chemin}:{numero_ligne}: {ligne.rstrip()}")

            except (UnicodeDecodeError, PermissionError) as e:
                print(f"[Erreur] Impossible de lire {chemin}: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(f"Usage : python {os.path.basename(sys.argv[0])} <mot>")
        sys.exit(1)

    rechercher_mot(sys.argv[1])