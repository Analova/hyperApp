

import { h, app } from "hyperapp";

export default function SpecialMenu({ state, actions }) {
  return (
    <section id="SpecialMenu">
      <div class="container">
        <h5 class="tittle"> Special Menu</h5>
        <h2>Delicious Flavor of Autom</h2>
          <div class="row boxes">
          <div class="col-md-4">
          <div class="box">
           <div class="box-img">
              <div class="price-circle">$25</div>
           </div>
             <span class="title"> Super Delicios Tofu With Rice</span>
               <p class="details"> Fried eggs, fried vegitables, patato or french fries, salad</p>
          </div>
          </div>
          <div class="col-md-4">
          <div class="box">
           <div class="box-img">
              <div class="price-circle">$25</div>
           </div>
             <span class="title"> Super Delicios Tofu With Rice</span>
               <p class="details"> Fried eggs, fried vegitables, patato or french fries, salad</p>
          </div>
          </div>
          <div class="col-md-4">
          <div class="box">
           <div class="box-img">
              <div class="price-circle">$25</div>
           </div>
             <span class="title"> Super Delicios Tofu With Rice</span>
               <p class="details"> Fried eggs, fried vegitables, patato or french fries, salad</p>
          </div>
          </div>
      <a href="#" class="link" >View Full Menu</a>
      </div>
     </div>
    </section>
  );
}
