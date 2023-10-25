import React from "react";
import "./TF.scss";
import '../../scss/style.scss';
import axios from "axios";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
import { Divider } from "antd";
import { env } from '../../env';
import {data} from "./data";
const urlParams = new URLSearchParams(window.location.search);

const idt = urlParams.get("id");
let term = ''
let tm = ''
    if (idt ==='effector'){
        term = 'Effector'
    }
    if (idt === 'secretory'){
        term = 'Secretory'
    }
    if (idt ==='effector_and_secretory'){
        tm = idt.split("_")
        term = `${tm[0].charAt(0).toUpperCase() + tm[0].slice(1)} ${tm[1]} ${tm[2].charAt(0).toUpperCase() + tm[2].slice(1)}`

    }
export default class GO extends React.Component {
  constructor({ props }) {
    super(props);

    this.state = {
      List: [],
      offset: 0,
      perPage: 25,
      currentPage: 0,
      pageCount: 20,
      total: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;

    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.fetchResults();
      }
    );
  };

  fetchResults() {

    let term = ''
    if (idt ==='effector'){
        term = 'effector protein'
    }
    if (idt === 'secretory'){
        term = 'secretory protein'
    }
    if (idt ==='effector_and_secretory'){
        term = 'effector and secretory protein'
    }
    console.log(term)
    axios
      .get(
        `${env.BACKEND}/api/effector/?species=${term}&page=${this.state.currentPage}&size=${this.state.perPage}`
      )
      .then((res) => {
        const List = res.data.data;

        const dl = Math.ceil(res.data.total / this.state.perPage);

        this.setState({
          List: List,
          pageCount: dl,
          total: parseInt(res.data.total),
        });
      });
  }

  componentDidMount() {
    this.fetchResults();
  }
  render() {
    return (
      <div className="container">
        <Divider />
        <div className="row flex-lg-row justify-content-center g-2 my-2">
          <h5>{term} Proteins of <i>{data[idt]}</i></h5>
          <Divider />
        </div>
        <div className="row flex-lg-row align-items-center g-2 my-2">
          <h5>
            {" "}
            Showing {this.state.offset + 1} to {this.state.offset + 25} of{" "}
            {this.state.total} {term} Proteins
          </h5>
        </div>
        <Table responsive className="kbl-table table-borderless">
          <thead className="kbl-thead">
            <tr>
              <th>Protein</th>
              <th>Protein Length</th>
              <th>Description</th>
              <th>Virulence</th>
            </tr>
          </thead>
          <tbody>
            {this.state.List.map((result, index) => (
              <tr key={index + 1}>
                <td>
                <a
                          href={`https://www.ncbi.nlm.nih.gov/search/all/?term=${result["gene"]}%09`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {result["gene"]}
                        </a>
                </td>
                <td>{result["length"]}</td>
                <td>{result["description"]}</td>
                <td>{result["type"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ReactPaginate
          forcePage={this.state.currentPage}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          ellipsisItem={null}
        />

       
      </div>
    );
  }
}
