import ToC from "@/components/_TableOfContents";
import ReactionComponent from "@/components/reaction";
import LeftContact from "@/components/LeftContact";
import AdsBanner from "@/components/promoBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
      <LeftContact />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="mdx-css-wrapper w-full md:w-3/4">{children}</div>

          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <ToC />

            <AdsBanner />
          </div>
        </div>
        <ReactionComponent />
      </main>
    </div>
  );
}
