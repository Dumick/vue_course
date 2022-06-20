<template>
	<div>
		<header>
			<h1 class="header-title">My Shop</h1>
		</header>
		<main>
			<div class="container">
				<nav class="navbar">
					<ul class="navbar-menu">
						<li class="navbar-menu_item">
							<router-link :to="{ name: 'catalog' }">Catalog</router-link>
						</li>
						<li class="navbar-menu_item">
							<router-link :to="{ name: 'cart' }"> Cart </router-link>
						</li>
						<li class="navbar-menu_item">
							<router-link :to="{ name: 'about' }"> About </router-link>
						</li>
					</ul>
				</nav>
				<section>
					<router-view />
				</section>
			</div>
		</main>
	</div>
</template>

<script>

export default {
	name: 'App'
}
</script>

<style lang="scss">
@import '@/assets/style.scss';

.header-title {
	margin-left: 10px;
}

.navbar {
	min-width: 150px;
	padding: 8px 0;
	margin: 10px;

	&-menu_item {

		transition: .5s;

		&+& {
			margin-top: 4px;
		}

		&:hover {
			color: #fff;
			background-color: rgb(197, 197, 197);
		}

		&>a {
			transition: .2s;
			color: #000;
			display: block;
			cursor: pointer;
			padding: 2px 8px;
			text-decoration: none;
		}

		&:hover>a {
			color: rgb(83, 83, 83);
		}

		&>a.router-link-active {

		}
	}

}
</style>