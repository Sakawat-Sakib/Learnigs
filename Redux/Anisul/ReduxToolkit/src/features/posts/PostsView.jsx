import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchPosts } from './postSlice'

const PostsView = () => {
    const {isLoading, posts, error} = useSelector((state)=> state.post)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

  return (
    <div>
        {isLoading && <h3>Loading</h3>}
        {error && <h3>{error}</h3>}
        {posts && posts.map((post)=>{
            return (
                <p>{post.title}</p>
            )
        })}
    </div>
  )
}

export default PostsView