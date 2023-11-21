import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker } from 'antd';
import { Avatar, Button,Card } from 'antd';
import { Col, Divider, Row } from 'antd';
import { Link } from "react-router-dom";

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;


const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const Img = ''

function Autores() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    const url_local ="http://localhost:8080/autor" ;
    const url_deploy="https://deployjuan-production.up.railway.app/autor" ;

    axios.get(url_local,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
      .then(response => {
        setData(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  }, []);

  
  return (
    <div className="Autores" style={{marginTop:'120px'}}>
      {data ? (
        <div>
            <Row justify="center">
                
          {data.map((autor, index) => (
            <div key={index}>
                <Col style={{ paddingRight: '20px'}}>
                <Link to={`comics/${autor.id}`} style={{ textDecoration: 'none' }}>
                  <Card
    style={{
      width: 300,
      marginBottom: '20px'
    }}
    cover={
      <img
        alt="example"
        src={`https://picsum.photos/${index+300}/300`}//nueva peticion
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      avatar={<Avatar src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`} size={64}  />}
      title={autor.nombre}
      description={
        <div>
          <p>Editorial: {autor.editorial}</p>
          <p>Fecha: {autor.fecha}</p>
        </div>
      }
    />
    
  </Card></Link></Col>
               
            </div>

            
          ))}
          </Row>
        </div>
      ) : (
          <p>Inicia Sesión para no perderte de nada.</p>

      )}
      {/* <DatePicker /> */}

    </div>
    
  );
}

export default Autores;
