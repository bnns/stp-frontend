// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getStrapiUrl, getBearerToken, fetchAPI} from '../../../lib/api'

const format = ({ id, attributes }) => ({ id, ...attributes })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const bibData = await fetchAPI('bibliographies')
    const {data, ...others} = bibData
    const responseData = { bibliography: data.map(format), ...others}

  res.status(200).json(responseData)
}
