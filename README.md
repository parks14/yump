# yump

[Yump](https://yump1.herokuapp.com/#/) is a website that allows users to create and account and search restaurants by their category or location. Users can also leave reviews and ratings for a business.

## Technologies Used
 * **Back-end:** Ruby on Rails
 * **Front-end:** React.js, Redux
 * **Database:** PostgresSql
 * **Images:** Amazon Web Service

## Key Features

### Create Reviews
Once looged in users are able to create new reviews, and edit or delete reviews that they have previously written for a business. Options for updating or deleting a review will only be shown if the current user is the author of the review. Once a review is created or updated, the average star rating and review count will update accordingly on the business show page.

![create_reviews](https://user-images.githubusercontent.com/88470703/141490016-b75981cf-b4ea-4b31-9b9d-ef3d1b972e53.gif)

Radio buttons and labels were used to create an interactive star rating options for selecting a rating value.

![Screen Shot 2021-11-12 at 10 14 59 AM](https://user-images.githubusercontent.com/88470703/141489728-d497899a-8804-444c-8687-ece9fbd23717.png)

## Future Improvements
* `Google Map API` - Interacticve map on business index and show page that renders the businesses with markers for each businesses shown.
* `Search/Filters` - Allow users to search by business name, category, and location. Users can also filter search results by specifications.
* `User Show Page` - Allow users to see their profile page.
