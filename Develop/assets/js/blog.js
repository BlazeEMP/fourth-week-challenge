// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainSection = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function buildDiv(title, content, username) {
    // create div for post
    const blogDiv = document.createElement('div');

    // create h3 for title
    const titleSpot = document.createElement('h3');
    titleSpot.classList.add('card-header');
    titleSpot.textContent = `${title}`;

    // create p for content
    const contentSpot = document.createElement('p');
    contentSpot.textContent = `${content}`;

    // create span for username
    const usernameSpot = document.createElement('span');
    usernameSpot.textContent = `${username}`;

    blogDiv.appendChild(titleSpot);
    blogDiv.appendChild(contentSpot);
    blogDiv.appendChild(usernameSpot);
    mainSection.appendChild(blogDiv);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPosts() {
    const div = document.createElement('div');
    div.textContent = "No Blog posts yet...";
    mainSection.appendChild(div);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    let allBlogs = readLocalStorage();

    if (allBlogs.length == 0) {
        noBlogPosts();
    } else {
        let i = 0;
        for (blog of allBlogs) {
            console.log(i);
            i++;
            console.log(blog);
            username = blog.username;
            title = blog.title;
            content = blog.content;
            buildDiv(title, content, username);
        }
    }
}

// TODO: Call the `renderBlogList` function
// renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function() {
    redirectPage('index.html');
})

window.onload = renderBlogList();
window.onload = console.log(localStorage.getItem('blogData'));