export interface ApiResponse<T> extends Response {
  errorMessage?: string;
  responseCode?: string;
  data?: T;
}

export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export async function http<T>(request: RequestInfo): Promise<ApiResponse<T>> {
  const response: ApiResponse<T> = await fetch(request);

  try {
    // may error if there is no body
    response.data = await response.json();
  } catch (ex) {
    // console.log(ex);
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
