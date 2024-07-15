export type Character = {
  name: string;
  id: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

export type Filters = {
  name: string;
  status: string;
  species: string;
  gender: string;
};

export type Pagination = {
  count: number | null;
  next: number | null;
  prev: number | null;
};
