import React, {Component} from 'react';


class Header extends Component {
	render() {
		return (
			<div className="introductionContainer">
				<div className="introductionContent">
					<div className="introductionName">
					Colby Duhon
					</div>
					<div className="introductionTagline">
					Full Stack Web Developer
					</div>
					<div className="introductionLocationLine">
					San Francisco
					</div>
					<div className="introductionIcons">
						<a href="https://github.com/colbyduhon1">
							<i className = "icon fa fa-github"/>
						</a>
						<a href="https://www.linkedin.com/in/colby-duhon/">
							<i className = "icon fa fa-linkedin-square"/>
						</a>
					</div>
				</div>
			</div>
			)
	}
}

export default Header;