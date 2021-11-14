import { useEffect, useState } from "react";
import MemberService from "../services/MemberService";
import {
  Grid,
  Card,
  Segment,
  Header,
  Table,
  Icon,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const MyAdvertisements = () => {
  //redux eklenince gerek kalmayacal
  let memberId = 1;
  const [adsList, setAdsList] = useState([]);

  useEffect(() => {
    let memberService = new MemberService();
    memberService
      .getAdvertisementsByMemberId(memberId)
      .then((e) => setAdsList(e.data));
  });

  return (
    <div>
      <Segment.Group>
        <Segment>
          {adsList && <Header as="h2">{"Sellers's Advertisements"}</Header>}
        </Segment>
        <Segment>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Details</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Book Condition</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Close the Ad</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {adsList &&
                adsList.map((list) => (
                  <Table.Row style={{ marginTop: "10px" }} key={list.bookId}>
                    <Table.Cell>
                      <Link
                        to={`/advertisementDetails/${list.member.id}/${list.bookAdvertisementId}`}
                      >
                        {" "}
                        <Icon size="large" name="zoom"></Icon>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{list.book.title}</Table.Cell>
                    <Table.Cell>{list.condition}</Table.Cell>
                    <Table.Cell>{list.price}</Table.Cell>
                    <Table.Cell>
                      {`${list.adStatus}` == "true" ? "Active" : "Inactive"}
                    </Table.Cell>
                    <Table.Cell>
                      <Button>Close</Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </Segment>
      </Segment.Group>
    </div>
  );
};

export default MyAdvertisements;
