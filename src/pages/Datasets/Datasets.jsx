import React from "react";
import { Divider } from "antd";
import './Datasets.scss'
import { LinkOutlined } from "@ant-design/icons";
export default class Datasets extends React.Component {



    render() {
        return (
            <div className="container">
                <Divider />
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                    <h5><b>Genomic Information of the Datasets</b></h5>
                    <Divider />

                    <div className="col-md-10">
                     
                        <p className="infod">
                            Here, you will find a brief description of all the protein datasets used in HPInet. From this page, users can go directly to the original source of the proteome and download the protein sequences.
                        </p>
                        <Divider />
                        <h4>Host Species</h4>
                        <Divider />
                        <p className="infod">
       
                            Link to <i>Triticum aestivum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/triticum_aestivum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Zea mays</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/zea_mays/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Oryza sativa japonica</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/oryza_sativa/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Hordeum vulgare</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/hordeum_vulgare/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Sorghum bicolor</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/sorghum_bicolor/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Avena sativa</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/avena_sativa/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Setaria italica</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/setaria_italica/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Secale cerale</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/secale_cerale/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                        </p>
                        <Divider/>
                        <h4> Fungal Pathogen Species</h4>
                        <Divider />
                        <h5> Wheat</h5>
                        <p className="infod">
                        
                        Link to <i>Puccinia triticina</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/puccinia_triticina/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                        <br/>
                        Link to <i>Puccinia graminis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-57/fasta/puccinia_graminisug99/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                        <br/>
                        Link to <i>Puccinia striiformis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/puccinia_striiformis/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                        <br/>
                        Link to <i>Blumeria graminis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_ascomycota4_collection/blumeria_graminis_f_sp_tritici_gca_900519115/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                        <br/>
                        Link to <i>Tilletia indica</i>: <a href="http://ftp.ebi.ac.uk/ensemblgenomes/pub/release-52/fungi/fasta/fungi_basidiomycota1_collection/tilletia_indica_gca_001645015/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                        </p>

                    </div>
                    <Divider />
                </div>
            
            </div>
        )
    }
}