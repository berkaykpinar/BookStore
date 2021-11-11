import React, { useEffect, useState } from "react";
import {
  Header,
  Table,
  Rating,
  Grid,
  GridColumn,
  Menu,
  Label,
  Input,
} from "semantic-ui-react";
import MemberService from "../services/MemberService";

const AdvertisementList = () => {
  let memberservice = new MemberService();
  const [advertisementList, setAdvertisementList] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    let memberservive = new MemberService();

    memberservive
      .getBookAdvertisementList()
      .then((values) => setAdvertisementList(values.data));
  }, []);
  useEffect(() => {}, []);

  // async function getBook(id) {
  //   const response = await memberservive.getBookDetail(id);
  //   console.log(response.data.title);
  //   return response.data.title;
  // }

  return (
    <div>
      <Grid>
        <GridColumn width={4}>
          <Menu pointing vertical>
            <Menu.Item name="inbox">
              <Label color="teal">1</Label>
              Inbox
            </Menu.Item>

            <Menu.Item name="spam">
              <Label>51</Label>
              Spam
            </Menu.Item>

            <Menu.Item name="updates">
              <Label>1</Label>
              Updates
            </Menu.Item>
            <Menu.Item>
              <Input icon="search" placeholder="Search mail..." />
            </Menu.Item>
          </Menu>
        </GridColumn>
        <GridColumn width={12}>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>condition</Table.HeaderCell>
                <Table.HeaderCell>Book Name</Table.HeaderCell>
                <Table.HeaderCell>Efficacy</Table.HeaderCell>
                <Table.HeaderCell>Consensus</Table.HeaderCell>
                <Table.HeaderCell>Comments</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {advertisementList.map(
                (list) => (
                  {},
                  (
                    <Table.Row key={list.bookAdvertisementId}>
                      <Table.Cell>{list.condition}</Table.Cell>
                      <Table.Cell singleLine>
                        {JSON.stringify(getBook(list.bookId))}
                      </Table.Cell>
                    </Table.Row>
                  )
                )
              )}
            </Table.Body>
          </Table>
        </GridColumn>
      </Grid>
    </div>
  );
};

export default AdvertisementList;
