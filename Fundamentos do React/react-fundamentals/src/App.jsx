import StatusText from "./components/StatusText";
import { Subtitle } from "./components/Subtitle";
import Title from "./components/Title";

function sum(a, b) {
  return a + b;
}

// PascalCase

export default function App() {
  return (
    <div>
      <Title />
      <Subtitle />
      <StatusText />
      <p>{true && "Text"}</p>
    </div>
  );
}
