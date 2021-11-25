import { Listing } from "./Listing";

export class ListingResponse {
  status: string;
  origin: string;
  data: Listing[];
  message: string;

  constructor(status: string, origin: string, data: Listing[], message: string) {
    this.status = status;
    this.origin = origin;
    this.data = data;
    this.message = message;
  }

}
