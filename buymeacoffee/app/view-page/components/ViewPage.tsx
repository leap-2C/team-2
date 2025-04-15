import { useState } from "react";
import CoverImageUploader from "./CoverImageUploader";
import ProfileCard from "./ProfileCard";
import SocialMediaCard from "./SocialMediaCard";
import SupportersCard from "./SupportersCard";
import PasswordUpdate from "./Password-update";
import PaymentDetail from "./Payment-detail";
import SuccessMessageSettings from "./SuccessMessage";

const ViewPage = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-muted py-10">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <CoverImageUploader
          currentImage={coverImage}
          onImageChange={(img) => setCoverImage(img)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <ProfileCard />
            <SocialMediaCard />
            <SupportersCard />
          </div>

          <div className="space-y-4">
            <PasswordUpdate />
            <PaymentDetail
              onBack={() => console.log("Back pressed")}
              onNext={() => console.log("Next pressed")}
            />
            <SuccessMessageSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
