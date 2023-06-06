import "./_popUp.scss";

import PopUpProps from "../../modules/PopUp";

function PopUp({ icon, subtitle, title }: PopUpProps) {
  return (
    <div className="popUp">
      <div className="icon">{icon} </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
}

export default PopUp;
