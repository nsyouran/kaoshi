<template>
    <div class="case_bank">
        <div class="bank" v-for="cases, key in bank" :key="key" v-if="key < limit">
            {{ cases.id }}{{ cases.title }}
            <br>
            <br>
            <!-- {{ cases.ques_bank }} -->
            <div class="">
                <div v-for="ques, _key in cases.ques_bank" :key="_key">
                    {{ ques.id }}{{ ques.title }}
                    <el-checkbox-group v-model="ques.user_answer" @change="case_change($event, key, _key, ques.id)">
                        <el-checkbox v-for="option, _key in ques.options" :key="_key" :label="option"></el-checkbox>
                    </el-checkbox-group>
                </div>
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
        case_change(e, key, _key, id) {
            // console.log(e, key, _key)
            this.$emit('change', { c_idx: key, q_idx: _key, answer: e, id })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>