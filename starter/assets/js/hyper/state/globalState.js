
var companyInfo={
  title:"Gracias Madre",
  phone: "(765)-981-165-097",
  location:"Fnkfurt am Main, Germany",
}

var specialMenuData=[
  {
  title:"Super Delicios Tofu With Rice",
  description: "Fried eggs, fried vegitables, patato or french fries, salad",
  price: 15
},
{
title:"Roll Springs",
description: "Fried eggs, fried vegitables, patato or french fries, salad",
price: 25
},
{
title:"Coconut Tofu",
description: "Fried eggs, fried vegitables, patato or french fries, salad",
price: 30
}
]

var reviewsData=[
  {
  company: "The Food Network",
  author: "Lilly Lorenz ",
  authorInfo: "Winner Of The Chef Masters",
  quote: "Best Restaurants in Frankfurt",
  review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos ."
},
{
company: "HBO",
author: "Jane Wiess ",
authorInfo: "Winner Of The Chef Masters",
quote: "Best Restaurants in Frankfurt",
review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos ."
},
{
company: "CWD",
author: "Mike Complle ",
authorInfo: "Winner Of The Chef Masters",
quote: "Best Restaurants in Frankfurt",
review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos ."
},
{
company: "MBC ",
author: "Daline Johnson ",
authorInfo: "Winner Of The Chef Masters",
quote: "Best Restaurants in Frankfurt",
review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos ."
},
{
company: "CNN",
author: "Bill Jordon ",
authorInfo: "Winner Of The Chef Masters",
quote: "Best Restaurants in Frankfurt",
review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis nemo laudantium doloribus maiores in eaque iste eos ."
},
]

var randomQuoteData =[
  {
  author:"Johny",
  quote:" For Me Cooking Is An Extension Of Love. "
},

{
author:"Mike",
quote:"Cooking and baking is both physical and mental therapy."
},
{
author:"Ciny",
quote:"One of the most meditative times of my day is when I'm cooking."
}
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 1,
}
}
