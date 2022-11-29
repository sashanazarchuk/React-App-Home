import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>React App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="painting">Painting</Link>
          </li>
          <li>
            <Link to="works">Works</Link>
          </li>
          <li>
            <Link to="quote">Quote</Link>
          </li>
          <li>
            <Link to="cities">Cities</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
