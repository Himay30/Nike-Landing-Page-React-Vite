const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>
          POWER YOUR PASSION.<br />
          FROM THE STREETS TO THE STADIUM.
        </h1>
        <p>
          FUEL YOUR JOURNEY WITH GEAR THAT BLENDS INNOVATION, COMFORT, AND ICONIC STYLE.
          WHETHER YOU'RE TRAINING HARD, PLAYING HARDER, OR MAKING A STATEMENT OFF THE FIELD —
          NIKE HAS YOU COVERED EVERY STEP OF THE WAY. JUST DO IT.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/images/amazon.jpg" alt="amazon-logo" width="32" height="32" />
            <img src="/images/flipkart.jpg" alt="flipkart-logo" width="32" height="32" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/nike shoee.jpeg" alt="shoe" />
      </div>
    </main>
  );
};

export default HeroSection;
