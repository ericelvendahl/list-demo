import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { withRouter } from 'react-router';

class List extends Component {

    returnClicked = () => {
        console.log('return was clicked');
        this.props.history.push('/home');
    }

    render(){
        return (
            <div className='header'>
              <p className='title'>{this.props.title}</p>
              <p className='subtitle'>{this.props.subtitle}</p>
              <div className='navigation'>
                <button>{this.props.return}</button>
              </div>
              
            </div>
          ); // end return
    } // end render
} // end component

// const putReduxStateOnProps=(reduxState)=>({
//     reduxState
// })

//export default withRouter(connect(putReduxStateOnProps)(List));
export default List;