// I want good control flow and function encapsulation for this project. I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
// Each user div should have the users name, username, and city they are located in.
init()

function init() {
    createDivUserContainer()
    getAllUsers()
    createGetPostsButton()
    addEventListenerToGetPosts()    
}

function createDivUserContainer() {
    var container = $('<div></div>')
    container.attr('id', 'container')
    $('body').append(container)
}

function getAllUsers() {
    $.get('https://jsonplaceholder.typicode.com/users', function(data){
        // console.log(data) // data is an array of objs
        for (var i = 0; i < data.length; i++) {
            var current = data[i]
            var div = $('<div></div>')
            div.attr('class', 'users')
            div.text(`Name: ${current.name}. Username: ${current.username}. City: ${current.address.city}`)
            $('#container').append(div)
        }
    })
}


// -------------------------- 2 --------------------

// Create a button that says 'get posts' and has a click event to send a request to get all posts.
// Write a function to get all posts, find what route you would need in your get request
// make divs for each post

function createGetPostsButton() {
    var btn = $('<button></button>')
    btn.attr('id', 'getPosts')
    btn.text('Get Posts')
    $('body').append(btn)
}

function addEventListenerToGetPosts() {
    $('#getPosts').click( () => {
        $.get('https://jsonplaceholder.typicode.com/posts', (posts) => {
            // console.log(posts)
            for (var j = 0; j < posts.length; j++) {
                var currentPost = posts[j]
                // console.log(currentPost)
                var divPost = $('<div></div>')
                divPost.attr('class', 'posts')
                divPost.attr('id', currentPost.id)
                divPost.text(`${currentPost.id}. ${currentPost.title}: ${currentPost.body}`)
                $('body').append(divPost)
            }

            logComment()

        })
    })
}

// add event listeners to posts that when clicked fetch all comments associated with given post. 
//You will have to make another API request at this point, so in the callback of the click event, you will have to make another request. 
//Read through the documentation to see how the data is structured. Just console log out the data you get back for the comments query.

function logComment() {
    var postsArr = document.getElementsByClassName('posts')
    // console.log(postsArr)
    for(var k = 0; k < postsArr.length; k++) {
        postsArr[k].addEventListener('click', (e) => {
            $.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}/comments`, function(data){
                console.clear()
                console.log(e.target.id)
                console.log(data)
            })
        })
    }
}


// -------------------------- 3 --------------------


// Get all comments associated with a post by passing in the number  - if the post id isn't found, return an error and paint error to screen.


// <h1>post not found</h1>

// If no error, loop through array, and create divs with data, and append them to screen.

var button = document.getElementById('button')

button.addEventListener('click', function(e) {
    var input = document.getElementById('textInput')
    console.log(textInput.value)
    $.get(`https://jsonplaceholder.typicode.com/posts/${input}/comments`, function(data){

        console.log(data);
        




    })
})


// function makeCars(array, make) {
//     array.forEach(element => {
//         make(element);
//     });
// }


