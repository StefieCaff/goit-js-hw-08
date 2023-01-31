import Throttle from 'lodash.throttle';



const feedbackForm = document.querySelector("form.feedback-form");
const FEEDBACK_FORM_KEY = "feedback-form-state";


//on load--check local storage-- add data if there is some

function loadStorage() {
    try {
        localStorage.getItem(FEEDBACK_FORM_KEY);
        const loadedData = localStorage.getItem(FEEDBACK_FORM_KEY);
        const parsedData = JSON.parse(loadedData);
  
        document.querySelector("textarea").value = parsedData.message;
        document.querySelector("input").value = parsedData.email;
    } catch (error) {
        feedbackForm.reset();
        return false;
    }
};

const inputStorage = (event) => {
  const feedbackStorage = event.currentTarget.elements
  const email = feedbackStorage.email.value;
  const message = feedbackStorage.message.value;

  const feedbackStorageData = {
    email,
    message,
  };
    
    if (email == "" || message == "") {
      localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(feedbackStorageData));
        
    } else {
        return false;   
      };
};


//input function to store input

// const inputStorage = (event) => {
//   const feedbackStorage = event.currentTarget.elements
//   const email = feedbackStorage.email.value;
//   const message = feedbackStorage.message.value;

//   const feedbackStorageData = {
//     email,
//     message,
//   };
//     localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(feedbackStorageData));
// };

//submit function print object in console remove item local storage
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
    localStorage.removeItem(FEEDBACK_FORM_KEY);
};

// event listeners and function calls
Throttle(inputStorage, 500);
feedbackForm.addEventListener("input", inputStorage);
feedbackForm.addEventListener("submit", submitfeedbackForm);
loadStorage();