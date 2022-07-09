import React from "react";
import BookService from "../api/BookService";
import { useFormik } from "formik";
import { Form, Input, Label, Button, Icon } from "semantic-ui-react";

const AddBook = ({ handleBookForm, authorId }) => {
  let authorService = new BookService();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      authorId: authorId,
    },
    onSubmit: async (values) => {
      if (authorId == values.authorId) {
        await authorService.addBook(values);
        handleBookForm();
        alert("Book has been added!");
      } else {
        alert("This book is not belongs to the selected Author!");
      }
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <Label>Book title </Label>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </Form.Field>
        <Form.Field>
          <Label>About this book </Label>
          <Input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Field>

        <Form.Field>
          {/* <Label>Author Id </Label> */}
          <Input
            type="hidden"
            id="authorId"
            name="authorId"
            onChange={formik.handleChange}
            value={formik.values.authorId}
          />
        </Form.Field>
        <Button type="submit">
          <Icon disabled name="plus" />
          Add the Book
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
