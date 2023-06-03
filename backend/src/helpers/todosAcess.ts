import * as AWS from 'aws-sdk'
// import * as AWSXRay from 'aws-xray-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { createLogger } from '../utils/logger'
import { TodoItem } from '../models/TodoItem'
// import { TodoUpdate } from '../models/TodoUpdate';

// const XAWS = AWSXRay.captureAWS(AWS)

const logger = createLogger('TodosAccess')

// TODO: Implement the dataLayer logic
export class TodosAcess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly TodosTable = process.env.TODOS_TABLE
  ) {}

  async getTodosForUser(userId: string): Promise<TodoItem[]> {
    logger.info('In function: getTodosForUser()')
    const result = await this.docClient
      .query({
        TableName: this.TodosTable,
        KeyConditionExpression: '#userId = :i',
        ExpressionAttributeNames: {
          '#userId': 'userId'
        },
        ExpressionAttributeValues: {
          ':i': userId
        }
      })
      .promise()
    return result.Items as TodoItem[]
  }
}

/** Create Dynamo Db */
function createDynamoDBClient() {
  return new AWS.DynamoDB.DocumentClient()
}
