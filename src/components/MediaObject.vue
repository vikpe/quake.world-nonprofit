<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: false },
  icon: { type: String, required: false },
  color: { type: String, required: false, default: "text-white" },
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
      <h2 :class="props.color" class="text-2xl">{{ props.title }}</h2>
      <div v-if="props.description" class="text-lg">
        {{ props.description }}
      </div>
    </div>
  </div>
</template>
