import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Learn. Build. Grow.</h3>
            <p className="text-sm">
              Our comprehensive documentation and guides help you master the platform and build amazing applications.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Product</h4>
          <nav className="grid gap-2">
            <Link href="/documentation" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Documentation
            </Link>
            <Link href="/guides" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Guides
            </Link>
            <Link href="/api-reference" className="hover:underline hover:underline-offset-4" prefetch={false}>
              API Reference
            </Link>
            <Link href="/pricing" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Pricing
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Community</h4>
          <nav className="grid gap-2">
            <Link href="https://github.com/your-repo" className="hover:underline hover:underline-offset-4" prefetch={false}>
              GitHub
            </Link>
            <Link href="https://discord.gg/your-invite" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Discord
            </Link>
            <Link href="https://twitter.com/your-handle" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Twitter
            </Link>
            <Link href="/blog" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Blog
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Company</h4>
          <nav className="grid gap-2">
            <Link href="/about" className="hover:underline hover:underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="/careers" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Careers
            </Link>
            <Link href="/contact" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:underline hover:underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
      <div className="mt-12 border-t border-muted/50 pt-6 text-center text-sm">
        <p>&copy; 2024 CodeWeb3.tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
