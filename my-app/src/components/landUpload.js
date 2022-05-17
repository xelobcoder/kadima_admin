import React, { Component } from 'react'
import { Alert, Button, Form, Input, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import { useReducer, useEffect } from 'react'

const colorLeft = {
  fontWeight: 400,
  borderLeft: '3px solid blue',
  fontSize: '1.2em',
}
const inputModifications = {
  border: '2px solid red !important',
}

const split = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  height: '40px !important',
}

const filter = {
  border: '2px solid lightseagreen !important',
  height: '40px !important',
  width: '95%',
}

const leftbar = {
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const inputEvents = {
  red: 'thick solid red',
  green: '2px solid green !important',
  outline: 'thick solid green !important',
  blur: function (e) {
    e.target.style.border = this.green
    e.target.style.outline = this.green
  },
  focus: function (e) {
    e.target.style.border = this.green
    e.target.style.outline = this.outline
  },
  change: function (e, callback) {
    let value = e.target.value
    if (value === '' || value === null) {
      this.blur(e)
    } else {
      this.focus(e)
    }

    if (callback && typeof callback === 'function') {
      callback(value)
    }
  },
}

class LandUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gps_location: '',
      land_width: '',
      land_length: '',
      location: '',
      district: '',
      region: '',
      price: '',
      marketStatus: '',
      topography: '',
      available: "",
      loading: false,
      isComplete: false,
      show: true,
    }
  }

  log = function (data, logmsg) {
    this.setState({
      loading: true,
    })
    if (logmsg === 'success') {
      window.scrollTo(0,0)
      let formelement = document.getElementById("formelement");
      formelement.reset();
      setTimeout(() => {
        this.setState({ loading: false });
        window.location.href = "/request/Translands";
      }, 2000)
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    let fetchdata = async () => {
      let url = await 'http://localhost:8000/api/v1/properties/land'
      axios
        .post(url, this.state)
        .then((t) => {
          this.log(t, 'success')
        })
        .catch((err) => {
          throw err
        })
    }
    fetchdata()
  }

render() {
return (
<div>
<div className="container">
{this.state.loading === false ? null : (
<Alert className="alert alert-success mt-2" dismissible>
    <Alert.Heading>Successfully uploaded</Alert.Heading>
</Alert>
)}
</div>
<div className="container" id="form-cot">
<div className="row">
<div className="col-8 mt-2">
    <div className="alert alert-primary" style={colorLeft}>
    fill in to upload land
    </div>
    <div className="form-wrapper">
    <form id="formelement"
        encType="multipart/form-data"
        onSubmit={(e) => this.onSubmit(e)}
    >
        <div className="form-group">
        <label htmlFor="gps">GPS location</label>
        <input
            onChange={(e) =>
            inputEvents.change(e, (value) => {
                this.setState({ gps_location: value })
            })
            }
            required
            value={this.state.gps_location}
            className="form-control"
            onFocus={(e) => inputEvents.focus(e)}
            onBlur={(e) => inputEvents.blur(e)}
            placeholder="GA-543-0153"
            id="gpsLocation"
            type="string"
        />
        </div>
        <div className="form-group" id="dimensions">
        <div>
            <label htmlFor="length">length</label>
            <input
            required
            onChange={(e) =>
                inputEvents.change(e, (value) => {
                this.setState({ land_length: value })
                })
            }
            onFocus={(e) => inputEvents.focus(e)}
            type="number"
            style={inputModifications}
            className="form-control"
            id="length"
            placeholder="10 m"
            />
        </div>
        <div className="times">X</div>
        <div>
            <label htmlFor="width">width</label>
            <input
            onChange={(e) =>
                inputEvents.change(e, (value) => {
                this.setState({ land_width: value })
                })
            }
            required
            type="number"
            className="form-control"
            id="width"
            placeholder="Enter width"
            />
        </div>
        </div>
        <div className="form-group">
        <label htmlFor="location">location</label>
        <input
            required
            type="string"
            className="form-control"
            id="location"
            onChange={(e) =>
            inputEvents.change(e, (value) => {
                this.setState({ location: value })
            })
            }
            placeholder="Kanvile"
        />
        </div>
        <div className="form-group">
        <label htmlFor="district">district</label>
        <input
            required
            type="string"
            onChange={(e) =>
            inputEvents.change(e, (value) => {
                this.setState({ district: value })
            })
            }
            className="form-control"
            id="district"
            placeholder="Accra Metro"
        />
        </div>
        <div>
        <label htmlFor="region">region</label>
        <input
            required
            type="string"
            className="form-control"
            onChange={(e) =>
            inputEvents.change(e, (value) => {
                this.setState({ region: value })
            })
            }
            id="region"
            placeholder="Northern region"
        />
        </div>
        <div>
        <label>Land topography</label>
        <textarea
            required
            className="form-control"
            onChange={(e) =>
            inputEvents.change(e, (value) => {
                this.setState({ topography: value })
            })
            }
            id="topography"
            placeholder="Describe topography of land"
        ></textarea>
        </div>
        <div className="form-group">
        <label htmlFor="price">price</label>
        <input
            required
            type="number"
            className="form-control"
            onChange={(e) =>
            inputEvents.change(e, (value) => {
                this.setState({ price: value })
            })
            }
            id="price"
            placeholder="Enter price"
        />
        </div>
        <div className="form-group">
        <label htmlFor="marketStatus">market status</label>
        <input
            required
            onFocus={(e) => inputEvents.focus(e)}
            onChange={(e) =>
            inputEvents.change(e, (value) => {
                this.setState({ marketStatus: value })
            })
            }
            onBlur={(e) => inputEvents.blur(e)}
            type="string"
            className="form-control"
            id="marketStatus"
            placeholder="Available"
        />
        </div>

        <div className="form-group">
        <button
            type="submit"
            className="btn btn-block btn-warning mt-3 "
        >
            save
        </button>
        </div>
    </form>
    </div>
</div>
<div className="col-4 mt-2" style={leftbar}>
    <Alert variant="primary">
    <Alert.Heading>Note!!</Alert.Heading>
    <p>
        All saved transaction are recorded with the timestamps. you
        can filter the saved lands by region,district,cost and market
        status. click on the link to show all by regions.
    </p>
    <p>
        <Button variant="outline-primary">show all</Button>
    </p>
    </Alert>
    <ListGroup className="mb-3">
      <ListGroup.Item>Northern Region</ListGroup.Item>
      <ListGroup.Item>Greater Accra Region</ListGroup.Item>
      <ListGroup.Item>Ashanti Region</ListGroup.Item>
    </ListGroup>
    <Form>
    <Form.Group id="filter" style={split}>
        <Form.Control
        style={filter}
        id="Fregion"
        placeholder="region"
        />
        <Form.Control
        style={filter}
        id="Fdistrict"
        placeholder="district"
        />
    </Form.Group>
    <Form.Group
        controlId="cost-filter"
        className="mt-2"
        style={split}
    >
        <Form.Control style={filter} placeholder="min-cost" />
        <Form.Control style={filter} placeholder="max-cost" />
    </Form.Group>
    <Form.Group className="mt-3 d-flex justify-content-end">
        <Button>Filter</Button>
    </Form.Group>
    </Form>
</div>
</div>
</div>
</div>
)
}
}

export default LandUpload
