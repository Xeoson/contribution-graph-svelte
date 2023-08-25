<script lang="ts">
  import { onMount } from "svelte";
  import { API_URL } from "../shared/const";
  import {
    formatDataKey,
    formatItemDate,
    getContributionColor,
    getDateRel,
    getDayCount,
    getMonths,
  } from "../shared/helpers";

  export let className: string | undefined;

  const months = getMonths();
  export const dayCount = getDayCount();

  let data: Record<string, number>;
  let openedIdx: number | undefined;

  onMount(async () => {
    const response = await fetch(API_URL);
    data = await response.json();
  });
</script>

<div class="{className} grid gap-1 grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
  <div class="flex justify-around col-start-2">
    {#each months as el (el)}
      <span class="text-xs text-secondary-200">{el}</span>
    {/each}
  </div>
  <div
    class="grid items-center w-4 col-start-1 gap-1 mr-2 text-xs text-secondary-200 grid-rows-7"
  >
    <div class="leading-4">Пн</div>
    <div class="self-end row-span-2 leading-4">Ср</div>
    <div class="self-end row-span-2 leading-4">Пт</div>
  </div>
  <div class="grid grid-flow-col gap-1 grid-cols-51 grid-rows-7">
    {#each Array.from({ length: dayCount + 1 }) as item, idx}
      {@const relDate = getDateRel(idx - dayCount)}
      {@const dataKey = formatDataKey(relDate)}
      {@const contributions = data?.[dataKey]}
      {@const color = getContributionColor(contributions)}
      <div
        on:click={() => {
          openedIdx = idx;
        }}
        on:pointerleave={() => {
          openedIdx = undefined;
        }}
        class={`${color} relative flex hover:outline-1 hover:outline outline-black h-4 w-4`}
      >
        {#if openedIdx === idx}
          <div
            class="border-md after:bg-black after:w-4 after:-translate-x-1/2 after:z-[-1] after:left-[50%] after:h-4 after:absolute left-[50%] -translate-x-1/2 after:bottom-[-10%] after:border-black after:border-r-2 after:border-b-2 after:rotate-45 bg-black text-white rounded-[0.1875rem] z-20 absolute bottom-[160%] py-1 px-2"
          >
            <div
              class="px-2 py-1 text-center text-secondary-100 w-max text-xxs"
            >
              <p class="text-xs text-white">
                {contributions
                  ? `${contributions} contributions`
                  : "No contributions"}
              </p>
              <p class="mt-1">{formatItemDate(relDate)}</p>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
