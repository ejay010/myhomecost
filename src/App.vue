<template>
<router-view></router-view>
</template>

<style lang="scss">
@import "./assets/scss/myhomecost.scss";
</style>

<script>
export default {
  data() {
    return {
      cost: 250000,
      rate: 3.99,
      time: 30,
      money: {
        decimal: '.',
        thousands: ',',
        prefix: 'B$ ',
        suffix: '',
        precision: 2,
        masked: false /* doesn't work with directive */
      }
    }
  },
  computed: {
    downpayment() {
      return (this.cost * 0.15)
    },
    MonthlyPayment() {
      return (((this.rate / 100) / 12) * this.cost)
    }
  }
}
</script>
