<script lang="ts" setup>
const links = [
  {
    title: "Discord",
    description: "Community with 4000+ members",
    url: "https://discord.com/invite/quake-world-166866762787192833",
    logo: "discord.svg",
  },
  {
    title: "Hub",
    description: "Live games, streams and events",
    url: "https://hub.quakeworld.nu/",
    logo: "quakeworld_hub.png",
  },
  {
    title: "Wiki",
    description: "Everything QuakeWorld",
    url: "https://wiki.quakeworld.nu",
    logo: "wiki.png",
  },
];
</script>
<template>
  <div class="lg:grid mb-6 grid-cols-3 gap-4 space-y-2 lg:space-y-0">
    <a
      v-for="link in links"
      :key="link.title"
      :href="link.url"
      class="flex items-center p-4 justify-between border-2 border-blue-300/20 hover:border-blue-300/20 bg-gradient-to-b from-blue-600/40 to-blue-600/20 opacity-70 hover:opacity-100 lg:rounded"
    >
      <div class="flex items-center">
        <div
          :style="`background-image: url(/assets/img/logos/${link.logo})`"
          class="h-10 w-10 mr-4 bg-contain bg-no-repeat bg-center"
        />
        <div>
          <div class="app-font-slab">{{ link.title }}</div>
          <div class="text-sm text-gray-300">{{ link.description }}</div>
        </div>
      </div>

      <img
        class="w-5 h-5 opacity-70"
        src="/assets/img/icons/arrow_forward_ios.svg"
      />
    </a>
  </div>
</template>
