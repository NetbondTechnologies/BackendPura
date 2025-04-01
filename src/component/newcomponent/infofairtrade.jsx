import React from "react";
import { Link } from "react-router-dom";

const InfoFairTrade = () => {
  // Data for Fair Trade principles with a cyan theme
  const fairTradePrinciples = [
    {
      title: "Empower, Uplift, Prosper",
      description:
        "Create opportunities for producers to thrive and grow with dignity.",
      imageAlt: "Empowered women in vibrant communities",
      imageUrl:
        "https://img.freepik.com/free-photo/cup-man-achievement-success-honor_1150-1719.jpg?t=st=1743509035~exp=1743512635~hmac=30b1ac2d75087ea17351dbcc5a6d370aebcad0673f2db1f375cd7fd5e16eed47&w=1380",
      icon: "🌱",
    },
    {
      title: "Financial Support",
      description:
        "Providing resources to ensure sustainable growth and stability for producers.",
      imageAlt: "Hands exchanging resources",
      imageUrl:
        "https://img.freepik.com/free-vector/demand-analysts-shaking-hands-from-laptops-screens-planning-future-demand-demand-planning-demand-analytics-digital-sales-forecast-concept-illustration_335657-2098.jpg?t=st=1743508946~exp=1743512546~hmac=ab83690aa27f9ff4f55326b6fe603855c9c27721261cbf37fb136a282d472db4&w=1380",
      icon: "💰",
    },
    {
      title: "Transparency & Accountability",
      description:
        "Building trust through clear and honest financial practices.",
      imageAlt: "Transparent business handshake",
      imageUrl: "https://img.freepik.com/free-vector/flat-design-csr-concept-illustrated_23-2148915156.jpg?t=st=1743509113~exp=1743512713~hmac=6941934e9a21efbb13bd32d5d3a9d671bd737818689c3b33879e03dd13893e76&w=1380",
      icon: "🔍",
    },

    {
      title: "Equality, Equity, and Freedom",
      description:
        "Fostering inclusivity and justice for all in the trade ecosystem.",
      imageAlt: "Diverse team collaborating",
      imageUrl: "https://img.freepik.com/free-vector/gender-equality-concept_23-2148588281.jpg?t=st=1743509176~exp=1743512776~hmac=f9152397471a8e9e31fd94f124fea2867ec56a1cdda12fba1b4a35f04261a462&w=1380",
      icon: "🤝",
    },
    {
      title: "Good Working Conditions",
      description:
        "Guaranteeing safe, healthy, and fair workplaces for everyone involved.",
      imageAlt: "Clean and safe work environment",
      imageUrl: "https://img.freepik.com/free-photo/front-view-flexing-male-engineer-sitting-his-working-place-job-agenda-plan-document-corporate-property-builder-business-contractor_140725-155018.jpg?t=st=1743509238~exp=1743512838~hmac=756b8a70c9c55391980a320851d9948232e256d965d8040687727fb5c6487ea0&w=1380",
      icon: "🏭",
    },
    {
      title: "Respect for the Environment",
      description:
        "Committing to sustainable practices that protect our planet.",
      imageAlt: "Lush green fields and sustainable farming",
      imageUrl: "https://img.freepik.com/free-photo/little-boy-holding-soil-plant-park_53876-22922.jpg?t=st=1743509301~exp=1743512901~hmac=8f11890476109191bb9eda368950dffa4195d01033701fef42d01c4890566795&w=1380",
      icon: "🌍",
    },
  ];

  return (
    <div className="container mx-auto px-3 py-12 bg-gradient-to-br from-cyan-50 to-white">
      
      {/* Reduced padding */}
      {/* Hero Section with Animation */}
      <div className="text-center mb-10 animate-fade-in">
     
        {/* Reduced margin bottom */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-3 drop-shadow-md">
         
          {/* Smaller font */}
          Our Passion for Fair Trade
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-base leading-tight">
        
          {/* Smaller font and tighter line height */}
          We’re dedicated to a sustainable future, empowering producers, and
          fostering ethical practices. Discover our vibrant mission!
        </p>
      </div>
      {/* Cards Section with Staggered Layout and Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {/* Reduced gap */}
        {fairTradePrinciples.map((principle, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-cyan-50 border-l-2 ${
              index % 2 === 0 ? "border-cyan-500" : "border-cyan-300"
            } animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s`, minHeight: "350px" }} // Reduced min height and animation delay
          >
            <div className="p-3 flex flex-col h-full">
              {" "}
              {/* Reduced padding */}
              <div className="flex items-center mb-2">
                {" "}
                {/* Reduced margin bottom */}
                <span className="text-xl md:text-2xl mr-2 text-cyan-600">
                  {principle.icon}
                </span>{" "}
                {/* Smaller icon */}
                <h3 className="text-lg md:text-xl font-bold text-cyan-800 truncate">
                  {principle.title}
                </h3>{" "}
                {/* Smaller font */}
              </div>
              <p className="text-gray-600 mb-3 leading-tight line-clamp-2">
                {" "}
                {/* Reduced margin and lines */}
                {principle.description}
              </p>
              <img
                src={principle.imageUrl}
                alt={principle.imageAlt}
                className="w-full h-32 md:h-52 object-cover rounded border border-cyan-200" // Reduced image height
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300";
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Creative Call to Action with Animation */}
      <div className="mt-10 text-center animate-fade-in-up">
      
        {/* Reduced margin top */}
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-3 drop-shadow-lg">
         
          {/* Smaller font */}
          Be Part of the Change
        </h2>
        <p className="text-gray-700 mb-4 max-w-md mx-auto text-sm md:text-base leading-tight">
         
          {/* Smaller font and tighter line height */}
          Join our movement to create a fairer world. Explore ways to support
          and engage with our mission today!
        </p>
        <Link to="/contactus"  >
        <button className="bg-cyan-600 text-white px-6 md:px-8 py-1.5 md:py-2 rounded hover:bg-cyan-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 animate-bounce-slow">
          Get Involved Now
        </button></Link>
      </div>
    </div>
  );
};

// CSS Animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(15px); } /* Reduced translate distance */
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); } /* Reduced translate distance */
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes bounceSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); } /* Reduced bounce height */
  }

  .animate-fade-in { animation: fadeIn 0.6s ease-out; } /* Faster animation */
  .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; } /* Faster animation */
  .animate-slide-up { animation: slideUp 0.5s ease-out; } /* Faster animation */
  .animate-bounce-slow { animation: bounceSlow 2s infinite; } /* Faster bounce */

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default InfoFairTrade;
