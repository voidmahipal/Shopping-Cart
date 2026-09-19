function handleDecrease(id,setProducts) {
    setProducts((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:Math.max(p.quantity-1,1)} : p;
        })
    })
}
function handleIncrease(id,setProducts) {
    setProducts((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:p.quantity+1} : p;
        })
    })
}
function handleChange(id,newQuantity,setProducts) {
    setProducts((prev)=>{
        return prev.map((p)=>{
            return p.id === id ? {...p,quantity:newQuantity} : p;
        })
    })
}
function handleAddToCart(product,setCart) {
    setCart((prev)=>[...prev,product]);
}
function Card({product,setProducts,setCart}) {

    return <div>
        <img src={product.imgURL} alt={product.title}/>
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
        <button onClick={()=>handleDecrease(product.id,setProducts)}>-</button>
        <input type="number" value={product.quantity} onChange={(e)=>handleChange(product.id,Number(e.target.value),setProducts)}/>
        <button onClick={()=>handleIncrease(product.id,setProducts)}>+</button>
        <button onClick={()=>handleAddToCart(product,setCart)}>Add to Cart</button>
    </div>
}
export {Card}