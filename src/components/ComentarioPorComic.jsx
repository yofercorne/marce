import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker } from 'antd';
import { Avatar, Button,Card,List  } from 'antd';
import { Col, Divider, Row,message } from 'antd';
import { Link } from "react-router-dom";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

function ComentariosComponent({url}) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url_local = `http://localhost:8080/comentario/${url}`;
    const url_deploy = "https://dbpproyecto-production.up.railway.app/autor";
dbpproyecto-production
    axios.get(url_local, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setData(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  }, []);

  const darLike = (id)=>{
    const token = localStorage.getItem("token");
    const url_local_l = `http://localhost:8080/comentario/like_comentario/${id}`;
    const url_deploy_l= `https://dbpproyecto-production.up.railway.app/comentario/like_comentario/${id}`;
    axios.post(url_local_l, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        message.success("Like añadido")
        console.log(response);
      })
      .catch(error => {
        message.error("Algo malo sucedio, intente nuevamente")

        console.error('Error al realizar la solicitud:', error);
      });
  }

  const darDisLike = (id)=>{
    const token = localStorage.getItem("token");
    const url_local_l = `http://localhost:8080/comentario/dislike_comentario/${id}`;
    const url_deploy_l= `https://dbpproyecto-production.up.railway.app/comentario/dislike_comentario/${id}`;
    axios.post(url_local_l, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        message.success("Disike añadido")

        console.log(response);
      })
      .catch(error => {
        message.error("Algo malo sucedio, intente nuevamente")

        console.error('Error al realizar la solicitud:', error);
      });
  }

  return (
    <Row justify="center">
      <List
        style={{ marginTop: 0 }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              style={{ display: 'flex', alignItems: 'center', width: '100vw'}}
              avatar={<Avatar size={64} src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={
                <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                  <p style={{width:'85vw'}}>{item.contenido}</p>
                  <div style={{ display: 'block', justifyContent: 'flex-end',marginRight: 40, marginTop:-120}}>
                    <button onClick={() => darLike(item.id)} style={{ backgroundColor: 'transparent', borderRadius: '50%' }}>
                      <img style={{ borderRadius: '50%', width: 35 }} src={"/me-gusta.png"} alt="" />
                    </button>
                    <p style={{ marginRight: 15 }}>{item.likes}</p>
                  </div>
                  <div style={{ display: 'block', justifyContent: 'flex-end',marginRight: 40 }}>
                    <button onClick={() => darDisLike(item.id)} style={{ backgroundColor: 'transparent', borderRadius: '50%' }}>
                      <img style={{ borderRadius: '50%', width: 35 }} src={"/disgusto.png"} alt="" />
                    </button>
                    <p style={{ marginRight: 15 }}>{item.dislikes}</p>
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Row>
  );
}

export default ComentariosComponent;
