<script lang="ts" setup>
const props = defineProps({
  cc: { type: String, required: true },
});
</script>
<template>
  <img
    :alt="props.cc"
    :src="`https://www.quakeworld.nu/images/flags/${props.cc}.gif`"
    class="inline mr-0.5"
    height="11"
    width="16"
  />
</template>
