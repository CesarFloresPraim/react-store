export default function Rejected() {
    return (

        <>
            {/*
      This example requires updating your template:

      ```
      <html class="h-full">
      <body class="h-full">
      ```
    */}
            <div className="bg-white min-h-full flex flex-col lg:relative">
                <div className="flex-grow flex flex-col">
                    <main className="flex-grow flex flex-col bg-white">
                        <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
                            <div className="flex-shrink-0 pt-10 sm:pt-16">
                                <a href="/" className="inline-flex">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-12 w-auto"
                                        src={logo}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Payment rejected</p>
                                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                    Sorry
                                </h1>
                                <p className="mt-2 text-base text-gray-500">We werent unable to process your payment,</p>
                                <p className="mt-1 text-base">Please contact your bank or try again.</p>
                                <div className="mt-6">
                                    <a href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                                        Continue shopping<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="flex-shrink-0 bg-gray-50">
                        <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
                            <nav className="flex space-x-4">
                                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                                    Contact Support
                                </a>
                                <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                                    Status
                                </a>
                                <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">
                                    Facebook
                                </a>
                            </nav>
                        </div>
                    </footer>
                </div>
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://binarasolutions.s3.us-east-2.amazonaws.com/inpack/thanks.jpeg"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
