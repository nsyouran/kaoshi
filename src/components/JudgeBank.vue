<template>
    <div class="judge_bank">
        <div class="bank" v-for="ques, key in bank" :key="key" v-if="key < limit">
            <div class="ques-title">
                {{ ques.id }}{{ ques.title }}
            </div>
            <div>
                <el-radio class="option"
                    :class="showTip && ques.user_answer === true ? ques.user_answer === ques.answer ? 'success' : 'error' : ''"
                    v-model="ques.user_answer" :label="true" @change="judge_change($event, key, ques.id)">正确
                </el-radio>
                <el-radio class="option"
                    :class="showTip && ques.user_answer === false ? ques.user_answer === ques.answer ? 'success' : 'error' : ''"
                    v-model="ques.user_answer" :label="false" @change="judge_change($event, key, ques.id)">错误
                </el-radio>
            </div>
            <!-- <div v-if="showTip" style="padding: 10px 20px; color: green; font-size: 0.9em;">
                我的答案：{{ ques.user_answer }}
            </div> -->
            <div v-if="showTip" style="padding: 10px 20px; color: green; font-size: 0.9em;">
                <!-- 答案：{{ ques.answer }} -->
                答案：{{ ques.answer ? '正确' : '错误' }}
            </div>
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
        console.log(this.bank)
    },
    methods: {
        judge_change(e, key, id) {
            // console.log(e, key)
            this.$emit('change', { q_idx: key, answer: e, id })
        },
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
</style>