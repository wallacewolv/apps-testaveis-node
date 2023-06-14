import { setYear, parseISO } from "date-fns";

/**
 * Receives "2023-06-14" and returns 2024-06-14
 */
export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}
