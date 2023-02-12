In this project let's build a **Tasty Kitchens App** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using **component lifecycle** methods, **routing** concepts, **authentication**, and **authorization**, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

### Prerequisites



<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen.
- Export Images in Figma screen
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Check <a href="https://help.trydesignlab.com/hc/en-us/articles/360011010634-How-do-I-export-images-and-PDFs-from-Sketch-or-Figma-in-my-short-course-" target="_blank">this</a> reference docs to export images in Figma screen.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/5DK9nvTWZ4W0ytHtDrDe56/Tasty_Kitchens" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>

The app must have the following functionalities

- Login Route
  - Users should be able to login to their account by entering a valid username and password.
- Users should be able to navigate to Home, Cart routes using links in Navbar.
- When the data is being fetched then the Loading view should be displayed to the user.
- Users should be able to view the website responsively in mobile view, tablet view as well.
- Home Route
  - Navbar should contain the application title with logo, Home, Cart, and Logout button.
  - Users should be able to navigate to Home route when clicking on **TASTY KITCHENS** logo.
  - Users should be able to see carousel images with its offer details.
  - Users should be able to see Popular Restaurants.
  - Users should be able to see the sort by icon as shown in the Figma.
  - The default value for the Sort By filter should be `Lowest` (You can use the `sortByOptions` object from the path `src/App.js`).
  - Users should be able to select the sort by icon and able to see the Popular Restaurants based on the Highest and Lowest Ratings.
  - Users should be able to sort the list of Restaurants based on their ratings.
    - When user clicked the Lowest the Restaurants list should be displayed in Lowest ratings to Highest ratings.
    - When user clicked the Highest the Restaurants list should be displayed in Highest ratings to Lowest ratings.
  - Users can browse popular Restaurants using pagination buttons.
  - Users should be able to see the footer as shown in Figma.
  - Users should be able to see Home with highlighted text in Navbar.
- Specific Restaurant details Route
  - When users click a restaurant in a particular list, it should open a new page with respective restaurant details.
  - Users should be able to see food items list as shown in the figma screens.
- Cart Route
  - Users should be able to select the Cart link in the navbar and be able to view their selected Food items, each food item quantity, and price of each food item in a separate page.
  - Users should be able to increase or decrease their each food item quantity and price should increase or decrease appropriately.
  - Users should be able to see their order total as shown in figma.
  - Users should be able to see the footer as shown in figma.
  - Users should be able to see Cart with highlighted text in Navbar.
  - Users should be able to see Cart Items even after the app is refreshed, store the data in **<u>Local Storage</u>**.
- Logout Button
  - Users should be able to logout from accounts page.
- When the data is being fetched then the Loading view should be displayed to the user in all Routes.
- Users should be able to view the website responsively in mobile view, tablet view as well.
- When the users enter invalid route in the URL then the Page not found Route should be displayed.

</details>