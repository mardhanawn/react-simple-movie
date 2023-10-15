import { Avatar, Card } from 'antd'
import { color } from '../../utility/GlobalConst'

const { Meta } = Card

function CardReview({ author, date, content }) {
    return (
        <Card bordered={false} className="mb-4" hoverable="true">
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={author}
                description={date}
            />
            <div style={{ color: color.white, backgroundColor: color.darkgrey }}>
                <p className="p-4">{content}</p>
            </div>
        </Card>
    )
}

export default CardReview
