import axios from "axios"

export default async function BlogPage({params}: {
    params:{
        blogId: string
    }
}){
    const blogId = params.blogId
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const data = response.data;
    return <div>
        Blog Page {blogId}
        Title - {data.title}
        body - {data.body}
    </div>
}