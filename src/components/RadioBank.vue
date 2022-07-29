<template>
    <div class="radio_bank">
        <div class="bank" v-for="ques, key in bank" :key="key" v-if="key < limit">
            {{ ques.id }}{{ ques.title }}
            <div v-for="option, _key in ques.options" :key="_key">
                <el-radio v-model="ques.user_answer" :label="option" @change="radio_change($event, key, ques.id)">{{
                        option
                }}
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
        radio_change(e, key, id) {
            // console.log(e, key)
            this.$emit('change', { q_idx: key, answer: e, id })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>