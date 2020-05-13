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
    A tool between Enzyme and Test-Utils to test components.
    <br/><br/>
    Only React is supported now, but if this project meets it's public, other frameworks will be supported.
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
    C'est ma boite! Pour l'instant je me vends en tant que dev freelance.
`,
      en: `My brand new company! For now I sell myself as a freelance web developer.`,
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
      en: `Sport app that adapts itself to it's users and their environnement.`,
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
      en: `App to manage aquariums' fauna.`,
    },
  },
].map((s) => ({ ...s, type: 'project' }))
