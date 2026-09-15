"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Mail,
  Phone,
  Calendar,
  Reply,
  MapPin,
  Building2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

type VousEtes = "PARTICULIER" | "PROFESSIONNEL" | "GESTIONNAIRE";
type ObjetDemande =
  | "SINISTRE_RECENT"
  | "EXPERTISE_PROGRAMMEE"
  | "PROPOSITION_RECUE"
  | "DESACCORD"
  | "ELVARRA_GESTION"
  | "AUTRE";
type TypeSinistre = "INCENDIE" | "DEGAT_DES_EAUX" | "EVENEMENT_CLIMATIQUE" | "AUTRE" | "NON_APPLICABLE";
type ExpertiseStatut = "NON" | "PROGRAMMEE" | "REALISEE" | "NE_SAIT_PAS";
type PropositionStatut = "NON" | "OUI" | "NE_SAIT_PAS";
type ContactStatus = "UNREAD" | "READ" | "ANSWERED";

interface ContactQuery {
  id: string;
  vousEtes: VousEtes;
  objet: ObjetDemande;
  typeSinistre?: TypeSinistre | null;
  dateSinistre?: string | null;
  expertiseStatut?: ExpertiseStatut | null;
  expertiseDate?: string | null;
  propositionStatut?: PropositionStatut | null;
  codePostal: string;
  fullName: string;
  company?: string | null;
  phone: string;
  email: string;
  content: string;
  consentObligatoire: boolean;
  consentFacultatif: boolean;
  status: ContactStatus;
  createdAt: string;
  updatedAt: string;
}

const statusColors: Record<ContactStatus, string> = {
  UNREAD: "bg-[#FCEEE7] text-[#C65D3B]",
  READ: "bg-[#EAF0F8] text-[#3D6BAD]",
  ANSWERED: "bg-[#E8F3F0] text-[#1F6F63]",
};

const statusLabels: Record<ContactStatus, string> = {
  UNREAD: "Non lu",
  READ: "Lu",
  ANSWERED: "Répondu",
};

const vousEtesLabels: Record<VousEtes, string> = {
  PARTICULIER: "Particulier",
  PROFESSIONNEL: "Professionnel",
  GESTIONNAIRE: "Gestionnaire",
};

const vousEtesTagClasses: Record<VousEtes, string> = {
  PARTICULIER: "border-[#DCE1DD] text-[#5B6B82]",
  PROFESSIONNEL: "border-[#C7D9EE] text-[#3D6BAD]",
  GESTIONNAIRE: "border-[#BFE0D6] text-[#1F6F63]",
};

const objetLabels: Record<ObjetDemande, string> = {
  SINISTRE_RECENT: "Sinistre récent",
  EXPERTISE_PROGRAMMEE: "Expertise programmée",
  PROPOSITION_RECUE: "Proposition reçue",
  DESACCORD: "Désaccord",
  ELVARRA_GESTION: "Elvarra Gestion",
  AUTRE: "Autre demande",
};

const typeSinistreLabels: Record<TypeSinistre, string> = {
  INCENDIE: "Incendie",
  DEGAT_DES_EAUX: "Dégât des eaux",
  EVENEMENT_CLIMATIQUE: "Événement climatique",
  AUTRE: "Autre",
  NON_APPLICABLE: "Non applicable",
};

const expertiseStatutLabels: Record<ExpertiseStatut, string> = {
  NON: "Pas encore programmée",
  PROGRAMMEE: "Programmée",
  REALISEE: "Réalisée",
  NE_SAIT_PAS: "Ne sait pas",
};

const propositionStatutLabels: Record<PropositionStatut, string> = {
  NON: "Pas encore reçue",
  OUI: "Reçue",
  NE_SAIT_PAS: "Ne sait pas",
};

export default function AdminContactPage() {
  const [contacts, setContacts] = useState<ContactQuery[]>([]);
  const [selectedContact, setSelectedContact] = useState<ContactQuery | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [replyContent, setReplyContent] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contact");
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des contacts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (contactId: string) => {
    try {
      const response = await fetch(`/api/admin/contact/${contactId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "READ" }),
      });

      if (response.ok) {
        setContacts(prev =>
          prev.map(contact =>
            contact.id === contactId ? { ...contact, status: "READ" } : contact
          )
        );
        if (selectedContact?.id === contactId) {
          setSelectedContact(prev => prev ? { ...prev, status: "READ" } : null);
        }
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
    }
  };

  const sendReply = async (contactId: string) => {
    if (!replyContent.trim()) return;

    setIsReplying(true);
    try {
      const response = await fetch(`/api/admin/contact/${contactId}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: replyContent }),
      });

      if (response.ok) {
        setContacts(prev =>
          prev.map(contact =>
            contact.id === contactId ? { ...contact, status: "ANSWERED" } : contact
          )
        );
        if (selectedContact?.id === contactId) {
          setSelectedContact(prev => prev ? { ...prev, status: "ANSWERED" } : null);
        }
        setReplyContent("");
        alert("Réponse envoyée avec succès !");
      } else {
        alert("Erreur lors de l'envoi de la réponse");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réponse:", error);
      alert("Erreur lors de l'envoi de la réponse");
    } finally {
      setIsReplying(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDateOnly = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const showSinistreInfo =
    selectedContact &&
    selectedContact.typeSinistre &&
    selectedContact.typeSinistre !== "NON_APPLICABLE";

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-[#14213D]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-[26px] leading-tight text-[#14213D] sm:text-[30px] lg:text-[34px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Demandes de contact
        </h1>
        <p className="mt-2 text-[15px] text-[#4A5568]">
          Gérez les demandes de contact reçues
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Liste des demandes */}
        <div className={`lg:col-span-1 ${selectedContact ? "hidden lg:block" : "block"}`}>
          <Card className="rounded-2xl border-none bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-[17px] text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
                Demandes ({contacts.length})
              </CardTitle>
              <CardDescription className="text-[13px] text-[#5B6B82]">
                Touchez une demande pour la consulter
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[60vh] overflow-y-auto lg:max-h-[32rem]">
                {contacts.length === 0 ? (
                  <div className="p-6 text-center text-[14px] text-[#5B6B82]">
                    Aucune demande de contact
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`cursor-pointer border-b border-[#EEF1EF] p-4 transition-colors hover:bg-[#EEF4F1] ${
                        selectedContact?.id === contact.id ? "bg-[#EAF0F8]" : ""
                      }`}
                      onClick={() => {
                        setSelectedContact(contact);
                        if (contact.status === "UNREAD") {
                          markAsRead(contact.id);
                        }
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-[14px] font-medium text-[#14213D]">
                            {contact.fullName}
                          </h3>
                          <p className="truncate text-[13px] text-[#4A5568]">
                            {objetLabels[contact.objet]}
                          </p>
                          <p className="mt-0.5 text-[12px] text-[#5B6B82]">
                            {formatDate(contact.createdAt)}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${statusColors[contact.status]}`}
                        >
                          {statusLabels[contact.status]}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Détails de la demande sélectionnée */}
        <div className={`lg:col-span-2 ${selectedContact ? "block" : "hidden lg:block"}`}>
          {selectedContact ? (
            <div className="space-y-6">
              <button
                type="button"
                onClick={() => setSelectedContact(null)}
                className="flex items-center gap-2 text-[14px] text-[#3D6BAD] lg:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à la liste
              </button>

              <Card className="rounded-2xl border-none bg-white shadow-none">
                <CardHeader>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <CardTitle
                        className="flex items-center gap-2 text-[17px] text-[#14213D]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <MessageSquare className="h-5 w-5 shrink-0 text-[#3D6BAD]" />
                        <span className="truncate">{objetLabels[selectedContact.objet]}</span>
                      </CardTitle>
                      <CardDescription className="text-[13px] text-[#5B6B82]">
                        De {selectedContact.fullName}
                        {selectedContact.company ? ` — ${selectedContact.company}` : ""}
                      </CardDescription>
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-2">
                      <span
                        className={`rounded-full border bg-white px-3 py-1 text-[12px] ${vousEtesTagClasses[selectedContact.vousEtes]}`}
                      >
                        {vousEtesLabels[selectedContact.vousEtes]}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[12px] font-medium ${statusColors[selectedContact.status]}`}
                      >
                        {statusLabels[selectedContact.status]}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 shrink-0 text-[#5B6B82]" />
                      <span className="truncate text-[14px] text-[#14213D]">{selectedContact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 shrink-0 text-[#5B6B82]" />
                      <span className="text-[14px] text-[#14213D]">{selectedContact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 shrink-0 text-[#5B6B82]" />
                      <span className="text-[14px] text-[#14213D]">{selectedContact.codePostal}</span>
                    </div>
                    {selectedContact.company && (
                      <div className="flex items-center space-x-2">
                        <Building2 className="h-4 w-4 shrink-0 text-[#5B6B82]" />
                        <span className="truncate text-[14px] text-[#14213D]">{selectedContact.company}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 shrink-0 text-[#5B6B82]" />
                      <span className="text-[14px] text-[#14213D]">{formatDate(selectedContact.createdAt)}</span>
                    </div>
                  </div>

                  {(showSinistreInfo ||
                    selectedContact.expertiseStatut ||
                    selectedContact.propositionStatut) && (
                    <div className="rounded-xl bg-[#EEF4F1] p-4">
                      <h4 className="text-[13px] font-medium text-[#14213D]">Contexte du dossier</h4>
                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {showSinistreInfo && (
                          <p className="text-[13px] text-[#4A5568]">
                            <span className="text-[#5B6B82]">Type de sinistre : </span>
                            {typeSinistreLabels[selectedContact.typeSinistre as TypeSinistre]}
                          </p>
                        )}
                        {selectedContact.dateSinistre && (
                          <p className="text-[13px] text-[#4A5568]">
                            <span className="text-[#5B6B82]">Date du sinistre : </span>
                            {formatDateOnly(selectedContact.dateSinistre)}
                          </p>
                        )}
                        {selectedContact.expertiseStatut && (
                          <p className="text-[13px] text-[#4A5568]">
                            <span className="text-[#5B6B82]">Expertise : </span>
                            {expertiseStatutLabels[selectedContact.expertiseStatut]}
                          </p>
                        )}
                        {selectedContact.expertiseDate && (
                          <p className="text-[13px] text-[#4A5568]">
                            <span className="text-[#5B6B82]">Date d&apos;expertise : </span>
                            {formatDateOnly(selectedContact.expertiseDate)}
                          </p>
                        )}
                        {selectedContact.propositionStatut && (
                          <p className="text-[13px] text-[#4A5568]">
                            <span className="text-[#5B6B82]">Proposition d&apos;indemnisation : </span>
                            {propositionStatutLabels[selectedContact.propositionStatut]}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="mb-2 text-[13px] font-medium text-[#14213D]">Message</h4>
                    <div className="rounded-xl bg-[#F7F8F7] p-4">
                      <p className="whitespace-pre-wrap text-[14px] text-[#4A5568]">{selectedContact.content}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#5B6B82]">
                    <ShieldCheck className="h-4 w-4 text-[#1F6F63]" />
                    Consentement RGPD :{" "}
                    {selectedContact.consentObligatoire ? "traitement des données accepté" : "non renseigné"}
                    {selectedContact.consentFacultatif ? " · communications facultatives acceptées" : ""}
                  </div>
                </CardContent>
              </Card>

              {/* Formulaire de réponse */}
              <Card className="rounded-2xl border-none bg-white shadow-none">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-[17px] text-[#14213D]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Reply className="h-5 w-5 text-[#3D6BAD]" />
                    Répondre
                  </CardTitle>
                  <CardDescription className="text-[13px] text-[#5B6B82]">
                    Envoyer une réponse à {selectedContact.fullName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="reply" className="mb-2 block text-[13px] font-medium text-[#14213D]">
                      Votre réponse
                    </label>
                    <textarea
                      id="reply"
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      rows={6}
                      className="w-full rounded-xl border border-[#DCE1DD] px-3 py-2 text-[14px] focus:border-transparent focus:ring-2 focus:ring-[#3D6BAD]"
                      placeholder="Tapez votre réponse ici..."
                    />
                  </div>
                  <Button
                    onClick={() => sendReply(selectedContact.id)}
                    disabled={!replyContent.trim() || isReplying}
                    className="w-full rounded-xl bg-[#14213D] text-white hover:bg-[#1c2d54]"
                  >
                    {isReplying ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </div>
                    ) : (
                      "Envoyer la réponse"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="rounded-2xl border-none bg-white shadow-none">
              <CardContent className="flex h-64 items-center justify-center">
                <div className="text-center text-[#5B6B82]">
                  <MessageSquare className="mx-auto mb-4 h-12 w-12 text-[#DCE1DD]" />
                  <p className="text-[14px]">Sélectionnez une demande de contact pour voir les détails</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}