const BASE_URL = 'https://4100.api.green-api.com';

type QueryParams = Record<string, string | number | boolean | null | undefined>;

// TODO: добавить токен
async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
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

export function get<T>(endpoint: string, params: QueryParams = {}): Promise<T> {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });

  const query = searchParams.toString();
  const url = query ? `${endpoint}?${query}` : endpoint;

  return request<T>(url, {
    method: 'GET',
  });
}

export function post<T>(endpoint: string, data: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
