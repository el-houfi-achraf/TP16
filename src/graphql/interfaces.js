/**
 * @typedef {Object} Compte
 * @property {string} id
 * @property {number} solde
 * @property {string} dateCreation
 * @property {string} type - TypeCompte
 */

/**
 * @typedef {Object} Transaction
 * @property {string} id
 * @property {string} type - TypeTransaction
 * @property {number} montant
 * @property {string} date
 * @property {Compte} compte
 */

/**
 * @typedef {Object} SoldeStats
 * @property {number} count
 * @property {number} sum
 * @property {number} average
 */

/**
 * @typedef {Object} TransactionStats
 * @property {number} count
 * @property {number} sumDepots
 * @property {number} sumRetraits
 */

/**
 * @typedef {Object} CompteRequest
 * @property {number} solde
 * @property {string} type - TypeCompte
 */

/**
 * @typedef {Object} TransactionRequest
 * @property {string} type - TypeTransaction
 * @property {number} montant
 * @property {string} compteId
 */

// Note: This file contains JSDoc definitions as the project is in JavaScript.
// The original TypeScript interfaces are preserved in comments below for reference.

/*
// Interface pour un compte
export interface Compte {
  id: string;
  solde: number;
  dateCreation: string;
  type: TypeCompte;
}

// Interface pour une transaction
export interface Transaction {
  id: string;
  type: TypeTransaction;
  montant: number;
  date: string;
  compte: Compte;
}

// Interface pour les statistiques de solde
export interface SoldeStats {
  count: number;
  sum: number;
  average: number;
}

// Interface pour les statistiques de transaction
export interface TransactionStats {
  count: number;
  sumDepots: number;
  sumRetraits: number;
}

// Interface pour les demandes de création de compte
export interface CompteRequest {
  solde: number;
  type: TypeCompte;
}

// Interface pour les demandes de création de transaction
export interface TransactionRequest {
  type: TypeTransaction;
  montant: number;
  compteId: string;
}
*/
