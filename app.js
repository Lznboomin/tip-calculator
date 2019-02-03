new Vue({
    el: '#app',
    data() {
        return {
            bill: null,
            tipPercent: null,
            tip: 0,
            total: 0
        }
    },
    methods: {
        calculate: function() {
            this.tip = (this.bill * this.tipPercent) / 100;
            this.total = +this.bill + +this.tip;
        },
        reset: function() {
            this.bill = null;
            this.tipPercent = null;
            this.tip = 0;
            this.total = 0;
        }
    }
})