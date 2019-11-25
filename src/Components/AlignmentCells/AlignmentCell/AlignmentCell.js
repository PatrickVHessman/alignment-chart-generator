import React from 'react';
import styles from './AlignmentCell.module.css'
import placeholderImage from '../../../Assets/placeholderImage.png';

const AlignmentCell = (props) => {
    return (
        <div className={styles.AlignmentCell}>
				<div className={styles.PhotoContainer} style={{background : 'url("' + props.cellImage + '") center/cover',border: '1px solid ' + props.color}}><img src={placeholderImage} alt="props.title" className={styles.PlaceholderImg} /></div>
				<h3 style={{color: props.color}}>{props.title}</h3>
				<p>{props.description}</p>
			</div>
    )
    
}

export default AlignmentCell;