"use client";
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

export function ClientGreeting() {
  const trpc = useTRPC();
  const greeting = useQuery(trpc.categories.getAll.queryOptions());
  if (!greeting.data) return <div>Loading...</div>;



  return <div>{greeting.data.greeting}</div>;
}