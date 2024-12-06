import React from "react";
import ProjectCard from "@/components/admin/dashboard/project-card/project-card";
import TeamActivity from "@/components/admin/dashboard/team-card/team-card";
import StatsCard from "@/components/admin/dashboard/status-card/status-card";
import Members from "@/components/admin/dashboard/members/members";

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-black w-full h-full">
      <div className="flex-1 bg-dark-100 p-8">
        <div className="text-white text-3xl font-semibold mb-8 ">
          Olino Uniforms
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="Pending Works" progress="80%" />
          <StatsCard />
          <TeamActivity />
        </div>
        <div className="mt-6">
          <div className="text-3xl font-semibold text-white">Members</div>
          <Members />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
