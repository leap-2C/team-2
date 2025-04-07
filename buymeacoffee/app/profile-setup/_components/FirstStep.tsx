"use client";

import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useState } from "react";

const FirstStep = () => {

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    return (
       
             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                  <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Set Up Your Profile</h2>
            
                    <div className="flex flex-col items-center space-y-4">
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
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                          >
                            Upload an Image
                          </button>
                        )}
                      </CldUploadWidget>
            
                      {imagePreview && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-600 text-center mb-2">Image Preview:</p>
                          <img
                            src={imagePreview}
                            alt="Uploaded preview"
                            className="w-40 h-40 object-cover rounded-xl border border-gray-300 shadow-sm"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
    )
}

export default FirstStep;