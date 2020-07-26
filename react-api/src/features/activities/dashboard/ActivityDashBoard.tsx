import React from "react";
import { Grid, List, GridColumn } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface IProps {
  activities: IActivity[]
}
const ActivityDashBoard:React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
      <ActivityList activities = {activities}/>
      </Grid.Column>
      <GridColumn width ={5}>
      <ActivityDetails/>
      <ActivityForm/>
      </GridColumn>
    </Grid>
  );
};
export default ActivityDashBoard;
