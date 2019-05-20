<template>
<b-container>
  <b-row>
    <b-col>
      <b-card>
        <b-form>
          <b-form-group label="Estimated Cost of your Dream Home">
            <money v-model="cost" v-bind="money" class="form-control"></money>
          </b-form-group>

          <b-form-group label="Interest Rate %">
            <b-form-input type="number" required placeholder="3.99" v-model="rate"></b-form-input>
          </b-form-group>

          <b-form-group label="Course of Mortgage (years)">
            <b-form-input type="number" disabled placeholder="30" v-model="time"></b-form-input>
          </b-form-group>
        </b-form>
      </b-card>
    </b-col>
    <b-col>
      <b-card>
        <h3>Down Payment @ 15%: ${{downpayment.toLocaleString("latn", {
            style: 'currency',
            currency: 'BSD'
          })}}</h3>
        <h3>Monthly Payment: ${{MonthlyPayment.toLocaleString("latn", {
            style: 'currency',
            currency: 'BSD'
          })}} </h3>
      </b-card>
    </b-col>
  </b-row>
</b-container>
</template>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
