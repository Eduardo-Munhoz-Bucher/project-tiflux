// import React from 'react';
import { Table, Divider, Input, Space } from "antd";
import api from '../api';
import "../style.css";
import { Component } from "react";

const { Search } = Input;

class Veiculos extends Component {
  
  state= {
    Veiculos: {}
  }

  async componentDidMount() {
    const response = await api.get('starships/2/')
    console.log(response.data)

    this.setState({ Veiculos: response.data })
  }

  render() {

    const {Veiculos} = this.state;

    const columns = [
      {
        title: "Nome",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Modelo",
        dataIndex: "model",
        key: "model",
      },
      {
        title: "Passageiros",
        dataIndex: "passengers",
        key: "passengers",
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
        name: <p>{Veiculos.name}</p>,
        model: <p>{Veiculos.model}</p>,
        passengers: <p>{Veiculos.passengers}</p>,
        created: <p>{Veiculos.created}</p>,
        edited: <p>{Veiculos.edited}</p>
      },
      {
        key: "2",
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        passengers: "n/a",
        created: "2014-12-10T15:08:19.848000Z",
        edited: "2014-12-20T21:23:49.870000Z"
      },
      {
        key: "3",
        name: "Sentinel-class landing craft",
        model: "Sentinel-class landing craft",
        passengers: "75",
        created: "2014-12-10T15:48:00.586000Z",
        edited: "2014-12-20T21:23:49.873000Z"
      },
      {
        key: "4",
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        passengers: "843,342",
        created: "2014-12-10T16:36:50.509000Z",
        edited: "2014-12-20T21:26:24.783000Z"
      },
      {
        key: "5",
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        passengers: "6",
        created: "2014-12-10T16:59:45.094000Z",
        edited: "2014-12-20T21:23:49.880000Z"
      }
    ];

    return(
      <div className="Div-Table">
      <div className="Search">
        <p className="Text">Veiculos</p>
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

export default Veiculos;
