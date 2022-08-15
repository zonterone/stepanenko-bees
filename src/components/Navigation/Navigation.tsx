import React, { createRef, useEffect, useRef, useState } from 'react'
import logo from '../../images/logo.png'
import styles from './styles.module.css'
import ScrollSpy from 'react-scrollspy-navigation'

function Navigation() {
	const header = useRef<HTMLElement | null>(null)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		if (header.current !== null) {
			setOffset(header.current.offsetHeight + 20)
		}
	}, [header])
	
	return (
		<header ref={header} className={styles.header}>
			<nav className={styles.navList}>
				<ScrollSpy offsetTop={offset} className={styles.active}>
					<a ref={createRef()} className={styles.navLink} href="#about">
							о себе
					</a>
					<a ref={createRef()} className={styles.navLink} href="#products">
							продукция
					</a>
					<a ref={createRef()} className={styles.navLink} href="#videos">
							видео
					</a>
					<a ref={createRef()} className={styles.navLink} href="#contacts">
							контакты
					</a>
				</ScrollSpy>
			</nav>
		</header>
	)
}

export default Navigation
