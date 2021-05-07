# Robot Market

This is an e-commerce site for you to buy robots. The homepage should display a list of robots for people to browse,
where on the right side of the screen should display a cart that show a list of selected robots.

Please read the instructions and FAQ below before begin.

## Features

- products should display in a grid.
- each robot should show image, name, price, stock, created date, material, and button to add to cart
    - created date should display in `DD-MM-YYYY` format
    - when robot is out of stock add to cart button should be disabled
    - price should be displayed in Thai Baht formatted, `฿5,300.00`
- give the user option to filter by a robot's material type.
- user can add up to 5 different robots to cart, but they can select as much as they want in the same type until it runs
  out of stock.
    - if user try to add more that 5 different robots then it should show an alert
- cart should display on the right side of the screen.
    - cart should contain list of selected robots, total amount and total price
    - user can increase or decrease the number of robots inside of cart section
    - total amount should be the total number of selected robots
    - total price should be in Thai Baht formatted, `฿5,300.00`

## Robots API

- The basic query looks like this: `/api/robots`
- The response format is JSON
```
{
  name
  image
  price
  stock
  createdAt
  material
}
```

## FAQs

### How do I start the app?

At the very beginning please fork or clone this repository into your own private repository (github / bitbucket).
During all development please make regular commits while working on this app.

Start both server and frontend project by using `npm start` command. The port for frontend is `localhost:3000`, and for
server is `localhost:8000`

### What libraries/frameworks, packages, tools can I use?

The project frontend is in React.js (you can select between js or ts), but other than that you are free to use whatever
libraries/frameworks, packages, tools that you want.
