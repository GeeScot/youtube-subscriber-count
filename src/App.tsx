import { useParams } from "react-router-dom";
import styled from "styled-components";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import AnimatedNumber from "react-animated-numbers";
import { useGetChannelIdQuery, useGetSubscriberCountQuery } from "./features/apiSlice";

const App = () => {
  const { username, goal } = useParams<{ username: string, goal: string }>();
  const { data: channelId } = useGetChannelIdQuery(username ?? skipToken);
  const { subscriberCount } = useGetSubscriberCountQuery(channelId ?? skipToken, {
    pollingInterval: 300000,
    selectFromResult: ({ data }) => {
      return { subscriberCount: data ?? 0 };
    }
  });

  return (
    <Container>
      <Header>2023 !Youtube Sub Goal</Header>
      <Goal>
        <AnimatedNumber
          includeComma
          animateToNumber={subscriberCount}
          configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            { mass: 1, tension: 210, friction: 180 },
          ]}
        />
        <div>&nbsp;/&nbsp;{ goal }</div>
      </Goal>
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

const Header = styled.div`
  margin-bottom: 5px;
`;

const Goal = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: bold;
`;
