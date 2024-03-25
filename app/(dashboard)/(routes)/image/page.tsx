import { Heading } from "@/components/heading";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";

const Image = () => {
    return (
        <div>
            <Heading
            title="Image"
            description="Our most advanced Image model"
            icon={ImageIcon}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
            />
        Image Generation    
        </div>
    );
}
export default Image;