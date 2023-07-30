import React from "react";
import Contact from "./../../components/Contact/Contact";
import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Hobby from "./../../components/Hobby/Hobby";
import Intro from "./../../components/Intro/Intro";
import Navbar from "./../../components/Navbar/Navbar";
import Project from "./../../components/Projects/Project";
import MyProjects from "../NewProject/ProjSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      {/* <Project /> */}
      {/* <Hobby /> */}
      <MyProjects />
      <Contact />
      <Footer />
    </>
  );
}
