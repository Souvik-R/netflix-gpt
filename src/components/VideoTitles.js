import React from 'react'

const VideoTitles = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-3 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-10 text-xl rounded-lg hover:bg-opacity-80">▶ Play</button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitles