import React, { useState, useEffect } from "react";
import { SiTistory } from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";
import { RiNotionFill } from "react-icons/ri";

const Home = () => {
    const [typingText, setTypingText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const words = [
        { text: "FLUTTER", color: "text-purple-500" },
        { text: "REACT", color: "text-blue-500" },
        { text: "HTML", color: "text-orange-500" },
    ];

    useEffect(() => {
        const currentWord = words[wordIndex].text;
        let typingSpeed = isDeleting ? 50 : 150;

        const handleTyping = () => {
            if (!isDeleting && letterIndex < currentWord.length) {
                setTypingText((prev) => prev + currentWord[letterIndex]);
                setLetterIndex((prev) => prev + 1);
            } else if (isDeleting && letterIndex > 0) {
                setTypingText((prev) => prev.slice(0, -1));
                setLetterIndex((prev) => prev - 1);
            } else if (!isDeleting && letterIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && letterIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [letterIndex, isDeleting, wordIndex]);


    return (
        <div className="flex flex-col items-center mt-16">
            <p className="text-6xl font-bold"><span className="font-doodle">YOO</span> <span className="font-abril">GA-YOUNG</span></p>

            <p className="mt-8 text-6xl font-bold h-16 flex items-center justify-center">
                <span
                    className={`font-vt ${words[wordIndex].color}`}
                    style={{ minWidth: "10ch", display: "inline-block", textAlign: "center" }}
                >
                    {typingText}
                </span>
            </p>


            <p className="mt-8 text-6xl font-bold text-center">FRONT <span className="font-satisfy">End</span> DEVELOPER - .</p>

            <img
                src={`/images/profile.png`}
                alt='profile'
                className="mt-12"
            />

            <p className="mt-8 text-center text-gray-600">
                안녕하세요, 프론트엔드 개발자 유가영입니다
                <br />
                <br />
                세상의 변화에 맞춰 새로운 기술과
                <br />
                트렌드를 배우고 모두와 함께 재미있고 더 발전된
                <br />
                결과를 만드는 개발자가 되고 싶습니다
                <br />
                <br />
                문의는 아래의 연락처로 자유롭게 주세요 :D
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
                <button
                    onClick={() => (window.location.href = "mailto:yugayoung77@gmail.com")}
                    className="bg-white w-28 py-2 border border-gray-500 rounded-full text-gray-500 text-sm hover:bg-black hover:text-white"
                >
                    CONTACT
                </button>

                <button
                    onClick={() => window.open("https://www.notion.so/YOO-GA-YOUNG-10559abdc62a808f8657d459cc5ffdb8?source=copy_link", "_blank")}
                    className="bg-white w-28 py-2 border border-gray-500 rounded-full text-gray-500 text-sm hover:bg-black hover:text-white mt-4"
                >
                    RESUME
                </button>
            </div>

            <div className="flex justify-center space-x-4 mt-24 mb-24">
                {/* <button
                onClick={() => window.open("https://.tistory.com", "_blank")} 
                className="group w-10 h-10 bg-black rounded-full text-white flex items-center justify-center">
                    <SiTistory />
                </button> */}
                <button
                onClick={() => window.open("https://github.com/yugayoung77", "_blank")} 
                className="group w-10 h-10 bg-black rounded-full text-white flex items-center justify-center">
                    <VscGithubAlt className="text-2xl" />
                </button>
                <button
                    onClick={() => window.open("https://www.notion.so/YOO-GA-YOUNG-10559abdc62a808f8657d459cc5ffdb8?source=copy_link", "_blank")}
                    className="group w-10 h-10 bg-black rounded-full text-white flex items-center justify-center"
                >
                    <RiNotionFill className="text-2xl pl-[1.5px]" />
                </button>
            </div>
        </div>
    );
};

export default Home;
