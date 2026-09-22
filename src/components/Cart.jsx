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

    const { cart, setCart, setProducts } = useOutletContext();

    const finalAmount = cart.reduce(
        (total, p) => total + p.price * p.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <main className="cart-page empty-cart">
                <div className="empty-cart-content">
                    <div className="empty-cart-icon">🛍</div>

                    <h1>Your cart is empty</h1>

                    <p>
                        Looks like you haven't added anything to
                        your cart yet.
                    </p>

                    <a href="/shop" className="continue-shopping">
                        Continue Shopping →
                    </a>
                </div>
            </main>
        )
    }

    return (
        <main className="cart-page">

            <div className="cart-heading">
                <p className="section-eyebrow">YOUR SELECTION</p>
                <h1>Your Cart</h1>
            </div>

            <div className="cart-layout">

                <section className="cart-items">

                    {cart.map((p) => {

                        return (
                            <div className="cart-item" key={p.id}>

                                <div className="cart-product-image">
                                    <img
                                        src={p.imgURL}
                                        alt={p.title}
                                    />
                                </div>

                                <div className="cart-product-info">

                                    <h3>{p.title}</h3>

                                    <p className="cart-price">
                                        ${p.price}
                                    </p>

                                    <div className="cart-controls">

                                        <button
                                            onClick={() =>
                                                handleDecrease(
                                                    p.id,
                                                    setProducts,
                                                    setCart
                                                )
                                            }
                                        >
                                            −
                                        </button>

                                        <span>{p.quantity}</span>

                                        <button
                                            onClick={() =>
                                                handleIncrease(
                                                    p.id,
                                                    setProducts,
                                                    setCart
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                <div className="cart-item-right">

                                    <p>
                                        ${(p.price * p.quantity).toFixed(2)}
                                    </p>

                                    <button
                                        className="remove-button"
                                        onClick={() =>
                                            handleRemove(
                                                p.id,
                                                setCart
                                            )
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        )
                    })}

                </section>

                <aside className="cart-summary">

                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Items</span>
                        <span>{cart.length}</span>
                    </div>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${finalAmount.toFixed(2)}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-total">
                        <span>Total</span>
                        <strong>${finalAmount.toFixed(2)}</strong>
                    </div>

                    <button
                        className="purchase-button"
                        onClick={() =>
                            handlePurchase(
                                setCart,
                                setProducts
                            )
                        }
                    >
                        Proceed To Buy →
                    </button>

                </aside>

            </div>

        </main>
    )
}
export {Cart}