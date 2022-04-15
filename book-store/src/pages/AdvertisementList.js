import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
} from "semantic-ui-react";
import MemberService from "../services/MemberService";

const AdvertisementList = () => {
  let memberservice = new MemberService();
  const [advertisementList, setAdvertisementList] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    let memberservice = new MemberService();

    memberservice
      .getBookAdvertisementList()
      .then((values) => setAdvertisementList(values.data));
  }, []);

  return (
    <div>
      <Grid>
        <GridColumn width={4}>
          <Menu pointing vertical>
            <Menu.Item name="inbox">
              <Label color="teal">{`${advertisementList.length}`}</Label>
              Active Ad Number
            </Menu.Item>
          </Menu>
        </GridColumn>
        <GridColumn width={12}>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Details</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Book Condition</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Seller Score</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {advertisementList.map((list, index) => (
                <Table.Row style={{ marginTop: "10px" }} key={index}>
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
                  <Table.Cell>{list.member.score}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </GridColumn>
      </Grid>
    </div>
  );
};

export default AdvertisementList;
