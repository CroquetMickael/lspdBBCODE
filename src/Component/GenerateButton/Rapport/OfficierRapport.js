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

export { generateRapportPatrouille, generateSaisie, generateTir };
