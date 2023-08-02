/**
 * Event running on click:
 * 1. Target element
 * 2. Add event listener
 *  2a. Define event name
 *  2b. Define callback
 */
const onClickBtn = document.getElementById("click-btn");
onClickBtn.addEventListener("click", () => alert("You clicked the button."));

/**
 * Event running on an input being focused:
 * 1. Target element
 * 2. Add focus event listener
 *  2a. Define event name
 *  2b. Define callback
 */
const onFocusBlurInput = document.getElementById("focus-blur-input");
onFocusBlurInput.addEventListener("focus", (e) => {
  e.target.classList.add("focused");
});

/**
 * Event running on an input being blurred:
 * 1. Target element (done on line 18)
 * 2. Add blur event listener
 *  2a. Define event name
 *  2b. Define callback
 */
onFocusBlurInput.addEventListener("blur", (e) => {
  e.target.classList.remove("focused");
});

/**
 * Event running on an input's value changing:
 * 1. Target element
 * 2. Add change event listener
 *  2a. Define event name
 *  2b. Define callback
 */
const onChangeInput = document.getElementById("change-input");
onChangeInput.addEventListener("change", (e) => {
  const inputValue = e.target.value;
  console.log(inputValue);
});

/**
 * Event running on a form's submission:
 * 1. Target element
 * 2. Add submit event listener
 *  2a. Define event name
 *  2b. Define callback
 *    2bi. Stop the default form submission
 */
const onSubmitForm = document.getElementById("submit-form");
onSubmitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: e.target[0].value,
    email: e.target[1].value,
  };
  console.log(formData);
});
