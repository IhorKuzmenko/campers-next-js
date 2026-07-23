export interface CamperImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerRating: number;
  comment: string;
}

export interface Camper {
  id: string;

  name: string;

  price: number;

  rating: number;

  totalReviews: number;

  location: string;

  description: string;

  form: string;

  length: string;

  width: string;

  height: string;

  tank: string;

  consumption: string;

  transmission: string;

  engine: string;

  amenities: string[];

  coverImage: string;

  createdAt: string;

  updatedAt: string;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface CamperFilters {
  forms: string[];
  transmissions: string[];
  engines: string[];
}
