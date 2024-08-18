import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { env } from '../../env';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './VisTable.scss';

const urlParams = new URLSearchParams(window.location.search);

const tdata = urlParams.get("resultid");
const rtype =  urlParams.get("rtype");

export const VisTable = ({tableRowClicked, handleSearchChange}) => {
  
  let [data, setData] = useState([]);
  let [totalData, setTotalData] = useState([]);
  let [tableData, setTableData] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
     
     
      const results = await axios
      .get(
        `${env.BACKEND}/api/network/?results=${tdata}`
      );
      
      setData(results);
        setTableData(results.data.results);
        setTotalData(results.data.results);
    }

    fetchData();
  }, []);

  

  let results;
  localStorage.setItem("search", JSON.stringify(searchTerm))
  if (data.data) {
    results = (
      <Table responsive className="kbl-table table-borderless">
        <thead className="kbl-thead">
        
          <tr>
            <th className="light">#</th>
            <th className="light">Host</th>
            <th className="dark">Pathogen</th>
          </tr>
        </thead>

        <tbody>
          {Array.from(tableData).map((result, index) => (
            <tr className="select" key={index} onClick={() => {
              let db;
              if (rtype ==='interolog'){
                db = `${result.intdb_x}: ${result.Host_Protein}-${result.Pathogen_Protein}`
              }
              if (rtype ==='phylo'){
                db = `Phylo: ${result.Host_Protein}-${result.Pathogen_Protein}`
              }
              if (rtype ==='go'){
                db = `go: ${result.Host_Protein}-${result.Pathogen_Protein}`
              }
              if (rtype ==='domain'){
                db = `${result.intdb}: ${result.Host_Protein}-${result.Pathogen_Protein}`
              }
              if (rtype ==='consensus'){
                db = `${result.intdb_x}: ${result.Host_Protein}-${result.Pathogen_Protein}`
              }
              const data = {
                source: result.Host_Protein,
                target: result.Pathogen_Protein,
                gene: result.Host_Protein,
                pathogenProtein: result.Pathogen_Protein,
                id : db
              };

              tableRowClicked(data);
              handleSearchChange(searchTerm);
              }}>
              <td>{index + 1}</td>
              <td>{result.Host_Protein}</td>
              <td>{result.Pathogen_Protein}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  return (
    <div>
      <Row className="justify-content-center mb-4">
        <Col sm={12} className="px-4">
          <Form.Control className="kbl-form" type="email" placeholder="Search" value={searchTerm}
            onChange={(event) => {
              const searchTerm = event.target.value.toLowerCase();

              setSearchTerm(searchTerm);
              handleSearchChange(searchTerm);
              
              if (event.target.value === '') {
                const newData = data.data.results;
                setTableData(newData);

              } else {
                const newData = totalData.filter((item) => {
                  return item.Host_Protein.toLowerCase().includes(searchTerm) || item.Pathogen_Protein.toLowerCase().includes(searchTerm)
                });

                setTableData(newData);
                
              }
            }
          }/>

        </Col>
      </Row>
      {results}

    </div>
  );
}
