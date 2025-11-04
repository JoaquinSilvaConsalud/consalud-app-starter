interface ApiError extends Error {
  status?: number;
  data?: unknown;
}

export default ApiError;

