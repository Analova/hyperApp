

import { h, app } from "hyperapp";
export default function Reviews({ state, actions }) {
  var currentReview = function(){
    return (
      <div>
      <h5 class="title">Reviews</h5>
        <h2> {state.reviewsData[state.reviewStatus.currentReview].company} </h2>
      <h4>{state.reviewsData[state.reviewStatus.currentReview].quote}</h4>
      <p> {state.reviewsData[state.reviewStatus.currentReview].review}</p>
      <div class="author"><strong>{state.reviewsData[state.reviewStatus.currentReview].  author}</strong> - <em>{state.reviewsData[state.reviewStatus.currentReview].authorInfo}</em></div>
      </div>
    )
  }
  return (
    <section id="Reviews">
    <div class="container">
    <div class="row">
    <div class="col-md-8 ">
    <div class="side-img">
      <img src="https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/4/39/439be31e-143a-5001-94f7-92c4eac3c94b/5aff1bf141b6c.image.jpg?resize=1200%2C785"/>
    </div>
    </div>

    <div class="col-md-4">
    {currentReview ()}
    <div class="arrows">
    <i class="fas fa-arrow-left "></i>
    <i class="fas fa-arrow-right ready"></i>
    </div>
    </div>


    </div>
    </div>
    </section>
  );
}



// export default function Reviews({ state, actions }) {
//   return (
//     <section id="Reviews">
//     <div class="container">
//     <div class="row">
//     <div class="col-md-8 ">
//     <div class="side-img">
//       <img src="https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/4/39/439be31e-143a-5001-94f7-92c4eac3c94b/5aff1bf141b6c.image.jpg?resize=1200%2C785"/>
//     </div>
//     </div>
//
//     <div class="col-md-4">
//     <h5 class="title">Reviews</h5>
//       <h2> The Food's Masters Say About Us </h2>
//     <h4>"Best Restaurants in Berlin"</h4>
//     <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos iure nisi nobis maiores in eaque iste eos iure nisi nobis.</p>
//     <div class="author"><strong>Lilly Lorenz</strong> - <em>winner of the chef masters</em></div>
//     <div class="arrows">
//     <i class="fas fa-arrow-left "></i>
//     <i class="fas fa-arrow-right ready"></i>
//     </div>
//     </div>
//
//
//     </div>
//     </div>
//     </section>
//   );
// }
