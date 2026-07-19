import "./Modal.css";
import { useState, useEffect } from "react";

export default function Modal({
  closeModal,
  addProduct,
  updateProduct,
  editingProduct,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setStock(editingProduct.stock);
    } else {
      setName("");
      setPrice("");
      setStock("");
    }
  }, [editingProduct]);

  const save = () => {
    if (!name || !price || !stock) {
      alert("Заповніть всі поля!");
      return;
    }

    const product = {
      name,
      price: Number(price),
      stock: Number(stock),
    };

    if (editingProduct) {
      updateProduct({
        ...editingProduct,
        ...product,
      });
    } else {
      addProduct(product);
    }

    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>
          {editingProduct ? "Редагування товару" : "Новий товар"}
        </h2>

        <input
          type="text"
          placeholder="Назва товару"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Скасувати
          </button>

          <button
            className="save-btn"
            onClick={save}
          >
            {editingProduct ? "Зберегти" : "Додати"}
          </button>

        </div>

      </div>
    </div>
  );
}