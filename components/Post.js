import Link from 'next/link'
import Image from 'next/image'

let Post = ({ post }) => {

  return (
    <div className='card'>
      <Image 
        src={`/jackz-blog/images/posts/${post.frontmatter.cover_image}`}
        alt='' 
        width={300}
        height={225} 
        loading="eager"
      />    
      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}
export default Post;