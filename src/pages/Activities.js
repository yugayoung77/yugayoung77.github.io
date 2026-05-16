import React from "react";

const Activities = () => {
    const educationData = [
        {
            year: "2022.04 - 2023.01",
            title: "그린컴퓨터아카데미",
            subtitle: "[디지털컨버전스] 뷰(Vue) 활용 프론트엔드",
        },
        {
            year: "2018.02 - 2022.02",
            title: "동서대학교",
            subtitle: "국제 무역 통상학 전공",
        },
        {
            year: "2012.02 - 2015.02",
            title: "부산 여자 상업고등학교",
            subtitle: "멀티 미디어 학과",
        },
    ];

    const activitiesData = [
        {
            year: "2025.11 ~",
            title: "커피빈 코리아 근무",
            subtitle: "매장 관리 및 고객응대",
        },
        {
            year: "2025.05 - 2025.09",
            title: "아디다스 키즈 근무",
            subtitle: "매장 운영 및 고객응대",
        },
        {
            year: "2022.03 - 2022.04",
            title: "청년 고용 노동부 홍보 BI 공모전",
            subtitle: "공모전 참여상",
        },
        {
            year: "2021.08 - 2022.07",
            title: "신세계 백화점 팩토리 스토어 근무",
            subtitle: "의류 매장 재고 관리 및 캐셔",
        },
    ];


    return (
        <div className="min-h-screen mt-44">

            <section>
                <h2 className="text-3xl font-bold mb-2 text-center">ED<span className="font-marker">U</span>CATION</h2>
                <h2 className="text-base font-normal text-center mb-8 text-blue-500">교육 수료 타임라인입니다</h2>

                <div>
                    {educationData.map((education, index) => (
                        <div key={index} className="flex">
                            <div className="w-52 text-right pr-4">
                                <h3 className="text-base italic text-black">{education.year}</h3>
                            </div>

                            <div className="relative w-20 flex flex-col items-center">
                                <div className={`bg-gray-200 w-0.5 ${index === 0 ? "mt-4 h-full" : index === 2 ? "h-[10px]" : "h-full"}`}></div>
                                <div className="absolute top-0 w-2 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 mt-3.5"></div>
                                <div className="absolute bottom-0 w-2 h- bg-gray-200 rounded-full transform translate-y-1/2"></div>
                            </div>

                            <div className="w-4/5 flex flex-col">
                                <h4 className="text-xl font-bold">{education.title}</h4>
                                <div className="text-gray-800 font-normal text-sm ml-4 mt-2 mb-16">{education.subtitle}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-44">
                <h2 className="text-3xl font-bold mb-2 text-center">C<span className="font-marker">E</span>RT</h2>
                <h2 className="text-base font-normal text-center mb-12 text-blue-500">마우스를 올리면 해당 정보를 확인할 수 있습니다</h2>

                <div className="flex justify-center gap-8">
                    {[
                        {
                            issuer: "대한상공회의소<br/><br/>사무<br/><br/>2013.12.27",
                            title: "컴퓨터 활용 능력 2급",
                        },
                        {
                            issuer: "한국생산성본부<br/><br/>아래한글·한글엑셀<br/>A등급<br/><br/>2014.02.27",
                            title: "ITQ 한글&워드",
                        },
                        {
                            issuer: "한국세무사회<br/><br/>58회<br/><br/>2014.04.24",
                            title: "전산회계 2급",
                        },
                    ].map((cert, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center bg-white w-40 h-[270px] rounded-lg transition-all duration-300"
                        >
                            <div className="text-6xl mb-4">📄</div>

                            <div
                                className="text-gray-400 text-xs text-center rounded transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 group-hover:mb-6 group-hover:mt-2"
                                dangerouslySetInnerHTML={{ __html: cert.issuer }}
                            ></div>

                            <span className="text-sm font-medium text-center">
                                {cert.title}
                            </span>
                        </div>
                    ))}
                </div>
            </section>



            <section className="mt-24">
                <h2 className="text-3xl font-bold mb-2 text-center">E<span className="font-marker">T</span>C.</h2>
                <h2 className="text-base font-normal text-center mb-8 text-blue-500">외부 활동을 표시한 타임라인입니다</h2>

                <div>
                    {activitiesData.map((activity, index) => (
                        <div key={index} className="flex">
                            <div className="w-52 text-right pr-4">
                                <h3 className="text-base italic text-black">{activity.year}</h3>
                            </div>

                            <div className="relative w-20 flex flex-col items-center">
                                <div className={`bg-gray-200 w-0.5 ${index === 0 ? "mt-4 h-full" : index === 3 ? "h-[10px]" : "h-full"}`}></div>

                                <div className="absolute top-0 w-2 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 mt-3.5"></div>
                                <div className="absolute bottom-0 w-2 h- bg-gray-200 rounded-full transform translate-y-1/2"></div>
                            </div>

                            <div className="w-4/5 flex flex-col">
                                <h4 className="text-xl font-bold">{activity.title}</h4>
                                <p className="text-gray-800 font-normal text-sm ml-4 mt-2 mb-16">{activity.subtitle}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Activities;
