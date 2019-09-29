import React from "react";
import { connect } from "react-redux";

import {GoogleMap} from './maps';

@connect((store) => {
  return {
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
  }
  
  componentDidMount() {
  }

  // beforeUnload(e) {
  //   if(!e) e = window.event;
  //   if (this.props.updateFlag) {
  //     e.returnValue = 'Your unsaved changes will be lost';
  //   } else {
  //     return undefined;
  //   }
  //   e.cancelBubble = true;
  //   if (e.stopPropagation) {
  //       e.stopPropagation();
  //       e.preventDefault();
  //   }
  // }



  render() {
    return(
    <div>
      <GoogleMap ></GoogleMap>
    </div>)
  }
}
