<script lang="ts" setup>
import { ref } from "vue";
import { OpenCollectiveUser } from "./../types.ts";
import uniqBy from "lodash.uniqby";

const supporters = ref<OpenCollectiveUser[]>([]);

async function getData() {
  const res = await fetch(
    "https://opencollective.com/quakeworld/members/all.json",
  );
  const allUsers: OpenCollectiveUser[] = await res.json();

  const backers = allUsers
    .filter((u) => u.role === "BACKER")
    .sort((a, b) => (a.totalAmountDonated > b.totalAmountDonated ? -1 : 0));
  supporters.value = uniqBy(backers, "name");
}

getData();
</script>

<template>
  <div class="p-8 border border-pink-600/30 bg-pink-600/10">
    <div class="sm:flex items-center justify-between">
      <div class="flex items-center">
        <img
          alt=""
          class="h-14 w-14 mr-4 animate-pulse"
          src="/assets/img/icons/favorite.svg"
        />
        <div>
          <h2 class="text-3xl text-pink-500 mb-0.5">
            Supporters ({{ supporters.length }})
          </h2>
          <div class="text-pink-300 sm:text-lg">
            The following people have kindly donated money to support
            QuakeWorld.
          </div>
        </div>
      </div>
      <a
        class="flex items-center p-3 text-white rounded-xl font-bold justify-center my-6 sm:my-0 bg-gradient-to-b from-pink-700 to-pink-800 hover:bg-pink-700 opacity-80 hover:opacity-100"
        href="https://opencollective.com/quakeworld/donate"
        >Donate
        <img
          alt=""
          class="w-4 h-4 ml-2"
          src="/assets/img/icons/arrow_forward_ios.svg"
      /></a>
    </div>
    <div class="flex flex-wrap gap-3 mt-6">
      <div
        v-for="user in supporters"
        class="flex items-center justify-center rounded-xl px-3 py-1.5 bg-sky-500/10 border border-white/10"
      >
        {{ user.name }}
      </div>
    </div>
  </div>
</template>
