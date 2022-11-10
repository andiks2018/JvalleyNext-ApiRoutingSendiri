import db from "../../../prisma/db"

export default async function handler(req, res) {

    //jika req method bukan post maka retur error
    if (req.method!=="POST"){
        return res.status(404).json({
            success : false,
            message : "tidak ditemukan..."
        })
    }

    const createBlog = await db.blogs.create({
        data : req.body
    })

    res.status(201).json({
        success :true,
        message: "data berhasil disimpan...",
        body : createBlog,
    })
}