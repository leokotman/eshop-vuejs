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
			searchLine: '',
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
