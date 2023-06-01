## React eCommerce Website

### Demo

[Demo Link](https://sswolter.github.io/ecommerce-store/)

### Requirements / Purpose

Purpose of this project was to get familiar with various aspects of the React framework.
Focusing on

- Fetching data within a React app
- Using react-router-dom for routing
- Integrating Firebase/Firestore

The MVP was to create a functioning e-shop website with all product data stored in Firestore.

### Build Steps

To build and run the project, follow these steps:

1.  Clone/download the repository
2.  cd into the repository folder in your terminal
3.  Install dependencies using `npm install`
4.  Start the development server `npm run dev`
5.  Open your browser and navigate to the url to see the app running.
    E.g. `http://localhost:5173`

### Design Goals / Approach

I wanted to keep the design and layout of the website simple, engaging and intuitive. As it stands, the current design requires further refinement to achieve this.

When I started this project, I approached it without a clear structure. I created each component as I went along, leading to an unstructured codebase that was difficult to follow.

After completing the basic functionality, I needed to improve the overall organisation of components and took the time to plan out a proper structure and refactored the code accordingly.

This project was my first experience working with React on a larger scale, and it highlighted the importance of planning and structuring the codebase from the beginning.

### Features

Home Page

- Grid of products
- - Carousel
    Product Page
- Select product variants
- Add to cart functionality
  Favourites Page
- View favourited items
  Shopping cart System
- Cart page with a list of products in the cart
- Ability to remove items from the cart
  Firestore Integration
- Fetching product data from Firestore
- Storing and retrieving cart data

### Known Issues

Cart system
No logic is implemented to handle increasing the quantity of items that are already in the cart. As a result, duplicate items may appear in the cart.

Live deployment with github pages
Currently when clicking the link the initial page is empty.

### Future Goals

- Update design
- Search functionality to find products
- Fix cart system
  - Change quantity of products from cart page
- Ability to remove products from favourites page
