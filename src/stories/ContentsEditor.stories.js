import Editor from '@/components/ContentsEditor/index.vue';
import templateJson from '@/components/ContentsEditor/data/templateJson';
import metaJson from '@/components/ContentsEditor/data/metaJson';

export default {
  title: 'ContentsEditor/kit/ContentEditor',
  component: Editor,
};

const Template = (args, { argTypes }) => ({
  components: {
    Editor,
  },
  props: Object.keys(argTypes),
  template: '<Editor v-bind="$props"></Editor>',
});

const html = `<div id="contiContainer1837">
  <div>
    <h1 class="title">컨텐츠 제목입니다.</h1>
    <ul>
      <li class="desc1">이 영역은 수정할 수 있어요.</li>
      <li class="desc2">수정할 수 없어요.</li>
    </ul>
    <a href="https://github.com/ingpdw" class="link">링크를 수정할 수 있어요.</a>
  </div>
</div>`;

const meta = {
  container: '#contiContainer1837',
  text: ['#contiContainer1837 .title', '#contiContainer1837 .desc1'],
  link: ['#contiContainer1837 .link'],
};

export const Default = Template.bind({});
Default.args = {
  html,
  meta: JSON.stringify(meta, null, 2),
};
