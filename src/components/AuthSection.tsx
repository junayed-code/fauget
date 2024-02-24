import Link from "next/link";
import Button from "./shared/Button";

function AuthSection({
  className,
  onClick,
}: {
  className: string;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className={className}>
      <Link href="/?modal=signin" replace>
        <Button>Sign in</Button>
      </Link>
      <Link href="/?modal=signup" replace>
        <Button styleRole="secondary">Sign up</Button>
      </Link>
    </div>
  );
}

export default AuthSection;
