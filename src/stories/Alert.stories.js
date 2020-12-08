import MyAlert from '@/components/Alert/index.vue';

export default {
  title: 'ContentsEditor/Alert',
  component: MyAlert,
};

const Template = (args, { argTypes }) => ({
  components: {
    MyAlert,
  },
  props: Object.keys(argTypes),
  template: '<MyAlert v-bind="$props"></MyAlert>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  description: 'description',
};

export const EditorAlert = Template.bind({});
EditorAlert.args = {
  title: '편집',
  description: '에디터의 텍스트 선택 시 수정이 가능합니다.',
};
