import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { RPTPatrouilleComponent } from "../Pages/RPTPatrouille/RPTPatrouille.component";
import { Layout } from "../Layout/Layout";
import { UserProvider } from "../Component/Context/UserContext";
import { ModalProvider } from "../Component/Context/ModalContext";
import { RPTVolComponent } from "../Pages/RPTVol/RPTVol.component";
import { RPTPatrouilleIndiaComponent } from "../Pages/RPTPatrouilleIndia/RPTPatrouilleIndia.component";
import { DetentionComponent } from "../Pages/Detention/Detention.component";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const AppRouter = () => (
  <ModalProvider>
    <Layout>
      <UserProvider>
        <Router>
          <RouterPage path="/" pageComponent={<RPTPatrouilleComponent />} />
          <RouterPage path="/VolSOB" pageComponent={<RPTVolComponent />} />
          <RouterPage path="/PATINDIA" pageComponent={<RPTPatrouilleIndiaComponent />} />
          <RouterPage path="/detention" pageComponent={<DetentionComponent />} />
        </Router>
      </UserProvider>
    </Layout>
  </ModalProvider>
);

export { AppRouter };
