import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { RPTPatrouilleComponent } from "../Pages/Rapport/Patrouille/RPTPatrouille.component";
import { Layout } from "../Layout/Layout";
import { UserProvider } from "../Component/Context/UserContext";
import { ModalProvider } from "../Component/Context/ModalContext";
import { RPTVolComponent } from "../Pages/CTD/RPTVol/RPTVol.component";
import { RPTPatrouilleIndiaComponent } from "../Pages/Metropolitan/RPTPatrouilleIndia/RPTPatrouilleIndia.component";
import { DetentionComponent } from "../Pages/Justice/Detention/Detention.component";
import { SaisieComponent } from "../Pages/Rapport/Saisie/Saisie.component";
import { TirComponent } from "../Pages/Rapport/Tir/Tir.component";
import { SabotComponent } from "../Pages/CTD/Sabot/Sabot.component";
import { FourriereComponent } from "../Pages/CTD/Fourriere/Fourriere.component";
import { ProbatoireComponent } from "../Pages/Probatoire/Probatoire.component";
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const AppRouter = () => (
  <ModalProvider>
    <Layout>
      <UserProvider>
        <Router className="h-full">
          <RouterPage path="/" pageComponent={<RPTPatrouilleComponent />} />
          <RouterPage
            path="/rapportVolSOB"
            pageComponent={<RPTVolComponent />}
          />
          <RouterPage
            path="/rapportPatrouilleIndia"
            pageComponent={<RPTPatrouilleIndiaComponent />}
          />
          <RouterPage
            path="/EnregistrementDetention"
            pageComponent={<DetentionComponent />}
          />
          <RouterPage path="/Saisie" pageComponent={<SaisieComponent />} />
          <RouterPage path="/Tir" pageComponent={<TirComponent />} />
          <RouterPage path="/Sabot" pageComponent={<SabotComponent />} />
          <RouterPage
            path="/Fourriere"
            pageComponent={<FourriereComponent />}
          />
          <RouterPage
            path="/Probatoire"
            pageComponent={<ProbatoireComponent />}
          />
        </Router>
      </UserProvider>
    </Layout>
  </ModalProvider>
);

export { AppRouter };
