import React, { useRef } from 'react'
import { Navigation, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './style.module.css'
import './styles.css'
import arrowIcon from '../../../../images/arrowIcon.png'
import closeIcon from '../../../../images/closeIcon.png'
import clsx from 'clsx'

export interface IViewer {
	isOpen: boolean
	imageId: number | null
	products: {
		id: number
		item: string
		name: string
		desc?: string | undefined
		price: number
		image: string
	}[]
	close: (boolean) => void
}

export const Viewer: React.FC<IViewer> = ({
	isOpen,
	close,
	imageId,
	products,
}) => {
	const prevBtn = useRef(null)
	const nextBtn = useRef(null)

	const onBeforeInit = (Swiper): void => {
		if (typeof Swiper.params.navigation !== 'boolean') {
			const { navigation } = Swiper.params
			navigation.prevEl = prevBtn.current
			navigation.nextEl = nextBtn.current
		}
	}

	return isOpen ? (
		<div className={styles.modal} onClick={close}>
			<div className={styles.container} onClick={(e) => e.stopPropagation()}>
				<button onClick={close} className={styles.closeBtn}>
					<img src={closeIcon} alt="Крестик закрытия" />
				</button>
				<div className={styles.swiperContainer}>
					<button className={styles.prevBtn} ref={prevBtn}>
						<img src={arrowIcon} alt="Стрелка влево" />
					</button>
					<button className={styles.nextBtn} ref={nextBtn}>
						<img src={arrowIcon} alt="Стрелка вправо" />
					</button>
					<Swiper
						modules={[Navigation, Keyboard]}
						onBeforeInit={onBeforeInit}
						slidesPerView={1}
						spaceBetween={0}
						navigation={{
							prevEl: prevBtn.current,
							nextEl: nextBtn.current,
							disabledClass: styles.disabled,
						}}
						keyboard
						className="viewerSwiper"
						initialSlide={products.findIndex((item) => item.id === imageId)}
					>
						{products.length > 0 &&
							products.map((product) => {
								return (
									<SwiperSlide key={product.id}>
										<div className={styles.productContainer}>
											<div className={styles.imageContainer}>
												<img
													src={product.image}
													alt="cell image"
													className={styles.image}
												/>
											</div>
											<div className={styles.descContainer}>
												<div
													className={clsx(
														styles.nameContainer,
														'swiper-no-swiping'
													)}
												>
													<p className={styles.productName}>
														{product.name}{' '}
														{product.desc ? (
															<span className={styles.nameDesc}>
																({product.desc})
															</span>
														) : null}
													</p>
													<p className={styles.productItem}>
														артикул: {product.item}
													</p>
												</div>
												<p
													className={clsx(
														styles.productPrice,
														'swiper-no-swiping'
													)}
												>
													{product.price.toLocaleString('ru')} &#8381;
												</p>
											</div>
										</div>
									</SwiperSlide>
								)
							})}
					</Swiper>
				</div>
			</div>
		</div>
	) : null
}
