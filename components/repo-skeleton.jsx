const RepoSkeleton = () => (
  <div className="flex h-39 animate-pulse flex-col justify-between rounded-lg border-2 border-background bg-card p-4">
    <div className="mb-2 h-5 w-3/5 rounded-xs bg-background"></div>
    <div>
      <div className="mb-3 h-5 rounded-xs bg-background"></div>
      <div className="h-5 w-11/12 rounded-xs bg-background"></div>
    </div>
    <div className="mt-3 flex gap-2">
      <div className="h-4 w-1/4 rounded-3xl bg-background px-2"></div>
      <div className="h-4 w-1/4 rounded-3xl bg-background px-2"></div>
      <div className="h-4 w-1/4 rounded-3xl bg-background px-2"></div>
    </div>
  </div>
);

export default RepoSkeleton;
