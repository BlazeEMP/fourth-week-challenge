// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.getElementById('toggle');
const circleColor = document.querySelector(':root');
const defaultCircleColor = '#ffb100';
const darkCircleColor = '#8a5e00';

// dark mode selection
let darkMode = localStorage.getItem('darkMode');
let tempStorageObject = {};

if (darkMode == "true") {
  toggle.textContent = "Dark Mode";
  document.body.classList.remove("light");
  circleColor.style.setProperty('--circle-color', darkCircleColor);
} else if (darkMode == "false") {
  toggle.textContent = "Light Mode";
  document.body.classList.add("light");
  circleColor.style.setProperty('--circle-color', defaultCircleColor);
}// else { // default if never visited page
//   toggle.textContent = "Light Mode";
// }

toggle.addEventListener('click', function() {
  if (darkMode != true) {
    darkMode = true;
    localStorage.setItem('darkMode', darkMode);
    toggle.textContent = "Dark Mode";
    document.body.classList.remove("light");
    circleColor.style.setProperty('--circle-color', darkCircleColor);

  } else {
    darkMode = false;
    localStorage.setItem('darkMode', darkMode);
    toggle.textContent = "Light Mode";
    document.body.classList.add("light");
    circleColor.style.setProperty('--circle-color', defaultCircleColor);

  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let array = [];
  const storedPosts = JSON.parse(localStorage.getItem('blogData'));
  if (storedPosts == null) {
    console.log(array);
    return array;
  }
  else {
    array = storedPosts;
    return array;
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newObject) {
  tempStorageObject = newObject;
  let fetchedBlogs = readLocalStorage();
  fetchedBlogs.push(newObject);
  console.log(fetchedBlogs);
  localStorage.setItem('blogData', JSON.stringify(fetchedBlogs));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

