// import React from 'react';
import { Table, Divider, Input, Space } from "antd";
import api from '../api';
import "../style.css";
import { Component } from "react";

const { Search } = Input;

class Pessoas extends Component {
  
  state= {
    Pessoas: {}
  }

  async componentDidMount() {
    const response = await api.get('people/1/')
    console.log(response.data)

    this.setState({ Pessoas: response.data })
  }

  render() {

    const {Pessoas} = this.state;

    const columns = [
      {
        title: "Nome",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Altura",
        dataIndex: "height",
        key: "height",
      },
      {
        title: "Aniversário",
        dataIndex: "birthday",
        key: "birthday",
      },
      {
        title: "Criado em",
        dataIndex: "created",
        key: "created",
      },
      {
        title: "Editado em",
        dataIndex: "edited",
        key: "edited",
      },
    ];
    
    const data = [
      {
        key: "1", 
        name: <p>{Pessoas.name}</p>,
        height: <p>{Pessoas.height}</p>,
        birthday: <p>{Pessoas.birth_year}</p>,
        created: <p>{Pessoas.created}</p>,
        edited: <p>{Pessoas.edited}</p>
      },
      {
        key: "2",
        name: "C-3PO",
        height: "167",
        birthday: "112BBY",
        created: "2014-12-10T15:10:51.357000Z",
        edited: "2014-12-20T21:17:50.309000Z",
      },
      {
        key: "3",
        name: "R2-D2",
        height: "96",
        birthday: "33BBY",
        created: "2014-12-10T15:11:50.376000Z",
        edited: "2014-12-20T21:17:50.311000Z",
      },
      {
        key: "4",
        name: "Darth Vader",
        height: "202",
        birthday: "41.9BBY",
        created: "2014-12-10T15:18:20.704000Z",
        edited: "2014-12-20T21:17:50.313000Z",
      },
      {
        key: "5",
        name: "Leia Organa",
        height: "150",
        birthday: "19BBY",
        created: "2014-12-10T15:20:09.791000Z",
        edited: "2014-12-20T21:17:50.315000Z",
      }
    ];

    return(
      <div className="Div-Table">
      <div className="Search">
        <p className="Text">Pessoas</p>
        <Space direction="vertical">
          <Search
            allowClear
            style={{ width: 200 }}
            className="Box-Search"
          />
        </Space>
      </div>
      <Divider />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="Table"
      ></Table>
    </div>
    )
  }
}

export default Pessoas;
