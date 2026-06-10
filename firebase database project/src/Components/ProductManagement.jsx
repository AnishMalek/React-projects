import React, { useEffect, useState } from "react";
import {
  collection,
  serverTimestamp,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import "./ProductManagement.css";

const ProductManagement = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      const docRef = doc(db, "products", `${editId}`);
      await updateDoc(docRef, {
        ...form,
      });
      alert("Product updated successfully.!");
    } else {
      await addDoc(collection(db, "products"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      alert("Product added successfully.!");

      setForm({
        name: "",
        description: "",
        image: "",
      });
    }
  };

  const getProducts = async () => {
    await onSnapshot(collection(db, "products"), (snapshot) => {
      const productData = snapshot.docs.map((p) => ({
        docId: p.id,
        ...p.data(),
      }));

      setProducts(productData);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (docId) => {
    const docRef = doc(db, "products", `${docId}`);
    await deleteDoc(docRef);
    alert("Product Deleted successfully.!");
  };

  const handleEdit = (p) => {
    setForm({
      name: p.name,
      description: p.description,
      image: p.image,
    });

    setEditId(p.docId);
  };

  return (
    <div className="container">
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>

        {products.map((p) => (
          <tr key={p.docId}>
            <td>
              <img src={p.image} alt="" />
            </td>

            <td>{p.name}</td>

            <td>{p.description}</td>

            <td>
              <button
                className="action-btn edit-btn"
                onClick={() => handleEdit(p)}
              >
                Edit
              </button>

              <button
                className="action-btn delete-btn"
                onClick={() => handleDelete(p.docId)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>

      <form onSubmit={handleSubmit}>
        <h2>{editId ? "Update Product" : "Add New Product"}</h2>

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter Image URL"
          name="image"
          value={form.image}
          onChange={handleChange}
        />

        <button className="submit-btn">
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductManagement;