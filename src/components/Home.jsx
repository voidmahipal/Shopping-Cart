import { Link } from "react-router";

function Home() {

    return <>
        <main>
            <p>NEW COLLECTION</p>
            <h1>Minimal Pieces For A Better You</h1>
            <button><Link to="shop">Shop Now →</Link></button>
        </main>
    </>
}

export {Home};