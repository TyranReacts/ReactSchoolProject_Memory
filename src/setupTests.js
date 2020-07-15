// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import chai from 'chai'
import dirtyChai from 'dirty-chai' // allows to write assertion properties of chai like methods (to trigger explicit error if typo)
import createChaiJestDiff from 'chai-jest-diff' // factory for displaying Assertion difference (when test fails) same as for jest

chai.use(dirtyChai).use(createChaiJestDiff())
