import { Avatar } from "@mui/material";
import ShowStatus from "../Status/ShowStatus";
import Invisible from "../Status/Invisible";
import discordImg from "../../assets/Discord-Symbol-White.svg";
import Online from "../Status/Online";
import Idle from "../Status/Idle";
import DoNotDisturb from "../Status/DoNotDisturb";
import { Size, StatusEnum } from "../../helper/type";

type Props = {
  bgColor: string;
  status: StatusEnum;
  avatarSize: Size;
  containerSize: Size;
  showStatusSize: Size;
  statusSize: Size;
  statusNotRequired: Boolean;
};

export default function CustomAvatar({
  bgColor,
  status,
  avatarSize,
  containerSize,
  showStatusSize,
  statusSize,
  statusNotRequired,
}: Props) {
  let statusComponents = <Online statusSize={statusSize} />;
  if (status === StatusEnum.Invisible) {
    statusComponents = <Invisible statusSize={statusSize} />;
  }
  if (status === StatusEnum.Idle) {
    statusComponents = <Idle statusSize={statusSize} />;
  }
  if (status === StatusEnum.DoNotDisturb) {
    statusComponents = <DoNotDisturb statusSize={statusSize} />;
  }

  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        ...containerSize,
        borderRadius: "50%",
        backgroundColor: bgColor,
      }}
    >
      <Avatar sx={avatarSize} src={discordImg} />
      {!statusNotRequired && (
        <ShowStatus
          showStatusSize={showStatusSize}
          statusComponent={statusComponents}
        />
      )}
    </div>
  );
}
