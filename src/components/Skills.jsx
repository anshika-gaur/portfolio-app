const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '🏗️' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Responsive Design', icon: '📱' },
    { name: 'State Management', icon: '📊' },
    { name: 'Frontend Development', icon: '💻' },
    { name: 'Git', icon: '📚' },
    { name: 'VS Code', icon: '🛠️' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-3xl mb-2">{skill.icon}</span>
              <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
