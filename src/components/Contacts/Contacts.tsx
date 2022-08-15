import React from 'react'
import styles from  './styles.module.css'

function Contacts() {
	return (
		<section className={styles.container} id="contacts">Контакты
			<address>
				<ul>
					<li>
						<img src="" alt="" />
						<div>
							<a href="tel:+79056343860">+7 905 634 38 60</a>
							<a href="mailto:gennadystepanenko@mail.ru">gennadystepanenko@mail.ru</a>
						</div>
					</li>
					<li>
						Начать чат через <a href="" rel='noreferrer' target='_blank'>WhatsApp</a>
					</li>
					<li>
						<img src="" alt="" />
						<p>Россия, г. Ярославль, 150000</p>
					</li>
				</ul>
			</address>
		</section>
	)
}

export default Contacts
