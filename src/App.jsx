import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import './App.css';
import { Otro } from "./services/Components/Otro";
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/say/${threeFirstwordsthreeFirstwords}?size=50&color=red&json=true`;

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  
  const handleClick = async () =>{
    refreshFact();
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      
      {fact && <p>{fact}</p>}
      <img src={imageUrl}
        alt={`Image extrated using first word for '${fact}'`} />

      <Otro></Otro>
    </main>
  )
}
