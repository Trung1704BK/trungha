import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token') || '';
    console.log('check', token);
    if (!token) {
      this.props.history.push('/login');
    }
  }
  async componentDidMount() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    this.setState({
      listData: res.data,
    });
  }

  render() {
    const { listData } = this.state;
    return (
      <div className='container'>
        {listData.map((value) => {
          return (
            <div className='content' key={value.id}>
              {value.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
