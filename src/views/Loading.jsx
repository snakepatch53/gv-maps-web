import PageContent from "../components/PageContent";
import { cls } from "../lib/utils";

export default function Loading({ classWrapper = "" }) {
    return (
        <PageContent
            className={cls(
                "flex justify-center items-center h-screen w-full px-[--padding]",
                classWrapper
            )}
        >
            <div className="container flex flex-col justify-center items-center gap-2">
                <svg viewBox="0 0 38 38" className="max-w-14">
                    <defs>
                        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                            <stop stopColor="#40c886" stopOpacity="0" offset="0%" />
                            <stop stopColor="#40c886" stopOpacity=".631" offset="63.146%" />
                            <stop stopColor="#40c886" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)">
                            <path
                                d="M36 18c0-9.94-8.06-18-18-18"
                                id="Oval-2"
                                stroke="url(#a)"
                                strokeWidth="2"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="0.9s"
                                    repeatCount="indefinite"
                                />
                            </path>
                            <circle fill="#fff" cx="36" cy="18" r="1">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="0.9s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>
                    </g>
                </svg>
                <div className="ml-4 text-xl font-bold font-title text-gray-800">Loading</div>
            </div>
        </PageContent>
    );
}
