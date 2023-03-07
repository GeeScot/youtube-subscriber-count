import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetChannelIdQuery, useGetSubscriberCountQuery } from "./features/apiSlice";

const App = () => {
  const { username, goal } = useParams<{ username: string, goal: string }>();
  const { data: channelId } = useGetChannelIdQuery(username ?? skipToken);
  const { data: subscriberCount } = useGetSubscriberCountQuery(channelId ?? skipToken, {
    pollingInterval: 60000
  });

  return (
    <Container>
      <div>2023 !Youtube Sub Goal</div>
      <Goal>{ subscriberCount } / { goal }</Goal>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: inline-block;
  text-align: center;
  gap: 10px;

  padding: 10px 15px;

  border-radius: 50px;
  border: 2px solid red;
  background-color: red;

  color: #ffffff;
`;

const Goal = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
