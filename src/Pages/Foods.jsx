import { useState } from "react";
import { FaStar } from "react-icons/fa";

const categories = ["All", "Pizza", "Burger", "Chicken"];

const foodsData = [
  {
    id: 1,
    title: "Cheese Burger",
    category: "Burger",
    image: "https://source.unsplash.com/400x300/?burger",
    rating: 4.5,
    price: 5.99,
    description: "Juicy grilled burger with cheese and fresh veggies.",
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    category: "Pizza",
    image: "https://source.unsplash.com/400x300/?pizza",
    rating: 4.8,
    price: 8.99,
    description: "Hot cheesy pizza with pepperoni toppings.",
  },
  {
    id: 3,
    title: "Fried Chicken",
    category: "Chicken",
    image: "https://source.unsplash.com/400x300/?fried-chicken",
    rating: 4.6,
    price: 6.99,
    description: "Crispy fried chicken with special spices.",
  },
];

const Foods = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // 🔍 filter logic
  const filteredFoods = foodsData.filter((food) => {
    const matchSearch = food.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || food.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Delicious Foods For You 🍔
        </h1>
        <p className="text-gray-600 mt-2">
          Search your favorite meals and enjoy fresh tasty food anytime
        </p>
      </div>

      {/* Search + Category */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search foods..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Category Pills */}
        <div className="flex items-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition font-medium
                ${
                  activeCategory === cat
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-800 hover:bg-red-50"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={food.image}
              alt={food.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold">{food.title}</h2>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 mt-1">
                <FaStar />
                <span className="text-gray-700">{food.rating}</span>
              </div>

              {/* Price */}
              <p className="text-red-600 font-bold mt-2">${food.price}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{food.description}</p>

              {/* Button */}
              <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-red-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
