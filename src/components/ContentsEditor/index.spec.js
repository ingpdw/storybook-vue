import { mount, shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import ContentEditor from '@/components/ContentEditorOld/index.vue';
import templateJson from '@/components/ContentEditorOld/data/templateJson.js';
import metaJson from '@/components/ContentEditorOld/data/metaJson.js';

describe('ContentEditor.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ContentEditor, {
      props: {
        html: templateJson.html,
        meta: JSON.stringify(metaJson),
      },
    });
  });

  test.skip('에디터가 정상적으로 생성된다.', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBe(true);
  });

  test('html이 정상적으로 생성된다.', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBe(true);
    expect(title.text()).toMatch('제목');
    expect(wrapper.find('.desc1').text()).toMatch('1. 내용입니다.');
    expect(wrapper.find('.desc2').text()).toMatch('2. 내용입니다.');
  });

  test('data-text값이 정상적으로 셋팅된다.', () => {
    expect(wrapper.find('h1').attributes('contenteditable')).toBeTruthy();
    expect(wrapper.find('.desc1').attributes('contenteditable')).toBeTruthy();
    expect(wrapper.find('.desc2').attributes('contenteditable')).toBeUndefined();
  });

  test('링크 input이 정상 노출된다.', () => {
    const inputLink = wrapper.find('#link');
    expect(inputLink.exists()).toBe(true);
  });

  test('링크를 클릭하면 input에 링크값이 들어간다.', () => {
    const link = wrapper.find('[data-link]');
    const inputLink = wrapper.find('#link');
    link.trigger('click');
    expect(inputLink.element.value).toBe(link.attributes('href'));
  });

  test('링크를 클릭하면 input에 링크값이 들어간다.', () => {
    const link = wrapper.find('[data-link]');
    const inputLink = wrapper.find('#link');
    link.trigger('click');
    expect(inputLink.element.value).toBe(link.attributes('href'));
  });

  test('링크를 클릭하면 input에 링크값이 들어간다.', () => {
    const link = 'http://change.plaync.com/';
    const linkDom = wrapper.find('[data-link]');
    const inputLink = wrapper.find('#link');
    const btnLink = wrapper.find('#btnLink');
    linkDom.trigger('click');

    inputLink.setValue(link);

    btnLink.trigger('click');

    expect(linkDom.attributes('href')).toBe(link);
  });

  test('submit이 정상 동작한다.', () => {
    expect(wrapper.vm.$data.resultString).toBe('');
    const btnSubmit = wrapper.find('#btnSubmit');
    btnSubmit.trigger('click');
    expect(wrapper.vm.$data.resultString).toContain('contiContainer1837');
  });

  test.skip('이미지가 정상적으로 노출된다', () => {});

  test.skip('이미지가 정상적으로 변경된다', () => {});
});
