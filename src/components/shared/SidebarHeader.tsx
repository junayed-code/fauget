function SidebarHeader({
  name,
  lineWidth = "40%",
}: {
  name: string;
  lineWidth?: string;
}) {
  return (
    <div className="flex items-center gap-x-6 mb-6">
      <h5 className="font-semibold">{name}</h5>
      <hr style={{ width: lineWidth }} className="border-t-[1.5px]" />
    </div>
  );
}

export default SidebarHeader;
