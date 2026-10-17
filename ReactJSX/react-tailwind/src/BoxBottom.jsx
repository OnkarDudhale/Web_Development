export default function BoxBottom() {
    return (
        <div className="flex flex-1 flex-col items-center pt-10 pb-10 px-6 sm:px-10 lg:px-20 xl:px-40 md:justify-between">
            <h2 className="text-2xl sm:text-3xl xl:text-5xl text-black font-bold text-center">
                Stay up to date with the Latest!
            </h2>

            <p className="text-lg sm:text-xl xl:text-2xl text-black font-medium text-center ">
                Subscribe to our newsletter for the latest news straight into your inbox
            </p>

            <form
                className="flex flex-col items-center justify-between mt-10 w-full max-w-md space-y-4"
            >
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full text-center bg-gray-200 h-12 xl:h-16 rounded-lg font-medium text-gray-500 text-base xl:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full text-center bg-blue-500 h-12 xl:h-16 rounded-2xl cursor-pointer text-white font-semibold text-base xl:text-xl hover:bg-blue-600 transition"
                >
                    Subscribe Now
                </button>
            </form>

            <p className="font-medium mt-8 text-base xl:text-lg text-center text-gray-600">
                We value your privacy
            </p>
        </div>
    );
}
