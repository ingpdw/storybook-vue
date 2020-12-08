import MyButton from '../components/Button/index.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ContentsEditor/ui/Button',
  component: MyButton,
};

const actions = {
  clicked: action('clicked'),
};

const Template = (args, { argTypes }) => ({
  components: {
    MyButton,
  },
  props: Object.keys(argTypes),
  methods: actions,
  template: '<my-button v-bind="$props" @click="clicked"/>',
});

export const Default = Template.bind({});

export const Redo = Template.bind({});
Redo.args = {
  name: 'redo',
  classes: 'flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500',
};

export const Undo = Template.bind({});
Undo.args = {
  name: 'undo',
  classes: 'flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500',
};

export const Upload = Template.bind({});
Upload.args = {
  name: 'upload',
  classes: 'flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500',
};

export const File = Template.bind({});
File.args = {
  name: 'file',
  classes: 'flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500',
};

export const Link = Template.bind({});
Link.args = {
  name: 'link',
};

export const Submit = Template.bind({});
Submit.args = {
  name: 'submit',
};
