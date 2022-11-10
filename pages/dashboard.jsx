import styles from "../styles/Home.module.css"

export default function Dashboard() {
    const handleSubmit = (e) => {

        e.preventDefault()

        const title = e.target.title.value
        const body = e.target.body.value 

        fetch("http://localhost:3000/api/blogs/create", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ title, body })
        })
            .then(res => res.json())
            .then(data => { console.info(data) })
            .catch(err=>{console.error(err)})
    }

    return (
        <div className={styles.main}>
            <form className="styles.form" action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">judul</label>
                    <input type="text" id="title" required />
                </div>
                <div>
                    <label htmlFor="body">kontent</label>
                    <textarea type="text" id="body" required ></textarea>
                </div>
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    )
}