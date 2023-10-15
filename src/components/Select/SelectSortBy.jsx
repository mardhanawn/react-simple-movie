import { Select } from 'antd'

function SelectSortBy(props) {
    return (
        <Select
            defaultValue="popularasc"
            style={{
                width: '90%',
            }}
            options={[
                {
                    value: 'popularasc',
                    label: 'Popularity Ascending',
                },
                {
                    value: 'populardesc',
                    label: 'Popularity Descending',
                },
                {
                    value: 'releasedateasc',
                    label: 'Release Date Ascending',
                },
                {
                    value: 'releasedatedesc',
                    label: 'Release Date Descending',
                },
                {
                    value: 'ratingasc',
                    label: 'Rating Ascending',
                },
                {
                    value: 'ratingdesc',
                    label: 'Rating Descending',
                },
            ]}
            {...props}
        />
    )
}

export default SelectSortBy
