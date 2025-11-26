import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-blue-950">
            {/* ส่วนที่ บน 1*/}
            <section className="container mx-auto flex flex-row justify-between p-6 lg:px-8">

                <div className="flex flex-col items-start gap-10 ">
                    <div className="w-md">
                        <h2 className="text-2xl font-bold text-white">
                            Ready to launch you next Project ?
                        </h2>
                        <p className="text-zinc-300 font-extralight pt-4">
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <button className="text-white font-medium bg-blue-700 p-2 rounded-md">
                        <Link href="#">Get started a project</Link>
                    </button>
                </div>
            </section>

            {/* เส้นใต้ */}
            <hr className="text-[#272B39] w-[84%] mx-auto"/>

            {/* ส่วนล่าง 2*/}
            <section className="container mx-auto flex flex-row justify-between p-6 lg:px-8">
                
            </section>
        </footer>
    )
}