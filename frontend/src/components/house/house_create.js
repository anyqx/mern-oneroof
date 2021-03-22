import React from 'react';

class HouseCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      newHouse: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
    this.setState({state: nextProps.state.name});
  }

  handleSubmit() {
    debugger
    this.props.createHouse(this.state.name);
  }

  update() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }

  render() {
    return (
        <>
          <div>Create Your House!</div>
          <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update()}
                    placeholder="Your house name"
                  />
                  <input type="submit" value="Create" />
                </div>
            </form>
            <br />
          </div>
        </>
    )
  }
}

export default HouseCreate;
