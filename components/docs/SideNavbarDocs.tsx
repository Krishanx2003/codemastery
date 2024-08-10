import Link from 'next/link';
import React from 'react';

interface SideNavbarProps {
  items: Array<{
    title: string;
    href: string;
    subItems?: Array<{
      title: string;
      href: string;
    }>;
  }>;
}

const SideNavbarDocs: React.FC<SideNavbarProps> = ({ items }) => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background p-4 sm:flex">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">Table of Contents</h3>
        <nav className="space-y-1">
          {items.map((item) => (
            <React.Fragment key={item.title}>
              <Link
                href={item.href}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                prefetch={false}
              >
                {item.title}
              </Link>
              {item.subItems && (
                <div className="space-y-1 pl-4">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                      prefetch={false}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideNavbarDocs;
