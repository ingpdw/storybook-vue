import MySearch from '../components/Search/index.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ContentsEditor/Search',
  component: MySearch,
};

const actions = {
  OnSearch: action('OnSearch'),
};

const Template = (args, { argTypes }) => ({
  components: {
    MySearch,
  },
  props: Object.keys(argTypes),
  methods: actions,
  template: '<my-search v-bind="$props"  @search="OnSearch" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
};
