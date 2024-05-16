"use client";

import ProjectManager from "@/components/admin/portfolio/ProjectManager";
import TechnologyManager from "@/components/admin/portfolio/TechnologyManager";
import ResponsiveSection from "@/components/customUIs/ResponsiveSection";
import Section from "@/components/customUIs/Section";
import { useEffect } from "react";

const DashboardPortfolio: React.FC = () => {
  useEffect(() => {
    document.title = "Manage Portfolio | Admin Dashboard";
  }, []);
  return (
    <main>
      <h2 className="text-2xl text-center m-10 font-bold text-gray-800">
        Manage Your Portfolio
      </h2>
      <ResponsiveSection>
        <TechnologyManager />
      </ResponsiveSection>
      <ResponsiveSection>
        <ProjectManager />
      </ResponsiveSection>
    </main>
  );
};
export default DashboardPortfolio;
