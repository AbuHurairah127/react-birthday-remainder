import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="footerContainer mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
