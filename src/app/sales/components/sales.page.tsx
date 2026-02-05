import React from 'react'

function SalesPage() {
  return (
    <div>
      <p>Produto:</p>
      <input type="text" />
      <p>Quantidade:</p>
      <input type="number" />
      <p>Preço:</p>
      <input type="text" />
      <button>Adicionar ao carrinho</button>
      <button>Finalizar venda</button>
    </div>
  )
}

export default SalesPage