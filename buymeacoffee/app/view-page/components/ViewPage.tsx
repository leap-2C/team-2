import SocialMediaCard from "./SocialMediaCard";
import SupportersCard from "./SupportersCard";
import PaymentDetail from "./Payment-detail";
import { useUser } from "@/hooks/UserContext";

const ViewPage = () => {
  const { userData } = useUser();

  return (
    <div className="min-h-screen bg-muted py-20 flex justify-center">
      <div className="w-full max-w-5xl px-4 space-y-10">
        {/* Cover Image */}
        <div className="w-full flex justify-center">
          <img
            src={userData?.profile?.backgroundImage || "galaxy.svg"}
            alt="Cover"
            draggable={false}
            className="w-full h-60 object-contain select-none rounded-xl"
          />
        </div>

        <div className="space-y-8 flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <SocialMediaCard />
          </div>

          <div className="w-full max-w-3xl">
            <PaymentDetail
              onBack={() => console.log("Back pressed")}
              onNext={() => console.log("Next pressed")}
            />
          </div>

          <div className="w-full max-w-3xl">
            <SupportersCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
