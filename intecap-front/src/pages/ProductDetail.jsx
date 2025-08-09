import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  // Simulación de producto
  const product = { id, name: `Producto ${id}`, price: 25 + parseInt(id) };

  return (
    <div className="container mt-5">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Descripción del producto {id}. Aquí iría información detallada.</p>
      <button className="btn btn-success me-2">Agregar al carrito</button>
      <Link to="/" className="btn btn-secondary">
        Volver
      </Link>
    </div>
  );
}
