function Home({cart}) {
    return <>
        <header>
            <p>SHOP.CO</p>
            <nav>
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">Cart({cart.length})</a>
            </nav>
        </header>
        <main>
            <p>NEW COLLECTION</p>
            <h1>Minimal Pieces For A Better You</h1>
            <button><a href="">Shop Now →</a></button>
        </main>
    </>
}

export {Home};