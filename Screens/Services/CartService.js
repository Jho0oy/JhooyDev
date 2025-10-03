// cartService.js
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";

// Buscar carrinho
export async function getCart(userId) {
  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    return cartSnap.data().items;
  } else {
    return []; // carrinho vazio
  }
}

// Adicionar produto
export async function addToCart(userId, product) {
  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  let items = [];
  if (cartSnap.exists()) {
    items = cartSnap.data().items;
  }

  items.push(product);

  await setDoc(cartRef, { items });
}

// Remover produto
export async function removeFromCart(userId, productId) {
  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    let items = cartSnap.data().items;
    items = items.filter(item => item.id !== productId);
    await setDoc(cartRef, { items });
  }
}
