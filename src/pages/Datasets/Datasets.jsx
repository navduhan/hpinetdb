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
          </div>
        </div>
        <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
          <Divider />
          <h4>Host Species</h4>
          <Divider />
          <div className="col-md-5">
            <p className="infod">

              Link to <i>Triticum aestivum</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/triticum_aestivum/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
              <br />
              Link to <i>Zea mays</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/zea_mays/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
              <br />
              Link to <i>Oryza sativa japonica</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/oryza_sativa/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
              <br />
              Link to <i>Hordeum vulgare</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/hordeum_vulgare/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
              <br />
              Link to <i>Chenopodium quinoa</i> dataset:    <a href="https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/001/683/475/GCF_001683475.1_ASM168347v1/GCF_001683475.1_ASM168347v1_protein.faa.gz" rel="noreferrer" target="_blank" >NCBI<sup> <i> <LinkOutlined /></i></sup></a>
              <br /> 
            </p>
          </div>
          <div className="col-md-5">
            <p className="infod">
              Link to <i>Sorghum bicolor</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/sorghum_bicolor/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
              <br />
              Link to <i>Avena sativa</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/avena_sativa/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
              <br />
              Link to <i>Setaria italica</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/setaria_italica/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
              <br />
              Link to <i>Secale cerale</i> dataset:   <a href="http://ftp.ensemblgenomes.org/pub/plants/release-57/fasta/secale_cerale/pep/" rel="noreferrer" target="_blank" >Ensembl Plants<sup> <i> <LinkOutlined /></i></sup></a>
            <br />
              Link to <i>Eleusine coracana</i> dataset: <a href="https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/021/604/985/GCA_021604985.1_Ragi_PR202_v._2.0/GCA_021604985.1_Ragi_PR202_v._2.0_protein.faa.gz"rel="noreferrer" target="_blank" >NCBI<sup> <i> <LinkOutlined /></i></sup></a>
            </p>


          </div>
          <Divider />
          <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
            <h4> Fungal Pathogen Species</h4>
            <Divider />
            <div className="col-md-5">
              <p className="infod">

                Link to <i>Puccinia triticina</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/puccinia_triticina/pep" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Puccinia graminis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-57/fasta/puccinia_graminisug99/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Puccinia striiformis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/puccinia_striiformis/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Blumeria graminis sp tritici</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_ascomycota4_collection/blumeria_graminis_f_sp_tritici_gca_900519115/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Tilletia indica</i>: <a href="http://ftp.ebi.ac.uk/ensemblgenomes/pub/release-52/fungi/fasta/fungi_basidiomycota1_collection/tilletia_indica_gca_001645015/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Ustilago maydis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/ustilago_maydis/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Bipolaris maydis c5</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-57/fasta/fungi_ascomycota1_collection/bipolaris_maydis_c5_gca_000338975/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Puccinia sorghi</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_basidiomycota1_collection/puccinia_sorghi_gca_001263375/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Cercospora zeae-maydis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_ascomycota5_collection/cercospora_zeae_maydis_scoh1_5_gca_010093985/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Pyrenophora teres</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/pyrenophora_teres/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
              </p>
            </div>
            <div className="col-md-5">
              <p className="infod">
                Link to <i>Fusarium graminearum</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fusarium_graminearum/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Blumeria graminis sp hordei</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_ascomycota4_collection/blumeria_graminis_f_sp_hordei_gca_900237765/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Magnaporthe oryzae</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/magnaporthe_oryzae/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Bipolaris oryzae </i>atcc_44560: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_ascomycota1_collection/bipolaris_oryzae_atcc_44560_gca_000523455/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Rhizoctonia solani</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-57/fasta/fungi_basidiomycota1_collection/rhizoctonia_solani_ag_1_ia_gca_000334115/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Blumeria graminis</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/blumeria_graminis/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Colletotrichum graminicola</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/colletotrichum_graminicola/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Macrophomina phaseolina</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_ascomycota1_collection/macrophomina_phaseolina_ms6_gca_000302655/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Puccinia coronata</i>var avenae: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_basidiomycota1_collection/puccinia_coronata_var_avenae_f_sp_avenae_gca_002873275/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Fusarium poae</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-56/fasta/fungi_ascomycota3_collection/fusarium_poae_gca_001675295/pep/" rel="noreferrer" target="_blank" >Ensembl Fungi<sup> <i> <LinkOutlined /></i></sup></a>
                <br />

              </p>
            </div>

          </div>

          <Divider />
          <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
            <h4> Bacterial Pathogen Species</h4>
            <Divider />
            <div className="col-md-6">
              <p className="infod">
                Link to <i>Acidovax avenae</i> subsp avenae: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-56/fasta/bacteria_6_collection/acidovorax_avenae_subsp_avenae_atcc_19860_gca_000176855/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Pseudomonas coronafaciens </i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-56/fasta/bacteria_54_collection/pseudomonas_coronafaciens_pv_coronafaciens_gca_003699955/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Pseudomonas syringae</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-56/fasta/bacteria_77_collection/pseudomonas_syringae_gca_900103765/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Burkholderia glumae</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-56/fasta/bacteria_119_collection/burkholderia_glumae_bgr1_gca_000022645/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
              </p>
            </div>
            <div className="col-md-6">
              <p className="infod">
                Link to <i>Xanthomonas oryzae </i>pv oryzae: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-56/fasta/bacteria_123_collection/xanthomonas_oryzae_pv_oryzae_kacc_10331_gca_000007385/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Pseudomonas syringae</i>: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-57/fasta/bacteria_3_collection/pseudomonas_syringae_pv_atrofaciens_gca_001400125/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Xanthomonas vasicola </i>pv vasculorum: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-56/fasta/bacteria_36_collection/xanthomonas_vasicola_pv_vasculorum_gca_003116655/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
                Link to <i>Pseudomonas syringae</i> pv syringae: <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/release-56/fasta/bacteria_90_collection/pseudomonas_syringae_pv_syringae_b728a_gca_000012245/pep/" rel="noreferrer" target="_blank" >Ensembl Bacteria<sup> <i> <LinkOutlined /></i></sup></a>
                <br />
              </p>
            </div>
          </div>
          <Divider />
          <div className="row flex-lg-row justify-content-center g-2 my-2">
            <h5>Data Sources</h5>
            <Divider />

          </div>


          <div className="row flex-lg-row justify-content-center g-2 my-2">
            <a
              href="https://hpidb.igbb.msstate.edu/"
              className="col-md-1 hpidb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/hpidb.png" alt="" />
              <figcaption>HPIDB</figcaption>
            </a>

            <a
              href="http://www.ebi.ac.uk/intact/"
              className="col-md-1 db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src='./images/intact.png' height='40px' width='80px' alt="" />
              <figcaption>IntAct</figcaption>
            </a>

            <a
              href="http://mint.bio.uniroma2.it"
              className="col-md-1 db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/mint.png" alt="" />
              <figcaption>MINT</figcaption>
            </a>

            <a
              href="https://thebiogrid.org/"
              className="col-md-1 db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/biogrid.png" alt="" />
              <figcaption>BioGRID</figcaption>
            </a>
            <a
              href="https://string-db.org/"
              className="col-md-1 db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/string.png" alt="" />
              <figcaption>STRING</figcaption>
            </a>
            <a
              href="http://dip.doe-mbi.ucla.edu/"
              className="col-md-1 db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/dip.png" alt="dip" />
              <figcaption>DIP</figcaption>
            </a>
            <a
              href="https://manticore.niehs.nih.gov/cgi-bin/Domine"
              className="col-md-1 db2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/domine.png" alt="dip" />
              <figcaption>DOMINE</figcaption>
            </a>
            <a
              href="https://3did.irbbarcelona.org/"
              className="col-md-1 hpidb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/3did.png" alt="" />
              <figcaption>3did</figcaption>
            </a>
            <a
              href="http://www.uniprot.org/"
              className="col-md-1 db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/uniprot.png" alt="" />
              <figcaption>UniProt</figcaption>
            </a>
            <a
              href="https://ensembl.org"
              className="col-md-1 hpidb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/ensembl.png" alt="" />
              <figcaption>ENSEMBL</figcaption>
            </a>
          </div>
          <Divider />
        </div>

      </div>
    )
  }
}