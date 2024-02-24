import { MicrophoneIcon, SearchIcon } from "./icons";

function SearchBar() {
  return (
    <div className="max-w-md relative hidden lg:block">
      <span className="absolute left-4 top-1/2 -translate-y-1/2">
        <SearchIcon className="text-[22px] text-slate-300" />
      </span>
      <input
        id="search"
        type="search"
        name="search"
        placeholder="Artist, Music, Album, Etc"
        className="pl-12 pr-10 py-2 w-full rounded-3xl outline-none bg-[var(--color-gray-500)]"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
        <MicrophoneIcon className="text-lg text-slate-300" />
      </span>
    </div>
  );
}

export default SearchBar;
