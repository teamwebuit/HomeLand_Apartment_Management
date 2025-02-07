"use client";
import { Apartment } from "@/models/apartment";
import styles from "./page.module.css";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Furniture from "@/components/apartmentDetail/furniture";
import { futuna } from "../../../../../public/fonts/futura";
import Resident from "@/components/apartmentDetail/resident";
import { useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  // let apartment:Apartment= JSON.parse("{'id':'123', 'name':'M}");
  //console.log(apartment);
  const [imageLoaded, setImageLoaded] = useState(true); // Set it to true by default

  const furnitureInfo = [
    {
      title: "Bedrooms",
      svg: (
        <svg
          width="27"
          height="15"
          viewBox="0 0 27 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.4168 7.81303C26.4168 6.6918 25.2543 5.77443 23.8335 5.77443V2.71653C23.8335 1.5953 22.671 0.677925 21.2502 0.677925H5.75016C4.32933 0.677925 3.16683 1.5953 3.16683 2.71653V5.77443C1.746 5.77443 0.583496 6.6918 0.583496 7.81303V12.9095H2.30141L3.16683 14.9481H4.4585L5.32391 12.9095H21.6893L22.5418 14.9481H23.8335L24.6989 12.9095H26.4168V7.81303ZM21.2502 5.77443H14.7918V2.71653H21.2502V5.77443ZM5.75016 2.71653H12.2085V5.77443H5.75016V2.71653ZM3.16683 7.81303H23.8335V10.8709H3.16683V7.81303Z"
            fill="#484848"
          />
        </svg>
      ),
      value: "6",
    },
    {
      title: "Bathrooms",
      svg: (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.16683 6.04887C7.45549 6.04887 8.50016 5.38189 8.50016 4.55913C8.50016 3.73636 7.45549 3.06938 6.16683 3.06938C4.87816 3.06938 3.8335 3.73636 3.8335 4.55913C3.8335 5.38189 4.87816 6.04887 6.16683 6.04887Z"
            fill="#484848"
          />
          <path
            d="M21.3335 9.02837V2.94275C21.3335 1.78075 19.8518 0.834763 18.0318 0.834763C17.1568 0.834763 16.3168 1.05822 15.6985 1.45301L14.2402 2.3841C14.0535 2.34686 13.8552 2.32451 13.6452 2.32451C13.1785 2.32451 12.7468 2.41389 12.3852 2.56287L15.6052 4.61872C15.8385 4.38781 15.9785 4.1122 15.9785 3.81426C15.9785 3.68018 15.9435 3.561 15.8968 3.43437L17.3552 2.50328C17.5302 2.39155 17.7752 2.32451 18.0318 2.32451C18.5685 2.32451 19.0002 2.60011 19.0002 2.94275V9.02837H11.0085C10.6585 8.87194 10.3435 8.69317 10.0518 8.49206L8.4185 7.3375C8.19683 7.18108 7.91683 7.05445 7.6135 6.96507C7.25183 6.85334 6.85516 6.79375 6.44683 6.79375C5.00016 6.8012 3.8335 7.54607 3.8335 8.46971V9.02837H0.333496V13.4976C0.333496 14.317 1.3835 14.9874 2.66683 14.9874C2.66683 15.397 3.19183 15.7322 3.8335 15.7322H20.1668C20.8085 15.7322 21.3335 15.397 21.3335 14.9874C22.6168 14.9874 23.6668 14.317 23.6668 13.4976V9.02837H21.3335ZM21.3335 13.4976H2.66683V10.5181H21.3335V13.4976Z"
            fill="#484848"
          />
        </svg>
      ),
      value: "4",
    },
    {
      title: "Square Area",
      svg: (
        <svg
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.75 0.0999985H3.25C1.7375 0.0999985 0.5 1.2475 0.5 2.65V17.95C0.5 19.3525 1.7375 20.5 3.25 20.5H19.75C21.2625 20.5 22.5 19.3525 22.5 17.95V2.65C22.5 1.2475 21.2625 0.0999985 19.75 0.0999985ZM19.75 17.95H3.25V2.65H19.75V17.95Z"
            fill="#484848"
          />
        </svg>
      ),
      value: "6 x 2 (m2)",
    },
    {
      title: "Status",
      svg: (
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 0C6.06015 0 0 5.8357 0 13C0 20.1643 6.06015 26 13.5 26C20.9399 26 27 20.1643 27 13C27 5.8357 20.9399 0 13.5 0ZM13.5 2.6C19.4807 2.6 24.3 7.24084 24.3 13C24.3 18.7592 19.4807 23.4 13.5 23.4C7.51933 23.4 2.7 18.7592 2.7 13C2.7 7.24084 7.51933 2.6 13.5 2.6ZM19.2955 8.18086L10.8 16.3617L7.70449 13.3809L5.79551 15.2191L10.8 20.0383L21.2045 10.0191L19.2955 8.18086Z"
            fill="#484848"
          />
        </svg>
      ),
      value: "Active",
    },
  ];
  const residentInfo = [
    { img: "image", name: "Manh Ho Dinh", id: "21522327" },
    { img: "image", name: "Manh Ho Dinh", id: "21522327" },
    { img: "image", name: "Manh Ho Dinh", id: "21522327" },
    { img: "image", name: "Manh Ho Dinh", id: "21522327" },
  ];

  return (
    <main className={styles.main} style={futuna.style}>
      <div>
        <Container className="p-lg-5">
          <Row>
            <Col>
              <h3>
                <b>St. Crytal</b>
              </h3>
              <p className="">floor 6, D6,Vinhome, Binh Duong, Viet Nam</p>
            </Col>
            <Col className="text-end">
              <p className="">Edit</p>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Carousel>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  loading="lazy"
                  className=" img-fluid h-100 w-100"
                  src="https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_1920,c_limit/DAB03919-10470989.jpg"
                  rounded
                ></Image>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  loading="lazy"
                  className=" img-fluid h-100 w-100"
                  src="https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_1920,c_limit/DAB03919-10470989.jpg"
                  rounded
                ></Image>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <Image
                  loading="lazy"
                  className=" img-fluid h-100 w-100"
                  src="https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_1920,c_limit/DAB03919-10470989.jpg"
                  rounded
                ></Image>
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row className={styles.furniture}>
            {furnitureInfo.map((e, index) => (
              <Col key={index} className="text-center">
                <Furniture
                  title={e.title}
                  value={e.value}
                  svg={e.svg}
                ></Furniture>
              </Col>
            ))}
          </Row>
          <Row>
            <h3 style={{ marginTop: "20px" }}>
              <b>About this apartment</b>
            </h3>
            <p style={{ marginTop: "20px" }}>
              Pellentesque sollicitudin, arcu a lacinia congue, nunc lectus
              ultricies leo, eget rutrum libero diam et enim. Morbi vestibulum
              dictum neque, eu hendrerit sapien sollicitudin quis. Quisque vitae
              nisl mollis, suscipit neque nec, dapibus leo. Fusce in
              pellentesque lacus, ac efficitur eros. Integer rhoncus ipsum nec
              laoreet gravida. Integer luctus tellus ut sapien eleifend commodo.
              Proin porta nisl sagittis eros{" "}
            </p>
          </Row>
          <Row>
            <h3 style={{ marginTop: "20px" }}>
              <b>List by apartment resident</b>
            </h3>
          </Row>

          <Row
            style={{
              backgroundColor: "rgba(40, 100, 255, 0.1)",
              border: "1px black solid",
              borderRadius: "20px",
              margin: "20px 0px",
              paddingTop: "20px ",
            }}
          >
            {residentInfo.map((value, index) => (
              <>
                {index % 2 == 0 ? <Row></Row> : <></>}
                <Col>
                  {" "}
                  <Resident
                    img={
                      imageLoaded ? (
                        <Image
                          loading="lazy"
                          src="/path/to/your/image.jpg" // Replace with your image link
                          alt="Description of the image"
                          width={300}
                          height={200}
                          onErrorCapture={() => setImageLoaded(false)}
                          onError={() => setImageLoaded(false)}
                        />
                      ) : (
                        <svg
                          width="48"
                          height="42"
                          viewBox="0 0 48 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 0.9328C10.752 0.9328 0 10.007 0 21.1877C0 32.3685 10.752 41.4427 24 41.4427C37.248 41.4427 48 32.3685 48 21.1877C48 10.007 37.248 0.9328 24 0.9328ZM12.168 33.9078C13.2 32.0849 19.488 30.3025 24 30.3025C28.512 30.3025 34.824 32.0849 35.832 33.9078C32.568 36.0954 28.464 37.3917 24 37.3917C19.536 37.3917 15.432 36.0954 12.168 33.9078ZM39.264 30.9709C35.832 27.4465 27.504 26.2515 24 26.2515C20.496 26.2515 12.168 27.4465 8.736 30.9709C6.288 28.2567 4.8 24.8741 4.8 21.1877C4.8 12.2553 13.416 4.98379 24 4.98379C34.584 4.98379 43.2 12.2553 43.2 21.1877C43.2 24.8741 41.712 28.2567 39.264 30.9709ZM24 9.03478C19.344 9.03478 15.6 12.1945 15.6 16.124C15.6 20.0535 19.344 23.2132 24 23.2132C28.656 23.2132 32.4 20.0535 32.4 16.124C32.4 12.1945 28.656 9.03478 24 9.03478ZM24 19.1622C22.008 19.1622 20.4 17.8052 20.4 16.124C20.4 14.4428 22.008 13.0858 24 13.0858C25.992 13.0858 27.6 14.4428 27.6 16.124C27.6 17.8052 25.992 19.1622 24 19.1622Z"
                            fill="black"
                          />
                        </svg>
                      )
                    }
                  ></Resident>
                </Col>
                {index == residentInfo.length - 1 && index % 2 == 0 ? (
                  <Col></Col>
                ) : (
                  <></>
                )}
              </>
            ))}
          </Row>
        </Container>
      </div>
    </main>
  );
}
