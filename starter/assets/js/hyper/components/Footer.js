

import { h, app } from "hyperapp";

export default function Footer({ state, actions }) {
  return (
    <footer>
    <div class="container">

    <div class="menu">
      <a href="#"> About</a>
      <a href="#"> Our Story</a>
      <a href="#"> Reviews</a>
      <a href="#"> Special Menu</a>
      <a href="#"> Reservations</a>
      <a href="#"> Contact us</a>
    </div>

    <ul class="social-media">
    <li><a href="#" >
    <i class="fab fa-facebook-square"></i>
    </a></li>
    <li><a href="#">
    <i class="fab fa-twitter-square"></i>
    </a></li>
    <li><a href="#">
    <i class="fab fa-youtube"></i>
    </a></li>
    <li><a href="#">
    <i class="fab fa-instagram"></i>
    </a></li>
    </ul>

    <div class="copyright">
     © 2016 Copyright
    </div>




   </div>
    </footer>
  );
}
