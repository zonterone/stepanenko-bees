import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
// FIXME
const key = process.env.REACT_APP_YOUTUBE_API_KEY
const playlistId = process.env.REACT_APP_YOUTUBE_PLAYLIST_ID
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=12&playlistId=${playlistId}&key=${key}`

function Videos() {
	const [videos, setVideos] = useState<any>([])

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (res.ok) {
					return res.json()
				} else {
					throw new Error()
				}
			})
			.then((videos) => {
				setVideos(videos.items)
			})
	}, [])

	return (
		<section className={styles.container} id="videos">
			<ul className={styles.videosList}>
				{videos.length > 0 ? videos.map((video) => {
					return (
						<li key={video.id} className={styles.wrapper}>
							<div className={styles.videoWrapper}>
								<iframe
									className={styles.videoItem}
									width="100%"
									height="100%"
									src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
									frameBorder="0"
									allowFullScreen
								></iframe>
							</div>
						</li>
					)
				}) :  null}
			</ul>
		</section>
	)
}

export default Videos
