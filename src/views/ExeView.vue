<template>
    <div class="exe">
        <div class="head">
            <div class="type">
                <el-radio v-model="type" label="radio_bank">单选</el-radio>
                <el-radio v-model="type" label="multi_bank">多选</el-radio>
                <el-radio v-model="type" label="judge_bank">判断</el-radio>
                <el-radio v-model="type" label="case_bank">案例</el-radio>
            </div>
            <div>
                <el-input v-model="no"></el-input>
            </div>
        </div>
        <div class="body">
            <div v-if="type === 'radio_bank'">
                <radio-bank :bank="[radio_bank[index] || {}]" :showTip="showTip" @change="radio_change"></radio-bank>
            </div>
            <div v-if="type === 'multi_bank'">
                <multi-bank :bank="[multi_bank[index] || {}]" :showTip="showTip" @change="multi_change"></multi-bank>
            </div>
            <div v-if="type === 'judge_bank'">
                <judge-bank :bank="[judge_bank[index] || {}]" :showTip="showTip" @change="judge_change"></judge-bank>
            </div>
            <div v-if="type === 'case_bank'">
                <case-bank :bank="[case_bank[index] || {}]" :showTip="showTip" @change="case_change"></case-bank>
            </div>
            <div style="padding: 0 15px;">
                <el-button type="primary" style="width: 100%" @click="confirm">答案</el-button>
            </div>
        </div>
        <div class="foot">
            <div style="display: flex;flex-direction: row">
                <div style="flex-grow:1;padding: 5px">
                    <el-button style="width: 100%;" @click="index--" :disabled="index < 1">上一题</el-button>
                </div>
                <div style="flex-grow:1;padding: 5px">
                    <el-button style="width: 100%;" @click="index++" :disabled="index > radio_bank.length - 2">下一题
                    </el-button>
                </div>
            </div>
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
            type: 'radio_bank',
            radio_bank: [],
            multi_bank: [],
            judge_bank: [],
            case_bank: [],
            bank: {},
            index: 0,
            no: 1,
            showTip: false
        }
    },
    watch: {
        no() {
            // console.log(no)
            if (this.no < 1) this.no = 1
            if (this.no > 400) this.no = 400
            this.index = this.no - 1
        },
        index() {
            this.showTip = false
            window.localStorage.setItem('index', this.index)
        },
        type() {
            if (!this.type) {
                this.type = 'radio_bank'
                return
            }
            window.localStorage.setItem('type', this.type)
        }
    },
    mounted() {
        console.log('exe mounted',)
        let type = window.localStorage.getItem('type')
        if (!type) type = 'radio_bank'
        this.type = type
        let index = window.localStorage.getItem('index')
        if (!index) index = 0
        this.index = index
        this.bank = this._bank_
        this.radio_bank = this.bank.radio_bank.filter(item => {
            item.user_answer = ''
            return true
        })
        this.multi_bank = this.bank.multi_bank.filter(item => {
            item.user_answer = []
            return true
        })
        this.judge_bank = this.bank.judge_bank.filter(item => {
            item.user_answer = ''
            return true
        })
        this.case_bank = this.bank.case_bank.filter(item => {
            item.ques_bank = item.ques_bank.filter(ques => {
                ques.user_answer = []
                return true
            })
            return true
        })
        // console.log(this.bank.radio_bank[0])
    },
    methods: {
        confirm() {
            this.showTip = !this.showTip
            if (this.type === 'radio_bank') {
                console.log('------')
            }
        },
        radio_change(e) {
        },
        multi_change(e) {
        },
        judge_change(e) {
        },
        case_change(e) {
        },
    }
}
</script>

<style lang="scss" scoped>
.exe {
    text-align: left;
    // border: 1px solid yellow;
    display: flex;
    flex-direction: column;

    .head {
        flex-shrink: 0;
        // border: 1px solid red;
        margin-bottom: 10px;

        .type {
            padding: 10px;
        }
    }

    .body {
        flex-grow: 1;
        overflow: scroll;
        // border: 1px solid blue;
    }

    .foot {
        flex-shrink: 0;
        // border: 1px solid green;
        padding: 10px;
    }
}
</style>