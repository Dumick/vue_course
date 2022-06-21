<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header_brand">{{ brand }}</p>
            <span v-if="sale" class="sale">{{ Math.trunc(sale) }}%</span>
        </div>

        <div class="card-body">
            <img :src="image" class="card-body_image">
            <h3 class="card-body_title">{{ title }}</h3>
            <hr>
            <div>
                <p v-if="!sale" class="card-body_price">Price: {{ price }} $</p>
                <div v-else class="card-body_price_sale">
                    <p>Price: </p>
                    <div>
                        <p class="old_price">{{ price }}<em>$</em></p>
                        <p class="new_price">{{ salePrice }}<em>$</em></p>
                    </div>
                </div>
            </div>
        </div>

        <button class="add_in_cart">Add in cart</button>

    </div>
</template>

<script>
export default {
    name: 'product-card',
    props: {
        title: { type: String, requared: true },
        brand: { type: String, requared: true },
        sale: { type: Number },
        image: { type: String, requared: true },
        price: { type: Number, requared: true }
    },
    computed: {
        salePrice() {
            return (this.price * (1 - (this.sale / 100))).toFixed(2)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';

.card {
    margin-top: 20px;
    padding: 20px;
    width: 250px;
    background-color: #c8c8c8;
    border-radius: 6px;
    position: relative;
    overflow: hidden;

    &-header {
        display: flex;
        justify-content: space-between;

        p {
            font-size: 12px;
            color: #333;
        }

        span {
            display: block;
            position: absolute;
            top: 5px;
            right: -20px;
            font-size: 12px;
            padding: 4px 35px;
            transform: rotate(35deg);
            background-color: #7eb472;
        }
    }

    &-body {
        &_image {
            height: 100px;
            margin-top: 10px;
        }

        &_desc {
            font-size: 12px;
            margin-top: 10px;
        }

        &_title {
            margin: 5px 0;
        }

        &>div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            font-size: 14px;
            margin-top: 10px;
        }

        &_price_sale {
            display: flex;
            align-items: center;

            &>div {
                margin-left: 10px;

                .old_price {
                    text-decoration: line-through;
                }
                p + p {
                    margin-top: 5px;
                } 
            }
        }
    }

    .add_in_cart {
        width: 100%;
        padding: 4px 0;
        border: unset;
        border-radius: 4px;
        background-color: #7297b4;
        margin-top: 10px;
        cursor: pointer;
    }
}
</style>