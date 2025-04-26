import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import "./DialogInfo.css";

type Props = {
  message: string;
  description: string;
  onDialogClose: Function;
  Icon: IconDefinition;
  IconColor?: string;
  ButtonColor?: string;
  ButtonHoverColor?: string;
};

function DialogInfo({
  message,
  description,
  onDialogClose,
  Icon,
  IconColor,
  ButtonColor = "#90CAF9", 
  ButtonHoverColor = "#64B5F6",
}: Props) {
  return (
    <div
      className="support-service-dialog-background"
      onClick={() => onDialogClose()}
    >
      <div
        className="support-service-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-header">
          <h2>{message}</h2>
          <FontAwesomeIcon
            icon={Icon}
            size="2x"
            style={{ color: IconColor || "#4CAF50" }}
          />
        </div>
        <p className="dialog-description">{description}</p>
        <div
          className="support-service-dialog-btn"
          onClick={() => onDialogClose()}
        >
          <Button
            text="OK"
            background={ButtonColor} 
            hoverColor={ButtonHoverColor}
            width="100%"
            borderRadius="5px"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
}

export default DialogInfo;


//setDialogInfoData({
 // visible: true,
 // message: "Delete folder"
//});
