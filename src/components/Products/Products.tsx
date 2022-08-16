import React, { useState } from 'react'
import ProductItem from './parts/ProductItem/ProductItem'
import { productsList } from './productsList'
import styles from './styles.module.css'
import mailIcon from '../../images/mailIcon.png'
import deliveryIcon from '../../images/deliveryIcon.png'
import { Viewer } from './parts/Viewer/Viewer'

function Products() {
	const [viewer, setViewer] = useState(false)
	const [imageId, setImageId] = useState(null)

	const clickHandler = (index) => {
		setImageId(index)
		setViewer(true)
	}

	const closeHandler = () => {
		setImageId(null)
		setViewer(false)
	}

	return (
		<>
			<Viewer
				isOpen={viewer}
				close={closeHandler}
				imageId={imageId}
				products={productsList}
			/>
			<section className={styles.container} id="products">
				<div className={styles.description}>
					<div className={styles.howToBuy}>
						<div className={styles.descriptionIconWrapper}>
							<img
								src={mailIcon}
								alt="Иконка @"
								className={styles.descriptionIcon}
							/>
						</div>
						<div className={styles.textWrapper}>
							<span className={styles.descriptionHyphen}>&#8212;</span>{' '}
							<p className={styles.descriptionText}>
                для приобетения продукции нужно прислать артикул товара на почту{' '}
								<a href="mailto:gennadystepanenko@mail.ru ">
                  gennadystepanenko@mail.ru
								</a>
							</p>
						</div>
					</div>
					<div className={styles.delivery}>
						<div className={styles.descriptionIconWrapper}>
							<img
								src={deliveryIcon}
								alt="Грузовик доставки"
								className={styles.descriptionIcon}
							/>
						</div>
						<div className={styles.textWrapper}>
							<span className={styles.descriptionHyphen}>&#8212;</span>
							<p className={styles.descriptionText}>
                после договоренности происходит отправка товара
							</p>
						</div>
					</div>
				</div>
				<ul className={styles.productsList}>
					{productsList.length > 0
						? productsList.map((product) => {
							return <ProductItem onClick={() => clickHandler(product.id)} key={product.id} product={product} active={imageId === product.id} />
						})
						: null}
				</ul>
			</section>
		</>
	)
}

export default Products
