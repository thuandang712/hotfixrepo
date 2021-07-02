// I want good control flow and function encapsulation for this project. I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
    // Each user div should have the users name, username, and city they are located in.

// getAllUsers()

// function getAllUsers() {
//     $.get('YOUR URL HERE', function(data){
//         // Console log the data to see what you get back and how to use it.
//         console.log(data)

//         // Create divs, and append them to the screen. 
//     })
// }

// -------------------------- 2 --------------------

// Create a button that says 'get posts' and has a click event to send a request to get all posts.
// Write a function to get all posts, find what route you would need in your get request
// make divs for each post
// add event listeners to posts that when clicked fetch all comments associated with given post. You will have to make another API request at this point, so in the callback of the click event, you will have to make another request. Read through the documentation to see how the data is structured. Just console log out the data you get back for the comments query.





// -------------------------- 3 --------------------


// Get all comments associated with a post by passing in the number  - if the post id isn't found, return an error and paint error to screen.


// <h1>post not found</h1>

// If no error, loop through array, and create divs with data, and append them to screen.

var button = document.getElementById('button')

button.addEventListener('click', function(e) {
    var input = document.getElementById('textInput')
    console.log(textInput.value)
})