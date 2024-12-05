import React from "react";
import ProjectCard from "@/components/admin/project-card/project-card";
import TeamActivity from "@/components/admin/team-card/team-card";
import StatsCard from "@/components/admin/status-card/status-card";
import Members from "@/components/admin/members/members";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-dark-100 p-8">
        <h1 className="text-white text-3xl font-semibold mb-8">
          Manage your projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="Bion Project" progress="60%" />
          <StatsCard />
          <TeamActivity />
        </div>
        <div>
          <Members />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
