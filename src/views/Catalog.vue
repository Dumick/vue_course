<template>
	<div>
		<h2>Catalog</h2>
		<div class="catalog">
		</div>
	</div>
</template>

<script>
import myCard from '@/components/productCard.vue'

export default {
	name: 'HomeView',
	components: { myCard }
}
</script>

<style scoped>
@import '@/assets/style.scss';

.catalog {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;

}
</style>