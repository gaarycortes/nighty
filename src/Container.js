import React from 'react'
import { Grid, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Cards from'./Cards.js';
import { Card } from 'antd';

const Container = () => (
  <Grid container columns={3}>
    <Grid.Column className="ui segment">
      <h3>Entradas</h3>
      <Cards/>
      <Cards/>
    </Grid.Column>
    <Grid.Column className="ui segment">
      <h3>En Ejecucion</h3>
      <Cards/>
    </Grid.Column>
    <Grid.Column className="ui segment">
      <h3>Pendiente</h3>
      <Cards/>
      <Cards/>
    </Grid.Column>
  </Grid>
)

export default Container;