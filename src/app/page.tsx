"use client"

import About from "./components/about";
import Intro from "./components/intro";
import NavigationTab from "./components/navigationTab";
import Projects from "./components/projects";
import Skills from "./components/skills";


export default function Home() {

  const radiusList = [
    "full",
    "lg",
    "md",
    "sm",
    "none",
  ];
  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <NavigationTab />
      <Intro />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
