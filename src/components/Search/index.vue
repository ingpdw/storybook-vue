
<template>
  <div class="relative">
    <div class="absolute text-gray-200 flex items-center pl-4 h-full cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current">
        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
        ></path>
      </svg>
    </div>
    <input
      class="w-full bg-dim-400 border-dim-400 text-gray-900 focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 font-normal h-9 flex items-center pl-12 text-sm rounded-full border shadow"
      :placeholder="placeholder"
      @keyup.enter="onSubmit"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    placeholder: String,
  },
  methods: {
    onSubmit(evt) {
      const text = evt.target.value;
      this.$emit('search', text);
    }
  }
}
</script>

