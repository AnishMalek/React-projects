import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GiH2O } from 'react-icons/gi';
import './ProductManagement.css'

const ProductManagement = () => {

  const [product, setProduct] = useState([]);
  const [EditProduct,setEditProduct]=useState(null)
  const [form, SetForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  })

    
  const fetchProducts =async()=>{
       try{
        const res=await axios.get('http://localhost:3000/products')
         setProduct(res.data)
         console.log(res.data);
         
         localStorage.setItem("eyewear-product",JSON.stringify(product))
       }
       catch(error){
          console.log("failed to fetch product",error);
          
       }
  }

    useEffect(()=>{fetchProducts()},[])

  const handleChange = (e) => {
    SetForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

       if(EditProduct){
        await axios.put(`http://localhost:3000/products/${EditProduct}`,form)
        alert("product Updated Successfully")
       }
       else{
         try {
        await axios.post("http://localhost:3000/products", form)


      alert("product added succesfully")

    } catch (error) {
      console.log("Failed to fetch product..!!", error);

    }
       }

    SetForm({
      name: "",
      price: "",
      description: "",
      image: ""
    });

  }
   const HandleEdit =(product)=>{
      setEditProduct(product.id)
      SetForm({
        name:product.name,
        price:product.price,
        description:product.description,
        image:product.image,
      })
   }

     const handleDelete=async(id)=>{
       await axios.delete(`http://localhost:3000/products/${id}`,form)
       alert("product Deleted")
     }
    
  
  return (
    <>
    <div className="product-form-wrapper">
  <div className="product-form">

    <h3>Add New Product</h3>

    <div className="input-group">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <label>Product Name</label>
    </div>

    <div className="input-group">
      <input
        type="text"
        name="price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <label>Price</label>
    </div>

    <div className="input-group">
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <label>Description</label>
    </div>

    <div className="input-group">
      <input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
        required
      />
      <label>Image URL</label>
    </div>

       {
        EditProduct ? (
          <button onClick={handleSubmit}>update Product</button>

        ):
          <button onClick={handleSubmit}>Add Product</button>


       }
  </div>
</div>

         <table className="table table-light table-hover text-center">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Description</th>
      <th>Image</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {product.length === 0 ? (
      <tr>
        <td colSpan="5">
          <h4>Product not found</h4>
        </td>
      </tr>
    ) : (
      product.map((p) => (
        <tr key={p.id}>
          <td>{p.name}</td>
          <td>₹{p.price}</td>
          <td>{p.discription}</td>

          <td>
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          </td>

          <td>
            <button className="btn btn-warning btn-sm me-2" onClick={()=>HandleEdit(p)}>
              Edit
            </button>

            <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(p.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))
    )}
  </tbody>
</table>
       
    </>
  )
}

export default ProductManagement
