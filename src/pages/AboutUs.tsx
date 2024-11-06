import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import App from "../App";
import reportWebVitals from "../reportWebVitals";
import { TicketForm } from "../components/TicketForm/TicketForm";
import { MainCards } from "../components/MainCards/MainCards";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { MapBlock } from "../components/MapBlock/MapBlock";
import { Footer } from "../components/Footer/Footer";
import Homepage from "./Homepage";
import { Header } from "../components/Header/Header";
import { Header2 } from "../components/Header2/Header2";
import pic from "../img/XXL_height.jpg";
import { Helmet } from "react-helmet";

export const AboutUs: React.FC<{}> = () => {
  const [isTicketFormOpen, setIsTicketFormOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const aboutUsBlock = {
    title: "О нас",
    text: [
      "Мы занимаемся перевозкой более 20 лет, имеем огромный опыт нашей работой, у нас много услуг: доставка песка, щебня, торфа, гравия, питательной земли, вывоз мусора. Земляные работы любой сложности, строительство дорог, работа техники по месту, работа тракторов, экскаваторов и многое другое. Беремся за любые сложные работы, работаем только на современной технике по Москве и Московской области. Остались вопросы? Пишите, звоните, всегда будем рады помочь!",
    ],
    imagePath: pic,
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleRedirect = (path: string) => {
    window.location.hash = path;
    window.location.reload();
  };

  const handleOpenTicketForm = () => {
    setIsTicketFormOpen(true);
  };

  const handleCloseTicketForm = () => {
    setIsTicketFormOpen(false);
  };

  let body = document.getElementsByTagName("body")[0];

  if (isTicketFormOpen) {
    body.classList.add("openedTicketForm");
    body.classList.remove("closedTicketForm");
  }

  if (!isTicketFormOpen) {
    body.classList.remove("openedTicketForm");
    body.classList.add("closedTicketForm");
  }

  return (
    <>
      <Helmet>
        <title>О нас</title>
      </Helmet>
      {isTicketFormOpen && (
        <TicketForm onCloseTicketForm={handleCloseTicketForm} />
      )}
      <div
        className={[
          "container",
          isTicketFormOpen ? "containerFiltered" : "",
        ].join(" ")}
      >
        <Header2
          onOpenTicketForm={handleOpenTicketForm}
          windowWidth={windowWidth}
          title="О КОМПАНИИ"
        />
        <TextBlock
          title={aboutUsBlock.title}
          text={aboutUsBlock.text}
          imagePath={aboutUsBlock.imagePath}
        />
        <MapBlock onOpenTicketForm={handleOpenTicketForm} />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
