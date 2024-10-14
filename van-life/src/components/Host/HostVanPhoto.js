import React from "react"
import { useOutletContext } from "react-router-dom"

const HostVanPhoto = () => {
  const { currentVan } = useOutletContext()
  return (
    <div className="">
      <img
        src={currentVan.imageUrl}
        alt=""
        className="host-van-detail-image"
      ></img>
    </div>
  )
}

export default HostVanPhoto
