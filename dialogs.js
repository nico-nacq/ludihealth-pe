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
        "txt": "Je suis très très très malade ! Je ne peux pas me soigner tout(e) seul(e) ! La réponse  se trouve peut-être autour de toi…",
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
        "choice_id": "15"
    },
    "dialog_17": {
        "txt": "Ce n'est pas la meilleure option… C'est un peu mieux, mais pas ouf.",
        "choice_id": "15"
    },
    "dialog_18": {
        "txt": "Excellent choix poto ! J'ai moins mal à la tête maintenant grâce à toi ! Continue comme ça !! Le bois semble être le meilleur matériau pour les meubles ! Continuons à chercher…",
        "image": "assets/albert-einstein-1144965_1280.jpg",
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
        "choice_id": "23"
    },
    "dialog_25": {
        "txt": "VRAI, mais tu peux faire bien plus que ça ! ",
        "choice_id": "23"
    },
    "dialog_26": {
        "txt": "Bien joué ! Ma santé s'améliore petit à petit….",
        "choice_id": "success"
    },

        "choices": [
            {
                "txt": "Oui",
                "goto": 2
            },
            {
                "txt": "Non",
                "goto": 42
            }
        ]
    },
    "dialog_1": {
        "txt": "Hello",
        "choices": [
            {
                "txt": "Oui",
                "goto": 2
            },
            {
                "txt": "Non",
                "goto": 42
            }
        ]
    },
    "dialog_2": {
        "txt": "Ca va pas",
        "dialog_id": 1
    },
    "dialog_42": {
        "txt": "test"
    },
    "dialog_50": {
        "txt": "Oh c'est quoi ce truc sur la table !"
    }
}