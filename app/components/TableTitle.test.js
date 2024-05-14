import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TableTitle from './TableTitle';

describe('TableTitle', () => {
  test('table title', () => {
    const wrapper = mount(TableTitle, {
      props: {
        title: 'Any old Title'
      }
    });
    const title = wrapper.get('.table-title');
    expect(title.text()).include('Any old Title');
  });
});
