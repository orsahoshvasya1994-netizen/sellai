import "./Products.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Пошук товару..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}