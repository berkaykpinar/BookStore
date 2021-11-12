import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookService from "../services/BookService";
import { Grid, Image, Card, Icon, Menu, Label } from "semantic-ui-react";
import MemberService from "../services/MemberService";
const BookDetails = () => {
  let { bookId, memberId } = useParams();
  console.log(memberId);
  const [bookDetail, setBookDetails] = useState([]);
  const [member, setMemberDetails] = useState([]);

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBookByBookId(bookId).then((val) => setBookDetails(val.data));
  }, []);

  useEffect(() => {
    let memberService = new MemberService();
    memberService
      .getMemberById(memberId)
      .then((val) => setBookDetails(val.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Menu vertical>
            <Menu.Item name="inbox">
              <Label color="teal">{}</Label>
              Price
            </Menu.Item>

            <Menu.Item name="spam">
              <Label>51</Label>
              Spam
            </Menu.Item>

            <Menu.Item name="updates">
              <Label>1</Label>
              Updates
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src="/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content header="About Amy" />
            <Card.Content description="{description}" />
            <Card.Content extra>
              <Icon name="user" />4 Friends
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default BookDetails;
