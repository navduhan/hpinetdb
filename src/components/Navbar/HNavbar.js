import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { env } from "../../env";
import './HNavbar.scss';
import '../../scss/style.scss';
import lablogo from './lab_logo_red.png';
import usulogo from './usulogo2.png';
import dblogo from './db_logo2.png';

class HNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
    this.activeLink = this.activeLink.bind(this);
  }

  activeLink(link) {
    
    
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

    render() {
        let className = 'mx-1'
        let active = 'mx-1 current'
        console.log(env.BASE_URL)
return(
  <div className="container contain">
  <div className="row flex-lg-row align-items-center g-2 mt-2">

    <div className="col-md-2">
      <img src={lablogo} height={50} alt=''></img>
    </div>
    <div className="col-md-2">
    <img src={dblogo} height={40} alt=''></img>

    </div>
    <div className=" col-md-6 mt-2 nav-wrapper mx-auto">
        <Navbar className="justify-content-center">
          
          <Nav className="">
            <Nav.Link href= {`${env.BASE_URL}/`} className={'/' === this.props.active ? active : className}>
              Home
            </Nav.Link>
            <NavDropdown title="Species" id="basic-nav-dropdown">
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=1`} className={'species' === this.props.active ? active : className}>
                    <i>Triticum aestivum</i> (Wheat)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=2`} className={'species' === this.props.active ? active : className}>
                    <i>Zea mays</i> (Maize)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=3`} className={'species' === this.props.active ? active : className}>
                    <i>Hordeum vulgare</i> (Barley)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=4`} className={'species' === this.props.active ? active : className}>
                    <i>Oryza sativa</i> (Rice)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=5`} className={'species' === this.props.active ? active : className}>
                    <i>Secale cerale</i> (Rye)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=6`} className={'species' === this.props.active ? active : className}>
                    <i>Sorghum bicolor</i> (Sorghum)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=7`} className={'species' === this.props.active ? active : className}>
                    <i>Avena sativa</i> (Oat)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=8`} className={'species' === this.props.active ? active : className}>
                    <i>Setaria italica</i> (Foxtail)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=9`} className={'species' === this.props.active ? active : className}>
                    <i>Chenopodium quinoa</i> (Quinoa)
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/plants/?id=10`} className={'species' === this.props.active ? active : className}>
                    <i>Eleusine coracana</i> (Ragi)
                  </NavDropdown.Item>
</NavDropdown>
            <Nav.Link href={`${env.BASE_URL}/datasets`} className={'datasets' === this.props.active ? active : className}>
              Datasets
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/help`} className={'help' === this.props.active ? active : className}>
              Help
            </Nav.Link>
          </Nav>

        </Navbar>
      </div>
      <div className="col-md-2">
      <img src={usulogo} height={50} alt=''></img>
    </div>
    </div>
    
      </div>

)

    }
}
export {HNavbar};