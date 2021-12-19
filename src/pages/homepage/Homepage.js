import homeImg1 from './photos/homeimg1.jpg'
import homeImg2 from './photos/homeimg2.jpg'
import homeImg3 from './photos/homeimg3.jpg'
import './Homepage.css'

function Homepage() {
  return (
    <>
      <section className="container">
        <div className="section-text">
          <h2>Who we are?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros elit, malesuada vel eros in, pretium placerat velit. Sed sodales metus velit, et cursus est tempor sed. In ullamcorper, augue non mattis dignissim, nisl metus ornare ex, eget imperdiet odio nisl non arcu. Donec in dictum urna. Praesent vitae ligula vitae arcu posuere consectetur. Fusce id congue neque, sed commodo metus. Fusce sed ex velit. Nulla ullamcorper vel turpis vitae maximus. Ut quis nunc id nisi scelerisque faucibus. </p>
        </div>
        <div className="section-img">
          <img src={homeImg1} alt="Who we are?" />
        </div>
      </section>
      <section className="container order-1">
        <div className="section-text">
          <h2>How we work?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros elit, malesuada vel eros in, pretium placerat velit. Sed sodales metus velit, et cursus est tempor sed. In ullamcorper, augue non mattis dignissim, nisl metus ornare ex, eget imperdiet odio nisl non arcu. Donec in dictum urna. Praesent vitae ligula vitae arcu posuere consectetur. Fusce id congue neque, sed commodo metus. Fusce sed ex velit. Nulla ullamcorper vel turpis vitae maximus. Ut quis nunc id nisi scelerisque faucibus. </p>
        </div>
        <div className="section-img">
          <img src={homeImg2} alt="HOW WE WORK?" />
        </div>
      </section>
      <section className="container">
        <div className="section-text">
          <h2>Why choose us?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros elit, malesuada vel eros in, pretium placerat velit. Sed sodales metus velit, et cursus est tempor sed. In ullamcorper, augue non mattis dignissim, nisl metus ornare ex, eget imperdiet odio nisl non arcu. Donec in dictum urna. Praesent vitae ligula vitae arcu posuere consectetur. Fusce id congue neque, sed commodo metus. Fusce sed ex velit. Nulla ullamcorper vel turpis vitae maximus. Ut quis nunc id nisi scelerisque faucibus. </p>
        </div>
        <div className="section-img">
          <img src={homeImg3} alt="Why choose us?" />
        </div>
      </section>
    </>
  );
}

export default Homepage;