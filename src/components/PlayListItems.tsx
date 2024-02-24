import { playListItems } from "@/config";
import { MusicListIcon } from "@/components/icons";

function PlayListItems() {
  return (
    <ul className="space-y-4">
      {playListItems.map(item => (
        <li key={item} className="flex gap-x-3 cursor-pointer font-semibold">
          <MusicListIcon className="text-xl" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default PlayListItems;
