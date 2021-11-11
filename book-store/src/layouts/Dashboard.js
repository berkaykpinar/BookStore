import React from "react";
import { Route } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";
import AdvertisementList from "../pages/AdvertisementList";

const Dashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn>
            <Route path="/" component={AdvertisementList} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
