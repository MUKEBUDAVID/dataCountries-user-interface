// types/scroll.types.ts
export type TypeUseRefSection = 
  | "introduction"
  | "baseUrl"
  | "authentification"
  | "endpoints"
  | "formatData"
  | "paramReq"
  | "codeStatut"
  | "gestionError"
  | "limiteQuota"
  | "exempleCode";

export const SECTION_DISPLAY_NAMES: Record<TypeUseRefSection, string> = {
  introduction: "Introduction",
  baseUrl: "Base URL",
  authentification: "Authentification",
  endpoints: "Endpoints",
  formatData: "Format des Données",
  paramReq: "Paramètres de Requête",
  codeStatut: "Codes de Statut HTTP",
  gestionError: "Gestion des Erreurs",
  limiteQuota: "Limites et Quotas",
  exempleCode: "Exemples d'Utilisation"
};

export const SECTION_LIST: TypeUseRefSection[] = [
  "introduction", "baseUrl", "authentification", "endpoints", 
  "formatData", "paramReq", "codeStatut", "gestionError", 
  "limiteQuota", "exempleCode"
];