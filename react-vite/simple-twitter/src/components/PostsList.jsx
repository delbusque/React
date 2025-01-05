import Post from './Post'
import styles from './PostsList.module.css'

const PostsList = () => {
    return (
        <ul className={styles.posts}>
            <Post author='Delbusque' text='Next.js is so cool ...' />
            <Post author='Max' text='JS is awesome !' />
        </ul>
    )
}

export default PostsList