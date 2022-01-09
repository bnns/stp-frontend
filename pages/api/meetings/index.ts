// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getStrapiUrl, getBearerToken, fetchAPI} from '../../../lib/api'

const format = ({ id, attributes }) => ({ id, ...attributes })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const meetingData = await fetchAPI('meetings')
    const {data, ...others} = meetingData
    const responseData = { meetings: data.map(format), ...others}

  res.status(200).json(responseData)
}
