import { useState } from "react"
import CoverImageUploader from "./CoverImageUploader"
import ProfileCard from "./ProfileCard"
import SocialMediaCard from "./SocialMediaCard"
import SupportersCard from "./SupportersCard"
import DonationCard from "./DonationCard"

const ViewPage = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null)

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
          <DonationCard />
        </div>
      </div>
    </div>
  )
}

export default ViewPage