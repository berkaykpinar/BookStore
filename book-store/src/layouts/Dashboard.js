import React from "react";
import { Route, Routes } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";
import AddAdvertisement from "../pages/AddAdvertisement";
import AdvertisementList from "../pages/AdvertisementList";
import AuthorPage from "../pages/AuthorPage";
import SearchResults from "../pages/SearchResults";
import AdvertisementDetails from "../pages/AdvertisementDetails";
import BookDetails from "../pages/BookDetails";
import LibraryPage from "../pages/LibraryPage";
import MyAdvertisements from "../pages/MyAdvertisements";
import AwaitingApproval from "../pages/AwaitingApproval";
import ApprovalLog from "../pages/ApprovalLog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RequireAuth from "../pages/ReuireAuth";
import Unauthorized from "../pages/Unauthorized";
import AdminLogin from "../pages/AdminLogin";

const Dashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn>
            <Routes>
              <Route exact path="/" element={<AdvertisementList />} />
              <Route
                exact
                path="/searchresults/:word"
                element={<SearchResults />}
              />

              <Route element={<RequireAuth allowedRoles={["User"]} />}>
                <Route
                  exact
                  path="/myadvertisements"
                  element={<MyAdvertisements />}
                />
                <Route
                  exact
                  path="/addAdvertisement"
                  element={<AddAdvertisement />}
                />
              </Route>
              <Route
                exact
                path="/advertisementDetails/:memberId/:adId"
                element={<AdvertisementDetails />}
              />
              <Route exact path="/author/:authorId" element={<AuthorPage />} />
              <Route
                exact
                path="/bookdetails/:bookId"
                element={<BookDetails />}
              />
              {/* protected route */}

              <Route exact path="/library" element={<LibraryPage />} />

              <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
                <Route
                  exact
                  path="/awaitingapproval"
                  element={<AwaitingApproval />}
                />
                <Route exact path="/approvalLogs" element={<ApprovalLog />} />
              </Route>

              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/login/admin" element={<AdminLogin />} />
              <Route exact path="/unauthorized" element={<Unauthorized />} />
            </Routes>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
