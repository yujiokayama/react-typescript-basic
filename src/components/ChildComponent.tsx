import * as React from "react";

type Props = {
  name: string;
  age: number;
};
const ChildComponent: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </React.Fragment>
  );
};

export default ChildComponent;
