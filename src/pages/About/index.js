import Layout from "../components/Layout";

function AboutPage() {
    return ( 
        <Layout>
   
   <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
  <div className="lg:flex items-center justify-between">
    <div className="lg:w-1/3">
      <h1 className="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Stadium-star</h1>
      <p className="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture.</p>
      <button role="button" aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-white flex items-center hover:underline">
        View Catalogue
        <svg className="ml-2 mt-1 dark:text-white" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.33325 4H10.6666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 6.66667L10.6667 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 1.33398L10.6667 4.00065" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div className="lg:w-7/12 lg:mt-0 mt-8">
      <div className="w-full h-full bg-red-200">
        <img src="https://images.unsplash.com/photo-1599158150601-1417ebbaafdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YWRpdW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="apartment design" className="w-full h-48 object-cover sm:block hidden" />
        <img src="https://images.unsplash.com/photo-1599158150601-1417ebbaafdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YWRpdW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="apartment design" className="sm:hidden block w-full" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
        <img src="https://images.unsplash.com/photo-1620715193430-bc9893e73654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YWRpdW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="w-full h-44 object-cover" alt="kitchen" />
        <img src="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RhZGl1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="w-full h-44 object-cover" alt="kitchen" />
      </div>
    </div>
    </div>
    </div>   
   
    <div className="container">
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Stadium-Star</h3>
                <p className="leading-tight text-justify">
                  Here you can find your dreams stadiums, and make your team happy!
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Who we are?</h3>
                <p className="leading-tight text-justify">
                  We are selling professional and local stadiums, in every where
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">News</h3>
                <p className="leading-tight text-justify">
                  Are you ready for FIFA 2022?, we have new complited stadiums for sale 
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Future stadiums</h3>
                <p className="leading-tight text-justify">
                  More than 20 stadiums are being ready for sale for new owners! 
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Help</h3>
                <p className="leading-tight text-justify">
                  You can learn about stadium buisseness and selling with us!
                </p>
              </div>
            </div>
          </div>
        </div>

        </Layout>
     );
}

export default AboutPage;

