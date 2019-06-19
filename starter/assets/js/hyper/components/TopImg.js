import { h, app } from "hyperapp";

export default function TopImg({ state, actions }) {
  return (
    <section class="TopImg">
    <div class="container">
    <div class="title">
    <h5>
    Welcome
    </h5>

    <h1>
    Gracias Madre
    </h1>
    </div>


<div class="contact-info">

<div class="booking">
Book Table Directly
<h2>(765)-981-165-097</h2>
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
