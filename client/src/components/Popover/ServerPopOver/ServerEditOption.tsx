import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CreateChannelModal from '../../Utils/Modal/CreateChannelModal';
import CreateChannelCategoryModal from '../../Utils/Modal/CreateChannelCategoryModal';

export default function ServerEditOption({ setShowServerOption, setServer, server }) {

    return (
        <div className="text-neutral-200 flex flex-col gap-1">
            <div className='server_option cursor-pointer server_option flex justify-between items-center py-2 px-3 rounded-md'>
                <h1 className='text-sm font-medium'>Invite People</h1>
                <GroupAddIcon className='text-neutral-400' />
            </div>
            <div className='cursor-pointer server_option  flex justify-between items-center py-2 px-3 rounded-md'>
                <h1 className='text-sm font-medium'>Server Seeting</h1>
                <SettingsIcon className='text-neutral-400' />
            </div>
            <CreateChannelModal server={server} setServer={setServer} >
                <div onClick={() => setShowServerOption(false)} className='cursor-pointer server_option flex justify-between items-center py-2 px-3 rounded-md'>
                    <h1 className='text-sm font-medium'>Create Channel</h1>
                    <AddCircleIcon className='text-neutral-400' />
                </div>
            </CreateChannelModal>
            <CreateChannelCategoryModal>
                <div onClick={() => setShowServerOption(false)} className='cursor-pointer server_option flex justify-between items-center py-2 px-3 rounded-md'>
                    <h1 className='text-sm font-medium'>Create Category</h1>
                    <CreateNewFolderIcon className='text-neutral-400' />
                </div>
            </CreateChannelCategoryModal>
        </div>
    )
}