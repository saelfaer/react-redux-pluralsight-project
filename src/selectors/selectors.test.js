import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'author-1', firstName: 'John', lastName: 'Snow'},
        {id: 'author-2', firstName: 'Arya', lastName: 'Stark'},
        {id: 'author-3', firstName: 'Tyrion', lastName: 'Lanister'}
      ];

      const expected = [
        {value: 'author-1', text: 'John Snow'},
        {value: 'author-2', text: 'Arya Stark'},
        {value: 'author-3', text: 'Tyrion Lanister'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
