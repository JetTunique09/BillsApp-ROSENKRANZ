export const bills = [
  //liste des factures
  //format de date préféré de l'ordinateur :     date: '2023-03-15T22:00:00.000Z',
  {
    id: 1,
    billnum: 209345600,
    description: 'Création de site internet et hébergement',
    date: '2023-08-02',
    client: {
      idclient: 1,
      firstName: 'Marc',
      lastName: 'Scout',
      companyName: 'Lumon Industries'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 2,
    billnum: 209345601,
    description: 'Prestation de formation',
    date: '2015-03-15',
    client: {
      idclient: 2,
      firstName: 'Harry',
      lastName: 'Potter',
      companyName: 'Poudlard & Co.'
    },
    prestations: [
      {
        description: 'Apprentissage du maniement de la bagette',
        qty: 1,
        price: 450.0
      },
      {
        description: 'Permis de balais',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Leçon de sort d’abondance',
        qty: 2,
        price: 450.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 2250,
    tva: 20,
    totalTTC: 2700
  },
  {
    id: 3,
    billnum: 20945321,
    description: 'Création de site internet et hébergement',
    date: '31/03/2023',
    client: {
      idclient: 3,
      firstName: 'Luc',
      lastName: 'Skywalker',
      companyName: 'Ordre des Jedi'
    },
    prestations: [
      {
        description: 'Etude graphique UX',
        qty: 2,
        price: 450.0
      },
      {
        description: 'Création d’un site Wordpress',
        qty: 5,
        price: 450.0
      },
      {
        description: 'Hébergement annuel',
        qty: 1,
        price: 250.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 4,
    billnum: 209345604,
    description: 'Développement d’une application mobile',
    date: '2023-09-15',
    client: {
      idclient: 4,
      firstName: 'Julia',
      lastName: 'Keller',
      companyName: 'Techwave Solutions'
    },
    prestations: [
      {
        description: 'Design de l’interface utilisateur',
        qty: 3,
        price: 300.0
      },
      {
        description: 'Développement iOS',
        qty: 10,
        price: 500.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 5600,
    tva: 20,
    totalTTC: 6720
  },
  {
    id: 5,
    billnum: 209345605,
    description: 'Consultation en stratégie digitale',
    date: '2023-07-22',
    client: {
      idclient: 5,
      firstName: 'Alex',
      lastName: 'Johnson',
      companyName: 'Digital Horizons'
    },
    prestations: [
      {
        description: 'Audit SEO',
        qty: 1,
        price: 1000.0
      },
      {
        description: 'Optimisation des réseaux sociaux',
        qty: 2,
        price: 400.0
      }
    ],
    discount: 50.0,
    paid: 0.0,
    totalHT: 1800,
    tva: 20,
    totalTTC: 2160
  },
  {
    id: 6,
    billnum: 209345606,
    description: 'Création de logo et charte graphique',
    date: '2023-10-05',
    client: {
      idclient: 6,
      firstName: 'Michael',
      lastName: 'Smith',
      companyName: 'DesignWorks'
    },
    prestations: [
      {
        description: 'Conception de logo',
        qty: 1,
        price: 800.0
      },
      {
        description: 'Développement de charte graphique',
        qty: 3,
        price: 300.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 1700,
    tva: 20,
    totalTTC: 2040
  },
  {
    id: 7,
    billnum: 209345607,
    description: 'Maintenance informatique annuelle',
    date: '2023-06-01',
    client: {
      idclient: 7,
      firstName: 'Laura',
      lastName: 'Gonzalez',
      companyName: 'Innova IT'
    },
    prestations: [
      {
        description: 'Maintenance des serveurs',
        qty: 12,
        price: 200.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 2400,
    tva: 20,
    totalTTC: 2880
  },
  {
    id: 8,
    billnum: 209345608,
    description: 'Formation en développement web',
    date: '2023-08-30',
    client: {
      idclient: 8,
      firstName: 'Brian',
      lastName: 'Davis',
      companyName: 'WebAcademy'
    },
    prestations: [
      {
        description: 'Formation HTML/CSS',
        qty: 5,
        price: 150.0
      },
      {
        description: 'Formation JavaScript',
        qty: 3,
        price: 200.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 1350,
    tva: 20,
    totalTTC: 1620
  },
  {
    id: 9,
    billnum: 209345609,
    description: 'Campagne de marketing digital',
    date: '2023-05-20',
    client: {
      idclient: 9,
      firstName: 'Emily',
      lastName: 'Clark',
      companyName: 'MarketMinds'
    },
    prestations: [
      {
        description: 'Gestion de campagne Google Ads',
        qty: 2,
        price: 800.0
      },
      {
        description: 'Publicité sur les réseaux sociaux',
        qty: 3,
        price: 600.0
      }
    ],
    discount: 100.0,
    paid: 0.0,
    totalHT: 3400,
    tva: 20,
    totalTTC: 4080
  },
  {
    id: 10,
    billnum: 209345610,
    description: 'Développement d’un logiciel sur mesure',
    date: '2023-11-12',
    client: {
      idclient: 10,
      firstName: 'James',
      lastName: 'Brown',
      companyName: 'SoftTech'
    },
    prestations: [
      {
        description: 'Analyse des besoins',
        qty: 2,
        price: 500.0
      },
      {
        description: 'Développement logiciel',
        qty: 10,
        price: 450.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 5500,
    tva: 20,
    totalTTC: 6600
  },
  {
    id: 11,
    billnum: 209345611,
    description: 'Installation de systèmes de sécurité',
    date: '2023-04-11',
    client: {
      idclient: 11,
      firstName: 'Sophia',
      lastName: 'Taylor',
      companyName: 'SecureHome'
    },
    prestations: [
      {
        description: 'Installation de caméras',
        qty: 5,
        price: 300.0
      },
      {
        description: 'Installation d’alarmes',
        qty: 2,
        price: 500.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 2500,
    tva: 20,
    totalTTC: 3000
  },
  {
    id: 12,
    billnum: 209345612,
    description: 'Consultation en cybersécurité',
    date: '2023-03-25',
    client: {
      idclient: 12,
      firstName: 'Daniel',
      lastName: 'Anderson',
      companyName: 'CyberGuard'
    },
    prestations: [
      {
        description: 'Audit de sécurité',
        qty: 1,
        price: 1500.0
      },
      {
        description: 'Formation en cybersécurité',
        qty: 2,
        price: 750.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3000,
    tva: 20,
    totalTTC: 3600
  },
  {
    id: 13,
    billnum: 209345613,
    description: 'Développement de solution e-commerce',
    date: '2023-12-01',
    client: {
      idclient: 13,
      firstName: 'Olivia',
      lastName: 'Martinez',
      companyName: 'ShopOnline'
    },
    prestations: [
      {
        description: 'Création de la boutique en ligne',
        qty: 5,
        price: 500.0
      },
      {
        description: 'Intégration de moyens de paiement',
        qty: 2,
        price: 400.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 3300,
    tva: 20,
    totalTTC: 3960
  },
  {
    id: 14,
    billnum: 209345614,
    description: 'Conception de cartes de visite',
    date: '2023-09-10',
    client: {
      idclient: 14,
      firstName: 'Ava',
      lastName: 'Rodriguez',
      companyName: 'PrintDesign'
    },
    prestations: [
      {
        description: 'Design de cartes de visite',
        qty: 2,
        price: 200.0
      },
      {
        description: 'Impression de cartes de visite',
        qty: 100,
        price: 2.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 400,
    tva: 20,
    totalTTC: 480
  },
  {
    id: 15,
    billnum: 209345615,
    description: 'Consultation en gestion de projet',
    date: '2023-05-30',
    client: {
      idclient: 15,
      firstName: 'Noah',
      lastName: 'Garcia',
      companyName: 'ProjectMaster'
    },
    prestations: [
      {
        description: 'Planification de projet',
        qty: 5,
        price: 300.0
      },
      {
        description: 'Suivi et reporting',
        qty: 3,
        price: 200.0
      }
    ],
    discount: 50.0,
    paid: 0.0,
    totalHT: 1950,
    tva: 20,
    totalTTC: 2340
  },
  {
    id: 16,
    billnum: 209345616,
    description: 'Création de contenu vidéo',
    date: '2023-02-14',
    client: {
      idclient: 16,
      firstName: 'Ethan',
      lastName: 'Wilson',
      companyName: 'MediaCreators'
    },
    prestations: [
      {
        description: 'Tournage vidéo',
        qty: 2,
        price: 600.0
      },
      {
        description: 'Montage vidéo',
        qty: 3,
        price: 400.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 2000,
    tva: 20,
    totalTTC: 2400
  },
  {
    id: 17,
    billnum: 209345617,
    description: 'Service de traduction',
    date: '2023-07-19',
    client: {
      idclient: 17,
      firstName: 'Mason',
      lastName: 'Moore',
      companyName: 'TranslatePro'
    },
    prestations: [
      {
        description: 'Traduction anglais-français',
        qty: 10,
        price: 100.0
      },
      {
        description: 'Relecture et correction',
        qty: 5,
        price: 50.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 1250,
    tva: 20,
    totalTTC: 1500
  },
  {
    id: 18,
    billnum: 209345618,
    description: 'Gestion de campagnes publicitaires',
    date: '2023-11-05',
    client: {
      idclient: 18,
      firstName: 'Amelia',
      lastName: 'Young',
      companyName: 'AdMasters'
    },
    prestations: [
      {
        description: 'Création de bannières publicitaires',
        qty: 4,
        price: 250.0
      },
      {
        description: 'Gestion de campagnes PPC',
        qty: 3,
        price: 400.0
      }
    ],
    discount: 100.0,
    paid: 0.0,
    totalHT: 2300,
    tva: 20,
    totalTTC: 2760
  },
  {
    id: 19,
    billnum: 209345619,
    description: 'Développement d’une plateforme e-learning',
    date: '2023-06-15',
    client: {
      idclient: 19,
      firstName: 'Lucas',
      lastName: 'Wright',
      companyName: 'EduTech'
    },
    prestations: [
      {
        description: 'Analyse des besoins',
        qty: 3,
        price: 400.0
      },
      {
        description: 'Développement de la plateforme',
        qty: 10,
        price: 500.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 6200,
    tva: 20,
    totalTTC: 7440
  },
  {
    id: 20,
    billnum: 209345620,
    description: 'Création d’illustrations',
    date: '2023-04-03',
    client: {
      idclient: 20,
      firstName: 'Benjamin',
      lastName: 'Hall',
      companyName: 'ArtisticCreations'
    },
    prestations: [
      {
        description: 'Illustration pour site web',
        qty: 5,
        price: 200.0
      },
      {
        description: 'Illustration pour brochure',
        qty: 3,
        price: 150.0
      }
    ],
    discount: 50.0,
    paid: 0.0,
    totalHT: 1250,
    tva: 20,
    totalTTC: 1500
  },
  {
    id: 21,
    billnum: 209345621,
    description: 'Consultation en stratégie de marque',
    date: '2023-03-10',
    client: {
      idclient: 21,
      firstName: 'Henry',
      lastName: 'Lopez',
      companyName: 'BrandingGurus'
    },
    prestations: [
      {
        description: 'Audit de la marque',
        qty: 1,
        price: 1000.0
      },
      {
        description: 'Stratégie de positionnement',
        qty: 2,
        price: 600.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 2200,
    tva: 20,
    totalTTC: 2640
  },
  {
    id: 22,
    billnum: 209345622,
    description: 'Optimisation de l’interface utilisateur',
    date: '2023-08-22',
    client: {
      idclient: 22,
      firstName: 'Samantha',
      lastName: 'Harris',
      companyName: 'UXOptimize'
    },
    prestations: [
      {
        description: 'Analyse des parcours utilisateurs',
        qty: 2,
        price: 500.0
      },
      {
        description: 'Tests utilisateurs',
        qty: 3,
        price: 300.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 1900,
    tva: 20,
    totalTTC: 2280
  },
  {
    id: 23,
    billnum: 209345623,
    description: 'Rédaction de contenu web',
    date: '2023-10-20',
    client: {
      idclient: 23,
      firstName: 'David',
      lastName: 'King',
      companyName: 'ContentMasters'
    },
    prestations: [
      {
        description: 'Articles de blog',
        qty: 10,
        price: 150.0
      },
      {
        description: 'Pages de site web',
        qty: 5,
        price: 200.0
      }
    ],
    discount: 100.0,
    paid: 0.0,
    totalHT: 2750,
    tva: 20,
    totalTTC: 3300
  },
  {
    id: 24,
    billnum: 209345624,
    description: 'Optimisation de la vitesse de site web',
    date: '2023-05-25',
    client: {
      idclient: 24,
      firstName: 'Logan',
      lastName: 'Allen',
      companyName: 'SpeedOptimize'
    },
    prestations: [
      {
        description: 'Analyse de performance',
        qty: 1,
        price: 500.0
      },
      {
        description: 'Optimisation du code',
        qty: 3,
        price: 400.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 1700,
    tva: 20,
    totalTTC: 2040
  },
  {
    id: 25,
    billnum: 209345625,
    description: 'Développement de chatbot',
    date: '2023-12-15',
    client: {
      idclient: 25,
      firstName: 'Harper',
      lastName: 'Scott',
      companyName: 'ChatBots'
    },
    prestations: [
      {
        description: 'Développement de chatbot',
        qty: 4,
        price: 600.0
      },
      {
        description: 'Intégration avec CRM',
        qty: 2,
        price: 800.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 4000,
    tva: 20,
    totalTTC: 4800
  },
  {
    id: 26,
    billnum: 209345626,
    description: 'Configuration de serveurs',
    date: '2023-07-05',
    client: {
      idclient: 26,
      firstName: 'Sebastian',
      lastName: 'Lewis',
      companyName: 'ServerSolutions'
    },
    prestations: [
      {
        description: 'Configuration de serveurs web',
        qty: 2,
        price: 1000.0
      },
      {
        description: 'Configuration de serveurs de base de données',
        qty: 2,
        price: 1200.0
      }
    ],
    discount: 0.0,
    paid: 0.0,
    totalHT: 4400,
    tva: 20,
    totalTTC: 5280
  }
]
