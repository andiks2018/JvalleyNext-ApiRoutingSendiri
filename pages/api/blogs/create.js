export default function handler(req, res){

    //jika req method bukan post maka retur error
    if (req.method!=="POST"){
        return res.status(404).json({
            success : false,
            message : "tidak ditemukan..."
        })
    }



    res.status(201).json({
        success :true,
        message : "data berhasil disimpan..."
    })
}