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
    ${elements.preuve}
    </div>
    
    <div style="margin: 0 50px;text-align:right;">
    Le ${elements.date},
    [b]${elements.signature}[/b]
    </div>
    
    </div>`;
  setter(Code);
};

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

function generateMEA(elements, code, setter) {
  elements.setTitlePost(`Peuple de San Andreas c. ${elements.suspectName}`);
  const Code = `[box=#000000][background=#343538][center][img]https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Seal_of_the_United_States_Department_of_Justice.svg/200px-Seal_of_the_United_States_Department_of_Justice.svg.png[/img][/center]
[font=Georgia][size=5][center][color=white][b][i]COUR DE JUSTICE DE SAN ANDREAS[/i][/b][/color][/size]

[color=white][size=3][b]Requête au Bureau du Procureur 
- 
MISE EN ACCUSATION[/size][/b][/color][/center][/font]

[/background][background=#ffffff]

[center][color=black][size=4][i][b][font=Palatino Linotype]I. LE DEMANDEUR[/font][/size][/b][/i][/center][/color]

[quote] 


[color=black][b]Identité complète :[/b] ${elements.firstName} ${
    elements.lastName
  }[/color]

[color=black][b]Profession :[/b] Officier de police[/color][/quote]

[center][color=black][size=4][i][b][font=Palatino Linotype]II. LE DÉFENDEUR[/font][/size][/b][/i][/center][/color]

[quote][color=black][b]Identité complète ((précisez également le pseudo forum)) :[/b] ${
    elements.suspectName
  } ((${elements.suspectNameOOC}))[/color]

[color=black][b]Profession :[/b] ${elements.suspectProfession}[/color]

[color=black][b]Rappel des faits (10 lignes MAXIMUM) :[/b] [/color]

[color=black]${elements.rappel}[/color]

[color=black][b]Quel est le statut du défendeur ? (cochez la mention utile) :[/b] [/color]

[color=black]
${elements.liberte === true ? "[X] En liberté" : "[] En liberté"}
${
  elements.liberte === false
    ? `[X] Mis aux arrêts
→ ${elements.dateFait}`
    : "[ ] Mis aux arrêts"
}
[/color]

[color=black][b]Le défendeur a-t-il bénéficié du régime de libération sous caution ? Si oui, pour quel montant et pour quelle(s) charge(s) ? :[/b] ${
    elements.caution
  }[/color][/quote]

[center][color=black][size=4][i][b][font=Palatino Linotype]III. DOCUMENTS ANNEXES[/font][/size][/b][/i][/center][/color]
${code}
[/background][background=#343538][/background][/box]`;
  setter(Code);
}

export { generateMandat, generateFormDetention, generateMEA };
