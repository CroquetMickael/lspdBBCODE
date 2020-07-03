function generateEmail(elements, code, setter) {
  const Code = `<style> .ampress-mtop {width: 100%; height: auto; text-align: left; color: white; padding:6px;background-color: #003964; color: white; font: Arial;font-size:17px;} .ampress-mb {width: 100%; background-color: white; height: auto; padding:6px; border:1px solid black; color: black;}</style> <div class="ampress-mtop"> <div style="float:left">[img(75px,75px)]https://i.servimg.com/u/f62/15/10/04/98/14094910.png[/img]</div><center>LOS SANTOS POLICE DEPARTMENT</center></div><div class="ampress-mb">
    [center][size=18]E-MAIL INTERNE[/size][/center]
    
    [b][img]https://2img.net/image.noelshack.com/fichiers/2016/10/1457377145-forward.png[/img] [/b]de [b] ${
      elements.grade
    } ${elements.firstName} ${
    elements.lastName
  }[/b] [color=#424040](${elements.lastName.toLowerCase()}.${elements.firstName.toLowerCase()}@lspd-intra.com)[/color]
    [img]https://2img.net/image.noelshack.com/fichiers/2016/10/1457377150-down.png[/img] au [b]${
      elements.gradeReceveur
    } ${elements.nomReceveur} ${
    elements.prenomReceveur
  }[/b] [color=#424040](${elements.prenomReceveur.toLowerCase()}.${elements.nomReceveur.toLowerCase()}@lspd-intra.com)
    [/color][img]https://2img.net/image.noelshack.com/fichiers/2016/10/1457377721-green-tag.png[/img] Objet: [i]${
      elements.objetEmail
    }[/i]
    [img]https://2img.net/image.noelshack.com/fichiers/2016/10/1457377762-clock.png[/img] ${
      elements.date
    }
    
    <div style="width: 100%; background-color: #f2f2f2; height: auto; padding:6px; border:1px dashed;">
    ${elements.gradeReceveur} ${elements.nomReceveur},
    
    ${code}
    
    </div>
    [right][b]${elements.signature}[/b][/right]
    </div>`;
  setter(Code);
}

function generateLetter(elements, code, setter) {
  const Code = `<div style="border: 1px solid #000000; background-image: url(https://nsa38.casimages.com/img/2015/11/07/151107050411686728.png); background-repeat:repeat-y; background-color: #fafafa; padding-left: 40px;">

  <div style="margin: 0 50px;text-align:center;">
  [img]https://i.servimg.com/u/f62/15/10/04/98/14094910.png[/img]
  
  [size=26][b]DÉPARTEMENT DE POLICE DE LOS SANTOS[/b][/size]
  [size=22]CORRESPONDANCE INTER-DEPARTEMENTALE[/size]
  </div>
  
  <div style="padding: 40px;background-color:#ffffff;margin: 0 50px;box-shadow: 0px 0px 1px #b1b2b2;">${code}</div>
  
  <div style="margin: 0 50px;text-align:right;">
  Le ${elements.date},
  
  [b]Signature.[/b]
  ${elements.signature}
  </div>
  
  </div>`;
  setter(Code);
}

export { generateEmail, generateLetter };
