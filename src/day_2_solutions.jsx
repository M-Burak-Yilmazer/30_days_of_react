// const jsxElement = <h1>I am a JSX element.</h1>;
// const title = <h2>Getting Started React</h2>;

const header = (
  <header
    style={{
      border: "2px solid blue",
      padding: "5px",
      fontSize: "18px",
      color: "red",
    }}
  >
    <h1>Welcome 30 year of the react</h1>
    <h2>Getting Started React</h2>
    <h3>Javascript Library</h3>
  </header>
);

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const authorFirstName = "Asabeneh";
const authorLastName = "Yetayeh";
const date = "Oct 1, 2020";

const mainStyles = {
  backgroundColor: "blue",
  color: "white",
  listStyleType: "circle",
};
const section = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {authorFirstName} {authorLastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started react.js:</p>
    <ul style={mainStyles}>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
);

export function DAY_2_SOLUTIONS() {
  return (
    <div>
      {header}
      {section}
      {main}
      {footer}
    </div>
  );
}
