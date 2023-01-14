import React from 'react'
import { Context } from '../context/context'

export default function Carts() {
  const { cartsPhotos, cartsLength, handelAddToCart } = React.useContext(
    Context,
  )
  const cartsElements = cartsPhotos.map((photo) => (
    <div class="infoWrap">
      <div class="cartSection">
        <img src={photo.url} alt="" class="itemImg" />
        <p class="itemNumber">{photo.id}</p>
      </div>

      <div class="prodTotal cartSection">
        <p>${photo.price}</p>
      </div>
      <div class="cartSection removeWrap">
        <button href="#" class="remove" onClick={() => handelAddToCart(photo)}>
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
