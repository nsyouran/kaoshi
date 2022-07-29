<template>
    <div class="answer">
        <div class="big_title">
            <el-radio v-model="type" label="radio_bank">单选</el-radio>
            <el-radio v-model="type" label="multi_bank">多选</el-radio>
            <el-radio v-model="type" label="judge_bank">判断</el-radio>
            <el-radio v-model="type" label="case_bank">案例</el-radio>
        </div>
        <div>
            <el-input v-model="no"></el-input>
        </div>
        <div v-if="type === 'radio_bank'">
            <radio-bank :bank="[radio_bank[index] || {}]" showTip @change="radio_change"></radio-bank>
        </div>
        <div v-if="type === 'multi_bank'">
            <multi-bank :bank="[multi_bank[index] || {}]" showTip @change="multi_change"></multi-bank>
        </div>
        <div v-if="type === 'judge_bank'">
            <judge-bank :bank="[judge_bank[index] || {}]" showTip @change="judge_change"></judge-bank>
        </div>
        <div v-if="type === 'case_bank'">
            <case-bank :bank="[case_bank[index] || {}]" showTip @change="case_change"></case-bank>
        </div>
        <div>
            <div style="display: flex;flex-direction: row">
                <div style="flex-grow:1;padding: 5px">
                    <el-button style="width: 100%;" @click="index--" :disabled="index < 1">上一题</el-button>
                </div>
                <div style="flex-grow:1;padding: 5px">
                    <el-button style="width: 100%;" @click="index++" :disabled="index > radio_bank.length - 2">下一题
                    </el-button>
                </div>
            </div>
            <!-- <el-button type="primary" style="width: 100%" conform>确定</el-button> -->
        </div>
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
            type: 'multi_bank',
            radio_bank: [],
            multi_bank: [],
            judge_bank: [],
            case_bank: [],
            bank: {},
            index: 0,
            no: 1
        }
    },
    watch: {
        no() {
            // console.log(no)
            if (this.no < 1) this.no = 1
            if (this.no > 400) this.no = 400
            this.index = this.no - 1
        }
    },
    mounted() {
        console.log('mounted',)
        this.bank = this._bank_
        this.radio_bank = this.bank.radio_bank.filter(item => {
            item.user_answer = ''
            return true
        })
        this.multi_bank = this.bank.multi_bank.filter(item => {
            item.user_answer = []
            return true
        })
        // console.log(this.bank.radio_bank[0])
    },
    methods: {
        radio_change(e) {
            let { q_idx, answer } = e
            this.radio_bank[this.index].answer = answer
            console.log(this.index, this.radio_bank[this.index])
            this.bank.radio_bank = this.radio_bank
            window.localStorage.setItem('bank', JSON.stringify(this.bank))
            this.index++
        },
        multi_change(e) {
            console.log(e)
            let { q_idx, answer } = e
            this.multi_bank[this.index].answer = answer
            // console.log(this.index, this.radio_bank[this.index])
            this.bank.multi_bank = this.multi_bank
            window.localStorage.setItem('bank', JSON.stringify(this.bank))
            // this.index++
        }
    }
}
</script>

<style lang="scss" scoped>
.answer {
    text-align: left;
}
</style>