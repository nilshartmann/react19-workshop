import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ATTENTION!:
      // These are default settings that apply to ALL queries.
      // (These settings can be overwritten in any query)
      // I have chosen these settings for our workshop, hoping that the behavior configured
      // this way will not be too confusing.
      //
      // In your application, you must check whether they make sense (from a business perspective) for you.

      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // do not retry on technical problems
      retry: false
    }
  }
});
