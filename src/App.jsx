import React, { useState, useEffect } from "react";
import {
  Monitor,
  Sparkles,
  BarChart3,
  Palette,
  Video,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  // Handle Scroll Effect for Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- NEW: Change Favicon Dynamically ---
  useEffect(() => {
    // This finds the existing favicon link element
    let link = document.querySelector("link[rel~='icon']");

    // If it doesn't exist, create it
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    // Set the favicon to your image.
    // IMPORTANT: Place your image in the 'public' folder and name it 'favicon.png'
    link.href = "/favicon.png";
  }, []);

  // Smooth Scroll Helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // --- DATA ---
  const services = [
    {
      title: "Web Design",
      desc: "Crafting responsive, user-centric websites that captivate audiences and drive engagement through modern design principles.",
      icon: <Monitor size={32} />,
    },
    {
      title: "Branding Items",
      desc: "Creating cohesive brand identities with custom merchandise and physical materials that leave lasting impressions.",
      icon: <Sparkles size={32} />,
    },
    {
      title: "Infographics",
      desc: "Transforming complex data into compelling visual stories that communicate insights clearly and engage your audience.",
      icon: <BarChart3 size={32} />,
    },
    {
      title: "Logo Design",
      desc: "Designing distinctive, memorable logos that capture your brand essence and stand out in competitive markets.",
      icon: <Palette size={32} />,
    },
    {
      title: "Advert Videos",
      desc: "Producing dynamic video content that tells your brand story, captures attention, and converts viewers into loyal customers.",
      icon: <Video size={32} />,
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "Web Design",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Branding",
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Graphics",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Web Design",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    },
    // Removed the broken Branding and Video items from here
  ];

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      {/* Inject Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* --- HEADER --- */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-4"
            : "bg-white/90 backdrop-blur-md py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-bold text-[#8c52ff] cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            M. Brands
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 font-medium hover:text-[#8c52ff] transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-[#8c52ff] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#7a45e5] transition-colors shadow-lg shadow-purple-200">
              Start Project
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-gray-100">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-gray-600 font-medium py-2 hover:text-[#8c52ff]"
              >
                {item}
              </button>
            ))}
            <button className="bg-[#8c52ff] text-white w-full py-3 rounded-lg font-semibold mt-2">
              Start Project
            </button>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center text-center px-4 pt-20"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-purple-200/50 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            Where Vision Meets <br />
            <span className="text-[#8c52ff]">Virtual Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            Bringing your brand to life
          </p>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Established in 2020, M. Brands stands at the intersection of
            technology and artistry. We are more than just an IT company; we are
            architects of digital identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-[#8c52ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a45e5] transition-all shadow-lg shadow-purple-300 transform hover:-translate-y-1"
            >
              View Our Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-white transition-all transform hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Our Services
            </h2>
            <p className="text-gray-500">
              End-to-end creative solutions that bring your brand to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(140,82,255,0.15)] hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-[#8c52ff] mb-6 group-hover:bg-[#8c52ff] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <button className="text-[#8c52ff] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS & STORY SECTION (About) --- */}
      <section id="about" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
            {[
              { num: "100+", label: "Projects Delivered" },
              { num: "50+", label: "Happy Clients" },
              { num: "Since 2020", label: "Years of Excellence" },
              { num: "5-Star", label: "Client Reviews" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#8c52ff] mb-2">
                  {stat.num}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Story Content */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, M. Brands emerged from a simple yet powerful
                  vision: to bridge the gap between technological innovation and
                  artistic expression. We recognized that in the digital age,
                  brands need more than just functionality—they need soul.
                </p>
                <p>
                  Our team of creative technologists, designers, and strategists
                  work in harmony to craft digital experiences that resonate.
                  From the first pixel to the final deployment, we're committed
                  to bringing your brand's unique story to life through visually
                  stunning and technically sophisticated solutions.
                </p>
                <p>
                  We don't just build websites and create logos—we architect
                  digital identities that stand the test of time. Every project
                  is an opportunity to push creative boundaries while delivering
                  measurable results for our clients.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#8c52ff]/10 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                alt="Office Interior"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Our Work</h2>
            <p className="text-gray-500">
              A showcase of our creative excellence
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Web Design", "Branding", "Video", "Logos"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-[#8c52ff] text-white shadow-lg shadow-purple-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl h-72 cursor-pointer shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <span className="text-[#8c52ff] font-bold text-sm tracking-wider uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold"></h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-500">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "M. Brands transformed our digital presence completely. Their attention to detail and creative vision exceeded all expectations.",
                name: "Sarah Johnson",
                role: "TechCorp Inc.",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                text: "Working with M. Brands was a game-changer for our brand identity. Professional, creative, and incredibly responsive.",
                name: "Michael Chen",
                role: "StartupHub",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                text: "The team at M. Brands delivered exceptional work on time and within budget. I highly recommend their services.",
                name: "Emily Rodriguez",
                role: "InnovateTech",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <p className="text-gray-600 italic mb-8 text-sm leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {t.name}
                    </h4>
                    <span className="text-xs text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-500">
              Ready to bring your brand to life? Get in touch with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c52ff] focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c52ff] focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c52ff] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white">
                    <option>Select a service</option>
                    <option>Web Design</option>
                    <option>Branding</option>
                    <option>Infographics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c52ff] focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8c52ff] text-white py-3 rounded-lg font-semibold hover:bg-[#7a45e5] transition-colors shadow-lg shadow-purple-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12 py-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-[#8c52ff] rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm font-semibold">
                        Email
                      </span>
                      <h4 className="text-lg font-medium text-gray-900">
                        mbrandsltd@outlook.com
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-[#8c52ff] rounded-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm font-semibold">
                        Phone
                      </span>
                      <h4 className="text-lg font-medium text-gray-900">
                        +44 (7720) 186-199
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-[#8c52ff] rounded-lg">
                      <Clock size={24} />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm font-semibold">
                        Business Hours
                      </span>
                      <h4 className="text-lg font-medium text-gray-900">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/m-brands-ltd/?viewAsMember=true"
                    className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-[#8c52ff] hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/mbrands_01/"
                    className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-[#8c52ff] hover:text-white transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-[#8c52ff] hover:text-white transition-all"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-50 pt-20 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Col 1 */}
            <div>
              <div className="text-2xl font-bold text-[#1a1a1a] mb-4">
                M. Brands
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Bringing brands to life since 2020
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/m-brands-ltd/?viewAsMember=true"
                  className="text-gray-400 hover:text-[#8c52ff]"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/mbrands_01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-gray-400 hover:text-[#8c52ff]"
                >
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#8c52ff]">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    Branding Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    Infographics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    Logo Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    Advert Videos
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    mbrandsltd@outlook.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8c52ff]">
                    +447720186199
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
            &copy; 2025 M. Brands. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
