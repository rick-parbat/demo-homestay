import Home from './pages/Home';
import { JournalPage } from './components/Journal';
import { posts } from './blogPosts';
export default function App({ path = '/' }) {
  const route = path.replace(/\/+$/, '') || '/';
  if (route === '/') return <Home />;
  if (route === '/blog') return <JournalPage />;
  const post = posts.find(p => route === `/blog/${p.slug}`);
  return <JournalPage post={post} notFound={!post} />;
}
