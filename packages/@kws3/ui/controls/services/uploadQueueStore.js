import { derived, writable } from "svelte/store";

const uploadQueueInit = () => {
  const store = writable({}),
    unsubList = {};

  const create = (queue_name, newItem) => {
    const __unique_id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    store.update((items) => {
      if (typeof items[queue_name] === "undefined") {
        items[queue_name] = [];
      }
      items[queue_name].push({ __unique_id, queue_name, state: {} });
      return items;
    });

    const unsub = newItem.subscribe((uploadState) => {
      updateItem(queue_name, __unique_id, uploadState);
    });

    unsubList[__unique_id] = unsub;
  };

  const removeItem = (queue_name, __unique_id) => {
    store.update((items) => {
      if (typeof items[queue_name] !== "undefined") {
        items[queue_name] = items[queue_name].filter((item) => {
          let match = item.__unique_id !== __unique_id;
          if (!match) {
            //unsubscribe from readable store
            unsubList[item.__unique_id] && unsubList[item.__unique_id]();
          }
          return match;
        });
      }

      return items;
    });
  };

  const clearCompleted = () => {
    store.update((items) => {
      for (let queue_name in items) {
        items[queue_name] = items[queue_name].slice().filter((item) => {
          if (item.state.status === "uploaded") {
            //unsubscribe from readable store
            unsubList[item.__unique_id] && unsubList[item.__unique_id]();
            return false;
          }
          return true;
        });
      }
      return items;
    });
  };

  const updateItem = (queue_name, __unique_id, uploadState) => {
    store.update((items) => {
      if (typeof items[queue_name] !== "undefined") {
        const _items = items[queue_name];
        _items.slice().forEach((i) => {
          if (i.__unique_id === __unique_id) {
            i.state = uploadState;
          }
        });

        items[queue_name] = _items;
      }
      return items;
    });
  };

  return {
    ...store,
    create,
    removeItem,
    clearCompleted,
  };
};

export const uploadQueue = uploadQueueInit();

export const activeUploadsCount = derived(uploadQueue, (que) => {
  let count = 0;
  for (let queue_name in que) {
    count += que[queue_name].length;
  }
  return count;
});

export const uploadsList = derived(uploadQueue, (que) => {
  let uploads = [];
  for (let queue_name in que) {
    uploads = uploads.concat(que[queue_name]);
  }
  return uploads;
});

export const totalUploadProgress = derived(uploadsList, (ulist) => {
  let total = 0,
    active = 0,
    complete = 0,
    sizeTotal = 0,
    failed = 0,
    uploadedTotal = 0;

  ulist.forEach((upload) => {
    const status = upload.state.status;
    total++;
    if (status !== "uploaded" && status !== "error") {
      active++;
    }
    if (status === "uploaded") {
      complete++;
    }
    if (status === "failed") {
      failed++;
    }
    sizeTotal += Number(upload.state.total);
    uploadedTotal += Number(upload.state.loaded);
  });

  return {
    total,
    active,
    complete,
    failed,
    remaining: total - complete,
    progress: Math.round((uploadedTotal / sizeTotal) * 100),
  };
});

export function registerUpload(queue_name, newItem) {
  uploadQueue.create(queue_name, newItem);
}
