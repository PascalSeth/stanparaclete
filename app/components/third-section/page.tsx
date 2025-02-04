import Image from "next/image";

const ThirdSection = () => {
    return (
        <div className="p-10 bg-[#171720]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Title */}
                <div className="text-center md:text-left">
                    <h2 className="
                        text-4xl md:text-6xl
                        bg-gradient-to-l
                        from-yellow-300
                        to-blue-300
                        bg-clip-text
                        font-bold
                        text-transparent
                    ">
                        Empower Your Business with Custom Software
                    </h2>
                </div>

                {/* Features Section */}
                <div className="grid text-white gap-8">
                    <div className="flex items-start gap-5">
                        <Image
                            src="/images/icon-store.png"
                            alt="Custom Solutions"
                            width={70}
                            height={70}
                        />
                        <p className="text-lg">
                            Launch your business with bespoke software solutions that perfectly align with your brand identity and vision.
                        </p>
                    </div>
                    <div className="flex items-start gap-5">
                        <Image
                            src="/images/icon-product.png"
                            alt="Scalable Products"
                            width={70}
                            height={70}
                        />
                        <p className="text-lg">
                            Build scalable platforms with seamless product and service management capabilities.
                        </p>
                    </div>
                    <div className="flex items-start gap-5">
                        <Image
                            src="/images/icon-analytics.png"
                            alt="Advanced Analytics"
                            width={70}
                            height={70}
                        />
                        <p className="text-lg">
                            Gain deep insights with analytics tools that enhance decision-making and boost performance.
                        </p>
                    </div>
                    <div className="flex items-start gap-5">
                        <Image
                            src="/images/icon-shield.png"
                            alt="Robust Security"
                            width={70}
                            height={70}
                        />
                        <p className="text-lg">
                            Experience enterprise-grade security that protects your data and builds trust with your clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
