import MyHeader from '@/components/Header/index.vue';

export default {
  title: 'ContentsEditor/ui/Header',
  component: MyHeader,
};

const Template = (args, { argTypes }) => ({
  components: {
    MyHeader,
  },
  props: Object.keys(argTypes),
  template: '<my-header v-bind="$props"/>',
});

export const Default = Template.bind({});

export const Title = Template.bind({});
Title.args = {
  title: 'pdw',
};
