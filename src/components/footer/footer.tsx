const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-10 pb-6 px-22">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h1 className="text-2xl font-bold text-white italic">
            Travel Management
          </h1>
          <p className="mt-3 text-sm">
            Explore the world with comfort, safety, and unforgettable
            experiences. Your trusted travel partner.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Packages</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
          <p className="text-sm">Kathmandu, Nepal</p>
          <p className="text-sm mt-1">+977 9800000000</p>
          <p className="text-sm mt-1">@gmail.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Travel Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
