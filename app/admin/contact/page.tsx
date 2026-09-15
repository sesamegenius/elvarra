"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Calendar,
  Reply,
} from "lucide-react";

interface ContactQuery {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  subject: string;
  content: string;
  status: "UNREAD" | "READ" | "ANSWERED";
  createdAt: string;
  updatedAt: string;
}

const statusColors = {
  UNREAD: "bg-red-100 text-red-800",
  READ: "bg-yellow-100 text-yellow-800",
  ANSWERED: "bg-green-100 text-green-800",
};

const statusLabels = {
  UNREAD: "Non lu",
  READ: "Lu",
  ANSWERED: "Répondu",
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Demandes de contact</h1>
        <p className="text-gray-600 mt-2">
          Gérez les demandes de contact reçues
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des demandes */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Demandes ({contacts.length})</CardTitle>
              <CardDescription>
                Cliquez sur une demande pour la voir
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-96 overflow-y-auto">
                {contacts.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    Aucune demande de contact
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                        selectedContact?.id === contact.id ? "bg-blue-50" : ""
                      }`}
                      onClick={() => {
                        setSelectedContact(contact);
                        if (contact.status === "UNREAD") {
                          markAsRead(contact.id);
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            {contact.firstName} {contact.lastName}
                          </h3>
                          <p className="text-sm text-gray-600 truncate">
                            {contact.subject}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatDate(contact.createdAt)}
                          </p>
                        </div>
                        <Badge className={statusColors[contact.status]}>
                          {statusLabels[contact.status]}
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Détails de la demande sélectionnée */}
        <div className="lg:col-span-2">
          {selectedContact ? (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <MessageSquare className="w-5 h-5" />
                        <span>{selectedContact.subject}</span>
                      </CardTitle>
                      <CardDescription>
                        De {selectedContact.firstName} {selectedContact.lastName}
                      </CardDescription>
                    </div>
                    <Badge className={statusColors[selectedContact.status]}>
                      {statusLabels[selectedContact.status]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{selectedContact.email}</span>
                    </div>
                    {selectedContact.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{selectedContact.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{formatDate(selectedContact.createdAt)}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Message</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm whitespace-pre-wrap">{selectedContact.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Formulaire de réponse */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Reply className="w-5 h-5" />
                    <span>Répondre</span>
                  </CardTitle>
                  <CardDescription>
                    Envoyer une réponse à {selectedContact.firstName} {selectedContact.lastName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="reply" className="block text-sm font-medium text-gray-700 mb-2">
                      Votre réponse
                    </label>
                    <textarea
                      id="reply"
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tapez votre réponse ici..."
                    />
                  </div>
                  <Button
                    onClick={() => sendReply(selectedContact.id)}
                    disabled={!replyContent.trim() || isReplying}
                    className="w-full"
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
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-gray-500">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Sélectionnez une demande de contact pour voir les détails</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
