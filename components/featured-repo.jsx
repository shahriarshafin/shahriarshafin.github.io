import { Link } from 'next-view-transitions';
import { HiCursorClick } from 'react-icons/hi';

import { GITHUB_API_URL, GITHUB_USERNAME } from '@/lib/constants';

import { featuredRepositories } from '@/app/data/data';

import Heading from './heading';
import RepoCard from './repo-card';

async function fetchRepositoriesData() {
  const reposData = await Promise.all(
    featuredRepositories.map(async (repoName) => {
      try {
        const url = `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`;
        const response = await fetch(url, {
          next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      } catch (error) {
        console.error(`Error fetching ${repoName}:`, error);
        return null;
      }
    })
  );
  return reposData.filter(Boolean);
}

export default async function FeaturedRepo() {
  const repositories = await fetchRepositoriesData();

  return (
    <section>
      <Heading text="Featured Repositories" />
      <div className="mt-3 space-y-4">
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
          {repositories.map((repo) => (
            <RepoCard
              key={repo.id}
              html_url={repo.html_url}
              name={repo.name}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              description={repo.description}
              topics={repo.topics}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/open-source"
          className="mt-10 flex w-auto justify-center gap-2 text-base text-primary transition ease-in hover:text-primary-foreground"
        >
          <span>More Repositories</span>
          <HiCursorClick className="inline-block text-xl" />
        </Link>
      </div>
    </section>
  );
}
