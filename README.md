# Testing with React done right!

Testing with React is possible but
- Use TestUtils which requires heavyweight jsdom or phantomjs
- Shallow rendering - cumbersome, verbose and brittle

# How can we do it right

`react-unit` to the rescue

# React Component Types

- Smart - access to state and handles the actions
- Composite - renders multiple other components
- Dumb - renders some html
