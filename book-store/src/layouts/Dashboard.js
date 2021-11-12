import React from "react";
import { Route } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";
import AddAdvertisement from "../pages/AddAdvertisement";
import AdvertisementList from "../pages/AdvertisementList";
import BookDetails from "../pages/BookDetails";
import SearchResults from "../pages/SearchResults";

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
              path="/bookdetails/:bookId/:memberId"
              component={BookDetails}
            />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
