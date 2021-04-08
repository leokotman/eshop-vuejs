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
			if (props./*
			
				Array
			
				filter ( callbackfn: Function, thisArg?: any )
			
				Return Type:
				Array
			
				Description:
				callbackfn should be a function that accepts three arguments and returns a value that is coercible to the Boolean value true or false. filter calls callbackfn once for each element in the array, in ascending order, and constructs a new array of all the values for which callbackfn returns true.
			
				URL doc:
				http://html5index.org/ECMAScript%20-%20Array.html#filter
			
			*/edGoods.length == 0) {
				hasnotFilterWorked = true;
			}
		}
	}
});

Vue.component('header-search-input', {
	props: ['searchLine'],
	template: '<input type="text" :searchLine="searchLine" class="goods-search" v-on:input="searchLine = $event.target.value" v-bind:value="searchLine" />',
	
});

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