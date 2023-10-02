import React from "react";
import { env } from '../../env';
import "./Home.scss";
// import CookieConsent from "react-cookie-consent";
import Table from 'react-bootstrap/Table';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModel = () => this.setState({ isOpen: true });
  closeModel = () => this.setState({ isOpen: false });
  render() {
    return (
      
<div className="container main">
<div className="separator">
		<h1>About HPInet</h1>
		<div className="divider">&nbsp;</div>
	</div>
	<div className="purpose">
		<p>Cereal crops serve as a fundamental pillar of global food security, providing sustenance to billions of people and forming the basis of numerous industrial and economic sectors. These crops consist of several essential nutrients such as proteins, vitamins, carbohydrates, minerals, and others. However, cereal crops face persistent threats in the form of biotic stresses (mainly phytopathogens), necessitating the exploration of innovative strategies for disease management. The deleterious effects of these pathogens range from fungal infections to viral agents, substantially affecting agricultural yield losses and economic repercussions. In this context, the development of a protein-protein interaction (PPI) database assumes a pivotal role, as it enables the elucidation of molecular mechanisms underlying host-pathogen interactions, facilitating the identification of potential targets for intervention. PPIs play a crucial role in numerous biological processes, influencing various cellular functions, signal transduction cascades, and regulatory network. Such interactions also regulate the interplay between host cell surface receptors and pathogen effector proteins, and the downstream activation of host defense signaling pathways.
In pursuit of disseminating the wealth of information, we aim to develop a comprehensive database, named “HPInet”, dedicated to cereal disease protein-protein interactions. HPInet encompasses eight prominent cereal crops, including wheat, rice, maize, barley, oats, sorghum, rye, and foxtail, and their corresponding major bacterial, fungal, and viral diseases, resulting in 32 plant-disease combinatorial possibilities. This expansive coverage is essential, as it addresses the complex and interconnected value of cereal crop diseases, providing a holistic perspective on host-pathogen interactions. Each crop-disease combination is analyzed using a multifaceted computational framework, integrating a suite of sequence-based algorithms that includes computational models such as (i) interolog, (ii) domain, (iii) gene ontology, and  (iv) phylogenetic profiling predictions. The integration of these computational models harnesses the collective power of functional and evolutionary information, thus providing a multi-dimensional view of protein-protein interactions. The resulting database not only serves as a comprehensive resource of potential interactions but also provide functional annotations (gene ontology, KEGG pathways, pathogen effectors, host transcription factors, and subcellular localization) of the host and pathogen proteins involved in the predicted interactions, thus offering insights into disease resistance strategies and the development of improved crop varieties. This database empowers researchers to decipher regulatory nodes within candidate PPI pairs using network visualization tool, thereby fortifying crop resilience. By integrating various computational models, HPInet will serve as an invaluable resource for the scientific community, aiding in the development of disease-resistant crop cultivars. 

		</p>
		
	</div>

	<div className="separator">
		<h1>Search by plants</h1>
		<div className="divider">&nbsp;</div>
	</div>
	
  <Table  responsive className="kbl-table table-borderless">
  <thead className="kbl-thead">
    <tr>
    <th >Crop Species</th><th>Common Name </th><th> Proteins</th> <th> Gene Ontology </th> <th> KEGG Pathways </th> <th> Transcription Factors </th> <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr>
     <td> <i>Triticum aestivum</i> </td> <td> Wheat</td> <td>104,701</td><td>4895</td><td>139</td><td>5,833</td> <td><a href={`${env.BASE_URL}/plants/?id=1`}>Get interactions</a></td>
    </tr>
    <tr>
     <td> <i>Zea mays</i> </td> <td> Maize</td> <td>57,865</td><td>5983</td><td>139</td><td>3,425</td> <td><a href={`${env.BASE_URL}/plants/?id=2`}>Get interactions</a></td>
    </tr>
    <tr>
     <td> <i>Hordeum vulgare</i> </td> <td> Barley</td><td>35,531</td><td>4991</td><td>138</td><td>2,190</td> <td><a href={`${env.BASE_URL}/plants/?id=3`}>Get interactions</a></td>
    </tr>
    <tr>
     <td> <i>Oryza sativa</i> </td> <td> Rice</td> <td>38,210</td><td>2407</td><td>140</td><td>1,649</td> <td><a href={`${env.BASE_URL}/plants/?id=4`}>Get interactions</a></td>
    </tr>
    <tr>
     <td> <i>Secale cereale</i> </td> <td> Rye</td> <td>33,636</td><td>4010</td><td>139</td><td>1,959</td><td><a href={`${env.BASE_URL}/plants/?id=5`}>Get interactions</a></td>
    </tr>
    <tr>
     <td> <i>Sorghum bicolor</i> </td> <td> Sorghum</td> <td>39,524</td><td>6279</td><td>139</td><td>2,186</td> <td><a href={`${env.BASE_URL}/plants/?id=6`}>Get interactions</a></td>
    </tr>
    <tr>
     <td> <i>Avena sativa</i> </td> <td> Oat</td> <td>133,621</td><td>2777</td><td>139</td><td>4,423</td> <td><a href={`${env.BASE_URL}/plants/?id=7`}>Get interactions</a></td>
    </tr>
    <tr>
     <td> <i>Setaria italica</i> </td> <td> Foxtail</td> <td>38,826</td><td>5948</td><td>139</td><td>1,886</td> <td><a href={`${env.BASE_URL}/plants/?id=8`}>Get interactions</a></td>
    </tr>                             
  </tbody>
  </Table>

	<div className="divider">&nbsp;</div>

     

    </div>

    )}

    }