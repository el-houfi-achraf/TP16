import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TRANSACTION } from '../graphql/mutations';
import { GET_ALL_COMPTES, GET_ALL_TRANSACTIONS } from '../graphql/queries';

const TransactionForm = () => {
  const [compteId, setCompteId] = useState('');
  const [type, setType] = useState('DEPOT');
  const [montant, setMontant] = useState('');

  const { data: comptesData } = useQuery(GET_ALL_COMPTES);
  const [addTransaction] = useMutation(ADD_TRANSACTION, {
    refetchQueries: [
      { query: GET_ALL_TRANSACTIONS },
      { query: GET_ALL_COMPTES }, // Update account balances
    ],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!compteId) {
      alert("Veuillez sélectionner un compte");
      return;
    }
    try {
      await addTransaction({
        variables: {
          transactionRequest: {
            compteId,
            type,
            montant: parseFloat(montant),
          },
        },
      });
      setMontant('');
      setType('DEPOT');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la transaction :', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Ajouter une Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Compte</label>
          <select
            value={compteId}
            onChange={(e) => setCompteId(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          >
            <option value="">Sélectionner un compte</option>
            {comptesData?.allComptes.map((compte) => (
              <option key={compte.id} value={compte.id}>
                {compte.id} - Solde: {compte.solde}€
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type de Transaction</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          >
            <option value="DEPOT">Dépôt</option>
            <option value="RETRAIT">Retrait</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Montant</label>
          <input
            type="number"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            required
            placeholder="Entrez le montant"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Ajouter Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
