import { musicTypes } from "@/config";
import Badge from "./shared/Badge";

function MusicTypes() {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {musicTypes.map(type => (
        <Badge key={type} className="cursor-pointer">
          {type}
        </Badge>
      ))}
    </div>
  );
}

export default MusicTypes;
