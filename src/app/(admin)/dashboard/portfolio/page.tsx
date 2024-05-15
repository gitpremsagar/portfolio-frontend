"use client";

import ProjectManager from "@/components/admin/portfolio/ProjectManager";
import TechnologyManager from "@/components/admin/portfolio/TechnologyManager";
import Section from "@/components/customUIs/Section";
import { useEffect } from "react";

const DashboardPortfolio: React.FC = () => {
  useEffect(() => {
    document.title = "Manage Portfolio | Admin Dashboard";
  }, []);
  return (
    <main>
      <h1 className="text-2xl text-center m-10 font-bold text-gray-800">
        Manage Your Portfolio
      </h1>
      <Section className="p-4 sm:p-8 md:p-12 lg:p-16">
        <TechnologyManager />
      </Section>
      <ProjectManager />
    </main>
  );
};
export default DashboardPortfolio;
