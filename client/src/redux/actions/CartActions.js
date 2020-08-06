import {UPDATE_CART} from "./index"


export function updateCart(cart) {
  return {
    type: UPDATE_CART,
    cart: cart
  };
};
