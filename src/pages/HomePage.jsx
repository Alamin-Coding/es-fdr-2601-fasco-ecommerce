import BrandLogos from "../components/Home/BrandLogos";
import DealsOfMonth from "../components/Home/DealsOfMonth";
import Hero from "../components/Home/Hero";
import NewArrivals from "../components/Home/NewArrivals";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<BrandLogos />
			<DealsOfMonth />
			<NewArrivals />
		</div>
	);
};

export default HomePage;
