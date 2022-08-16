import React from 'react'
import styles from './styles.module.css'

interface IProductItemProps {
  product: {
    id: number;
    item: string;
    name: string;
    desc?: string;
    price: number;
    image: string;
  };
}

function ProductItem({ product }: IProductItemProps) {
	return (
		<li className={styles.container} id="products">
			<div className={styles.imageWrapper}>
				<img src={product.image} alt={product.name} className={styles.image} />
				<span className={styles.productNumber}>{product.item}</span>
			</div>
			<div className={styles.product}>
				<div className={styles.productNameWrapper}>
					<p className={styles.productName}>{product.name}</p>
					{product.desc ? (
						<p className={styles.productDesc}>({product.desc})</p>
					) : null}
				</div>
				<span className={styles.productPrice}>
					{product.price.toLocaleString('ru')} &#8381;
				</span>
			</div>
		</li>
	)
}

export default ProductItem
