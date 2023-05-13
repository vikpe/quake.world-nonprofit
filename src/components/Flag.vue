<script lang="ts" setup>
const props = defineProps({
  cc: { type: String, required: true },
});
</script>
<template>
  <img
    class="inline mr-0.5"
    :alt="props.cc"
    :src="`https://www.quakeworld.nu/images/flags/${props.cc}.gif`"
  />
</template>
