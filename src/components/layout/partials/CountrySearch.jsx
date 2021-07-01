import React, { useEffect, useState} from 'react';
import DropSelect from './DropSelect';

const CountrySearch = ({ options, defaultValue, selected }) => {

    const getOptions = () => {
        return options;
    }

    const getDefault = () => {
        if(defaultValue && typeof(defaultValue === 'object')) {

            // const index = options ? options().findIndex( x => x.value === defaultValue.id)

        return defaultValue;
    
    }else if (defaultValue && typeof(defaultValue === 'number')) {
        return options ? options()[defaultValue] : null;
    }
}

    const onSelectChange = (val) => {
        return selected(val)
    }

    return (
        <>
            <DropSelect
                options = {options}
                optionDisplayImage={true}
                optionDisplayLabel={true}
                optionDisplayLeft={true}
                controlDisplayImage={true}
                controlDisplayLabel={false}
                controlDisplayLeft={true}
                onChange={(item) => onSelectChange(item)}
                defaultValue={getDefault(5)}
            />
            
        </>

    )
}

export default CountrySearch;
