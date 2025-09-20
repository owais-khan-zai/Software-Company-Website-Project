import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import "./index.css";
import Page1 from "./components/Page1";
import logo from "./assets/logo.png";
import ServiceHead from "./components/service/ServiceHead";
import ServiceItem from "./components/service/ServiceItem";
import menu from "./assets/menu.png";
import Footer from "./components/footer/Footer";
import CardPage from "./components/card/CardPage";
import FormPage from "./components/form/FormPage";
import Solutions from "./components/solution/Solutions";
import Dev from "./components/deve/Dev";
import Latest from "./components/latest/Latest";
import Header from './Header'
const Home = () => {
  let service = useRef();
  let items = useRef();
  let outerDiv = useRef();
  let [toggle, setToggle] = useState(false);
  let serviceClick = () => {
    let dupToggle = !toggle;
    setToggle(dupToggle);

    if (dupToggle) {
      service.current.style.borderBottom = "2px solid #FFB600";
      items.current.style.height = "fit-content";
      outerDiv.current.style.height = "70vh";
    } else {
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }
  };
  // upper ka code menu ky services button ky lie hy

  let [toggle2, setToggle2] = useState(false);
  let process = useRef();
  let proItems = useRef();
  let processClick = () => {
    let dupli2Toggle = !toggle2;
    setToggle2(dupli2Toggle);

    if (dupli2Toggle) {
      process.current.style.borderBottom = "2px solid #FFB600";
      proItems.current.style.height = "fit-content";
      proItems.current.style.paddingBottom = "5px";
    } else {
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }
  };
  // upper ka code process wlaay button ky lie hy

  let slideMenu = useRef();
  let [menuToggle, setMenuToggle] = useState(false);
  let menuClick = () => {
    let dupli3Toggle = !menuToggle;
    setMenuToggle(dupli3Toggle);
    if (dupli3Toggle) {
      slideMenu.current.style.height = "fit-content";
    } else {
      slideMenu.current.style.height = "0px";
    }
  };
  //  ye upper ka code menu ko slide krwanay ky lie hy
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  // yaha sy upper ka code desktop wlay menu kay service item ka hy 
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  // yaha sy upper ka code desktop wlay menu kay process item ka hy
  return (
    <div className="relative ">

      <div className="h-[100vh] w-[100vw]">
        <Hero />
      </div>
      <div className="main py-3 mx-auto max-w-[1700px]">
        {/* ye Header ka code hy  */}
        <div className="header w-[100vw] pr-2">
          <Header />

          <Page1 />
          <Solutions />
          <Dev />
          <CardPage />
          <Latest />
        </div>
      </div>
      <div className="max-1700px mx-auto w-screen">
        <FormPage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
