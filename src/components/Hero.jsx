const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900 transition-colors duration-300">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">Anshika Gaur</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate developer creating amazing web experiences with modern technologies.
        </p>
        <div className="flex justify-center">
          <a
            href="https://myinvestwise.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cloud"
          >
            Check My Live Project - InvestWise
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
