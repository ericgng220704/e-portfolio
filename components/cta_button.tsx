import clsx from "clsx";
import Link from "next/link"; // Use only if you want to use Next.js <Link> (optional)

type CTAButtonProps = {
  id?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  href?: string;
  onClick?: () => void;
  target?: string; // For external links
};

const CTAButton = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass = "",
  href,
  onClick,
  target,
}: CTAButtonProps) => {
  const className = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
    containerClass
  );

  const content = (
    <>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </>
  );

  if (href) {
    // If internal link ("/about"), use Next.js <Link>, else <a>
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} id={id} className={className}>
          {content}
        </Link>
      );
    } else {
      return (
        <a
          href={href}
          id={id}
          className={className}
          target={target || "_blank"}
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
  }

  // Fallback: regular button
  return (
    <button id={id} className={className} onClick={onClick} type="button">
      {content}
    </button>
  );
};

export default CTAButton;
