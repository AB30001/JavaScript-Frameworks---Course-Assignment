# JavaScript Frameworks

## Goal

Utilize React skills to develop an eCommerce store. Refer to the details outlined below.

## Description

TigerShop is a simulated e-commerce store featuring cart functionality and a mock checkout process. It manages the cart using context and a reducer for state management.

Context is a React feature that allows you to share data between components without passing props manually through each level. In this project, it's used in the CartContext.

Reducer is a function that manages state changes in a predictable way. It takes the current state and an action, and returns a new state.

The reducer handles different actions like:
INITIALIZE_CART
ADD_TO_CART
INCREASE_QUANTITY
DECREASE_QUANTITY
CLEAR_CART
Together, Context and Reducer work like this in the cart functionality:
The CartContext provides cart data to all components
When you want to update the cart (like adding an item), you dispatch an action
The reducer processes that action and updates the cart state
The new cart state is then available to all components through the context
This pattern (Context + Reducer) is commonly used for state management in React applications, especially for features like shopping carts.

## Deployment

[--netflity link--](https://javascript-frameworks-course-assignme.netlify.app/)

## Built With

- Vite
- React
- React-Router-DOM
- Styled-Components
- Fontawesome

## Getting Started

For installation

```
npm i
```

For building Vite project

```
npm run build
```

For development mode

```
npm run dev
```

For development mode on network

```
npm run network
```

For running eslint

```
npm run lint
```

## Brief

You are tasked with build out the following pages for an eCom store:

Homepage
Individual product page
Cart page
Checkout success page
Contact page
The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

You pages should use a <Layout> component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:

Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)
You will be using React Router to switch between pages.

Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

You are not required to use TypeScript.

Your code is expected to be clean and well-formatted.

## Contact

[email](mailto:arnasbalciunas@gmail.com)
