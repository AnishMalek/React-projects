import { createSlice } from "@reduxjs/toolkit";

  const data=JSON.parse(localStorage.getItem("product-data"))
const initialState ={
    cart:data||[],
 
}

const cartSlice=createSlice({
    name:'cart',
    initialState ,
    reducers:{
        AddtoCart: (state,action)=>{
          const existingItem=state.cart.find((item)=>item.id===action.payload.id)
          if(existingItem){
            existingItem.qty+=1
            
          }
          else{
           state.cart.push({...action.payload,qty:1})     
        }
        },
        increseQty:(state,action)=>{
        const item=state.cart.find((item)=>item.id===action.payload)
        if(item){
           item.qty+=1
        }
        },
         decreseQty:(state,action)=>{
        const item=state.cart.find((item)=>item.id===action.payload)
        if(item.qty>1){
           item.qty-=1
        }
        },
        removeItem:(state,action)=>{
             state.cart=state.cart.filter((item)=>item.id!==action.payload)
        },
        clearCart:(state,action)=>{
             state.cart=[]
        }
       
       

    }

    

})

export const {AddtoCart,increseQty,decreseQty,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer 