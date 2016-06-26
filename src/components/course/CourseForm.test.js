import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(changedProps = {}) {
  const defaultProps = {
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = Object.assign({}, defaultProps, changedProps);
  return shallow(<CourseForm {...props} />);
}

describe('CourseForm', () => {

  it('should render a form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  describe('Title field', () => {
    it('should render', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'title'}).length).toBe(1);
    });

    it('should render prefilled', () => {
      const newTitle = 'myNewTitle';
      const wrapper = setup({course: {title: newTitle}});
      expect(wrapper.find({name: 'title'}).props().value).toBe(newTitle);
    });

    it.skip('should update state when changed', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'title'}).length).toBe(1);
    });
  });

  describe('Author field', () => {
    it('should render', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'authorId'}).length).toBe(1);
    });

    it('should render prefilled', () => {
      const authorId = 'sander-houttekier';
      const wrapper = setup({course: {authorId: authorId}});
      expect(wrapper.find({name: 'authorId'}).props().value).toBe(authorId);
    });

    it.skip('should update state when changed', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'authorId'}).length).toBe(1);
    });
  });

  describe('Category field', () => {
    it('should render', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'category'}).length).toBe(1);
    });

    it('should render prefilled', () => {
      const category = 'myNewCategory';
      const wrapper = setup({course: {category: category}});
      expect(wrapper.find({name: 'category'}).props().value).toBe(category);
    });

    it.skip('should update state when changed', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'category'}).length).toBe(1);
    });
  });

  describe('Length field', () => {
    it('should render', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'length'}).length).toBe(1);
    });

    it('should render prefilled', () => {
      const myLength = 'myNewLength';
      const wrapper = setup({course: {length: myLength}});
      expect(wrapper.find({name: 'length'}).props().value).toBe(myLength);
    });

    it.skip('should update state when changed', () => {
      const wrapper = setup();
      expect(wrapper.find({name: 'length'}).length).toBe(1);
    });
  });

  describe('Submit button', () => {
    it('should render', () => {
      const wrapper = setup();
      expect(wrapper.find('input').length).toBe(1);
    });

    it('should render a submit button labeled "Save" when not saving', () => {
      const wrapper = setup();
      expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('should render a submit button labeled "Saving..." when saving', () => {
      const wrapper = setup({saving: true});
      expect(wrapper.find('input').props().value).toBe('Saving...');
    });
  });

});
