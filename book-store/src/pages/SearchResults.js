import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import BookService from "../services/BookService";
import {
  Header,
  Table,
  Rating,
  Grid,
  GridColumn,
  Menu,
  Label,
  Input,
  Icon,
  Segment,
} from "semantic-ui-react";
const SearchResults = () => {
  let { word } = useParams();

  let history = useHistory();
  const [bookList, setBookList] = useState([]);

  useEffect((e) => {
    let bookService = new BookService();
    bookService.getBooksByName(word).then((value) => setBookList(value.data));
  }, []);

  return (
    <div>
      <Grid>
        <GridColumn width={4}>
          <Segment>Number of results : {bookList.length} </Segment>
        </GridColumn>
        <GridColumn width={12}>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Book Details</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell singleLine>Book Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {bookList.map((list) => (
                <Table.Row style={{ marginTop: "10px" }} key={list.bookId}>
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
        </GridColumn>
      </Grid>
    </div>
  );
};

export default SearchResults;
