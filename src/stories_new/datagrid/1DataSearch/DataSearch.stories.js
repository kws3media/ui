import Decorator from "./DataSearch.svelte";
import { DataSearch } from '@kws3/ui';

let args={
  hasSearch : true,
  hasFilters : false,
  placeholder : "Search",
  filters : {
      "role": [
          {"name": "Administrator","id": "A"},
          {"name": "User","id": "U"}
      ],
      "status": [
          {"name": "Active", "id": 1},
          {"name": "Disabled","id": 0}
      ]
  },
  q : "",
  filter_in_use_class : "is-in-use",
  filter_not_in_use_class : "is-not-in-use",
  filterComponent : null,
  filter_label_map : {}
};

export default {
  title: "Datagrid/DataSearch",
  component: DataSearch,
  args: args,
  argTypes: {},
};

export const Main = {
  component: Decorator,
  args: args,
  argTypes: {},
};
