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
import { EmailComponent } from "../Pages/Autre/Email/Email.component";
import { MEAComponent } from "../Pages/Justice/Mise en accusation/MEA.component";
import { PlainteARComponent } from "../Pages/Plainte/LRP/Nondyna/PlainteAR";
import { PlainteAIComponent } from "../Pages/Plainte/LRP/Nondyna/PlainteAI";
import { PlainteResoluCIComponent } from "../Pages/Plainte/LRP/Nondyna/PlainteResoluCI";
import { PlainteCSSComponent } from "../Pages/Plainte/LRP/ClassementSansSuite";
import { PlainteResolueMEAComponent } from "../Pages/Plainte/LRP/ResolueMEA";
import { PlainteViergeComponent } from "../Pages/Plainte/LRP/PlainteVierge";
import { PlainteReponseDoComponent } from "../Pages/Plainte/LRP/ReponseDo";
import { PlainteAffectationComponent } from "../Pages/Plainte/LRP/Affectation";
import { PlainteComponent } from "../Pages/Plainte/LRP/Plainte/Plainte";
import { OuvertureEnqueteComponent } from "../Pages/Plainte/LSPD/OuvertureEnquete/OuvertureEnquete";
import { OuvertureEnqueteAutreComponent } from "../Pages/Plainte/LSPD/OuvertureEnqueteAutre/OuvertureEnqueteAutre";
import { OuvertureEnqueteLRPComponent } from "../Pages/Plainte/LSPD/OuvertureEnqueteLRP/OuvertureEnqueteLRP";
import { CSSEnqueteComponent } from "../Pages/Plainte/LSPD/CSSEnquete/CSSEnquete";
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
          <RouterPage path="/email" pageComponent={<EmailComponent />} />
          <RouterPage path="/mea" pageComponent={<MEAComponent />} />
          <RouterPage path="plainte" pageComponent={<PlainteComponent />} />
          <RouterPage
            path="/plainteAR"
            pageComponent={<PlainteARComponent />}
          />
          <RouterPage
            path="/plainteAI"
            pageComponent={<PlainteAIComponent />}
          />
          <RouterPage
            path="/plainteRCI"
            pageComponent={<PlainteResoluCIComponent />}
          />
          <RouterPage
            path="/plainteCSS"
            pageComponent={<PlainteCSSComponent />}
          />
          <RouterPage
            path="/plainteMEA"
            pageComponent={<PlainteResolueMEAComponent />}
          />
          <RouterPage
            path="/plainteVierge"
            pageComponent={<PlainteViergeComponent />}
          />
          <RouterPage
            path="/plaintedo"
            pageComponent={<PlainteReponseDoComponent />}
          />
          <RouterPage
            path="/plainteCharge"
            pageComponent={<PlainteAffectationComponent />}
          />
          <RouterPage
            path="/ouverturePlainte"
            pageComponent={<OuvertureEnqueteComponent />}
          />
          <RouterPage
            path="/ouverturePlainteAutre"
            pageComponent={<OuvertureEnqueteAutreComponent />}
          />
          <RouterPage
            path="/ouverturePlainteLRP"
            pageComponent={<OuvertureEnqueteLRPComponent />}
          />
            <RouterPage
            path="/cssEnquete"
            pageComponent={<CSSEnqueteComponent />}
          />
        </Router>
      </UserProvider>
    </Layout>
  </ModalProvider>
);

export { AppRouter };
