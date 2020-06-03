function generateProbatoire(elements, code, setter) {
  const Code = `<div style="background-color: white; color: black; padding: 13px; border: 1px solid black; box-shadow: 0px 0px 2px #F2F2F2; border-top-radius: 3px; width:90%; text-align: left;margin:auto;width:70%">
    <center>[img]https://i.servimg.com/u/f74/19/84/45/72/i81a1u10.png[/img]
    
    [size=16][b]ÉVALUATION - CARNET[/b][/size]</center>
    
    [b]Nom de l'officier en probation: [/b] ${elements.probatoire}
    
    [b]Nom de l'officier formateur ainsi que son grade: [/b] ${
      elements.grade
    } ${elements.firstName} ${elements.lastName}
    
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
    elements.comportement === "NGOOD"
      ? "[X] L'officier-probatoire a un comportement neutre et passif."
      : "[-] L'officier-probatoire a un comportement neutre et passif."
  }
  ${
    elements.comportement === "NONE"
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

export { generateAutoEvaluation, generateProbatoire };
