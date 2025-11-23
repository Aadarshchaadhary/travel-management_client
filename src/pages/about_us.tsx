const AboutUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          About <span className="text-blue-600">Our Travel Hub</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg text-center mt-4 max-w-3xl mx-auto">
          Your trusted travel management partner — making journeys simple,
          organized, and unforgettable with smart tools and seamless planning.
        </p>

        {/* Main section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 items-center">
          {/* Left Side Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ✈️ Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a modern travel-tech company dedicated to helping
              individuals, groups, and businesses plan their trips with ease.
              From booking packages to managing itineraries, we ensure a smooth
              and convenient travel experience.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🌍 What We Do
            </h2>
            <ul className="text-gray-600 space-y-3">
              <li>✔ Smart travel package management</li>
              <li>✔ Easy booking and reservation tracking</li>
              <li>✔ Secure online payments</li>
              <li>✔ Real-time updates & customer support</li>
              <li>✔ Personalized travel recommendations</li>
            </ul>
          </div>

          {/* Right Side – Travel Image or Illustration */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Travel Adventure"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Our Vision
            </h3>
            <p className="text-gray-600">
              To transform travel planning with automation, simplicity, and
              exceptional user experience.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              💼 Our Mission
            </h3>
            <p className="text-gray-600">
              Helping travelers find the best destinations, deals, and
              experiences with intelligent travel management.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🤝 Our Promise
            </h3>
            <p className="text-gray-600">
              A safe, smooth, and memorable journey — powered by technology and
              personalized care.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-16">
          © {new Date().getFullYear()} Travel Management System. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
