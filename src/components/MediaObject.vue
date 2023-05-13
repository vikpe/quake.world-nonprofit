<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: false },
  icon: { type: String, required: false },
});
</script>
<template>
  <div class="flex items-center my-6">
    <img
      v-if="props.icon"
      :src="`/assets/icons/${props.icon}.svg`"
      alt=""
      class="h-14 w-14 mr-4"
    />
    <div class="space-y-1">
      <h2 class="text-3xl">{{ props.title }}</h2>
      <div class="text-lg">{{ props.description }}</div>
    </div>
  </div>
</template>
