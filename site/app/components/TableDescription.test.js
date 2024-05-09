import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TableDescription from './TableDescription';

describe('TableDescription', () => {
  test('table description', () => {
    const wrapper = mount(TableDescription, {
      props: {
        description: 'Foo directed to a Marquand staff member'
      }
    });
    const description = wrapper.get('.description');
    expect(description.text()).include('directed to a Marquand staff member');
  });
});
