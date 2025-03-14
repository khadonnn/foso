import BlogCard from "@/components/blogCard";
import CategoryList from "@/components/categoryList";
import { PromoBanner } from "@/components/promoBanner";
import SearchBar from "@/components/searchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts, promoBanners } from "@/data/db";
const BlogBody = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Tất Cả Bài Viết</h2>
              <TabsList>
                <TabsTrigger value="all">Tất cả</TabsTrigger>
                <TabsTrigger value="popular">Phổ biến</TabsTrigger>
                <TabsTrigger value="latest">Mới nhất</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              {featuredPost && (
                <BlogCard
                  title={featuredPost.title}
                  image={featuredPost.image}
                  date={featuredPost.date}
                  readTime={featuredPost.readTime}
                  category={featuredPost.category}
                  slug={featuredPost.slug}
                />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    image={post.image}
                    date={post.date}
                    readTime={post.readTime}
                    category={post.category}
                    slug={post.slug}
                    small
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.slice(0, 4).map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    image={post.image}
                    date={post.date}
                    readTime={post.readTime}
                    category={post.category}
                    slug={post.slug}
                    small
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="latest">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.slice(0, 2).map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    image={post.image}
                    date={post.date}
                    readTime={post.readTime}
                    category={post.category}
                    slug={post.slug}
                    small
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <SearchBar />
          <CategoryList />
          {promoBanners.map((banner, index) => (
            <PromoBanner
              key={index}
              title={banner.title}
              description={banner.description}
              buttonText={banner.buttonText}
              imageSrc={banner.imageSrc}
              buttonLink={banner.buttonLink}
              cat={banner.cat}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default BlogBody;
