import { Link } from 'react-router-dom'

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`}>
      <div className="rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={video.thumbnail} alt={video.title} />
        <div className="px-4 py-2">
          <h3 className="font-bold text-md mb-1">{video.title}</h3>
          <p className="text-gray-600 text-sm">{video.channel}</p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
