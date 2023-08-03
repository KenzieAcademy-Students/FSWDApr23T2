import { useState } from "react";

/**
 * In react, components use `props` to receive values from
 * their parents. Every single component, when rendered, is
 * passed an object, whether you are using it or not. Thus,
 * the values that you provide and use are simply assigned
 * as that object's `prop`erties, giving them the name props.
 *
 * Props are immutable. Meaning, they cannot be changed.
 */
const RubberDuck = ({ name, age, color, franchise }) => {
  /**
   * We'll use a hook called useState. In React, hooks are simply
   * functions that allow us to `hook` in to a React component's
   * state object, or various lifecycle methods.
   *
   * The useState() hook accepts 1 argument; the initial state.
   * Then, useState() returns an array with 2 items:
   *  0: a variable that can be used to access the value in state
   *  1: a function that can be called to update the value in state
   */
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    /**
     * To update a value in state, use the setState function
     * (you may have called it something else; it's the 2nd
     * element in the array returned by useState()).
     *
     * It accepts 1 argument: the new value that should
     * be saved
     */
    const newLikes = likes + 1;
    setLikes(newLikes);
    console.log(`${name} now has ${newLikes} likes!`);
  };

  return (
    <div>
      <h4>{name}</h4>
      <p>
        {name} is a {age} year old {color} duck. It originates from the{" "}
        {franchise} franchise.
      </p>
      <div>
        <p>{likes} people like this duck.</p>
        <button onClick={addLike}>I Like This Duck</button>
      </div>
    </div>
  );
};

export default RubberDuck;
