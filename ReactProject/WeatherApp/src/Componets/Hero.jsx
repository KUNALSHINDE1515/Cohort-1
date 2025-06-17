function Hero() {
    return (
        <>
        <main className="hero contaier">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WIN OUR SHOES</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>
                        ALSO AVAILABLE ON
                    </p>
                    <div className="brand-icons">
                        <img src="/flipkart.png" alt="flipcart" />
                        <img src="/amazon.png" alt="amezon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/shoe_image.png" alt="amezon" />
            </div>
        </main>
        </>
    )
}

export default Hero;
