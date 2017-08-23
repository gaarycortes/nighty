import React, { Component } from 'react';
import { Card, Button} from 'antd';
import 'antd/dist/antd.css';
import './App.css';



class Cards extends Component {
    getInitialState = function(){
        return  {estado:true};
    }
    cambiarEstado = function(){
        this.setState({estado:!this.state.estado});
    }
    render(){
        var estado_actual = this.state.estado? "ON" : "OFF";
        return(
            <div>
                <Card title="Cliente" extra={<a href="#">More</a>} style={{ width: 300}}>
                    <p>Titulo:</p>                    
                    <p>Cluster:</p>
                    <p>Componente:</p>
                    <Button type="primary" onClick={this.cambiarEstado}>Estado</Button>
                    <h3>Estado {estado_actual}</h3>
                </Card>
            </div>
        );
    }    
}

export default Cards;
