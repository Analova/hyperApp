

import { h, app } from "hyperapp";

export default function RandomQuote({ state, actions }) {
  return (
    <section id="RandomQuote" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://s3-ap-southeast-2.amazonaws.com/macquarie-ish-oncourse/9390f6ef-6c5f-4e92-babd-05fecaf77b41')"
    }} >
    <div class="container">
    <h1>" For me cooking is an extension of love. "</h1>
    <span class="author"> -Johny-</span>
   </div>
    </section>
  );
}
