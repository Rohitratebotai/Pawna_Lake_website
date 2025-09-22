import Amenities from "../homePageComponents/Amenities"
import BannerSlider from "../homePageComponents/BannerSlider"
// import CardSlider from "../homePageComponents/CardSlider"
import Map from "../homePageComponents/Map"
import Tabs from "../homePageComponents/Tabs"
import TentCards from "../homePageComponents/TentCard"

const HomePage = () => {
    return (
        <section className="min-h-screen bg-gray-100">
            <div>
                <BannerSlider />
            </div>
            <div>
                <TentCards />
            </div>
            <div className="py-10">
                <Amenities />
            </div>
            <div>
                <Tabs />
            </div>
            <div>
                <Map />
            </div>
        </section>
    )
}

export default HomePage