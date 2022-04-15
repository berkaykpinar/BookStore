import { useEffect, useState } from "react";
import AdminService from "../services/AdminService";
import { Table, Icon, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0cmluZyIsIm5iZiI6MTY0NzAyNzk0NywiZXhwIjoxNjQ3MDQ1OTQ3LCJpYXQiOjE2NDcwMjc5NDd9.GS20N808CHNNaT0Ma1jOFg5M6wFpyLjUB72cl4mC1f0";
const AwaitingApproval = () => {
  let adminId = 1;
  const [awaitingAds, setAwaitingAds] = useState([]);
  const [result, setResult] = useState(false);

  let history = useHistory();
  useEffect(async () => {
    let adminService = new AdminService();
    adminService
      .getAwaitingAds(token)
      .then((value) => setAwaitingAds(value.data))
      .catch((err) => console.log(err.data));
  }, []);

  let trueObj = [
    {
      operationType: "0",
      path: "/isApproved",
      op: "replace",
      value: "true",
    },
  ];

  let process = {
    date: "01-01-2021",
    processResult: result,
    adminId: adminId,
  };

  let handleApprove = (id) => {
    let adminService = new AdminService();
    setResult(true);
    adminService.updateApprovalStatus(id, trueObj);
    adminService.addApprovalProcess(process);
    history.push("/awaitingapproval");
  };

  let handleDelete = (id) => {
    let adminService = new AdminService();
    setResult(false);
    adminService.deleteAdvertisement(id);

    adminService.addApprovalProcess(process);
    history.push("/awaitingapproval");
  };

  console.log(awaitingAds);
  return (
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>
              Advertisement Details
            </Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Is Approved?</Table.HeaderCell>
            <Table.HeaderCell singleLine>Seller's Nick Name</Table.HeaderCell>
            <Table.HeaderCell singleLine>Seller's email</Table.HeaderCell>
            <Table.HeaderCell>Approve</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {awaitingAds &&
            awaitingAds.map((list, index) => (
              <Table.Row style={{ marginTop: "10px" }} key={index}>
                <Table.Cell>
                  <Link
                    to={`/advertisementDetails/${list.memberId}/${list.bookAdvertisementId}`}
                  >
                    {" "}
                    <Icon size="large" name="zoom"></Icon>
                  </Link>
                </Table.Cell>
                <Table.Cell>{list.book.title}</Table.Cell>
                <Table.Cell>{`${list.isApproved}`}</Table.Cell>
                <Table.Cell>{list.member.nickName}</Table.Cell>
                <Table.Cell>{list.member.email}</Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => handleApprove(list.bookAdvertisementId)}
                  >
                    Approve
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
    </div>
  );
};

export default AwaitingApproval;
