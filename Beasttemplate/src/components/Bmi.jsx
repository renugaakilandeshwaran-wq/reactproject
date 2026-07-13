import { useState } from "react";
import fac5 from "../assets/fac5.png";

const BMICalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;
        if (!w || !h) return;
        setBmi((w / (h * h)).toFixed(1));
    };

    return (
        <section
            id="bmi"
            className="relative py-16 lg:py-24 bg-cover bg-center overflow-hidden "
            style={{ backgroundImage: `url(${fac5})` }}
        >
            <div className="absolute inset-0 bg-beast-dark/40" />

            <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
                <div className="hidden lg:block" />

                <div className="bg-white p-8 sm:p-10 shadow-2xl ">
                    <h3 className="font-heading font-bold uppercase text-2xl mb-1 text-center text-beast-red">
                        Calculate Your
                    </h3>
                    <p className=" uppercase text-sm tracking-widest text-center font-semibold mb-6">
                        Body Mass Index
                    </p>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs uppercase font-semibold text-beast-gray mb-1">
                                Height
                            </label>
                            <div className="flex items-center border-b border-gray-300 pb-1">
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="w-full outline-none text-sm py-1"

                                />
                                <span className="text-xs text-beast-gray">Cm</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase font-semibold text-beast-gray mb-1">
                                Weight
                            </label>
                            <div className="flex items-center border-b border-gray-300 pb-1">
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full outline-none text-sm py-1"

                                />
                                <span className="text-xs text-beast-gray">Kg</span>
                            </div>
                        </div>



                        <div>
                            <label className="block text-xs uppercase font-semibold text-beast-gray mb-1">
                                Age
                            </label>
                            <div className="flex items-center border-b border-gray-300 pb-1">
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full outline-none text-sm py-1"

                                />
                                <span className="text-xs text-beast-gray">Year</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase font-semibold text-beast-gray mb-1">
                                Gender
                            </label>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full outline-none text-sm py-2 border-b border-gray-300 bg-transparent"
                            >

                            </select>

                        </div>

                    </div>

                    <button
                        onClick={calculateBMI}
                        className="mt-8 w-full bg-[#FA2A20]  text-white uppercase text-2xl font-semibold py-4 flex items-center justify-center gap-2 hover:bg-beast-dark transition-colors"
                    >
                        Calculate BMI
                    </button>

                    {bmi && (
                        <p className="mt-4 text-center text-beast-dark font-semibold">
                            Your BMI is <span className="text-beast-red">{bmi}</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BMICalculator;