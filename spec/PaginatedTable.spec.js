import { assert, expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils'

import PaginatedTable from '../app/components/PaginatedTable.js';

test('Component exists', () => {
  expect(PaginatedTable).toBeTruthy();
});

test('Last Page calculated correctly', () => {
  const wrapper = shallowMount(PaginatedTable, {
    propsData: {
      filteredRowCount: 50,
      pageSize: 10
    }
  });

  expect(wrapper.vm.lastPage()).toEqual(5);
});