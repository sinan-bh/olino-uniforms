interface ProjectCardProps {
  title: string;
  progress: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, progress }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4">
        <div className="w-full bg-gray-500 h-2 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full"
            style={{ width: progress }}
          />
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span>{progress}</span>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-full">
            See All Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
