import imageFile from "./images/frontend_technologies.png";
import image from "./images/asabeneh.jpg"
import Style from "./style.css";

const header = (
  <div
    style={{
      backgroundColor: "#C2E6F4",
      textAlign: "center",
      padding: "1rem",
      borderRadius: "20px",
    }}
  >
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and update. </p>
    <div style={{ fontFamily: "Courier" }}>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
    </div>
    <button>Subcscribe</button>
  </div>
);

const skills = [
  "HTML",
  "css",
  "Sass",
  "Js",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "numpy",
  "pandas",
  "Data",
];
const formattedSkills = skills.map((item) => (
  <span
    style={{
      backgroundColor: "#2ACFCF",
      color: "white",
      padding: "3px",
      borderRadius: "5px",
      marginRight: "5px",
    }}
  >
    {item}
  </span>
));
const main = (
  <div>
    <img src="{image}" alt="" />
    <h3>
      Asabeneh YETAYEH <span>✔️</span>
    </h3>
    <p>Senior Developer, Finland</p>
    <h3>Skills</h3>
    <div>{formattedSkills}</div>
  </div>
);

export function Day3Solutions() {
  return (
    <div>
      <img style={{ width: "55%" }} src={imageFile} alt="asabeneh image" />
      {header}
      {main}
    </div>
  );
}
