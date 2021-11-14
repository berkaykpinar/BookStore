import React from "react";
import { Route } from "react-router-dom";
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

const Dashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn>
            <Route exact path="/" component={AdvertisementList} />
            <Route
              exact
              path="/searchresults/:word"
              component={SearchResults}
            />
            <Route
              exact
              path="/addAdvertisement"
              component={AddAdvertisement}
            />
            <Route
              exact
              path="/advertisementDetails/:memberId/:adId"
              component={AdvertisementDetails}
            />
            <Route exact path="/author/:authorId" component={AuthorPage} />
            <Route exact path="/bookdetails/:bookId" component={BookDetails} />
            <Route exact path="/library" component={LibraryPage} />
            <Route
              exact
              path="/myadvertisements"
              component={MyAdvertisements}
            />
            <Route
              exact
              path="/awaitingapproval"
              component={AwaitingApproval}
            />
            <Route exact path="/approvalLogs" component={ApprovalLog} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
