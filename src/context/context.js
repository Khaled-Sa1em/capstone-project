import React, { useState, useEffect } from 'react'
// import useHovered from '../Hooks/useHovered'
// useRef
const Context = React.createContext([])

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartsPhotos, setCartsPhotos] = useState([])

  let cartsLength = cartsPhotos.length
  function handelFavorite(id) {
    setAllPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo,
      ),
    )
  }

  function handelAddToCart(img) {
    let found = false

    for (let index = 0; index < cartsPhotos.length; index++) {
      if (cartsPhotos[index].id === img.id) {
        found = true
      }
    }

    if (!found) {
      setCartsPhotos((prev) => [...prev, img])
    } else {
      setCartsPhotos((prev) => prev.filter((photo) => photo.id !== img.id))
    }

    handelFillCart(img.id)
    cartsLength = cartsPhotos.length
  }

  function handelFillCart(id) {
    setAllPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, addedToCrat: !photo.addedToCrat } : photo,
      ),
    )
  }

  const url =
    'https://raw.githubusercontent.com/Khaled-Sa1em/trying/main/images.json'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  }, [])

  return (
    <Context.Provider
      value={{
        allPhotos,
        handelFavorite,
        cartsPhotos,
        cartsLength,
        handelAddToCart,
        handelFillCart
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
