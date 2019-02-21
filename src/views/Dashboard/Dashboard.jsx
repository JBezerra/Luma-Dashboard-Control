import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";


import Pessoa from "./Pessoas"

import Stats from "components/Stats/Stats.jsx";


import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from "@react-firebase/database";
import * as firebase from 'firebase';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      pessoas: []
    };

    // FIREBASE CREDENTIALS (YOU NEED TO SET YOURS)
    this.config = {
     
    };
    //

    
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <FirebaseDatabaseProvider firebase={firebase} {...this.config} >

        <div className="content">
          <Row>
            <Col xs={12} sm={12} md={4} lg={3}>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs={5} md={4}>
                      <div className="icon-big text-center">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col xs={7} md={8}>
                      <div className="numbers">
                        <p className="card-category">Usuários Atendidos</p>
                        <CardTitle tag="p">{this.state.pessoas.length || 0}</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "fas fa-sync-alt",
                        t: "Atualizado Agora"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>



            <Col lg={9}>
              <Card>
                <CardHeader>
                  <CardTitle>Usuários Atendidos por Luma</CardTitle>

                </CardHeader>
                <CardBody>
                    {/* Render Each Person */}
                    {this.state.pessoas}

                  <FirebaseDatabaseNode path="chat_collec/" orderByValue={"child_added"}>
                    {data => {
                      if (data.value) {
                        let keys = Object.keys(data.value);

                        this.setState(prevState => ({
                          pessoas: []
                        }));

                        for (let i = 0; i < keys.length; i++) {
                          let pessoa = data.value[keys[i]]
                          let nome = pessoa.nome;
                          let cpf = pessoa.cpf;
                          let telefone = pessoa.telefone;
                          let idade = pessoa.idade;
                          let genero = pessoa.genero;
                          let placa = pessoa.placa;

                          this.setState(prevState => ({
                            pessoas: [...prevState.pessoas, <Pessoa nome={nome} cpf={cpf} telefone={telefone} idade={idade} genero={genero} placa={placa} ></Pessoa>]
                          }));


                        }
                        
                        console.log("foi!");
                      }

                      return null;
                    }

                    }

                  </FirebaseDatabaseNode>
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "fas fa-history",
                        t: " Atualizado Agora"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>


          </Row>




        </div>

      </FirebaseDatabaseProvider>
    );
  }
}

export default Dashboard;
