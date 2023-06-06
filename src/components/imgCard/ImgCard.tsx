import { FileCopy } from "@mui/icons-material";
import PopUp from "../popup/PopUp";
import "./_imgCard.scss";

interface ImgCardProps {
  icon?: React.ReactNode;
  icon1?: React.ReactNode;
  title?: string;
  subtitle?: string;
  title1?: string;
  subtitle1?: string;
  backgroundColor?: string;
  imgUri?: string;
}

function ImgCard({
  backgroundColor,
  imgUri,
  icon,
  subtitle,
  title,
  icon1,
  subtitle1,
  title1,
}: ImgCardProps) {
  return (
    <div className="imgCard" style={{ backgroundColor: backgroundColor }}>
      <img src={imgUri} alt="" />
      <div className="popup">
        <PopUp icon={<FileCopy />} title="Access" subtitle="300+ Naira" />
      </div>
    </div>
  );
}

export default ImgCard;
