<template>
    <div class="radio_bank">
        <div class="bank" v-for="ques, key in bank" :key="key" v-if="key < limit">
            <div class="ques-title">
                {{ ques.id }}{{ ques.title }}
            </div>
            <div v-for="option, _key in ques.options" :key="_key" class="option"
                :class="showTip && option === ques.user_answer ? ques.answer === ques.user_answer ? 'success' : 'error' : ''">
                <!-- <div class="state">
                    <div v-if="ques.user_answer === option">
                        <i class="el-icon-check success" v-if="ques.user_answer === ques.answer"></i>
                        <i class="el-icon-close error" v-else></i>
                    </div>
                </div> -->
                <el-radio v-model="ques.user_answer" :label="option" @change="radio_change($event, key, ques.id)">{{
                        option
                }}
                </el-radio>
            </div>
            <div v-if="showTip" style="padding: 10px 20px; color: green; font-size: 0.9em;">答案：{{ ques.answer }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bank: {
            type: Array, default() { return [] }
        },
        limit: {
            type: Number,
            default: 10000
        },
        showTip: {
            type: Boolean,
            default() { return false }
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        // console.log('------------', this.bank)
    },
    methods: {
        radio_change(e, key, id) {
            // console.log(e, key)
            this.$emit('change', { q_idx: key, answer: e, id })
        }
    }
}
</script>

<style lang="scss" scoped>
.ques-title {
    // border: 1px solid blue;
    margin-bottom: 10px;
}

.option {
    // border: 1px solid red;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
}

.success {
    border: 1px solid green;
}

.error {
    border: 1px solid red;
}

.state {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 1em;

    .success {
        color: green;
    }

    .error {
        color: red
    }
}
</style>