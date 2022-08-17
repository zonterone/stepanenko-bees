import React, { createRef, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import ScrollSpy from 'react-scrollspy-navigation'
import { useWindowWidth } from '@react-hook/window-size'

function Navigation() {
	const header = useRef<HTMLElement | null>(null)
	const windowWidth = useWindowWidth()
	const [offset, setOffset] = useState(0)
	const [scroll, setScroll] = useState(0)
	const [prevScroll, setPrevScroll] = useState(0)
	const [headerTopPosition, setHeaderTopPosition] = useState(0)

	const setScrollHandler = (e) => {
		setScroll(e.target.defaultView?.scrollY)
	}

	useEffect(() => {
		if (header.current !== null) {
			setOffset(header.current.offsetHeight)
		}
	}, [header])

	useEffect(() => {
		if (windowWidth <= 500) {
			document.addEventListener('scroll', setScrollHandler)
		} else {
			setHeaderTopPosition(0)
		}

		return () => {
			document.removeEventListener('scroll', setScrollHandler)
		}
	}, [windowWidth])

	useEffect(() => {
		if (scroll + 20 <= prevScroll) {
			setPrevScroll(scroll)
			setHeaderTopPosition(0)
		}

		if (scroll >= prevScroll + 50) {
			setPrevScroll(scroll)
			setHeaderTopPosition(-100)
		}
	}, [scroll])

	return (
		<header ref={header} className={styles.header} style={{top: `${headerTopPosition}%`}}>
			<nav className={styles.navList}>
				<div className={styles.wrapper}>
					<ScrollSpy offsetTop={offset} className={styles.active}>
						<a ref={createRef()} className={styles.navLink} href="#about">
              о себе
						</a>
						<a ref={createRef()} className={styles.navLink} href="#products">
              продукция
						</a>
					</ScrollSpy>
				</div>
				<div className={styles.wrapper}>
					<ScrollSpy offsetTop={offset} className={styles.active}>
						<a ref={createRef()} className={styles.navLink} href="#videos">
              видео
						</a>
						<a ref={createRef()} className={styles.navLink} href="#contacts">
              контакты
						</a>
					</ScrollSpy>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
