

import { h, app } from "hyperapp";

export default function OurStory({ state, actions }) {
  console.log(state.companyInfo.title)
  return (
    <section id="TopImg">
    <div class="container">
    <div class="title">
    <h5>
    Welcome
    </h5>

    <h1>
  {state.companyInfo.title}
    </h1>
    </div>


<div class="contact-info">

<div class="booking">
Book Table Directly
<h2>{state.companyInfo.phone}</h2>
</div>

<div class="hours">
Opening Hours <strong> Mon - Fri:  </strong> 9am-10pm
<strong> Weekend:  </strong>
12pm-18pm
</div>
</div>
   </div>
    </section>
  );
}
