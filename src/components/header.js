import React from 'react'
import './Header.css'
import Link from 'gatsby-link'

class Header extends React.Component {
  constructor(props) { 
    super(props) 
    this.state = { hasScrolled: false }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
          <div className="HeaderGroup">
            <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link>
            <Link to="/#about">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#experience">Experience</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </div>
    )
  }
}

export default Header