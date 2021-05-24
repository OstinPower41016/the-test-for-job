import * as React from "react";

import "./index.scss";
import Container from "../../components/layout/container/container";
import NavBar from "../../components/NavBar";
import BaseCard from "../../components/UI/BaseCard";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <main className="main">
      <Container>
        <BaseCard className="main__content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error voluptas, similique
            dolore alias consequuntur mollitia laboriosam vel iste, facilis tenetur enim eligendi
            officiis nesciunt aliquam veniam eius dolor voluptatum eveniet.
          </p>
        </BaseCard>
      </Container>
    </main>
  );
};

export default Home;
