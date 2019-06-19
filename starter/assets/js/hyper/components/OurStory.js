import { h, app } from "hyperapp";

export default function OurStory({ state, actions }) {
  return (
    <section id="OurStory">
    <div class="container">
     <div class="row">
     <div class="col-md-6">
      <h5 class="title">Our story</h5>
      <h2 > Cooking is the story of ajustment</h2>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos iure nisi nobis, assumenda asperiores.
      </p>
      <div class="quote"> "The best vegi food in the town " -
      <strong>Thomas Eggsy-Best </strong>  </div>
      <a href="#" class="res-btn">Reservation</a>

    </div>
    <div class="col-md-6">
    <div class="video-img"></div>
    </div>
   </div>
    </div>
    </section>
  );
}
