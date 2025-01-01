import { useState, useEffect } from "react";
import { Image, Carousel } from "react-bootstrap";
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "../../firebase/firebaseService"

export const CarrouselImages = ({ img }) => {

  const [urls, setUrls] = useState([]);

  const imgAux = img.split(",");

  useEffect(() => {
    
    const fetchImageUrls = async () => {
      try {
        
        const imageUrls = await Promise.all(
          imgAux.map(async (imgActual) => {
            
            const imageRef = ref(storage, imgActual);
            const url = await getDownloadURL(imageRef);
            return url;
          })
        );
        setUrls(imageUrls);
      } catch (error) {
        console.error("Error al obtener las URLs de las imágenes:", error);
      }
    };

    fetchImageUrls();
  }, [imgAux]);

  return (
    <>
      <Carousel fade data-bs-theme="dark">
        {urls.map((url, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                src={url}
                className="img-detail-product mb-5"
                alt={`Imagen ${index + 1}`}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
