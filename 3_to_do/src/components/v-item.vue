<template>
    <div class="to_do">
        <div class="to_do_desc">
            <p class="title">{{ title }}</p>
            <div class="progress">
                <span>Curent: {{ current }}</span>
                <span>Max Action: {{ max }}</span>
            </div>
        </div>
        <div class="to_do_buttons">
            <button class="to_do_back" @click="back" :disabled="progressBack">Back</button>
            <button class="to_do_add" @click="add" :disabled="!progressDone">Done</button>
            <button class="to_do_delete" @click="remove">X</button>
        </div>
        <span class="bgc" :class="progressColor" :style="'width:' + progressStyles.width"></span>
    </div>
</template>

<script>
export default {
    name: 'v-item',
    props: {
        title: { type: String, requared: true },
        current: { type: Number, requared: true },
        max: { type: Number, requared: true }
    },
    computed: {
        progress() {
            return (this.current / this.max).toFixed(2)
        },
        progressStyles() {
            return { width: this.progress * 100 + '%' };
        },
        progressColor() {
            return {
                'danger': this.progress < 0.25,
                'warning': this.progress >= 0.25 && this.progress <= 0.7,
                'success': this.progress > 0.7
            }
        },
        progressDone() {
            return this.progress < 0.99 ? true : false
        },
        progressBack() {
            return this.current < 1
        }
    },
    methods: {
        back() {
            if (this.current >= 1)
                this.$emit('back')
        },
        add() {
            if (this.current < this.max)
                this.$emit('add')
        },
        remove() {
            this.$emit('remove')
        }
    }
}

</script>

<style>
@import '@/assets/main.css';
</style>