

import { h, app } from "hyperapp";

export default function ContactUs({ state, actions }) {
  return (
    <section id="ContactUs">
      <div class="container">
      <h5 class="title"> Contact Us</h5>
      <h2>Delicious Flavor of Autom</h2>
      <div class="box">
      <div class="row">

      <div class="col-md-6">
       <div class="title">
      Frankfurt am Main, Germany
       </div>

       <h6 class="address">
       Street address: Europa-Allee 50
       <br/>
       60327 Frankfurt am Main, Germany
       </h6>

       <p>
      <strong> email:</strong> <a href="mailto:info@graciasmadre.com" >info@graciasmadre.com</a>
       </p>

      </div>

      <div class="col-md-6">
      <h6>Phone: </h6>
      <div class="title">
      (+49)765-098-1920
      </div>
        <h6>Lunch service: </h6>
        <p> Friday , Sunday , Saturday: Bookings <br/>
        from 12pm to 1:30pm</p>

          <h6>Dinner service: </h6>
          <p> Daily: Bookings <br/>
          from 6pm to 9:30pm</p>
      </div>

      </div>
      </div>
     </div>
    </section>
  );
}
