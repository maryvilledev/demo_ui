import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import chunk from '../util/Chunker'

export default class CodeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      files: [],
      codes: [],
      cache: [],
      tabs:  [],
      tab: 0,
    }

    this.loadFiles = this.loadFiles.bind(this)
    this.loadCode = this.loadCode.bind(this)
    this.loadConcept = this.loadConcept.bind(this)
  }

  componentDidMount() {
    this.loadFiles().then(() => this.loadCode())
  }

  loadFiles() {
    return axios.get(`${process.env.PUBLIC_URL}/codes`)
      .then(res => {
        this.setState({files: res.data.slice()})
      })
      .catch(err => console.error(err))
  }

  loadCode() {
    for (let file of this.state.files) {
      axios.get(`${process.env.PUBLIC_URL}/codes/${file}`)
        .then(res => {
          const codes = this.state.codes.slice();
          const tabs = this.state.tabs.slice();
          const resObj = res.data;
          codes.push(chunk(resObj.code, resObj.ast, this.loadConcept));
          tabs.push(file.substr(0, file.indexOf('.')))
          this.setState({codes: codes, tabs: tabs});
        })
        .catch(err => {
          console.error(err)
        });
    }
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
            tabs={this.state.tabs}
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
