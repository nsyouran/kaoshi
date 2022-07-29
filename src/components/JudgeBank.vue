<template>
    <div class="judge_bank">
        <div class="bank" v-for="ques, key in bank" :key="key" v-if="key < limit">
            {{ ques.id }}{{ ques.title }}
            <div>
                <el-radio v-model="ques.user_answer" :label="true" @change="judge_change($event, key, ques.id)">正确
                </el-radio>
                <el-radio v-model="ques.user_answer" :label="false" @change="judge_change($event, key, ques.id)">错误
                </el-radio>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bank: Array,
        limit: {
            type: Number,
            default: 10000
        }
    },
    data() {
        return {

        }
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
</style>