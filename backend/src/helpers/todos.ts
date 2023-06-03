import { TodosAcess } from './todosAcess'
// import { AttachmentUtils } from './attachmentUtils';
import { TodoItem } from '../models/TodoItem'
// import { CreateTodoRequest } from '../requests/CreateTodoRequest'
// import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
// import * as uuid from 'uuid'
// import * as createError from 'http-errors'

// TODO: Implement businessLogic

const logger = createLogger('Todos')
export async function getTodosForUser(user: string): Promise<TodoItem[]> {
  logger.info('In function: getTodosForUser()')

  return await TodosAcess.getTodosForUser(user)
}

