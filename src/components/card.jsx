import { Heart } from "lucide-react";

export default function Card({ img, title, price, rating, guestFavorite, isSeeAll }) {

  if (isSeeAll) {
    return (
      <div className="flex flex-col items-center justify-center h-full border border-gray-200 rounded-2xl p-4 cursor-pointer hover:shadow-md transition-shadow aspect-4/5 bg-white">
        <div className="relative w-20 h-20 mb-4">
          <img src={img[0]} className="absolute w-12 h-12 rounded-lg object-cover rotate-[-10deg] border-2 border-white shadow-lg z-10" alt="" />
          <img src={img[1]} className="absolute w-12 h-12 rounded-lg object-cover rotate-10 left-8 border-2 border-white shadow-lg z-0" alt="" />
        </div>
        <span className="font-semibold text-sm">See all</span>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        
        {guestFavorite && (
          <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full shadow-md">
            <p className="text-[11px] font-bold text-black">Guest favorite</p>
          </div>
        )}

        <button className="absolute top-3 right-3 text-white drop-shadow-md hover:scale-110 transition-transform cursor-pointer">
          <Heart size={22} strokeWidth={2} fill="rgba(0,0,0,0.3)" />
        </button>
      </div>

      <div className="mt-2">
        <div className="flex justify-between items-start">
          <h3 className="text-[14px] font-semibold text-gray-900 leading-tight">{title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-[13px]">★</span>
            <span className="text-[13px] font-light">{rating}</span>
          </div>
        </div>
        <p className="text-[14px] text-gray-500 mt-0.5">{price}</p>
      </div>
    </div>
  );
}