import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default class CodeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      codes: [],
      tab: 0
    }

    this.loadCode = this.loadCode.bind(this)
  }

  componentDidMount() {
    this.loadCode()
  }

  loadCode() {
    axios.get(`${process.env.PUBLIC_URL}/codes/HelloWorld.java`)
      .then(res => {
        const codes = this.state.codes.slice()
        codes.push(res.data);
        this.setState({codes: codes});
        console.log(this.state.codes)
      })
      .catch(err => {
        console.error(err)
      });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar
            activeTab={this.state.tab}
            onSwitchTab={tab => this.setState({tab: tab})} />
        </div>
        <pre>
          {this.state.codes[this.state.tab]}
        </pre>
      </div>
    )
  }
}
