import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <main class="page_404">
      <div class="error-gif">
        <h1 class="error-number">404</h1>
      </div>
      <div class="text-404">
        <h3>Look like you're lost...</h3>
        <p>The page you are looking for is not avaible!</p>
        <Link to="/" class="link_404">
          Go to Home
        </Link>
      </div>
    </main>
  );
}

export default Errorpage;
