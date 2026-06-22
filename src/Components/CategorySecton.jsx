const CategorySection = () => {
  const categories = [
    { icon: "🍕", name: "Pizza" },
    { icon: "🍔", name: "Burger" },
    { icon: "🍰", name: "Cake" },
    { icon: "🥤", name: "Drinks" },
    { icon: "🍟", name: "Sides" },
  ];

  return (
    <section className="bg-[#f8f4ee] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Header */}
        <div className="mb-10">
          <h2
            className="text-6xl font-black text-[#1d0906]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Shop by category
          </h2>

          <p className="text-2xl text-[#7a5a46] mt-2">
            Pick your craving.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-[#fdfdfd] border border-gray-200 rounded-[30px] h-[150px] flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition"
            >
              <span className="text-5xl mb-3">{item.icon}</span>

              <h3
                className="text-3xl font-bold text-[#1d0906]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Hot Right Now */}
        <div className="mt-24 flex justify-between items-end">
          <div>
            <h2
              className="text-6xl font-black text-[#1d0906]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Hot right now
            </h2>

            <p className="text-2xl text-[#7a5a46] mt-2">
              Fresh out of the kitchen.
            </p>
          </div>

          <button className="text-red-600 text-xl font-semibold hover:underline">
            See all →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;