export interface Content {
  activity: string;
  author: {
    identityId: string;
    name: string;
  };
  authorAgent: string;
  authorIp: string;
  bookmarks?: number;
  category: string;
  closedAt: number;
  comments?: number;
  id: string;
  images: string[];
  isAuthoredByMe: boolean;
  isHidden: boolean;
  isNotice: boolean;
  modifiedAt?: number;
  no?: number;
  openedAt?: number;
  postedAt: number;
  reactions?: number;
  reported?: number;
  text: string;
  type: string;
  views?: number;
}
