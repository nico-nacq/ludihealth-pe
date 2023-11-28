var dialogs = {

    "dialog_saxonaute": {
        "txt": "J'adorais ce jeu ! La musique était trop bien !"
    },
    "dialog_ludi": {
        "txt": "Aaaah le Ludinam.. Ca c'était le bon temps !"
    },
    "dialog_picture": {
        "txt": "Oh c'est une photo de mon ex.. Ah enfin je veux dire.. De ton ex. De ta future ex du coup ?"
    },
    "dialog_intro_3": {
        "txt": "Allo ? ࡱ ⊕⊖st-qu⊗ ⊘⊙ m⊚rche ⊖ai⊛⊜⊝⊞⊟⊝⊞"
    },
    "dialog_intro_2": {
        "txt": "Test. Test. Ha ça marche je crois",
    },
    "dialog_intro_1": {
        "txt": "Allo ???",
        "attention_grabber": ['btn_messages']
    },


    "dialog_success_1": {
        "txt": "Regarde comme je vais déjà mieux !",
        "image": "assets/drawings/face1.jpg"
    },
    "dialog_success_2": {
        "txt": "Si tu veux, tu peux utiliser <b>ton application Carte</b> pour chercher ailleurs. [<b>ATTENTION !</b> Ce jeu n'est pas terminé ! Les autres pièces ne sont pas encore réalisées. Elles ne sont là qu'à titre d'exemple. Merci d'avoir joué à cette version alpha]",
        "attention_grabber": ['btn_home', 'btn_map']
    },

    "dialog_intro": {
        "txt": "Eh oh ? Il y a quelqu'un ? EH OH ? Vous m'entendez ??? QUE QUELQU'UN RÉPONDE !!!!!!",
        "choices": [
            {
                "txt": "Qu'est-ce que vous me voulez ?  ",
                "goto": "3"
            },
            {
                "txt": "Oooh ! Qu'est-ce que c'est que ce truc ? ",
                "goto": "3"
            },
            {
                "txt": "Euuuuuh, t'es qui toi ? ",
                "goto": "3"
            }
        ]
    },
    "dialog_3": {
        "txt": "Je suis ton toi du futur et j'ai besoin de toi !!! Je suis en grand danger, je vais peut être MOURIR !! Aide-moi steuplait",
        "choices": [
            {
                "txt": "J'ai pas envie de crever dans le futur ! Que dois-je faire pour t'aider ? ",
                "goto": "5"
            },
            {
                "txt": "Balek",
                "goto": "5"
            }
        ]
    },
    "dialog_5": {
        "txt": "Je suis très très très malade ! Je ne peux pas me soigner tout(e) seul(e) ! T'as vu ma tête ??? La réponse  se trouve peut-être autour de toi…",
        "image": "assets/drawings/face2.jpg",
        "choices": [
            {
                "txt": "Donne moi des indications, chepa comment faire moi frère ! ",
                "goto": "7"
            },
            {
                "txt": "Je fais ce que tu me dis, et après tu me lâches ?",
                "goto": "7"
            }
        ]
    },
    "dialog_7": {
        "txt": "J'ai modifié ta caméra. Tu devrais pouvoir détecter des problèmes dans ce qui t'entoure grâce à elle. Va dans <b>la caméra</b> et utilise-là !",
        "attention_grabber": ['btn_home', 'btn_camera']
    },
    "dialog_9": {
        "txt": "Il semble y avoir un soucis… ",
        "choices": [
            {
                "txt": "Il y a quoi wesh ? ",
                "goto": "11"
            },
            {
                "txt": "C'est toi le souci...",
                "goto": "11"
            }
        ]
    },
    "dialog_11": {
        "txt": "Il y a comme quelque chose de pertubateur dans ton meuble ....",
        "choices": [
            {
                "txt": "C'est-à-dire ? Je ne comprends pas !",
                "goto": "13"
            },
            {
                "txt": "Oué il est moche...",
                "goto": "13"
            }
        ]
    },
    "dialog_13": {
        "txt": "Ecoute mini-moi ! Il va falloir illico presto changer des choses pour me guérir ! Bouge toi !!! Je suis de plus en plus malade !",
        "choices": [
            {
                "txt": "Quelles missions me donnes-tu ?",
                "goto": "15"
            },
            {
                "txt": "Personne ne m'appelle mini-moi.",
                "goto": "15"
            }
        ]
    },
    "dialog_15": {
        "txt": "Tu veux pas essayer de changer un truc avec ton meuble ?",
        "choices": [
            {
                "txt": "Le changer d'endroit genre ? ",
                "goto": "16b"
            },
            {
                "txt": "Le changer de couleur ? ",
                "goto": "16b"
            },
            {
                "txt": "Chander de matière ?",
                "goto": "16a"
            },
        ]
    },
    "dialog_16a": {
        "txt": "Oué tu penses à quoi par exemple ?",
        "choices": [
            {
                "txt": "Un truc en plastique ?",
                "goto": "16"
            },
            {
                "txt": "Une table en fer ?",
                "goto": "17"
            },
            {
                "txt": "En bois massif non traité ",
                "goto": "18"
            }
        ]
    },

    "dialog_16b": {
        "txt": "Oui, je dois être mourrant pour cause de mauvais goût mobilier. PATATE ! Biensûr que non",
        "choice_id": "15"
    },
    "dialog_16": {
        "txt": "Mauvais choix ! Ca change rien ! Je suis en train de me désintégrer !!! ",
        "choice_id": "16a"
    },
    "dialog_17": {
        "txt": "Ce n'est pas la meilleure option… C'est un peu mieux, mais pas ouf.",
        "choice_id": "16a"
    },
    "dialog_18": {
        "txt": "Excellent choix poto ! J'ai moins mal à la tête maintenant grâce à toi ! Continue comme ça !! Le bois semble être le meilleur matériau pour les meubles ! Continuons à chercher…",
        "choice_id": "success"
    },
    "dialog_19": {
        "txt": "Cette vielles technologie me donnent envie de m'évanouir ! Que pourrais-tu faire pour nous ?",
        "choices": [
            {
                "txt": "Utiliser un pigeon voyageur au lieu du téléphone pour envoyer des messages ",
                "goto": "20"
            },
            {
                "txt": "Dépoussierer l'ordinateur ou téléphone",
                "goto": "21"
            },
            {
                "txt": "L'éteindre régulièrement  ou le mettre en mode avion ",
                "goto": "22"
            }
        ]
    },
    "dialog_20": {
        "txt": "C'est pas bête mais il faut pouvoir apprivoiser le pigeon… RECOMMENCE, ON EST PLUS AU MOYEN-AGE ! ",
        "choice_id": "19"
    },
    "dialog_21": {
        "txt": "ça peut être utile, un peu de ménage ça ne fait pas de mal mais cela n'est pas suffisant ! Essaye encore ",
        "choice_id": "19"
    },
    "dialog_22": {
        "txt": "OUI, BRAVO ! Je sens un petit mieux ! Continuons pour le bien de notre santé !",
        "choice_id": "success"
    },


    "dialog_23": {
        "txt": "MON DIEU ! Ce truc là fait sonner plein d'alarmes ici ! Vite, améliore la situation rapidement ! Je compte sur toi !",
        "choices": [
            {
                "txt": "Elles sont trop belles mes figurines. On touche à rien.",
                "goto": "23a"
            },
            {
                "txt": "Ma préférée c'est celle de Star Wars. Tu crois que je dois prendre une de Star Trek à la place ?",
                "goto": "23a"
            },
            {
                "txt": "Cette figurine là est en plastique. Tu crois que c'est à lié à ça ?",
                "goto": "23b"
            }
        ]
    },
    "dialog_23a": {
        "txt": "Oué en fait, tu veux pas vivre vieux.",
        "choice_id": "23"
    },
    "dialog_23b": {
        "txt": "Oué peut être...",
        "choices": [
            {
                "txt": "Les objets en plastique souple, c'est les meilleurs !",
                "goto": "24"
            },
            {
                "txt": "Je peux peut être les sortir l'emballage pour provoquer des choses moins néfastes ",
                "goto": "25"
            },
            {
                "txt": "Ah c'est peut être parce qu'elle n'est pas norme CE. Si je vais la remplacer par une figurine norme CE, ça va mieux ?",
                "goto": "26"
            }
        ]
    },
    "dialog_24": {
        "txt": "Oulaaaaa…. Non mon frérot, tu es tombé dans le piège…. JE ME MEURS ! Recommence !",
        "choice_id": "23b",
        "image": "assets/drawings/face3.jpg"

    },
    "dialog_25": {
        "txt": "VRAI, mais tu peux faire bien plus que ça ! ",
        "choice_id": "23b"
    },
    "dialog_26": {
        "txt": "Bien joué ! Ma santé s'améliore petit à petit….",
        "choice_id": "success"
    },



    "dialog_32": {
        "txt": "A l'intérieur, ça réchauffe ! Mais pourtant… j'ai très mal au ventre… Qu'est-ce qui se passe ? Comment réchauffer correctement mes plats sans finir malade ? ",
        "choices": [
            {
                "txt": "Je réchauffe mon plat préparé qui est dans une barquette dans un nouveau contenant : un tupperware en plastique dur !",
                "goto": "33"
            },
            {
                "txt": "Je  fais réchauffer mon plat sans changer le récipient qui était en plastique ! ",
                "goto": "34"
            },
            {
                "txt": "Je fais réchauffer mon plat dans une assiette ou dans un contenant en inox ou en verre !  ",
                "goto": "35"
            }
        ]
    },
    "dialog_33": {
        "txt": "Même si tu as transféré ton plat, tu le réchauffes encore dans du plastique…. Cela nuit quand même à notre santé ! Choisis une meilleure option ",
        "choice_id": "32"
    },
    "dialog_34": {
        "txt": "Quelle horreur ! Tu m'as fait vomir !!! Grrrr !!! Recommence ! ",
        "choice_id": "32"
    },
    "dialog_35": {
        "txt": "Je digère mon repas, merciiii à toi, jeune padawan ! ",
        "choice_id": "success"
    },
    "dialog_36": {
        "txt": "La poêle me semble abîmée, regardons ça de plus près…",
        "choices": [
            {
                "txt": "Je la change pour une poêle en inox ",
                "goto": "37"
            },
            {
                "txt": "J'ai utilisé des couverts en métal dedans, ce qui l'a rayé…",
                "goto": "38"
            },
            {
                "txt": "J'essaye d'entretenir la poêle ",
                "goto": "39"
            }
        ]
    },
    "dialog_37": {
        "txt": "L'inox n'a pas d'influence sur notre santé ! Trop cool non ? Passons à la suite ! Car je vais bien mieux mais nous n'avons pas fini d'éliminer les éléments néfastes….",
        "choice_id": "success"
    },
    "dialog_38": {
        "txt": "QUOIIIII ? Des couverts en métal dans du téfal ? N'as-tu pas honte ? Je suis très malade maintenant à cause de cette poêle rayée !",
        "choice_id": "36"
    },
    "dialog_39": {
        "txt": "C'est bien, tu en prends soin ! Mais ce n'est point suffisant car elle peut tout de même s'abîmer et nuire à ma santé, il existe une autre solution….",
        "choice_id": "36"
    },
    "dialog_40": {
        "txt": "Le frigo est plein de plats préparés ! T'as la flemme de faire la cuisine ou quoi ? Ces plats me provoquent des boutons. Essayons de résoudre ce problème tout de suite !!!",
        "choices": [
            {
                "txt": "Pour manger, je choisis un des plat préparé industriel ",
                "goto": "41"
            },
            {
                "txt": "Je privilégie des produits simples non transformés",
                "goto": "42"
            },
            {
                "txt": "Choisis ce qui constitue le contenant de ton plat, au frigo",
                "goto": "43"
            }
        ]
    },
    "dialog_41": {
        "txt": "Euuuuuh… Tu veux qu'on meurt ou quoi ? Non, non, non et NON ! Ça ne va pas du tout ! Reviens sur ta décision !",
        "choice_id": "40"
    },
    "dialog_42": {
        "txt": "ça me plaît ça ! Ce que tu vas cuisiner va être délicieux et n'aura aucun risque pour ma santé ! J'ai faim, prépare-moi et petit plat et analysons les autres éléments de la cuisine !",
        "choice_id": "success"
    },
    "dialog_43": {
        "txt": "Lequel ? ",
        "choices": [
            {
                "txt": "En plastique ",
                "goto": "44"
            },
            {
                "txt": "En inox ",
                "goto": "45"
            },
            {
                "txt": "En verre ",
                "goto": "45"
            }
        ]
    },
    "dialog_44": {
        "txt": "Beuuuuuh ! On avait dit pas le plastique ! Tu cherches à m'intoxiquer ???? ",
        "choice_id": "43"
    },
    "dialog_45": {
        "txt": "Bon choix ! C'est un bon matériau pour contenir les aliments au frigo, mais tu peux choisir une meilleur solution quant au choix de ta nourriture !",
        "choice_id": "40"
    },
    "dialog_47": {
        "txt": "Mmmmmmh tu es tout(e) propre et beau/belle, enfin presque… Quelle est la meilleure chose à prendre pour aller à la douche ou pour te préparer ? ",
        "choices": [
            {
                "txt": "savons/shampoings durs + produits hygiéniques en tissus lavables ",
                "goto": "48"
            },
            {
                "txt": "Cosmétiques (gel douche, maquillage…) industriels, chimiques ",
                "goto": "49"
            },
            {
                "txt": "Produits aux huiles essentielles ",
                "goto": "50"
            }
        ]
    },
    "dialog_48": {
        "txt": "Youhouuuuu ! Quelle bonne idée !!! Tu contribues à notre bien-être, nous sommes tout propre et en forme ! ",
        "choice_id": "success"
    },
    "dialog_49": {
        "txt": "Ah… T'as acheté ça au leclerc tout à l'heure mais… Bof, pas ouf, jsuis pas bien là, change de produits pour nous car je me meurs ! ",
        "choice_id": "47"
    },
    "dialog_50": {
        "txt": "J'ai la peau qui brûle mais c'est beaucoup mieux que des produits chimiques achetés au supermarché ! Fais un meilleur choix !",
        "choice_id": "47"
    },
    "dialog_51": {
        "txt": "Choisis la meilleure manière de prendre une douche, il nous faut un bon rideau !",
        "choices": [
            {
                "txt": "du PVC, le plus simple !",
                "goto": "52"
            },
            {
                "txt": "le nylon ou le polyester, la matière super !",
                "goto": "53"
            },
            {
                "txt": "Bah, flemme le rideau, prenons un bain !",
                "goto": "54"
            }
        ]
    },
    "dialog_52": {
        "txt": "Eh non, tu t'es trompé(e) ! Erreur fatale, le PVC peut être dangereux, revenons sur nos pas…",
        "choice_id": "51"
    },
    "dialog_53": {
        "txt": "Wowww quelle bonne idée ! Je te remercie car dans le futur, nous allons beaucoup mieux ! Revenons aux autres éléments de la salle de bain…",
        "choice_id": "success"
    },
    "dialog_54": {
        "txt": "Super ! Mais à présent, il y a de l'eau partout, tu aurais pu choisir un rideau qui respecte notre santé ! Le bain c'est pas très écolo en plus…",
        "choice_id": "51"
    },
    "dialog_55": {
        "txt": "C'est pratique le linge, mais quelle lessive utiliser et comment ? ",
        "choices": [
            {
                "txt": "Celle qui a un écolabel, c'est nickel ! ",
                "goto": "56"
            },
            {
                "txt": "Je préfère la manger, au moins ça lavera ma bouche !",
                "goto": "57"
            },
            {
                "txt": "La fabriquer soi-même ",
                "goto": "58"
            }
        ]
    },
    "dialog_56": {
        "txt": "C'est une bonne idée ! Mais il y a encore mieux ! Essaye de trouver, car je ne suis pas au meilleur de ma santé ",
        "choice_id": "55"
    },
    "dialog_57": {
        "txt": "Mon/Ma pote, on va mourir là, c'est toxique de manger de la lessive ! On va finir dans le top 10 des morts les plus nulles…",
        "choice_id": "55"
    },
    "dialog_58": {
        "txt": "Parfait ! Cette idée est incroyable, le fait maison, il n'y a rien de mieux ! On pourra nous-même choisir ce qui la compose ! Passons aux autres éléments de la salle de bain !",
        "choice_id": "success"
    },
    "dialog_59": {
        "txt": "Ok, tu veux que ça sente bon, mais, quel est le meilleur à utiliser pour préserver notre santé ? ",
        "choices": [
            {
                "txt": "Allumer une bougie et on revit ! ",
                "goto": "60"
            },
            {
                "txt": "On aère, fenêtre grande ouverte ! ",
                "goto": "61"
            },
            {
                "txt": "les bombes désodorisantes du supermarché ",
                "goto": "62"
            }
        ]
    },
    "dialog_60": {
        "txt": "Mmmmh c'est pas terrible, ça sent meilleur mais je ne respire toujours pas bien, choisis autre chose !",
        "choice_id": "59"
    },
    "dialog_61": {
        "txt": "Oooooh, l'air revient dans mes poumons ! Je revis ! L'oxygène est tellement bon ! Est-ce que tu as pu faire tous les élémenrts de la salle de bain ? ",
        "choice_id": "success"
    },
    "dialog_62": {
        "txt": "Olala que je tousse ! L'odeur est trop forte ! Aide-moi, il y a de produits chimiques là-dedans ! Je vais vraiment mourir !",
        "choice_id": "59"
    },
    "dialog_64": {
        "txt": "Que c'est bon, mais quel emballage utilises-tu ? ATTENTION, chosis bien ! ",
        "choices": [
            {
                "txt": "BeeWraps /  Sacs en tissus ",
                "goto": "65"
            },
            {
                "txt": "Aluminium/Plastique ",
                "goto": "66"
            },
            {
                "txt": "Papier/Carton ",
                "goto": "67"
            }
        ]
    },
    "dialog_65": {
        "txt": "Oh c'est LA solution parfaite ! Bien joué mon moi passé ! Que suis-je intelligent(e) !!!",
        "choice_id": "success"
    },
    "dialog_66": {
        "txt": "C'est pas ouf ! T'as pas mieux ?? Je souffre… ",
        "choice_id": "64"
    },
    "dialog_67": {
        "txt": "C'est pas mal, mais il existe une meilleure soluce ! ",
        "choice_id": "64"
    },
    "dialog_68": {
        "txt": "De quel matériau doit être constitué les couverts ? ",
        "choices": [
            {
                "txt": "Sans couverts, le mieux c'est de manger avec nos mains !",
                "goto": "69"
            },
            {
                "txt": "En Inox, Bois ou Bambou ! ",
                "goto": "70"
            },
            {
                "txt": "En plastique réutilisable !",
                "goto": "71"
            }
        ]
    },
    "dialog_69": {
        "txt": "AAAAAAh c'est dégueu ! Moi je préfère manger avec des couverts ! J'aurais les mains sales et ce n'est pas pratique !",
        "choice_id": "68"
    },
    "dialog_70": {
        "txt": "Tu es incroyable ! C'est bien mieux de manger avec des couverts en bois/inox/bambou plutôt que ceux avec du plastique réutilisable ! Très très bon choix !!!",
        "choice_id": "success"
    },
    "dialog_71": {
        "txt": "Aaaah non, les plastiques réutisables sont nuls ! Bouuuuh, j'ai des cheveux qui me poussent dans les oreilles !! Aide moiiii ! ",
        "choice_id": "68"
    },
    "dialog_72": {
        "txt": "ON VA ÊTRE LES PLUS STYLE(E)S !! Go Shopping !!! Stylé(e) en étant en bonne santé ! ",
        "choices": [
            {
                "txt": "On porte des vêtemenst neufs sans lavage ! Comme en cabine d'essayage ! ",
                "goto": "73"
            },
            {
                "txt": "Je vais laver préalablement mes habits achetés ",
                "goto": "74"
            },
            {
                "txt": "J'achète des vêtements en Lin / Laine / Coton ",
                "goto": "75"
            }
        ]
    },
    "dialog_73": {
        "txt": "Ah je me sens de plus en plus mal, ça ne m'aide absolument pas, j'ai d'atroces douleurs dans les jambes ! Change d'idée ! ",
        "choice_id": "72"
    },
    "dialog_74": {
        "txt": "C'est mieux, mais j'ai toujours mal aux jambes, aide moi encore !!!",
        "choice_id": "72"
    },
    "dialog_75": {
        "txt": "C'est tout doux ! J'ADOOOOORE, je me sens très très bien, en SUPER forme ! ",
        "choice_id": "success"
    },
    "dialog_76": {
        "txt": "J'ai extrèmement soif, je sens que je vais faire un malaise, aide moi ! ",
        "choices": [
            {
                "txt": "Je prends une gourde Inox/Thermos ou en verre, pour boire de l'eau",
                "goto": "77"
            },
            {
                "txt": "Je choisis une bouteille d'eau en plastique ou une canette pour boire ",
                "goto": "78"
            },
            {
                "txt": "Gourdes en plastique ",
                "goto": "79"
            }
        ]
    },
    "dialog_77": {
        "txt": "Merci beaucoup, ça va beaucoup mieux, tu as très bien choisi ! ",
        "choice_id": "success"
    },
    "dialog_78": {
        "txt": "MALEDICTION !!! Je me sens si faible !! Je vais m'évanouir !! Choisis autre chose ! ",
        "choice_id": "76"
    },
    "dialog_79": {
        "txt": "Je me sens mieux, mais ce n'est optimal pour ma santé… Il existe une meilleure soluce, trouve-la !!!",
        "choice_id": "76"
    },
    "dialog_120": {
        "txt": "Wowwww, trop géant notre salle de bain ! Mais je ne me sens pas très bien ici… Il y a des choses qui me tracassent…. Voyons voir ce qui pose problème",
        "choices": [
            {
                "txt": "Le cosmétique et gel douche ",
                "goto": "47"
            },
            {
                "txt": "Le rideau de la douche ",
                "goto": "51"
            },
            {
                "txt": "La lessive ",
                "goto": "55"
            },
            {
                "txt": "Les bombes désodorisantes ",
                "goto": "59"
            }
        ]
    },
    "dialog_124": {
        "txt": "Tu prends l'air mais même dehors, nous sommes en DANGER !!!!!",
        "choices": [
            {
                "txt": "Plats à emporter",
                "goto": "64"
            },
            {
                "txt": "Couverts fournis dans les plats à emporter ",
                "goto": "68"
            },
            {
                "txt": "Magasins (vêtements) ",
                "goto": "72"
            },
            {
                "txt": "Bouteille d'eau",
                "goto": "76"
            }
        ]
    }
}