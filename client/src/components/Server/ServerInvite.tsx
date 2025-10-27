import { XCircle } from "lucide-react";
import SearchFriends from "../Search/SearchFriend";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Icon } from "@mui/material";

export default function ServerInvite({ server, setServer, handleClose }) {
  const profileData = useSelector((state: RootState) => state.profile);
  console.log("111111", profileData);
  return (
    <div>
      <div className="flex justify-between">
        <h3>{`Invite friends to  ${server.name}`}</h3>
        <XCircle onClick={handleClose} />
      </div>
      <div>
        <SearchFriends friends={profileData.myFriends} server={server} />
      </div>
      <div>
        <input type="text" readOnly value="https://discord.gg/invitelink" />
        <button>Copy</button>
      </div>
    </div>
  );
}
