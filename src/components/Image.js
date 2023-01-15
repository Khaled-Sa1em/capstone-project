import React from 'react'
import PropTypes from 'prop-types'
import useHovered from '../Hooks/useHovered'
import { Context } from '../context/context'
export default function Image({ photo }) {
  const [isHovered, ref] = useHovered()

  const { handelAddToCart, handelFavorite } = React.useContext(Context)

  const lineFill = photo.isFavorite ? 'fill' : 'line'
  const addedTOCart = photo.addedToCrat ? 'fill' : 'line'

  return (
    <div key={photo.id} className="card" ref={ref}>
      {isHovered ? (
        <div className="favCart">
          <div onClick={() => handelFavorite(photo.id)}>
            <i className={`ri-heart-3-${lineFill}`}></i>
          </div>
          <div onClick={() => handelAddToCart(photo)}>
            <i className={`ri-add-circle-${addedTOCart}`}></i>
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
