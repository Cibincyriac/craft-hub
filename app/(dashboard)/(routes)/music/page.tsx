import { Heading } from "@/components/heading";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";

const Music = () => {
    return (
        <div>
            <Heading
            title="Music"
            description="Our most advanced Music model"
            icon={MusicIcon}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
            />
        Music Generation    
        </div>
    );
}
export default Music;