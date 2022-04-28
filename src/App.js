import { Fragment } from "react";
import Books from "./components/Books/Books";
import Header from "./components/Layout/Header";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
      <Books />
      </main>
    </Fragment>
  );
}

export default App;
