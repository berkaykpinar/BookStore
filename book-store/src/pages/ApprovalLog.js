import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AdminService from "../services/AdminService";
import { Table, Icon, Button } from "semantic-ui-react";
const ApprovalLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let adminService = new AdminService();
    adminService.getApprovalProcess().then((e) => setLogs(e.data));
  });

  return (
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Process Id</Table.HeaderCell>
            <Table.HeaderCell>Process Date</Table.HeaderCell>
            <Table.HeaderCell>Process Result</Table.HeaderCell>
            <Table.HeaderCell>Admin Id</Table.HeaderCell>
            <Table.HeaderCell>Admin NickName</Table.HeaderCell>
            <Table.HeaderCell singleLine>Admin's email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {logs &&
            logs.map((list, index) => (
              <Table.Row style={{ marginTop: "10px" }} key={index}>
                <Table.Cell>{list.processId}</Table.Cell>
                <Table.Cell>{`${list.date}`}</Table.Cell>
                <Table.Cell>
                  {" "}
                  {`${list.processResult}` == "true" ? "Positive" : "Negative"}
                </Table.Cell>
                <Table.Cell>{list.adminId}</Table.Cell>
                <Table.Cell>{list.admin.nickName}</Table.Cell>

                <Table.Cell>{list.admin.email}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ApprovalLog;
