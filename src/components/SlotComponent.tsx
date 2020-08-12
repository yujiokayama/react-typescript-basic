import * as React from "react";

function SlotComponent(props: any) {
  return (
    <React.Fragment>
      {props.children}です
    </React.Fragment>
  );
}

export default SlotComponent;
