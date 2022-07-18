import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import styled from 'styled-components'


const options = [
    { value: 'Iphone' },
    { value: 'Samsung' },
    { value: 'Oppo' },
    { value: 'Xiaomi' },
    { value: 'Redmi' },

];

const InputSearch = () => {
    return (
        <AutoCompleteCustom
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={400}
            options={options}
            filterOption={(inputValue, option) => {
                 return option!.value.toUpperCase().includes(inputValue.toUpperCase())
            }}
        >
            <Inputcustom size="large" placeholder="Iphone,Samsung,Oppo..." prefix={<SearchOutlined />} />
        </AutoCompleteCustom>
    )
}

const AutoCompleteCustom = styled(AutoComplete)`
    width: 550px;
    border: none;
`

const Inputcustom = styled(Input)`
    border-radius:10px ;
`

export default InputSearch;