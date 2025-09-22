import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CampingSpot {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    originalPrice: number;
    discountPercent: number;
    price: number;
}

const CardSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const campingSpots: CampingSpot[] = [
        {
            id: 1,
            name: "Panshet Dam Camping",
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=300&fit=crop",
            rating: 4.6,
            reviews: 330,
            originalPrice: 1199,
            discountPercent: 17,
            price: 999,
        },
        {
            id: 2,
            name: "Alibaug Beach Camping",
            image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=500&h=300&fit=crop",
            rating: 4.7,
            reviews: 1231,
            originalPrice: 1499,
            discountPercent: 33,
            price: 999,
        },
        {
            id: 3,
            name: "Malshej Ghat Lakeside Camping",
            image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=500&h=300&fit=crop",
            rating: 4.4,
            reviews: 129,
            originalPrice: 1499,
            discountPercent: 13,
            price: 1299,
        },
        {
            id: 4,
            name: "Pawna Lake Camping",
            image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=500&h=300&fit=crop",
            rating: 4.5,
            reviews: 445,
            originalPrice: 1399,
            discountPercent: 21,
            price: 1099,
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % (campingSpots.length - 2));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (campingSpots.length - 2)) % (campingSpots.length - 2));
    };

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Camping Destinations</h2>
                    <p className="text-gray-600">Discover amazing camping spots near you</p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Cards Container */}
                    <div className="overflow-hidden mx-8">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                        >
                            {campingSpots.map((spot) => (
                                <div key={spot.id} className="w-1/3 px-4 flex-shrink-0">
                                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                        <div className="relative">
                                            <img
                                                src={spot.image}
                                                alt={spot.name}
                                                className="h-52 w-full object-cover"
                                            />
                                            <div className="absolute top-3 right-3">
                                                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                                    {spot.discountPercent}% OFF
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{spot.name}</h3>

                                            <div className="flex items-center mb-3">
                                                <div className="flex items-center">
                                                    <span className="text-yellow-400 text-sm">★</span>
                                                    <span className="text-sm font-medium text-gray-900 ml-1">{spot.rating}</span>
                                                    <span className="text-sm text-gray-500 ml-1">({spot.reviews} reviews)</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <span className="text-lg font-bold text-green-600">₹{spot.price}</span>
                                                    <span className="text-sm text-gray-600"> onwards</span>
                                                </div>
                                                <span className="text-sm text-gray-500 line-through">₹{spot.originalPrice}</span>
                                            </div>

                                            <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: campingSpots.length - 2 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardSlider;