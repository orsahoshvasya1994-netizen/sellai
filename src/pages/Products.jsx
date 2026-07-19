import { useMemo, useState } from "react";

import "./Products.css";

import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

import useProducts from "../hooks/useProducts";

import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/productsService";

export default function Products() {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const categories = [
    "all",
    ...new Set(
      products
        .map((item) => item.category)
        .filter(Boolean)
    ),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "name-desc":
        result.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      case "price-asc":
        result.sort(
          (a, b) =>
            Number(a.price || 0) -
            Number(b.price || 0)
        );
        break;

      case "price-desc":
        result.sort(
          (a, b) =>
            Number(b.price || 0) -
            Number(a.price || 0)
        );
        break;

      case "stock-asc":
        result.sort(
          (a, b) =>
            Number(a.stock || 0) -
            Number(b.stock || 0)
        );
        break;

      case "stock-desc":
        result.sort(
          (a, b) =>
            Number(b.stock || 0) -
            Number(a.stock || 0)
        );
        break;

      default:
        break;
    }

    return result;
  }, [
    products,
    search,
    category,
    sortBy,
  ]);

  const openCreateModal = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const removeProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await deleteProduct(id);
    } catch (error) {
      console.error(error);
      alert("Unable to delete product.");
    }
  };

  const saveProduct = async (product) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, product);
      } else {
        await addProduct(product);
      }

      setModalOpen(false);
      setEditingProduct(null);
    } catch (error) {
      console.error(error);
      alert("Unable to save product.");
    }
  };  return (
    <div className="products-page">

      <div className="products-header">

        <h1>Products</h1>

        <button
          className="add-product-btn"
          onClick={openCreateModal}
        >
          + Add Product
        </button>

      </div>


      <div className="products-controls">

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>


        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >

          <option value="name-asc">
            Name A → Z
          </option>

          <option value="name-desc">
            Name Z → A
          </option>

          <option value="price-asc">
            Price Low → High
          </option>

          <option value="price-desc">
            Price High → Low
          </option>

          <option value="stock-asc">
            Stock Low → High
          </option>

          <option value="stock-desc">
            Stock High → Low
          </option>

        </select>

      </div>


      {
        loading ? (

          <div className="loading">
            Loading products...
          </div>

        ) : filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                onEdit={() =>
                  openEditModal(product)
                }
                onDelete={() =>
                  removeProduct(product.id)
                }
              />

            ))}

          </div>

        ) : (

          <div className="loading">
            No products found
          </div>

        )
      }      {modalOpen && (
        <ProductModal
          product={editingProduct}
          onClose={() => {
            setModalOpen(false);
            setEditingProduct(null);
          }}
          onSave={saveProduct}
        />
      )}

    </div>
  );
}