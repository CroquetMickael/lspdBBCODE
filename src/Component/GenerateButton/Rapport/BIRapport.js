function generateOuvertureEnquete(elements, code, setter) {
  elements.setTitlePost(
    `PLAINTE - ${elements.idPlainte} - ${elements.titrePlainte}`
  );
  const Code = `<div style="border: 1px solid #000000; padding: 20px; background-color: rgb(255, 255, 255);"><div style="float:left">[img]https://www.upload.ee/image/11858112/Logo_LSPD_noir___blanc.png[/img]</div>
[center][font=Impact][size=24]Bureau des investigations
-
Saisine par plainte[/size][/font][/center]
    
    
    
    
    
La division d'enquête du département de police de la ville de Los Santos, San Andreas, ouvre une enquête suite au dépôt de la [u][b][url=https://www.leroleplay.fr/viewtopic.php?id=${elements.idPlainte}]plainte accessible à ce lien[/url][/b][/u].
    
[b]Directeur d'enquête :[/b] ${elements.officierACharge}
    
[b]Charges possibles (purement indicatif) :[/b]
${elements.infraction}
    
[b]Synthèse de la plainte :[/b]
${code}
    
</div>`;
  setter(Code);
}

function generateOuvertureEnqueteAutre(elements, code, setter) {
  elements.setTitlePost(
    `INITIATIVE - ${elements.datePlainte} - ${elements.titrePlainte}`
  );
  const Code = `<div style="border: 1px solid #000000; padding: 20px; background-color: rgb(255, 255, 255);"><div style="float:left">[img]https://www.upload.ee/image/11858112/Logo_LSPD_noir___blanc.png[/img]</div>
[center][font=Impact][size=24]Bureau des investigations
-
Saisine d'initiative[/size][/font][/center]
  
  
  
  
  
La division d'enquête du bureau d'investigation du Département de police de la ville de Los Santos, San Andreas, ouvre une enquête pénale dans le cadre des faits décrits ci-dessous.
  
[b]Directeur d'enquête :[/b]
${elements.officierACharge}
  
[b]Charges possibles (purement indicatif) :[/b]
${elements.infraction}
  
[b]Synthèse des faits :[/b]
${code}
  
</div>`;
  setter(Code);
}

function generateOuvertureEnqueteLRP(elements, code, setter) {
  elements.setTitlePost(
    `INITIATIVE - ${elements.idPlainte} - ${elements.titrePlainte}`
  );
  const Code = `<div style="border: 1px solid #000000; padding: 20px; background-color: rgb(255, 255, 255);"><div style="float:left">[img]https://www.upload.ee/image/11858112/Logo_LSPD_noir___blanc.png[/img]</div>
[center][font=Impact][size=24]Bureau des investigations
-
Saisine d'initiative[/size][/font][/center]





La division d'enquête du bureau d'investigation du LSPD [b][url=https://www.leroleplay.fr/viewtopic.php?id=${elements.idPlainte}]a constaté la survenance vraisemblable de certains faits (( lien vers l'enquête fofo LeRP ))[/url][/b] et décide, de ce chef, d'ouvrir une enquête.

[b]Directeur d'enquête :[/b]
${elements.officierACharge}

[b]Charges possibles (purement indicatif) :[/b]
${elements.infraction}

[b]Synthèse des faits :[/b]
${code}

</div>`;
  setter(Code);
}

function generateCSSEnquete(elements, code, setter) {
  const Code = `<div style="border: 1px solid #000000; padding: 20px; background-color: rgb(255, 255, 255);"><div style="float:left">[img]https://www.upload.ee/image/11858112/Logo_LSPD_noir___blanc.png[/img]</div>
[center][font=Impact][size=24]Bureau des investigations
-
Clôture[/size][/font][/center]





Le directeur d'enquête demande la clôture de la présente enquête.

[b]Avec ou sans publication (indiquer le motif si pas de publication) :[/b]
${elements.publication}

[b]Infractions finalement retenues :[/b]
${elements.infraction === "" ? "AUCUNE" : elements.infraction}

[b]Synthèse des investigations :[/b]
${code}

[b]Issue :[/b]
${elements.issue}

</div>`;
  setter(Code);
}

export {
  generateOuvertureEnquete,
  generateOuvertureEnqueteLRP,
  generateOuvertureEnqueteAutre,
  generateCSSEnquete,
};
