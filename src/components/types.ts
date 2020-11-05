export interface UploadFailedError {
  error: string;
}

export interface Review {
  id?: number;
  title: string,
  message: string,
  rating: number,
  reviewer_name: string,
  reviewer_email: string,
  published: boolean,
  verified: boolean 
}

export interface ValidatedCSVResult {
  error: string | null;
  validatedData: Review[] | null;
}