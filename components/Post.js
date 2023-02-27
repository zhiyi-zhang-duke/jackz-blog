import Link from 'next/link'
import Image from 'next/image'
import image1 from '../public/images/posts/img1.jpg'

let Post = ({ post }) => {

  return (
    <div className='card'>
      {/* These next two don't work */}
      {/* <img src={post.frontmatter.cover_image} alt='' /> */}
      <Image 
        src='https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg' 
        alt='' 
        width={300}
        height={225} 
        loading="eager"
      />
      {/* <img src="/img1.jpg" alt='' /> */}
      {/* Below works */}
      {/* <img src="/jackz-blog/_next/static/media/img1.3130beb2.jpg" alt='' /> */}
      {/* <img src={image1.src} alt='' /> */}

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