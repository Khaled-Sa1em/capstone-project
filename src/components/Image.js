import React from 'react'
import PropTypes from 'prop-types'
import useHovered from '../Hooks/useHovered'
import { Context } from '../context/context'
export default function Image({ photo }) {
  const [isHovered, handleHover] = useHovered()

  const { handelAddToCart, handelFavorite } = React.useContext(Context)
  // console.log(`${photo.id} ${isHovered}`)

  // const [isLineFill, setIsLineFill] = React.useState(false)
  const lineFill = photo.isFavorite ? 'fill' : 'line'
  const addedTOCart = photo.addedToCrat ? 'fill' : 'line'

  return (
    <div
      key={photo.id}
      className="card"
      onMouseEnter={() => {
        handleHover()
      }}
      onMouseLeave={() => {
        handleHover()
      }}
    >
      {isHovered ? (
        <div className="favCart">
          <div>
            <i
              className={`ri-heart-3-${lineFill}`}
              onClick={() => handelFavorite(photo.id)}
            ></i>
          </div>
          <div>
            <i
              className={`ri-add-circle-${addedTOCart}`}
              onClick={() => handelAddToCart(photo)}
            ></i>
          </div>
        </div>
      ) : (
        <></>
      )}

      <img src={photo.url} alt={photo.author} />
    </div>
  )
}

Image.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.string,
  }),
}
