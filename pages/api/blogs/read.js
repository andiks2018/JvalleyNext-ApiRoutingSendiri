
const dummyBlogs = [
    {
        id : 1,
        title : "Ini blog pertama saya",
        body : "Ini body pertama saya",
        banner : "https://picsum.photos/seed/1/500/300"
    },
    {
        id : 2,
        title : "Ini blog kedua saya",
        body : "Ini body kedua saya",
        banner : "https://picsum.photos/seed/2/500/300"
    },
    {
        id : 3,
        title : "Ini blog ketiga saya",
        body : "Ini body ketiga saya",
        banner : "https://picsum.photos/seed/3/500/300"
    },
]
export default function handler (req, res){

    console.info(req.query)
    res.status(200).json({
        success : true,
        // query : req.query
        data : dummyBlogs
    })
}