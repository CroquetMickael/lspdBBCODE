function generateRapportPatrouilleIndia(elements, code, setter) {
  const Code = `
    [table style="border-collapse:collapse;background-color:black;border-style:solid;border-width:1px;color:black;font-size:12px;font-family:arial;" align="center" width="100%"]
  [tr style=][td style="padding:10px" align="center"][img(150px,150px)]https://www.upload.ee/image/11747105/metrodivision.png[/img][/td]
  [td]
  [color=#ffffff][size=15][font=Arial Black]LOS SANTOS POLICE DEPARTMENT[/font]
   
  [b]DIVISION MÉTROPOLITAINE[/b]
  PÔLE ADMINISTRATIF
  Rapport de répression et d'assistance aux patrouilles[/size][/color]
  
  [/td]
  [/tr]
  
  
  [tr style=][td style="padding-left:85px;padding-right:85px;background-color:#ffffff;" colspan="2"]
  [b]Date:[/b] Le ${elements.date}, de ${elements.heureDebut}h à ${elements.heureFin}h
  
  [b]Opérateur(s) présent(s):[/b] ${elements.Operators}
  [b]Véhicule(s) utilisé(s):[/b] ${elements.Vehicle}
  [b]Chef d'équipage:[/b] ${elements.firstName} ${elements.lastName}
  
  [b]Intervention(s) effectuée(s) (+lieu/secteur):[/b]
  ${elements.intervention}
  [b]Informations complémentaires:[/b]
  ${code}
  [right][i]${elements.signature}[/i][/right]
  
  [/td]
  [/tr]
  [/table]
  `;
  setter(Code);
}

const generateExecutionMandat = (elements, code, setter) => {
  const Code = `[table style="border-collapse:collapse;background-color:black;border-style:solid;border-width:1px;color:black;font-size:12px;font-family:arial;" align="center" width="100%"]
    [tr style=][td style="padding:10px" align="center"][img(150px,150px)]https://www.upload.ee/image/11747105/metrodivision.png[/img][/td]
    [td]
    [color=#ffffff][size=15][font=Arial Black]LOS SANTOS POLICE DEPARTMENT[/font]
     
    [b]DIVISION MÉTROPOLITAINE[/b]
    PÔLE ADMINISTRATIF
    Rapport d'exécution de mandat[/size][/color]
    
    [/td]
    [/tr]
    
    
    [tr style=][td style="padding-left:85px;padding-right:85px;background-color:#ffffff;" colspan="2"]
    [b]Date:[/b] Le ${elements.date}, de ${elements.heureDebut}h à ${elements.heureFin}h
    [b]Lieu et secteur:[/b] ${elements.lieu}
    
    [b]Opérateur(s) présent(s) :[/b] ${elements.Operators}
    [b]Véhicule(s) utilisé(s):[/b] ${elements.Vehicle}
    [b]Uniforme:[/b] ${elements.uniforme}
    [b]Superviseur de l'opération:[/b] ${elements.superviseur}
    [b]Identité de la personne recherchée:[/b] ${elements.suspectName}
    
    [b]Résumé de l'intervention:[/b]
    ${code}
    
    [b]Bilan humain et matériel:[/b] [i](précisez le nombre)[/i]
    [list]
    [][b]Opérateur(s) blessé(s) durant ou après l'intervention:[/b] ${elements.operateurBlesse}
    [][b]Opérateur(s) décédé(s):[/b] ${elements.operateurDecede}
    [][b]Victime(s) civile(s):[/b] ${elements.victimeCivil}
    [][b]Équipement endommagé:[/b] ${elements.equipement} 
    [][b]Bâtiment(s) ou bien(s) détruit(s), dégradé(s):[/b] ${elements.batiment}
    [][b]Saisie effectuée:[/b] ${elements.saisie}
    [/list]
    
    [right][i]${elements.signature}[/i][/right]
    
    [/td]
    [/tr]
    [/table]`;
  setter(Code);
};

const generateIntervention = (elements, code, setter) => {
  const Code = `[table style="border-collapse:collapse;background-color:black;border-style:solid;border-width:1px;color:black;font-size:12px;font-family:arial;" align="center" width="100%"]
  [tr style=][td style="padding:10px" align="center"][img(150px,150px)]https://www.upload.ee/image/11747105/metrodivision.png[/img][/td]
  [td]
  [color=#ffffff][size=15][font=Arial Black]LOS SANTOS POLICE DEPARTMENT[/font]
   
  [b]DIVISION MÉTROPOLITAINE[/b]
  PÔLE ADMINISTRATIF
  Rapport d'intervention tactique[/size][/color]
  
  [/td]
  [/tr]
  
  
  [tr style=][td style="padding-left:85px;padding-right:85px;background-color:#ffffff;" colspan="2"]
  [b]Date:[/b] Le ${elements.date}, de ${elements.heureDebut}h à ${elements.heureFin}h
  [b]Lieu et secteur:[/b] ${elements.lieu}
  
  [b]Type d'intervention:[/b] ${elements.intervention}
  [b]Opérateur(s) présent(s):[/b] ${elements.Operators}
  [b]Véhicule(s) utilisé(s):[/b] ${elements.Vehicle}
  [b]Superviseur de l'opération:[/b] ${elements.superviseur}
  [b]Superviseur(s) du Bureau Central:[/b] ${elements.superviseurBCO}
  [b]L'équipe tactique du Bureau Fédéral a été présente?[/b] ${elements.FBI}
  
  [b]Résumé de l'intervention:[/b]
  ${code}
  
  [b]Bilan humain et matériel:[/b]
  [list]
  [][b]Suspect(s) interpellé(s) (en vie):[/b] ${elements.suspectVivant}
  [][b]Suspect(s) abattu(s) par le SWAT:[/b] ${elements.suspectAbattut}
  [][b]Suspect(s) suicidé(s):[/b] ${elements.suspectSuicide}
  [][b]Otage(s) libéré(s) sans blessure grave:[/b] ${elements.otage}
  [][b]Otage(s) libéré(s) avec blessure grave:[/b] ${elements.otageGrave}
  [][b]Otage(s) décédé(s) avant ou durant l'assaut:[/b] ${elements.otageDecede}
  [][b]Opérateur(s) blessé(s) durant ou après l'intervention:[/b] ${elements.operateurBlesse}
  [][b]Opérateur(s) décédé(s):[/b] ${elements.operateurDecede}
  [][b]Victime(s) civile(s):[/b] ${elements.victimeCivil}
  [][b]Équipement endommagé:[/b] ${elements.equipement} 
  [][b]Bâtiment(s) ou bien(s) détruit(s), dégradé(s):[/b] ${elements.batiment}
  [][b]Saisie effectuée:[/b] ${elements.saisie}
  [/list]
  
  [right][i]${elements.signature}[/i][/right]
  
  [/td]
  [/tr]
  [/table]`;
  setter(Code);
};

export {
  generateRapportPatrouilleIndia,
  generateIntervention,
  generateExecutionMandat,
};
