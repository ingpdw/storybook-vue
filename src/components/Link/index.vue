<template>
<div class="flex items-center my-5 w-full mx-auto rounded-lg bg-white shadow p-3 text-gray-800">
  <input type="text" ref="link" id="link" class="border-l border-t border-b border-gray-200 rounded-l-md w-full text-base text-sm px-3 py-2" placeholder="Enter Your link">
  <Button name="link" classes="flex items-center bg-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 text-white font-bold capitalize px-3 py-2 text-base text-sm rounded-r-md border-t border-r border-b border-indigo-500" @click="clicked" />
</div>
</template>

<script>
import Button from '@/components/Button/index.vue';

export default {
  name: 'Link',
  components: {
    Button,
  },
  methods: {
    clicked () {
      this.$emit('click');
    }
  }
}
</script>

