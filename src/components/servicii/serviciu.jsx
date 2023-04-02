export const Serviciu = (props) => {
  const { icon, title, desc } = props;

  return (
    <div className="produs">
      <div className="title">
        {icon}

        <h3>{title}</h3>
      </div>
      <p className="text">{desc} </p>
    </div>
  );
};
