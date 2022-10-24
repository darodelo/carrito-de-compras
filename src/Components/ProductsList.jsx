import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Products.List.css";
import { CARDCONTENT } from "./CardContent/Content";


function ProductsList() {
  const { ProductAdd, DataFecth } = useStore();
  return (
    <div>
      <h2 id="products-home" className="products-section-title">Productos</h2>
      <div className="products">
        {CARDCONTENT.map((product) => (
          <div className="product__card flex__between" key={product.Id}>
            <img className="product__img" src={product.Img} alt="" />
            <p className="product__name">{product.ProductName}</p>
            <p>Precio : U$${product.Price}</p>
            <button className="product__btn" onClick={() => ProductAdd(product)}>
             Agregar Al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;