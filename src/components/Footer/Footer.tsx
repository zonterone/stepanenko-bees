import React from 'react'
import styles from './styles.module.css'
import mitzontLogo from '../../images/mitzontLogo.png'

function Footer() {
	return (
		<section className={styles.container}>
			<a href="https://vk.com/mit_511" rel='noreferrer' target='_blank'>
				<img src={mitzontLogo} alt="Логотип студии mitzont" />
			</a>
		</section>
	)
}

export default Footer
