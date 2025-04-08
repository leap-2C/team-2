"use client";

import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // optional, for cleaner conditional styling

const FirstStep = ({ onNext }: { onNext: () => void }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      console.log("Form values:", values);
      onNext(); // Trigger going to second step
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center">Set Up Your Profile</h2>

        <div className="flex flex-col items-center space-y-4">
          {/* Avatar Upload */}
          <CldUploadWidget
            uploadPreset="ml_default"
            onSuccess={(result: CloudinaryUploadWidgetInfo) => {
              const info = result?.info as { secure_url?: string };
              if (info?.secure_url) {
                setImagePreview(info.secure_url);
              }
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300 shadow-md hover:opacity-80 transition"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-sm">
                    Upload
                  </div>
                )}
              </button>
            )}
          </CldUploadWidget>

          {/* Form Fields */}
          <form onSubmit={formik.handleSubmit} className="w-full space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="about">About Me</Label>
              <Textarea
                id="about"
                name="about"
                value={formik.values.about}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Tell us about yourself"
                rows={3}
              />
              {formik.touched.about && formik.errors.about && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.about}</p>
              )}
            </div>

            <div>
              <Label htmlFor="socialLink">Social Link</Label>
              <Input
                id="socialLink"
                name="socialLink"
                type="url"
                value={formik.values.socialLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="https://your-social.com"
              />
              {formik.touched.socialLink && formik.errors.socialLink && (
                <p className="text-sm text-red-500 mt-1">{formik.errors.socialLink}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full mt-2"
              disabled={!isFormValid}
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
