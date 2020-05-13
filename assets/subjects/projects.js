export default [
  {
    name: 'component-test-utils',
    metaInfo: {
      fr: 'Beta public',
      en: 'Beta public',
    },
    description: {
      fr: `
    Un outils entre enzyme et test-utils qui permet de tester des composants.
<br/><br/>
    Pour l'instant seul react est supporté, mais si le projet prends, alors d'autres frameworks verrons le jour
`,
      en: `
    Tool between enzyme and test-utils to test components.
    <br/><br/>
    Only react is supported now, but if project meet his public other frameworks will be supported.
  `,
    },
    link: 'https://component-test-utils.berthelot.io/',
  },
  {
    name: 'WeFacto',
    metaInfo: {
      fr: 'En construction',
      en: 'Work In Progress',
    },
    description: {
      fr: `
    C'est ma boite, pour l'instant je suis seul et me vend en tant que dev freelance.
`,
      en: `My company. I'm the only one in it for now and I sell myself as a freelance web developer.`,
    },
  },
  {
    name: `Coach'A`,
    metaInfo: {
      fr: 'En construction',
      en: 'Work In Progress',
    },
    description: {
      fr: `
    Application de sport qui s'adapte un maximum aux utilisateurs et à leur environnement.
`,
      en: `Sport application that adapt itself to users and their environnement.`,
    },
  },
  {
    name: `Aqua-compose`,
    metaInfo: {
      fr: 'En construction',
      en: 'Work In Progress',
    },
    description: {
      fr: `
    Application permettant de gérer le vivant des aquariums.
`,
      en: `Application to manage life in aquariums`,
    },
  },
].map((s) => ({ ...s, type: 'project' }))
