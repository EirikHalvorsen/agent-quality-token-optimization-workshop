import { Task, Priority } from './types';
import { getAllTasks } from './store';

/**
 * Return all tasks whose priority is AT LEAST `minPriority`.
 */
export function filterByMinPriority(minPriority: Priority): Task[] {
  return getAllTasks().filter((task) => task.priority >= minPriority);
}

/** Return the `limit` highest-priority tasks, most important first. */
export function topTasks(limit: number): Task[] {
  return [...getAllTasks()]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}
