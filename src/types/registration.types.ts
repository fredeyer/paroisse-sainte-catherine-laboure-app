// registration.types.ts

// Enums for the registration system

enum ParcoursFormation {
    // Define your parcours formation options
}

enum ModePaiement {
    // Define your mode paiement options
}

enum HistoriqueCatechese {
    // Define your historique catechese options
}

// Registration interface
interface Registration {
    anneeInscription: number;
    parcoursFormation: ParcoursFormation;
    prenom: string;
    nom: string;
    dateNaissance: Date;
    age: number;
    prenomMere: string;
    nomMere: string;
    prenomPere: string;
    nomPere: string;
    adresse: string;
    ville: string;
    codePostal: string;
    telephonePere: string;
    telephoneMere: string;
    courrielParents: string;
    certificatNaissanceFourni: boolean;
    baptemeRecu: boolean;
    premierPardonRecu: boolean;
    premiereCommunionRecue: boolean;
    professionDeFoiFaite: boolean;
    confirmationRecue: boolean;
    nbAnneesCatechese: number;
    autreHistoriqueCatechese: string;
    aucuneCatechese: boolean;
    prenomParrain: string;
    nomParrain: string;
    preuveBaptemeConfirmationParrainFournie: boolean;
    prenomMarraine: string;
    nomMarraine: string;
    preuveBaptemeConfirmationMarraineFournie: boolean;
    dateBapteme: Date;
    certificatBaptemeFourni: boolean;
    nomParoisseBapteme: string;
    adresseParoisseBapteme: string;
    courrielParoisseBapteme: string;
    signatureNom: string;
    dateSignature: Date;
    fraisInscriptionGeneral: number;
    fraisInscriptionPlusieursEnfants: number;
    fraisInscriptionAdultes: number;
    fraisFormationParents: number;
    modePaiement: ModePaiement;
    numeroCheque: string;
    payeLe: Date;
    dateBaptemeAdmin: Date;
    heureBaptemeAdmin: string;
    celebrant: string;
    dateFormation: Date;
    heureFormation: string;
    datePresentation: Date;
    heurePresentation: string;
}
