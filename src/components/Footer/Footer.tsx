import React from 'react'
import styles from './styles.module.css'
import mitzontLogo from '../../images/mitzontLogo.png'

function Footer() {
	return (
		<section className={styles.container}>
			<img src={mitzontLogo} alt="Логотип студии mitzont" />
		</section>
	)
}

export default Footer
