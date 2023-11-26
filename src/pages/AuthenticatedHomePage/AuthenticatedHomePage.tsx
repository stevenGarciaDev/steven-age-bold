import { FaHome } from "react-icons/fa";
import ViewActivity from "../../components/ViewActivity";
import ProgramProgressPreview from "../../components/ProgramProgressPreview";
import { IoGridOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import useScrollToTop from "../../hooks/useScrollToTop";

const AuthenticatedHomePage = () => {
    useScrollToTop();

    return (
        <div id="top" className="max-w-6xl mx-auto py-8 px-4 scroll-mt-24">
            <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-row items-center space-x-2 mb-6">
                <span className="text-2xl self-center bg-[#f2f1fb] p-3 rounded-full text-purple-primary">
                    <FaHome />
                </span>
                <span>Welcome back, Steven! - Front End Engineer</span>
            </h1>
            <section className="grid lg:grid-cols-2 lg:gap-4">
                <aside>
                    <ViewActivity />
                    <hr className="border-b my-6 mx-8" />
                </aside>
                <div className="space-y-6">
                    <div>
                        <ProgramProgressPreview
                            title={
                                <a
                                    href="./assets/StevenGarciaResume.pdf"
                                    target="_blank"
                                >
                                    My Resume
                                </a>
                            }
                            titleIcon={<IoGridOutline />}
                            titleColor="purple"
                            description="JavaScript"
                            imagePath="./assets/images/dumbbellCurl.png"
                            footerTitle="Always coding & learning"
                            footerDescription="Front End Engineer"
                        />
                    </div>
                    <div>
                        <ProgramProgressPreview
                            title={
                                <a
                                    href="mailto:stevengarciadev@gmail.com"
                                    target="_blank"
                                >
                                    Email Me
                                </a>
                            }
                            titleIcon={<MdLiveTv />}
                            titleColor="blue"
                            description="stevengarciadev@gmail.com"
                            imagePath="./assets/images/codingInOffice.jpg"
                            footerTitle="Always coding & learning"
                            footerDescription="Front End Engineer"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuthenticatedHomePage;
