<template>
  <div @click="onEditor" class="m-0">
    <Header/>
    <Alert title="편집" description="에디터의 텍스트 선택 시 수정이 가능합니다." />
    <div class="flex flex-wrap bg-gray-100 py-10 justify-center">
    
      <div class="flex-auto px-8">
        <div class="flex items-center my-10 w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800">
          <div ref="editor" v-html="htmlString"></div>
        </div>
      </div>
      <div class="flex-1 px-8">
        <div class="flex items-center">
          <Button name="redo" classes="flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500"/>
          <Button name="undo" classes="flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500 ml-3"/>
          <Button name="upload" classes="flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500 ml-3"/>
          <Button name="file" classes="flex items-center font-bold w-100 bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold px-2 py-2 text-base text-sm rounded-full border-indigo-500 ml-3"/>
        </div>

        <div class="flex items-center my-5 w-full mx-auto rounded-lg bg-white shadow p-3 text-gray-800">
          <input type="text" ref="link" id="link" class="border-l border-t border-b border-gray-200 rounded-l-md w-full text-base text-sm px-3 py-2" placeholder="Enter Your link">
          <Button name="link" classes="flex items-center bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold capitalize px-3 py-2 text-base text-sm rounded-r-md border-t border-r border-b border-indigo-500" @click="onLinked"/>
        </div>

        <Button name="submit" @click="onSubmit"/>
      </div>
    </div>

    <div class="flex flex-wrap bg-gray-200">
      <div class="xl:w-1/3 md:w-1/2 px-2 h-48">
        <div class="items-center my-10 w-full mx-auto rounded bg-white shadow p-5 text-gray-800">
          <label for="metaJson" class="block text-3xl text-gray-700 font-semibold leading-tight my-3">meta</label>
          <textarea id="metaJson" class="h-80 w-full text-sm text-gray-500 leading-tight" placeholder="json" v-model="metaString"></textarea>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 px-2">
        <div class="items-center my-10 w-full mx-auto rounded bg-white shadow p-5 text-gray-800">
          <label for="template" class="block text-3xl text-gray-700 font-semibold leading-tight my-3">template</label>
          <textarea id="template" class="h-80 w-full text-sm text-gray-500 leading-tight" placeholder="html" v-model="htmlString"></textarea>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 px-2">
        <div class="items-center my-10 w-full mx-auto rounded bg-white shadow p-5 text-gray-800">
          <label for="result" class="block text-3xl text-gray-700 font-semibold leading-tight my-3">result</label>
          <textarea id="result" class="h-80 w-full text-sm text-gray-500 leading-tight" placeholder="result" v-model="resultString"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import Alert from '@/components/Alert/index.vue';
import Button from '@/components/Button/index.vue';

export default {
  name: 'ContentEditor',
  components: {
    Header,
    Alert,
    Button,
  },
  data() {
    return {
      htmlString: this.html,
      metaString: this.meta,
      prevHtmlString: '',
      resultString: '',
    };
  },
  props: {
    html: String,
    meta: String,
  },
  mounted() {
    this.setTemplate();
  },
  methods: {
    cleanTemplate() {
      this.prevHtmlString = this.$refs.editor.innerHTML;
      const elem = this.$el.querySelectorAll('[contenteditable]');
      const link = this.$el.querySelectorAll('[data-link]');

      elem.forEach(node => {
        node.removeAttribute('contenteditable');
      });

      link.forEach(node => {
        node.removeAttribute('data-link');
      });
    },
    setTemplate() {
      try {
        const meta = JSON.parse(this.metaString);
        const text = meta.text;
        const link = meta.link;
        this.container = meta.container;

        text.forEach(selector => {
          const elem = this.$el.querySelector(selector);
          if (elem) {
            elem.setAttribute('contenteditable', true);
          }
        });

        link.forEach(selector => {
          const elem = this.$el.querySelector(selector);
          if (elem) {
            elem.setAttribute('data-link', true);
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    onEditor(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      const node = evt.target;
      const isLink = node.hasAttribute('data-link');

      if (isLink) {
        // @TODO
        this.onLink(node);
      }
    },
    onLinked() {
      if (this.linkNode) {
        this.linkNode.setAttribute('href', this.$refs.link.value);
        this.linkNode = this.$refs.link.value = '';
      }
    },
    onLink(node) {
      this.linkNode = node;
      this.$refs.link.value = node.href;
    },
    onSubmit() {
      this.cleanTemplate();
      this.resultString = this.$refs.editor.innerHTML;
      this.$emit('submit', this.resultString);
      this.htmlString = this.prevHtmlString;
    },
  },
  watch: {
    metaString() {
      this.cleanTemplate();
      this.setTemplate();
    },
    htmlString() {
      this.cleanTemplate();
      this.setTemplate();
    },
  },
};
</script>
