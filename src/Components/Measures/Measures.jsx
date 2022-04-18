import React, { useMemo, Fragment } from "react";
import Measure from "../Measure/Measure";

const Measures = ({ recipe }) => {
    const measures = useMemo(() => {
        return Object.keys(recipe)
        .filter((it) => it.includes("strMeasure"))
        .map((it) => ({
            measureName: it,
            measure: recipe[it],
        }))
        .filter((it) => it.measure);
    }, [recipe]);
    return (
        <Fragment>
        {measures && (
            <Fragment>
            <ul style={{listStyleType: 'none', paddingLeft: '10px'}}>
                {measures.map((measure) => (
                <Measure key={measure.measureName} measure={measure.measure ?? ''} />
                ))}
            </ul>
            </Fragment>
        )}
        </Fragment>
    );
};

export default Measures;