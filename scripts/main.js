new Vue({
	el: '#app',

	data() {
		return {
			goods: [
				{title: "Shirt",price: 150},
	            {title: "Socks",price: 50},
	            {title: "Jacket",price: 350},
	            {title: "Shoes",price: 250},
	            {title: "Pyjamas",price: 100},
	            {title: "Hat",price: 100},
	            {title: "Umbrella",price: 120},
	            {title: "Shorts",price: 130},
	            {title: "Pants",price: 200},
            ],
			filteredGoods: [
				{title: "Shirt",price: 150},
	            {title: "Socks",price: 50},
	            {title: "Jacket",price: 350},
	            {title: "Shoes",price: 250},
	            {title: "Pyjamas",price: 100},
	            {title: "Hat",price: 100},
	            {title: "Umbrella",price: 120},
	            {title: "Shorts",price: 130},
	            {title: "Pants",price: 200}
            ],
			isVisibleCart: false,
			hasnotFilterWorked: false,

		}	
	},

	methods: {
		filterGoods(event){
			console.log(this.searchLine);
			this.filteredGoods = this.filteredGoods.filter(good => good.title == this.searchLine);
			if (this.filteredGoods.length == 0) {
				this.hasnotFilterWorked = true;
			}
		}
	},

});

Vue.component('header-search', {
	props: ['filteredGoods'],
	template: '<div class="header_search"><header-search-input></header-search-input><button class="search-button" type="button" v-on:click="filterGoods" >Search</button></div>',
	data: function() {
		return {
			searchLine: '',
			hasnotFilterWorked: false,
		}
	},
	methods: {
		filterGoods(event){
			console.log(searchLine);
			props.filteredGoods = props.filteredGoods.filter(good => good.title == searchLine);
			if (props.filteredGoods.length == 0) {
				hasnotFilterWorked = true;
			}
		}
	}
});

Vue.component('header-search-input', {
	props: ['searchLine'],
	template: '<input type="text" :searchLine="searchLine" class="goods-search" v-on:input="searchLine = $event.target.value" v-bind:value="searchLine" />',
	
});