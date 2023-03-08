import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import AnimatedNumber from 'react-animated-numbers';
import {
  useGetChannelIdQuery,
  useGetSubscriberCountQuery,
} from './features/apiSlice';

const App = () => {
  const { username } = useParams<{ username: string }>();
  const { data: channelId } = useGetChannelIdQuery(username ?? skipToken);
  const { subscriberCount } = useGetSubscriberCountQuery(
    channelId ?? skipToken,
    {
      pollingInterval: 300000,
      selectFromResult: ({ data }) => {
        return { subscriberCount: data ?? 0 };
      },
    }
  );

  return (
    <Container className="container">
      <Header className="header"></Header>
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
        <div>/</div>
        <div className="goal"></div>
      </Goal>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: inline-block;
  text-align: center;
  gap: 10px;

  padding: 10px 15px;

  border-radius: 6px;
  background-color: #fec8d8;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  color: #0f0f0f;
`;

const Header = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
`;

const Goal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;

  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: bold;
`;
