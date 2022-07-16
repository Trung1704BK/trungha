import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSearch: false,
      searchData: '',
      searchResults: [],
    };
  }

  showSearch = () => {
    this.setState({ isShowSearch: !this.state.isShowSearch });
  };

  handleSearchChange = (e) => {
    this.setState({
      searchData: e.target.value,
    });
  };

  handleSubmitSearch(e, props) {
    e.preventDefault();
    props.history.push(`/search?query=${encodeURI(this.state.searchData)}`);
  }

  render() {
    const { isShowSearch, searchData } = this.state;

    return (
      <div className='header'>
        <div className='header-top'>
          <div className='top-header'>
            <Link to='/'>
              <img src='/picture/logo.png' alt='' />
            </Link>
          </div>
        </div>
        <div className='main-header'>
          <nav class='navbar navbar-expand-lg navbar-light'>
            <div class='form-search'>
              <div className='toggle-icon' onClick={this.showSearch}>
                {isShowSearch ? (
                  <i class='fa-solid fa-xmark' />
                ) : (
                  <i class='fa-solid fa-magnifying-glass' />
                )}
              </div>

              <form className='search-box'>
                {isShowSearch && (
                  <input
                    type='text'
                    className='text search-input'
                    value={searchData}
                    onChange={this.handleSearchChange}
                    placeholder='Search'
                  />
                )}
                {isShowSearch && (
                  <input
                    type='button'
                    value='Search'
                    className='btn-submit'
                    onClick={(e) =>
                      this.handleSubmitSearch(e, this.props.children.props)
                    }
                  />
                )}
              </form>
            </div>

            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div
              class='mobile-menu collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul class='navbar-nav mr-auto'>
                <li class='nav-item '>
                  <Link class='navbar-brand' to='/about'>
                    About
                  </Link>
                </li>
                <li class='nav-item '>
                  <Link class='navbar-brand' to='/product'>
                    Product
                  </Link>
                </li>
                <li class='nav-item '>
                  <Link class='navbar-brand' to='/logout'>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <section class='banner'>
          <img src='/picture/banner.png' alt='banner' />
        </section>
      </div>
    );
  }
}

export default Header;
