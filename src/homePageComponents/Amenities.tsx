import {
    GiCampingTent,
    GiBarbecue,
    GiCampfire,
    GiGamepad,
    GiTennisRacket,
} from "react-icons/gi";
import { MdFastfood, MdDinnerDining, MdMusicNote } from "react-icons/md";
import { TbBread } from "react-icons/tb";
import { FaCarAlt, FaDog } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const includes = [
    { label: "Tent Stay (2/3 Sharing)", icon: <GiCampingTent size={32} /> },
    { label: "Evening Snacks (Unlimited)", icon: <MdFastfood size={32} /> },
    { label: "Barbeque", icon: <GiBarbecue size={32} /> },
    { label: "Dinner (Unlimited)", icon: <MdDinnerDining size={32} /> },
    { label: "Breakfast (Unlimited)", icon: <TbBread size={32} /> },
    { label: "DJ Music", icon: <MdMusicNote size={32} /> },
    { label: "Bonfire", icon: <GiCampfire size={32} /> },
    { label: "Indoor Games", icon: <GiGamepad size={32} /> },
    { label: "Outdoor Games", icon: <GiTennisRacket size={32} /> },
    { label: "Free Parking", icon: <FaCarAlt size={32} /> },
    { label: "Pet-Friendly", icon: <FaDog size={32} /> },
    { label: "No Hidden Costs", icon: <RiMoneyDollarCircleLine size={32} /> },
];

const Amenities = () => {
    return (
        <section className="bg-white shadow-md rounded-lg p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="bg-teal-700 text-white px-4 py-2 rounded-t-lg -mx-6 -mt-6 mb-6">
                <h2 className="text-lg font-semibold">INCLUDES</h2>
            </div>

            {/* Grid of features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                {includes.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center text-teal-600"
                    >
                        {item.icon}
                        <p className="mt-2 text-sm font-medium text-gray-700">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Amenities;
