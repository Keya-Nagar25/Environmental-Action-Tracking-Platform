
import { FeedItem } from "../components/FeedItem";
import { posts } from "../data/mockData";
import { Header } from "../components/layout/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Header />
      <div className="container mx-auto max-w-lg">
        {posts.map(post => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
