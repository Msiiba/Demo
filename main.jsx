import "./App.css";
import Card from "./components/Card";

function App() {
  const resources = [
    {
      title: "freeCodeCamp",
      description: "Learn web development and programming for free.",
      link: "https://www.freecodecamp.org"
    },
    {
      title: "GitHub",
      description: "Host and manage code repositories.",
      link: "https://github.com"
    },
    {
      title: "MDN Web Docs",
      description: "Comprehensive documentation for web technologies.",
      link: "https://developer.mozilla.org"
    },
    {
      title: "LeetCode",
      description: "Practice coding interview questions.",
      link: "https://leetcode.com"
    },
    {
      title: "Stack Overflow",
      description: "Ask and answer programming questions.",
      link: "https://stackoverflow.com"
    },
    {
      title: "GeeksforGeeks",
      description: "Programming tutorials and interview preparation.",
      link: "https://www.geeksforgeeks.org"
    },
    {
      title: "Codecademy",
      description: "Interactive coding lessons and projects.",
      link: "https://www.codecademy.com"
    },
    {
      title: "W3Schools",
      description: "Beginner-friendly web development tutorials.",
      link: "https://www.w3schools.com"
    },
    {
      title: "Coursera",
      description: "Online software engineering courses from universities.",
      link: "https://www.coursera.org"
    },
    {
      title: "Roadmap.sh",
      description: "Developer roadmaps for different career paths.",
      link: "https://roadmap.sh"
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Software Engineering Learning Hub</h1>
        <p>
          Explore resources that help students learn software engineering,
          coding, development tools, and career preparation.
        </p>
      </header>

      <div className="card-grid">
        {resources.map((resource, index) => (
          <Card
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
