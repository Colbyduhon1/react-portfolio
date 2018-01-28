import React, {Component} from 'react';
import Parallax from 'react-springy-parallax';
import Header from './Header';
import Project from './Project';



class App extends Component {
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
		    <Parallax.Layer
		        // Page offset, or where the layer will be at when scrolled to
		        // 0 means start, 1 second page, 1.5 second and half, and so on ...
		        offset={1}
		        // Parallax factor, allows for positive and negative values
		        // Shifts the layer up or down in accordance to its offset
		        speed={1}>
			<Project />
		    </Parallax.Layer>
      	</Parallax>
    );
  }
}
export default App;
