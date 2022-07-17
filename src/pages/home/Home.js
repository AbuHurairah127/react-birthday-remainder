import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ListSection from "../../components/listSection/ListSection";

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="mainContainer self-center">
        <ListSection />
      </div>
      <div className="footerContainer">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
