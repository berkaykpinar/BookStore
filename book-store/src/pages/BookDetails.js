import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Card, Segment, Header, Table, Icon } from "semantic-ui-react";
import BookService from "../services/BookService";
const BookDetails = () => {
  let { bookId } = useParams();

  const [book, setBook] = useState([]);
  const [ads, setAds] = useState([]);
  useEffect(() => {
    let bookService = new BookService();
    bookService.getBookByBookId(bookId).then((val) => setBook(val.data));
    bookService.getBookByBookId(bookId).then((val) => setAds(val.data.adLists));
  });

  return (
    <div>
      <Grid>
        <Grid.Column width={12}>
          <Segment.Group>
            <Segment>
              <Header as="h2">Books on sale </Header>
            </Segment>
            <Segment>
              <Table celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell singleLine>Details</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Condition</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Seller Score</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {ads &&
                    ads.map((list) => (
                      <Table.Row
                        style={{ marginTop: "10px" }}
                        key={list.bookId}
                      >
                        <Table.Cell>
                          <Link
                            to={`/advertisementDetails/${list.memberId}/${list.bookAdvertisementId}`}
                          >
                            {" "}
                            <Icon size="large" name="zoom"></Icon>
                          </Link>
                        </Table.Cell>
                        <Table.Cell>{book.title}</Table.Cell>
                        <Table.Cell>{list.condition}</Table.Cell>
                        <Table.Cell>{list.price}</Table.Cell>
                        <Table.Cell>{list.member.score}</Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content header={`${book.title}`} />

            <Card.Content>{book.description}</Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default BookDetails;
