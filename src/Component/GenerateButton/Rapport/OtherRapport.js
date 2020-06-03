function generateEmail(elements, code, setter) {
  const Code = `<style> .ampress-mtop {width: 100%; height: auto; text-align: left; color: white; padding:6px;background-color: #003964; color: white; font: Arial;font-size:17px;} .ampress-mb {width: 100%; background-color: white; height: auto; padding:6px; border:1px solid black; color: black;}</style> <div class="ampress-mtop"> <div style="float:left">[img(75px,75px)]https://i.servimg.com/u/f62/15/10/04/98/14094910.png[/img]</div><center>LOS SANTOS POLICE DEPARTMENT</center></div><div class="ampress-mb">
    [center][size=18]E-MAIL INTERNE[/size][/center]
    
    [b][img]https://2img.net/image.noelshack.com/fichiers/2016/10/1457377145-forward.png[/img] [/b]de [b] ${
      elements.firstName
    } ${
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
    Chef,
    
    ${code}
    
    </div>
    [right][b]${elements.signature}[/b][/right]
    </div>`;
  setter(Code);
}

export { generateEmail };
