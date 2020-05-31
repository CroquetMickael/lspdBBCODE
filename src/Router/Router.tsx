import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { RPTPatrouilleComponent } from "../Pages/Rapport/Patrouille/RPTPatrouille.component";
import { Layout } from "../Layout/Layout";
import { UserProvider } from "../Component/Context/UserContext";
import { ModalProvider } from "../Component/Context/ModalContext";
import { RPTPatrouilleIndiaComponent } from "../Pages/Metropolitan/RPTPatrouilleIndia/RPTPatrouilleIndia.component";
import { DetentionComponent } from "../Pages/Justice/Detention/Detention.component";
import { SaisieComponent } from "../Pages/Rapport/Saisie/Saisie.component";
import { TirComponent } from "../Pages/Rapport/Tir/Tir.component";
import { SabotComponent } from "../Pages/CTD/Sabot/Sabot.component";
import { FourriereComponent } from "../Pages/CTD/Fourriere/Fourriere.component";
import { EvaluationComponent } from "../Pages/Probatoire/Evaluation/Evaluation.component";
import { AutoEvaluationComponent } from "../Pages/Probatoire/AutoEvaluation/AutoEvaluation.component";
import { DeploiementCTD } from "../Pages/CTD/Deploiement/Deploiement.component";
import { ContraventionComponent } from "../Pages/CTD/Contravention/Contravention.component";
import { MandatComponent } from "../Pages/Justice/Mandat/Mandat.component";
import { ExecutionMandatComponent } from "../Pages/Metropolitan/ExecutionMandat/ExecutionMandat.component";
import { InterventionComponent } from "../Pages/Metropolitan/InterventionTactique/Intervention.component";
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const AppRouter = () => (
  <ModalProvider>
    <Layout>
      <UserProvider>
        <Router className="z-20 h-full">
          <RouterPage path="/" pageComponent={<RPTPatrouilleComponent />} />
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
            pageComponent={<EvaluationComponent />}
          />
          <RouterPage
            path="/AutoEvaluationProbatoire"
            pageComponent={<AutoEvaluationComponent />}
          />
          <RouterPage
            path="/DeploiementCTD"
            pageComponent={<DeploiementCTD />}
          />
          <RouterPage
            path="/ContraventionCTD"
            pageComponent={<ContraventionComponent />}
          />
          <RouterPage path="/Mandat" pageComponent={<MandatComponent />} />
          <RouterPage
            path="/ExecutionMandat"
            pageComponent={<ExecutionMandatComponent />}
          />
          <RouterPage
            path="/Intervention"
            pageComponent={<InterventionComponent />}
          />
        </Router>
      </UserProvider>
    </Layout>
  </ModalProvider>
);

export { AppRouter };
