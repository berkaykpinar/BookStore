import { useEffect, useState } from "react";
import MemberService from "../api/MemberService";
import {
  Grid,
  Card,
  Segment,
  Header,
  Table,
  Icon,
  Button,
  Form,
  Input,
  Tab,
} from "semantic-ui-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const MyAdvertisements = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const { member } = useAuth();
  let memberId;
  member?.userId != undefined ? (memberId = member.userId) : (memberId = 1);

  console.log(auth);
  const [adsList, setAdsList] = useState([]);
  const [selectedAd, setSelectedAd] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getBookAdvertisementList = async () => {
      try {
        const response = await axiosPrivate
          .get(`/findByMemberId/` + memberId)
          .then((result) => {
            return result;
          });
        setAdsList(response?.data);
      } catch (error) {
        console.log(error);
        //return err?.response?.data;
        //giriş yaptıktan sonra gitmek istediğimiz sayfaya geri döneriz
        navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getBookAdvertisementList();
  }, []);

  let trueObj = [
    {
      operationType: "0",
      path: "/adStatus",
      op: "replace",
      value: "true",
    },
  ];

  let falseObj = [
    {
      operationType: "0",
      path: "/adStatus",
      op: "replace",
      value: "false",
    },
  ];

  let handleTrue = (id) => {
    let memberService = new MemberService();
    memberService.updateAdStatus(id, trueObj);
  };

  let handleFalse = (id) => {
    let memberService = new MemberService();
    memberService.updateAdStatus(id, falseObj);
  };
  let handleDelete = (id) => {
    let memberService = new MemberService();
    memberService.deleteAdvertisement(id);
  };

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
                <Table.HeaderCell>Is Approved</Table.HeaderCell>
                <Table.HeaderCell>Close the Ad</Table.HeaderCell>
                <Table.HeaderCell>Open the Ad</Table.HeaderCell>
                <Table.HeaderCell>Delete the Ad</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {adsList &&
                adsList.map((list, index) => (
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
                    <Table.Cell>
                      {`${list.adStatus}` == "true" ? "Active" : "Inactive"}
                    </Table.Cell>
                    <Table.Cell>
                      {`${list.isApproved}` == "true" ? "Yes" : "No"}
                    </Table.Cell>
                    <Table.Cell>
                      {/* <Form onSubmit={formik.handleSubmit}> </Form> */}
                      <Button
                        type="submit"
                        onClick={() => handleFalse(list.bookAdvertisementId)}
                      >
                        Close
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        positive
                        onClick={() => handleTrue(list.bookAdvertisementId)}
                      >
                        Open
                      </Button>
                    </Table.Cell>

                    <Table.Cell>
                      <Button
                        negative
                        onClick={() => handleDelete(list.bookAdvertisementId)}
                      >
                        Delete
                      </Button>
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
