import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
    console.log(categories);
    return (
        <div className=" max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">
                Top Rated Menu Items
            </h1>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
                {categories.map((item) => (
                    <div
                        className="bg-gray-100 rounded-xl p-4 flex justify-between items-center"
                        key={item.id}
                    >
                        <h2 className="font-bold sm:text-xl">{item.name}</h2>
                        <img className="w-20" src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
