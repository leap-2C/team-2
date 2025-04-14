import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Pencil, Save } from "lucide-react"

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState("Jake")
  const [bio, setBio] = useState("")

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {isEditing ? (
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-base font-semibold"
              />
            ) : (
              <h2 className="font-semibold text-base">{name}</h2>
            )}
          </div>

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
                <Pencil className="w-4 h-4" />
                Edit
              </>
            )}
          </Button>
        </div>

        {isEditing ? (
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            placeholder="Tell people about yourself..."
          />
        ) : (
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            {bio || "No bio provided yet."}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default ProfileCard
