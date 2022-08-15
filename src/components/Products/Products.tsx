import React from 'react'
import ProductItem from './parts/ProductItem'
import { productsList } from './productsList'
import styles from './styles.module.css'
import mailIcon from '../../images/mailIcon.png'
import deliveryIcon from '../../images/deliveryIcon.png'

function Products() {
	return (
		<section className={styles.container} id="products">
			<div className={styles.description}>
				<div className={styles.howToBuy}>
					<div className={styles.descriptionIconWrapper}>
						<img src={mailIcon} alt="Иконка @" className={styles.descriptionIcon} />
					</div>
					<p className={styles.descriptionText}>
						<span className={styles.descriptionHyphen} >&#8212;</span> для приобетения продукции нужно прислать артикул товара на почту <a href="mailto:gennadystepanenko@mail.ru ">gennadystepanenko@mail.ru</a> 
					</p>
				</div>
				<div className={styles.delivery}>
					<div className={styles.descriptionIconWrapper}>
						<img src={deliveryIcon} alt="Грузовик доставки" className={styles.descriptionIcon}  />
					</div>
					<p className={styles.descriptionText}>
						<span className={styles.descriptionHyphen}>&#8212;</span> после договоренности происходит отправка товара
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
