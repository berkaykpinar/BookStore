import React from "react";
import BookService from "../api/BookService";
import { useFormik } from "formik";
import { Form, Input, Label, Button, Icon } from "semantic-ui-react";
const AddAuthor = ({ handleAuthorForm }) => {
  let authorService = new BookService();

  const formik = useFormik({
    initialValues: {
      authorName: "",
      description: "",
    },
    onSubmit: async (values) => {
      await authorService.addAuthor(values);
      alert("Author has been added!");
      handleAuthorForm();
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <Label>Author Name </Label>
          <Input
            id="authorName"
            name="authorName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.authorName}
          />
        </Form.Field>
        <Form.Field>
          <Label>About this author </Label>
          <Input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Field>
        <Button type="submit">
          <Icon disabled name="plus" />
          Add the author
        </Button>
      </Form>
    </div>
  );
};

export default AddAuthor;
