import {RequestQuery} from '../v1/ApiV1Models';
import {injectable} from 'inversify';

@injectable()
abstract class BaseApiClient {
  constructor(private baseUrl: string) {}

  private makeUrl(route: string, query: RequestQuery | null = null): string {
    let url = `${this.baseUrl}${route}`;
    if (query != null) {
      const queryString = makeQueryString(query);
      url = url + '?' + queryString;
    }
    return url;
  }

  protected async get<TResponse>(
    route: string,
    query: RequestQuery | null = null,
  ): Promise<TResponse> {
    const url = this.makeUrl(route, query);
    // @ts-ignore
    return fetch(url, {
      method: 'GET',
    })
      .then(response => response.json() as Promise<TResponse>)
      .catch(err => {
        console.error(err);
      });
  }

  protected async post<TRequest, TResponse>(
    route: string,
    query: RequestQuery,
    body: TRequest,
  ): Promise<TResponse> {
    const url = this.makeUrl(route, query);
    // @ts-ignore
    return fetch(url, {
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    ).then(response => response.json() as Promise<TResponse>);
  }
}

function makeQueryString(query: RequestQuery): string {
  return Object.entries(query)
    .map(([name, value]) => `${name}=${value}`)
    .join('&');
}

export default BaseApiClient;
