<template>
	<div>
		<h2>Catalog</h2>
		<div class="catalog">
			<div class="catalog-item">
				<h3 class="catalog-item_title">Title</h3>
				<span class="catalog-item_image"></span>
				<p class="catalog-item_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum obcaecati
					assumenda repellendus, deserunt ipsam nesciunt!</p>
				<div class="catalog-item_info">
					<p class="catalog-item_price">4000<span>$</span></p>
					<p class="catalog-item_cnt">1</p>
				</div>
				<div class="catalog-item_buttons">
					<button class="catalog-item_button_in_cart">Add in cart</button>
					<div class="catalog-item_button_cnt">
						<button class="catalog-item_button_cnt_add">+</button>
						<button class="catalog-item_button_cnt_pop">-</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeView',
}
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';

.catalog {
	display: flex;
	margin-top: 20px;
	flex-wrap: wrap;
	justify-content: space-between;

	&-item {
		padding: 20px;
		background-color: #eee;
		border-radius: 6px;
		max-width: 350px;

		&_info,
		&_buttons {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
}
</style>