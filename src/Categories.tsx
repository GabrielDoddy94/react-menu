type CategoriesProps = {
  categories: string[];
  filterItems: (category: string) => void;
};

export function Categories({ categories, filterItems }: CategoriesProps) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className="filter-btn"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
