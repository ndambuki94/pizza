# _Order Pizza_

#### _Website using HTML, CSS/Bootstrap, and JavaScript/Jquery, 08.30.2019_

#### _By Nzilani Onesmus Ndambuki_

## _Description_

Webpage designed to take user input for a pizza. This page has a header for the name of the company, a form for various parts of the pizza, such as toppings and size of pizza, and a submit button for the pizza, which will then reveal the user's cart. As the user adds more pizzas the cart reflects their order and their cart total increases with the pizza prices. At the bottom of the cart there is a button to submit your cart order. When you submit your order you can choose between Take Out and Delivery. Delivery adds $7 to the cost of the order. If the user clicks on Take Out, it asks for the pickup person's name. Then it will show a message for when to pick up their order and button to Order More. Clicking Order More resets the page. If the user clicks the Delivery button, their total increases by 7 and a form appears for their name and address. After submitting their info, a page will appear confirming their information and a expected time for their delivery. The Order More button will appear and if they click on it, it resets the page.

You can also view this project on gh-pages:
https://ndambuki94.github.io/pizza/.

## _Specifications_

1. User can select a pizza size and style.
* Example input: User uses a select box to choose "Medium" and "Gluten-free"
* Example output: Size: "Medium"
* Example output: Style: "Gluten-free"

2. User can select any amount of checkbox toppings.
* Example input: User clicks on "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: The corresponding checkboxes are checked.

3. User submits their pizza with the Put into Cart button and the fields reset.
* Example input: Size: "Medium", Style: "Gluten-free", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: The form is submitted, the form resets.

4. The program stores the user choices in a newPizza object, using a Pizza constructor.
* Example input: Size: "Medium", Style: "Gluten-free", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: newPizza (style: "Gluten-free", size: "Medium",  toppings: ["Pepperoni", "Black Olives", "Bell Pepper"]);

5. The program calculates the price based on size and number of toppings and stores it in the pizza object.
* Example input: Size: "Medium", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper
* Example output: newPizza.price = 15

6. The pizzas are displayed in a Cart on the webpage.
* Example input: Size: "Medium", Style: "Gluten-free", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: Pizza: Medium, Gluten-free

7. The pizzas can be clicked to reveal topping choices and price.
* Example input: Click on Pizza: Medium, Gluten-free
* Example output: Pizza: Medium, Gluten-free, Pepperoni, Black Olives, Bell Pepper

8. The Cart updates a cost total based on the Pizzas
* Example input: 2 pizzas in array, each with price = 15
* Example output: The cart total is $30

9. The Cart has a button to Order the pizzas, and allows user to decide on either pickup or delivery.
* Example input: User clicks Order button
* Example output: Two buttons appear, one saying takeout, the other delivery.

10. A. If the user chooses pickup, a form will appear to enter the name of whomever is picking up the order and a submit button.
* Example input: User clicks Pick Up button
* Example output: Form appears for the name. Submit button appears.

10. B. When the user submits a name for Pick Up, text will appear thanking them and telling them when to expect their order. A button appears to order more pizza.
* Example input: User clicks submit button for Pick Up name.
* Example output: Message appears with name and time of pickup. Restart button appears.

11. A. If the user chooses Delivery, a form will appear for their name and delivery address. A submit button appears.
* Example input: User clicks Pick Up button
* Example output: Form appears for the name. Submit button appears.

11. B. When the user submits a name for Delivery, text will appear thanking them and telling them when to expect their order. A button appears to order more pizza.
* Example input: User clicks submit button for Delivery form.
* Example output: Message appears with their name, address, and time of delivery. Restart button appears.

12. Clicking on the button for more pizza refreshes the page.
* Example input: User clicks Order More button.
* Example output: Page refreshes to start.

## _Setup/Installation Requirements_

* Clone this repository.
* Ensure that jquery version is included, as well as bootstrap.css.
* Open the page in your preferred web browser.


## _Known Bugs_

No currently known bugs.

## _Support and contact details_

If you have any issues or questions please contact me via email.
Email: ndambuki94@gmail.com

## _Technologies Used_

* HTML
* CSS
* Bootstrap
* JavaScript
* Jquery

### _License_

Copyright (c) 2018 Nzilani Onesmus,
This software is licensed under the MIT license.
