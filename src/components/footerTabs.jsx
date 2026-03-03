import React, { useState } from 'react';
import { categories, locations } from '../data/data'; 

export default function FooterTabs() {

  const [activeTab, setActiveTab] = useState(categories[0]);

  const activeLocations = locations.find(loc => loc.category === activeTab.name)?.locations || [];

  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200 px-0 md:px-12 py-12 mt-16">
      <div className="max-w-400 mx-auto px-6 md:px-10">
        
        <h2 className="text-2xl font-semibold text-[#222222] mb-4">
          Inspiration for future getaways
        </h2>

        <div className="flex border-b border-gray-300 overflow-x-auto gap-8 mb-8 no-scrollbar">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(item)}
              className={`pb-4 text-[15px] font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab.name === item.name 
                  ? "border-black text-black" 
                  : "border-transparent text-gray-500"
              }`}
            >
              {item.name} 
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {activeTab.subcategories.map((sub, index) => (
            <a href='#' key={index} className="cursor-pointer group">
              <h4 className="text-[15px] font-semibold text-[#222222]">
                {sub}
              </h4>
              <p className="text-[15px] text-gray-500 hover:text-black">Destination ideas</p>
            </a>
          ))}

          <button className="text-sm font-semibold hover:underline hover:underline-offset-4 flex items-center cursor-pointer">
            Show more <span className="text-[10px] ml-1">▼</span>
          </button>
        </div>

      </div>
    </footer>
  );
}