import React, { useState } from 'react'
import ProductItem from './parts/ProductItem/ProductItem'
import { productsList } from './productsList'
import styles from './styles.module.css'
import mailIcon from '../../images/mailIcon.png'
import deliveryIcon from '../../images/deliveryIcon.png'
import { Viewer } from './parts/Viewer/Viewer'
import clsx from 'clsx'

function Products() {
	const [viewer, setViewer] = useState(false)
	const [imageId, setImageId] = useState<number | null>(null)

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
				setImageId={(id: number | null) => setImageId(id)}
			/>
			<section className={styles.container} id="products">
				<div className={styles.wrapper}>
					<div className={styles.description}>
						<h3 className={styles.descriptionTitle}>
              Как приобрести продукцию
						</h3>
						<div className={styles.descWrapper}>
							<div className={styles.descriptionIconWrapper}>
								<img
									src={mailIcon}
									alt="Иконка @"
									className={styles.descriptionIcon}
								/>
							</div>
							<div className={styles.textWrapper}>
								<p className={clsx(styles.descriptionText, styles.bold)}>
                  Прислать артикул выбранного товара
									<br />
                  на почту:{' '}
									<a href="mailto:gennadystepanenko@mail.ru ">
                    gennadystepanenko@mail.ru
									</a>
								</p>
							</div>
						</div>
						<div className={styles.descWrapper}>
							<div className={styles.descriptionIconWrapper}>
								<img
									src={deliveryIcon}
									alt="Грузовик доставки"
									className={styles.descriptionIcon}
								/>
							</div>
							<div className={styles.textWrapper}>
								<p className={styles.descriptionText}>
                  После договоренности происходит отправка товара
								</p>
							</div>
						</div>
						<div className={styles.descWrapper}>
							<div className={styles.textWrapper}>
								<a href='https://www.youtube.com/watch?v=yqUVJNe9nZk' className={styles.descriptionText}>
                  Подробнее об отправке можно посмотреть в <span>видео на YouTube</span>
								</a>
							</div>
						</div>
					</div>
					<ul className={styles.productsList}>
						{productsList.length > 0
							? productsList.map((product) => {
								return (
									<ProductItem
										onClick={() => clickHandler(product.id)}
										key={product.id}
										product={product}
										active={imageId === product.id}
									/>
								)
							})
							: null}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Products
