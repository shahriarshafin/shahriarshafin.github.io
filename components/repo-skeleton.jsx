const RepoSkeleton = () => (
  <div className="bg-card border-background flex h-[9.75rem] animate-pulse flex-col justify-between rounded-lg border-2 p-4">
    <div className="bg-background mb-2 h-5 w-3/5 rounded-sm"></div>
    <div>
      <div className="bg-background mb-3 h-5 rounded-sm"></div>
      <div className="bg-background h-5 w-11/12 rounded-sm"></div>
    </div>
    <div className="mt-3 flex gap-2">
      <div className="bg-background h-4 w-1/4 rounded-3xl px-2"></div>
      <div className="bg-background h-4 w-1/4 rounded-3xl px-2"></div>
      <div className="bg-background h-4 w-1/4 rounded-3xl px-2"></div>
    </div>
  </div>
);

export default RepoSkeleton;
