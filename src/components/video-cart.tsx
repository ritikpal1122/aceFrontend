import { Card, CardContent } from "@/components/ui/card"
import { getYouTubeThumbnail } from "@/utils/youtube";
import { ArrowUpRight } from 'lucide-react'
import { Link } from "react-router-dom";


interface VideoCardProps {
  title: string
  link: string
}

export function VideoCard({ title, link }: VideoCardProps) {
  const thumbnailUrl = getYouTubeThumbnail(link);

  return (
    <Card className="overflow-hidden group w-[300px]">
      <CardContent className="p-0">
        <Link to={link} target="_blank" rel="noopener noreferrer" className="block relative">
          <img
            src={thumbnailUrl}
            alt={title}
            width={200}
            height={300}
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ArrowUpRight className="w-10 h-10 text-white" />
          </div>
        </Link>
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

