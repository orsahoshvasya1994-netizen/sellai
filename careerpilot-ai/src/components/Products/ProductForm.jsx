import { useState } from "react";
import "./Products.css";

export default function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Nike");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !stock) return;

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      stock: Number(stock),
      image:
        image ||
        "https://via.placeholder.com/120x120.png?text=Product",
    };

    onAddProduct(newProduct);

    setName("");
    setCategory("Nike");
    setPrice("");
    setStock("");
    setImage("");
  };

  return (
    <div className="product-form">
      <h2>➕ Додати товар</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Назва товару"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Nike</option>
          <option>Adidas</option>
          <option>Puma</option>
          <option>Jordan</option>
          <option>New Balance</option>
        </select>

        <input
          type="number"
          placeholder="Ціна"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Кількість"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <input
          type="text"
          placeholder="Посилання на фото"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">
          Додати товар
        </button>

      </form>
    </div>
  );
}