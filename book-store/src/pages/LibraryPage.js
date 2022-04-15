import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Icon } from "semantic-ui-react";
import BookService from "../services/BookService";

const LibraryPage = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    let bookService = new BookService();
    bookService.getAllBooks().then((val) => setBooks(val.data));
  });

  return (
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Book Details</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Author Details</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {books &&
            books.map((list, index) => (
              <Table.Row style={{ marginTop: "10px" }} key={index}>
                <Table.Cell>
                  <Link to={`/bookdetails/${list.bookId}`}>
                    {" "}
                    <Icon size="large" name="zoom"></Icon>
                  </Link>
                </Table.Cell>
                <Table.Cell>{list.title}</Table.Cell>
                <Table.Cell>
                  <Link to={`/author/${list.author.authorId}`}>
                    {" "}
                    <Icon size="large" name="zoom"></Icon>
                  </Link>
                </Table.Cell>
                <Table.Cell>{list.author.authorName}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default LibraryPage;
