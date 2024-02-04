export default () => {
  const status = true;
  return (
    <h2
      style={{
        color: status ? "green" : "red",
      }}
    >
      Current status: {status ? "ON" : "OFF"}
    </h2>
  );
};
