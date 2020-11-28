import React, { Fragment, Component } from 'react'
import '../css/search.css'
class Search extends Component {
  state = {
    searchColor: '',
  }
  getValue = async (e) => {
    e.persist()
    await this.setState({ searchColor: e.target.value })
    await this.props.filterMethod(this.state.searchColor)
  }

  render() {
    return (
      <Fragment>
        <div
          className='search__div d-flex  justify-content-around  align-items-center'
          style={{ marginTop: '88px' }}
        >
          <span className='font-weight-bold text-muted'>
            Filter <i className='fas fa-angle-right'></i>
          </span>
          <button
            className='search_filter_input'
            style={{
              background: 'linear-gradient(red,green,blue)',
              color: 'black',
            }}
            value='red'
            onClick={this.props.allColors}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{ background: 'red', color: 'red' }}
            value='red'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{
              background: 'rgb(255 24 248)',
              color: 'rgb(255 24 248)',
            }}
            value='pink'
            onClick={this.getValue}
          />
          <button
            className='search_filter_input'
            style={{ background: 'aqua', color: 'aqua' }}
            value='aqua'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{ background: '#ff7600', color: '#ff7600' }}
            value='orange'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{ background: 'yellow', color: 'yellow' }}
            value='yellow'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{ background: 'purple', color: 'purple' }}
            value='purple'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{ background: 'green', color: 'green' }}
            value='green'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{ background: 'blue', color: 'blue' }}
            value='blue'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{ background: 'brown', color: 'brown' }}
            value='brown'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{
              background: 'black',
              color: 'black',
              border: '1px solid #fff',
            }}
            value='black'
            onClick={this.getValue}
            readOnly
          />
          <button
            className='search_filter_input'
            style={{
              background: 'gray',
              color: 'white',
              border: '1px solid rgb(118 118 118 / 65%)',
            }}
            value='white'
            onClick={this.getValue}
            readOnly
          />
        </div>
      </Fragment>
    )
  }
}
export default Search
