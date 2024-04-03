export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}
export interface httpRequest<B> {
  params?: any;
  headers?: any;
  body: B;
}
