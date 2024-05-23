import { LuxLibraryHeader } from 'lux-design-system';

export default {
  name: 'Header',
  props: {
    title: String
  },
  components: {
    LuxLibraryHeader: LuxLibraryHeader
  },
  template: `
    <header>
      <LuxLibraryHeader :appName="title"></LuxLibraryHeader>
    </header>
  `
};
