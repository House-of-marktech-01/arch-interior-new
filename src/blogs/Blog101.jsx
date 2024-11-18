import React from 'react'


const Blog101 = () => {
  return (
    <div className="">
        <header>
        <div className="relative flex items-center justify-center h-[50vh] bg-gray-100">
          <img
            src='https://hommes.studio/wp-content/uploads/geral-2-scaled-1.jpg'
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant">
              10 Interior Design Trends to Elevate Your Space in 2024
              </h1>
              
            </div>
          </div>
        </div>
      </header>
  <div className="max-w-4xl mx-auto py-10 px-4">
  
    <header className="text-center mb-10">
      <h1 className="text-4xl font-bold">10 Interior Design Trends to Elevate Your Space in 2024</h1>
      <p className="text-lg text-gray-600 mt-2">Transform your home or office into a masterpiece with these inspiring trends.</p>
    </header>

    <section className="mb-8">
      <p className="text-lg">
      Transform your home or office into a masterpiece with these top 10 interior design trends of
 2024. Whether you're an interior enthusiast or looking to renovate, these ideas will inspire
 creativity and sophistication</p>
    </section>

    <section className="space-y-10">
    
      <div className=" shadow-2xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold">1. Biophilic Design</h2>
        <p className="mt-2">Bring the outdoors inside by incorporating natural elements like plants, wood, and stone into your interiors. Biophilic design promotes relaxation and a connection to nature.</p>
        <img src="https://willieduggan.com/content/uploads/2019/02/Smart-Dubai-20170720-DWP-07.jpg" alt="Biophilic design example" className="mt-4 rounded-md"/>
      </div>

      <div className=" shadow-2xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold">2. Minimalism with Personality</h2>
        <p className="mt-2">Minimalism doesn’t have to be boring! Add bold accents like vibrant artwork, statement furniture, or textured decor to make your minimalist space truly yours.</p>
        <img src="https://www.minimalandmodern.com/cdn/shop/articles/unique-furniture-for-minimalist-spaces.jpg?v=1708663742" alt="Minimalist interior with bold accents" className="mt-4 rounded-md"/>
      </div>


      <div className=" shadow-2xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold">3. SmartHomes</h2>
        <p className="mt-2">Integrate technology into your living spaces with smart lighting, automated blinds, and AI-powered home assistants that blend seamlessly with stylish interiors.</p>
        <img src="https://media.licdn.com/dms/image/D5612AQG5OP7h5jCihA/article-cover_image-shrink_720_1280/0/1694260186461?e=2147483647&v=beta&t=_Yj-TGGgqd3eYeMa6B0wpBfnzZPZZh5i5xB69fV3vjI" alt="Smart home interior" className="mt-4 rounded-md"/>
      </div>


      <div className=" shadow-2xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold ">4. Earthy Tones</h2>
        <p className=" mt-2">Earthy tones like terracotta, olive green, and sandy beige are in. They create a warm, inviting ambiance while being sustainable and timeless.</p>
        <img src="https://blog.canadianloghomes.com/wp-content/uploads/2023/09/decorating-with-earth-tones.jpg" alt="Earthy tone interior" className="mt-4 rounded-md"/>
      </div>
    </section>


   


    <section className="mt-10">
      <p className="text-lg">
        Embrace these interior design trends to transform your home or office into a unique and stylish haven in 2024. Whether it’s integrating natural elements or adopting smart technology, let your space reflect your personality and creativity.
      </p>
    </section>
  </div>
</div>
  )
}

export default Blog101
