import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Hero />
      <section className="container mx-auto my-10 px-4 ">
        <h2 className="text-4xl font-bold text-center mb-8">
          Featured Coffees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Featured Coffee Cards */}
          <div className="border p-4 rounded-lg bg-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured Coffee"
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Espresso</h3>
            <p className="text-gray-600 mt-2">
              Rich, full-bodied espresso with a smooth finish.
            </p>
            <div className="">
              <Link
                to="/menu"
                className="mt-4 inline-block  text-white bg-amber-600 py-2 px-4 rounded-lg"
              >
                Order Now
              </Link>
            </div>
          </div>
          <div className="border p-4 rounded-lg bg-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured Coffee"
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Cappuccino</h3>
            <p className="text-gray-600 mt-2">
              A perfect balance of espresso, steamed milk, and foam.
            </p>
            <div>
              <Link
                to="/menu"
                className="mt-4 inline-block text-white bg-amber-600 py-2 px-4 rounded-lg"
              >
                Order Now
              </Link>
            </div>
          </div>
          <div className="border p-4 rounded-lg bg-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww"
              alt="Featured Coffee"
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Latte</h3>
            <p className="text-gray-600 mt-2">
              Smooth, creamy latte with a hint of sweetness.
            </p>
            <div>
              <Link
                to="/menu"
                className="mt-4 inline-block text-white bg-amber-600 py-2 px-4 rounded-lg"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-amber-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
          <Link
            to="/menu"
            className="text-xl text-amber-900 underline hover:text-amber-600 transition"
          >
            View Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
