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

function generateRapportVol(elements, code, setter) {
  const Code = `
  <style> .noa_suivi_fond {width: 80%,background-color: #f2f2f2;color: black;border: 1px solid grey;padding: 20px;text-align:left;}</style><div align="center"><div class="noa_suivi_fond">
[center][img(150px,150px)]https://i.gyazo.com/e1e62e5f6132392f92d8c140e88fbf48.png[/img][/center]
<br />
[center][size=18][b]RAPPORT DE VOL - OPÉRATEUR ${elements.lastName} ${elements.firstName}[/b][/size][/center]

<div style="width: 100%;color: black;padding: 10px;background-color: white;border: 1px solid black;">
[b]Date et et tranche horaire du vol[/b]: ${elements.date}
[b]Nature du vol[/b]: ${elements.type}
[b]Interventions menées[/b]:
${code}
[b]État de l'appareil/remarques[/b]:${elements.etat}

[right][b]Signature[/b]  ${elements.signature}[/right]
</div>
</div></div>
`;
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


export function generate(type, elements, code, setter) {
  switch (type) {
    case "RAPT":
      generateRapportPatrouille(elements, code, setter);
      break;
    case "RVOL":
      generateRapportVol(elements, code, setter);
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
      generateFourriere(elements,code,setter)
      break;
    default:
      break;
  }
}
