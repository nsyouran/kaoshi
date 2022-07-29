<template>
    <div class="multi_bank">
        <div class="bank" v-for="ques, key in bank" :key="key" v-if="key < limit">
            {{ ques.id }}{{ ques.title }}
            <el-checkbox-group v-model="ques.user_answer" @change="multi_change($event, key, ques.id)">
                <div v-for="option, _key in ques.options" :key="_key" class="option">
                    <div :class="ques.answer.indexOf(option) !== -1 ? 'item-success' : 'error'">
                        <el-checkbox :label="option"></el-checkbox>
                    </div>
                </div>
            </el-checkbox-group>
            <div v-if="showTip" style="padding: 10px 20px; color: green; font-size: 0.9em;">
                <div>答案：</div>
                <div v-for="ans, i in ques.answer" :key="i">{{ ans }}</div>
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
    methods: {
        multi_change(e, key, id) {
            // console.log(e, key, id)
            this.$emit('change', { q_idx: key, answer: e, id })
        },
    }
}
</script>

<style lang="scss" scoped>
// .option {
//     border: 1px solid red;
// }

// .item-success {
//     background-color: green;
// }

// .item-error {
//     background-color: red;
// }
</style>