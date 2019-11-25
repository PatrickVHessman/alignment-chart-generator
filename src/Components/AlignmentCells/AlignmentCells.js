import React from 'react';
import styles from './AlignmentCells.module.css'

import AlignmentCell from './AlignmentCell/AlignmentCell';

const AlignmentCells = (props) => {
    return (
        <div className={styles.AlignmentCells} id="alignmentChart">
        <AlignmentCell title="Lawful Good"
        description={props.lg.description}
        cellImage={props.lg.image}
        color= {props.colors.lg}
        
        />
        <AlignmentCell title="Neutral Good"
        description={props.ng.description}
        cellImage={props.ng.image}
        color= {props.colors.ng}
        />
        <AlignmentCell title="Chaotic Good"
        description={props.cg.description}
        cellImage={props.cg.image}
        color= {props.colors.cg}
        />
        <AlignmentCell title="Lawful Neutral"
        description={props.ln.description}
        cellImage={props.ln.image}
        color= {props.colors.ln}
        />
        <AlignmentCell title="Neutral"
        description={props.nn.description}
        cellImage={props.nn.image}
        color= {props.colors.nn}
        />
        <AlignmentCell title="Chaotic Neutral"
        description={props.cn.description}
        cellImage={props.cn.image}
        color= {props.colors.cn}
        />
        <AlignmentCell title="Lawful Evil"
        description={props.le.description}
        cellImage={props.le.image}
        color= {props.colors.le}
        />
        <AlignmentCell title="Neutral Evil"
        description={props.ne.description}
        cellImage={props.ne.image}
        color= {props.colors.ne}
        />
        <AlignmentCell title="Chaotic Evil"
        description={props.ce.description}
        cellImage={props.ce.image}
        color= {props.colors.ce}
        />
    </div>
    )
    
}

export default AlignmentCells;