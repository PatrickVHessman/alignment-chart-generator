import React, {Component} from 'react';
import domtoimage from 'dom-to-image';

import styles from './MainContainer.module.css';
import placeholder from './placeholder';

import AlignmentCells from '../Components/AlignmentCells/AlignmentCells';
import Button from '../Components/Button/Button';

class MainContainer extends Component {

    state = {
        lg: {
            image: placeholder.lg,
            title: "Lawful Good",
            description: "I'm here to fight for truth, justice, and the American Way."
        },
        ng: {
            image: placeholder.ng,
            title: 'Neutral Good',
            description: "With great power comes great responsibility"
        },
        cg: {
            image: placeholder.cg,
            title: 'Chaotic Good',
            description: "I don't believe in no-win scenarios."
        },
        ln: {
            image: placeholder.ln,
            title: 'Lawful Neutral',
            description: "I AM the law!"
        },
        nn: {
            image: placeholder.nn,
            title: 'Neutral',
            description: "Side? I am on nobody's side, because nobody is on my side."
        },
        cn: {
            image: placeholder.cn,
            title: 'Chaotic Neutral',
            description: "I'm dishonest, and a dishonest man you can always trust to be dishonest."
        },
        le: {
            image: placeholder.le,
            title: 'Lawful Evil',
            description: "The hardest choices require the strongest wills."
        },
        ne: {
            image: placeholder.ne,
            title: 'Neutral Evil',
            description: "Those anguished screams... I can't help but find some satisfaction in them..."
        },
        ce: {
            image: placeholder.ce,
            title: 'Chaotic Evil',
            description: "Introduce a little anarchy, upset the established order, and everything becomes chaos. I'm an agent of chaos."
        },
        colors: {
            lg: '#d06265',
            ng: '#50f484',
            cg: '#ce79d7',
            ln: '#78eeee',
            nn: '#d6bb54',
            cn: '#5263cd',
            le: '#f549bf',
            ne: '#e3fa3a',
            ce: '#5ff742'
        }
    }

    initialState = this.state;
    tempState = this.state;

    tempAlignment2 =  {
    align: 'lg',
    image: '',
    description: ''
    }

    clearTempAlignment = () => {
        this.tempAlignment2.image = "";
        // this.refs.imageInput.value = "";
        this.refs.imageUpload.value = "";
        this.tempAlignment2.description = "";
        this.refs.descriptionInput.value = "";
    }

    chartURL;

    // componentDidUpdate () {
    //     let chart = document.getElementById("alignmentChart");
    //     let img = domtoimage.toJpeg(chart, { quality: 1.0} );
    //     console.log(img.dataUrl);
    //     img.download = 'alignment.jpg';
    //     this.chartURL = img.dataUrl;
    //     // domtoimage.toJpeg(chart, { quality: 1.0} ).then(  (dataUrl) => {
    //     //     let link = document.createElement('a');
    //     //     link.download = 'alignmentChart.png';
    //     //     link.href = dataUrl;
    //     //     this.chartURL = link.href;
    //     //     console.log(this.chartURL);
    //     // });
    // }

    downloadHandler = () => {
        let chart = document.getElementById("alignmentChart");
        setTimeout(() => {
        domtoimage.toJpeg(chart, { quality: 1.0} )
    .then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'alignmentChart.png';
        link.href = dataUrl;
        link.click();
    });}, 1000)
    }

    selectHandler = (event) => {
        this.clearTempAlignment();
        this.tempAlignment2.align = event.target.value;
    }

    imageURLHandler = (event) => {
        this.tempAlignment2.image = event.target.value;
            }

    imageUploadHandler = (event) => {
        console.log(event.target.value);
        this.tempAlignment2.image = URL.createObjectURL(event.target.files[0]);
    }
    
    descriptionHandler = (event) => {
        this.tempAlignment2.description = event.target.value;
            }

    resetHandler = () => {
        this.setState(this.initialState);
        this.tempAlignment2 =  {
            align: 'lg',
            image: '',
            description: ''
        }
        // this.refs.imageInput.value = "";
        this.refs.imageUpload.value = "";
        this.refs.descriptionInput.value = "";
        this.refs.alignmentSelect.value = "lg";
    }
    
    updateHandler = () => {
        if (!this.tempAlignment2.align) {
            alert("Please select an alignment!");
            return;
        }

        if (!this.tempAlignment2.image) {
            alert("Please enter an image URL or upload an image!");
            return;
        }
        if (!this.tempAlignment2.description) {
            alert("Please enter a description!");
            return;
        }

            switch (this.tempAlignment2.align) {
                    case 'lg' : 
                        this.tempState.lg.image = this.tempAlignment2.image;
                        this.tempState.lg.description = this.tempAlignment2.description;
                        this.setState({ lg : this.tempState.lg});
                        break;
                    case 'ng' : 
                        this.tempState.ng.image = this.tempAlignment2.image;
                        this.tempState.ng.description = this.tempAlignment2.description;
                        this.setState({ ng : this.tempState.ng});
                        break;
                    case 'cg' :       
                        this.tempState.cg.image = this.tempAlignment2.image;
                        this.tempState.cg.description = this.tempAlignment2.description;
                        this.setState({ cg : this.tempState.cg});
                        break;
                    case 'ln' :       
                        this.tempState.ln.image = this.tempAlignment2.image;
                        this.tempState.ln.description = this.tempAlignment2.description;
                        this.setState({ ln : this.tempState.ln});
                        break;
                    case 'nn' :       
                        this.tempState.nn.image = this.tempAlignment2.image;
                        this.tempState.nn.description = this.tempAlignment2.description;
                        this.setState({ nn : this.tempState.nn});
                        break;
                    case 'cn' :       
                        this.tempState.cn.image = this.tempAlignment2.image;
                        this.tempState.cn.description = this.tempAlignment2.description;
                        this.setState({ cn : this.tempState.cn});
                        break;
                    case 'le' :       
                        this.tempState.le.image = this.tempAlignment2.image;
                        this.tempState.le.description = this.tempAlignment2.description;
                        this.setState({ le : this.tempState.le});
                        break;
                    case 'ne' :       
                        this.tempState.ne.image = this.tempAlignment2.image;
                        this.tempState.ne.description = this.tempAlignment2.description;
                        this.setState({ ne : this.tempState.ne});
                        break;
                    case 'ce' :       
                        this.tempState.ce.image = this.tempAlignment2.image;
                        this.tempState.ce.description = this.tempAlignment2.description;
                        this.setState({ ce : this.tempState.ce});
                        break;
            		default: break;
            			} 

        
    }

    render ()
    {return (
        <div className={styles.MainContainer}>
            <div>
            <div className={styles.PageInfo}>
	<div className={styles.Headline}>Alignment Chart Generator</div>
    <div className={styles.GeneratorControls}>
    <label>Select an Alignment</label>
			<select onChange={this.selectHandler} ref="alignmentSelect">
				<option value="lg">Lawful Good</option>
				<option value="ng">Neutral Good</option>
				<option value="cg">Chaotic Good</option>
				<option value="ln">Lawful Neutral</option>
				<option value="nn">Neutral</option>
				<option value="cn">Chaotic Neutral</option>
				<option value="le">Lawful Evil</option>
				<option value="ne">Neutral Evil</option>
				<option value="ce">Chaotic Evil</option>
		</select>
		{/* <label>Enter Image URL</label> -->
		<input type="text" ref="imageInput" onChange={this.imageURLHandler} /> */}
        <label>Upload an image.</label>
        <input type="file" ref="imageUpload" onChange={this.imageUploadHandler} />
		<label>Enter a quotation.</label>
		<textarea rows="4" onBlur={this.descriptionHandler} ref="descriptionInput"></textarea>
        <Button clicked={this.updateHandler} buttonText="Update" />
        <Button clicked={this.resetHandler} buttonText="Reset" />
		<Button clicked={this.downloadHandler} buttonText="Download" />
		</div>
	</div>
            </div>
        
    <AlignmentCells {...this.state}  />
    {/* <img src={this.chartURL} /> */}
        </div>
        
    )}
}



export default MainContainer;
