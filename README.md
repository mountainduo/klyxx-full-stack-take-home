# Duo Hong Take-Home Assignment

Thank you for looking at my work for the Take-Home Assignment. I had a great time learning about GatsbyJS, and I'll likely
consider using it for future personal projects.

## Client
In `./klyxx-duo-client` is the GatsbyJS Project. I used the default starter provided by Gatsby. For simple styling,
I used Bootstrap.
The file structure is self-explanatory, but I will detail the changes/additions I made to create the website per the assignment specifications.

### Components
- `navbar.js` contains, as its name suggests, the Navbar Component with the store name and cart links
- `card-grid.js` contains the CardGrid component and uses the map function on the inventory (which is static on the server side) to display all product cards
- `card.js` contains the card component that displays individual product information. Clicking on `Add to Cart` on a product card
adds that product to your cart. Clicking on it any time (and any number of times) after the initial add will increase the quantity
of that product in your cart.

### Pages
- `index.js` contains local state for the inventory, which gets passed down to the Card Grid component.
- `cart.js` The cart page features all functionality described in the assignment instructions
- `checkout.js` Simple form for checking out

### Global Context Provider
See `src/context/GlobalContextProvider`. I used React Context API and React Hook useReducer to have a global state that persists among multiple pages in Gatsby.
Product inventory is kept in a local state and passed down via props, while the product cart is why I have a global state as
the cart information and functionality is not on the server side. Another key difference is that items in the
cart have an additional key `quantity` for the amount the user wishes to purchase.

## Server

My ExpressJS server is organized into controllers and services. Controllers handle the API endpoints described in
the assignment instructions. Services contain functions for the controllers to use to perform the necessary server-side actions.

The `/inventory` route handles GET requests to return all inventory and to return a single product in the inventory
by product id. 

# Full-stack Intern Take Home
This repository contains the base code for our standard take home assignment for a full-stack development intern, usually given out after the initial phone screen.

This take home aims to test:
- If the intern can put together a functioning project within the allotted time.
- If the intern has a basic familiarity with Git, JavaScript, React.js, Node.js and server interaction.
- If the intern can set up a basic Node.js server to function as a REST API for the client application they build out.
- If the intern can utilize a framework they're perhaps unfamiliar with to meet the requirements of the spec.

**For a full list of expectations, see below in the Expectations section.*

## Getting Started
1. If necessary, create a GitHub account [here.](https://github.com/)
2. Using your terminal, clone this repository, if necessarry follow [this guide](https://services.github.com/on-demand/github-cli/clone-repo-cli). All work should be done on your own repo.
3. If necessary, review basic Git commands [here](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud).
4. Go through the [GatsbyJS tutorial](https://www.gatsbyjs.org/tutorial/).

## Assignment Spec and Instructions
Your task is to create a very simple storefront for a fictitious product: printable versions of [Twitch Stickers](https://www.redbubble.com/shop/twitch+emote+stickers). .

There are few pieces that this will require, but ultimately the two biggest pieces will be:
1. The client website, which will be built with  [GatsbyJS](https://www.gatsbyjs.org/)
2. The server, which should just be a simple [ExpressJS](https://expressjs.com/) app. 

The requirements for both are detailed below.

### The Client Website
The aesthetic qualities of the user interface of your GatsbyJS site won't be taken into consideration. 
The important qualities that **will** be considered are the following:
- Your use of components to create an intuitive, easy to work with hierarchy.
- Understanding separation of concerns, (for example, don't have "dumb" child components making API calls that change the overall data of the application, in this contrived example where we're not using a data store, you'd want to pass that data down via `props`.)

#### User Interface Specifications
For this online storefront, we'll be creating a Single Page Application with Gatsby. Luckily, GatsbyJS makes this pretty easy and doesn't force you to set up `react-router`.  You'll be using modules like `gatsby-link`  to navigate between pages.

<img src="https://i.ibb.co/Xsx8Khn/Screen-Shot-2020-07-23-at-00-18-34.png" width="500px"></img>

Above, you can see the (very basic) outline for your interface. Your GatsbyJS site will have 3 necessary pages, the rest of the layout (that is to say the navbar) should be contained in the Gatsby layout file:
- `Home`:
	-  The main functionality is just so the user can see all the product offerings.
	- On start up, you'll send a `GET` request to your server to display all the items.
	- Each item of inventory should display a price, (optionally) an image, and have a button that adds the item to the users cart.

- `Cart`: 
	- The main functionality just displays the items the user has already put in their cart.
	- Each cart item should have the functionality to remove itself from the users cart, or increase / decrease the quantity of itself.
	- The cart page should display the total price at the bottom, and have a button prompting the user to checkout.
 
- `Checkout`: 
	- This page should just be a form, with the total price at the top, that mimics the behavior of an actual checkout.
	- The form should take dummy payment information, and send a `POST` request to your server to submit the data.
	- You should handle the response from the server on this same page, flashing a thank you notification if your server returns a `200`, or an error notification if there was some issue.

### Server
After reading the Client Website spec, you probably have some idea of what kinds of endpoints you'll need to have.

At the minimum, your ExpressJS server should have:
- A `/checkout` route that can handle a `POST` request and works with the fake data that the client submits, it should return a summary of the order passed to it.
- An `/inventory` route that can handle a `GET` request to return all the inventory.

The data for all the inventory can be global `JSON` objects and **do not** have to persist. 

### Organization
In this case, when you generate a new Gatsby site, it will be its own separate directory. For the assignment, we want to preserve that directory isolation, so place all of your ExpressJS files in the `server/` directory at the root level.

## Expectations
When evaluating take home assignments, we take into consideration the following.
- **We expect clean and legible code.**
- **We expect a basic understanding of JavaScript and React.js, specifically:**
  - It's use within GatsbyJS, e.g. using component when necessary and not having a monolothic `index.js` file.
  - It's use to send HTTP requests and handle a response.
    - We want to ensure that the intern is comfortable with the very basics of asynchronous programming, handling a callback, chaining callbacks, etc.
  - It's use as a programming language:
    - Appropriate use of variable declaration, i.e. `let` vs `const`
    - Use of `for` loops when it makes sense.
    - Using comments to explain behavior and rationale.

## Rules
- Take home assignments are to be turned in on time.
- While we're certainly happy to see people who are good at using Google to find the solution to their problems (copy and pasting code is okay too), we want to see clean code that legible and easy to follow.
- Final versions of the take home are to be pushed to the intern's own public GitHub repository.
