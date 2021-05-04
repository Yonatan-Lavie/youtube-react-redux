import React from 'react';
import { connect } from 'react-redux';

const User = () => {
    return (
        <>
            User Page!
        </>
    );
}


const  mapStateToProps = (state) => {
    return {

    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {

    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(User);