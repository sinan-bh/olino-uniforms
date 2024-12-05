import Link from "next/link";

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
        <span>{progress}</span>
        <div className="flex justify-between my-4">
          <div>Members {10}</div>
          <div>Works {23}</div>
        </div>
        <div>
          <div className="w-full h-10 rounded-xl flex justify-center items-center border my-4 hover:bg-teal-500 hover:border">
            pending Works
          </div>
        </div>
        <Link href={"/admin/works"}>
          <div className="bg-teal-500  text-white text-center px-4 py-2 rounded-xl hover:bg-transparent hover:border">
            See All Project
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
