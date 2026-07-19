import { useEffect, useState } from "react";

import "./ProductModal.css";

import { uploadImage } from "../assets/firebase/storageService";

export default function ProductModal({
  product,
  onClose,
  onSave,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");

  const [file, setFile] = useState(null);

  const [dragging, setDragging] = useState(false);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setCategory(product.category || "");
      setPrice(product.price || "");
      setDescription(product.description || "");
      setImage(product.image || "");
    }
  }, [product]);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    setFile(selectedFile);

    setImage(URL.createObjectURL(selectedFile));
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setDragging(false);

    const selectedFile = e.dataTransfer.files[0];

    handleFile(selectedFile);
  };  const handleSave = async () => {
    if (!name || !price) {
      alert("Заповніть назву та ціну");
      return;
    }

    setSaving(true);

    let imageUrl = image;

    try {
      if (file) {
        imageUrl = await uploadImage(file);
      }

      await onSave({
        name,
        category,
        price: Number(price),
        description,
        image: imageUrl,
      });

      setSaving(false);
    } catch (error) {
      console.error(error);
      alert("Помилка при збереженні");

      setSaving(false);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="product-modal">

        <h2>
          {product ? "Редагувати товар" : "Новий товар"}
        </h2>

        <input
          type="text"
          placeholder="Назва"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Категорія"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Ціна"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Опис"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div
          className={`dropzone ${dragging ? "active" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files[0])}
          />

          <p>Перетягніть фото або натисніть для вибору</p>

          {image && (
            <img
              src={image}
              alt="preview"
            />
          )}

        </div>

        <div className="modal-buttons">

          <button
            className="cancel"
            onClick={onClose}
          >
            Скасувати
          </button>

          <button
            className="save"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Збереження..." : "Зберегти"}
          </button>

        </div>

      </div>

    </div>
  );
}