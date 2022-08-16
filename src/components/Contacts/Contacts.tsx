import React from 'react'
import styles from './styles.module.css'
import telIcon from '../../images/telIcon.png'
import mapIcon from '../../images/mapIcon.png'

function Contacts() {
	return (
		<section className={styles.container} id="contacts">
			<address className={styles.wrapper}>
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
							<a href="tel:+79056343860" className={styles.contactsLink}>
                +7 905 634 38 60
							</a>
							<a
								href="mailto:gennadystepanenko@mail.ru"
								className={styles.contactsLink}
							>
                gennadystepanenko@mail.ru
							</a>
						</div>
					</li>
					<li className={styles.contactsItem}>
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
						<p className={styles.contactsAddress}>
              Россия, г. Ярославль, 150000
						</p>
					</li>
				</ul>
			</address>
		</section>
	)
}

export default Contacts
