import "./index.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <Nav />
      <Main />
    </div>
  );
}
