webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var companyInfo = {
  title: "Gracias Madre",
  phone: "(765)-981-165-097",
  location: "Fnkfurt am Main, Germany"
};

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "title" },
        " Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autom"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "Street address: Europa-Allee 50",
              (0, _hyperapp.h)("br", null),
              "60327 Frankfurt am Main, Germany"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                " email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@graciasmadre.com" },
                "info@graciasmadre.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone: "
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "(+49)765-098-1920"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch service: "
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              " Friday , Sunday , Saturday: Bookings ",
              (0, _hyperapp.h)("br", null),
              "from 12pm to 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner service: "
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              " Daily: Bookings ",
              (0, _hyperapp.h)("br", null),
              "from 6pm to 9:30pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " About"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Contact us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2016 Copyright"
      )
    )
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "GMadre"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " About"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          " Contact us"
        )
      )
    )
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "title" },
            "Our story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            " Cooking is the story of ajustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos iure nisi nobis, assumenda asperiores."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            " \"The best vegi food in the town \" -",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy-Best "
            ),
            "  "
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "res-btn" },
            "Reservation"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote", style: {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://s3-ap-southeast-2.amazonaws.com/macquarie-ish-oncourse/9390f6ef-6c5f-4e92-babd-05fecaf77b41')"
      } },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\" For me cooking is an extension of love. \""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        " -Johny-"
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8 " },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/4/39/439be31e-143a-5001-94f7-92c4eac3c94b/5aff1bf141b6c.image.jpg?resize=1200%2C785" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "title" },
            "Reviews"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            " The Food's Masters Say About Us "
          ),
          (0, _hyperapp.h)(
            "h4",
            null,
            "\"Best Restaurants in Berlin\""
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos iure nisi nobis maiores in eaque iste eos iure nisi nobis."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Lilly Lorenz"
            ),
            " - ",
            (0, _hyperapp.h)(
              "em",
              null,
              "winner of the chef masters"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left " }),
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right ready" })
          )
        )
      )
    )
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "title" },
        " Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autom"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row  boxes" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4 " },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              " Super Delicios Tofu With Rice"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              " Fried eggs, fried vegitables, patato or french fries, salad"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              " Super Delicios Tofu With Rice"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              " Fried eggs, fried vegitables, patato or french fries, salad"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              " Super Delicios Tofu With Rice"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              " Fried eggs, fried vegitables, patato or french fries, salad"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.companyInfo.title);
  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "booking" },
          "Book Table Directly",
          (0, _hyperapp.h)(
            "h2",
            null,
            state.companyInfo.phone
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "hours" },
          "Opening Hours ",
          (0, _hyperapp.h)(
            "strong",
            null,
            " Mon - Fri:  "
          ),
          " 9am-10pm",
          (0, _hyperapp.h)(
            "strong",
            null,
            " Weekend:  "
          ),
          "12pm-18pm"
        )
      )
    )
  );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[12]);