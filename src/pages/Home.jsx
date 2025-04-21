import { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Home() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setVideos(data))
  }, [])

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
