<script lang="ts" setup>
import { ref } from "vue";
import { OpenCollectiveUser } from "#/types.ts";
import * as _uniqby from "lodash.uniqby";

const supporters = ref<OpenCollectiveUser[]>([]);

async function getData() {
  const res = await fetch("/data/users.json");
  const allUsers: OpenCollectiveUser[] = await res.json();

  const backers = allUsers
    .filter((u) => u.role === "BACKER")
    .sort((a, b) => (a.totalAmountDonated > b.totalAmountDonated ? -1 : 0));
  supporters.value = _uniqby(backers, "name");
}

getData();
</script>

<template>
  <div class="m-8">
    <div class="flex items-center my-6">
      <img
        alt=""
        class="h-14 w-14 mr-4 animate-pulse"
        src="/assets/img/icons/favorite.svg"
      />
      <div class="space-y-1">
        <h2 class="text-3xl text-pink-500">
          Supporters ({{ supporters.length }})
        </h2>
        <div class="text-pink-300 text-lg">
          The following people have kindly donated money to support QuakeWorld.
        </div>
      </div>
    </div>
    <div class="flex gap-3">
      <div
        v-for="user in supporters"
        class="flex items-center justify-center rounded-xl px-3 py-1.5 bg-sky-500/10 border border-white/10"
      >
        {{ user.name }}
      </div>
    </div>
  </div>
</template>
