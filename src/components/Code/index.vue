<template>
<div class="items-center my-10 w-full mx-auto rounded bg-white shadow p-5 text-gray-800">
  <label 
    :for="name" 
    class="block text-3xl text-gray-700 font-semibold leading-tight my-3"
  >
    {{name}}
  </label>
  <textarea
    :id="name"
    class="h-80 w-full text-sm text-gray-500 leading-tight" 
    :placeholder="placeholder" 
    v-model="htmlString">
  </textarea>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: {
      default: 'template',
    },
    placeholder: {
      default: ''
    },
  }
}
</script>