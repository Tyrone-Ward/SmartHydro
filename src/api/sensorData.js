import '../../env.json'

export const getHydroData = async (arrKeys) => {
  ;[sensorName, resAmount] = [arrKeys.queryKey[1].sensorName, arrKeys.queryKey[1].resAmount]
  // console.log('array keys:', resAmount)
  const data = JSON.stringify({
    collection: MONGODB_COLLECTION,
    database: 'UserData',
    dataSource: 'Cluster0',
    // filter: { name: 'humidity' },
    // filter: { sensorID: 'DHT22_1' },
    filter: { name: sensorName },
    projection: { _id: 0, name: 1, timestamp: 1, value: 1 },
    limit: resAmount,
    sort: { timestamp: -1 }
  })
  const response = await fetch('https://data.mongodb-api.com/app/data-sosoa/endpoint/data/v1/action/find', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': MONGODB_API_KEY
    },
    body: data
  })
  const body = await response.json()
  // console.log(body)
  temp = body.documents.map((d) => d.value)
  timestamp = body.documents.map((d) => d.timestamp)
  // console.log({ temp, timestamp })

  return body
}
