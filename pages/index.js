import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MeshTattoo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.prod.website-files.com/681ab70ddc03cb809dd2651a/css/meshtattoo.webflow.shared.d89f69674.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <main>
        <header className="section utility-padding-all-0">
          <div className="container utility-text-align-center">
            <h1 className="h1-heading">Some things in life...<br />do last forever.</h1>
            <p className="subheading">Let's craft something unforgettable.</p>
            <div className="button-group"><a className="button">Book now</a></div>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <h2 className="h1-heading">Explore our ink gallery</h2>
            <p className="paragraph-lg">Dive into a world of art and inspiration.</p>
            <div className="grid-layout">
              <img src="https://cdn.prod.website-files.com/image-generation-assets/19531c58-5b50-4c4c-8c88-48c6e5b79c63.avif" alt="Tattoo example" />
              <img src="https://cdn.prod.website-files.com/image-generation-assets/36cc7796-20b6-4e5a-8ff7-51b698171d86.avif" alt="Tattoo example" />
            </div>
          </div>
        </section>

        <section className="section secondary-section">
          <div className="container">
            <h2>Unleash Your Inner Canvas</h2>
            <p className="subheading">Explore the world of tattoos with a twist.</p>
            <div className="grid-layout">
              <div className="divider-vertical"><h3>Why choose custom designs?</h3><p>Custom tattoos let your personality shine.</p></div>
              <div className="divider-vertical"><h3>How do I book a session?</h3><p>Head to our 'Book Now' section!</p></div>
              <div className="divider-vertical"><h3>What should I expect?</h3><p>A warm welcome and a creative experience.</p></div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>© 2025 MeshTattoo. All rights reserved.</p>
            <nav>
              <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Cookies</a>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
