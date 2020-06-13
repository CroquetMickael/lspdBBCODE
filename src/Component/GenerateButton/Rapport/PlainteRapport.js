function generatePlainteAR(setter) {
  const Code = `
    [background=#0a3d62][img]https://www.upload.ee/image/11854268/BI_DE_en-t_te.png[/img][/background][box=black]

    [center][size=5][color=black]Prise en charge de la plainte[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Madame, Monsieur,[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La division d'enquête du bureau des investigations vous confirme que votre plainte a bien été prise en charge.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]N'hésitez pas à nous faire part de toute information supplémentaire pouvant nous orienter dans le traitement de celle-ci. Vous pouvez nous joindre par cette même voie directement à la suite de cette plainte ou bien consulter [url=https://lspd-online.forumactif.com/]notre site internet[/url].[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]L'enquêteur en charge est susceptible de vous contacter téléphoniquement ou par courrier par cette même voie (( sur ce topic )). Merci donc de bien vouloir rester attentif et disponible. En cas d'absence de réponse à nos sollicitations, votre plainte pourrait être classée sans suite. Pour votre parfaite information sachez que nous ne faisons en principe de classement sans suite  d'une plainte que si l'absence de réponse du requérant (vous) nous empêche de mener l'enquête à son terme.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Soyez certain que les investigations nécessaires vont être menées. Si nous ne revenons pas à vous cela ne signifie pas que votre plainte reste lettre morte : nous n'informons pas nécessairement les requérants de l'évolution de la plainte. Vous pouvez toutefois nous demander un point de situation sur votre dossier par courrier (( à la suite de ce topic )). Nous vous remercions en revanche de nous laisser un temps raisonnable avant de nous relancer.[/color][/size][/justify]
    
    
    
    [center][size=5][color=black]Notice d'information[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Dans un soucis de transparence, le Département de police de la ville de Los Santos vous informe sur vos droits.[/color][/size][/justify]
    
    [background=white][spoiler=Des faits nouveaux se produisent, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]En cas d'urgence, nous vous rappelons qu'il convient de composer le 911.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Si la police est amenée à intervenir pour des faits relatifs à cette plainte nous vous conseillons de préciser aux officiers intervenant qu'une plainte est en cours à ce sujet. N'hésitez pas par ailleurs à noter la date, l'heure et le lieu de l'intervention ainsi qu'à demander aux officiers leurs noms ou bien le relever directement (il est inscrit sur leur uniforme). Il vous suffira alors de nous écrire (à la suite de votre plainte) en nous indiquant ces informations. Nous pourrons ainsi retrouver leur rapport d'intervention et traiter plus efficacement votre plainte.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je filmer ou enregistrer pour obtenir des preuves ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La Loi vous autorise à filmer et enregistrer tout ce qui se déroule en lieu public ou ouvert au public. Plus largement vous pouvez filmer ou enregistrer toute activité ou conversation à laquelle vous prenez part sauf si cet enregistrement viole la vie privée d'une personne. Un enregistrement viole la vie privée dès lors qu'il est fait clandestinement et qu'il permet d'enregistrer ce que fait ou dit une personne qui agissait pourtant à titre privé (lieu caché du public, murmures, etc).[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Sachez enfin que si vous êtes victime d'une infraction ou qu'une infraction est en cours, filmer peut être considéré comme un acte de légitime défense et donc être parfaitement légal si vous agissez de bonne foi et pour vous protéger ou protéger autrui.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je prendre un avocat ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Vous le pouvez mais il n'aura pas de pouvoir spécifique vis à vis de la police. En revanche il pourra vous accompagner, vous conseiller, mener les démarches à votre place et vous aider si l'affaire va jusque devant la Justice. Avoir un avocat est donc possible mais ni nécessaire ni obligatoire.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je demander une indemnisation de mon préjudice ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Il est possible de le demander mais c'est la Cour qui s'en charge, la police enquête et la Cour juge. Cela se fait donc séparément, en intentant une action devant la Cour. Soit en faisant un procès civil contre la personne soit en vous portant partie civile dans l'affaire ouverte contre elle (si la personne est identifiée et poursuivie). Plus d'informations à ce sujet dans la rubrique « Comment sera traitée ma plainte ? ».[/color][/size][/justify][/spoiler]
    
    [spoiler=Je ne suis pas satisfait du traitement donné à ma plainte, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Vous pouvez d'abord nous relancer pour nous expliquer les raisons de votre mécontentement. Le Département est au service des citoyens de notre bonne ville et essaie de donner les meilleures suites possibles aux sollicitations légitimes.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Si cela ne suffit pas sachez que vous avez le droit de vous adresser (idéalement dans cet ordre) au commandement du Bureau des investigations, à la Direction du LSPD ou enfin au Procureur (( sur leur section forum )) pour nous faire part de votre réclamation.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Enfin sachez que aux termes de l'[url=https://www.leroleplay.fr/viewtopic.php?pid=271026#p271026]article 62 du code de procédure pénale de San Andreas[/url] : << [i]toute personne peut, si sa plainte n'a pas abouti, ou si sa plainte n’a pas entraîné d’accusation dans des délais raisonnables, ou si sa plainte n’a pas reçu de réponse effective dans les 10 jours suite à son dépôt, accuser directement elle-même une autre personne par le biais d'une requête en accusation subsidiaire devant la cour suprême.[/i] >>[/color][/size][/justify][/spoiler]
    
    [spoiler=Comment sera traitée ma plainte ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La plainte est d'abord analysée en vue de déterminer si il y a motif à enquête ou non. Si les faits sont susceptibles de qualification pénale (c'est à dire qu'il y a peut être une infraction) alors une enquête est menée par un officier-enquêteur ou un inspecteur du bureau des investigations. L'enquête est menée sous la direction du commandement du bureau et le contrôle du Procureur d’État. [/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]L'enquête peut mener à un classement sans-suite si il n'y a pas lieu de poursuivre les investigations ou si les recherches ne permettent pas de déterminer l'identité d'une personne nous semblant coupable d'une infraction. Dans ce cas vous en serez informé et pourrez contester cette décision comme indiqué plus haut.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Si l'enquête permet d'identifier un ou plusieurs auteurs d'infractions à la loi pénale vous en serez informé. Nous nous assurerons alors de prendre les consignes de l'autorité judiciaire qui décidera de les poursuivre ou classer la plainte sans suites. Si ils sont arrêtés et poursuivis il y a deux possibilités :
      -  Soit ils sont jugés en comparution immédiate (( /juger )) auquel cas vous serez simplement informé de leur arrestation, si vous souhaitez demander une indemnité il vous faudra alors leur faire un procès au civil séparément, la police ne s'occupe que de l'aspect pénal (et non civil) de la chose ;
      -  Soit ils sont jugés en procédure normale (( procès avec un topic forum )), vous serez alors informé de leur arrestation et du fait qu'ils sont poursuivis, vous pourrez alors retrouver l'affaire sur le [url=https://www.leroleplay.fr/viewforum.php?id=118]site de la Cour, rubrique « affaires instruites »[/url] pour suivre l'affaire et (si vous le souhaitez) vous porter partie civile pour demander un dédommagement. L'avocat n'est pas obligatoire pour cela.
    [/color][/size][/justify]
    [/spoiler]
    
    [spoiler=Le dépôt de plainte est il payant ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Non, en revanche les fausses déclarations, écrites comme orales, peuvent mettre en jeu votre responsabilité civile voire pénale. [/color][/size][/justify][/spoiler][/background]
    
    [/box]
    
    `;
  setter(Code);
}

function generatePlainteAI(setter) {
  const Code = `[background=#0a3d62][img]https://www.upload.ee/image/11854268/BI_DE_en-t_te.png[/img][/background][box=black]

    [center][size=5][color=black]Compétence des affaires internes[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Madame, Monsieur,[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La division d'enquête du bureau des investigations vous confirme que votre plainte a bien été prise en charge. S'agissant de faits visant un officier du Département en sa qualité d'officier, le traitement de cette affaire relève toutefois de la compétence de la division des affaires internes (AI). Nous transmettons donc la procédure à ce service qui traitera la suite des investigations.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]N'hésitez pas à leur faire part de toute information supplémentaire pouvant nous orienter dans le traitement de celle-ci. Vous pouvez nous joindre par cette même voie directement à la suite de cette plainte ou bien consulter [url=https://lspd-online.forumactif.com/]notre site internet[/url].[/color][/size][/justify]
    
    
    
    
    [center][size=5][color=black]Notice d'information[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Dans un soucis de transparence, le Département de police de la ville de Los Santos vous informe sur vos droits.[/color][/size][/justify]
    
    [background=white][spoiler=Des faits nouveaux se produisent, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]En cas d'urgence, nous vous rappelons qu'il convient de composer le 911.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Si la police est amenée à intervenir pour des faits relatifs à cette plainte nous vous conseillons de préciser aux officiers intervenant qu'une plainte est en cours à ce sujet. N'hésitez pas par ailleurs à noter la date, l'heure et le lieu de l'intervention ainsi qu'à demander aux officiers leurs noms ou bien le relever directement (il est inscrit sur leur uniforme). Il vous suffira alors de nous écrire (à la suite de votre plainte) en nous indiquant ces informations. Nous pourrons ainsi retrouver leur rapport d'intervention et traiter plus efficacement votre plainte.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je filmer un officier de police en service ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Oui vous le pouvez dès lors que vous ne commettez pas d'intrusion ou d'autre infraction. Il est notamment illégal de s'introduire frauduleusement dans nos locaux ou parkings pour filmer nos officiers (ou pour tout autre motif d'ailleurs).[/color][/size][/justify][/spoiler]
    
    [spoiler=Les officiers de police doivent ils me donner leur nom si je le leur demande ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Oui dès lors que vous êtes de bonne foi. Si votre demande déconcentre les officiers, qu'elle les perturbe ou les met en danger ils n'ont en revanche aucune obligation de vous répondre. Dans tous les cas, les officiers en uniforme portent une barrette nominative sur l'uniforme au niveau de leur poche de veste gauche, vous y trouverez inscrit leur nom et prénom. Vous pouvez aussi relever le numéro de leur véhicule (( /DL, ID du véhicule )) s'il s'agit d'un véhicule sérigraphié. Attention, les demandes de mauvaises foi ayant pour but d'entraver l'action de la police peuvent être constitutives de délit.[/color][/size][/justify][/spoiler]
    
    [spoiler=Pourquoi les affaires internes sont elles compétentes ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Les affaires internes sont compétentes afin d'assurer une parfaite transparente. Leurs inspecteurs sont spécialisés dans ces enquêtes et ne patrouillent pas avec les autres officiers afin de garantir leur complète indépendance. Vous pouvez donc avoir toute confiance en cette division.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je prendre un avocat ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Vous le pouvez mais il n'aura pas de pouvoir spécifique vis à vis de la police. En revanche il pourra vous accompagner, vous conseiller, mener les démarches à votre place et vous aider si l'affaire va jusque devant la Justice. Avoir un avocat est donc possible mais ni nécessaire ni obligatoire.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je demander une indemnisation de mon préjudice ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Il est possible de le demander mais c'est la Cour qui s'en charge, la police enquête et la Cour juge. Cela se fait donc séparément, en intentant une action devant la Cour. Soit en faisant un procès civil contre la personne soit en vous portant partie civile dans l'affaire ouverte contre elle (si la personne est identifiée et poursuivie). Plus d'informations à ce sujet dans la rubrique « Comment sera traitée ma plainte ? ».[/color][/size][/justify][/spoiler]
    
    [spoiler=Je ne suis pas satisfait du traitement donné à ma plainte, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Vous pouvez d'abord nous relancer pour nous expliquer les raisons de votre mécontentement. Le Département est au service des citoyens de notre bonne ville et essaie de donner les meilleures suites possibles aux sollicitations légitimes.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Si cela ne suffit pas sachez que vous avez le droit de vous adresser (idéalement dans cet ordre) au commandement du Bureau des investigations, à la Direction du LSPD ou enfin au Procureur (( sur leur section forum )) pour nous faire part de votre réclamation.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Enfin sachez que aux termes de l'[url=https://www.leroleplay.fr/viewtopic.php?pid=271026#p271026]article 62 du code de procédure pénale de San Andreas[/url] : << [i]toute personne peut, si sa plainte n'a pas abouti, ou si sa plainte n’a pas entraîné d’accusation dans des délais raisonnables, ou si sa plainte n’a pas reçu de réponse effective dans les 10 jours suite à son dépôt, accuser directement elle-même une autre personne par le biais d'une requête en accusation subsidiaire devant la cour suprême.[/i] >>[/color][/size][/justify][/spoiler]
    
    [spoiler=Comment sera traitée ma plainte ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La plainte est d'abord analysée en vue de déterminer si il y a motif à enquête ou non. Si les faits sont susceptibles de qualification pénale (c'est à dire qu'il y a peut être une infraction) alors une enquête est menée par un officier-enquêteur ou un inspecteur du bureau des investigations. L'enquête est menée sous la direction du commandement du bureau et le contrôle du Procureur d’État. [/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]L'enquête peut mener à un classement sans-suite si il n'y a pas lieu de poursuivre les investigations ou si les recherches ne permettent pas de déterminer l'identité d'une personne nous semblant coupable d'une infraction. Dans ce cas vous en serez informé et pourrez contester cette décision comme indiqué plus haut.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Si l'enquête permet d'identifier un ou plusieurs auteurs d'infractions à la loi pénale vous en serez informé. Nous nous assurerons alors de prendre les consignes de l'autorité judiciaire qui décidera de les poursuivre ou classer la plainte sans suites. Si ils sont arrêtés et poursuivis il y a deux possibilités :
      -  Soit ils sont jugés en comparution immédiate (( /juger )) auquel cas vous serez simplement informé de leur arrestation, si vous souhaitez demander une indemnité il vous faudra alors leur faire un procès au civil séparément, la police ne s'occupe que de l'aspect pénal (et non civil) de la chose ;
      -  Soit ils sont jugés en procédure normale (( procès avec un topic forum )), vous serez alors informé de leur arrestation et du fait qu'ils sont poursuivis, vous pourrez alors retrouver l'affaire sur le [url=https://www.leroleplay.fr/viewforum.php?id=118]site de la Cour, rubrique « affaires instruites »[/url] pour suivre l'affaire et (si vous le souhaitez) vous porter partie civile pour demander un dédommagement. L'avocat n'est pas obligatoire pour cela.
    [/color][/size][/justify]
    [/spoiler]
    
    [spoiler=Le dépôt de plainte est il payant ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Non, en revanche les fausses déclarations, écrites comme orales, peuvent mettre en jeu votre responsabilité civile voire pénale. [/color][/size][/justify][/spoiler][/background]
    
    [/box]
    `;
  setter(Code);
}

function generatePlainteResoluCI(setter) {
  const Code = `[background=#0a3d62][img]https://www.upload.ee/image/11854268/BI_DE_en-t_te.png[/img][/background][box=black]

    [center][size=5][color=black]Affaire résolue[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Madame, Monsieur,[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La division d'enquête du bureau des investigations a le plaisir de vous informer que l'affaire vous concernant a été élucidée. L'auteur a été identifié et interpellé puis remis à la Justice qui l'a jugé en comparution immédiate (( /juger )). Nous vous remercions de la confiance que vous avez placé en notre Département.[/color][/size][/justify]
    
    
    
    
    [center][size=5][color=black]Notice d'information[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Dans un soucis de transparence, le Département de police de la ville de Los Santos vous informe sur vos droits.[/color][/size][/justify]
    
    [background=white][spoiler=Des faits nouveaux se produisent, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]En cas d'urgence, nous vous rappelons qu'il convient de composer le 911.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]N'hésitez pas à noter la date, l'heure et le lieu de l'intervention de nos officiers si nous intervenons ainsi qu'à demander aux officiers leurs noms ou bien le relever directement (il est inscrit sur leur uniforme). Il vous suffira alors de nous écrire (à la suite de votre plainte) en nous indiquant ces informations. Nous pourrons ainsi retrouver leur rapport d'intervention et traiter plus efficacement votre éventuelle plainte.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je demander une indemnisation de mon préjudice ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La police a géré la partie « pénale » de l'affaire, c'est à dire que personne a été identifiée, arrêtée et jugée. Vous pouvez maintenant intenter un procès à cette personne pour obtenir une indemnisation, mais cela ne regarde pas la police. Cette procédure est purement civile, se fait auprès de la Cour de Justice. Nous vous conseillons de vous rapprocher d'un avocat pour vous renseigner sur vos droits.[/color][/size][/justify][/spoiler][/background]
    
    
    [/box]
    `;
  setter(Code);
}

function generatePlainteCSS(elements, setter) {
  const Code = `[background=#0a3d62][img]https://www.upload.ee/image/11854268/BI_DE_en-t_te.png[/img][/background][box=black]

    [center][size=5][color=black]Classement sans suite[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Madame, Monsieur,[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La division d'enquête du bureau des investigations vous informe que votre plainte a été classée sans suite.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Votre plainte a été classée sans suite pour le motif suivant : [b]${elements.motif}[/b] ${elements.detail}[/color][/size][/justify]
    
    [spoiler=Motifs de classement][center][size=3][color=black]Pour votre parfaite information, selon notre codification les différents motifs de classement sans suites sont :
    
    [b]MOTIF A – Formalisme non respecté[/b]
    Le formulaire de plainte n'a pas été correctement rempli. La Police pourrait tout de même enquêter mais juge inopportun de le faire pour ce motif. Le requérant est invité à refaire une plainte correctement.
    
    [b]MOTIF B – Faits non punissables[/b]
    Les faits décrits dans la plainte ne sont pas susceptibles de qualification pénale, il n'y a donc pas lieu d'enquêter. En général il s'agit de faits qui peuvent entraîner une responsabilité civile mais pas pénale. Il est alors conseillé à la victime de se rapprocher d'un avocat pour s'informer sur ses droits.
    
    [b]MOTIF C – Suspect(s) non identifié(s)[/b]
    Il n'a pas été possible d'identifier de suspect malgré des investigations. Il s'agit en général d'un manque d'indices.  Il est donc recommandé au requérant de recontacter la Police si il découvre de nouveaux éléments pour identifier l'auteur présumé de l'infraction.
    
    [b]MOTIF D – Enquête ne caractérisant pas suffisamment l'infraction[/b]
    Un suspect au moins est identifié mais les investigations n'ont pas permis de caractériser suffisamment l'infraction. Il s'agit en général d'un manque de preuves ou d'indices.  Il est donc recommandé au requérant de recontacter la Police si il découvre de nouveaux indices en lien avec l'affaire.
    
    [b]MOTIF E – Retrait de la plainte[/b]
    Le requérant a indiqué vouloir retirer sa plainte, la police n'est alors pas obligé de classer sans suites mais elle a décidé de le faire. Cela fait souvent suite à un arrangement à l'amiable entre les parties.
    
    [b]MOTIF F – Carence du plaignant[/b]
    Le plaignant ne répond pas aux sollicitations des enquêteurs et la Police décide de classer la plainte sans suite. Il faut noter que ce n'est pas automatique, les enquêteurs peuvent décider de continuer les investigations.
    
    [b]MOTIF G – Suspect(s) décédé(s)[/b]
    Il n'existe plus de suspect(s) en vie. Toute poursuite pénale est donc impossible.
    
    [b]MOTIF H – Auteur non responsable[/b]
    Le Département pourrait mener des investigations ou demander des poursuites mais il semble que l'auteur serait jugé non responsable, soit en raison de son jeune âge soit en raison de son état mental. Cela ne prive pas la victime d'intenter une action civile.
    
    [b]MOTIF I – Comportement de la victime[/b]
    Si la victime a déraisonnablement contribué ou provoqué l'infraction, la Police peut considérer qu'il n'est pas opportun de poursuivre les investigations.
    
    [b]MOTIF J – Investigations jugées inopportunes par le Département[/b]
    Le Département de police juge qu'il n'est pas pertinent de mener des enquêtes dans cette affaire. C'est en général lié au fait que les moyens nécessaires à l'élucidation de l'enquête seraient excessivement démesurés. C'est aussi (notamment) le cas lorsque les faits sont trop anciens ou qu'il apparaît raisonnablement plus juste de ne pas investiguer au regard des conséquences qu'aurait une enquête.
    
    [b]MOTIF K – Vice de procédure insurmontable[/b]
    Une erreur procédurale a été commise et elle est telle qu'il est impossible de poursuivre les investigations. Le requérant est invité à contacter le commandement du bureau des investigations s'il souhaite davantage d'informations.
    
    [b]MOTIF L – Décision du ministère public[/b]
    Le Procureur peut ordonner la fin d'une enquête, sa décision fait autorité et la police est obligée de la respecter. Le requérant est invité à contacter le bureau du Procureur s'il souhaite en savoir davantage, cette décision ne relève pas de la police.
    
    [b]MOTIF M – Suspect introuvable[/b]
    L'enquête est résolue, les faits sont établis et le suspect identifié, mais le suspect demeure introuvable. L'enquête est donc classée mais pourrait être réouverte si des éléments nouveaux permettait de retrouver le suspect.
    [i](( Concerne en général les cas de renames, de bannissements longs/définitifs ou de joueur ne se connectant plus. En cas de rename il reste possible de voir avec le joueur voire de voir avec le staff pour qu'il joue les conséquences de la Justice notamment si la police le demande ))[/i]
    
    [b]MOTIF N – Autre motif[/b]
    Motif invoqué dans tous les autres cas.
    [/color][/size][/center][/spoiler]
    
    
    
    
    [center][size=5][color=black]Notice d'information[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Dans un soucis de transparence, le Département de police de la ville de Los Santos vous informe sur vos droits.[/color][/size][/justify]
    
    [background=white][spoiler=Des faits nouveaux se produisent, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]En cas d'urgence, nous vous rappelons qu'il convient de composer le 911. Vous pouvez par ailleurs déposer à nouveau plainte si des faits nouveaux se produisent.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je demander une indemnisation de mon préjudice malgré le classement sans suites ? ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Les deux procédures sont distinctes vous le pouvez donc tout à fait intenter une action civile contre la personne visée devant la Cour. Il vous appartiendra alors de prouver les faits pour que le juge vous accorde ou non ce que vous demandez. Bien que ce ne soit pas obligatoire, nous vous conseillons de prendre contact avec un avocat pour vous renseigner sur vos droits.[/color][/size][/justify][/spoiler]
    
    [spoiler=Je ne suis pas satisfait du traitement donné à ma plainte, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Vous pouvez d'abord nous écrire pour nous expliquer les raisons de votre mécontentement. Le Département est au service des citoyens de notre bonne ville et essaie de donner les meilleures suites possibles aux sollicitations légitimes.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Si cela ne suffit pas sachez que vous avez le droit de vous adresser (idéalement dans cet ordre) au commandement du Bureau des investigations, à la Direction du LSPD ou enfin au Procureur (( sur leur section forum )) pour nous faire part de votre réclamation. Vous pouvez notamment nous écrire via [url=https://lspd-online.forumactif.com]notre site[/url].[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Enfin sachez que aux termes de l'[url=https://www.leroleplay.fr/viewtopic.php?pid=271026#p271026]article 62 du code de procédure pénale de San Andreas[/url] : << [i]toute personne peut, si sa plainte n'a pas abouti, ou si sa plainte n’a pas entraîné d’accusation dans des délais raisonnables, ou si sa plainte n’a pas reçu de réponse effective dans les 10 jours suite à son dépôt, accuser directement elle-même une autre personne par le biais d'une requête en accusation subsidiaire devant la cour suprême.[/i] >>[/color][/size][/justify][/spoiler]
    [/background]
    
    [/box]
    `;
  setter(Code);
}

function generatePlainteVierge(elements, code, setter) {
  let modifiedCode = code
    .split("<p>")
    .join(
      "[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]"
    );
  modifiedCode = modifiedCode.split("</p>").join("[/color][/size][/justify]");
  const Code = `[background=#0a3d62][img]https://www.upload.ee/image/11854268/BI_DE_en-t_te.png[/img][/background][box=black]

    [center][size=5][color=black]${elements.titre}[/color][/size]
    ___________________________________[/center]
   
[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Madame, Monsieur,[/color][/size][/justify]
    ${modifiedCode}
[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]N'hésitez pas à nous écrire ou bien à consulter [url=https://lspd-online.forumactif.com/]notre site internet[/url] pour obtenir davantage d'informations sur notre Département.[/color][/size][/justify]
    
[right]${elements.signature}[/right]
[/box]
    `;
  setter(Code);
}

function generatePlainteResoluMEA(elements, setter) {
  const Code = `[background=#0a3d62][img]https://www.upload.ee/image/11854268/BI_DE_en-t_te.png[/img][/background][box=black]

    [center][size=5][color=black]Affaire résolue[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Madame, Monsieur,[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La division d'enquête du bureau des investigations a le plaisir de vous informer que l'affaire vous concernant a été élucidée. L'auteur a été identifié, son sort est maintenant entre les mains de la Justice. Nous vous remercions de la confiance que vous avez placé en notre Département.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Pour suivre la suite de votre affaire, vous pouvez consulter la mise en accusation et le procès à ce lien : ${elements.lien}[/color][/size][/justify]
    
    
    
    
    [center][size=5][color=black]Notice d'information[/color][/size]
    ___________________________________[/center]
    
    
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Dans un soucis de transparence, le Département de police de la ville de Los Santos vous informe sur vos droits.[/color][/size][/justify]
    
    [background=white][spoiler=Des faits nouveaux se produisent, que puis-je faire ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]En cas d'urgence, nous vous rappelons qu'il convient de composer le 911.[/color][/size][/justify]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]N'hésitez pas à noter la date, l'heure et le lieu de l'intervention de nos officiers si nous intervenons ainsi qu'à demander aux officiers leurs noms ou bien le relever directement (il est inscrit sur leur uniforme). Il vous suffira alors de nous écrire (à la suite de votre plainte) en nous indiquant ces informations. Nous pourrons ainsi retrouver leur rapport d'intervention et traiter plus efficacement votre éventuelle plainte.[/color][/size][/justify][/spoiler]
    
    [spoiler=Puis-je demander une indemnisation de mon préjudice ?]
    [justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]La police a mené l'enquête, la suite ne nous appartient plus, c'est du ressort de la Justice. Vous pouvez vous porter civil pour demander une indemnisation à la Cour, pour cela vous devez vous manifester à la Cour (en suivant le lien du procès que nous vous avons donné plus haut). Nous vous conseillons de vous rapprocher d'un avocat pour vous renseigner sur vos droits si vous souhaitez vous porter partie civile.[/color][/size][/justify][/spoiler][/background]
    
    
    [/box]
    
    `;
  setter(Code);
}

function generatePlainteDo(code, setter) {
  const Code = `[background=#0a3d62][center][size=5][color=white]Investigations[/color][/size]
    [color=#ffffff]_[/color][/center][/background][background=#e4e4e4]
    
    [spoiler=Précisions OOC]Salutations,
    Les questions posées dans ce post sont des /DO. Nous rappelons qu'[b]il est obligatoire de répondre aux /DO[/b]. Ne pas le faire est une infraction au règlement peut entraîner un report et des sanctions. [b]Mentir en /DO (y-compris par omission) est également interdit[/b] et peut entraîner, là encore, des sanctions en OOC.
    
    Si vous pensez qu'un joueur a méta ou autre, n'hésitez pas à le préciser en OOC (si possible en spoiler). Mais nous ne sommes pas admins, si un joueur ment dans ses /DO il faudra s'arranger avec lui ou bien faire appel au staff.
    
    Merci de bien penser à répondre aux /DO, avec fair-play et honnêteté. Nous effectuons régulièrement des demandes de logs aux admins pour vérifier qu'on ne nous ment pas.
    
    Bon jeu à vous !
    [/spoiler]
    
    [color=#af74b5][b]${code}[/b][/color]
    
    [right][b]BUREAU DES INVESTIGATIONS[/b]
    DIVISION D'ENQUÊTE[/right][/background]`;
  setter(Code);
}

function generatePlainteAffec(elements, setter) {
  const Code = `[background=#0a3d62][img]https://www.upload.ee/image/11854268/BI_DE_en-t_te.png[/img][/background][box=black]

    [center][size=5][color=black]Enquêteur affecté à la plainte[/color][/size]
    ___________________________________[/center]
    
    
[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Madame, Monsieur,[/color][/size][/justify]
[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Nous vous informons que le commandement du bureau des investigations a affecté l'affaire vous concernant à un enquêteur de la division d'enquête.[/color][/size][/justify]
[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]L'enquêteur aura peut être besoin de vous contacter, merci donc de demeurer joignable et de nous informer de tout changement d'adresse ou de numéro de téléphone.[/color][/size][/justify]
${
  elements.showEnqueteur
    ? `[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]L'enquêteur désigné est: ${elements.enqueteur}[b][/b].[/color][/size][/justify]`
    : ""
} 
${
  elements.showNumber
    ? `[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]Vous pouvez joindre l'enquêteur en l'appelant ou lui écrivant à ce numéro: [b]${elements.number}[/b]. Toutefois nous vous rappelons qu'en cas d'urgence il convient de faire le 911 et non ce numéro.[/color][/size][/justify]`
    : ""
} 
[justify][img]https://cdn.discordapp.com/attachments/664886940667084851/705820869376606259/unknown.png[/img][size=3][color=black]N'hésitez pas à nous écrire ou bien à consulter [url=https://lspd-online.forumactif.com/]notre site internet[/url] pour obtenir davantage d'informations sur notre Département.[/color][/size][/justify]
[/box]`;
  setter(Code);
}

function generatePlainte(elements, code, setter) {
  elements.setTitlePost(
    `Plainte contre ${elements.suspectName} ${elements.suspectLastName}`);
  const Code = `[background=#FFFFFF]
[center][img]https://www.upload.ee/image/11858112/Logo_LSPD_noir___blanc.png[/img]
  
[size=4]DÉPARTEMENT DE POLICE DE LOS SANTOS[/size]
[size=3]DÉPÔT DE PLAINTE[/size]__________________________[/center]
  
  
  
  
${
  elements.auxi
    ? "[right][img]https://cdn.discordapp.com/attachments/721058188593594409/721138393291161630/tampon11-1.png[/img][/right]"
    : ""
}
  
[size=3][b]1.[/b] IDENTITÉ DU PLAIGNANT[/size]

[b]Nom :[/b] ${elements.victimeName}
[b]Prénom :[/b] ${elements.victimeLastName}
[b]Date de naissance :[/b]${elements.victimeNaiss}
[b]Lieu de naissance :[/b]${elements.victimeLieuNaiss}
[b]Lieu de résidence actuelle :[/b]${elements.victimeLieu}
[b]Numéro de téléphone :[/b]${elements.victimePhone}
  
  
  
[size=3] [b]2.[/b] IDENTITÉ DU CONCERNÉ[/size]
(( [b]Pseudo LRP :[/b] ${elements.suspectOOC} ))
[b]Nom :[/b] ${elements.suspectName}
[b]Prénom :[/b] ${elements.suspectLastName}
[b]Lieu de résidence actuelle :[/b] ${elements.suspectLieu}
[b]Numéro de téléphone :[/b] ${elements.suspectPhone}
  
  
  
[size=3] [b]3.[/b] CHARGES[/size]
  
[b]Accusation(s) au(x) motif(s) de :[/b] 
${elements.accusation}

[b]Récit des faits :[/b] 

${code}  

${elements.preuve}
[spoiler=TÉMOINS]${elements.temoin}[/spoiler]
[/background]`;
  setter(Code);
}

export {
  generatePlainteAR,
  generatePlainteAI,
  generatePlainteResoluCI,
  generatePlainteCSS,
  generatePlainteResoluMEA,
  generatePlainteVierge,
  generatePlainteDo,
  generatePlainteAffec,
  generatePlainte,
};
