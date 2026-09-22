import { Link } from "react-router";

function Home() {

    return (
        <main className="home">
            <div className="home-content">

                <p className="home-eyebrow">
                    NEW COLLECTION
                </p>

                <h1>
                    Minimal Pieces
                    <br />
                    For A Better You
                </h1>

                <p className="home-description">
                    Discover timeless essentials designed for
                    everyday confidence and effortless style.
                </p>

                <Link to="/shop" className="shop-now">
                    Shop Now
                    <span>→</span>
                </Link>

            </div>

            <div className="home-decoration">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
            </div>
        </main>
    )
}

export { Home };