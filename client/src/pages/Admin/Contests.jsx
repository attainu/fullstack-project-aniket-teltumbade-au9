import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../components/Layout/Loader'
import TabModel from '../../components/Layout/TabModel'
import { creatorContests, loadContest } from '../../redux/actions/contestActions'

class Contests extends Component {
  state = {
    tabid: 0,
    name: ''
  }
  componentDidMount = () => {
    this.props.creatorContests()
  }
  handleSelect = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleTab = (tabid) => {
    this.setState({
      tabid
    })
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.name !== prevState.name) {
      this.props.loadContest({ name: this.state.name })
    }
  }
  render() {
    return this.props.contests ? (
      <>
        <div className="container">
          <div className="row py-2 d-flex justify-content-center">
            Contest Name:
          <select name="name" id="" defaultValue={this.state.name} onChange={this.handleSelect}>
              <option value=''>Select Contest</option>
              {this.props.contests.map(el => <option>{el.name}</option>)}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <TabModel tabdata={["Challenges", "Submissions", "Leaderboard"]} handleTabmodel={this.handleTab}>
              {
                this.state.tabid === 0 ? (
                  <>
                  </>
                ) :
                  this.state.tabid === 1 ? (
                    <>
                    </>
                  ) :
                    this.state.tabid === 2 ? (
                      <>
                      </>
                    ) : null
              }
            </TabModel>
          </div>
        </div>
      </>
    ) : <Loader />
  }
}

const mapStateToProps = (storeState) => {
  return {
    contests: storeState.contestState.admin_contests,
    challengeList: storeState.contestState.contest_data
  }
}


export default connect(mapStateToProps, { creatorContests, loadContest })(Contests)
