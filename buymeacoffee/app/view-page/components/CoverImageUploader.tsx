"use client"

import { useRef, useState } from "react"
import { Camera } from "lucide-react"

interface CoverImageUploaderProps {
  onImageChange: (img: string) => void
  currentImage?: string | null
}

const CoverImageUploader = ({
  onImageChange,
  currentImage = null,
}: CoverImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onImageChange(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileSelect = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      className="w-full max-h-64 overflow-hidden rounded-lg shadow relative cursor-pointer group"
      onClick={triggerFileSelect}
    >
      {currentImage ? (
        <img
          src={currentImage}
          alt="Cover"
          className="w-full h-64 object-cover object-center"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex flex-col items-center justify-center">
          <Camera className="w-8 h-8 text-gray-500 mb-2" />
          <p className="text-sm text-gray-500">Add a cover image</p>
        </div>
      )}

      {currentImage && (
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <Camera className="w-8 h-8 text-white" />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  )
}

export default CoverImageUploader
