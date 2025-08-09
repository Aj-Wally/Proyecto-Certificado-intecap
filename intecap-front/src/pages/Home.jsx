import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  // Ejemplo de productos estáticos
  const products = [
    { id: 1, name: "Camiseta React", price: 25 },
    { id: 2, name: "Gorra JS", price: 15 },
    { id: 3, name: "Sudadera Dev", price: 40 },
    { id: 4, name: "Sudadera Dev", price: 40 },
    { id: 5, name: "Sudadera Dev", price: 40 },
    { id: 6, name: "Sudadera Dev", price: 40 },
  ];

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los productos
    console.log("Cargando productos...");
  }, []);

  return (
    <div className="container mt-5">
      <h2>Productos</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">${p.price}</p>
                <Link to={`/product/${p.id}`} className="btn btn-primary">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
