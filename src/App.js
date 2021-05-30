import "./styles.css";
import Accordian from "./Componenets/Accordian";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framewor"
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library"
  }
];

export default function App() {
  return <Accordian items={items} />;
}
