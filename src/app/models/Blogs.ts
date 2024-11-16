export interface BlogsListViewModel {
  title: string;
  slug: string;
  time: Date;
  tag: string;
}

export interface ReviewKnowledgeViewModel {
  id: number;
  title: string;
  answer: JSX.Element;
}
