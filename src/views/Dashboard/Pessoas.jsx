import React from "react";
import { Collapse, Card, CardBody, Button, DropdownItem } from 'reactstrap';


class Pessoa extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        if(this.state.collapse){
            this.setState({ collapse: false });
        }
        if(!this.state.collapse){
            this.setState({ collapse: true });
        }
    }

    render() {
        return (
            <div>
                <Card style={{backgroundColor: "#ffd300", color:"#FFFFFF"}}>
                    {/* <CardHeader onClick={this.toggle} >{this.props.nome}</CardHeader> */}
                    <Button style={{backgroundColor: "#ffd300"}} id="caret" color="warning" onClick={this.toggle} > {this.props.nome} </Button>
                    <Collapse isOpen={this.state.collapse}>
                        <CardBody style={{color:"#000"}} >
                        <DropdownItem header style={{color:"#FFF"}} >Nome</DropdownItem>
                        <DropdownItem disabled style={{color:"#FFF"}}> {this.props.nome}</DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem header  style={{color:"#FFF"}} >CPF</DropdownItem>
                        <DropdownItem disabled  style={{color:"#FFF"}} > {this.props.cpf}</DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem header  style={{color:"#FFF"}} >Numero</DropdownItem>
                        <DropdownItem disabled  style={{color:"#FFF"}} >  {this.props.telefone}</DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem header  style={{color:"#FFF"}} >Idade</DropdownItem>
                        <DropdownItem disabled  style={{color:"#FFF"}} > {this.props.idade} anos</DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem header  style={{color:"#FFF"}} >Genero</DropdownItem>
                        <DropdownItem disabled  style={{color:"#FFF"}} > {this.props.genero}</DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem header  style={{color:"#FFF"}} >Placa do Carro</DropdownItem>
                        <DropdownItem disabled  style={{color:"#FFF"}} > {this.props.placa} </DropdownItem>
                        </CardBody>
                    </Collapse>
                </Card>


            </div>
        );
    }
}

export default Pessoa;