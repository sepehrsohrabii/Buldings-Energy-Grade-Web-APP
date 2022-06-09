import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewGrade: "A",
      lableList: [],
      modal: false,
      activeItem: {
        title: "",
        address: "",
        bargh: "",
        gaz: "",
        gazoil: "",
        mazot: "",
        eghlim: "",
        karbari: "",
        zirbana: "",
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/lables/")
      .then((res) => this.setState({ lableList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/lables/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/lables/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/lables/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", address: "", bargh: "", gaz: "", gazoil: "", mazot: "", eghlim: "", karbari: "", zirbana: ""
  };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  displayGrade = (status) => {
    if (status === "A") {
      return this.setState({ viewGrade: "A" });
    } 
    if (status === "B") {
      return this.setState({ viewGrade: "B" });
    }
    if (status === "C") {
      return this.setState({ viewGrade: "C" });
    }
    if (status === "D") {
      return this.setState({ viewGrade: "D" });
    }
    if (status === "E") {
      return this.setState({ viewGrade: "E" });
    }
    if (status === "F") {
      return this.setState({ viewGrade: "F" });
    }
    if (status === "G") {
      return this.setState({ viewGrade: "G" });
    }

    return this.setState({ viewGrade: "NO LABLE" });
  };

  // renderTabList = () => {
  //   return (
  //     <div className="nav nav-tabs">
  //       <span
  //         style={{backgroundColor: "#009019"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("A")}
  //       >
  //         A
  //       </span>
  //       <span
  //         style={{backgroundColor: "#6fb41b"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("B")}
  //       >
  //         B
  //       </span>
  //       <span
  //         style={{backgroundColor: "#bfd81c"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("C")}
  //       >
  //         C
  //       </span>
  //       <span
  //         style={{backgroundColor: "#fcf11d"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("D")}
  //       >
  //         D
  //       </span>
  //       <span
  //         style={{backgroundColor: "#f4bd18"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("E")}
  //       >
  //         E
  //       </span>
  //       <span
  //         style={{backgroundColor: "#ec7511"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("F")}
  //       >
  //         F
  //       </span>
  //       <span
  //         style={{backgroundColor: "#cd000b"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("G")}
  //       >
  //         G
  //       </span>
  //       <span
  //         style={{backgroundColor: "#ffffff"}}
  //         className={this.state.viewGrade ? "nav-link" : "nav-link"}
  //         onClick={() => this.displayGrade("NO LABLE")}
  //       >
  //         NO LABLE
  //       </span>
  //     </div>
  //   );
  // };

  renderItems = () => {
    const { viewGrade } = this.state;
    const newItems = this.state.lableList
    // .filter(
    //   (item) => item.grade === viewGrade
    // );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <table style={{width: '60%'}}>
        <tbody>
        <tr>
          <td style={{width: '50%'}}>
            <span
              className={`todo-title mr-2 ${
                this.state.viewGrade ? "completed-todo" : ""
              }`}
              title={item.title}
            >
              {item.title}
            </span>
          </td>
          
          <td>
            <span
              className={`todo-title mr-2 ${
                this.state.viewGrade ? "completed-todo" : ""
              }`}
              grade={item.grade}
            >
            Grade = {item.grade}
            </span>
          </td>
        </tr>
        </tbody>
        </table>
        
        
        
        
        <span>
          <button
            className="btn btn-outline-success mr-2"
            onClick={() => this.editItem(item)}
          >
            View\Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Energy Grade</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  New Energy Lable
                </button>
              </div>
              {/* {this.renderTabList()} */}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;