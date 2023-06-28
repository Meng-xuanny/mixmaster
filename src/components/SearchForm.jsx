import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/searchForm";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          placeholder={searchTerm}
        />
        <button className="btn" disabled={isSubmitting} type="submit">
          {isSubmitting ? "searching.." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
