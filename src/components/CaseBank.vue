<template>
    <div class="case_bank">
        <div class="bank" v-for="cases, key in bank" :key="key" v-if="key < limit">
            {{ cases.id }}{{ cases.title }}
            <br>
            <br>
            <!-- {{ cases.ques_bank }} -->
            <div class="">
                <div v-for="ques, _key in cases.ques_bank" :key="_key">
                    <div class="ques-title">
                        {{ ques.id }}{{ ques.title }}
                    </div>
                    <el-checkbox-group v-model="ques.user_answer" @change="case_change($event, key, _key, ques.id)">
                        <div v-for="option, _key in ques.options" :key="_key" class="option"
                            :class="showTip && (ques.user_answer.indexOf(option) !== -1 || ques.answer.indexOf(option) !== -1) ? ques.answer.indexOf(option) !== -1 && ques.user_answer.indexOf(option) !== -1 ? 'success' : 'error' : ''">
                            <el-checkbox :label="option"></el-checkbox>
                        </div>
                    </el-checkbox-group>
                    <div v-if="showTip" style="padding: 10px 20px; color: green; font-size: 0.9em;">
                        <div>答案：</div>
                        <div v-for="ans, i in ques.answer" :key="i">{{ ans }}</div>
                    </div>
                </div>
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
        case_change(e, key, _key, id) {
            // console.log(e, key, _key)
            this.$emit('change', { c_idx: key, q_idx: _key, answer: e, id })
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
</style>