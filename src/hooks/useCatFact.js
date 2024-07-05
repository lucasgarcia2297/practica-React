import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState();
  
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))    //equivale a getRandomFact().then(setFact)  
  };
  
  //para recuperar la cita al cargar la página
  useEffect(() => {
    refreshFact();
  }, []); //La primera vez que se monta el componente
  
  return {fact, refreshFact };
}