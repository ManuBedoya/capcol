import { Image, Carousel } from "react-bootstrap";

export const CarrouselImages = ({ img }) => {
  let imgAux = img.split(",");
  return (
    <>
      <Carousel fade data-bs-theme="dark">
        {imgAux.map((imgActual) => {
          return (
            <Carousel.Item>
              <Image
                src={imgActual}
                className="img-detail-product mb-5"
              ></Image>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
