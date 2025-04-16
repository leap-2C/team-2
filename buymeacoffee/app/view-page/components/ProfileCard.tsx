// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { Pencil, Save, Camera } from "lucide-react";
// import Image from "next/image";
// import { CldUploadWidget } from "next-cloudinary";
// import CoverImageUploader from "./CoverImageUploader"; // import it

// const ProfileCard = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState("Jake");
//   const [bio, setBio] = useState("");
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [coverImage, setCoverImage] = useState<string | null>(null);

//   const handleImageUpload = (result: any) => {
//     if (result?.info?.secure_url) {
//       setImageUrl(result.info.secure_url);
//     }
//   };

//   return (
//     <Card className="hover:shadow-lg transition-shadow">
//       <CardContent className="p-4 space-y-4">
//         {/* Show cover image uploader in edit mode */}
//         {isEditing && (
//           <CoverImageUploader
//             currentImage={coverImage}
//             onImageChange={(img) => setCoverImage(img)}
//           />
//         )}

//         {/* Name and Edit Button */}
//         <div className="flex justify-between items-start">
//           <div className="flex-1">
//             {isEditing ? (
//               <Input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="text-base font-semibold"
//               />
//             ) : (
//               <h2 className="font-semibold text-base">{name}</h2>
//             )}
//           </div>

//           <Button
//             size="sm"
//             variant="ghost"
//             className="text-sm flex gap-1 items-center"
//             onClick={() => setIsEditing(!isEditing)}
//           >
//             {isEditing ? (
//               <>
//                 <Save className="w-4 h-4" />
//                 Save
//               </>
//             ) : (
//               <>
//                 <Pencil className="w-4 h-4" />
//                 Edit
//               </>
//             )}
//           </Button>
//         </div>

//         {/* Profile Image */}
//         <div className="flex items-center space-x-4">
//           {isEditing ? (
//             <CldUploadWidget
//               uploadPreset="ml_default"
//               onUpload={handleImageUpload}
//             >
//               {({ open }) => (
//                 <button
//                   type="button"
//                   onClick={() => open()}
//                   className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 hover:opacity-80 flex items-center justify-center"
//                 >
//                   {imageUrl ? (
//                     <Image
//                       src={imageUrl}
//                       alt="Profile"
//                       fill
//                       className="object-cover"
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center justify-center text-gray-500 text-xs">
//                       <Camera className="w-5 h-5 mb-1" />
//                       <span className="text-[10px] font-medium text-center px-1">
//                         Upload Profile Image
//                       </span>
//                     </div>
//                   )}
//                 </button>
//               )}
//             </CldUploadWidget>
//           ) : imageUrl ? (
//             <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
//               <Image
//                 src={imageUrl}
//                 alt="Profile"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ) : null}
//         </div>

//         {/* Bio Section */}
//         {isEditing ? (
//           <Textarea
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             rows={4}
//             placeholder="Tell people about yourself..."
//           />
//         ) : (
//           <p className="text-sm text-muted-foreground whitespace-pre-wrap">
//             {bio || "About me."}
//           </p>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default ProfileCard;
