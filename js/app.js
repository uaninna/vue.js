
Vue.component('spoiler', {
	template: "#spoiler",
	data: function() {
		return {
			showTMPL: true
		}
	},
	methods: {
		toggleTMPL: function() {
			this.showTMPL = !this.showTMPL;
		}
	},
	props: ['title']
});
new Vue({
	el: "#app",
	data: {
		lol: 5,
		show: true
	}
});
