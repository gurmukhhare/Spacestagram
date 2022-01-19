# Spacestagram
### Live Link: https://spacestagram--app.herokuapp.com/
## Description
My version of Spacestagram utilizes NASA's Astronomy Picture of the Day (APOD) API to load and display images. The features currently implemented in the first iteration include:
* Chronological feed from NASA's API
* Like/Unlike images
* Loading state when waiting for NASA's API to return fetched data
* Date selection (start date and end date) to allow the user to indicate which days images they would like to view
* Pop up to alert the user if the entered date range is invalid

## Technical Decisions
To implement this app, I utilized the React framework for an optimized single page user interface. As mentioned in Shopify's requirements doc, I used semantic HTML where possible by leveraging semantic tags such as `<main>`, `<header>`, and alt properties for `<img>` tags. Currently, my application has two stateful smart components (App and ImageCard both contain state) and two functional components (ImageCardList and DateSelect). 


