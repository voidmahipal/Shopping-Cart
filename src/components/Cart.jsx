import { useOutletContext } from "react-router";

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
function handleRemove(id,setCart) {
    setCart((prev)=>{
        return prev.filter((p)=>p.id!==id);
    })
}
function handlePurchase(setCart,setProducts) {
    alert("Order Placed! Thank you for purchasing🙏");
    setCart([]);
    setProducts((prev)=>{
        return prev.map((p)=>{
            return {...p,quantity:1};
        })
    });
}
function Cart() {

    const {cart,setCart,setProducts} = useOutletContext();

    return <div>
        {cart.map((p)=>{
            return <div key={p.id}>
                <img src={p.imgURL} alt={p.title} />
                <h3>{p.title}</h3>
                <h4>{p.price}</h4>
                <button onClick={()=>handleIncrease(p.id,setProducts,setCart)}>+</button>
                <p>{p.quantity}</p>
                <button onClick={()=>handleDecrease(p.id,setProducts,setCart)}>-</button>
                <button onClick={()=>handleRemove(p.id,setCart)}>Remove</button>
            </div>
        })}
        <h4>Final Amount : {cart.reduce((total,p)=>((p.price*p.quantity)+total),0)}</h4>
        <button onClick={()=>handlePurchase(setCart,setProducts)}>Proceed To Buy</button>
    </div>
}
export {Cart}