"use client"

import {Tabs, Tab} from "@nextui-org/react";

export default function Home() {

  const radiusList = [
    "full",
    "lg",
    "md",
    "sm",
    "none",
  ];
  return (
    <div className="flex flex-col h-screen ">
      
      {/* Header */}
      <div className="flex flex-wrap gap-4 justify-center pt-6">
        <Tabs radius="full" aria-label="Tabs radius" color="default">
          <Tab key="home" title="Home"/>
          <Tab key="about" title="About"/>
          <Tab key="projects" title="Projects"/>
          <Tab key="skills" title="Skills"/>
          <Tab key="experience" title="Experience"/>
          <Tab key="contact" title="Contact"/>
        </Tabs>
    </div>
    </div>
  );
}
