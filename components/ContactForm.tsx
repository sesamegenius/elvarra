"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
  title?: string;
  description?: string;
  showCard?: boolean;
  className?: string;
}

type Option = { value: string; label: string };

const VOUS_ETES: Option[] = [
  { value: "particulier", label: "Particulier" },
  { value: "professionnel", label: "Professionnel / entreprise" },
  { value: "gestionnaire", label: "Gestionnaire immobilier" },
];

const OBJETS: Option[] = [
  { value: "sinistre_recent", label: "Sinistre récent" },
  { value: "expertise_programmee", label: "Expertise programmée" },
  { value: "proposition_recue", label: "Proposition reçue" },
  { value: "desaccord", label: "Désaccord" },
  { value: "elvarra_gestion", label: "ELVARRA Gestion" },
  { value: "autre", label: "Autre" },
];

const TYPES_SINISTRE: Option[] = [
  { value: "incendie", label: "Incendie" },
  { value: "degat_des_eaux", label: "Dégât des eaux" },
  { value: "evenement_climatique", label: "Événement climatique" },
  { value: "autre", label: "Autre" },
  { value: "non_applicable", label: "Non applicable" },
];

const EXPERTISE_STATUTS: Option[] = [
  { value: "non", label: "Non" },
  { value: "programmee", label: "Programmée le" },
  { value: "realisee", label: "Déjà réalisée" },
  { value: "ne_sait_pas", label: "Je ne sais pas" },
];

const PROPOSITION_STATUTS: Option[] = [
  { value: "non", label: "Non" },
  { value: "oui", label: "Oui" },
  { value: "ne_sait_pas", label: "Je ne sais pas" },
];

/* --- Groupe de choix en pilules, cohérent avec les tags de la home --- */
function PillGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`cursor-pointer rounded-full border px-4 py-2 text-[14px] transition-colors ${
              selected
                ? "border-[#1F6F63] bg-[#1F6F63] text-white"
                : "border-[#DCE1DD] bg-white text-[#4A5568] hover:border-[#1F6F63]/50"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <Label className="block text-[14px] font-medium text-[#14213D] mb-2">
      {children}
    </Label>
  );
}

const inputClass =
  "bg-white border-[#DCE1DD] text-[#14213D] placeholder:text-[#9AA5B1] focus-visible:ring-[#3D6BAD]/30 focus-visible:border-[#3D6BAD]";

export default function ContactForm({
  title = "",
  description = "",
  showCard = false,
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    vousEtes: "",
    objet: "",
    typeSinistre: "",
    dateSinistre: "",
    expertiseStatut: "",
    expertiseDate: "",
    propositionStatut: "",
    codePostal: "",
    fullName: "",
    company: "",
    phone: "",
    email: "",
    content: "",
    consentObligatoire: false,
    consentFacultatif: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const setField = (name: string) => (value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentObligatoire) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          vousEtes: "",
          objet: "",
          typeSinistre: "",
          dateSinistre: "",
          expertiseStatut: "",
          expertiseDate: "",
          propositionStatut: "",
          codePostal: "",
          fullName: "",
          company: "",
          phone: "",
          email: "",
          content: "",
          consentObligatoire: false,
          consentFacultatif: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <div className={className}>
      {title && (
        <div className="mb-6">
          <h2
            className="text-2xl text-[#14213D] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          {description && <p className="text-[#4A5568]">{description}</p>}
        </div>
      )}

      {submitStatus === "success" && (
        <div className="mb-6 rounded-xl border border-[#BFE0D6] bg-[#D4E8D2] p-4">
          <p className="text-[15px] text-[#14213D]">
            Votre demande a bien été transmise. Un membre de l&apos;équipe ELVARRA vous
            contactera à partir des coordonnées indiquées.
          </p>
          <p className="mt-2 text-[13px] text-[#4A5568]">
            En cas de danger ou de mesure urgente, contactez les services ou professionnels
            compétents sans attendre notre réponse.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 rounded-xl border border-[#E3B7A6] bg-[#FBEAE4] p-4">
          <p className="text-[15px] text-[#7A2E1E]">
            La demande n&apos;a pas pu être envoyée. Vérifiez les champs signalés ou
            contactez-nous au +33 (0)1 85 09 97 48.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <FieldLabel>Vous êtes *</FieldLabel>
          <PillGroup
            name="vousEtes"
            options={VOUS_ETES}
            value={formData.vousEtes}
            onChange={setField("vousEtes")}
          />
        </div>

        <div>
          <FieldLabel>Objet de votre demande *</FieldLabel>
          <PillGroup
            name="objet"
            options={OBJETS}
            value={formData.objet}
            onChange={setField("objet")}
          />
        </div>

        <div>
          <FieldLabel>Type de sinistre</FieldLabel>
          <PillGroup
            name="typeSinistre"
            options={TYPES_SINISTRE}
            value={formData.typeSinistre}
            onChange={setField("typeSinistre")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FieldLabel>Date du sinistre</FieldLabel>
            <Input
              type="date"
              name="dateSinistre"
              value={formData.dateSinistre}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <FieldLabel>Code postal du bien sinistré *</FieldLabel>
            <Input
              type="text"
              name="codePostal"
              value={formData.codePostal}
              onChange={handleChange}
              required
              placeholder="75000"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <FieldLabel>Une expertise est-elle programmée ou réalisée ?</FieldLabel>
          <PillGroup
            name="expertiseStatut"
            options={EXPERTISE_STATUTS}
            value={formData.expertiseStatut}
            onChange={setField("expertiseStatut")}
          />
          {formData.expertiseStatut === "programmee" && (
            <Input
              type="date"
              name="expertiseDate"
              value={formData.expertiseDate}
              onChange={handleChange}
              className={`${inputClass} mt-3 max-w-[220px]`}
            />
          )}
        </div>

        <div>
          <FieldLabel>Avez-vous reçu une proposition d&apos;indemnisation ?</FieldLabel>
          <PillGroup
            name="propositionStatut"
            options={PROPOSITION_STATUTS}
            value={formData.propositionStatut}
            onChange={setField("propositionStatut")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FieldLabel>Nom et prénom *</FieldLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Votre nom et prénom"
              className={inputClass}
            />
          </div>
          <div>
            <FieldLabel>Société</FieldLabel>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Facultatif"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FieldLabel>Téléphone *</FieldLabel>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="06 12 34 56 78"
              className={inputClass}
            />
          </div>
          <div>
            <FieldLabel>Email *</FieldLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <FieldLabel>Décrivez brièvement la situation et les échéances connues *</FieldLabel>
          <Textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Contexte, démarches déjà engagées, prochaines échéances..."
            className={inputClass}
          />
        </div>

        <div className="rounded-xl border border-dashed border-[#DCE1DD] bg-[#F1F1EC] p-4">
          <p className="text-[14px] text-[#4A5568]">
            Pièces jointes — fonctionnalité à venir. Cette option sera activée avec un
            hébergement, une sécurité, une durée de conservation et une information RGPD
            adaptés.
          </p>
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 text-[14px] text-[#4A5568]">
            <input
              type="checkbox"
              name="consentObligatoire"
              checked={formData.consentObligatoire}
              onChange={handleChange}
              required
              style={{ accentColor: "#1F6F63" }}
              className="mt-1 h-4 w-4 shrink-0"
            />
            J&apos;ai pris connaissance de la politique de confidentialité et j&apos;accepte
            que mes données soient utilisées pour traiter ma demande. *
          </label>
          <label className="flex items-start gap-3 text-[14px] text-[#4A5568]">
            <input
              type="checkbox"
              name="consentFacultatif"
              checked={formData.consentFacultatif}
              onChange={handleChange}
              style={{ accentColor: "#1F6F63" }}
              className="mt-1 h-4 w-4 shrink-0"
            />
            J&apos;accepte de recevoir les actualités et conseils d&apos;ELVARRA. Je pourrai
            retirer mon consentement à tout moment.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.consentObligatoire}
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[#14213D] px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#1c2d52] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isSubmitting ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );

  if (showCard) {
    return (
      <div className="rounded-3xl bg-white p-8 md:p-10 shadow-2xl">{formContent}</div>
    );
  }

  return formContent;
}