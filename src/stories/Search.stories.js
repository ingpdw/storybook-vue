import MySearch from '../components/Search/index.vue';

export default {
  title: 'ContentsEditor/Search',
  component: MySearch,
};

const Template = (args, { argTypes }) => ({
  components: {
    MySearch,
  },
  props: Object.keys(argTypes),
  template: '<my-search v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
};
