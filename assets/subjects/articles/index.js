import reactRefactoring from './react-test-refactoring-snapshot.md'

export default [
  {
    name:
      'React refactoring: Kills of the legacy with snapshot testing (part 1)',
    slug: 'react-test-refactoring-snapshot',
    content: reactRefactoring,
    date: new Date('2020-05-29'),
    description: `
      You have a big piece of react code but you don't know to properly refactor it?
      This is the first part of the guide to do it
    `,
  },
].map((s) => ({ ...s, type: 'article' }))
