import { getUserTodos } from './actions'

export type Todo = Awaited<ReturnType<typeof getUserTodos>>[0]
