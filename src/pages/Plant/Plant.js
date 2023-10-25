import React from "react";
import { env } from '../../env';
import { Divider} from "antd";
import "./Plant.scss";
import 'scss/components/buttons.scss';
import 'scss/style.scss'
import Data from './plants.json';
import {pathogen} from './pathogen.js';
import scientific from "./pscientific.json"
import { disease } from "./disease";


const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");



let fd = Data.filter(function (i) {
  console.log(i)
  return i.id === id;
});


export default class Plant extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        species: fd[0].name,
        pathogen: fd[0].pathogen[0],
        disease: 'Select a Disease',
        plantMap: {},
        currentPathogens: fd[0].pathogen,
        diseaseMap:{},
        currentdisease:[]
      };
      const plantMap = {}
      for (let plant of Data){
            plantMap[plant.name]= plant.pathogen
      }
      const diseaseMap = {}

      for (let plant of Data){
       diseaseMap[plant.name]= plant.disease
  }

      this.state.plantMap = plantMap
      this.state.diseaseMap = diseaseMap

      this.handleSpecies = this
            .handleSpecies
            .bind(this);
    this.handlePathogen = this
    .handlePathogen
    .bind(this);
    this.handleDisease = this
    .handleDisease
    .bind(this);
    }
    
    handleSpecies(e){
        console.log(e.target.value)
        const species =e.target.value
        if (species === '' ){
            this.setState({
                species: '',
                currentPathogens: [],
                currentdisease:[]
            })
            return
        }
        this.setState({
            species: e.target.value,
            currentPathogens: this.state.plantMap[species],
            currentdisease: this.state.diseaseMap[species],
            pathogen: this.state.plantMap[species][0]
        })
       
    }
    handlePathogen(e){
        this.setState({
            pathogen: e.target.value

        })
    }

    handleDisease(e){
      this.setState({
          disease: e.target.value

      })
  }


render(){
  console.log(this.state.currentPathogens[0])
  localStorage.setItem(
    "param",
    JSON.stringify({
     host: this.state.species,
     pathogen: this.state.pathogen
    })
  );
    const  ddata = disease[`${this.state.species}_${this.state.pathogen}`]
    return(
        <div className="container">

    
<div className="row mt-2">
<Divider />
<div className="col-md-6">
<h4>Host: {this.state.species}</h4>
</div>
<div className="col-md-3 ">
<h5>OR select other species:</h5>
</div>
<div className="col-md-3">

<select className="form-select ditem" onChange={this.handleSpecies} defaultValue={this.state.species}>
        {/* <option value={fd[0].name}>{fd[0].sname}</option> */}
          {Data.map((sp,index) =>{return (
            <option  key={index} value={sp.name}>         
                {sp.sname}            
            </option>
          
          )})}
        </select>
</div>
<Divider />
</div>

<div className="row  mb-4">
<div className="col-md-6 ">
<h4>Pathogen: <i>{pathogen[this.state.pathogen]}</i></h4>
</div>
<div className="col-md-3 ">
<h5>OR select other species:</h5>
</div>
<div className="col-md-3">
<select className="form-select ditem" onChange={this.handlePathogen} defaultValue={this.state.currentPathogens[0]}>
        {/* <option value="">Select a Pathogen Species</option> */}
          {this.state.currentPathogens.map((sp,index) =>(
            <option  key={index} value={sp}>
              {pathogen[sp]}
            </option>
          ))}
        </select>
</div>
</div>


<Divider />
<div className="row  mb-4">
<div className="col-md-6 ">
<h4>Disease: {ddata} </h4>
</div>
<div className="col-md-6 ">
<h4>Pathogen Type: {scientific[0][`${this.state.pathogen}`][0]} </h4>
</div>
</div>

<Divider />
<div className="row justify-content-center">
<div className="col-md-4">
<div className="card cardd mb-3">
              <h5 className="heading">Scientific Classification</h5>
             <div className="row text-left cr">
              <div className="col-md-4">
              <ul className="list list-inline ">
<li>Kingdom: </li>
<li>Division: </li>
<li>Class: </li>
<li>Order:</li>
<li>Family: </li>
<li>Genus: </li>
<li>Species: </li>
              </ul>
              </div>
                <div className="col-md-8">
                <ul className="list list-inline ">
                {scientific[0][`${this.state.pathogen}`].map((sp,index) =>{
                 if(index!==6){
return(<li key={index}>{sp}</li>)
                 }
                 else{
                  return(<li className="scname" key={index}>{sp}</li>)
                 }
                
})}
              </ul>
                </div>
              </div>
</div>
</div>


<div className="col-md-3">
<div className="card cardd mb-3">
              <h5 className="heading">Pathogen Annotations </h5>
              {/* <p className="heading2">
                <i>{pathogen[this.state.pathogen]}</i>
                <hr className="line"></hr>
              </p> */}
              <ul className="list list-inline cr ">
                <li>
                  <a className="linked" href={`${env.BASE_URL}/kegg/?id=${this.state.pathogen}&class=pathogen`}>
                    KEGG Pathways
                  </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/go/?id=${this.state.pathogen}&class=pathogen`}>
                    Gene Ontology
                  </a>
                </li>

                <li>
                  <a className="linked" href={`${env.BASE_URL}/interpro/?id=${this.state.pathogen}&class=pathogen`}>
                    Functional Domains
                  </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/local/?id=${this.state.pathogen}&class=pathogen`}>
                    Subcellular Localization
                  </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/virulence/?id=effector`}>
                    Effector Proteins
                  </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/virulence/?id=secretory`}>
                    Secretory Proteins
                  </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/virulence/?id=effector_and_secretory`}>
                    Effector and Secretory Proteins
                  </a>
                </li>
              </ul>
</div>
</div>
<div className="col-md-3">
<div className="card cardd mb-3">
              <h5 className="heading">Host Annotations </h5>

              <ul className="list list-inline cr">
                <li>
                  <a className="linked" href={`${env.BASE_URL}/kegg/?id=${this.state.species}&class=host`}>
                    KEGG Pathways
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="linked" href={`${env.BASE_URL}/go/?id=${this.state.species}&class=host`}>
                    Gene Ontology
                  </a>
                </li>

                <li>
                  <a className="linked" href={`${env.BASE_URL}/interpro/?id=${this.state.species}&class=host`}>
                    Functional Domains{" "}
                  </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/local/?id=${this.state.species}&class=host`}>
                    Subcellular Localization{" "}
                  </a>
                </li>
                <li>
                  <a className="linked" href={`${env.BASE_URL}/tf/?id=${this.state.species}&class=host`}>
                    Transcription Factors{" "}
                  </a>
                </li>
              </ul>
</div>
</div>

  
<Divider />
</div>
<div className="row justify-content-center">
  <div className="col-md-3">
  <a className="btn kbl-btn-2" href={`${env.BASE_URL}/interactome/?host=${this.state.species}&pathogen=${this.state.pathogen}`} >
                  
                    Search Interactome
                 
                </a>
  </div>
</div>
<Divider />

      



    </div>
    )}}