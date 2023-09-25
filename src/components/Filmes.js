// import React from 'react';
import { Table, Divider, Input, Space } from "antd";
import api from '../api';
import "../style.css";
import { Component } from "react";

const { Search } = Input;

class Filmes extends Component {
  
  state= {
    Filmes: {}
  }

  async componentDidMount() {
    const response = await api.get('films/2/')
    console.log(response.data)

    this.setState({ Filmes: response.data })
  }

  render() {

    const {Filmes} = this.state;

    const columns = [
      {
        title: "Título",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Diretor",
        dataIndex: "director",
        key: "director",
      },
      {
        title: "Qtd. Personagens",
        dataIndex: "amount",
        key: "amount",
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
        title: <p>{Filmes.title}</p>,
        director: <p>{Filmes.director}</p>,
        amount: "18",
        created: <p>{Filmes.created}</p>,
        edited: <p>{Filmes.edited}</p>
      },
      {
        key: "2",
        title: "Revenge of the Sith",
        director: "George Lucas",
        amount: "34",
        created: "2014-12-20T18:49:38.403000Z",
        edited: "2014-12-20T20:47:52.073000Z"
      },
      {
        key: "3",
        title: "Return of the Jedi",
        director: "Richard Marquand",
        amount: "20",
        created: "2014-12-18T10:39:33.255000Z",
        edited: "2014-12-20T09:48:37.462000Z"
      },
      {
        key: "4",
        title: "The Phantom Menace",
        director: "George Lucas",
        amount: "34",
        created: "2014-12-19T16:52:55.740000Z",
        edited: "2014-12-20T10:54:07.216000Z"
      },
      {
        key: "5",
        title: "Attack of the Clones",
        director: "George Lucas",
        amount: "40",
        created: "2014-12-20T10:57:57.886000Z",
        edited: "2014-12-20T20:18:48.516000Z"
      }
    ];

    return(
      <div className="Div-Table">
      <div className="Search">
        <p className="Text">Filmes</p>
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

export default Filmes;
