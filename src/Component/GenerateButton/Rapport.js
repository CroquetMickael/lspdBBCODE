function generateRapportPatrouille(elements, code, setter) {
  const Code = `
<div align="center"><div style="width: 100%;background-color: #fafafa;border: 1px solid black; color: black;padding:13px;font-family: 'Arial', sans-serif; text-align: left;"><center>[img(100px,100px)]https://i.imgur.com/Iqlaj5z.png[/img]
[b][size=18]LOS SANTOS POLICE DEPARTMENT[/size][/b]
[size=14]RAPPORT PATROUILLE/INCIDENT[/size]</center>

[b]Type de rapport[/b]: ${elements.Type}
[b]Agent(s) présent(s)[/b]:  ${elements.Officers}
[b]Date, heure et lieu[/b]:${elements.date}
[b]Contexte[/b]:
${code}
[right]
[b]Signature[/b]  ${elements.signature}[/right]
</div></div>`;
  setter(Code);
}
function generateRapportPatrouilleIndia(elements, code, setter) {
  const Code = `
  [table style="border-collapse:collapse;background-color:black;border-style:solid;border-width:1px;color:black;font-size:12px;font-family:arial;" align="center" width="100%"]
[tr style=][td style="padding:10px" align="center"][img(140px,140px)]https://cdn.discordapp.com/attachments/560758312300445707/572854744305893386/14641810.png[/img][/td]
[td]
[color=#ffffff][size=15][font=Arial Black]LOS SANTOS POLICE DEPARTMENT[/font]
 
[b]BUREAU DES OPÉRATIONS SPÉCIALES[/b]
PÔLE ADMINISTRATIF
Rapport de patrouille INDIA[/size][/color]

[/td]
[/tr]


[tr style=][td style="padding-left:85px;padding-right:85px;background-color:#ffffff;" colspan="2"]

[center][b]Date:[/b] ${elements.date}
[b]De[/b] ${elements.heureDebut} [b]h à[/b] ${elements.heureFin} [b]h[/b][/center]
[b]Véhicule(s) utilisés :[/b] ${elements.Vehicle}
[b]Opérateurs présents :[/b] ${elements.Operators}
[b]Chef de l'équipage :[/b] ${elements.firstName} ${elements.lastName}

${code}

[/td]
[/tr]

[/table]
`;
  setter(Code);
}

function generateFormDetention(elements, code, setter) {
  elements.setTitlePost(`${elements.suspectName} (${elements.date})`);
  const Code = `
  <div style="border: 1px solid #000000; background-image: url(https://nsa38.casimages.com/img/2015/11/07/151107050411686728.png); background-repeat:repeat-y; background-color: #fafafa; padding-left: 40px;">

<div style="margin: 0 50px;text-align:center;">
[img]https://i.servimg.com/u/f62/15/10/04/98/14094910.png[/img]

[size=26][b]DÉPARTEMENT DE POLICE DE LOS SANTOS[/b][/size]
[size=22]ENREGISTREMENT EN DÉTENTION[/size]

</div>

<div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]SUSPECT[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">

[b]Identité du suspect[/b]: ${elements.suspectName}

[b]❯ A COMPLÉTER SI LE SUSPECT A SUBIT UN INTERROGATOIRE[/b].

${
  elements.miranda
    ? "[X] L'AVERTISSEMENT MIRANDA A BIEN ÉTÉ LU AVANT L'INTERROGATOIRE."
    : "[ ] L'AVERTISSEMENT MIRANDA A BIEN ÉTÉ LU AVANT L'INTERROGATOIRE."
}

[b]Le suspect a été assisté d'un conseiller juridique ?[/b]

${
  elements.conseil
    ? `[X] Oui, précisez l'identité du conseiller: ${elements.conseilName}
[] NON.`
    : `[] Oui, précisez l'identité du conseiller:
[X] NON.`
}


[b]Remarques sur l'interrogatoire (suspect coopératif/droit au silence...):[/b] ${
    elements.remarque
  }

[b]❯ A COMPLÉTER SI LE SUSPECT A UTILISER SON DROIT A UN APPEL TÉLÉPHONIQUE[/b].

[b]Numéro de la personne contactée: [/b] ${elements.contactNumber}

[b]Nature de la personne contactée:[/b]

${
  elements.nature === "JUR"
    ? "[X] Conseiller juridique"
    : "[ ] Conseiller juridique"
}
${elements.nature === "EMP" ? "[X] Employeur" : "[ ] Employeur"}
${elements.nature === "PRO" ? "[X] Proche" : "[ ] Proche"}
${
  elements.nature === "AUT"
    ? `[X] Autre, précisez ci-contre: ${elements.contactPersonne}`
    : "[ ] Autre, précisez ci-contre:"
}




</div>
<div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]INSTRUCTION JUDICIAIRE[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">
${code}
[size=10][color=grey](( A remplir si [b]OPTION 2.[/b] dans le cadre d'une [url=https://www.leroleplay.fr/viewtopic.php?id=43875]demande d'accusation[/url]. ))[/color][/size]
[b]Référence de la demande d'accusation[/b]: 

</div>

<div style="margin: 0 50px;text-align:right;">
Le ${elements.date},
[b]Signature.[/b]
${elements.signature}
</div>

</div>
`;
  setter(Code);
}

function generateSaisie(elements, code, setter) {
  const Code = `[table style="border-collapse:collapse;background-color:white;box-shadow: 0px 0px 1px black;color:black;font-family:Arial;border:1px solid grey;font-size:12px;border-radius:none;" align="center" width="100%|50"]
[tr style=][td style="padding:25px;"]
[b]DÉPÔT DE SAISIE[/b]

[b]Nom du suspect :[/b] ${elements.suspectName}
[b]Contexte de la saisie (bref résumé) :[/b] ${code}

[b]DROGUES[/b]
Indiquez la quantité dans les cases correspondantes.

[${elements.meth}] MÉTHAMPHÉTAMINE
[${elements.coc}] COCAÏNE
[${elements.cann}] CANNABIS
[${elements.stero}] STÉROÏDE
[${elements.hero}] HÉROÏNE

[b]ARMES[/b]
Indiquez la quantité dans les cases correspondantes.

[${elements.mm}] 9mm
[${elements.mmS}] 9mm silencieux
[${elements.de}] .50 (Desert Eagle)
[${elements.pompe}] Fusil à pompe
[${elements.uzi}] Micro SMG/Uzi
[${elements.mp5}] MP5
[${elements.ak}] AK-47
[${elements.m4}] M4
[${elements.tec9}] Tec-9
[${elements.rifle}] Country Rifle
[${elements.srifle}] Sniper Rifle
[${elements.rpg}] RPG

[b]AUTRES[/b]
Indiquez ici la nature et la quantité des autres effets saisies.

[spoiler=OOC]
${elements.log}
[/spoiler]

[/td]
[/tr]

[/table]
`;
  setter(Code);
}

function generateTir(elements, code, setter) {
  elements.setTitlePost(
    `Déclaration de tirs - ${elements.firstName.toUpperCase()} ${
      elements.lastName
    } (${elements.date})`
  );
  const Code = `<div style="border: 1px solid #000000; background-image: url(https://nsa38.casimages.com/img/2015/11/07/151107050411686728.png); background-repeat:repeat-y; background-color: #fafafa; padding-left: 40px;">

  <div style="margin: 0 50px;text-align:center;">
  [img]https://i.servimg.com/u/f62/15/10/04/98/14094910.png[/img]
  
  [size=26][b]DÉPARTEMENT DE POLICE DE LOS SANTOS[/b][/size]
  [size=22]FORMULAIRE DE DÉCLARATION D'USAGE DE SON ARME DE SERVICE[/size]
  </div>
  
  <div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]INFORMATION SUR L’EMPLOYÉ[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">
  
  [b]Nom et prénom(s) de l'employé[/b]: ${elements.firstName} ${
    elements.lastName
  }
  
  [b]Rang et affectation lors de l'usage[/b]: ${elements.rangAffec}
  
  </div>
  <div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]DÉCLARATION[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">
  
  [b]Superviseur(s) en service[/b] ("N.A" si aucun): ${elements.superviseur}
  
  [b]Officier en charge[/b] ("N.A" si aucun): ${elements.officierCharge}
  
  [b]Nom et prénom(s) du ou des témoins[/b]: ${elements.temoin} 
  
  [b]Nom et prénom(s) du ou des suspects[/b]: ${elements.suspectName}
  
  [b]Arme utilisée: [/b] ${elements.arme}
  
  [b]Nombre de munitions utilisées: [/b] ${elements.munition}
  
  [b]Date et heure de l'usage:[/b] ${elements.dateHeure}
  
  [b]Motif légal d'usage:[/b] ${elements.motif}
  
  [b]État de la cible:[/b]
  
  
${elements.type === "DEC" ? "[X] Décédé" : "[ ] Décédé"}
${elements.type === "GRAVE" ? "[X] Blessures graves" : "[ ] Blessures graves"}
${
  elements.type === "SUPP"
    ? "[X] Blessures superficielles"
    : "[ ] Blessures superficielles"
}
${elements.type === "NONE" ? `[X] Aucune blessure` : "[ ] Aucune blessure"}
  
  
  
  
  [b]Contexte:[/b]
  ${code}
  
  </div>
  
  <div style="margin: 0 50px;text-align:right;">
  Le ${elements.date},
  
  [b]Signature.[/b]
  ${elements.signature}
  
  </div>
  
  </div>
`;
  setter(Code);
}

function generateSabot(elements, code, setter) {
  elements.setTitlePost(
    `(Placement d'un sabot) ${elements.modeleVeh} - ${elements.plaqueVeh} (${elements.date})`
  );
  const Code = `<div style="background-color: white; color: black; padding: 13px; border: 1px solid black; box-shadow: 0px 0px 2px #F2F2F2; border-top-radius: 3px; width:100%; text-align: left;margin:auto;width:100%">
  <center>[img]https://i.servimg.com/u/f74/19/84/45/72/i81a1u10.png[/img]</center>
  
  [center][size=18][b]FORMULAIRE DE PLACEMENT D'UN SABOT[/b][/size][/center]
  
  <h2></h2>
  
  <div style="width: 100%; background-color: #f2f2f2; height: auto; padding:6px; border:1px dashed;">
  
  [b][u][1] INFORMATIONS SUR L'OFFICIER[/u][/b]
  
  [list]
  [*]1.1 NOM DE L'OFFICIER: ${elements.firstName} ${elements.lastName}
  [*]1.2 GRADE DE L'OFFICIER: ${elements.Grade} 
  [*]1.3 ASSIGNATION DE L'OFFICIER: ${elements.Affectation} 
  [/list]
  
  [b][u][2] INFORMATIONS SUR LE VÉHICULE[/u][/b]
  
  [list]
  [*]2.1 MODÈLE DU VÉHICULE: ${elements.modeleVeh} 
  [*]2.2 PLAQUE DU VÉHICULE: ${elements.plaqueVeh} 
  [*]2.3 NOM DU PROPRIÉTAIRE: ${elements.proprio} 
  [*]2.4 PHOTOGRAPHIE DU VÉHICULE EN INFRACTION:
  [img]${elements.photoLink}[/img]
  [/list]
  
  [b][u][3] INFORMATIONS SUPPLÉMENTAIRES[/u][/b]
  
  [list]
  [*]3.1 RAISON DU PLACEMENT DU SABOT: ${elements.raison} 
  [*]3.2 DATE: ${elements.date} 
  [*]3.3 COMMENTAIRE A AJOUTER:
  ${code} 
  [/list]
  
  </div>
  </div>`;
  setter(Code);
}

function generateFourriere(elements, code, setter) {
  elements.setTitlePost(
    `(Placement en fourrière) ${elements.modeleVeh} - ${elements.plaqueVeh} (${elements.date})`
  );
  const Code = `<div style="background-color: white; color: black; padding: 13px; border: 1px solid black; box-shadow: 0px 0px 2px #F2F2F2; border-top-radius: 3px; width:100%; text-align: left;margin:auto;width:100%">
  <center>[img]https://i.servimg.com/u/f74/19/84/45/72/i81a1u10.png[/img]</center>
  
  [center][size=18][b]FORMULAIRE DE PLACEMENT EN FOURRIÈRE[/b][/size][/center]
  
  <h2></h2>
  
  <div style="width: 100%; background-color: #f2f2f2; height: auto; padding:6px; border:1px dashed;">
  
  [b][u][1] INFORMATIONS SUR L'OFFICIER[/u][/b]
  
  [list]
  [*]1.1 NOM DE L'OFFICIER: ${elements.firstName} ${elements.lastName}
  [*]1.2 GRADE DE L'OFFICIER: ${elements.Grade} 
  [*]1.3 ASSIGNATION DE L'OFFICIER: ${elements.Affectation} 
  [/list]
  
  [b][u][2] INFORMATIONS SUR LE VÉHICULE[/u][/b]
  
  [list]
  [*]2.1 MODÈLE DU VÉHICULE: ${elements.modeleVeh} 
  [*]2.2 PLAQUE DU VÉHICULE: ${elements.plaqueVeh} 
  [*]2.3 NOM DU PROPRIÉTAIRE: ${elements.proprio} 
  [/list]
  
  [b][u][3] INFORMATIONS SUPPLÉMENTAIRES[/u][/b]
  
  [list]
  [*]3.1 RAISON DU PLACEMENT EN FOURRIÈRE: ${elements.raison} 
  [*]3.2 DATE: ${elements.date} 
  [*]3.3 COMMENTAIRE A AJOUTER:
  ${code} 
  [/list]
  
  </div>
  </div>`;
  setter(Code);
}

function generateProbatoire(elements, code, setter) {
  const Code = `<div style="background-color: white; color: black; padding: 13px; border: 1px solid black; box-shadow: 0px 0px 2px #F2F2F2; border-top-radius: 3px; width:90%; text-align: left;margin:auto;width:70%">
  <center>[img]https://i.servimg.com/u/f74/19/84/45/72/i81a1u10.png[/img]
  
  [size=16][b]ÉVALUATION - CARNET[/b][/size]</center>
  
  [b]Nom de l'officier en probation: [/b] ${elements.probatoire}
  
  [b]Nom de l'officier formateur ainsi que son grade: [/b] ${elements.grade} ${
    elements.firstName
  } ${elements.lastName}
  
  [b]Selon une patrouille effectuée le:[/b] ${elements.date}
  
  [size=16][b][u]Sommaire des compétences acquises :[/u][/b][/size]
  
  [size=13][b]A. [u]Communications radios:[/u][/b][/size]

${
  elements.comRadio === "XGOOD"
    ? "[X] S'exprime parfaitement en radio tout en étant clair, court et concis."
    : "[-] S'exprime parfaitement en radio tout en étant clair, court et concis."
}
${
  elements.comRadio === "GOOD"
    ? "[X] S'exprime bien en radio."
    : "[-] S'exprime bien en radio."
}
${
  elements.comRadio === "MGOOD"
    ? "[X] S'exprime en radio avec difficultés."
    : "[-] S'exprime en radio avec difficultés."
}
${
  elements.comRadio === "NGOOD"
    ? "[X] Communications radios non-acquises."
    : "[-] Communications radios non-acquises."
}
${elements.comRadio === "NONE" ? `[X] Non-évalué.` : "[-] Non-évalué."}
  
[size=13][b]B. [u]Connaissance sur les procédures:[/u][/b][/size]
${
  elements.conProc === "XGOOD"
    ? "[X] Les procédures ont été acquises et parfaitement utilisées durant la patrouille."
    : "[-] Les procédures ont été acquises et parfaitement utilisées durant la patrouille."
}
${
  elements.conProc === "GOOD"
    ? "[X] Les procédures ont été acquises mais mal utilisées."
    : "[-] Les procédures ont été acquises mais mal utilisées."
}
${
  elements.conProc === "MGOOD"
    ? "[X] Les procédures sont à revoir."
    : "[-] Les procédures sont à revoir."
}
${
  elements.conProc === "NGOOD"
    ? "[X] Aucune connaissance des procédures."
    : "[-] Aucune connaissance des procédures."
}
${elements.conProc === "NONE" ? `[X] Non-évalué.` : "[-] Non-évalué."}
  

[size=13][b]C. [u]Comportement durant la patrouille:[/u][/b][/size]
${
  elements.comportement === "XGOOD"
    ? "[X] L'officier-probatoire est dynamique et il veut apprendre."
    : "[-] L'officier-probatoire est dynamique et il veut apprendre."
}
${
  elements.comportement === "NONE"
    ? "[X] L'officier-probatoire a un comportement neutre et passif."
    : "[-] L'officier-probatoire a un comportement neutre et passif."
}
${
  elements.comportement === "NGOOD"
    ? "[X] L'officier-probatoire a un comportement inacceptable."
    : "[-] L'officier-probatoire a un comportement inacceptable."
}
  
  
[size=13][b]D. [u]Conduite du véhicule:[/u][/b][/size]
${
  elements.conduite === "XGOOD"
    ? "[X] Conduite parfaite durant diverses situations."
    : "[-] Conduite parfaite durant diverses situations."
}
${
  elements.conduite === "NGOOD"
    ? "[X] Conduite à revoir."
    : "[-] Conduite à revoir."
}
${elements.conduite === "NONE" ? "[X] Non-évalué." : "[-] Non-évalué."}
  
[size=13][b]E. [u]Avis général:[/u][/b][/size]
${elements.AvisG === "XGOOD" ? "[X] Positif." : "[-] Positif."}
${elements.AvisG === "NGOOD" ? "[X] Négatif." : "[-] Négatif."}
${elements.AvisG === "NONE" ? "[X] Neutre." : "  [-] Neutre."}

  [size=16][b][u]Notifications diverses:[/u][/b][/size]
  
  [size=13][b]1. Incident(s) produit(s) durant la patrouille:[/b][/size]
  [quote][i]Rapports d'incidents survenus durant la patrouille.[/i]
  ${elements.incident}
  [/quote]
  
  [size=13][b]2. Commentaire à ajouter:[/b][/size]
  
  [quote][i]Commentaire adressé à la hiérarchie décrivant le comportement, les aptitudes, les défauts et le potentiel du probatoire au sein du département.[/i]
  ${code}
  [/quote]
  
  [hr]
  
  [spoiler="OOC"]
  [b]A. Expressions du personnage:[/b]
${
  elements.expresOOC === "XGOOD"
    ? "[X] Sait parfaitement animer une conversation."
    : "[-] Sait parfaitement animer une conversation."
}
${
  elements.expresOOC === "GOOD"
    ? "[X] Participe à une conversation sans pour autant l'animer."
    : "[-] Participe à une conversation sans pour autant l'animer."
}
${
  elements.expresOOC === "NGOOD"
    ? "[X] Reste passif, silencieux."
    : "[-] Reste passif, silencieux."
}
${elements.expresOOC === "NONE" ? "[X] Non-évalué." : "  [-] Non-évalué."}
  
  [b]B. Émotions du personnage  (/me, /do, /ame...):[/b]
${
  elements.emotionOOC === "XGOOD"
    ? "[X] Sait régulièrement mettre en avant les émotions de son personnage."
    : "[-] Sait régulièrement mettre en avant les émotions de son personnage."
}
${
  elements.emotionOOC === "GOOD"
    ? "[X] Sait parfois mettre en avant les émotions de son personnage (peut mieux faire)."
    : "[-] Sait parfois mettre en avant les émotions de son personnage (peut mieux faire)."
}
${
  elements.emotionOOC === "MGOOD"
    ? "[X] Ne sait que très peu mettre en avant son personnage, ou pas de manière assez détaillée."
    : "[-] Ne sait que très peu mettre en avant son personnage, ou pas de manière assez détaillée."
}
${elements.emotionOOC === "NGOOD" ? "[X] Néant." : "[-] Néant."}
${elements.emotionOOC === "NONE" ? "[X] Non-évalué." : "  [-] Non-évalué."}
  
  [b]C. Évolution du personnage dans la période probatoire:[/b]
  [size=10][u]Phase 1:[/u] On attend d'un nouveau probatoire, un roleplay similaire à une recrue (appelle ses formateurs, monsieur ou madame, avec comportement très protocolaire). Avec selon les personnages, des interactions allant de la surprise, au choc, la peur, le stress (...) face à ce nouveau monde découvert.
  [u]Phase 2:[/u] On attend d'un probatoire avec un peu d'ancienneté, une évolution qui s'approche peu à peu de l'officier 2, mais qui de part son statut probatoire, garde un grand respect pour ses formateurs, et ne prend pas la confiance trop rapidement.
  
  La justification de cette notation doit être détaillée dans les remarques.[/size]

${
  elements.evolutionOOC === "XGOOD"
    ? "[X] Évolution en accord avec les attentes."
    : "[-] Évolution en accord avec les attentes."
}
${
  elements.evolutionOOC === "GOOD"
    ? "[X] Évolution correcte, mais peut mieux faire."
    : "[-] Évolution correcte, mais peut mieux faire."
}
${
  elements.evolutionOOC === "NGOOD"
    ? "[X] Évolution mal jouée."
    : "[-] Évolution mal jouée."
}
${elements.evolutionOOC === "NONE" ? "[X] Non-évalué." : "  [-] Non-évalué."}
  
  [b]D. Remarques[/b]
  ${elements.remarqueOOC}
[/spoiler]
</div>`;
  setter(Code);
}

const generateAutoEvaluation = (elements, code, setter) => {
  const Code = `<div style="background-color: white; color: black; padding: 13px; border: 1px solid black; box-shadow: 0px 0px 2px #F2F2F2; border-top-radius: 3px; width:90%; text-align: left;margin:auto;width:70%">
  <center>[img]https://i.servimg.com/u/f74/19/84/45/72/i81a1u10.png[/img]
  
  [size=16][b]AUTO-ÉVALUATION - CARNET[/b][/size]</center>
  
  [b]Nom de l'officier en probation: [/b] ${elements.firstName} ${elements.lastName}
  
  [b]Nom du second officier probatoire, si Adam: [/b] ${elements.probatoire2}
  
  [b]Selon une patrouille effectuée le:[/b] ${elements.date}
  
  [size=16][b][u]Auto-évaluation:[/u][/b][/size]
  Les difficultés mentionnées seront revues par un officier supérieur ultérieurement. Le fait d'indiquer une difficulté permet de revoir les lacunes plus rapidement et sert ainsi la formation de l'officier probatoire.
  
  [size=13][b]1. Difficultés rencontrées:[/b][/size]
  
  [quote][i]Rapports d'incidents survenus durant la patrouille; hésitations sur une procédure (...).[/i]
  ${elements.incident}
  [/quote]
  
  [size=13][b]2. Rapport:[/b][/size]
  
  [quote][i]Rapport de patrouille signé situant le contexte.[/i]
  ${code}
  [/quote]
  
  [hr]
  
  </div>`;
  setter(Code);
};

const generateDeploiementCTD = (elements, code, setter) => {
  const Code = `[table style="background-color:white;color:black;font-family:Arial;font-size:12px;" align="center" width="100%|50"]
  [tr style=][td style="padding:25px;"][size=18][b]• RAPPORT DE DÉPLOIEMENT - DIVISION CENTRALE DU TRAFIC[/b][/size]
  
  [u][b]DATE, TRANCHE HORAIRE DE LA PATROUILLE ET SECTEUR DE LA PATROUILLE :[/b][/u] ${
    elements.date
  } - ${elements.heureDebut} à ${elements.heureFin} - Secteur ${
    elements.secteur
  }
  [u][b]UNITÉ DÉPLOYÉE :[/b][/u] ${
    elements.type === "TOMS" ? "TOM (sérigraphiée)" : `${elements.type}`
  }
  
  [u][b]ACTIONS MENÉES :[/b][/u]
  ${elements.actions}
  [u][b]COMMENTAIRE A AJOUTER :[/b][/u]
  ${code}

  
  
  
  [i]${elements.signature}[/i][/td]
  [/tr]
  [/table]`;
  setter(Code);
};

const generateMandat = (elements, code, setter) => {
  elements.setTitlePost(`${elements.suspectName} (${elements.type})`);
  const Code = `<div style="border: 1px solid #000000; background-image: url(https://nsa38.casimages.com/img/2015/11/07/151107050411686728.png); background-repeat:repeat-y; background-color: #fafafa; padding-left: 40px;">

  <div style="margin: 0 50px;text-align:center;">
  [img]https://i.servimg.com/u/f62/15/10/04/98/14094910.png[/img]
  
  [size=26][b]DÉPARTEMENT DE POLICE DE LOS SANTOS[/b][/size]
  [size=22]DEMANDE DE MANDAT[/size]
  
  </div>
  
  <div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]INFORMATIONS[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">
  [b]Nom et prénom(s) de l'employé[/b]: ${elements.firstName} ${elements.lastName}
  [b]Date et heure des faits[/b] (sauf enquête): ${elements.dateFait}
  [b]Type de mandat demandé[/b]: ${elements.type}
  </div>
  
  <div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]SUSPECT CONCERNÉ[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">
  [b]Identité du suspect[/b]: ${elements.suspectName}
  [b]Lieu de résidence[/b]: ${elements.lieu}
  </div>
  
  <div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]CONTEXTE[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">
  ${code}
  </div>
  
  <div style="height: auto; text-align: center; padding:6px;background-color: #003964; color: white ;font-size:17px;padding: 20px 40px;margin: 0 50px;box-shadow: 0px 0px 1px #003964;">[b]ÉLÉMENTS À CHARGE[/b]</div><div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">
  ${elements.charge}
  </div>
  
  <div style="margin: 0 50px;text-align:right;">
  Le ${elements.date},
  [b]${elements.signature}[/b]
  </div>
  
  </div>`;
  setter(Code);
};

const generateContravention = (elements, code, setter) => {
  const Code = `<style> .philadidature {width:80%;border-top: 4px solid darkblue; font-family: 'Arial'; box-shadow: 0px 0px 2px black; background:white; padding:15px; }</style><br><center><div class="philadidature"><div style="float:left">[img(200px,200px)]https://2img.net/image.noelshack.com/fichiers/2019/26/7/1561926894-logo-td.png[/img]</div>



  [center][size=22][b]DÉPARTEMENT DE POLICE[/b][/size]
  [size=15]CENTRAL TRAFFIC DIVISION
  [/size][/center]
  
  
  
  [left]<h2>RAPPORT DE CONTRAVENTIONS</h2>[/left]
  
  [left][b]Prénom et NOM:[/b] ${elements.firstName} ${elements.lastName}
  [b]Grade et échelon:[/b] ${elements.Grade}
  
  [b]Nom de la personne réceptionné:[/b] ${elements.personne}
  [b]Contravention donné:[/b][i]${elements.contravention}[/i]
  [b]Lieu du contrôle:[/b] ${elements.lieu}
  
  
  
  [/left]
  [right][b]${elements.date}[/b][/right]
  [right][b]${elements.signature}[/b][/right]
  </div>
  
  [spoiler="Preuve contravention"]${code}[/spoiler]`;
  setter(Code);
};
export function generate(type, elements, code, setter) {
  elements.setTitlePost("");
  switch (type) {
    case "RAPT":
      generateRapportPatrouille(elements, code, setter);
      break;
    case "CTDDPL":
      generateDeploiementCTD(elements, code, setter);
      break;
    case "CONTRAV":
      generateContravention(elements, code, setter);
      break;
    case "RAPTINDIA":
      generateRapportPatrouilleIndia(elements, code, setter);
      break;
    case "DET":
      generateFormDetention(elements, code, setter);
      break;
    case "SAI":
      generateSaisie(elements, code, setter);
      break;
    case "TIR":
      generateTir(elements, code, setter);
      break;
    case "SABOT":
      generateSabot(elements, code, setter);
      break;
    case "FOUR":
      generateFourriere(elements, code, setter);
      break;
    case "PROB":
      generateProbatoire(elements, code, setter);
      break;
    case "MANDAT":
      generateMandat(elements, code, setter);
      break;
    case "PROBAUTO":
      generateAutoEvaluation(elements, code, setter);
      break;
    default:
      break;
  }
}
