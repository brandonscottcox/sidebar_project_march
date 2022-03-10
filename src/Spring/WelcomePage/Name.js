import React from "react";
import "../../App.css";
import { Spring } from "react-spring";

export default function Name() {
  return (
    <>
      <spring
       from={{ opacity: 0}}
       to={{ opacity: 1}}
      >
        { props => (
            <div style={props}>
                <p className="WelcomeName">Brandon Cox</p>
            </div>
        )}
      </spring>
    </>
  );
}