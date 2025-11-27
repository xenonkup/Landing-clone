import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full bg-blue-950">
            {/* ส่วนที่ บน 1*/}
            <section className="container mx-auto flex flex-row justify-between p-6 lg:px-8 " aria-label="ไปหน้าแรก">

                <div className="flex flex-col items-start gap-10 ">
                    <div className="w-md">
                        <h2 className="text-2xl font-bold text-white">
                            Ready to launch you next Project ?
                        </h2>
                        <p className="text-[#AEB0B6] font-extralight pt-4">
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <button className="text-white font-medium bg-blue-700 p-2 rounded-md">
                        <Link href="#">
                            Get started a project
                        </Link>
                    </button>
                </div>
            </section>

            {/* เส้นใต้ */}
            <hr className="text-[#272B39] w-[84%] mx-auto" />

            {/* ส่วนล่าง 2*/}
            <section className="container mx-auto p-6 lg:px-8">
                <div className="grid grid-cols-5 gap-10 justify-between">

                    {/* Colum 1 */}
                    <div>

                        {/* title */}
                        <h2 className="text-2xl font-bold text-white">
                            Brainwave.io
                        </h2>
                        <p className="text-[#AEB0B6] font-light pt-10">
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>

                        {/* ICONS */}
                        <div className="flex flex-row space-x-5 pt-10">
                            <Link href="#" aria-label="ไปหน้าแรก">
                                <Image 
                                    src="/assets/icon/logo-twitter.png"
                                    alt="Icon-Twitter"
                                    width={18}
                                    height={18}
                                />
                            </Link>
                            <Link href="#" aria-label="ไปหน้าแรก">
                                <Image 
                                    src="/assets/icon/logo-facebook.png"
                                    alt="Icon-Twitter"
                                    width={18}
                                    height={18}
                                />
                            </Link>
                            <Link href="#" aria-label="ไปหน้าแรก">
                                <Image 
                                    src="/assets/icon/logo-instagram.png"
                                    alt="Icon-Twitter"
                                    width={18}
                                    height={18}
                                />
                            </Link>
                            <Link href="#" aria-label="ไปหน้าแรก">
                                <Image 
                                    src="/assets/icon/logo-linkedin.png"
                                    alt="Icon-Twitter"
                                    width={18}
                                    height={18}
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Colum 2 */}
                    <div className="">
                        <h3 className="text-[#AEB0B6]">Company</h3>
                        <ul className="pt-5">
                            <li className="text-white">
                                <Link href="/">Abouts us</Link>
                            </li>
                            <li className="text-white">
                                <Link href="/">Contact Us</Link>
                            </li>
                            <li className="text-white">
                                <Link href="/">Careers</Link>
                            </li>
                            <li className="text-white">
                                <Link href="/">Press</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colum 2 */}
                    <div>
                        <h3 className="text-[#AEB0B6]">Product</h3> 
                        <ul className="pt-5">
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Features</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Pricing</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">News</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Help desk</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Support</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colum 3 */}
                    <div>
                        <h3 className="text-[#AEB0B6]">Service</h3>
                        <ul className="pt-5">
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Features</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Pricing</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">News</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Help desk</Link>
                                </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Support</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colum 4 */}
                    <div>
                        <h3 className="text-[#AEB0B6]">Legel</h3>
                        <ul className="pt-5">
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Terms & Conditions</Link>
                            </li>
                            <li className="text-[#FFFFFF]">
                                <Link href="#">Return Policy</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </footer>
    )
}