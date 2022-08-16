import React, { useEffect, useState } from 'react'
import upBtnIcon from '../../images/upBtnIcon.png'
import styles from './styles.module.css'

function UpBtn() {
	const [isUpBtnVisible, setIsUpBtnVisible] = useState(false)

	const checkScroll = (e) => {
		if (e.target.defaultView?.scrollY > e.target.defaultView?.innerHeight / 2) {
			setIsUpBtnVisible(true)
		} else {
			setIsUpBtnVisible(false)
		}
	}

	const clickHandler = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		document.addEventListener('scroll', checkScroll)

		return () => {
			document.removeEventListener('scroll', checkScroll)
		}
	}, [])

	return isUpBtnVisible ? (
		<button className={styles.upBtn} onClick={clickHandler}>
			<img src={upBtnIcon} alt="Оранжевая стрелка вверх" />
		</button>
	) : null
}

export default UpBtn
