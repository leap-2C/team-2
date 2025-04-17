import SocialMediaCard from "./SocialMediaCard";
import SupportersCard from "./SupportersCard";
import PaymentDetail from "./Payment-detail";
import { useUser } from "@/hooks/UserContext";

const ViewPage = () => {
  const { userData } = useUser();

  return (
    <div className="min-h-screen bg-muted pb-20">
      <div className="w-full">
        <img
          src={userData?.profile?.backgroundImage || "galaxy.svg"}
          alt="Cover"
          draggable={false}
          className="w-full h-64 object-cover select-none rounded-xl"
        />
      </div>

      <div className="flex justify-center px-4 mt-10">
        <div className="w-full max-w-5xl space-y-10">
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
    </div>
  );
};

export default ViewPage;
