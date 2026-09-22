import { useState,useEffect } from "react";
import { Card } from "./Card"; 
import { useOutletContext } from "react-router";
function extractUsefulInfo(dataObj) {

    return {
        id:dataObj.id,
        title:dataObj.title,
        price:dataObj.price,
        imgURL:dataObj.image,
        quantity:1,
    }
}
function Shop() {

    const {cart,setCart,products,setProducts} = useOutletContext();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        const promises=[];
        for(let i=1;i<=20;i++) {
            const promise = fetch(`https://fakestoreapi.com/products/${i}`)
                            .then((response)=>{
                                if(!response.ok) throw new Error("Failed to load!");
                                return response.json();
                            })
                            .then(response=>extractUsefulInfo(response));
            promises.push(promise);
        }
        Promise.all(promises).then((productList)=>{
            setProducts(productList);
            setIsLoading(false);
        })
        .catch((e)=>{
            setIsLoading(false);
            alert(e);
        });
    },[]);

    if (isLoading) {
        return (
            <main className="shop-page">
                <div className="loader"></div>
                <p>Loading products...</p>
            </main>
        )
    }
    return (
        <main className="shop-page">

            <div className="shop-heading">
                <div>
                    <p className="section-eyebrow">OUR COLLECTION</p>
                    <h1>Shop</h1>
                </div>

                <p className="product-count">
                    {products.length} products
                </p>
            </div>

            <ul className="product-grid">
                {products.map((product) => {
                    return (
                        <Card
                            key={product.id}
                            product={product}
                            setProducts={setProducts}
                            cart={cart}
                            setCart={setCart}
                        />
                    )
                })}
            </ul>

        </main>
    )
}

export {Shop};