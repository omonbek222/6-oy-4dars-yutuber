import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function VideoDetail() {
  const { id } = useParams()
  const [video, setVideo] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((v) => v.id.toString() === id)
        setVideo(found)
      })
  }, [id])

  if (!video) return <div className="text-white p-4">Video topilmadi</div>

  return (
    <div className="p-4 text-white max-w-4xl mx-auto">
      <Link to="/" className="text-blue-400 underline mb-4 inline-block">← Orqaga</Link>
      <div className="aspect-video w-full mb-6">
        <iframe
          className="w-full h-full"
          src={video.videoUrl}
          title={video.title}
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
      <p className="text-gray-400 mb-2">{video.channel}</p>
      <p>{video.description}</p>
    </div>
  )
}

export default VideoDetail
