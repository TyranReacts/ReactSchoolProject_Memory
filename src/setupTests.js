// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import chai from 'chai'
import dirtyChai from 'dirty-chai' // allows to write assertion properties of chai like methods (to trigger explicit errors if typo)
import createChaiJestDiff from 'chai-jest-diff' // factory for displaying Assertion difference (when test fails) same way as for jest
import Adapter from 'enzyme-adapter-react-16' // enzyme configuration adapter for React 16
//import { configure as configureEnzyme } from 'enzyme' // enzyme configurator (didn't work)
import createChaiEnzyme from 'chai-enzyme' // plugin factory for chai (assertions de métier d'enzyme pour chai)
// 'react-test-renderer' (également installé pour enzyme) est une surcouche de la stack de test de React
import Enzyme from 'enzyme'

chai
    .use(dirtyChai)
    .use(createChaiJestDiff())
    .use(createChaiEnzyme()) // forgot to use it first and had an error when I ran to.contain()

//configureEnzyme({adapter: new Adapter()}) // didn't work
Enzyme.configure({ adapter: new Adapter()})