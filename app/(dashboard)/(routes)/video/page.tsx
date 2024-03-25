import { Heading } from "@/components/heading";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";

const Video = () => {
    return (
        <div>
            <Heading
            title="Video"
            description="Our most advanced Video model"
            icon={VideoIcon}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
            />
        Video Generation    
        </div>
    );
}
export default Video;