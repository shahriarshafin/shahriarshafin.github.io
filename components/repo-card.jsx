import Link from 'next/link';
import React from 'react';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';

const RepoCard = ({ html_url, name, stargazers_count, forks_count, description, topics }) => {
  return (
    <article className="bg-card border-background transform rounded-lg border-2 p-4 text-white transition-transform ease-in hover:scale-[1.02] hover:shadow-lg">
      <div className="flex h-[7.5rem] flex-col justify-between">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="hover:text-primary-foreground text-primary inline-block text-lg font-bold transition ease-in">
            <Link href={html_url} target="_blank">
              {name}
            </Link>
          </h2>

          <div className="flex cursor-default items-center gap-2">
            <div className="flex items-center">
              <BiStar />
              <span className="ml-1">{stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <BiGitRepoForked />
              <span className="ml-1">{forks_count}</span>
            </div>
          </div>
        </div>

        <p className="text-muted h-12 overflow-hidden">{description}</p>

        <ul className="mt-3 flex cursor-default gap-2">
          {topics?.slice(0, 3).map((topic, index) => (
            <li
              className="bg-background overflow-hidden truncate rounded-3xl px-2 text-sm"
              key={index}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default RepoCard;
