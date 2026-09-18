"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Lock, User } from "lucide-react";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin");
      } else {
        setError(data.error || "Erreur de connexion");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setError("Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] p-4 sm:p-6">
      <Card className="w-full max-w-md rounded-3xl border-none shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)]">
        <CardHeader className="text-center px-6 pt-8 sm:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-500 to-[#6B8FD6]">
            <Lock className="h-5 w-5 text-white" />
          </div>
          <CardTitle
            className="mt-4 text-[24px] text-[#14213D]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Espace administration
          </CardTitle>
          <CardDescription className="text-[14px] text-[#4A5568]">
            Connectez-vous avec votre compte administrateur Elvarra
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-8 sm:px-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-xl border border-[#F0D3C6] bg-[#FCEEE7] p-3">
                <p className="text-[13px] text-[#C65D3B]">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="text-[13px] text-[#14213D]">
                Nom d&apos;utilisateur
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-[#5B6B82]" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="rounded-xl pl-10"
                  placeholder="Votre nom d'utilisateur"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[13px] text-[#14213D]">
                Mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-[#5B6B82]" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="rounded-xl pl-10"
                  placeholder="Votre mot de passe"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl bg-[#14213D] text-white hover:bg-[#1c2d54]"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connexion...
                </div>
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}