<script lang="ts" setup>
import Supporters from "./components/Supporters.vue";
import Servers from "./components/Servers.vue";
import Streams from "./components/Streams.vue";
import Events from "./components/Events.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import TopLinks from "./components/TopLinks.vue";
</script>

<template>
  <div class="container min-w-[340px] max-w-6xl">
    <SiteHeader />

    <div class="space-y-6">
      <hr />

      <TopLinks />

      <div class="md:grid grid-cols-2 gap-6">
        <Servers />
        <Events />
      </div>

      <Streams />

      <Supporters />
    </div>

    <hr class="mt-12 mb-6" />

    <SiteFooter />
  </div>
</template>
