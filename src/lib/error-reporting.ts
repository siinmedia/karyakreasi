/**
 * Local, standalone error logging for the root error boundary.
 *
 * Boundary-caught errors are not rethrown to `window.onerror` in production
 * React, so log them explicitly with the route and boundary context.
 */

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[error-boundary]", message, { route: window.location.pathname, ...context, stack });
}

export { reportRuntimeError as reportError };
