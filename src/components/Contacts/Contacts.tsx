import React from 'react'
import styles from './styles.module.css'
import telIcon from '../../images/telIcon.png'
import mapIcon from '../../images/mapIcon.png'
import mailIcon from '../../images/mailIcon.png'
import whatsupIcon from '../../images/whatsupIcon.png'
import contactsImg from '../../images/contactsImg.png'
import clsx from 'clsx'

function Contacts() {
	return (
		<section className={styles.container} id="contacts">
			<address className={styles.wrapper}>
				<div className={styles.imgWrapper}>
					<img src={contactsImg} alt='Картинка улья' className={styles.img} />
				</div>
				<ul className={styles.contactsList}>
					<li className={styles.contactsItem}>
						<div className={styles.iconWrapper}>
							<img
								src={telIcon}
								alt="Иконка смартфона"
								className={styles.contactsIcon}
							/>
						</div>
						<div className={styles.contactsWrapper}>
							<a href="tel:+79056343860" className={clsx(styles.contactsLink, styles.bold)}>
								Геннадий Степаненко
								<br/>
								<span>+7 905 634 38 60</span>
							</a>
						</div>
					</li>
					<li className={styles.contactsItem}>
						<div className={styles.iconWrapper}>
							<img
								src={mailIcon}
								alt="Иконка @"
								className={styles.contactsIcon}
							/>
						</div>
						<div className={styles.contactsWrapper}>
							<a
								href="mailto:gennadystepanenko@mail.ru"
								className={styles.contactsLink}
							>
								<span>gennadystepanenko@mail.ru</span>
							</a>
						</div>
					</li>
					<li className={styles.contactsItem}>
						<div className={styles.iconWrapper}>
							<img
								src={whatsupIcon}
								alt="Иконка whatsup"
								className={styles.contactsIcon}
							/>
						</div>
						<a
							href=""
							rel="noreferrer"
							target="_blank"
							className={styles.contactsLink}
						>
              Начать чат через <span>WhatsApp</span>
						</a>
					</li>
					<li className={styles.contactsItem}>
						<div className={styles.iconWrapper}>
							<img
								src={mapIcon}
								alt="Иконка карты"
								className={styles.contactsIcon}
							/>
						</div>
						<p className={styles.contactsLink}>
              Россия, г. Ярославль, 150000
						</p>
					</li>
				</ul>
			</address>
		</section>
	)
}

export default Contacts
