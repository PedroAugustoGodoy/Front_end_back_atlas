import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import banner2 from "./img/banner2.png";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCleared, setCartCleared] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get("http://localhost:3001/camisas").then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.Preço, 0);
    return total.toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
    setCartCleared(true);
    setTimeout(() => {
      setCartCleared(false);
    }, 3000);
  };

  const handleCheckout = () => {
    setCart([]);
    navigate("/Tela"); // Redirecionamento para a página "Tela"
  };

  return (
    <div className="App">
      <header>
        <h1>Futebol Arte</h1>
        <img
          src={banner2}
          alt="banner black friday"
          title="banner black friday"
        />
      </header>
      <main>
        <section id="produtos">
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <p>R$ {product.preco.toFixed(2)}</p>
                <p>Estoque:{product.estoque}</p>
                <p>{product.imagem}</p>

                <button onClick={() => addToCart(product)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </section>
        <section id="carrinho">
          <h2>Carrinho</h2>
          <div className="cart">
            {cartCleared ? (
              <p>Seu carrinho foi limpo!</p>
            ) : (
              <div>
                <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      {item.Nome} - R$ {item.Preço.toFixed(2)}
                    </li>
                  ))}
                </ul>
                <p>Total: R$ {calculateTotal()}</p>
                <button onClick={handleCheckout}>Finalizar Compra</button>
                <button onClick={clearCart}>Limpar Carrinho</button>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        <div className="info-contato">
          <p>Endereço: Rua João Silva, 317, Itabira MG</p>
          <p>Telefone: (99) 99897-5689</p>
          <p>E-mail: futebolarte@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
