import React from 'react'
import styles from './styles.module.css'
import photo from '../../images/gennadyPhoto.png'
import home from '../../images/home.png'

function About() {
	return (
		<section className={styles.container} id="about">
			<div className={styles.mainInfoWrapper}>
				<div className={styles.firstBlockWrapper}>
					<img
						className={styles.photo}
						src={photo}
						alt="Фото Геннадия Степаненко"
					/>
					<h1 className={styles.title}>
            Геннадий <span>СТЕПАНЕНКО</span>
					</h1>
					<h2 className={styles.titleSmall}>мастер, пчеловод</h2>
				</div>
				<div className={styles.secondBlockWrapper}>
					<p className={styles.secondBlockParagraph}>
            Еще мальчишкой, глядя на&nbsp;работу пчеловода в&nbsp;лице своего
            отца, я&nbsp;всегда мечтал сам заниматься этим делом.
					</p>
					<p className={styles.secondBlockParagraph}>
            Повзрослев и&nbsp;приобретя опыт краснодеревщика, я&nbsp;решил, что
            пора осуществить свою заветную мечту и&nbsp;купил два улья
            с&nbsp;пчелами.
					</p>
					<p className={styles.secondBlockParagraph}>
            В&nbsp;ходе эксплуатации в&nbsp;пчелодомиках появились трещины,
            щели, доски &laquo;повело&raquo;, что указывало
            на&nbsp;несовершенность технологии изготовления.
					</p>
					<p className={styles.secondBlockParagraph}>
            Занимаясь пчеловодством и&nbsp;наблюдая
            за&nbsp;&laquo;поведением&raquo; древесины в&nbsp;улье, я, методом
            проб и&nbsp;ошибок, нашел технологию изготовления, которая,
            кардинально отличается от&nbsp;других.
					</p>
					<p className={styles.secondBlockParagraph}>
            На&nbsp;поиск этого решения ушли годы и&nbsp;сейчас, как мне
            кажется, вариант изготовления моего улья наиболее оптимален. Готовые
            изделия имеют достойный вид в&nbsp;течение многих лет эксплуатации.
					</p>
				</div>
			</div>
			<div className={styles.descWrapper}>
				<img src={home} alt="Картинка домика" className={styles.descImage} />
				<p className={styles.desc}>
          Это мой официальный сайт, на&nbsp;котором размещаются фото моей
          продукции для ознакомления и&nbsp;последующего приобретения,
          а&nbsp;так&nbsp;же видео с&nbsp;канала{' '}
					<a
						className={styles.youtubeLink}
						rel="noreferrer"
						target="_blank"
						href="https://www.youtube.com/channel/UCy9wJunvSchJG2AjclFD6vA"
					>
            &laquo;Геннадий Степаненко&raquo; на&nbsp;YouTube.
					</a>
				</p>
			</div>
		</section>
	)
}

export default About
