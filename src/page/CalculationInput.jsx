import { useState } from "react";
import Select from "react-select";


const generateParkingOptions = () => {
    return [
        { value: '0.3', label: 'Residental' },
        { value: '0.5', label: 'Commercial' },
        { value: '0.7', label: 'Retail/food and drink services' },
        { value: '1.0', label: 'Entertainment/sports cnetres' },
        { value: '2.4', label: 'vehicle depots (see Note)' },
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
        { value: '1.0', label: 'No special vehicle population' },
        { value: '2.4', label: 'Diesel vehicles' },
        { value: '1.0', label: 'LPG vehicles' },
        { value: '1.0', label: 'CNG vehicles' },
        { value: '0.1', label: 'Electric powered vehicles' },
        { value: '0.25', label: 'Motorcycles' },
    ]
}

const generateStaffUsageFactor = () => {
    return [
        { value: '1', label: '1' },
        { value: '2', label: '2' }
    ]
}
const CalculationTable = () => {
    const [greatestValueCol1, setGreatestValueCol1] = useState(null);
    const [greatestValueCol2, setGreatestValueCol2] = useState(null);
    const [greatestValueCol3, setGreatestValueCol3] = useState(null);
    const [greatestValueCol4, setGreatestValueCol4] = useState(null);
    const [greatestValueCol5, setGreatestValueCol5] = useState(null);

    const [combinedValueA, setCombinedValueA] = useState(null);
    const [combinedValueB, setCombinedValueB] = useState(null);
    const [combinedValueC, setCombinedValueC] = useState(null);
    const [combinedGreatestValue, setCombinedGreatestValue] = useState(null);


    const [inputFactorFz, setInputFz] = useState('');
    const [inputFactorFa, setInputFa] = useState('');
    const [inputFactorFb, setInputFb] = useState('');
    const [inputFactorFc, setInputFc] = useState('');
    const [inputFactorFd, setInputFd] = useState('');

    const [inputStaffEz, setInputEz] = useState('');
    const [inputStaffEa, setInputEa] = useState('');
    const [inputStaffEb, setInputEb] = useState('');
    const [inputStaffEc, setInputEc] = useState('');
    const [inputStaffEd, setInputEd] = useState('');

    const [inputVTypeTz, setInputTz] = useState('');
    const [inputVTypeTa, setInputTa] = useState('');
    const [inputVTypeTb, setInputTb] = useState('');
    const [inputVTypeTc, setInputTc] = useState('');
    const [inputVTypeTd, setInputTd] = useState('');

    const [inputValuePz, setInputValuePz] = useState('');
    const [inputValuePa, setInputValuePa] = useState('');
    const [inputValuePb, setInputValuePb] = useState('');
    const [inputValuePc, setInputValuePc] = useState('');
    const [inputValuePd, setInputValuePd] = useState('');

    const [calculatedValue, setCalculatedValue] = useState('');
    const [calculatedValueCa, setCalculatedValueCa] = useState('');
    const [calculatedValueCb, setCalculatedValueCb] = useState('');
    const [calculatedValueCc, setCalculatedValueCc] = useState('');
    const [calculatedValueCd, setCalculatedValueCd] = useState('');

    const [calculatedValueAz, setCalculatedValueAz] = useState('');
    const [calculatedValueAa, setCalculatedValueAa] = useState('');
    const [calculatedValueAb, setCalculatedValueAb] = useState('');
    const [calculatedValueAc, setCalculatedValueAc] = useState('');
    const [calculatedValueAd, setCalculatedValueAd] = useState('');

    const [calculatedValueBz, setCalculatedValueBz] = useState('');
    const [calculatedValueBa, setCalculatedValueBa] = useState('');
    const [calculatedValueBb, setCalculatedValueBb] = useState('');
    const [calculatedValueBc, setCalculatedValueBc] = useState('');
    const [calculatedValueBd, setCalculatedValueBd] = useState('');

    const [calculatedValueC1z, setCalculatedValueC1z] = useState('');
    const [calculatedValueC1a, setCalculatedValueC1a] = useState('');
    const [calculatedValueC1b, setCalculatedValueC1b] = useState('');
    const [calculatedValueC1c, setCalculatedValueC1c] = useState('');
    const [calculatedValueC1d, setCalculatedValueC1d] = useState('');

    const parkingOptions = generateParkingOptions();
    const vehicleOptions = generateVehicleTypeFactor();
    const exposureOptions = generateStaffExposureOptions();
    const factorOptions = generateStaffUsageFactor();


    const calculateValues = () => {
        const Pz = parseFloat(inputValuePz.value);
        const Pa = parseFloat(inputValuePa.value);
        const Pb = parseFloat(inputValuePb.value);
        const Pc = parseFloat(inputValuePc.value);
        const Pd = parseFloat(inputValuePd.value);

        const n1z = parseFloat(document.getElementById('n1z').value);
        const n1a = parseFloat(document.getElementById('n1a').value);
        const n1b = parseFloat(document.getElementById('n1b').value);
        const n1c = parseFloat(document.getElementById('n1c').value);
        const n1d = parseFloat(document.getElementById('n1d').value);

        const d1z = parseFloat(document.getElementById('d1z').value);
        const d1a = parseFloat(document.getElementById('d1a').value);
        const d1b = parseFloat(document.getElementById('d1b').value);
        const d1c = parseFloat(document.getElementById('d1c').value);
        const d1d = parseFloat(document.getElementById('d1d').value);

        const n2z = parseFloat(document.getElementById('n2z').value);
        const n2a = parseFloat(document.getElementById('n2a').value);
        const n2b = parseFloat(document.getElementById('n2b').value);
        const n2c = parseFloat(document.getElementById('n2d').value);
        const n2d = parseFloat(document.getElementById('n2a').value);

        const d2z = parseFloat(document.getElementById('d2z').value);
        const d2a = parseFloat(document.getElementById('d2a').value);
        const d2b = parseFloat(document.getElementById('d2b').value);
        const d2c = parseFloat(document.getElementById('d2c').value);
        const d2d = parseFloat(document.getElementById('d2d').value);

        const resultCz = Pz * (100 * n1z + n1z * d1z + n2z * d2z);
        const resultCa = Pa * (100 * n1a + n1a * d1a + n2a * d2a);
        const resultCb = Pb * (100 * n1b + n1b * d1b + n2b * d2b);
        const resultCc = Pc * (100 * n1c + n1c * d1c + n2c * d2c);
        const resultCd = Pd * (100 * n1d + n1d * d1d + n2d * d2d);

        setCalculatedValue(resultCz.toFixed(2));
        setCalculatedValueCa(resultCa.toFixed(2));
        setCalculatedValueCb(resultCb.toFixed(2));
        setCalculatedValueCc(resultCc.toFixed(2));
        setCalculatedValueCd(resultCd.toFixed(2));

        return { resultCa, resultCz, resultCb, resultCc, resultCd }
    };

    const calculateAValues = () => {
        const { resultCz, resultCa, resultCb, resultCc, resultCd } = calculateValues()

        const Ez = parseFloat(inputStaffEz)
        const Ea = parseFloat(inputStaffEa)
        const Eb = parseFloat(inputStaffEb)
        const Ec = parseFloat(inputStaffEc)
        const Ed = parseFloat(inputStaffEd)

        const Tz = parseFloat(inputVTypeTz.value)
        const Ta = parseFloat(inputVTypeTa.value)
        const Tb = parseFloat(inputVTypeTb.value)
        const Tc = parseFloat(inputVTypeTc.value)
        const Td = parseFloat(inputVTypeTd.value)

        const resultA1z = 0.85 * resultCz * Ez * Tz;
        const resultA1a = 0.85 * resultCa * Ea * Ta;
        const resultA1b = 0.85 * resultCb * Eb * Tb;
        const resultA1c = 0.85 * resultCc * Ec * Tc;
        const resultA1d = 0.85 * resultCd * Ed * Td;

        setCalculatedValueAz(resultA1z.toFixed(2))
        setCalculatedValueAa(resultA1a.toFixed(2))
        setCalculatedValueAb(resultA1b.toFixed(2))
        setCalculatedValueAc(resultA1c.toFixed(2))
        setCalculatedValueAd(resultA1d.toFixed(2))

        return { resultA1z, resultA1a, resultA1b, resultA1c, resultA1d }
    }

    const calculateBValues = () => {
        const Fz = parseFloat(inputFactorFz)
        const Fa = parseFloat(inputFactorFa)
        const Fb = parseFloat(inputFactorFb)
        const Fc = parseFloat(inputFactorFc)
        const Fd = parseFloat(inputFactorFd)
        const Tz = parseFloat(inputVTypeTz.value)
        const Ta = parseFloat(inputVTypeTa.value)
        const Tb = parseFloat(inputVTypeTb.value)
        const Tc = parseFloat(inputVTypeTc.value)
        const Td = parseFloat(inputVTypeTd.value)

        const resutlBz = 2000 * Fz * Tz
        const resutlBa = 2000 * Fa * Ta
        const resutlBb = 2000 * Fb * Tb
        const resutlBc = 2000 * Fc * Tc
        const resutlBd = 2000 * Fd * Td

        setCalculatedValueBz(resutlBz.toFixed(2))
        setCalculatedValueBa(resutlBa.toFixed(2))
        setCalculatedValueBb(resutlBb.toFixed(2))
        setCalculatedValueBc(resutlBc.toFixed(2))
        setCalculatedValueBd(resutlBd.toFixed(2))

        return { resutlBz, resutlBa, resutlBb, resutlBc, resutlBd }
    }

    const calculateCValues = () => {
        const Az = parseFloat(document.getElementById("A1z").value)
        const Aa = parseFloat(document.getElementById("A1a").value)
        const Ab = parseFloat(document.getElementById("A1b").value)
        const Ac = parseFloat(document.getElementById("A1c").value)
        const Ad = parseFloat(document.getElementById("A1d").value)

        const resultAz = 2.5 * Az
        const resultAa = 2.5 * Aa
        const resultAb = 2.5 * Ab
        const resultAc = 2.5 * Ac
        const resultAd = 2.5 * Ad

        setCalculatedValueC1z(resultAz.toFixed(2))
        setCalculatedValueC1a(resultAa.toFixed(2))
        setCalculatedValueC1b(resultAb.toFixed(2))
        setCalculatedValueC1c(resultAc.toFixed(2))
        setCalculatedValueC1d(resultAd.toFixed(2))

        return { resultAz, resultAa, resultAb, resultAc, resultAd }
    }

    const calculategreatesValue = () => {
        const { resultA1a, resultA1z, resultA1b, resultA1c, resultA1d } = calculateAValues();
        const { resutlBa, resutlBz, resutlBb, resutlBc, resutlBd } = calculateBValues();
        const { resultAa, resultAz, resultAb, resultAc, resultAd } = calculateCValues();
        const col1 = Math.max(resultA1z, resutlBz, resultAz)
        const col2 = Math.max(resultA1a, resutlBa, resultAa);
        const col3 = Math.max(resultA1b, resutlBb, resultAb);
        const col4 = Math.max(resultA1c, resutlBc, resultAc);
        const col5 = Math.max(resultA1d, resutlBd, resultAd);

        setGreatestValueCol1(col1);
        setGreatestValueCol2(col2);
        setGreatestValueCol3(col3);
        setGreatestValueCol4(col4);
        setGreatestValueCol5(col5);
    };

    const calculateCombinedGreatestValue = () => {
        const { resultA1a, resultA1z, resultA1b, resultA1c, resultA1d } = calculateAValues();
        const { resutlBa, resutlBz, resutlBb, resutlBc, resutlBd } = calculateBValues();
        const { resultAa, resultAz, resultAb, resultAc, resultAd } = calculateCValues();

        const sumForA = resultA1a + resultA1z + resultA1b + resultA1c + resultA1d
        const sumForB = resutlBa + resutlBz + resutlBb + resutlBc + resutlBd
        const sumForC = resultAa + resultAz + resultAb + resultAc + resultAd

        const combinedGreastedVal = Math.max(sumForA, sumForB, sumForC)

        setCombinedValueA(sumForA);
        setCombinedValueB(sumForB);
        setCombinedValueC(sumForC);
        setCombinedGreatestValue(combinedGreastedVal)
        console.log(combinedGreastedVal, 'greates value');
        return combinedGreastedVal
    }

    return (
        <div>
            <div className="text-lg font-bold text-center pt-16">
                Car Park Ventilation Calculation
            </div>
            <div className="text-sm font-bold text-center ">
                Based On AS 1668.2 - 2012
            </div>
            <div className="content-center">
                <table className="border border-collapse mt-4 text-sm mx-auto ">
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
                        <th className="border px-10">
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
                        <td className="border">
                            <input
                                type="number"
                                id="n1b"
                                placeholder="Enter value n1(b)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n1c"
                                placeholder="Enter value n1(c)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n1d"
                                placeholder="Enter value n1(d)"
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
                        <td className="border">
                            <input
                                type="number"
                                id="n2b"
                                placeholder="Enter value n2(b)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n2c"
                                placeholder="Enter value n2(c)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="n2d"
                                placeholder="Enter value n2(d)"
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
                                value={parkingOptions.find(option => option.label === inputValuePz)}
                                onChange={(selectedOption) => setInputValuePz(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
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
                                onChange={(selectedOption) => setInputValuePa(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={parkingOptions}
                                placeholder="Enter value p(b)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                    }),
                                }}
                                value={parkingOptions.find(option => option.value === inputValuePb)}
                                onChange={(selectedOption) => setInputValuePb(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={parkingOptions}
                                placeholder="Enter value p(c)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                    }),
                                }}
                                value={parkingOptions.find(option => option.value === inputValuePc)}
                                onChange={(selectedOption) => setInputValuePc(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={parkingOptions}
                                placeholder="Enter value p(d)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                    }),
                                }}
                                value={parkingOptions.find(option => option.value === inputValuePd)}
                                onChange={(selectedOption) => setInputValuePd(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
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
                        <td className="border">
                            <input
                                type="number"
                                id="d1b"
                                placeholder="Enter value d1(b)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d1c"
                                placeholder="Enter value d1(c)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d1d"
                                placeholder="Enter value d1(d)"
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
                        <td className="border">
                            <input
                                type="number"
                                id="d2b"
                                placeholder="Enter value d2(b)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d2c"
                                placeholder="Enter value d2(c)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="d2d"
                                placeholder="Enter value d2(d)"
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
                        <td className="border">
                            <Select
                                options={exposureOptions}
                                placeholder="Enter value E(b)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={exposureOptions.find(option => option.value === inputStaffEb)}
                                onChange={(selectedOption) => setInputEb(selectedOption.value)}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={exposureOptions}
                                placeholder="Enter value E(c)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={exposureOptions.find(option => option.value === inputStaffEc)}
                                onChange={(selectedOption) => setInputEc(selectedOption.value)}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={exposureOptions}
                                placeholder="Enter value E(d)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={exposureOptions.find(option => option.value === inputStaffEd)}
                                onChange={(selectedOption) => setInputEd(selectedOption.value)}
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
                                onChange={(selectedOption) => setInputTz(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={vehicleOptions}
                                placeholder="Enter value T(a)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={vehicleOptions.find(option => option.value === inputVTypeTa)}
                                onChange={(selectedOption) => setInputTa(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={vehicleOptions}
                                placeholder="Enter value T(b)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={vehicleOptions.find(option => option.value === inputVTypeTb)}
                                onChange={(selectedOption) => setInputTb(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={vehicleOptions}
                                placeholder="Enter value T(c)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={vehicleOptions.find(option => option.value === inputVTypeTc)}
                                onChange={(selectedOption) => setInputTc(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={vehicleOptions}
                                placeholder="Enter value T(d)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={vehicleOptions.find(option => option.value === inputVTypeTd)}
                                onChange={(selectedOption) => setInputTd(selectedOption)}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
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
                        <td className="border">
                            <Select
                                options={factorOptions}
                                placeholder="Enter value F(b)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={factorOptions.find(option => option.value === inputFactorFb)}
                                onChange={(selectedOption) => setInputFb(selectedOption.value)}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={factorOptions}
                                placeholder="Enter value F(c)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={factorOptions.find(option => option.value === inputFactorFc)}
                                onChange={(selectedOption) => setInputFc(selectedOption.value)}
                            />
                        </td>
                        <td className="border">
                            <Select
                                options={factorOptions}
                                placeholder="Enter value F(d)"
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: ' rgb(248 250 252 / var(--tw-bg-opacity))',
                                        borderColor: 'transparent',
                                        alignContent: 'center'
                                    }),
                                }}
                                value={factorOptions.find(option => option.value === inputFactorFd)}
                                onChange={(selectedOption) => setInputFd(selectedOption.value)}
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
                        <td className="border">
                            <input
                                type="number"
                                id="A1b"
                                placeholder="Enter value A(b)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="A1c"
                                placeholder="Enter value A(c)"
                                className="w-full py-2 pl-6 bg-slate-50"
                            />
                        </td>
                        <td className="border">
                            <input
                                type="number"
                                id="A1d"
                                placeholder="Enter value A(d)"
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
                        <td className="border pl-16 text-gray-600"> {isNaN(parseFloat(calculatedValue)) ? "Result" : `${parseFloat(calculatedValue)} L/s`}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueCa !== '' ? `${calculatedValueCa} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueCb !== '' ? `${calculatedValueCb} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueCc !== '' ? `${calculatedValueCc} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueCd !== '' ? `${calculatedValueCd} L/s` : "Result"}</td>
                        <td className="border"><button onClick={calculateValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                    <tr>
                        <td className=" border border-r-0 p-2">
                            (a) 0.85 x C x E x T
                        </td>
                        <td className="border border-l-0 pl-2">
                        </td>
                        <td className="border pl-16 text-gray-600">{calculatedValueAz !== '' ? `${calculatedValueAz} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueAa !== '' ? `${calculatedValueAa} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueAb !== '' ? `${calculatedValueAb} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueAc !== '' ? `${calculatedValueAc} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueAd !== '' ? `${calculatedValueAd} L/s` : "Result"}</td>
                        <td className="border"><button onClick={calculateAValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                    <tr>
                        <td className="border border-r-0 p-2">
                            (b) 2000 x F x T
                        </td>
                        <td className="border border-l-0 pl-2">
                        </td>
                        <td className="border pl-16 text-gray-600">{calculatedValueBz !== '' ? `${calculatedValueBz} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueBa !== '' ? `${calculatedValueBa} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueBb !== '' ? `${calculatedValueBb} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueBc !== '' ? `${calculatedValueBc} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueBd !== '' ? `${calculatedValueBd} L/s` : "Result"}</td>
                        <td className="border"><button onClick={calculateBValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                    <tr>
                        <td className="border border-r-0 p-2">
                            (c) 2.5 x A
                        </td>
                        <td className="pl-2">
                        </td>
                        <td className="border pl-16 text-gray-600">{calculatedValueC1z !== '' ? `${calculatedValueC1z} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueC1a !== '' ? `${calculatedValueC1a} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueC1b !== '' ? `${calculatedValueC1b} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueC1c !== '' ? `${calculatedValueC1c} L/s` : "Result"}</td>
                        <td className="border pl-16 text-gray-600">{calculatedValueC1d !== '' ? `${calculatedValueC1d} L/s` : "Result"}</td>
                        <td className="border"><button onClick={calculateCValues} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Calculate</button></td>
                    </tr>
                </table>
            </div>
            <div className="flex gap-36">
                <div className="pt-10">
                    <button onClick={calculategreatesValue} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Click to Show Greatest Value for each column</button>
                    <p className="pt-2">Design should be based on  {greatestValueCol1 !== null ? `${greatestValueCol1.toFixed(2)} L/s for column 1` : "Result"}</p>
                    <p>Design should be based on  {greatestValueCol2 !== null ? `${greatestValueCol2.toFixed(2)} L/s for column 2` : "Result"}</p>
                    <p>Design should be based on  {greatestValueCol3 !== null ? `${greatestValueCol3.toFixed(2)} L/s for column 3` : "Result"}</p>
                    <p>Design should be based on  {greatestValueCol4 !== null ? `${greatestValueCol4.toFixed(2)} L/s for column 4` : "Result"}</p>
                    <p>Design should be based on  {greatestValueCol5 !== null ? `${greatestValueCol5.toFixed(2)} L/s for column 5` : "Result"}</p>
                </div>
                <div className="pt-10">
                    <button onClick={calculateCombinedGreatestValue} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Click to Show Combined Value for a b and c</button>
                    <p className="pt-2">Combined value for a: {combinedValueA !== null ? `${combinedValueA.toFixed(2)} L/s` : "Result"}</p>
                    <p>Combined value for b: {combinedValueB !== null ? `${combinedValueB.toFixed(2)} L/s` : "Result"}</p>
                    <p>Combined value for c: {combinedValueC !== null ? `${combinedValueC.toFixed(2)} L/s` : "Result"}</p>
                    <p className="pt-4">Greatest value among a b and c: {combinedGreatestValue !== null ? `${combinedGreatestValue.toFixed(2)} L/s` : "Result"}</p>
                </div>
            </div>
        </div>
    )
}

export default CalculationTable