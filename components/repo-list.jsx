import { GITHUB_API_URL, GITHUB_USERNAME } from '@/lib/constants';

import RepoCard from './repo-card';

const RepoList = async () => {
  const res = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  let data = await res.json();
  return (
    <>
      {data
        .sort((a, b) => {
          if (a.stargazers_count > b.stargazers_count) return -1;
          else if (a.stargazers_count < b.stargazers_count) return 1;
          return 0;
        })
        .map((item) => (
          <RepoCard
            key={item.id}
            html_url={item.html_url}
            name={item.name}
            stargazers_count={item.stargazers_count}
            forks_count={item.forks_count}
            description={item.description}
            topics={item.topics}
          />
        ))}
    </>
  );
};

export default RepoList;
