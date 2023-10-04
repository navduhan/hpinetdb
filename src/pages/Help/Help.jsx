import React from "react";
import { Divider } from "antd";
import './Help.scss'
import 'scss/style.scss';
import { LinkOutlined } from "@ant-design/icons";
import { Table } from "react-bootstrap";

export default class Help extends React.Component {

    render() {
        return (
            <div className="container">
                <Divider />
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                    <h3><b>HPInet Tutorial</b></h3>
                    <Divider />
                    <p className="infot">
                        Introduction
                    </p>
                    <p className="infoh">
                    Cereal crops serve as a fundamental pillar of global food security, providing sustenance to billions of people and forming the basis of numerous industrial and economic sectors. These crops consist of several essential nutrients such as proteins, vitamins, carbohydrates, minerals, and others. However, cereal crops face persistent threats in the form of biotic stresses (mainly phytopathogens), necessitating the exploration of innovative strategies for disease management. The deleterious effects of these pathogens range from fungal infections to viral agents, substantially affecting agricultural yield losses and economic repercussions. In this context, the development of a protein-protein interaction (PPI) database assumes a pivotal role, as it enables the elucidation of molecular mechanisms underlying host-pathogen interactions, facilitating the identification of potential targets for intervention. PPIs play a crucial role in numerous biological processes, influencing various cellular functions, signal transduction cascades, and regulatory network. Such interactions also regulate the interplay between host cell surface receptors and pathogen effector proteins, and the downstream activation of host defense signaling pathways.
                    In pursuit of disseminating the wealth of information, we aim to develop a comprehensive database, named “HPInet”, dedicated to cereal disease protein-protein interactions. HPInet encompasses eight prominent cereal crops, including wheat, rice, maize, barley, oats, sorghum, rye, and foxtail, and their corresponding major bacterial, fungal, and viral diseases, resulting in 32 plant-disease combinatorial possibilities. This expansive coverage is essential, as it addresses the complex and interconnected value of cereal crop diseases, providing a holistic perspective on host-pathogen interactions. Each crop-disease combination is analyzed using a multifaceted computational framework, integrating a suite of sequence-based algorithms that includes computational models such as (i) interolog, (ii) domain, (iii) gene ontology, and  (iv) phylogenetic profiling predictions. The integration of these computational models harnesses the collective power of functional and evolutionary information, thus providing a multi-dimensional view of protein-protein interactions. The resulting database not only serves as a comprehensive resource of potential interactions but also provide functional annotations (gene ontology, KEGG pathways, pathogen effectors, host transcription factors, and subcellular localization) of the host and pathogen proteins involved in the predicted interactions, thus offering insights into disease resistance strategies and the development of improved crop varieties. This database empowers researchers to decipher regulatory nodes within candidate PPI pairs using network visualization tool, thereby fortifying crop resilience. By integrating various computational models, HPInet will serve as an invaluable resource for the scientific community, aiding in the development of disease-resistant crop cultivars. 

                    </p>
                    <img src="images/home.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        Datasets implemented in the study
                    </p>
                    <p className="infoh">
                        The respective host and pathogen species proteomes used in the analysis can be found on <a href="datasets" >Datasets <sup> <i> <LinkOutlined /></i></sup></a> page. If required, the users can directly download the protein sequence files from these sources.
                    </p>
                    <img src="images/datasets.png" className="imk" alt="" />

                    <Divider />
                    <p className="infot">
                        Host-pathogen selection page
                    </p>
                    <p className="infoh">
                        The host and their corresponding pathogen can be selected for interactome search.
                    </p>
                    <img src="images/plant.png" className="imk" alt="" />

                    <Divider />
                    <p className="infot">
                        Host-pathogen interactomics module
                    </p>
                    <p className="infoh">
                    <p>Four (4) different methods have been implemented in HPInet. Users can choose the different interaction method by selecting the radio button. By default it will show interolog predictions. </p>
                            <b>Interolog method</b>
                            <p className="infoh">The concept from which the module strategy relies upon is the conservation of protein-protein
                            interactions among similar systems, e.g. if A and A'; are orthologs and B and B' are orthologs, then the
                            interactions between A and B (in a certain system) and between A' and B' (in another system) are
                            interologs (Matthews, 2001) . Subsequently, the ortholog proteins obtained through this process are
                            used as query to search against the PPI databases. If there is a match in the PPI database which
                            corresponds to a host and pathogen proteins, that protein pair is predicted as interacting. In practice,
                            the sequences are aligned (host and pathogen sets separately) to the PPI sequences using 
                            BLAST in HPInet. </p>
                    
                    <b>Domain-based</b>
                            <p className="infoh">The domain-based module follows a similar logic like Interolog method, although predictions are
                            made against domain-domain interaction (DDI) databases instead of PPI databases. Domains
                            structures are inferred from the host and pathogen protein sequences using the HMMER aligner
                            (Eddy, 2011) , which align the sequences into domain patterns from the Pfam database (Finn et al.,
                            2014) . As a result, this will assign domains to the sequences that contain the specific domain pattern.
                            With the list of domains inferred, a query is performed to search inside the DDI databases for matches
                            between host and pathogen domains. If there is a match, the proteins from which those domains were
                            inferred will be predicted as interacting.</p>
                            <b>GOsim</b>
                            <p className="infoh">This module is divided into two steps; i) Assigning gene ontology terms to the sequences using
                            InterProScan (Jones et al., 2014) , and then ii) Finding the similarities between GO terms sets using
                            a Python script . A threshold and a similarity value will determine if the protein pair is
                            interacting or not. GOSemSim method calculates a similarity matrix between the GO
                            terms set of the host and the pathogen sequences. It will combine those values (pairwise similarities
                            between two GO terms set) according to the strategy selected. HPInet uses  five different methodsto calculate the similarities. Wang method is select default for calculation becuase it ignores BP, CC and MF sub-ontologies from the GO graph, which is useful in the cases when there is a comparison between two proteins
                            that have GO terms connected from different sub-ontologies. The average scoring is kept as default scoring method. Users can provide host and pathogen protein ids to calculate GO similariyt based protein protein interactions </p>
                            <b>Phylo-profiling</b>
                            <p className="infoh">This module computes the appearance or absence of a certain protein in a wide genome pool. It is
                            well known that interacting proteins are concurrent in presence to execute their functions. This is likely
                            due to co-evolution of proteins connected with the same biological processes. If the co-appearance of
                            both the host protein and pathogen protein are found, it leads to evidence that an interaction occurs.
                            We use binary variables (1 and 0) to indicate whether a given protein is found in the compared
                            genomes or not. These established profiles can be linked by finding the Hamming distance, indicating
                            physical interaction of functional association (Pellegrini et al., 1999).</p>
                    <img src="images/interactome.png" className="imk" alt="" />
                    </p>
                    <Divider />
                    <p className="infot">
                        Host-pathogen interactions Result
                    </p>
                    <p className="infoh">
                        When a job is submitted, it will be assigned to a unique identifier that user can access to check the status of the job (queried, running or done). After the job is completed, it will display the results in an enriched table with the option to sort the content by column or to be filtered by keyword. The result table can be downloaded in excel or pdf format, or copied as clipboard.
                        To see the respective host or pathogen protein interactor from the selected databases on the previous page, the user can click on the protein ID in 'Host Interactor' and 'Pathogen Interactor' columns, which will take the user to the respective external links. This provides the user with additional information of the specific protein. From these interactions, the user can select a specific protein of interest and search it on other features available on the database to obtain functional annotation of the particular protein.
                        <br />
                        Further, the user can click on 'Network Visualization' to visualize the network of the predicted interactions.

                    </p>
                    <img src="images/result.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        Host-pathogen interactions Network
                    </p>
                    <p className="infoh">
                    HPInet provides an efficient network visualization platform, implemented using Cytoscape. This plugin was specially chosen given its performance at displaying large networks. From the host-pathogen network visualization, a user can visualize a set of traits for each node (species, description, degree), and also can easily identify hub nodes (nodes with a higher number of edges). This is useful as hub nodes have been found crucial in infectious disease pathways. A user is not limited to the network analysis that is provided through our database, the resulted network can be further examined in any network analyzer that could handle JSON or tabular network files.
                    In the network, the color of the edges correspond to the respective databases chosen. The edges from each database are represented with different colors as shown on the top right corner of the page. The blue nodes represent host proteins while the red nodes are pathogen proteins.
                    The user can click on any node (one at a time) in the network to see the respective description of the protein, which is shown on the top left corner of the page.
                    To analyze the network within the database, the user can select a particular node and move it around. The layout of the network can also be reset using 'Force Atlas' button. 

                    </p>
                    <img src="images/network.png" className="imk" alt="" />
                </div>
                <Divider />

                <div className="row">
                <p className="infot">Browser Compatibility</p>
                        <p className="infoh">HPInet have been tested in the following setups.</p>

                        <Table  responsive className="kbl-table table-borderless">
  <thead className="kbl-thead">
                           
                                <tr>
                                    <th>OS</th>
                                    <th>Version</th>
                                    <th>Chrome</th>
                                    <th>Firefox</th>
                                    <th>Safari</th>
                                    <th>Edge</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Linux</td>
                                    <td>Ubuntu 22.04</td>
                                    <td>108.0.5359.71</td>
                                    <td>112.0.2</td>
                                    <td>n/a</td>
                                    <td>113.0.1774.35</td>
                                </tr>
                                <tr>
                                    <td>MacOS</td>
                                    <td>Ventura 13.3.1 (a)</td>
                                    <td>108.0.5359.71</td>
                                    <td>112.0.2</td>
                                    <td>16.4</td>
                                    <td>113.0.1774.35</td>
                                </tr>
                                <tr>
                                    <td>Windows</td>
                                    <td>10</td>
                                    <td>108.0.5359.71</td>
                                    <td>112.0.2</td>
                                    <td>not tested</td>
                                    <td>113.0.1774.35</td>
                                </tr>
                                </tbody>
                        </Table>
                        </div>
                    <Divider/>
            </div>
        )
    }
}