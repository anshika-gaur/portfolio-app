const Projects = () => {
  const projects = [
    {
      title: 'QuickEats',
      description: 'Developed a responsive food ordering platform using React.js, implementing state management with Redux for cart, menu selection, and dynamic UI updates. Features include menu browsing, item selection, cart management, image display, and interactive components like modals, filters, and hover effects. Designed a mobile-first, responsive layout for a smooth and engaging user experience.',
      techStack: ['React.js', 'Redux', 'CSS', 'Responsive Design'],
      github: 'https://github.com/anshika-gaur/QuickEats'
    },
    {
      title: 'InvestWise',
      description: 'InvestWise is a comprehensive investment tracking platform that allows users to monitor their portfolios, analyze market trends, and make informed decisions. It features real-time data updates, customizable alerts, and detailed analytics to help users maximize their investment potential.',
      techStack: ['React.js', 'API Integration', 'Data Visualization'],
      github: 'https://github.com/anshika-gaur/InvestWise'
    },
    {
      title: 'Readify',
      description: 'A basic frontend project where users can buy books, see authors, ratings, and add books to the cart. Focused on clean UI and user-friendly experience.',
      techStack: ['React.js', 'CSS', 'Frontend Development'],
      github: 'https://github.com/anshika-gaur/Readify'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => {
            const colors = ['border-blue-500', 'border-green-500', 'border-purple-500'];
            const bgColors = ['bg-blue-50 dark:bg-blue-900/20', 'bg-green-50 dark:bg-green-900/20', 'bg-purple-50 dark:bg-purple-900/20'];
            return (
              <div key={index} className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 border-l-4 ${colors[index % colors.length]} ${bgColors[index % bgColors.length]}`}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-1 px-3 rounded text-sm transition-colors"
                >
                  GitHub
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
