import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        ref={ref}
        style={{ width: 40, borderRadius: 0, paddingX: 0.5 }}
        {...props.input}
      />
    </>
  );
});

export default Input;
