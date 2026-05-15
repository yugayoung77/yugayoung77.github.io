import React from "react";

const Navigation = ({ activeSection, isHomeVisible }) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "career", label: "Skill + Career" },
        { id: "project", label: "Project" },
        { id: "activities", label: "Education + Cert + ETC" },
    ];

    return (
        <nav className="fixed top-0 w-full z-30 bg-white/70 backdrop-blur-lg py-4">
            <div className="relative w-full flex items-center justify-center">

                {!isHomeVisible && (
                    <div className="absolute left-4 hidden md:block">
                        <button
                            onClick={() => (window.location.href = "mailto:yoostradamuse@gmail.com")}
                            className="bg-white px-4 py-2 border border-gray-500 rounded-full text-gray-500 text-sm hover:bg-gray-200"
                        >
                            CONTACT
                        </button>
                    </div>
                )}

                {/* 중앙 네비게이션 */}
                <div className="flex items-center space-x-8 text-gray-500">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`rounded-[30px] px-4 py-2 transition-all duration-300 font-normal text-xs
            ${activeSection === item.id ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Resume 버튼 (오른쪽 고정) */}
                {!isHomeVisible && (
                    <div className="absolute right-4 hidden md:block">
                        <button
                            onClick={() =>
                                window.open("https://www.notion.so/YOO-GA-YOUNG-10559abdc62a808f8657d459cc5ffdb8", "_blank")
                            }
                            className="bg-white px-4 py-2 border border-gray-500 rounded-full text-gray-500 text-sm hover:bg-gray-200"
                        >
                            RESUME
                        </button>
                    </div>
                )}
            </div>
        </nav>

    );
};


export default Navigation;
