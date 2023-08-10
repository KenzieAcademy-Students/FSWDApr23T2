import { useState } from "react";

function ConditionalRender() {
  const [search, setSearch] = useState("");

  const someBooleanValue = true;
  const someArrayOfNumbers = [1, 2, 4, 5, 6];
  const someArrayOfObjects = [
    {
      id: "7efa2489b01",
      title: "Billy Madison",
      year: 1995,
      lead: "Adam Sandler",
    },
    {
      id: "f23c7ba9253",
      title: "Ernest Scared Stupid",
      year: 1991,
      lead: "Jim Varney",
    },
  ];

  const filteredObjects = someArrayOfObjects
    .filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
    .map(({ id, title, year, lead }) => (
      <li key={id}>
        <p>Title: {title}</p>
        <p>Release year: {year}</p>
        <p>Starring: {lead}</p>
      </li>
    ));

  return (
    <div>
      {/**
       * TODO:
       * - Render a green check if someBooleanValue is true.
       * - Render a red x if someBooleanValue is false.
       */}
      <div>
        <span>Status:&nbsp;</span>
        {someBooleanValue === true ? (
          <span className="green">&#10003;</span>
        ) : (
          <span className="red">&#10539;</span>
        )}
      </div>
      {/**
       * TODO:
       * - Render "YES" if someBooleanValue is true.
       * - Don't render anything if someBooleanValue is false.
       */}
      <div>{someBooleanValue && "YES"}</div>
      {/**
       * TODO:
       * - Render each number in the array in an unordered list.
       * - If the number is not 1 + the previous number, make it red.
       */}
      <ul>
        {someArrayOfNumbers.map((number, i, arr) => (
          <li
            key={`numbers-${i}`}
            className={i === 0 || number === arr[i - 1] + 1 ? "" : "red"}
          >
            {number}
          </li>
        ))}
      </ul>
      {/**
       * TODO:
       * - Build a search feature for the movies.
       * - If the input title is a partial match for any movies,
       *   render those movies.
       * - If the input title is not a partial match, render
       *   a message stating that the movie could not be found.
       */}
      <div>
        <div>
          <label htmlFor="search">Title: </label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          {filteredObjects.length === 0 ? "No matches found." : filteredObjects}
        </div>
      </div>
    </div>
  );
}

export default ConditionalRender;
