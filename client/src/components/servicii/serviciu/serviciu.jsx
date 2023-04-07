import "./serviciu.css";

export const Serviciu = (props) => {
  const { icon, title, desc, button } = props;

  return (
    <div className="produs">
      <div className="header">
        {icon}

        <span className="title">{title}</span>
      </div>
      <p className="text">{desc} </p>
      <span className="button">{button}</span>
    </div>
  );
};
