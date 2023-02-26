import Link from 'next/link'
import Image from 'next/image'
import image1 from '../public/images/posts/img1.jpg'

let Post = ({ post }) => {

  return (
    <div className='card'>
      {/* These next two don't work */}
      {/* <img src={post.frontmatter.cover_image} alt='' /> */}
      {/* <Image src='img1.jpg' alt='' width='100' height='100'/> */}
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