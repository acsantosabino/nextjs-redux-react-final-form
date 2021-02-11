// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

const pathData = path.resolve('./public', 'json/book.json')

function jsonReader(filePath) {
  try {
    const jsonString = fs.readFileSync(filePath)
    return JSON.parse(jsonString)
  } catch (error) {
    console.log(error)
    return
  }
}

function jsonWriter(filePath, data){
  fs.writeFileSync(filePath, data)
}

export default function userHandler(req, res) {
  const {
    query: { id, name },
    body,
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(jsonReader(pathData))
      break
    case 'PUT':
      const input = { id, name: name || `User ${id}` }
      const data = {...jsonReader(pathData), ...input}
      jsonWriter(pathData, JSON.stringify(data1))
      // Update or create data in your database
      res.status(200).json(data)
      break
    case 'POST':
      const data1 = {id, ...body}
      jsonWriter(pathData, JSON.stringify(data1))
      res.status(200).json(data1)
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}