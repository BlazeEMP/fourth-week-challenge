// TODO: Create a variable that selects the form element
const blogForm = document.getElementById('userForm');
const error = document.querySelector('#error');

function submitForm(event) {
    event.preventDefault();
    const formData = {
        username: username.value,
        title: title.value,
        content: content.value,
    };
    // if no empty fields pass this if statement
    if (formData.username == '' || formData.title == '' || formData.content == '') {
        // alert("Please fill out all fields to submit form."); // add textContent of error paragraph
        error.textContent = "Please complete the form.";
    } else {
        storeLocalStorage(formData);
        redirectPage('blog.html');
    }
return;
}

blogForm.addEventListener('submit', submitForm);
