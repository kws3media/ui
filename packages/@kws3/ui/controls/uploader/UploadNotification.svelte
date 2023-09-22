<div class="uploads-notification">
  <div class="field has-addons mb-2">
    <div class="control is-expanded">
      <h4 class="title is-5 mb-0">
        {$activeUploadsCount} uploads
      </h4>
    </div>
    {#if canClose}
      <div class="control">
        <button type="button" class="delete" on:click={close}>close</button>
      </div>
    {/if}
  </div>
  <div class="mb-3">
    {#if $totalUploadProgress.remaining}
      <span class="has-text-danger"
        >{$totalUploadProgress.remaining} remaining {#if $totalUploadProgress.failed}<strong
            >({$totalUploadProgress.failed} failed)</strong
          >{/if}</span>
    {:else}
      <span class="has-text-success"
        ><Icon icon="check" size="small" /> All uploads complete</span>
    {/if}
    <small
      class="has-text-grey is-pulled-right"
      style="cursor:pointer"
      on:click|preventDefault={toggleList}>
      Details <Icon icon="chevron-{showList ? 'up' : 'down'}" size="small" />
    </small>
  </div>
  {#if showList}
    <div class="uploads-list has-custom-scrollbar">
      <div transition:slide|local>
        {#each $uploadsList as item (item.__unique_id)}
          <div
            class="uploading-item field is-grouped mb-3"
            transition:slide|local>
            <UploadingItem item={item.state} />
            {#if item.state.status === "failed"}
              <div class="control">
                <button
                  type="button"
                  class="button is-small is-danger"
                  on:click={() => {
                    remove(item);
                  }}><Icon icon="trash" size="" /></button>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <progress
      class="progress is-success"
      style="width:100%"
      max="100"
      value={$totalUploadProgress.progress || 0} />
  {/if}
</div>

<script>
  import { Icon } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import {
    activeUploadsCount,
    totalUploadProgress,
    uploadQueue,
    uploadsList,
  } from "../services/uploadQueueStore.js";
  import UploadingItem from "./UploadingItem.svelte";

  const fire = createEventDispatcher();

  let showList = false,
    tOut;

  $: canClose = $totalUploadProgress.active === 0;

  $: $totalUploadProgress, checkNothingLeft();

  const checkNothingLeft = () => {
    if (
      $totalUploadProgress.total === 0 &&
      $totalUploadProgress.complete === 0 &&
      !tOut
    ) {
      tOut = setTimeout(() => {
        close();
      }, 500);
    }
  };
  const close = () => fire("destroy", $$props);
  const toggleList = () => {
    showList = !showList;
  };
  const remove = (item) => {
    uploadQueue.removeItem(item.queue_name, item.__unique_id);
  };
</script>
