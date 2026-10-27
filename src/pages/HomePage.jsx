import { FaCartShopping } from "react-icons/fa6";
import FacilitySection from "../components/FacilitySection";
import BrandLogos from "../components/Home/BrandLogos";
import DealsOfMonth from "../components/Home/DealsOfMonth";
import Hero from "../components/Home/Hero";
import NewArrivals from "../components/Home/NewArrivals";
import InstagramGelary from "../components/InstagramGelary";
import PeakyBlinderSection from "../components/PeakyBlinderSection";
import SubscribeSection from "../components/SubscribeSection";
import { Link } from "react-router";

const HomePage = () => {
	return (
		<div className="">
			<Hero />
			<BrandLogos />
			<DealsOfMonth />
			<NewArrivals />
			<PeakyBlinderSection />
			<FacilitySection />
			<InstagramGelary />
			<SubscribeSection />

			<Link to="/shop" className="bg-black text-white size-10 rounded-sm cursor-pointer flex items-center justify-center fixed bottom-2 right-2">
				<FaCartShopping />
			</Link>
		</div>
	);
};

export default HomePage;
