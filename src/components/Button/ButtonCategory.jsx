import { Button } from 'antd'

function ButtonCategory({category, data, setCategory}) {
    return (
        <Button
            className="mr-4"
            type="primary"
            danger={category === data.type}
            shape="round"
            size="small"
            onClick={() => setCategory(data.type)}
        >
            {data.title}
        </Button>
    )
}

export default ButtonCategory;
