function generateOuvertureEnquete(elements, code, setter) {
  elements.setTitlePost(`PLAINTE - ${elements.idPlainte} - ${elements.titrePlainte}`);
  const Code = `<div style="border: 1px solid #000000; padding: 20px; background-color: rgb(255, 255, 255);"><div style="float:left">[img]https://www.upload.ee/image/11858112/Logo_LSPD_noir___blanc.png[/img]</div>
    [center][font=Impact][size=24]Bureau des investigations
    -
    Saisine par plainte[/size][/font][/center]
    
    
    
    
    
    La division d'enquête du département de police de la ville de Los Santos, San Andreas, ouvre une enquête suite au dépôt de la [u][b][url=${elements.lienPlainte}]plainte accessible à ce lien[/url][/b][/u].
    
    [b]Directeur d'enquête :[/b] ${elements.officierACharge}
    
    [b]Charges possibles (purement indicatif) :[/b]
    ${elements.infraction}
    
    [b]Synthèse de la plainte :[/b]
    ${code}
    
    </div>`;
  setter(Code);
}

export {
  generateOuvertureEnquete
}