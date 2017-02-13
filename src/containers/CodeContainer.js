import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import chunk from '../util/Chunker'

export default class CodeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      codes: [],
      cache: [],
      tab: 0
    }

    this.loadCode = this.loadCode.bind(this)
    this.loadConcept = this.loadConcept.bind(this)
    //this.chunk = this.chunk.bind(this)
  }

  componentDidMount() {
    this.loadCode()
  }

  loadCode() {
    axios.get(`${process.env.PUBLIC_URL}/codes/HelloWorld.smd`)
      .then(res => {
        const codes = this.state.codes.slice()
        codes.push(chunk(res.data, this.loadConcept));
        this.setState({codes: codes});
      })
      .catch(err => {
        console.error(err)
      });
  }

  loadConcept(lang, concept) {
    let cache = this.state.cache.slice();
    let description = cache[genCacheKey(lang, concept)]
    if (description){
      //It exists in cache, return it
      this.props.onMouseEnter(description)
    } else {
      //We haven't cached it, hit the API
      axios.get(`https://syntaxdb.com/api/v1/languages/${lang}/concepts/${concept}`)
        .then(res => {
          description = res.data;
          this.props.onMouseEnter(description)
          //Add it to the cache so we don't have to go back
          cache[genCacheKey(lang, concept)] = description
          //TODO ensure this is atomic
          this.setState({cache: cache})
        })
        .catch(err => {
          //Probably a bad hit
          console.error(err)
        })
    }
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

function genCacheKey(lang, concept) {
  return lang + "$" + concept
}
