![yump](https://user-images.githubusercontent.com/88470703/145477850-8edf38af-2349-4afd-9872-ef3f621c4eee.png)


[Yump](https://yump1.herokuapp.com/#/) is a fullstack clone of Yelp that allows users to create and account and search restaurants by their category or location. Users can also leave reviews and ratings for a business.

## Technologies Used
 * **Back-end:** Ruby on Rails
 * **Front-end:** React.js, Redux
 * **Database:** PostgresSql
 * **Images:** Amazon Web Service
 * **Third Party API:** Google Maps API

## Key Features

### Search Businesses
Users are able to search businesses by name, category, and location. Businesses can be searched by their name or category in which they belong. Users can also search businesses in a certain location by searching by their city, state, or zip code.

![search](https://user-images.githubusercontent.com/88470703/145481189-7ba2dfbe-37eb-4dac-a7c3-b8c014f4976f.gif)

### Google Maps API
Users are able to visualize the location of the businesses list that they are curerntly viewing. When clicking on a marker, it redirects the user to the business show page. The map also rerenders the markers depending on the user's search results.

![map](https://user-images.githubusercontent.com/88470703/145485794-e0db93fb-0e81-4c95-b6eb-3469773be984.gif)

The .map() method is used on the businesses array of array objects passed from props to populate each marker on the generated Google map. The lat and lng values are used to position the markers and the the index of each business is taken to create a label on each marker to match the label on the businesses list.

![image](https://user-images.githubusercontent.com/88470703/145487132-edbe2c7c-21a5-4b09-b12a-284594bf83e1.png)

Event listeners are created for the markers for user interaction and to redirected to the designated business show page when a desired marker is clicked on.

![image](https://user-images.githubusercontent.com/88470703/145487056-9bee448d-7de2-4949-b822-b654852a2406.png)

### Create Reviews
Once looged in users are able to create new reviews, and edit or delete reviews that they have previously written for a business. Options for updating or deleting a review will only be shown if the current user is the author of the review. Once a review is created or updated, the average star rating and review count will update accordingly on the business show page.

![create_reviews](https://user-images.githubusercontent.com/88470703/141490016-b75981cf-b4ea-4b31-9b9d-ef3d1b972e53.gif)

Radio buttons and labels were used to create an interactive star rating options for selecting a rating value.

![Screen Shot 2021-11-12 at 10 14 59 AM](https://user-images.githubusercontent.com/88470703/141489728-d497899a-8804-444c-8687-ece9fbd23717.png)

## Future Improvements
* `Filters` - Allow users to filter search results by specifications.
* `User Show Page` - Allow users to see their profile page.
