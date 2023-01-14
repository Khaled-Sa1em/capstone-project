import React from 'react'
import { Context } from '../context/context'
import Image from '../components/Image'

export default function Photos() {
  const { allPhotos } = React.useContext(Context)
  const allPhotosElements = allPhotos.map((photo) => {
    return <Image key={photo.id} photo={photo} />
  })

  return (
    <div className="cards">
      {allPhotosElements.length > 0 ? (
        allPhotosElements
      ) : (
        <h2>Loading......</h2>
      )}
    </div>
  )
}
