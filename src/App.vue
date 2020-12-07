<template>
  <div id="app">
    <ContentEditor :html="htmlString" :meta="metaJsonString" @submit="onSubmit"></ContentEditor>
  </div>
</template>

<script>
import templateJson from '@/components/ContentsEditor/data/templateJson';
import metaJson from '@/components/ContentsEditor/data/metaJson';
import ContentEditor from '@/components/ContentsEditor/index.vue';

export default {
  name: 'App',
  data() {
    return {
      templateJson,
      metaJson,
    };
  },
  components: {
    ContentEditor,
  },
  computed: {
    htmlString() {
      return this.templateJson.html;
    },
    metaJsonString() {
      return JSON.stringify(this.metaJson, null, 2);
    },
  },
  methods: {
    onSubmit(value) {
      this.result = value;
    },
  },
}
</script>

