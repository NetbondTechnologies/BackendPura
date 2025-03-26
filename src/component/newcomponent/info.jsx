const InfoCards = () => {
  const cards = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-cyan-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5m4-4h6"
          />
        </svg>
      ),
      title: "Jewelry Designs",
      description:
        "Each jewelry piece is a masterpiece, a blend of artistry and craftsmanship, designed to captivate hearts.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-cyan-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10v13m6-10v10m5.447-7.724A1 1 0 0021 5.618v10.764a1 1 0 01-1.447.894L15 14"
          />
        </svg>
      ),
      title: "About Us",
      description:
        "We are more than a jewelry manufacturer; we are storytellers, crafting beauty with every piece.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-cyan-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143l-5.714 2.714L13 21l-2.286-6.857L5 11.143l5.714-2.714L13 3z"
          />
        </svg>
      ),
      title: "Our Blog",
      description:
        "Dive into the world of precious and semi-precious gemstones and discover their mesmerizing beauty.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-cyan-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
      title: "Visit Jaipur",
      description:
        "Plan your journey to the Pink City, Jaipur, where tradition meets craftsmanship.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-100 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 p-4 rounded-full bg-cyan-50 group-hover:bg-cyan-100 group-hover:scale-110 transition-all duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-cyan-800 mt-5 group-hover:text-cyan-900 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-3 text-sm text-gray-600 leading-relaxed px-2">
                {card.description}
              </p>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
