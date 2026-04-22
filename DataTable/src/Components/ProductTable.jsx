import React, { useState } from "react";
import "./ProductTable.css";

const ProductTable = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const [product,setProduct] = useState([
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: 160000,
      category: "Pro",
      img: "https://lospecialistasrl.it/wp-content/uploads/2025/11/IPHONE-17-PRO-11.jpeg",
    },
    {
      id: 2,
      name: "iPhone 16 Pro",
      price: 145000,
      category: "Pro",
      img: "https://tse3.mm.bing.net/th/id/OIP._aLjxVlAH4O1WsCYhPtPlAHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "iPhone 15 Plus",
      price: 90000,
      category: "Plus",
      img: "https://tse1.mm.bing.net/th/id/OIP.DYzug7cC3sy5doioQRJw4AHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      price: 125000,
      category: "Pro",
      img: "https://tse3.mm.bing.net/th/id/OIP.a6-v6Kx3VFYMHLgRYEUp9wHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 5,
      name: "iPhone 13 Mini",
      price: 60000,
      category: "Mini",
      img: "https://tse4.mm.bing.net/th/id/OIP.Bmt9kIAx4KveVevvVPOBuQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 6,
      name: "iPhone 12 Pro Max",
      price: 80000,
      category: "Pro",
      img: "https://tse1.mm.bing.net/th/id/OIP.PtZhHi8N3saX7VXmuGjWNQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 7,
      name: "iPhone 11 Pro",
      price: 50000,
      category: "Pro",
      img: "https://tse1.mm.bing.net/th/id/OIP.ZI0cHWqS86BHL4ACoWiuLwHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 8,
      name: "iPhone XR",
      price: 35000,
      category: "Standard",
      img: "https://tse4.mm.bing.net/th/id/OIP.rxHVFfXB5acZmNZoBfRoZQHaGL?pid=Api&P=0&h=180",
    },
    {
      id: 9,
      name: "iPhone XS Max",
      price: 40000,
      category: "Standard",
      img: "https://tse1.mm.bing.net/th/id/OIP.yxWhbSFmNPQAdEaKaB7aQwHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 10,
      name: "iPhone SE (3rd Gen)",
      price: 30000,
      category: "SE",
      img: "https://tse4.mm.bing.net/th/id/OIP.ODUj6pSw0G1jSAyqQkETeQHaIV?pid=Api&P=0&h=180",
    },
  ]);

  // filter + sort
  const filteredData = product
    .filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || item.category === category;

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">
      <h2 className="title"> iPhone Collection</h2>

      {/* 🔍 Top Bar */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="🔍 Search iPhone..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pro">Pro</option>
          <option value="Plus">Plus</option>
          <option value="Mini">Mini</option>
          <option value="SE">SE</option>
        </select>

        <select
          className="select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* 🧾 Cards */}
      <div className="card-container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.img} alt={item.name} className="card-img" />

              <div className="card-body">
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString()}</p>
                <button className="btn">View</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found </p>
        )}
      </div>
    </div>
  );
};

export default ProductTable;