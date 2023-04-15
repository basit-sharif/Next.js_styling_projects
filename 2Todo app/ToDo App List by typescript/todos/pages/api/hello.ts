import * as fs from 'fs'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data = await fs.promises.readdir("blogs");

  let orgdata : any= [];

  if (req.method === "POST") {
    console.log("runned")
    await fs.promises.writeFile(`blogs/${data.length}.json`, JSON.stringify(req.body))
  } else {

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      let namedata = await fs.promises.readFile(("blogs/" + element), "utf-8");
      orgdata.push(JSON.parse(namedata))
    }

  }
  res.status(200).json(orgdata)
}



