import React, { useState, useEffect, useRef } from 'react';

interface Tab {
    id: string;
    label: string;
}

const PawnaLakeTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('overview');
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const tabNavRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    console.log(setIsSticky);


    const tabs: Tab[] = [
        { id: 'overview', label: 'Overview' },
        { id: 'itinerary', label: 'Itinerary' },
        { id: 'photogallery', label: 'Photogallery' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'advisory', label: 'Advisory' }
    ];

    useEffect(() => {
        // const handleScroll = () => {
        //     if (!tabNavRef.current) return;

        //     const tabNavRect = tabNavRef.current.getBoundingClientRect();
        //     const shouldBeSticky = tabNavRect.top <= 0;
        //     setIsSticky(shouldBeSticky);

        //     // Update active tab based on scroll position
        //     if (shouldBeSticky) {
        //         const scrollPosition = window.scrollY + 100; // Offset for sticky header

        //         for (let i = tabs.length - 1; i >= 0; i--) {
        //             const section = sectionRefs.current[tabs[i].id];
        //             if (section) {
        //                 const sectionTop = section.offsetTop;
        //                 if (scrollPosition >= sectionTop) {
        //                     setActiveTab(tabs[i].id);
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // };

        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [tabs]);

    const scrollToSection = (tabId: string) => {
        const section = sectionRefs.current[tabId];
        if (section && tabNavRef.current) {
            const offsetTop = section.offsetTop - (isSticky ? 80 : 0); // Adjust for sticky header height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setActiveTab(tabId);
    };

    const setSectionRef = (tabId: string) => (ref: HTMLDivElement | null) => {
        sectionRefs.current[tabId] = ref;
    };

    return (
        <div className="w-full">
            {/* Sticky tab navigation */}
            <div
                ref={tabNavRef}
                className="sticky top-14"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                className={`flex-1 px-6 py-4 text-center font-medium text-lg transition-all duration-300 ${index < tabs.length - 1 ? 'border-r-2 border-teal-600' : ''
                                    } md:border-b-0 border-b-2 md:last:border-r-0 last:border-b-0 hover:bg-yellow-600 hover:-translate-y-0.5 ${activeTab === tab.id
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-yellow-500 text-white hover:bg-yellow-600'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab sections */}
            <div className="max-w-7xl mx-auto px-6">
                {/* Overview Section */}
                <section
                    ref={setSectionRef('overview')}
                    id="overview"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Overview</h2>
                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                            Pawna Lake Camping includes tent stays for 2 to 5 people, unlimited food for three meals,
                            a fun-filled barbeque and musical night, indoor and outdoor games, and a bonfire.
                        </p>

                        <p>
                            Pawna Lake Camping is located 25 km from Lonavla and is one of the most popular tourist destinations in
                            Maharashtra. It is suitable for families, couples, and friends alike.
                        </p>

                        <p>
                            A 2-days 1-night Pawna Lake Camping on the banks of the beautiful Pawna Lake is here. Take part in this
                            lakeside camping to escape from the hassles of your city life.
                        </p>

                        <p>
                            Pawna lake is one of the popular artificial lakes located 10 kilometers away from Kamshet on the old
                            Mumbai-Pune highway and is the nearest camping spot near pune. It is a place known for nature, lake and
                            green hills altogether.
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg my-6">
                            <p className="font-semibold mb-2"><strong>Distance From Mumbai:</strong> 117 km</p>
                            <p className="font-semibold"><strong>Distance From Pune:</strong> 55km</p>
                        </div>

                        <h3 className="text-xl font-semibold text-blue-800 mt-8 mb-4">Places To Visit Near Pawna Lake</h3>
                        <ol className="space-y-3">
                            {[
                                'Tikona Fort',
                                'Lohagad Fort',
                                'Tiger Point',
                                'Dinosaurs Park',
                                'Lonavla Wax Museum',
                                'Dudhiware waterfall'
                            ].map((place, index) => (
                                <li key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                                    <span className="text-lg">{index + 1}. </span>
                                    <a href="#" className="text-blue-800 hover:text-orange-500 font-medium text-lg transition-colors">
                                        {place}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Itinerary Section */}
                <section
                    ref={setSectionRef('itinerary')}
                    id="itinerary"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Itinerary</h2>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>Detailed day-by-day itinerary for your Pawna Lake camping experience.</p>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Day 1: Arrival & Adventure</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• 2:00 PM - Arrival and check-in</li>
                                <li>• 3:00 PM - Welcome drinks and orientation</li>
                                <li>• 4:00 PM - Lakeside activities and games</li>
                                <li>• 6:00 PM - Evening tea and snacks</li>
                                <li>• 8:00 PM - Barbecue dinner</li>
                                <li>• 9:30 PM - Bonfire and musical night</li>
                                <li>• 11:00 PM - Rest in comfortable tents</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                            <h3 className="text-xl font-bold text-orange-800 mb-4">Day 2: Morning Bliss</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• 6:30 AM - Early morning tea</li>
                                <li>• 7:00 AM - Sunrise photography</li>
                                <li>• 8:00 AM - Breakfast by the lake</li>
                                <li>• 10:00 AM - Water activities</li>
                                <li>• 12:00 PM - Lunch and relaxation</li>
                                <li>• 2:00 PM - Departure with memories</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery Section */}
                <section
                    ref={setSectionRef('photogallery')}
                    id="photogallery"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Photo Gallery</h2>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>Explore stunning photos from Pawna Lake camping experiences captured by our guests.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {[
                                { title: 'Lakeside Camping', gradient: 'from-blue-400 to-blue-600' },
                                { title: 'Bonfire Night', gradient: 'from-orange-400 to-red-500' },
                                { title: 'Sunrise Views', gradient: 'from-yellow-400 to-orange-500' },
                                { title: 'Adventure Activities', gradient: 'from-green-400 to-blue-500' },
                                { title: 'Cozy Tents', gradient: 'from-purple-400 to-pink-500' },
                                { title: 'Group Fun', gradient: 'from-teal-400 to-blue-500' }
                            ].map((photo, index) => (
                                <div key={index} className={`bg-gradient-to-br ${photo.gradient} h-64 rounded-lg flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}>
                                    {photo.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section
                    ref={setSectionRef('faqs')}
                    id="faqs"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                question: "What's included in the camping package?",
                                answer: "Tent accommodation, all meals (breakfast, lunch, dinner), bonfire, indoor and outdoor games, barbecue, musical night, and basic camping equipment."
                            },
                            {
                                question: "Is it suitable for children?",
                                answer: "Yes, absolutely! It's completely family-friendly with safe activities designed for all ages. We have special arrangements for children's safety near water."
                            },
                            {
                                question: "What should I bring?",
                                answer: "Personal clothing, toiletries, comfortable shoes, sunscreen, personal medications, valid ID, and a camera to capture memories!"
                            },
                            {
                                question: "What about food for vegetarians?",
                                answer: "We provide both vegetarian and non-vegetarian meal options. Please inform us about dietary preferences during booking."
                            },
                            {
                                question: "Is there mobile network coverage?",
                                answer: "Yes, most network providers have good coverage in the area, though it may vary by location around the lake."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-semibold text-lg mb-3 text-blue-800">Q: {faq.question}</p>
                                <p className="text-gray-700 leading-relaxed">A: {faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advisory Section */}
                <section
                    ref={setSectionRef('advisory')}
                    id="advisory"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Advisory</h2>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-yellow-800 mb-2">Weather Advisory:</p>
                            <p className="text-gray-700">Check weather conditions before your trip and pack accordingly. Monsoon season (June-September) offers lush greenery but requires waterproof gear.</p>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-red-800 mb-2">Safety Guidelines:</p>
                            <p className="text-gray-700">Follow all safety guidelines provided by our team during water activities. Life jackets are mandatory for water sports. Swimming is allowed only in designated areas.</p>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-blue-800 mb-2">Essential Items to Carry:</p>
                            <p className="text-gray-700">Comfortable clothing, extra pair of clothes, sunscreen, personal medications, valid government ID, flashlight, and personal water bottle.</p>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-orange-800 mb-2">Rules & Restrictions:</p>
                            <p className="text-gray-700">No outside alcohol allowed. Smoking is permitted only in designated areas. Loud music after 11 PM is not allowed. Please respect nature and avoid littering.</p>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-green-800 mb-2">Booking & Cancellation:</p>
                            <p className="text-gray-700">Advance booking required. 50% advance payment needed to confirm booking. Cancellation allowed up to 48 hours before the trip with minimal charges.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PawnaLakeTabs;