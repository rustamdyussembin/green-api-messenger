const BASE_URL = 'https://7201.api.green-api.com';

async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json() as Promise<T>;
}

type QueryParams = Record<string, string | number | boolean | null | undefined>;

export function get<T>(url: string, params: QueryParams = {}): Promise<T> {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });

  const query = searchParams.toString();

  return request<T>(query ? `${url}?${query}` : url, {
    method: 'GET',
  });
}

export function post<T>(url: string, data?: unknown): Promise<T> {
  return request<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function del<T>(url: string): Promise<T> {
  return request<T>(url, {
    method: 'DELETE',
  });
}
