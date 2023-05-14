<script lang="ts" setup>
import { ref } from "vue";
import MediaObject from "#components/MediaObject.vue";
import { Link } from "#/types.ts";

const links = ref<Link[]>([]);

async function getData() {
  const res = await fetch("/data/qwnu.json");
  links.value = await res.json();
}

getData();
</script>
<template>
  <div class="mt-6 mb-8">
    <MediaObject
      description="A network of QuakeWorld related stuff."
      title="QuakeWorld.nu"
    />

    <hr />

    <div>DISCORD</div>

    <hr />

    <h4 class="text-lg">Websites</h4>
    <div class="grid gap-4 grid-cols-4 my-4">
      <a
        v-for="link in links"
        :href="link.url"
        class="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-between"
      >
        <div>
          <div class="font-bold text-lg">{{ link.title }}</div>
        </div>
        <img class="w-6 opacity-50" src="/assets/icons/arrow_forward_ios.svg" />
      </a>
    </div>

    <hr />

    <div class="mb-8">
      <h4 class="text-lg">Legacy/Archive</h4>

      <div class="grid gap-4 grid-cols-3 my-4">
        <a href="https://eql.quakeworld.nu/">European Quake League (EQL)</a>
        <a href="https://nqr.quakeworld.nu/">Nations Quake Rank (NQR)</a>
        <a href="https://qwdrama.quakeworld.nu/">qwdrama</a>
      </div>
    </div>
  </div>
</template>
