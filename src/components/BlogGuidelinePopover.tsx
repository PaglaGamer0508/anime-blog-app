import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { HelpCircleIcon } from "lucide-react";

interface BlogGuidelinePopoverProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const BlogGuidelinePopover: React.FC<BlogGuidelinePopoverProps> = ({
  ...props
}) => {
  return (
    <div {...props}>
      <Popover>
        <PopoverTrigger>
          <HelpCircleIcon className="w-4 h-4" />
        </PopoverTrigger>
        <PopoverContent className="bg-slate-800 text-slate-300 text-xs p-2 space-y-1">
          <div>- Title can Minimum 3 characters and maximum 128 characters long.</div>
          <div>- Content: Minimum 30 characters.</div>
          <div>- Choose appropriate genres for your blog.</div>
          <div>
            - Select a blog type: GENERAL, REVIEW, or CHARACTER, GENERAL is
            Selected by Default.
          </div>
          <div>- Include a relevant image.</div>
          <div>- Ensure your content follows our community guidelines.</div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BlogGuidelinePopover;
