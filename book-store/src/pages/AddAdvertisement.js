import { Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Label,
  Container,
  Menu,
  Input,
  Form,
  Button,
  Segment,
  Table,
  Icon,
} from "semantic-ui-react";
import BookService from "../services/BookService";
import MemberService from "../services/MemberService";
import AddAuthor from "./AddAuthor";
import AddBook from "./AddBook";

const AddAdvertisement = () => {
  let memberId = 2;

  let history = useHistory();

  const [authorId, setAuthorId] = useState(-1);
  const [authorName, SetAuthorName] = useState("");
  const [authors, setAuthors] = useState([]);
  const [authorStatus, SetAuthorStatus] = useState(false);
  const [authorForm, setAuthorForm] = useState(false);

  const [bookId, setBookId] = useState(-1);
  const [bookTitle, setBookTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [bookStatus, setBookStatus] = useState(false);
  const [bookForm, setBookForm] = useState(false);

  useEffect(
    (e) => {
      let bookService = new BookService();
      bookService
        .getAuthorsByName(authorName)
        .then((value) => setAuthors(value.data));
    },
    [authorStatus]
  );

  useEffect(
    (e) => {
      let bookService = new BookService();
      bookService
        .getBooksByName(bookTitle)
        .then((value) => setBooks(value.data));
    },
    [bookStatus]
  );

  let findAuthor = () => {
    SetAuthorStatus(!authorStatus);
  };

  let handleAuthorForm = () => {
    setAuthorForm(!authorForm);
    console.log(authorForm);
  };

  let findBook = () => {
    setBookStatus(!bookStatus);
  };

  let handleBookForm = () => {
    setBookForm(!bookForm);
    console.log(authorForm);
  };

  const formik = useFormik({
    initialValues: {
      bookId: -1,
      condition: "",
      price: 0,
      memberId: -1,
    },
    onSubmit: async (value) => {
      value.bookId = bookId;
      value.memberId = memberId;
      let memberService = new MemberService();
      memberService.addBookAdvertisement(value);
      alert(
        "Your advertisement successfully  added. It will be published after approved by Admins"
      );
      history.push("/");
    },
  });

  return (
    <div>
      <Segment>
        <Label
          ribbon
          horizontal
          style={{ marginBottom: "20px" }}
          color="green "
          attached="top"
        >
          Select An Author
        </Label>

        <Input
          size="small"
          placeholder="Enter an Author name..."
          onChange={(e) => {
            SetAuthorName(e.target.value);
          }}
        />

        <Button
          style={{ marginLeft: "10px" }}
          color="purple"
          onClick={(e) => {
            findAuthor();
          }}
        >
          Search
        </Button>

        <Table celled padded style={{ marginBottom: "50px" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Author Id</Table.HeaderCell>
              <Table.HeaderCell>Author's Name</Table.HeaderCell>
              <Table.HeaderCell>Author's Decription</Table.HeaderCell>
              <Table.HeaderCell>Select the author</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {authors.length <= 0 ? (
              <Label attached="bottom" pointing="above">
                Can't found any Authors. Add a new one{" "}
                <Button
                  onClick={(e) => {
                    handleAuthorForm();
                  }}
                  style={{ marginLeft: "20px" }}
                  size="mini"
                  color="green"
                >
                  <Icon fitted name="plus"></Icon>
                </Button>
              </Label>
            ) : (
              authors.map((list, index) => (
                <Table.Row style={{ marginTop: "10px" }} key={index}>
                  <Table.Cell>{list.authorId}</Table.Cell>
                  <Table.Cell>{list.authorName}</Table.Cell>
                  <Table.Cell>{list.description}</Table.Cell>
                  <Table.Cell>
                    <Button
                      size="mini"
                      color="green"
                      onClick={(e) => setAuthorId(list.authorId)}
                    >
                      {authorId == -1 ? (
                        <Icon fitted name="plus"></Icon>
                      ) : (
                        <Icon fitted name="check"></Icon>
                      )}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table>
      </Segment>
      {authorForm && (
        <Segment>
          <AddAuthor handleAuthorForm={(e) => handleAuthorForm()} />
        </Segment>
      )}

      {/* Book section */}
      {authorId != -1 && (
        <Segment>
          <Label
            ribbon
            horizontal
            style={{ marginBottom: "20px" }}
            color="red "
            attached="top"
          >
            Select A Book
          </Label>

          <Input
            size="small"
            placeholder="Enter an Book name..."
            onChange={(e) => {
              setBookTitle(e.target.value);
            }}
          />

          <Button
            style={{ marginLeft: "10px" }}
            onClick={(e) => {
              findBook();
            }}
            color="pink"
          >
            Search
          </Button>

          <Table celled padded style={{ marginBottom: "50px" }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Book Id</Table.HeaderCell>
                <Table.HeaderCell>Book Title</Table.HeaderCell>
                <Table.HeaderCell>About Book</Table.HeaderCell>
                <Table.HeaderCell>Author Id</Table.HeaderCell>
                <Table.HeaderCell>Select the Book</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {books.length <= 0 ? (
                <Label attached="bottom" pointing="above">
                  Can't found any Book. Add a new one{" "}
                  <Button
                    onClick={(e) => {
                      handleBookForm();
                    }}
                    style={{ marginLeft: "20px" }}
                    size="mini"
                    color="green"
                  >
                    <Icon fitted name="plus"></Icon>
                  </Button>
                </Label>
              ) : (
                books.map((list, index) => (
                  <Table.Row style={{ marginTop: "10px" }} key={index}>
                    <Table.Cell>{list.bookId}</Table.Cell>
                    <Table.Cell>{list.title}</Table.Cell>
                    <Table.Cell>{list.description}</Table.Cell>
                    <Table.Cell>{list.authorId}</Table.Cell>
                    <Table.Cell>
                      <Button
                        size="mini"
                        color="green"
                        onClick={(e) => setBookId(list.bookId)}
                      >
                        {bookId == -1 ? (
                          <Icon fitted name="plus"></Icon>
                        ) : (
                          <Icon fitted name="check"></Icon>
                        )}
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table>
        </Segment>
      )}

      {bookForm && (
        <Segment>
          <AddBook
            handleBookForm={(e) => handleBookForm()}
            authorId={authorId}
          />
        </Segment>
      )}

      {/* Advertisement detail */}
      {authorId != -1 && bookId != -1 && (
        <Segment>
          {" "}
          <Label
            ribbon
            horizontal
            style={{ marginBottom: "20px" }}
            color="orange"
            attached="top"
          >
            Enter your book's informations
          </Label>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Label>Book condition </Label>
              <Input
                id="condition"
                name="condition"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.condition}
              />
            </Form.Field>
            <Form.Field>
              <Label>Price </Label>
              <Input
                id="price"
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </Form.Field>
            <Button type="submit">
              <Icon disabled name="plus" />
              Add the advertisement!
            </Button>
          </Form>
        </Segment>
      )}
    </div>
  );
};

export default AddAdvertisement;
