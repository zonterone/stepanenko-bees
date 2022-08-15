import React from 'react'
import logo from '../../images/logo.png'
import styles from './styles.module.css'

function Logo() {
	return (
		<div className={styles.logoContainer}>
			<img
				src={logo}
				alt='Логотип "Ульи Геннадия Степаненко"'
				className={styles.logo}
			/>
		</div>
	)
}

export default Logo
