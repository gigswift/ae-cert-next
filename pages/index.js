/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ooKg8stRJRx
 */
import Link from "next/link"

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#bd1e59]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Welcome to Pizza Paradise
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Serving the best pizza in town since 2023.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#bd1e59] shadow transition-colors hover:bg-zinc-100 hover:text-[#bd1e59] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Order Now
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-100 hover:text-[#bd1e59] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Specials</h2>
          <div className="grid w-full grid-cols-3 gap-10 items-stretch justify-center md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-8" />
          </div>
        </div>
      </section>
    </>
  )
}







