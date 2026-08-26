import { ph } from '../lib/placeholder';

const POSTS = [
  { title: 'Designing Spaces That Sell: The Psychology Behind Interior Appeal', date: 'March 5, 2026', seed: 'post-1' },
  { title: "Modern Homes That Define Today's Buyers' Expectations", date: 'March 5, 2026', seed: 'post-2' },
];

const ARTICLES = [
  { date: '23 Apr', title: 'How to Price Your Property for a Faster, Profitable Sale' },
  { date: '20 Apr', title: 'Hidden Costs Every Home Buyer Should Be Aware Of' },
  { date: '18 Apr', title: 'What First-Time Buyers Need to Know Before Entering the Market' },
  { date: '16 Apr', title: 'Where Investors Are Moving: High-Growth Areas to Watch' },
  { date: '14 Apr', title: 'What First-Time Buyers Should Know Before Entering the Market' },
  { date: '10 Apr', title: 'Market Trends Show Slower Growth Across Major Cities' },
];

export default function Insights() {
  return (
    <section className="insights" aria-label="Market insights and updates">
      <div className="insights__col">
        <div className="insights__heading-row">
          <h2 className="insights__heading">Market Insights &amp; Updates</h2>
          <a href="#" className="insights__link">Explore All</a>
        </div>
        <div className="insights__cards">
          {POSTS.map((post) => (
            <article className="post-card" key={post.title}>
              <div className="post-card__photo">
                <img src={ph(post.seed, 300, 320)} alt={`Photo for article: ${post.title}`} />
              </div>
              <h3 className="post-card__title">{post.title}</h3>
              <div className="post-card__meta">
                <span>{post.date}</span>
                <i className="post-card__dot" aria-hidden="true"></i>
                <span>By Editorial</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="insights__col">
        <div className="insights__heading-row">
          <h2 className="insights__heading">Last Article</h2>
          <a href="#" className="insights__link">All News</a>
        </div>
        <div className="articles-list">
          {ARTICLES.map((article, i) => (
            <div key={`${article.date}-${i}`}>
              <div className="article-row">
                <span className="article-row__date">{article.date}</span>
                <p className="article-row__title">{article.title}</p>
              </div>
              <div className="article-divider" aria-hidden="true"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
