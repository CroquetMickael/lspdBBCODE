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

const generateDeploiementCTD = (elements, code, setter) => {
  elements.setTitlePost(
    `(Rapport de déploiement) ${elements.firstName.toUpperCase()} - ${elements.type} (${elements.date})`
  );
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

const generateContravention = (elements, code, setter) => {
  elements.setTitlePost(
    `(Rapport de contravention) ${elements.personne.toUpperCase()} - ${elements.contravention} (${elements.date})`
  );
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

export {
  generateFourriere,
  generateSabot,
  generateDeploiementCTD,
  generateContravention,
};