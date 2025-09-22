import { GiCampingTent } from "react-icons/gi";

type Tent = {
    title: string;
    couponText: string;
    originalPrice: number;
    discountedPrice: number;
    lockPrice: number;
};

const tents: Tent[] = [
    {
        title: "Camping Tents",
        couponText: "Use coupon 'WEEKDAY' to get ₹100 off on Mon-Fri",
        originalPrice: 1099,
        discountedPrice: 999,
        lockPrice: 499,
    },
    {
        title: "Triangle Tents",
        couponText: "Use coupon 'TRIANGLE' to get ₹200 off on Mon-Fri",
        originalPrice: 1699,
        discountedPrice: 1499,
        lockPrice: 749,
    },
];

const TentCards = () => {
    return (
        <section className="h-fit flex items-center justify-center bg-gray-100 p-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {tents.map((tent, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-teal-600 text-white px-4 py-2 flex items-center justify-between">
                            <h2 className="font-semibold">{tent.title}</h2>
                            <span className="text-sm cursor-pointer">ℹ️</span>
                        </div>

                        {/* Coupon */}
                        <div className="bg-cyan-400 text-xs text-center text-white py-1">
                            {tent.couponText}
                        </div>

                        {/* Body */}
                        <div className="p-4 flex gap-1  items-center justify-around">
                            <div className="text-7xl">
                                <GiCampingTent />
                            </div>
                            <div>

                                <div className="text-gray-500 line-through">
                                    ₹{tent.originalPrice}
                                </div>
                                <div className="text-2xl font-bold text-gray-800">
                                    ₹{tent.discountedPrice}{" "}
                                    <span className="text-base font-normal">Per Adult</span>
                                </div>
                                <div className="text-sm">
                                    Pay{" "}
                                    <span className="font-semibold text-red-600">
                                        ₹{tent.lockPrice}
                                    </span>{" "}
                                    & lock this price
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TentCards;
