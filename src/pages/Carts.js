import React from 'react'
import { Context } from '../context/context'

export default function Carts() {
  const { cartsPhotos, cartsLength, handelAddToCart } = React.useContext(
    Context,
  )
  const cartsElements = cartsPhotos.map((photo) => (
    <div className="infoWrap" key={photo.id}>
      <div className="cartSection">
        <img src={photo.url} alt="" className="itemImg" />
        <p className="itemNumber">{photo.id}</p>
      </div>

      <div className="prodTotal cartSection">
        <p>${photo.price}</p>
      </div>
      <div className="cartSection removeWrap">
        <button
          href="#"
          className="remove"
          onClick={() => handelAddToCart(photo)}
        >
          x
        </button>
      </div>
    </div>
  ))
  return (
    <>
      {cartsLength > 0 ? (
        cartsElements
      ) : (
        <h1>You don't have images here in the cart</h1>
      )}
    </>
  )
}
