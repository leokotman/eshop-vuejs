Vue.component("header-search", {
  props: ["filteredGoods"],
  template: `<div class="header_search">
		<header-search-input v-on:input="searchLine = $event.target.value">
		</header-search-input>
		<button class="search-button" type="button" v-on:click="filterGoods" >
		Search</button>
	</div>`,

  data: function () {
    return {
      searchLine: "",
      hasnotFilterWorked: false,
    };
  },
  methods: {
    filterGoods() {
      console.log(searchLine);
      this.filteredGoods = this.filteredGoods.filter(
        (good) => good.title == searchLine
      );
      if (props.filteredGoods.length == 0) {
        hasnotFilterWorked = true;
      }
    },
  },
});

Vue.component("header-search-input", {
  template:
    '<input type="text" class="goods-search" v-on:input="searchLine = $event.target.value" v-bind:value="searchLine" />',

  data() {
    return {
      searchLine: "",
    };
  },
});
