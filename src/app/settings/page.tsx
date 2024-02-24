import { getServerSession } from "next-auth";
import { options } from "../api/auth/config";

async function Settings() {
  const session = await getServerSession(options);

  return (
    <div className="py-4 space-y-8">
      <div>
        <h4 className="text-xl font-semibold mb-5">User Profile</h4>
        <ul className="pl-5 leading-8">
          <li className="space-x-2">
            <span className="min-w-16 inline-block">Name:</span>
            <span>{session?.user?.name}</span>
          </li>
          <li className="space-x-2">
            <span className="min-w-16 inline-block">Email:</span>
            <span>{session?.user?.email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Settings;
