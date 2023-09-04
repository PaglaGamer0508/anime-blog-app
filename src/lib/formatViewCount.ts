export const formatViewCount = (viewCount: number): string => {
  if (viewCount >= 1000000000) {
    return viewCount >= 10000000000
      ? `${(viewCount / 1000000000).toFixed(0)}B`
      : `${(viewCount / 1000000000).toFixed(1)}B`;
  } else if (viewCount >= 1000000) {
    return viewCount >= 10000000
      ? `${(viewCount / 1000000).toFixed(0)}M`
      : `${(viewCount / 1000000).toFixed(1)}M`;
  } else if (viewCount >= 1000) {
    return viewCount >= 10000
      ? `${(viewCount / 1000).toFixed(0)}K`
      : `${(viewCount / 1000).toFixed(1)}K`;
  } else {
    return viewCount.toString();
  }
};
