// import { useCatFact } from "../../hooks/useCatFact";
import { useCatImage } from "../../hooks/useCatImage";

export function Otro(){
  // const { fact, refreshFact } = useCatFact();

  const {imageUrl } = useCatImage({ fact : 'cat' });


  return(
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}