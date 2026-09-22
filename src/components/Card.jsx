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
function Card({ product, setProducts, cart, setCart }) {

    return (
        <li className="product-card">

            <div className="product-image-container">
                <img
                    className="product-image"
                    src={product.imgURL}
                    alt={product.title}
                />
            </div>

            <div className="product-info">

                <h3 className="product-title">
                    {product.title}
                </h3>

                <h3 className="product-price">
                    ${product.price}
                </h3>

                <div className="quantity-row">

                    <button
                        className="quantity-button"
                        onClick={() =>
                            handleDecrease(
                                product.id,
                                setProducts,
                                setCart
                            )
                        }
                    >
                        −
                    </button>

                    <input
                        className="quantity-input"
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) =>
                            handleChange(
                                product.id,
                                Math.max(Number(e.target.value), 1),
                                setProducts,
                                setCart
                            )
                        }
                    />

                    <button
                        className="quantity-button"
                        onClick={() =>
                            handleIncrease(
                                product.id,
                                setProducts,
                                setCart
                            )
                        }
                    >
                        +
                    </button>

                </div>

                <button
                    className="add-cart-button"
                    onClick={() =>
                        handleAddToCart(
                            product,
                            cart,
                            setCart
                        )
                    }
                >
                    Add to Cart
                </button>

            </div>

        </li>
    )
}
export {Card}