import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  const dishes = data[0]?.dishes || [];

  return (
    <section className="menu py-16 bg-gray-50" id="menu">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Heading Section */}
        <div className="heading_section text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Popular Dishes</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Explore our most loved dishes, carefully crafted by our chefs using fresh, seasonal ingredients to satisfy every craving.
          </p>
        </div>

        {/* Dish Cards */}
        <div className="dishes_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dishes.map(dish => (
            <div
              className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              key={dish.id}
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {dish.title}
                </h3>
                {dish.description && (
                  <p className="text-sm text-gray-600 mb-4">
                    {dish.description}
                  </p>
                )}
                <button className="px-4 py-2 bg-emerald-500 text-white text-sm rounded hover:bg-emerald-600 transition">
                  {dish.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
