import heroImg from "../assets/hero.jpg";
const BannerSection = () => {
  return (
    <section className="bg-[#f8f4ee] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block px-4 py-2 border border-red-300 rounded-full text-red-600 text-sm font-semibold">
            🔥 WOOD-FIRED DAILY
          </span>

          <h1
            className="mt-6 text-6xl lg:text-7xl font-black leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Crave it. <span className="text-orange-500">Get it.</span>
            <br />
            Eat it hot.
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-lg leading-relaxed">
            From blistered Margherita to molten lava cake — chef-crafted comfort
            food at your door in under 30 minutes.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-semibold">
              Browse menu →
            </button>

            <button className="bg-white border border-gray-300 px-8 py-4 rounded-2xl font-semibold">
              Create account
            </button>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 text-gray-600">
            <span>⏰ 30 min avg</span>
            <span>🚚 Free over $25</span>
            <span>🔥 Always hot</span>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={heroImg}
            alt="Food"
            className="w-full h-[420px] object-cover rounded-[32px] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
