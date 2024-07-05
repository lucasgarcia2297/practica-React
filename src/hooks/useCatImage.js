import { useEffect,useState } from "react";
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function useCatImage({ fact }){
  const [imageUrl, setImageUrl] = useState();
  
  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    // const threeFirstwords = fact.split(' ')[0].join(' ') //pimera palabra
    const threeFirstwords = fact.split(' ', 3).join(' '); //pimeras  3 palabras
    console.log(threeFirstwords)

    fetch(`https://cataas.com/cat/says/${threeFirstwords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        setImageUrl(`/cat/says/${threeFirstwords}`) //La API cambió por lo que tuve que modificarlo así (no el fetch no me devuelve la url)
      })
  }, [fact]);
  return { imageUrl : `${CAT_PREFIX_IMAGE_URL }${imageUrl}`};
}  //{imageUrl }