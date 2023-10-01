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
                            Here, you will find a brief description of all the protein datasets used in TritiKBdb. From this page, users can go directly to the original source of the proteome and download the protein sequences.
                        </p>
                        <Divider />
                        <h4>Host Species</h4>
                        <Divider />
                        <p className="infod">
       
                            Link to <i>Triticum aestivum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_aestivum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                            <br/>
                            Link to <i>Triticum turgidum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-50/fasta/triticum_turgidum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
                        </p>
                        <Divider/>
                        <h4>Pathogen Species</h4>
                        <Divider />
                        <p className="infod">

Link to <i>Tilletia indica</i>: <a href="https://www.ncbi.nlm.nih.gov/data-hub/genome/GCA_001689995.1/" rel="noreferrer" target="_blank" >NCBI<sup> <i> <LinkOutlined /></i></sup></a>

                        </p>
                    </div>
                    <Divider />
                </div>
            
            </div>
        )
    }
}