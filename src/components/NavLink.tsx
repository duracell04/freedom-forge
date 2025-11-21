import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  activeClassName?: string;
  pendingClassName?: string;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const { pathname } = useRouter();
    const isActive = typeof href === "string" ? pathname === href : pathname === href.pathname;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName, false && pendingClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
