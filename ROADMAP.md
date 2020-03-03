# Tech Roadmap
This is what we need to do to build a nice, simple, well maintained application.

## Very basic set up
We should have the basic files in place before we install any dependencies
- .editorconfig
- .gitignore
- ROADMAP.md
- package.json
- tsconfig.json
- .babelrc
- eslint

## Dependencies
We should have a simple set of dependencies that are well supported and adhere to industry standards.

- add packages with NPM for testing development purposes
	- [webpack](https://www.npmjs.com/package/webpack) to package everything
	- [typescript](https://www.npmjs.com/package/typescript) is what this app will be written in
	- [@babel/*](https://www.npmjs.com/package/Babel) will convert Typescript to Javascript
	- [eslint]

- add packages with NPM for implemetation
	- [React](https://www.npmjs.com/package/react)
	- [React Redux](https://www.npmjs.com/package/react-redux)
	- [Styled Components](styled-components)

## Nice to have
- implement server side rendering
- use Redux Saga
- use Storybook for component rendering/documentation
- tidy up path imports with aliasing