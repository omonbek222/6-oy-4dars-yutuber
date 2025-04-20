import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={video.thumbnail} alt={video.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{video.title}</div>
        <p className="text-gray-700 text-base">{video.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="text-blue-500">{video.channel}</span>
      </div>
    </div>
  );
}

export default VideoCard;
