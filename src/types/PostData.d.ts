export type PostData = {
  _id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  images: string[];
  user: {
    _id: string;
    displayName: string;
    avatarUrl: string;
  };
};
