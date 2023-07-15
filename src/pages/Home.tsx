import AdvertiseCard from "@/components/Home/AdvertiseCard";
import BestSellerCard from "@/components/Home/BestSellerCard";
import ReviewCardGallery from "@/components/Home/ReviewCardGallery";
import TopBanner from "@/components/Home/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <BestSellerCard/>
      <ReviewCardGallery/>
      <AdvertiseCard/>
    </div>
  );
};

export default Home;
