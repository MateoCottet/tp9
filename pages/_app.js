// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
}

export default MyApp;
