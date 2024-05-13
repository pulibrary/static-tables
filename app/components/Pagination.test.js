import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Pagination from './Pagination';
describe('Pagination', () => {
  test('it emits event pageSizeChange when pagination option is clicked', () => {
    const wrapper = mount(Pagination, {
      props: {}
    });

    wrapper.get('#size-5').trigger('click');

    expect(wrapper.emitted()['pageSizeChange'].length).toEqual(1);
    expect(wrapper.emitted()['pageSizeChange'][0]).toEqual([5]);
  });
});
