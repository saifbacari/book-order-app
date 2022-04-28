import { Fragment } from "react";
import BooksBanner from "./BooksBanner";
import BooksList from "./BooksList";


const Books = (props) => {

    return (
      <Fragment>
          <BooksBanner />
          <BooksList />
      </Fragment>
    );
}

export default Books;