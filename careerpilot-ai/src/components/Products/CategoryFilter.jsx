import "./Products.css";

export default function CategoryFilter({
  category,
  setCategory,
}) {
  return (
    <div className="category-filter">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Усі">Усі категорії</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
        <option value="New Balance">New Balance</option>
        <option value="Jordan">Jordan</option>
      </select>
    </div>
  );
}