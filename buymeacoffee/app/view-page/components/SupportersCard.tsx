import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const SupportersCard = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center flex flex-col items-center justify-center">
        <div className="text-black animate-pulse">
          <Heart className="w-8 h-8" />
        </div>
        <h4 className="mt-3 text-base font-semibold">No supporters yet</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Be the first to show some love 
        </p>
      </CardContent>
    </Card>
  )
}

export default SupportersCard
