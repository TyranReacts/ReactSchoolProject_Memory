// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import createChaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJson from 'enzyme-to-json'

chai
    .use(dirtyChai)
    .use(createChaiJestDiff())
    .use(createChaiEnzyme())
    .use(sinonChai)
    .use(chaiJestSnapshot)

Enzyme.configure({ adapter: new Adapter()})
// expect.addSnapshotSerializer(enzymeToJson) // not working, I changed package.json instead

