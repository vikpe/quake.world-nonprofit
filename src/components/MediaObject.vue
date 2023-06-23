<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: false },
  icon: { type: String, required: false },
  color: { type: String, required: false, default: "text-white" },
});
</script>
<template>
  <div class="flex items-center">
    <img
      v-if="props.icon"
      :src="`/assets/img/${props.icon}`"
      alt=""
      class="h-14 w-14 mr-4"
    />
    <div class="space-y-0.5">
      <h2 :class="props.color" class="text-2xl">{{ props.title }}</h2>
      <div v-if="props.description" class="sm:text-lg">
        {{ props.description }}
      </div>
    </div>
  </div>
</template>
