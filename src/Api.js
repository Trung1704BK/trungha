import React from "react";

import axios from "axios";

export default class Api extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    this.setState({ posts: res.data });
  }
  deleteRow(id, e) {
    e.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const posts = this.state.posts.filter((post) => post.id !== id);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1> Example of React Axios Delete Request </h1>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.deleteRow(post.id, e)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
