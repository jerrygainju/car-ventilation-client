import { useState } from "react";
import Select from "react-select";


const generateParkingOptions = () => {
    return [
        { value: '0.3', label: '0.3' },
        { value: '0.5', label: '0.5' },
        { value: '0.7', label: '0.7' },
        { value: '1.0', label: '1.0' },
        { value: '2.4', label: '2.4' },
    ];
};

const generateStaffExposureOptions = () => {
    return [
        { value: '1', label: '1' },
        { value: '1.8', label: '1.8' }
    ]
}

const generateVehicleTypeFactor = () => {
    return [
        { value: '1.0', label: '1' },
        { value: '0.1', label: '0.1' },
        { value: '0.25', label: '0.25' },
        { value: '2.4', label: '2.4' }
    ]
}

const generateStaffUsageFactor = () => {
    return [
        { value: '1', label: '1' },
        { value: '1.8', label: '1.8' }
    ]
}
const CalculationTable = () => {
    const [inputFactorFz, setInputFz] = useState('');
    const [inputFactorFa, setInputFa] = useState('');
    const [inputStaffEz, setInputEz] = useState('');
    const [inputStaffEa, setInputEa] = useState('');
    const [inputVTypeTz, setInputTz] = useState('');
    const [inputVTypeTa, setInputTa] = useState('');
    const [inputValuePz, setInputValuePz] = useState('');
    const [inputValuePa, setInputValuePa] = useState('');
    const [calculatedValue, setCalculatedValue] = useState('');
    const [calculatedValueCa, setCalculatedValueCa] = useState('');
    const [calculatedValueAz, setCalculatedValueAz] = useState('');
    const [calculatedValueAa, setCalculatedValueAa] = useState('');
    const [calculatedValueBz, setCalculatedValueBz] = useState('');
    const [calculatedValueBa, setCalculatedValueBa] = useState('');
    const [calculatedValueC1z, setCalculatedValueC1z] = useState('');
    const [calculatedValueC1a, setCalculatedValueC1a] = useState('');



    const parkingOptions = generateParkingOptions();
    const vehicleOptions = generateVehicleTypeFactor();
    const exposureOptions = generateStaffExposureOptions();
    const factorOptions = generateStaffUsageFactor();


    const calculateValues = () => {
        const Pz = parseFloat(inputValuePz);
        const Pa = parseFloat(inputValuePa);
        const n1z = parseFloat(document.getElementById('n1z').value);
        const d1z = parseFloat(document.getElementById('d1z').value);
        const n2z = parseFloat(document.getElementById('n2z').value);
        const d2z = parseFloat(document.getElementById('d2z').value);

        const n1a = parseFloat(document.getElementById('n1a').value);
        const d1a = parseFloat(document.getElementById('d1a').value);
        const n2a = parseFloat(document.getElementById('n2a').value);
        const d2a = parseFloat(document.getElementById('d2a').value);

        const resultCz = Pz * (100 * n1z + n1z * d1z + n2z * d2z);
        const resultCa = Pa * (100 * n1a + n1a * d1a + n2a * d2a);

        setCalculatedValue(resultCz.toFixed(2));
        setCalculatedValueCa(resultCa.toFixed(2));
        return { resultCa, resultCz }
    };
    const calculateAValues = () => {
        const { resultCz, resultCa } = calculateValues()
        const Ez = parseFloat(inputStaffEz)
        const Ea = parseFloat(inputStaffEa)
        const Tz = parseFloat(inputVTypeTz)
        const Ta = parseFloat(inputVTypeTa)
        const resultAz = 0.85 * resultCz * Ez * Tz;
        const resultAa = 0.85 * resultCa * Ea * Ta;
        setCalculatedValueAz(resultAz.toFixed(2))
        setCalculatedValueAa(resultAa.toFixed(2))
    }

    const calculateBValues = () => {
        const Fz = parseFloat(inputFactorFz)
        const Fa = parseFloat(inputFactorFa)
        const Tz = parseFloat(inputVTypeTz)
        const Ta = parseFloat(inputVTypeTa)

        const resutlBz = 2000 * Fz * Tz
        const resutlBa = 2000 * Fa * Ta
        setCalculatedValueBz(resutlBz.toFixed(2))
        setCalculatedValueBa(resutlBa.toFixed(2))

    }

    const calculateCValues = () => {
        const Az = parseFloat(document.getElementById("A1z").value)
        const Aa = parseFloat(document.getElementById("A1a").value)

        const resultAz = 2.5 * Az
        const resultAa = 2.5 * Aa
        console.log(resultAz, 'aaaa');

        setCalculatedValueC1z(resultAz.toFixed(2))
        setCalculatedValueC1a(resultAa.toFixed(2))
    }

    return (
        <div>
            <div className="text-lg font-bold text-center pt-16">
                RL & RAC Car Park Ventilation Calculation

            </div>
            <div className="text-sm font-bold text-center ">
                Based On AS 1668.2 - 2012
            </div>

            <div className="content-center">
                <table className="border border-collapse mt-4 text-sm w-8/12 mx-auto ">
                    <tr>
                        <th className="border py-3">
                            Interpretation
                        </th>
                        <th className="border px-8">
                            Variable
                        </th>
                        <th className="border px-10">
                            <div>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Basement"
                                className="w-32 py-2 bg-slate-50"
                            />

                        </th>
                        <th className="border px-10">
                            <input
                                type="text"
                                placeholder="Enter Basement"
                                className="w-32 py-2 bg-slate-50"
                            />
                        </th>
                        <th className="border px-4">
                            Action
                        </th>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            No of parking spaces in the zone of level under consideration
                        </td>
                        <td className="border pl-16">
                            n1
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n1z"
                                placeholder="Enter value n1(z)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n1a"
                                placeholder="Enter value n1(a)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            No of parking spaces situated in other parts of the car park,
                            having exit routes passing through the zone or level under consideration

                        </td>
                        <td className="border pl-16">
                            n2
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n2z"
                                placeholder="Enter value n2(z)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n2a"
                                placeholder="Enter value n2(a)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            Parking usage factor (Table 4.1)
                        </td>
                        <td className="border pl-16">
                            p
                        </td>
                        <td className="border">
                            <Select
                                options={parkingOptions}
                                placeholder="Enter value p(z)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={parkingOptions.find(option => option.value === inputValuePz)}
                                onChange={(selectedOption) => setInputValuePz(selectedOption.value)}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={parkingOptions}
                                placeholder="Enter value p(a)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                    }),
                                }}
                                value={parkingOptions.find(option => option.value === inputValuePa)}
                                onChange={(selectedOption) => setInputValuePa(selectedOption.value)} />

                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            Average driving distance, in meters, within the zone or level under consideration
                            for the exit of a car parked there
                        </td>
                        <td className="border pl-16">
                            d1
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d1z"
                                placeholder="Enter value d1(z)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d1a"
                                placeholder="Enter value d1(a)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>

                    </tr>
                    <tr>
                        <td className="border p-2">
                            The average driving distance, in mtrs, within the zone or level under consideration
                            for the exit of a car whose exit routes passes through the zone or level under consideration
                        </td>
                        <td className="border pl-16">
                            d2
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d2z"
                                placeholder="Enter value d2(z)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d2a"
                                placeholder="Enter value d2(a)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            The Staff Exposure Factor (Table-4.3)
                        </td>
                        <td className="border pl-16">
                            E
                        </td>
                        <td className="border">
                            <Select
                                options={exposureOptions}
                                placeholder="Enter value E(z)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={exposureOptions.find(option => option.value === inputStaffEz)}
                                onChange={(selectedOption) => setInputEz(selectedOption.value)}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={exposureOptions}
                                placeholder="Enter value E(a)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={exposureOptions.find(option => option.value === inputStaffEa)}
                                onChange={(selectedOption) => setInputEa(selectedOption.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            The Vehicle Type Factor (Table 4.2)
                        </td>
                        <td className="border pl-16">
                            T
                        </td>
                        <td className="border">
                            <Select
                                options={vehicleOptions}
                                placeholder="Enter value T(z)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={vehicleOptions.find(option => option.value === inputVTypeTz)}
                                onChange={(selectedOption) => setInputTz(selectedOption.value)}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={vehicleOptions}
                                placeholder="Enter value T(z)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={vehicleOptions.find(option => option.value === inputVTypeTa)}
                                onChange={(selectedOption) => setInputTa(selectedOption.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            The Staff Usage Factor (Table -4.3)
                        </td>
                        <td className="border pl-16">
                            F
                        </td>
                        <td className="border">
                            <Select
                                options={factorOptions}
                                placeholder="Enter value F(z)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={factorOptions.find(option => option.value === inputFactorFz)}
                                onChange={(selectedOption) => setInputFz(selectedOption.value)}
                            />

                        </td>
                        <td className="border">
                            <Select
                                options={factorOptions}
                                placeholder="Enter value F(a)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={factorOptions.find(option => option.value === inputFactorFa)}
                                onChange={(selectedOption) => setInputFa(selectedOption.value)}
                            />

                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            Area
                        </td>
                        <td className="border pl-16">
                            A
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="A1z"
                                placeholder="Enter value A(z)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="A1a"
                                placeholder="Enter value A(a)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">
                            C     (Contaminant Generation Rate)
                        </td>
                        <td className="border pl-2">
                            P × (100 × n1 + n1 × d1 + n2 × d2)
                        </td>
                        <td className="border pl-16">{calculatedValue}</td>
                        <td className=" border pl-16">{calculatedValueCa}</td>
                        <td className="border"><button onClick={calculateValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                    <tr>
                        <td className=" border border-r-0 p-2">
                            (a) 0.85 x C x E x T
                        </td>
                        <td className="border border-l-0 pl-2">

                        </td>

                        <td className="border pl-16">{calculatedValueAz}</td>
                        <td className="border pl-16">{calculatedValueAa}</td>
                        <td className="border"><button onClick={calculateAValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                    <tr>
                        <td className="border border-r-0 p-2">
                            (b) 2000 x F x T
                        </td>
                        <td className="border border-l-0 pl-2">

                        </td>

                        <td className="border pl-16">{calculatedValueBz}</td>
                        <td className="border pl-16">{calculatedValueBa}</td>
                        <td className="border"><button onClick={calculateBValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                    <tr>
                        <td className="border border-r-0 p-2">
                            (c) 2.5 x A
                        </td>
                        <td className="pl-2">

                        </td>

                        <td className="border pl-16">{calculatedValueC1z}</td>
                        <td className="border pl-16">{calculatedValueC1a}</td>
                        <td className="border"><button onClick={calculateCValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CalculationTable