import { describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Filter from './Filter';

describe('Filter', () => {
  test('form labels', () => {
    const wrapper = mount(Filter, { props: {} });
    wrapper.get('form');
  });
});
