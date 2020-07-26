import React, { useState, useEffect } from "react";
import axios from "axios";
import { IActivity } from "../models/activity";
import { Header, Icon, List, Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivityDashBoard from "../../features/activities/dashboard/ActivityDashBoard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [SelectActivity, SelectsetActivity] = useState<IActivity[]| null >(null);
  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data) 
      });
  }, []);
  return (
    <div>
     <NavBar/>
     <Container style={{ marginTop: '7em'}}>
     <ActivityDashBoard activities={activities}/>
      </Container>
    </div>
  );
};

export default App;
