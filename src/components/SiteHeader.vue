<script lang="ts" setup></script>
<template>
  <div class="sm:flex justify-between">
    <div
      class="py-2 my-4"
      style="
        background: url(/assets/img/quake_ranger.jpg) no-repeat left center;
        background-size: auto 100%;
      "
    >
      <div class="ml-16 sm:ml-20">
        <h1 class="text-2xl sm:text-4xl sm:mb-1">
          Quake<span class="text-sky-400">.</span>World
        </h1>
        <div class="text-sky-200 text-sm sm:text-base">
          a non-profit supporting QuakeWorld
        </div>
      </div>
    </div>
    <div class="flex items-center my-4">
      <a
        class="flex items-center p-2 justify-between border border-blue-300/20 hover:border-blue-300/20 bg-gradient-to-b from-blue-600/40 to-blue-600/20 opacity-70 hover:opacity-100 lg:rounded"
        href="https://opencollective.com/quakeworld"
        title="Quake.World Open Collective"
      >
        <img class="w-8 h-8" src="/assets/img/logos/open_collective.svg" />
        <span class="ml-0.5 pr-1.5 app-font-slab">Open Collective</span>
        <img
          class="w-4 h-4 opacity-70"
          src="/assets/img/icons/arrow_forward_ios.svg"
        />
      </a>
    </div>
  </div>
</template>
