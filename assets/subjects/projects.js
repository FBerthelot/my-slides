export default [
  {
    name: 'component-test-utils',
    metaInfo: 'Beta public',
    description: `
    Un outils entre enzyme et test-utils qui permet de tester des composants.
<br/><br/>
    Pour l'instant seul react est supporté, mais si le projet prends, alors d'autres frameworks verrons le jour
`,
    link: 'https://component-test-utils.berthelot.io/',
  },
  {
    name: 'WeFacto',
    metaInfo: 'En construction',
    description: `
    C'est ma boite, pour l'instant je suis seul et me vend en tant que dev freelance.
`,
  },
  {
    name: `Coach'A`,
    metaInfo: 'En construction',
    description: `
    Application de sport qui s'adapte un maximum aux utilisateurs et à leurs environnement.
`,
  },
  {
    name: `Aqua-compose`,
    metaInfo: 'En construction',
    description: `
    Application permettant de gérer le vivant des aquariums.
`,
  },
].map((s) => ({ ...s, type: 'project' }))
