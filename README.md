![RobotMarket](https://user-images.githubusercontent.com/83664724/118275617-dbefab00-b4f0-11eb-8dd9-3fe8d3924881.jpg)

# Robot Market

This is an e-commerce site for you to buy robots. The homepage displays a list of robots for people to browse,
where on the right side of the screen displays a cart that show a list of selected robots.


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

### How do I start the app?

Start both server and frontend project by using `npm start` command. The port for frontend is `localhost:3000`, and for
server is `localhost:8000`
