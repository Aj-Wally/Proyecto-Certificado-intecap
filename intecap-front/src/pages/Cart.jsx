export default function Cart() {
    // Ejemplo de productos en carrito
    const cartItems = [
      { id: 1, name: "Camiseta React", price: 25, qty: 1 },
      { id: 2, name: "Gorra JS", price: 15, qty: 2 },
    ];
  
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  
    return (
      <div className="container mt-5">
        <h2>Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.qty}</td>
                  <td>${item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <h4 className="mt-3">Total: ${total}</h4>
        <button className="btn btn-primary mt-2">Finalizar compra</button>
      </div>
    );
  }
  