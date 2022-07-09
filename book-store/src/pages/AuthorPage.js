import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Card, Segment, Header, Table, Icon } from "semantic-ui-react";
import BookService from "../api/BookService";

const AuthorPage = () => {
  let { authorId } = useParams();

  const [author, setAuthor] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let bookService = new BookService();
    bookService.getAuthorById(authorId).then((val) => setAuthor(val.data));

    bookService.getAuthorById(authorId).then((val) => setBooks(val.data.books));
  }, []);
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Card>
            <Card.Content header={`${author.authorName}`} />

            <Card.Content>{author.description}</Card.Content>
            <Card.Content>{"Total Books :" + books.length}</Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column width={12}>
          <Segment.Group>
            <Segment>
              <Header as="h2">Author's Books</Header>
            </Segment>
            <Segment>
              <Table celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell singleLine>Details</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Book Description</Table.HeaderCell>
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
                        <Table.Cell>{list.description}</Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AuthorPage;
