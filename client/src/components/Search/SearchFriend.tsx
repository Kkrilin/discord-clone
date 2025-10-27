import { Avatar } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";
import { serverInviteFn } from "../../helper/api";
import { toast } from "sonner";

export default function SearchFriends({ friends, server }) {
  const { friendName, setFriendName } = useState("");
  return (
    <div className="overflow-y-auto h-70">
      <div>
        <div className="relative p-2 my-2 border-0 rounded-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            style={{
              paddingLeft: "40px",
            }}
            type="text"
            placeholder="Search Friends"
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></input>
        </div>
        <div>
          <FriendListTOAdd friends={friends} server={server} />
          {friends.length === 0 && (
            <h2 className="px-4 py-2 text-sm text-gray-500">
              No friends found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

const FriendListTOAdd = ({ friends, server }) => {
  const mutation = useMutation({
    mutationFn: serverInviteFn,
    onSuccess: () => {
      toast.success("invite sned");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const sendInvite = (friend) => {
    mutation.mutate({ friend, server });
  };
  return (
    <div>
      {friends.map((friend) => {
        return (
          <div className="flex justify-between items-center px-2 py-1 hover:bg-neutral-700 rounded-md group">
            <div className="flex justify-center items-center gap-2">
              <Avatar
                src={friend.avatarUrl}
                sx={{ bgcolor: friend.userSettings?.bgColor || "red" }}
              >
                {friend.displayName[0]}
              </Avatar>
              <h4 className="text-gray-400 font-normal">
                {friend.displayName}
              </h4>
            </div>
            <button
              className="px-6 py-1 border border-green-400 rounded-xl group-hover:bg-green-600 transition-colors duration-200 hover:cursor-pointer"
              type="button"
              onClick={() => sendInvite(friend)}
            >
              invite
            </button>
          </div>
        );
      })}
    </div>
  );
};
