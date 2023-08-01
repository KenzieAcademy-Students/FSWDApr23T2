function createHeader() {
  const topNav = document.createElement("div");

  const brand = createBrand("React", "/vanilla-client/index.html");
  topNav.appendChild(brand);

  return topNav;
}

function createBrand(text, url) {
  const brand = document.createElement("a");
  brand.href = url;
  brand.innerText = text;
  brand.classList.add("brand");
  return brand;
}

function createReactBasics() {
  const section = document.createElement("section");
  section.appendChild(createH2("React Basics", true));
  section.appendChild(
    createColumnThird([
      createParagraph(
        "React is a JavaScript library created by the developers at Meta (the company formerly known as Facebook)."
      ),
      createParagraph(
        "A library is a set of data, data types, objects, functions, etc., that are defined outside of the scope of your own source code, but available for use within your own code."
      ),
    ])
  );

  section.appendChild(
    createColumnThird([
      createParagraph(
        "The goal of React is to simplify the process of creating dynamic single paged applications by introducing a much more declarative approach to programming."
      ),
      createParagraph(
        "As you can plainly see by the contents of this page's JavaScript file, the imperative approach to creating purely dynamically generated web pages is a nightmare."
      ),
    ])
  );

  section.appendChild(
    createColumnThird([
      createParagraph(
        "To do this, React uses a component-based application structure, where each chunk of the application is a component."
      ),
      createParagraph(
        "The purpose of a component is to make individual parts of a page more flexible and reusable. For example, if you were to spend 20 minutes creating a beautiful form input and its CSS, wouldn't it be nice to be able to reuse that component without copy/pasting 20+ lines of HTML?"
      ),
    ])
  );

  return section;
}

function createReactPropsAndState() {
  const section = document.createElement("section");
  section.classList.add("row");
  section.appendChild(createH2("Props and State", true));

  section.appendChild(
    createColumnThird([
      createParagraph(
        "React utilizes two major features to add to the reusability and dynamicness of each component; props and state."
      ),
      createParagraph(
        "Props is, in essence, the way we can pass custom text, data, and even functions, into a component. They're like specialized function parameters specifically created for React components."
      ),
    ])
  );
  section.appendChild(
    createColumnThird([
      createParagraph(
        "State is the back bone of React itself. In fact, React gets its name from how state impacts the application at any given time."
      ),
      createParagraph(
        "State is an object used by developers to store any data in memory. But where State gets fancy is that the application's visual presentation (a.k.a. the DOM) will REACT to changes in state."
      ),
    ])
  );

  return section;
}

function createMain() {
  const main = document.createElement("main");

  main.appendChild(createH1("What is React?"));
  main.appendChild(createReactBasics());
  main.appendChild(createReactPropsAndState());

  return main;
}

function createColumnThird(children) {
  const col = document.createElement("div");
  col.classList.add("col-third");
  if (Array.isArray(children)) {
    children.forEach((child) => col.appendChild(child));
  } else {
    col.appendChild(children);
  }

  return col;
}

function createParagraph(text) {
  const p = document.createElement("p");
  p.innerText = text;
  return p;
}

function createH1(text, centered = false) {
  const h1 = document.createElement("h1");
  if (centered) h1.classList.add("center");
  h1.innerText = text;
  return h1;
}
function createH2(text, centered = false) {
  const h2 = document.createElement("h2");
  if (centered) h2.classList.add("text-center");
  h2.innerText = text;
  return h2;
}

const root = document.getElementById("root");

root.appendChild(createHeader());
root.appendChild(createMain());
