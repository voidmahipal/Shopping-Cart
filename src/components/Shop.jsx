import { useState,useEffect } from "react";
import { Card } from "./Card"; 
function extractUsefulInfo(dataObj) {

    return {
        id:dataObj.id,
        title:dataObj.title,
        price:dataObj.price,
        imgURL:dataObj.image,
        quantity:1,
    }
}
function Shop({setCart}) {

    const [products,setProducts] = useState([]);
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
            console.log(productList);
        })
        .catch((e)=>{
            setIsLoading(false);
            alert(e);
        });
    },[]);

    if(isLoading) return <p>Loading...</p>
    return <>
        <ul>
            {products.map((product)=>{
                return <Card key={product.id} product={product} setProducts={setProducts} setCart={setCart}/>
            })}
        </ul>
    </>
}

export {Shop};