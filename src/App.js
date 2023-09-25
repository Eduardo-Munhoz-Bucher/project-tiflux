import { Col, Row } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import Pessoas from "./components/Pessoas";
import Veiculos from "./components/Veiculos";
import Filmes from "./components/Filmes";
import "./style.css";
// import React from 'react';

const style = {
  background: "rgba(255, 255, 255, 1)",
  color: "rgba(0, 0, 0, 0.45)",
  width: "278px",
  height: "116px",
};

const App = () => (
  <div className="Geral-Page">
    <div className="Side-Bar">
      <div className="Soon-TiFlux">
        <svg
          width="100"
          height="29"
          viewBox="0 0 100 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.77191 3.6311H3.79436V6.4463C3.79436 8.1599 2.85597 9.139 1.18319 9.139H0V14.035H3.34557V22.3989C3.34557 26.0709 5.67114 28.3556 9.4247 28.3556C10.9751 28.3556 11.9135 28.0701 12.3215 27.9069L12.4847 27.8661V23.1741L12.1583 23.2965C11.9543 23.3781 11.4239 23.4189 10.7303 23.4189C9.3023 23.4189 8.77191 22.9293 8.77191 21.5013V14.035H12.4847V9.139H8.77191V3.6311Z"
            fill="white"
          />
          <path
            d="M21.5816 9.13892H16.1145V28.0699H21.5816V9.13892Z"
            fill="white"
          />
          <path
            d="M18.8079 0C16.972 0 15.5032 1.4688 15.5032 3.3456C15.5032 5.0999 17.0128 6.6095 18.8079 6.6095C20.6439 6.6095 22.1127 5.1815 22.1127 3.3456C22.1127 1.428 20.7255 0 18.8079 0Z"
            fill="white"
          />
          <path
            d="M35.2518 0.163086C31.0494 0.163086 28.3158 2.93748 28.3158 7.26218V9.13898H25.2559V13.8717H28.3158V28.07H33.8238V13.8717H37.9445V9.13898H33.783V7.34378C33.783 5.34458 35.2518 5.01818 36.1493 5.01818C36.8837 5.01818 37.3733 5.05899 37.6181 5.18139L37.9445 5.30378V0.652683L37.8221 0.571083C37.3733 0.367083 36.3533 0.163086 35.2518 0.163086Z"
            fill="white"
          />
          <path
            d="M47.0421 0.448975H41.575V28.0703H47.0421V0.448975Z"
            fill="white"
          />
          <path
            d="M68.0141 24.4796V9.13892H62.547V20.114C62.547 22.1948 61.2822 23.5004 59.283 23.5004C56.5495 23.5004 56.1415 21.338 56.1415 20.0324V9.13892H50.6743V21.0524C50.6743 25.4587 53.6527 28.5595 57.9366 28.5595C60.0174 28.5595 61.7718 27.8251 62.8326 26.5603C62.8326 27.0499 62.8734 27.5803 62.9958 27.8659L63.0366 28.0291H68.2589L68.2181 27.7435C68.0549 27.1723 68.0141 25.9075 68.0141 24.4796Z"
            fill="white"
          />
          <path
            d="M84.904 20.4404L79.3552 28.07H86.2096L88.3311 25.1732L84.904 20.4404Z"
            fill="white"
          />
          <path
            d="M94.4924 16.6868L99.9595 9.13892H93.1052L91.0652 11.9541L94.4924 16.6868Z"
            fill="white"
          />
          <path
            d="M93.1051 18.5636L89.678 13.8309L86.2508 9.13892H79.3965L86.2508 18.5636L93.1459 28.0699H100L93.1051 18.5636Z"
            fill="white"
          />
          <path
            d="M80.0913 13.8309L76.6642 9.13892H74.9914C74.9914 9.62852 74.5834 10.0365 74.0938 10.0365C73.6042 10.0365 73.1962 9.62852 73.1962 9.13892H69.8098L76.6642 18.5636L69.769 28.0699H73.1962C73.1962 27.5803 73.6042 27.1723 74.0938 27.1723C74.5834 27.1723 74.9914 27.5803 74.9914 28.0699H76.5826L80.0505 23.2964L83.4777 18.5636L80.0913 13.8309Z"
            fill="#FE5000"
          />
        </svg>
      </div>
      <div className="Dashboard">
        <DashboardOutlined className="Icon-Speed"></DashboardOutlined>
        <p className="Text-Dashboard">Dashboard</p>
      </div>
      <div className="Div-Footer">
        <footer>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.01"
              width="16"
              height="16"
              fill="white"
              fill-opacity="0.65"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.875 2.5H14.125C14.1938 2.5 14.25 2.55625 14.25 2.625V3.5C14.25 3.56875 14.1938 3.625 14.125 3.625H1.875C1.80625 3.625 1.75 3.56875 1.75 3.5V2.625C1.75 2.55625 1.80625 2.5 1.875 2.5ZM6.375 6.90625H13.875C13.9438 6.90625 14 6.85 14 6.78125V5.90625C14 5.8375 13.9438 5.78125 13.875 5.78125H6.375C6.30625 5.78125 6.25 5.8375 6.25 5.90625V6.78125C6.25 6.85 6.30625 6.90625 6.375 6.90625ZM6.25 10.0938C6.25 10.1625 6.30625 10.2188 6.375 10.2188H13.875C13.9438 10.2188 14 10.1625 14 10.0938V9.21875C14 9.15 13.9438 9.09375 13.875 9.09375H6.375C6.30625 9.09375 6.25 9.15 6.25 9.21875V10.0938ZM14.125 12.375H1.875C1.80625 12.375 1.75 12.4312 1.75 12.5V13.375C1.75 13.4438 1.80625 13.5 1.875 13.5H14.125C14.1938 13.5 14.25 13.4438 14.25 13.375V12.5C14.25 12.4312 14.1938 12.375 14.125 12.375ZM4.24531 10.0312L1.80313 8.10781C1.73281 8.05313 1.73281 7.94688 1.80313 7.89219L4.24531 5.96875C4.3375 5.89688 4.47031 5.96094 4.47031 6.07656V9.92344C4.47031 10.0391 4.33594 10.1031 4.24531 10.0312Z"
              fill="white"
              fill-opacity="0.65"
            />
          </svg>
        </footer>
      </div>
    </div>
    <div className="Main">
      <header>
        <UserOutlined />
        <p className="User">User</p>
      </header>
      <Row gutter={24}>
        <Col className="gutter-row-1">
          <div style={style}>
            <div className="Title">Pessoas</div>
            <div className="Numbers">82</div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div style={style}>
            <div className="Title">Planetas</div>
            <div className="Numbers">60</div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div style={style}>
            <div className="Title">Filmes</div>
            <div className="Numbers">6</div>
          </div>
        </Col>
        <Col className="gutter-row">
          <div style={style}>
            <div className="Title">Espaço Naves</div>
            <div className="Numbers">36</div>
          </div>
        </Col>
      </Row>
      <Pessoas></Pessoas>
      <Veiculos></Veiculos>
      <Filmes></Filmes>
    </div>
  </div>
);

export default App;
