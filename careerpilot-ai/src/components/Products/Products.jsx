import { useState } from "react";

import ProductForm from "../components/Products/ProductForm";
import ProductTable from "../components/Products/ProductTable";
import SearchBar from "../components/Products/SearchBar";
import CategoryFilter from "../components/Products/CategoryFilter";

import "../components/Products/Products.css";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max 270",
      category: "Nike",
      price: 4999,
      stock: 12,
      image: "https://picsum.photos/120?random=1",
    },
    {
      id: 2,
      name: "Adidas Samba",
      category: "Adidas",
      price: 4299,
      stock: 8,
      image: "https://picsum.photos/120?random=2",
    },
    {
      id: 3,
      name: "Jordan 1 Low",
      category: "Jordan",
      price: 6499,
      stock: 5,
      image: "https://picsum.photos/120?random=3",
    },
    {
      id: 4,
      name: "New Balance 530",
      category: "New Balance",
      price: 3899,
      stock: 10,
      image: "https://picsum.photos/120?random=4",
    },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Усі");

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Усі" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">

      <div className="products-header">
        <h1>📦 Товари</h1>
        <p>Керуйте товарами вашого магазину</p>
      </div>

      <div className="products-tools">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </div>

      <ProductForm onAddProduct={addProduct} />

      <ProductTable products={filteredProducts} />

    </div>
  );
}