import React from 'react'
import ProductItem from './parts/ProductItem'
import { productsList } from './productsList'
import styles from  './styles.module.css'

function Products() {
	return (
		<section className={styles.container} id="products">
			<div className={styles.description}>
				<div>
					<p>
					-     для приобетения продукции нужно прислать артикул товара на почту <a href="mailto:gennadystepanenko@mail.ru ">gennadystepanenko@mail.ru</a> 
					</p>
				</div>
				<div>
					<p>
					-     после договоренности происходит отправка товара
					</p>
				</div>
			</div>
			<ul className={styles.productsList}>
				{productsList.length > 0 ? productsList.map((product) => {
					return <ProductItem key={product.id} product={product} />
				}): null}
			</ul>
		</section>
	)
}

export default Products
