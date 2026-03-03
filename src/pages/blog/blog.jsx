import React from 'react'
import BlogHeader from '../../components/blog/blog-header'
import OurBlogs from '../../components/blog/our-blogs'

const Blog = () => {
    return (
        <>
            <div>
                <>
                    {/* Page Header Start */}
                    <BlogHeader />
                    {/* Page Header End */}
                    {/* Latest News Section Start */}
                    <OurBlogs />
                    {/* Latest News Section End */}
                </>

            </div>
        </>
    )
}

export default Blog