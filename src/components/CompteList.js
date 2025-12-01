import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_COMPTES } from "../graphql/queries";

const CompteList = () => {
  const { loading, error, data } = useQuery(GET_ALL_COMPTES);
  
  if (loading) return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">Erreur : {error.message}</p>;
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Liste des Comptes</h2>
      <div className="grid gap-4">
        {data.allComptes.map((compte) => (
          <div key={compte.id} className="border p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <p className="font-semibold">ID: <span className="font-normal">{compte.id}</span></p>
            <p className="font-semibold">Solde: <span className="font-normal text-green-600">{compte.solde}€</span></p>
            <p className="font-semibold">Date de création: <span className="font-normal">{new Date(compte.dateCreation).toLocaleDateString()}</span></p>
            <p className="font-semibold">Type: <span className={`font-normal px-2 py-1 rounded text-sm ${compte.type === 'COURANT' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>{compte.type}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompteList;
