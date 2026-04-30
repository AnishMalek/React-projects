import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./ProductManagement.css"

const ProductManagement = () => {

    const [products,setProducts] =useState([])
    const [form,setForm]=useState({ name:"", price:"" })
    const [editId,setEditId]=useState(null)

    const handlechange =(e)=>{
        setForm(
            {...form,
            [e.target.name]:e.target.value}
        )
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(editId){
            await axios.put(`http://localhost:3000/products/${editId}`,form)
            setEditId(null)
        } else{
            await axios.post(`http://localhost:3000/products`,form)
        }

        getProductData()
        setForm({ name:"", price:"" })
    }

    const handleEdit=(product)=>{
        setEditId(product.id)
        setForm(
            { name:product.name, price:product.price }
        )
    }

    const HandleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/products/${id}`)
        getProductData()
    }

    const getProductData=async()=>{
        const res= await axios.get("http://localhost:3000/products")
        setProducts(res.data)
    }

    useEffect(
    ()=>{getProductData()}
    ,[])

  return (
  <div className="pm-container">

    <div className="pm-card">
      <h2>{editId ? "Update Product" : "Add Product"}</h2>

      <form onSubmit={handleSubmit} className="pm-form">
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handlechange} 
          placeholder="Product Name" 
        />

        <input 
          type="number" 
          name="price" 
          value={form.price} 
          onChange={handlechange} 
          placeholder="Price ₹" 
        />

        <button className="pm-btn">
          {editId ? "Update" : "Add"}
        </button>
      </form>
    </div>

    <div className="pm-table-card">
      <h2>Product List</h2>

      <table className="pm-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹ {item.price}</td>

                <td>
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => HandleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  </div>
)
}

export default ProductManagement