import React from 'react'
import styles from './styles.module.css'

interface IProductItemProps {
  product: {
    id: number
    item: string
    name: string
    price: number
    image: string
  }
}

function ProductItem({ product }: IProductItemProps) {
	return (
		<li className={styles.container} id="products">
			<div className={styles.imageWrapper}>
				<img src={product.image} alt={product.name} className={styles.image} />
				<span className={styles.productNumber}>{product.item}</span>
			</div>
			<div className={styles.productDesc}>
				<p className={styles.productName}>{product.name}</p>
				<span className={styles.productPrice}>{product.price.toLocaleString('ru')} &#8381;</span>
			</div>
		</li>
	)
}

export default ProductItem