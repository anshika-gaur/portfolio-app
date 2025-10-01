const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-4">
            I am a Software Engineer currently pursuing B.Tech in Computer Science at Hi-Tech Institute of Engineering and Technology with a CGPA of 8+.
            I am looking for an opportunity in Software Development to leverage my skills with modern web technologies, contribute to dynamic, user-friendly applications, and gain hands-on experience in real-world software projects.
          </p>
          <p className="mb-4">
            My skills include frontend development with HTML, CSS, JavaScript, React.js, database knowledge in SQL, programming in Java, and tools like GitHub, VS Code, IntelliJ IDEA, and Postman.
          </p>
          <p className="mb-4">
            I have completed certifications in React, Java, CSS & JS, and Data Structures & Algorithms through various platforms and live training programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
