import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, Save } from "lucide-react"

const SocialMediaCard = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [url, setUrl] = useState("https://buymeacoffee.com/spaceuriz44")

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium">Social media URL</h3>
          <Button
            size="sm"
            variant="ghost"
            className="text-sm flex gap-1 items-center"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4" />
                Save
              </>
            ) : (
              <>
                <Link className="w-4 h-4" />
                Edit
              </>
            )}
          </Button>
        </div>

        {isEditing ? (
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your social media URL"
          />
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline break-all"
          >
            {url}
          </a>
        )}
      </CardContent>
    </Card>
  )
}

export default SocialMediaCard
