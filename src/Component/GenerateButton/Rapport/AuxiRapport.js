function generateObservation(elements, code, setter) {
    const Code = `[table style="border-collapse:collapse;background-color:white;color:black;font-family:arial;border:1px solid grey;font-size:12px;border-radius:none;" align="center" width="100%|50"]
[tr style=][td style="padding:15px;"][center][img]https://2img.net/image.noelshack.com/fichiers/2016/21/1464351619-sealseal5-copie.png[/img][/center]
    
[center][size=20][b]DÉPARTEMENT DE POLICE DE LOS SANTOS
RAPPORT D'OBSERVATION EN PATROUILLE[/b][/size][/center]
    
[b]Prénom NOM[/b]: ${elements.firstName} ${elements.lastName}
[b]Date et heure de la patrouille[/b]: ${elements.date} ${elements.heure}
[b]Durée de la patrouille[/b]: ${elements.duree}
[b]Qui avez-vous observé (ainsi que son grade)[/b]: ${elements.officierObserve}
    
[b]Bref résumé de la patrouille[/b]:
${code}
    
    
[right]${elements.signature}[/right]
[/td]
[/tr]
    
[/table]`
setter(Code);
}
function generateReclamation(elements, setter) {
    const Code =`<div style="width:90%;background-color:#f5f5f5;border:1px solid #A9A9A9;color:#000000;padding:12px;font-family:Arial, sans-serif;border-bottom:0px solid #FFFFFF;text-align:justify;margin-left:auto;margin-right:auto;">
    <div style="float:left;"><img src="https://2img.net/image.noelshack.com/fichiers/2016/21/1464351619-sealseal5-copie.png" alt="1464351619-sealseal5-copie.png" /></div> <div style="text-align:center;">
    
    
    [size=16][b]DÉPARTEMENT DE POLICE DE LOS SANTOS[/b][/size]
    [size=16]RÉCLAMATIONS RÉPARATIONS / CARBURANT[/size]
    
    </div>
    
    <div style="width:100%;border:1px solid #A9A9A9;background-color:#FFFFFF;color:#000000;height:auto;padding:12px;font-size:13px;">
    
    
    
    Prénom Nom: ${elements.firstName} ${elements.lastName}
    Grade: ${elements.grade}
    Numéro du véhicule: ${elements.numVeh}
    
    Motif (réparation/essence): ${elements.motif}
    Montant déboursé: ${elements.montant}
    
    [spoiler="Facture"][img]${elements.urlImage}[/img][/spoiler]
    
    [right]${elements.signature}[/right]
    
    </div></div>`
    setter(Code)
}

export {
    generateObservation,
    generateReclamation
}