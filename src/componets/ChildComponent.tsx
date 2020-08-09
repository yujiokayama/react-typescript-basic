import * as React from "react";

type Props = {
  foo: string;
};
const ChildComponent: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <p>{props.foo}</p>
    </React.Fragment>
  );
};

export default ChildComponent;
