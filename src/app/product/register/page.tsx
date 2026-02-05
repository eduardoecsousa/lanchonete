import React from 'react'

function productRegister() {
  return (
    <div>
      <form action="">
        <label htmlFor="product-name">Nome do produto:</label>
        <input type="text" id="product-name" />
        <label htmlFor="product-price">Preço:</label>
        <input type="text" id="product-price" />
        <button type="submit">Cadastrar produto</button>
      </form>
    </div>
  )
}

export default productRegister