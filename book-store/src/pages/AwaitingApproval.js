import { useEffect, useState } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const AwaitingApproval = () => {
  let adminId;
  const { auth } = useAuth();
  const { admin } = useAuth();
  admin?.adminId != undefined ? (adminId = admin.adminId) : (adminId = 1);
  const [awaitingAds, setAwaitingAds] = useState([]);
  const [result, setResult] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  let navigate = useNavigate();
  useEffect(() => {
    const getAwaitingApproval = async () => {
      try {
        const response = await axiosPrivate
          .get(`/getAwaitingAds`)
          .then((result) => {
            return result;
          });
        console.log(response);
        setAwaitingAds(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAwaitingApproval();
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
    date: new Date().toDateString(),
    processResult: result,
    adminId: adminId,
  };
  const addApprovalProcess = async () => {
    try {
      const response = await axiosPrivate
        .post(`/api/controller/process`, process)
        .then((result) => {
          return result;
        });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  let handleApprove = (id) => {
    const updateApprovalStatus = async () => {
      try {
        const response = await axiosPrivate
          .patch(`/api/controller/bookadvertisement/${id}`, trueObj)
          .then((result) => {
            return result;
          });
        console.log(response);
        setResult(true);
      } catch (error) {
        console.log(error);
      }
      navigate("/awaitingapproval");
    };

    updateApprovalStatus();
    addApprovalProcess();
  };

  let handleDelete = (id) => {
    setResult(false);

    const deleteApprovalProcess = async () => {
      try {
        const response = await axiosPrivate
          .patch(`/api/controller/bookadvertisement/delete/${id}`)
          .then((result) => {
            return result;
          });
        console.log(response);
        setResult(true);
      } catch (error) {
        console.log(error);
      }
      navigate("/awaitingapproval");
    };
    addApprovalProcess();
    deleteApprovalProcess();
    navigate("/awaitingapproval");
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
          {awaitingAds?.map((list, index) => (
            <Table.Row style={{ marginTop: "10px" }} key={index}>
              <Table.Cell>
                <Link
                  to={`/advertisementDetails/${list?.memberId}/${list?.bookAdvertisementId}`}
                >
                  {" "}
                  <Icon size="large" name="zoom"></Icon>
                </Link>
              </Table.Cell>
              <Table.Cell>{list?.book?.title}</Table.Cell>
              <Table.Cell>{`${list?.isApproved}`}</Table.Cell>
              <Table.Cell>{list?.member?.nickName}</Table.Cell>
              <Table.Cell>{list?.member?.email}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => handleApprove(list?.bookAdvertisementId)}
                >
                  Approve
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  negative
                  onClick={() => handleDelete(list?.bookAdvertisementId)}
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
