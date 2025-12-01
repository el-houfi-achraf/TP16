import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_COMPTE, GET_ALL_COMPTES } from '../graphql/mutations';
// Note: GET_ALL_COMPTES should be imported from queries to refetch
import { GET_ALL_COMPTES as GET_ALL_COMPTES_QUERY } from '../graphql/queries';

const CreateCompte = () => {
  const [solde, setSolde] = useState('');
  const [type, setType] = useState('COURANT');
  
  const [saveCompte] = useMutation(SAVE_COMPTE, {
    refetchQueries: [{ query: GET_ALL_COMPTES_QUERY }],
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveCompte({
        variables: {
          compte: {
            solde: parseFloat(solde),
            type,
          },
        },
      });
      setSolde('');
      setType('COURANT');
    } catch (error) {
      console.error('Erreur lors de la création du compte :', error);
    }
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Créer un Compte</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Solde Initial</label>
          <input
            type="number"
            value={solde}
            onChange={(e) => setSolde(e.target.value)}
            required
            placeholder="Entrez le solde initial"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type de Compte</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          >
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default CreateCompte;
