const Item = ({ type, name, timer, handleClick, group, handleClickCancleList }) => {
  return (
    <div
      className="item"
      onClick={() =>
        !group
          ? handleClick({ type, name })
          : handleClickCancleList({ type, name, timer })
      }
    >
      {name}
    </div>
  );
};

export default Item;
