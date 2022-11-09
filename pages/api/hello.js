// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    success : true,
    data : [
      {
        id : 1,
        username : "andiismail"
      },
      {
        id : 2,
        username : "kakak"
      },
      {
        id : 3,
        username : "aan"
      },
    ]
  })
}
