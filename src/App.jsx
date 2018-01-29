import React, {Component} from 'react';
import Parallax from 'react-springy-parallax';
import Header from './Header';
import Project from './Project';
import projectData from './projectData';



class App extends Component {
	constructor(){
		super();
		this.state = {
			projects: {projectData}
		}
	}

	render() {
	    return (
	    	<Parallax ref='parallax' pages={2}>
			    <Parallax.Layer
			        // Page offset, or where the layer will be at when scrolled to
			        // 0 means start, 1 second page, 1.5 second and half, and so on ...
			        offset={0}
			        // Parallax factor, allows for positive and negative values
			        // Shifts the layer up or down in accordance to its offset
			        speed={1}
	                onClick={() => this.refs.parallax.scrollTo(1)}>
	          		<Header />
			    </Parallax.Layer>

			 	<Parallax.Layer offset={1} speed={1}>
			 		<Project project={this.state.projects.projectData['Project1']}/>
			 	}
			 	</Parallax.Layer>
	      	</Parallax>
	    );
	 }
}
export default App;
