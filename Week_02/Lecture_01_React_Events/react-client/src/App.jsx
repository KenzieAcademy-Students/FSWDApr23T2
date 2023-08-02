import "./App.css";

function App() {
  /**
   * Add the focused class to the target element that is being
   * focused
   * @param {FocusEvent} e
   */
  const handleFocus = (e) => e.target.classList.add("focused");

  /**
   * Remove the focused class from the target element that is
   * being blurred
   * @param {FocusEvent} e
   */
  const handleBlur = (e) => e.target.classList.remove("focused");

  /**
   * Logs the value of the input to the console when it
   * is changed
   * @param {ChangeEvent} e
   * @returns
   */
  const handleChange = (e) => console.log(e.target.value);

  /**
   *
   * @param {SubmitEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
    };

    console.log(formData);
  };

  return (
    <>
      <section>
        <h3>Click Events</h3>
        <p>
          In react, adding an event listener to an HTML element is as simple as
          adding an attribute named after one of the React events (
          <a href="https://react.dev/reference/react-dom/components/common#event-handler">
            Documentation
          </a>
          ), and then define/pass in the function that should run
        </p>
        <button onClick={() => alert("You clicked the button")}>
          Click me to show an alert
        </button>
      </section>
      <section>
        <h3 onMouseOver={(e) => e.target.classList.add("question")}>
          Focus/Blur Events
        </h3>
        <p>
          This input, when focused, will appear with an orange box shadow behind
          it. When the input is blurred, the box shadow disappears.
        </p>
        <input
          type="text"
          name="focus"
          placeholder="Click to see effect"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </section>
      <section>
        <h3>Input Change Events</h3>
        {/* 
          Note: Self closing tags MUST have the self-closing
          "/>" characters 
        */}
        <p>
          This input, when modified, will have its value printed to the console.
        </p>
        <p>
          The key difference between React's <code>onChange</code> and vanilla
          JS' "change" is <em>when</em> the event is considered "complete."
          React handles the changes as the change occurs, whereas vanilla JS
          handles the changes only once the input is blurred.
        </p>
        <input
          type="text"
          name="change"
          placeholder="Enter some value to see console logs"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </section>
      <section>
        <h3>Form Submit Events</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <br />
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
}

export default App;
