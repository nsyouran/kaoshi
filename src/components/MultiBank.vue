<template>
    <div class="multi_bank">
        <div class="bank" v-for="ques, key in bank" :key="key" v-if="key < limit">
            {{ ques.id }}{{ ques.title }}
            <el-checkbox-group v-model="ques.user_answer" @change="multi_change($event, key, ques.id)">
                <el-checkbox v-for="option, _key in ques.options" :key="_key" :label="option"></el-checkbox>
            </el-checkbox-group>
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
        multi_change(e, key, id) {
            // console.log(e, key)
            this.$emit('change', { q_idx: key, answer: e, id })
        },
    }
}
</script>

<style lang="scss" scoped>
</style>