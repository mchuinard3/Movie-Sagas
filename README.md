# **Weekend Challenge: Movie Sagas**

## **Description**

The Movie Sagas Project allows the user to click on a movie poster from a list of movies. When the movie poster is clicked on, the user is taken to a movie details page where they are able to see a description of the movie they clicked on, as well as the genres of the movie. The user is then able to click on a ***Back To List*** button which takes them back to the page that lists out all the movies with their posters.  

## **Problems I Ran Into**

The first problem I ran into was figuring out how to setup the two get requests, one for the movie details, and one for the movie genres. I ended up putting them both in the same function in the index file with different dispatch, or put names. I then created two separate reducers for them. The next problem I ran into was figuring out how to get the genres to display on the DOM on the movie details page. I realized that I needed to set them as an array, then loupe through the array to post them all on the DOM correctly. 

## **Built With**

- Javascript, React, HTML, CSS, Node, Express, SQL, Redux, and Redux-Saga

## **Acknowledgment**

Credit goes to Prime Digital Academy and my instructor Dane Smith for giving me the instruction and knowledge to make this project possible.
