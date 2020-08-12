import * as React from 'react';

type Props = {
  name: string;
  age: number;
};
const EditModal: React.FC<Props> = (props) => {
  /**
   * refs
   */
  const refContent1 = React.createRef<HTMLParagraphElement>();

  /**
   * mounted
   */
  React.useEffect(() => {
    console.log(refContent1.current);
  }, []);

  return (
    <React.Fragment>
      <p ref={refContent1}>{props.name}</p>
      <p>{props.age}</p>
    </React.Fragment>
  );
};

export default EditModal;
