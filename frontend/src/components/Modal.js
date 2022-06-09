import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Energy Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-title">Title:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="text"
                id="todo-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Title"
                />
                </td>
              </tr>
              
              
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-title">Address:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="text"
                id="todo-title"
                name="address"
                value={this.state.activeItem.address}
                onChange={this.handleChange}
                placeholder="Address"
                />
                </td>
              </tr>
              
              
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-description">Bargh:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="text"
                id="todo-description"
                name="bargh"
                value={this.state.activeItem.bargh}
                onChange={this.handleChange}
                placeholder="Bargh"
                />
                </td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-gaz">Gaz:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="number"
                id="todo-gaz"
                name="gaz"
                value={this.state.activeItem.gaz}
                onChange={this.handleChange}
                placeholder="Gaz"
                />
                </td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-gazoil">Gazoil:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="number"
                id="todo-gazoil"
                name="gazoil"
                value={this.state.activeItem.gazoil}
                onChange={this.handleChange}
                placeholder="Gazoil"
                />
                </td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-mazot">Mazot:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="number"
                id="todo-mazot"
                name="mazot"
                value={this.state.activeItem.mazot}
                onChange={this.handleChange}
                placeholder="Mazot"
                />
                </td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-eghlim">Eghlim:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="number"
                id="todo-eghlim"
                name="eghlim"
                value={this.state.activeItem.eghlim}
                onChange={this.handleChange}
                placeholder="Eghlim"
                />
                </td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-karbari">Karbari:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="number"
                id="todo-karbari"
                name="karbari"
                value={this.state.activeItem.karbari}
                onChange={this.handleChange}
                placeholder="Karbari"
                />
                </td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label for="todo-zirbana">Zirbana:</Label></td>
                <td style={{width:'390px'}}>
                <Input
                style={{width:'100%'}}
                type="number"
                id="todo-zirbana"
                name="zirbana"
                value={this.state.activeItem.zirbana}
                onChange={this.handleChange}
                placeholder="Zirbana"
                />
                </td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label>E_actual:</Label></td>
                <td style={{width:'390px'}}> {this.state.activeItem.e_actual}</td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label>E_ideal:</Label></td>
                <td style={{width:'390px'}}> {this.state.activeItem.e_ideal}</td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label>R:</Label></td>
                <td style={{width:'390px'}}> {this.state.activeItem.r}</td>
              </tr>
            </FormGroup>
            <FormGroup className="form-inline">
              <tr style={{width:'100%'}}>
                <td style={{width:'80px'}}><Label>Grade:</Label></td>
                <td style={{width:'390px'}}> {this.state.activeItem.grade}</td>
              </tr>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}