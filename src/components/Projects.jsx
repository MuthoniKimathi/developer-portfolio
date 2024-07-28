

const projects = [
  { id: 1, image: 'src/assets/images/project1.svg' },
  { id: 2, image: 'src/assets/images/project2.svg' },
  { id: 3, image: 'src/assets/images/project3.svg' },
  { id: 4, image: 'src/assets/images/project4.svg' },
  { id: 5, image: 'src/assets/images/project5.svg' },
  { id: 6, image: 'src/assets/images/project6.svg' },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Projects</h2>
          <a href="#contact" className="text-sm text-white-500 hover:text-green-300">
            CONTACT ME
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="relative group bg-gray-800 p-2 rounded-lg ">
              <img src={project.image} alt={`Project ${project.id}`} className="rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                <a href="#" className="text-white text-lg mb-2 hover:underline decoration-green-500 decoration-2">
                  View Project
                </a>
                <a href="#" className="text-white text-lg hover:underline decoration-green-500 decoration-2">
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
