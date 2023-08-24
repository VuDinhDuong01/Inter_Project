import omit from 'lodash/omit'
import { useTranslation } from "react-i18next";
import { SetStateAction, useEffect, useMemo } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import { fakeDataType, fakeDataGroup, fakeDataLocation } from '../../api/Data'
import { InputCheckRadio } from '../InputCheckRadio/InputCheckRadio';
import { Button } from '../Button/Button';
import { useQuery } from '~/hook/useQuery';
import { fetchJobs } from '~/stores/JobApi';
import { Path } from '~/contants/Path';
import { DataType, QueryType } from '~/types/query.type'
import { useAppDispatch } from '~/stores/store';

interface FilterType {
    checkedRadioGroup: string
    setCheckedRadioGroup: React.Dispatch<SetStateAction<string>>
    checkedRadioType: string
    setCheckedRadioType: React.Dispatch<SetStateAction<string>>
    checkedRadioLocation: string
    setCheckedRadioLocation: React.Dispatch<SetStateAction<string>>
}
export const Filter = ({ checkedRadioGroup, setCheckedRadioGroup, checkedRadioType, setCheckedRadioType, checkedRadioLocation, setCheckedRadioLocation }: FilterType) => {

    const dispatch = useAppDispatch();
    const query: QueryType = useQuery()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const nameGroup = useMemo(() => {
        return fakeDataGroup.find(item => item.id === checkedRadioGroup) as DataType
    }, [checkedRadioGroup])
    const nameLocation = useMemo(() => {
        return fakeDataLocation.find(item => item.id === checkedRadioLocation) as DataType
    }, [checkedRadioLocation])
    const nameType = useMemo(() => {
        return fakeDataType.find(item => item.id === checkedRadioType) as DataType
    }, [checkedRadioType])

    const handleFilterJob = () => {
        navigate({
            pathname: Path.jobOpportunity,
            search: createSearchParams(omit({
                ...query,
                location: nameLocation?.name,
                type: nameType?.name,
                group: nameGroup?.name,
            }, ['name'])).toString()
        })
    }

    useEffect(() => {
        dispatch(fetchJobs(query))
    }, [query.group, query.location, query.type, query.page])

    return (
        <div>
            <div className="w-full flex justify-between">
                <div>
                    <div className="mb-[32px]">
                        <h2 className="text-black font-FontSan text-[20px] font-[700] leading-[28px] lg:mb-[4px] mb-[10px]">{t('jobOpportunity.workingGroup')}</h2>
                        {
                            fakeDataGroup.map(item =>
                                <InputCheckRadio
                                    item={item}
                                    key={item.id}
                                    onChange={() => setCheckedRadioGroup(item.id)}
                                    checkedRadio={checkedRadioGroup}
                                />
                            )
                        }
                    </div>
                    <div className="mb-[32px]">
                        <h2 className="text-black font-FontSan lg:mb-[4px] mb-[10px] text-[20px] font-[700] leading-[28px]">{t('jobOpportunity.workLocation')}</h2>
                        {
                            fakeDataLocation.map(item =>
                                <InputCheckRadio
                                    item={item}
                                    key={item.id}
                                    onChange={() => setCheckedRadioLocation(item.id)}
                                    checkedRadio={checkedRadioLocation}
                                />
                            )
                        }
                    </div>
                    <div>
                        <h2 className="text-black font-FontSan lg:mb-[4px] mb-[10px] text-[20px] font-[700] leading-[28px]">{t('jobOpportunity.typeOfWork')}</h2>
                        {
                            fakeDataType.map(item =>
                                <InputCheckRadio
                                    item={item}
                                    key={item.id}
                                    onChange={() => setCheckedRadioType(item.id)}
                                    checkedRadio={checkedRadioType}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="w-[1px] bg-green lg:flex hidden "></div>
            </div>
            <Button className='custom-class-button-filter-job' onClick={handleFilterJob}>{t('jobOpportunity.applyFilter')}</Button>
        </div>
    )
}
