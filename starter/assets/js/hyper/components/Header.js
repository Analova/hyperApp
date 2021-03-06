import { h, app } from "hyperapp";

export default function Header({ state, actions }) {
  return (
    <header>
    <div class="container">
      <div class="logo">GMadre</div>
      <nav>
      <a href="#"> About</a>
      <a href="#"> Our Story</a>
      <a href="#"> Reviews</a>
      <a href="#"> Special Menu</a>
      <a href="#"> Reservations</a>
      <a href="#"> Contact us</a>
      </nav>
    </div>
    </header>
  );
}
