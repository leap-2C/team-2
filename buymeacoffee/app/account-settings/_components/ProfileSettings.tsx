"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { Camera } from "lucide-react";


const ProfileSettings = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (result: CloudinaryUploadWidgetInfo) => {
    const info = result?.info as { secure_url?: string };
    if (info?.secure_url) {
      setImageUrl(info.secure_url);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      about: "",
      socialLink: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      about: Yup.string().required("About me is required"),
      socialLink: Yup.string()
        .url("Invalid URL format")
        .required("Social link is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted:", { ...values, imageUrl });
    },
  });

  const isFormValid =
    formik.values.name &&
    formik.values.about &&
    formik.values.socialLink &&
    !formik.errors.name &&
    !formik.errors.about &&
    !formik.errors.socialLink;

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8">
      <h1 className="text-3xl font-bold">My Account</h1>

      <Card>
        <CardHeader>
          <CardTitle>Personal Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-4">
              <CldUploadWidget
                uploadPreset="ml_default"
                onSuccess={handleImageUpload}
              >
                {({ open }) => (
                  <button
                    type="button"
                    onClick={() => open()}
                    className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-300 hover:opacity-80"
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                        <Camera />
                      </div>
                    )}
                  </button>
                )}
              </CldUploadWidget>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                name="about"
                rows={3}
                value={formik.values.about}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.about && formik.errors.about && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.about}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="socialLink">Social media URL</Label>
              <Input
                id="socialLink"
                name="socialLink"
                value={formik.values.socialLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.socialLink && formik.errors.socialLink && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.socialLink}
                </p>
              )}
            </div>

            <Button type="submit" disabled={!isFormValid} className="mt-2">
              Save changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
