<template>
  <div class="root">
    <div class="big_title">单选（40）</div>
    <radio-bank :bank="bank.radio_bank" :limit="4" @change="radio_change"></radio-bank>

    <div class="big_title">多选（20）</div>
    <multi-bank :bank="bank.multi_bank" :limit="4" @change="multi_change"></multi-bank>
    <div class="big_title">判断（20）</div>
    <judge-bank :bank="bank.judge_bank" :limit="2" @change="judge_change"></judge-bank>
    <div class="big_title">案例分析（4）</div>
    <case-bank :bank="bank.case_bank" :limit="2" @change="case_change"></case-bank>

  </div>
</template>

<script>
import RadioBank from '@/components/RadioBank.vue'
import MultiBank from '@/components/MultiBank.vue'
import JudgeBank from '@/components/JudgeBank.vue'
import CaseBank from '@/components/CaseBank.vue'

export default {
  components: {
    RadioBank, MultiBank, JudgeBank, CaseBank
  },
  data() {
    return {
      bank: {},
    }
  },
  mounted() {
    // console.log('mounted',)
    this.bank = this._bank_
  },
  methods: {
    radio_change(e) {
      console.log(e)
    },
    multi_change(e) {
      console.log(e)
    },
    judge_change(e) {
      console.log(e)
    },
    case_change(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
.root {
  text-align: left;
}
</style>