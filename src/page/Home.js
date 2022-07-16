import axios from 'axios';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      searchData: '',
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token') || '';
    console.log('check', token);
    if (!token) {
      this.props.history.push('/login');
    }
  }
  //
  async componentDidMount() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    this.setState({
      photos: res.data,
      search: '',
    });
  }

  handleSearch = (e) => [
    e.preventDefault(),
    this.setState({
      searchData: e.target.value,
    }),
  ];

  render() {
    const { photos, searchData } = this.state;
    return (
      <div>
        {/* <div className='top-search'>
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => this.handleSearch(e)}
          />
        </div>
        <div>
          {photos
            .filter((photo) => {
              if (searchData === '') {
                return photo;
              }
              if (
                photo.title.toLowerCase().includes(searchData.toLowerCase()) ||
                `${photo.id}`
                  .toLowerCase()
                  .includes(searchData.toLowerCase()) ||
                photo.url.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return photo;
              }
            })

            .map((photo) => (
              <div key={photo.id}>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td>{photo.url}</td>

                <td></td>
              </div>
            ))}
        </div> */}
      </div>
    );
  }
}

export default Home;
