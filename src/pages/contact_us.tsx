const ContactUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-600 text-lg text-center mt-4 max-w-2xl mx-auto">
          Have questions about your trip, packages, or bookings? We’re here to
          help you plan your perfect journey!
        </p>

        {/* Contact Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
          {/* Left Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                📍 Office Location
              </h3>
              <p className="text-gray-600">
                Kathmandu, Nepal
                <br /> Travel Management Headquarters
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                📞 Contact Numbers
              </h3>
              <p className="text-gray-600">+977-9800000000</p>
              <p className="text-gray-600">+977-9811111111</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                📧 Email Support
              </h3>
              <p className="text-gray-600">support@travelhub.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                🕒 Office Hours
              </h3>
              <p className="text-gray-600">Sun–Fri | 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Right Section — Form */}
          <div className="bg-white px-6 py-8 rounded-xl shadow-xl border">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message ✉️
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-16">
          © {new Date().getFullYear()} Travel Management System — All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
