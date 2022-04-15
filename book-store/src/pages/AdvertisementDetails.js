import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookService from "../services/BookService";
import {
  Grid,
  Image,
  Card,
  Icon,
  Menu,
  Label,
  Segment,
  Header,
  Button,
} from "semantic-ui-react";
import MemberService from "../services/MemberService";
const AdvertisementDetails = () => {
  let { memberId, adId } = useParams();
  console.log(memberId);
  const [advertisement, setAdvertisementList] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(async () => {
    let memberService = new MemberService();
    await memberService
      .getAdvertisementByAdId(adId)
      .then(async (val) => await setAdvertisementList(val.data));
  }, []);

  useEffect(() => {
    let memberService = new MemberService();
    memberService
      .getContactInfoByInfoId(1)
      .then((val) => setContactInfo(val.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Menu vertical>
            <Menu.Item>
              {" "}
              <Header as="h3">About Advertisement</Header>
            </Menu.Item>
            <Menu.Item name="inbox">
              {advertisement.member && (
                <Label color="teal">{`${advertisement.member.name}`}</Label>
              )}
              Seller's Name
            </Menu.Item>
            <Menu.Item name="inbox">
              {advertisement.member && (
                <Label color="teal">{`${advertisement.member.score}`}</Label>
              )}
              Seller's Score
            </Menu.Item>
            <Menu.Item name="inbox">
              <Label color="teal">{`${advertisement.price} TL`}</Label>
              Price
            </Menu.Item>

            <Menu.Item name="spam">
              <Label color="teal">{`${advertisement.condition}`}</Label>
              Book Condition
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment.Group>
            <Segment>
              {advertisement.book && (
                <Header as="h1">{advertisement.book.title}</Header>
              )}
            </Segment>
            <Segment>
              {advertisement.book && (
                <p>{`${advertisement.book.description}`}</p>
              )}
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content header="Author" />
            {advertisement.book && (
              <Card.Content>
                {advertisement.book.author.authorName}
              </Card.Content>
            )}
            <Card.Content extra>
              {advertisement.book && (
                <Link to={`/author/${advertisement.book.author.authorId}`}>
                  <Button>
                    Author's page <Icon name="book" />
                  </Button>
                </Link>
              )}
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>

      <Segment.Group>
        <Segment>
          <Header as="h4">Contact the seller</Header>
        </Segment>

        <Segment>
          <Segment.Group horizontal>
            <Segment ve>
              <Icon name="mail" /> {contactInfo.email}
            </Segment>
            <Segment>
              <Icon name="phone" /> {contactInfo.phone}
            </Segment>
            <Segment>
              <Icon name="telegram" /> {contactInfo.telegram}
            </Segment>
          </Segment.Group>
        </Segment>
      </Segment.Group>
    </div>
  );
};

export default AdvertisementDetails;
