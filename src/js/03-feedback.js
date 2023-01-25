import Throttle from 'lodash.throttle';



const feedbackForm = document.querySelector("form.feedback-form");
const FEEDBACK_FORM_KEY = "feedback-form-state";

//const throttle = _.throttle(inputStorage, 500);

//on load--check local storage-- add data if there is some

function loadStorage() {
    
    localStorage.getItem(FEEDBACK_FORM_KEY);
    const loadedData = localStorage.getItem(FEEDBACK_FORM_KEY);
    const parsedData = JSON.parse(loadedData);
  
    document.querySelector("textarea").value = parsedData.message;
    document.querySelector("input").value = parsedData.email;
};


//input function to store input

const inputStorage = (event) => {
  const feedbackStorage = event.currentTarget.elements
  const email = feedbackStorage.email.value;
  const message = feedbackStorage.message.value;

  const feedbackStorageData = {
    email,
    message,
  };
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(feedbackStorageData));
};

//submit function and print object in console
const submitfeedbackForm = (event) => {
    event.preventDefault();

    const feedbackElements = event.currentTarget.elements;
    const email = feedbackElements.email.value;
    const message = feedbackElements.message.value;

    if (email == "" || message == "") {
        alert("The fields must be filled in. Thanks!");
        feedbackForm.reset();
        return false;
    };

    const feedbackFormData = {
        email,
        message,
    };
    
    console.log(feedbackFormData);
    feedbackForm.reset();
};

feedbackForm.addEventListener("input", inputStorage);
feedbackForm.addEventListener("submit", submitfeedbackForm);
loadStorage();


// try {
//   // Code that may throw a runtime error
// } catch (error) {
//   // Error handling
// }

// document.addEventListener(
//   "input",
//   Throttle((event) => {
    
//     // const inputStorage = (event) => {
//     const feedbackStorage = event.currentTarget.elements
//     const email = feedbackStorage.email.value;
//     const message = feedbackStorage.message.value;

//     const feedbackStorageData = {
//       email,
//       message,
//     };
//       localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(feedbackStorageData));
//     },
//    500)
// );