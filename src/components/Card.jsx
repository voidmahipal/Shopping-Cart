function handleDecrease(id,setProducts,setCart) {
    setProducts((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:Math.max(p.quantity-1,1)} : p;
        })
    })
    setCart((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:Math.max(p.quantity-1,1)} : p;
        })
    })
}
function handleIncrease(id,setProducts,setCart) {
    setProducts((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:p.quantity+1} : p;
        })
    })
    setCart((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:p.quantity+1} : p;
        })
    })
}
function handleChange(id,newQuantity,setProducts,setCart) {
    setProducts((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:newQuantity} : p;
        })
    })
    setCart((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:newQuantity} : p;
        })
    })
}
function handleAddToCart(product,cart,setCart) {
    if(cart.some(p=>p.id===product.id)) {
      alert("Already in Cart!");
      return;
    } 
    setCart((prev)=>[...prev,product]);
}
function Card({product,setProducts,cart,setCart}) {

    return <div>
        <img src={product.imgURL} alt={product.title}/>
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
        <button onClick={()=>handleDecrease(product.id,setProducts,setCart)}>-</button>
        <input type="number" value={product.quantity} onChange={(e)=>handleChange(product.id,Number(e.target.value),setProducts,setCart)}/>
        <button onClick={()=>handleIncrease(product.id,setProducts,setCart)}>+</button>
        <button onClick={()=>handleAddToCart(product,cart,setCart)}>Add to Cart</button>
    </div>
}
export {Card}