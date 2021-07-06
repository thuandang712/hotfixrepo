// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
// Each user div should have the users name, username, and city they are located in.

createContainer()
getAllUsers()

function getAllUsers() {
    $.get('https://jsonplaceholder.typicode.com/users', function(data){
        // Console log the data to see what you get back and how to use it.
        // console.log(data) // arr of objs
        for (let i = 0; i < data.length; i++) {
            var current = data[i];
            // Create divs, and append them to the screen. 
            var div = $('<div></div>')
            div.attr('class', 'users')
            div.text(`Name: ${current.name}. Username: ${current.username}. City: ${current.address.city}`)
            $('#container').append(div)
        }  
    })
}

function createContainer() {
    var container = $('<div></div>')
    container.attr('id', 'container')
    $('body').append(container)
}



// -------------------------- 2 --------------------

getPostsButton()
addEvenListenerToGetPostsButton()


// Create a button that says 'get posts' and has a click event to send a request to get all posts.
function getPostsButton() {
    var button = $('<button></button>')
    button.attr('id', 'getPosts')
    button.text('Get posts')
    $('body').append(button)
}

// Write a function to get all posts, find what route you would need in your get request
function addEvenListenerToGetPostsButton() {
    $('#getPosts').click(getAllPosts)
}

function getAllPosts() {
    $.get('https://jsonplaceholder.typicode.com/posts', function(data){
        for (let i = 0; i < data.length; i++) {
            var post = data[i];
            var divPost = $('<div></div>')
            divPost.attr('id', post.userId)
            divPost.attr('class', 'posts')
            divPost.text(`${post.title}: ${post.body}`)
            $('#container').append(divPost)
            divPost.click(function(e) {
                $.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}/comments`, function(data){
                    console.clear()
                    for (let j = 0; j < data.length; j++) {
                        console.log(data[j].body)
                    }
                })
            })
        }
    })
}


// make divs for each post
// add event listeners to posts that when clicked fetch all comments associated with given post. 
// You will have to make another API request at this point, so in the callback of the click event, you will have to make another request. 
// Read through the documentation to see how the data is structured. Just console log out the data you get back for the comments query.






// -------------------------- 3 --------------------


// Get all comments associated with a post by passing in the number  - if the post id isn't found, return an error and paint error to screen.


// <h1>post not found</h1>

// If no error, loop through array, and create divs with data, and append them to screen.

var button = document.getElementById('button')

button.addEventListener('click', function() {
    var inputText = document.getElementById('textInput')
    var inputValue = inputText.value
    console.log(inputValue)
    $.get(`https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`, function(data){
        console.log(data)
        if (data.length === 0) {
            var h1 = $('<h1></h1>')
            h1.text('Error. Nothing found')
            $('body').append(h1)
        } else {
            for (let k = 0; k < data.length; k++) {
                var cur = data[k]
                var divElem = $('<div></div>')
                divElem.attr('class', 'divElement')
                divElem.text(cur.body)
                $('#container').append(divElem)
            }
        }
    })
})